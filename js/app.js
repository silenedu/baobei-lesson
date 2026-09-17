/* ============================================================
 * 家庭备课宝典 · 应用逻辑
 * 纯原生 JS，无构建步骤。配合 js/data.js 的 CURRICULUM 使用。
 * ============================================================ */
(function () {
  "use strict";

  var C = window.CURRICULUM;
  var META = window.SECTION_META;
  var STORE_KEY = "flb_state_v1";

  /* ---------- 状态 ---------- */
  var state = loadState();
  function loadState() {
    try { return JSON.parse(localStorage.getItem(STORE_KEY)) || {}; }
    catch (e) { return {}; }
  }
  function saveState() {
    try { localStorage.setItem(STORE_KEY, JSON.stringify(state)); } catch (e) {}
  }
  state.curDay = state.curDay || 0;
  state.completed = state.completed || {};   // {dayIdx:{itemIdx:true}}
  state.practice = state.practice || {};      // {dayIdx:true}
  state.cards = state.cards || {};            // {dayIdx:true}
  state.notes = state.notes || {};            // {dayIdx:"text"}

  /* ---------- 工具 ---------- */
  // 儿童友好：拼音中的字母 a 渲染为 ɑ（U+0251）
  function kidA(s) { return (s || "").replace(/a/g, "ɑ"); }
  function esc(s) {
    return String(s == null ? "" : s).replace(/[&<>"]/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c];
    });
  }
  function $(sel, root) { return (root || document).querySelector(sel); }
  function $all(sel, root) { return Array.prototype.slice.call((root || document).querySelectorAll(sel)); }
  function shuffle(arr) {
    var a = arr.slice();
    for (var i = a.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var t = a[i]; a[i] = a[j]; a[j] = t;
    }
    return a;
  }

  /* ---------- TTS 朗读 ---------- */
  function speak(text) {
    if (!("speechSynthesis" in window) || !text) return;
    try {
      window.speechSynthesis.cancel();
      var u = new SpeechSynthesisUtterance(text);
      u.lang = "zh-CN"; u.rate = 0.85; u.pitch = 1.05;
      window.speechSynthesis.speak(u);
    } catch (e) {}
  }

  /* ---------- 视图切换 ---------- */
  var viewEl = $("#view");
  var currentView = "today";

  function setView(v) {
    currentView = v;
    $all(".tab").forEach(function (b) { b.classList.toggle("active", b.dataset.view === v); });
    if (v === "today") renderToday();
    else if (v === "overview") renderOverview();
    else if (v === "cards") renderCards();
    else if (v === "notes") renderNotes();
    window.scrollTo(0, 0);
  }

  function renderDayStrip() {
    var strip = $("#dayStrip");
    var html = "";
    for (var i = 0; i < C.length; i++) {
      var done = isDayDone(i);
      html += '<button class="day-chip' + (i === state.curDay ? " active" : "") +
        (done ? " done" : "") + '" data-day="' + i + '"><span>' + (i + 1) +
        '</span><span class="dot"></span></button>';
    }
    strip.innerHTML = html;
    $all(".day-chip", strip).forEach(function (b) {
      b.onclick = function () {
        state.curDay = +b.dataset.day; saveState();
        renderDayStrip();
        if (currentView === "cards") renderCards();
        else if (currentView === "notes") renderNotes();
        else renderToday();
      };
    });
    // 滚到当前
    var active = $(".day-chip.active", strip);
    if (active) active.scrollIntoView({ inline: "center", block: "nearest" });
  }

  function isDayDone(dayIdx) {
    var d = C[dayIdx]; var comp = state.completed[dayIdx] || {};
    for (var i = 0; i < d.items.length; i++) if (!comp[i]) return false;
    return true;
  }

  /* ---------- 今日课表 ---------- */
  function renderToday() {
    var d = C[state.curDay];
    var comp = state.completed[state.curDay] || {};
    var doneCount = d.items.filter(function (_, i) { return comp[i]; }).length;

    var hero = '' +
      '<div class="day-hero">' +
        '<div class="dh-top">' +
          '<span class="dh-emoji">🗓️</span>' +
          '<div><div class="dh-date">' + esc(d.date) + '</div>' +
          '<div class="dh-theme">' + esc(d.theme) + '</div></div>' +
        '</div>' +
        '<div class="dh-stats">' +
          '<span class="stat-pill">板块 <b>' + d.items.length + '</b></span>' +
          '<span class="stat-pill">练习 <b>' + d.practice.length + '</b> 题</span>' +
          '<span class="stat-pill">字卡 <b>' + d.flashcards.length + '</b> 张</span>' +
          '<span class="stat-pill">已完成 <b>' + doneCount + '/' + d.items.length + '</b></span>' +
        '</div>' +
      '</div>';

    var grid = '<div class="sec-grid">';
    d.items.forEach(function (it, idx) {
      var m = META[it.type];
      var done = !!comp[idx];
      grid += '' +
        '<div class="sec-card' + (done ? " done" : "") + '" data-item="' + idx + '">' +
          '<div class="sc-done" data-done="' + idx + '">' + (done ? "✓" : "") + '</div>' +
          '<div class="sc-head"><span class="sc-icon">' + m.icon + '</span>' +
            '<span class="sc-name">' + m.name + '</span></div>' +
          '<div class="sc-title">' + esc(it.title || "") + '</div>' +
        '</div>';
    });
    grid += '</div>';

    var pDone = state.practice[state.curDay] ? " ✓ 已练" : "";
    var cDone = state.cards[state.curDay] ? " ✓ 已翻" : "";
    var actions = '' +
      '<div class="action-row">' +
        '<button class="btn-action btn-prac" data-act="practice"><span class="ba-emoji">📝</span>开始练习' + pDone + '</button>' +
        '<button class="btn-action btn-card" data-act="cards"><span class="ba-emoji">🃏</span>翻字卡' + cDone + '</button>' +
      '</div>';

    viewEl.innerHTML = hero + grid + actions;

    // 完成勾选
    $all(".sc-done", viewEl).forEach(function (el) {
      el.onclick = function (e) {
        e.stopPropagation();
        var i = +el.dataset.done;
        state.completed[state.curDay] = state.completed[state.curDay] || {};
        state.completed[state.curDay][i] = !state.completed[state.curDay][i];
        saveState(); renderToday(); renderDayStrip();
      };
    });
    // 打开课件
    $all(".sec-card", viewEl).forEach(function (el) {
      el.onclick = function () { openCourseware(state.curDay, +el.dataset.item); };
    });
    $("[data-act='practice']", viewEl).onclick = function () { startPractice(state.curDay); };
    $("[data-act='cards']", viewEl).onclick = function () { setView("cards"); };
  }

  /* ---------- 课程总览 ---------- */
  function renderOverview() {
    var html = '<h2 style="margin:4px 2px 14px;font-size:19px;">全部课程 · 共 ' + C.length + ' 天</h2>';
    C.forEach(function (d, i) {
      var comp = state.completed[i] || {};
      var done = d.items.filter(function (_, k) { return comp[k]; }).length;
      var pct = Math.round((done / d.items.length) * 100);
      var emoji = sectionEmoji(d);
      html += '' +
        '<div class="ov-card" data-day="' + i + '">' +
          '<div class="ov-emoji">' + emoji + '</div>' +
          '<div class="ov-mid">' +
            '<div class="ov-theme">' + esc(d.date) + ' · ' + esc(d.theme) + '</div>' +
            '<div class="ov-meta">' + d.items.length + ' 板块 · ' + d.practice.length + ' 题 · ' + d.flashcards.length + ' 字卡</div>' +
            '<div class="ov-bar"><i style="width:' + pct + '%"></i></div>' +
          '</div>' +
          '<div class="ov-pct">' + pct + '%</div>' +
        '</div>';
    });
    viewEl.innerHTML = html;
    $all(".ov-card", viewEl).forEach(function (el) {
      el.onclick = function () {
        state.curDay = +el.dataset.day; saveState();
        setView("today"); renderDayStrip();
      };
    });
  }
  function sectionEmoji(d) {
    var seen = {};
    d.items.forEach(function (it) { seen[it.type] = true; });
    var keys = Object.keys(seen);
    return keys.slice(0, 3).map(function (k) { return META[k].icon; }).join("") || "📚";
  }

  /* ---------- 课件弹层 ---------- */
  function openCourseware(dayIdx, itemIdx) {
    var it = C[dayIdx].items[itemIdx];
    var m = META[it.type];
    var mask = $("#modal"), card = $("#modalCard");
    var head = '' +
      '<div class="modal-head">' +
        '<span class="mh-icon">' + m.icon + '</span>' +
        '<div class="mh-title">' + esc(it.title || m.name) + '</div>' +
        '<button class="mh-close" data-close>✕</button>' +
      '</div>';
    var body = renderItem(it);
    var tip = it.tip ? '<div class="tip-box"><b>👩‍🏫 备课提示：</b>' + esc(it.tip) + '</div>' : "";
    var speakLine = speakTextFor(it);
    var speakBtn = speakLine ? '<button class="speak-btn" data-speak="' + esc(speakLine) + '">🔊 朗读</button>' : "";
    card.innerHTML = head + '<div style="display:flex;justify-content:flex-end;margin-bottom:6px;">' + speakBtn + '</div>' + body + tip;
    mask.hidden = false;

    $("[data-close]", card).onclick = closeModal;
    mask.onclick = function (e) { if (e.target === mask) closeModal(); };
    var sb = $("[data-speak]", card);
    if (sb) sb.onclick = function () { speak(sb.dataset.speak); };
  }
  function closeModal() { $("#modal").hidden = true; window.speechSynthesis && window.speechSynthesis.cancel(); }

  function speakTextFor(it) {
    if (it.type === "gushi" || it.type === "tongyao") return (it.title || "") + "。" + (it.lines || []).join("");
    if (it.type === "chengyu") return it.title + "。" + (it.story || "");
    if (it.type === "shenhua") return it.title + "。" + (it.story || "");
    if (it.type === "meiwen") return (it.excerpt || "");
    if (it.type === "chuantong") return (it.intro || "");
    if (it.type === "hanzi") return (it.chars || []).map(function (c) { return c.char; }).join(" ");
    return "";
  }

  /* ---------- 课件渲染（按类型） ---------- */
  function renderItem(it) {
    switch (it.type) {
      case "tongyao": return renderTongyao(it);
      case "gushi": return renderGushi(it);
      case "chengyu": return renderChengyu(it);
      case "hanzi": return renderHanzi(it);
      case "chuantong": return renderChuantong(it);
      case "meiwen": return renderMeiwen(it);
      case "shenhua": return renderShenhua(it);
      default: return esc(JSON.stringify(it));
    }
  }

  function poemHTML(lines, py) {
    var h = '<div class="poem">';
    for (var i = 0; i < lines.length; i++) {
      h += '<span class="pline">' + esc(lines[i]) + '</span>';
      if (py && py[i]) h += '<span class="ppy">' + kidA(esc(py[i])) + '</span>';
    }
    return h + '</div>';
  }

  function renderTongyao(it) {
    return '<div class="label">🎵 童谣·正文</div>' + poemHTML(it.lines, it.py) +
      (it.author ? '<div class="ov-meta" style="margin-top:8px;">—— ' + esc(it.author) + '</div>' : "");
  }

  function renderGushi(it) {
    return '<div class="label">📜 古诗·' + esc(it.dynasty || "") + '·' + esc(it.author || "") + '</div>' +
      poemHTML(it.lines, it.py) +
      '<div class="label">意译</div><div class="gushi-yi">' + esc(it.yi || "") + '</div>' +
      '<div class="label">赏析</div><div class="gushi-yi">' + esc(it.shangxi || "") + '</div>';
  }

  function renderChengyu(it) {
    var h = '<div class="label">🎯 成语</div>' +
      '<div class="gushi-yi" style="font-size:18px;font-weight:800;color:var(--primary-d);">' +
      esc(it.title) + (it.pinyin && it.pinyin !== "（复习）" ? ' <span style="font-size:14px;color:var(--accent-d);">' + kidA(esc(it.pinyin)) + '</span>' : "") + '</div>' +
      '<div class="label">故事</div><div class="story">' + esc(it.story || "") + '</div>' +
      '<div class="label">寓意</div><div class="gushi-yi">' + esc(it.yuyi || "") + '</div>';
    if (it.chuchu) h += '<div class="ov-meta" style="margin-top:6px;">📚 出处：' + esc(it.chuchu) + '</div>';
    return h;
  }

  function renderHanzi(it) {
    var h = "";
    (it.chars || []).forEach(function (c) {
      h += '<div class="char-box">' +
        '<div class="char-big">' + esc(c.char) + '</div>' +
        '<div class="char-info">' +
          '<div class="ci-py">' + kidA(esc(c.pinyin)) + '</div>' +
          '<div class="ci-meta">部首：' + esc(c.radical) + ' · ' + (c.strokes) + ' 画</div>' +
          '<div class="ci-theory">' + esc(c.theory) + '</div>' +
        '</div></div>';
      if (c.words && c.words.length) {
        h += '<div class="label">组词</div><div class="word-row">';
        c.words.forEach(function (w) { h += '<span class="word-tag">' + esc(w) + '</span>'; });
        h += '</div>';
      }
    });
    return h;
  }

  function renderChuantong(it) {
    var h = '<div class="label">🏮 介绍</div><div class="intro">' + esc(it.intro || "") + '</div>';
    if (it.customs && it.customs.length) {
      h += '<div class="label">习俗</div><div class="chips">';
      it.customs.forEach(function (x) { h += '<span class="chip">' + esc(x) + '</span>'; });
      h += '</div>';
    }
    if (it.poem) h += '<div class="label">相关诗句</div><div class="gushi-yi" style="font-family:var(--kai);font-size:18px;">' + esc(it.poem) + '</div>';
    return h;
  }

  function renderMeiwen(it) {
    return '<div class="label">📖 选段 · ' + esc(it.author || "") + '</div>' +
      '<div class="excerpt" style="font-family:var(--kai);font-size:19px;line-height:1.8;">' + esc(it.excerpt || "") + '</div>' +
      (it.guide ? '<div class="label">朗读指导</div><div class="gushi-yi">' + esc(it.guide) + '</div>' : "") +
      (it.shangxi ? '<div class="label">赏析</div><div class="gushi-yi">' + esc(it.shangxi) + '</div>' : "");
  }

  function renderShenhua(it) {
    var h = '<div class="label">🌟 人物</div><div class="gushi-yi" style="font-weight:700;">' + esc(it.figure || "") + '</div>' +
      '<div class="label">故事</div><div class="story">' + esc(it.story || "") + '</div>' +
      '<div class="label">文化意义</div><div class="gushi-yi">' + esc(it.meaning || "") + '</div>';
    return h;
  }

  /* ---------- 练习引擎 ---------- */
  function startPractice(dayIdx) {
    var qs = C[dayIdx].practice;
    var idx = 0, correct = 0;
    var mask = document.createElement("div");
    mask.className = "quiz-mask";
    mask.innerHTML = '<div class="quiz-top"><div class="quiz-prog"><i id="qProg"></i></div>' +
      '<div class="quiz-meta"><span id="qNum"></span><span>每日练习 · 共 ' + qs.length + ' 题</span></div></div>' +
      '<div class="quiz-body" id="qBody"></div>';
    document.body.appendChild(mask);

    function finish() {
      state.practice[dayIdx] = true; saveState(); renderDayStrip();
      var ratio = correct / qs.length;
      var stars = ratio >= 0.9 ? "⭐⭐⭐" : ratio >= 0.6 ? "⭐⭐" : "⭐";
      var msg = ratio >= 0.9 ? "太棒了！今天的内容掌握得牢牢的～" :
        ratio >= 0.6 ? "不错哦，再复习一下薄弱点就更稳啦！" : "别急，陪孩子再读一遍课件就好～";
      $("#qBody").innerHTML = '<div class="result">' +
        '<div class="r-stars">' + stars + '</div>' +
        '<div class="r-score">答对 ' + correct + ' / ' + qs.length + ' 题</div>' +
        '<div class="r-msg">' + msg + '</div>' +
        '<button class="btn-solid" id="rAgain" style="margin-right:10px;">再做一次</button>' +
        '<button class="btn-ghost" id="rBack">返回课表</button></div>';
      $("#qProg").style.width = "100%";
      $("#rAgain").onclick = function () { document.body.removeChild(mask); startPractice(dayIdx); };
      $("#rBack").onclick = function () { document.body.removeChild(mask); setView("today"); };
    }

    function afterAnswer(isRight) {
      if (isRight) correct++;
      var next = $("#qNext");
      next.style.display = "block";
      if (idx + 1 < qs.length) next.textContent = "下一题 →";
      else next.textContent = "查看结果 🎉";
      next.onclick = function () {
        idx++;
        if (idx < qs.length) renderQ(); else finish();
      };
    }

    function renderQ() {
      var q = qs[idx];
      $("#qNum").textContent = "第 " + (idx + 1) + " 题";
      $("#qProg").style.width = (idx / qs.length * 100) + "%";
      var body = $("#qBody");
      body.innerHTML = "";
      var typeName = { choice: "选择题", fill: "填空题", match: "连线题", judge: "判断题" }[q.type] || "练习";
      var wrap = document.createElement("div");
      wrap.innerHTML = '<span class="q-type-tag">' + typeName + '</span><div class="q-text">' + esc(q.q) + '</div>';
      body.appendChild(wrap);

      if (q.type === "choice") buildChoice(body, q, afterAnswer);
      else if (q.type === "fill") buildFill(body, q, afterAnswer);
      else if (q.type === "judge") buildJudge(body, q, afterAnswer);
      else if (q.type === "match") buildMatch(body, q, afterAnswer);

      // 统一的"下一题/看结果"按钮，所有题型共用
      var nb = document.createElement("button");
      nb.className = "btn-solid q-next"; nb.id = "qNext"; nb.style.display = "none";
      body.appendChild(nb);
    }

    renderQ();
  }

  function showExplain(container, q, isRight) {
    var ex = $(".explain", container) || (function () {
      var e = document.createElement("div"); e.className = "explain"; container.appendChild(e); return e;
    })();
    ex.className = "explain show";
    ex.innerHTML = (isRight ? "✅ <b>答对啦！</b> " : "💡 <b>解析：</b>") + esc(q.explain || "");
  }

  function buildChoice(body, q, after) {
    var list = document.createElement("div"); list.className = "opt-list";
    var keys = ["A", "B", "C", "D", "E"];
    q.options.forEach(function (opt, i) {
      var b = document.createElement("button"); b.className = "opt";
      b.innerHTML = '<span class="opt-key">' + keys[i] + '</span><span>' + esc(opt) + '</span>';
      b.onclick = function () {
        if (list.classList.contains("locked")) return;
        list.classList.add("locked");
        var right = (opt === q.answer);
        $all(".opt", list).forEach(function (o) {
          if (o.textContent.indexOf(q.answer) >= 0) o.classList.add("correct");
        });
        if (!right) b.classList.add("wrong");
        showExplain(body, q, right);
        after(right);
      };
      list.appendChild(b);
    });
    body.appendChild(list);
  }

  function buildFill(body, q, after) {
    var parts = q.q.split("____");
    var ans = (q.answer || "").split("|");
    var wrap = document.createElement("div");
    var html = '<div class="fill-line">';
    for (var i = 0; i < parts.length; i++) {
      html += esc(parts[i]);
      if (i < parts.length - 1) html += '<input class="fill-blank" maxlength="8" data-i="' + i + '" />';
    }
    html += '</div><button class="btn-solid q-next" id="fillSubmit">提交答案</button>';
    wrap.innerHTML = html;
    body.appendChild(wrap);
    var submit = $("#fillSubmit", wrap);
    submit.onclick = function () {
      if (submit.classList.contains("locked")) return;
      submit.classList.add("locked");
      submit.style.display = "none";
      var inputs = $all(".fill-blank", wrap);
      var allRight = true;
      inputs.forEach(function (inp, i) {
        var val = (inp.value || "").trim().toLowerCase().replace(/\s/g, "");
        var exp = (ans[i] || "").trim().toLowerCase().replace(/\s/g, "");
        if (val === exp) inp.style.borderBottomColor = "var(--accent)";
        else { inp.style.borderBottomColor = "var(--warn)"; allRight = false; }
      });
      showExplain(body, q, allRight);
      after(allRight);
    };
  }

  function buildJudge(body, q, after) {
    var row = document.createElement("div"); row.className = "judge-row";
    var ok = document.createElement("button"); ok.className = "judge-btn ok"; ok.textContent = "✓ 对";
    var no = document.createElement("button"); no.className = "judge-btn no"; no.textContent = "✗ 错";
    row.appendChild(ok); row.appendChild(no); body.appendChild(row);
    function pick(choice, btn) {
      if (row.classList.contains("locked")) return;
      row.classList.add("locked");
      var right = (choice === q.answer);
      if (right) btn.classList.add("sel-ok"); else btn.classList.add("sel-no");
      // 标出正确项
      (q.answer ? ok : no).classList.add(q.answer ? "sel-ok" : "sel-no");
      showExplain(body, q, right);
      after(right);
    }
    ok.onclick = function () { pick(true, ok); };
    no.onclick = function () { pick(false, no); };
  }

  function buildMatch(body, q, after) {
    var pairs = q.pairs;
    var lefts = pairs.map(function (p) { return p.left; });
    var rights = shuffle(pairs.map(function (p) { return p.right; }));
    var selLeft = null;
    var pairedL = {}; var matchedR = {};
    var cols = document.createElement("div"); cols.className = "match-cols";
    var lh = '<div><div class="match-col-h">点左边</div>';
    lefts.forEach(function (t, i) { lh += '<div class="match-item" data-l="' + i + '">' + esc(t) + '</div>'; });
    lh += '</div>';
    var rh = '<div><div class="match-col-h">再点右边</div>';
    rights.forEach(function (t, i) { rh += '<div class="match-item" data-r="' + i + '">' + esc(t) + '</div>'; });
    rh += '</div>';
    cols.innerHTML = lh + rh;
    body.appendChild(cols);

    function allPaired() { return Object.keys(pairedL).length === pairs.length; }
    function flashWrong(el) { el.classList.add("wrong"); setTimeout(function () { el.classList.remove("wrong"); }, 450); }

    $all("[data-l]", cols).forEach(function (el) {
      el.onclick = function () {
        if (pairedL[el.dataset.l]) return;
        $all("[data-l]", cols).forEach(function (x) { x.classList.remove("sel"); });
        el.classList.add("sel"); selLeft = el.dataset.l;
      };
    });
    $all("[data-r]", cols).forEach(function (el) {
      el.onclick = function () {
        if (matchedR[el.dataset.r] || selLeft == null) return;
        var li = selLeft;
        var ok = pairs.some(function (p) { return p.left === lefts[li] && p.right === rights[el.dataset.r]; });
        if (ok) {
          pairedL[li] = true; matchedR[el.dataset.r] = true;
          $("[data-l='" + li + "']", cols).classList.add("paired");
          el.classList.add("paired");
          selLeft = null;
          if (allPaired()) { showExplain(body, q, true); after(true); }
        } else {
          flashWrong(el); flashWrong($("[data-l='" + li + "']", cols)); selLeft = null;
        }
      };
    });
  }

  /* ---------- 字卡 ---------- */
  function renderCards() {
    var d = C[state.curDay];
    var cards = d.flashcards || [];
    var hasPrev = state.curDay > 0, hasNext = state.curDay < C.length - 1;
    var html = '' +
      '<div class="card-daybar">' +
        '<div style="font-size:16px;font-weight:800;">' + esc(d.date) + ' · ' + esc(d.theme) + '</div>' +
        '<div class="card-nav">' +
          '<button data-nav="-1"' + (hasPrev ? "" : " disabled") + '>← 前一天</button>' +
          '<button data-nav="1"' + (hasNext ? "" : " disabled") + '>后一天 →</button>' +
        '</div>' +
      '</div>';
    if (!cards.length) {
      viewEl.innerHTML = html + '<div class="empty">这一天还没有字卡～</div>';
    } else {
      html += '' +
        '<div class="flashcard" id="flash"><div class="flash-inner">' +
          '<div class="flash-face flash-front"><div class="flash-emoji" id="fEmoji"></div>' +
            '<div class="flash-word" id="fWord"></div><div class="flash-py" id="fPy"></div></div>' +
          '<div class="flash-face flash-back"><div class="flash-mean" id="fMean"></div>' +
            '<div class="flash-ex" id="fEx"></div></div>' +
        '</div></div>' +
        '<div class="flash-hint">👆 点卡片翻面看释义</div>' +
        '<div class="flash-nav">' +
          '<button id="fPrev">← 上一张</button>' +
          '<button id="fNext">下一张 →</button>' +
        '</div>' +
        '<div class="card-prog" id="fProg"></div>';
      viewEl.innerHTML = html;
      var ci = 0;
      function paint() {
        var c = cards[ci];
        $("#fEmoji").textContent = c.emoji || "🔤";
        $("#fWord").textContent = c.word;
        $("#fPy").textContent = kidA(c.pinyin || "");
        $("#fMean").textContent = c.mean || "";
        $("#fEx").textContent = c.example ? "例：" + c.example : "";
        $("#fProg").textContent = "字卡 " + (ci + 1) + " / " + cards.length;
        $("#flash").classList.remove("flipped");
        $("#fPrev").disabled = ci <= 0;
        $("#fNext").disabled = ci >= cards.length - 1;
      }
      paint();
      $("#flash").onclick = function () { this.classList.toggle("flipped"); };
      $("#fPrev").onclick = function () { if (ci > 0) { ci--; paint(); } };
      $("#fNext").onclick = function () { if (ci < cards.length - 1) { ci++; paint(); } };
      $("[data-nav='-1']", viewEl).onclick = function () { if (hasPrev) { state.curDay--; saveState(); renderDayStrip(); renderCards(); } };
      $("[data-nav='1']", viewEl).onclick = function () { if (hasNext) { state.curDay++; saveState(); renderDayStrip(); renderCards(); } };
      state.cards[state.curDay] = true; saveState(); renderDayStrip();
    }
  }

  /* ---------- 备课笔记 ---------- */
  function renderNotes() {
    var d = C[state.curDay];
    var tips = d.items.map(function (it) { return { name: META[it.type].name, t: it.tip }; })
      .filter(function (x) { return x.t; });
    var html = '' +
      '<div style="font-size:16px;font-weight:800;margin-bottom:8px;">' + esc(d.date) + ' · ' + esc(d.theme) + ' · 备课笔记</div>' +
      '<div class="notes-box">' +
        '<textarea id="noteArea" placeholder="写给自己的备课随笔：今天孩子状态、哪里卡壳、明天怎么调整……">' + esc(state.notes[state.curDay] || "") + '</textarea>' +
      '</div>' +
      '<div class="label" style="margin-top:18px;">👩‍🏫 各板块教学提示（宝典速查）</div>' +
      '<div class="tip-list">';
    tips.forEach(function (x) {
      html += '<div class="tip-item"><b>[' + esc(x.name) + ']</b> ' + esc(x.t) + '</div>';
    });
    html += '</div>';
    viewEl.innerHTML = html;
    $("#noteArea").oninput = function () {
      state.notes[state.curDay] = this.value; saveState();
    };
  }

  /* ---------- 启动 ---------- */
  $all(".tab").forEach(function (b) { b.onclick = function () { setView(b.dataset.view); }; });
  renderDayStrip();
  setView("today");

  /* ---------- Service Worker（PWA 离线 + 可安装）---------- */
  if ("serviceWorker" in navigator) {
    window.addEventListener("load", function () {
      var v = window.__SW_VER || "v1";
      navigator.serviceWorker.register("sw.js?v=" + v).then(function () {
        navigator.serviceWorker.addEventListener("controllerchange", function () { location.reload(); });
      }).catch(function () { /* 离线环境静默失败 */ });
    });
  }
})();
