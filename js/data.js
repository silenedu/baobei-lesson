/* ============================================================
 * 家庭备课宝典 · 课程数据
 * 教材参照：沪教版（五四学制）小学语文 + 人文素养拓展（学而思人文课思路）
 * 适用：刚满 6 岁，提前启蒙 1–5 年级语文
 * 内容分级：以 1–2 年级为基准，逐步向中高年级人文拓展过渡
 *
 * 数据结构：
 *   CURRICULUM = [ { day, date, theme, items:[...], practice:[...], flashcards:[...] } ]
 *   item.type ∈ tongyao|gushi|chengyu|hanzi|chuantong|meiwen|shenhua|lunyu|xiaoguwen|qianziwen
 *   practice 每题: { q, type:'choice'|'fill'|'match'|'judge', options?, answer, pairs?, explain }
 *   flashcards: { word, pinyin, mean, emoji, example? }
 * 说明：拼音中的 a 由渲染层统一转为儿童友好的 ɑ（U+0251），此处仍写标准 a。
 * ============================================================ */

window.CURRICULUM = [
  /* ===================== Day 1 ===================== */
  {
    day: 1,
    date: "第 1 天",
    theme: "春天来了",
    items: [
      {
        type: "tongyao",
        title: "春风轻轻吹",
        author: "民间童谣",
        emoji: "🌱",
        lines: ["春风轻轻吹，", "吹绿了柳树，", "吹红了桃花，", "吹醒了青蛙。"],
        py: ["chūn fēng qīng qīng chuī", "chuī lǜ le liǔ shù", "chuī hóng le táo huā", "chuī xǐng le qīng wā"],
        tip: "带孩子在窗边念，念到『吹绿了柳树』就指一指窗外的树；可拍手打节拍，2/4 拍最稳。"
      },
      {
        type: "hanzi",
        title: "汉字启蒙 · 春",
        emoji: "🌸",
        chars: [
          { char: "春", pinyin: "chūn", radical: "日", strokes: 9,
            theory: "上面是『艹』（草），中间是『屯』（像草木破土），下面是『日』（太阳）。春=太阳出来、草木生长的季节。",
            words: ["春天", "春风", "春节"] },
          { char: "风", pinyin: "fēng", radical: "风", strokes: 4,
            theory: "半包围结构：外框『几』像空气流动的样子，里面是『×』。风=流动的空气，看不见却吹得动树叶。",
            words: ["春风", "大风", "风筝"] },
          { char: "花", pinyin: "huā", radical: "艹", strokes: 7,
            theory: "草字头『艹』（植物）+ 化。花=植物开出的美丽部分，有香有颜色。",
            words: ["桃花", "花朵", "开花"] },
          { char: "草", pinyin: "cǎo", radical: "艹", strokes: 9,
            theory: "两棵小草『艹』+ 早。草=野地里成片生长的绿色植物，给大地铺绿毯。",
            words: ["小草", "草原", "草地"] }
        ],
        tip: "用田字格带孩子描红，重点讲『春』的『日』字底要写扁、托住上面；『草/花』都是草字头，一起认更牢。"
      },
      {
        type: "chuantong",
        title: "二十四节气 · 立春",
        emoji: "🍃",
        intro: "立春是二十四节气里的第一个，表示春天开始。老话说『立春一日，水暖三分』。",
        customs: ["吃春饼（咬春）", "迎春、踏青", "观察柳树发芽"],
        poem: "律回岁晚冰霜少，春到人间草木知。",
        tip: "立春这天带孩子吃一张春饼，边吃边说『我们在咬春』，把节气过成仪式。"
      }
    ],
    practice: [
      { q: "『春风轻轻吹』里，春风吹绿了什么？", type: "choice", options: ["柳树", "雪花", "月亮"], answer: "柳树", explain: "童谣原句：『吹绿了柳树』。" },
      { q: "下面哪个字是『春』的部首？", type: "choice", options: ["日", "木", "水"], answer: "日", explain: "『春』是上下结构，部首是『日』。" },
      { q: "『春』字一共有几画？", type: "choice", options: ["8 画", "9 画", "10 画"], answer: "9 画", explain: "春 = 9 画。" },
      { q: "二十四节气中，哪一个表示春天开始？", type: "choice", options: ["立春", "立秋", "立冬"], answer: "立春", explain: "立春是春季的第一个节气。" },
      { q: "请写出两个带『春』的词：____天、____风", type: "fill", answer: "春|春", explain: "春天、春风。" },
      { q: "判断：青蛙在春天醒来。", type: "judge", answer: true, explain: "童谣说『吹醒了青蛙』，青蛙春天苏醒。" }
    ],
    flashcards: [
      { word: "春天", pinyin: "chūn tiān", mean: "一年的第一个季节，天气变暖、草木发芽。", emoji: "🌸" },
      { word: "春风", pinyin: "chūn fēng", mean: "春天的风，温暖轻柔。", emoji: "🍃" },
      { word: "柳树", pinyin: "liǔ shù", mean: "枝条细长、春天最早发芽的树。", emoji: "🌿" },
      { word: "桃花", pinyin: "táo huā", mean: "桃树开的花，粉红好看。", emoji: "🌸" }
    ]
  },

  /* ===================== Day 2 ===================== */
  {
    day: 2,
    date: "第 2 天",
    theme: "小动物的歌",
    items: [
      {
        type: "tongyao",
        title: "小公鸡",
        author: "民间童谣",
        emoji: "🐔",
        lines: ["小公鸡，真美丽，", "红红的冠子花外衣。", "每天清早喔喔啼，", "叫我起床去上学。"],
        py: ["xiǎo gōng jī zhēn měi lì", "hóng hóng de guān zi huā wài yī", "měi tiān qīng zǎo ō ō tí", "jiào wǒ qǐ chuáng qù shàng xué"],
        tip: "让孩子模仿公鸡打鸣『喔喔啼』，体会拟声词的趣味；可加动作：叉腰学冠子。"
      },
      {
        type: "hanzi",
        title: "汉字启蒙 · 鸟",
        emoji: "🐦",
        chars: [
          { char: "鸟", pinyin: "niǎo", radical: "鸟", strokes: 5,
            theory: "象形字：像一只侧身的小鸟，有头、眼睛、身体和尾巴。『鸟』本身就是部首。",
            words: ["小鸟", "飞鸟", "鸟窝"] },
          { char: "鸡", pinyin: "jī", radical: "鸟", strokes: 7,
            theory: "左边『又』（手）右手抓，右边『鸟』。鸡=会打鸣、会下蛋的家禽。",
            words: ["公鸡", "小鸡", "母鸡"] },
          { char: "虫", pinyin: "chóng", radical: "虫", strokes: 6,
            theory: "象形字：像一条弯弯的小虫，扭来扭去。虫=爬行的小动物（蚂蚁、毛毛虫都算）。",
            words: ["虫子", "昆虫", "毛毛虫"] },
          { char: "鱼", pinyin: "yú", radical: "鱼", strokes: 8,
            theory: "象形字：上面是鱼头，中间是身子，下面是摆动的尾巴。鱼=在水里游的动物。",
            words: ["小鱼", "金鱼", "钓鱼"] }
        ],
        tip: "对比『鸟』和『乌』：鸟有一点（眼睛），乌没有点（黑得看不见眼）。动物字大多带『鸟/虫/鱼』，一起记。"
      },
      {
        type: "shenhua",
        title: "神话 · 精卫填海",
        emoji: "🌊",
        figure: "精卫（炎帝的小女儿）",
        story: "炎帝的小女儿女娃去东海游玩，不幸淹死。她化作一只叫『精卫』的小鸟，每天从西山衔来树枝石子，扔进东海，想把大海填平。",
        meaning: "精卫明明知道大海填不满，却日复一日不放弃——这就是『坚韧不拔、不畏艰难』的精神。",
        tip: "讲完问孩子：『你觉得精卫傻不傻？』引导她理解『坚持』比『赢』更重要。"
      }
    ],
    practice: [
      { q: "童谣里小公鸡叫孩子去做什么？", type: "choice", options: ["去睡觉", "去上学", "去游泳"], answer: "去上学", explain: "『叫我起床去上学』。" },
      { q: "『鸟』字的部首是？", type: "choice", options: ["鸟", "丿", "木"], answer: "鸟", explain: "『鸟』是独体字部首字。" },
      { q: "和『鸟』很像、但没有那一点的是哪个字？", type: "choice", options: ["乌（乌鸦）", "马", "鱼"], answer: "乌（乌鸦）", explain: "乌 = 鸟少一点，表示黑得看不见眼睛。" },
      { q: "精卫本来是谁的女儿？", type: "choice", options: ["炎帝", "黄帝", "玉帝"], answer: "炎帝", explain: "精卫是炎帝的小女儿女娃变的。" },
      { q: "精卫填海告诉我们什么？", type: "choice", options: ["放弃很容易", "要坚持不放弃", "大海很美"], answer: "要坚持不放弃", explain: "故事赞扬坚韧不拔的精神。" },
      { q: "判断：精卫每天从西山衔树枝石子填海。", type: "judge", answer: true, explain: "原文正是如此。" }
    ],
    flashcards: [
      { word: "公鸡", pinyin: "gōng jī", mean: "打鸣报晓的公鸡。", emoji: "🐔" },
      { word: "小鸟", pinyin: "xiǎo niǎo", mean: "体型小的鸟类。", emoji: "🐦" },
      { word: "精卫", pinyin: "jīng wèi", mean: "神话里填海的小鸟，象征坚持。", emoji: "🌊" },
      { word: "填海", pinyin: "tián hǎi", mean: "把东西填进海里（精卫填海）。", emoji: "⛏️" }
    ]
  },

  /* ===================== Day 3 ===================== */
  {
    day: 3,
    date: "第 3 天",
    theme: "古诗 · 咏鹅",
    items: [
      {
        type: "gushi",
        title: "咏鹅",
        author: "骆宾王",
        dynasty: "唐",
        emoji: "🦢",
        lines: ["鹅，鹅，鹅，", "曲项向天歌。", "白毛浮绿水，", "红掌拨清波。"],
        py: ["é é é", "qū xiàng xiàng tiān gē", "bái máo fú lǜ shuǐ", "hóng zhǎng bō qīng bō"],
        yi: "鹅呀鹅呀鹅，弯着脖子朝着天空唱歌。洁白的羽毛浮在绿水上，红红的脚掌拨开清清的水波。",
        shangxi: "相传骆宾王写这首诗时才七岁。全诗像一幅画：声音（歌）、颜色（白、绿、红）、动作（浮、拨）全有了，读起来又顺口又好看。",
        tip: "让孩子边念边用手比划『曲项』（弯脖子）和『红掌拨清波』（脚划水），把诗变成动作画。"
      },
      {
        type: "hanzi",
        title: "汉字启蒙 · 水",
        emoji: "💧",
        chars: [
          { char: "水", pinyin: "shuǐ", radical: "水", strokes: 4,
            theory: "象形字：中间像水流，两边像溅起的水花。『水』是部首，带『氵』（三点水）的字大多和水有关。",
            words: ["河水", "水果", "开水"] },
          { char: "白", pinyin: "bái", radical: "白", strokes: 5,
            theory: "象形字：像一粒白米，或日光里的一点。白=像雪、像云那样干净的颜色。",
            words: ["白色", "白天", "雪白"] },
          { char: "红", pinyin: "hóng", radical: "纟", strokes: 6,
            theory: "绞丝旁『纟』（和丝线有关）+ 工。红=像火一样鲜艳好看的暖色。",
            words: ["红花", "红色", "红领巾"] },
          { char: "天", pinyin: "tiān", radical: "大", strokes: 4,
            theory: "象形字：一个『大』（人）的头顶上加一横，表示头顶上广阔的天空。天=天空。",
            words: ["天空", "天气", "春天"] }
        ],
        tip: "用『红』配『花』、『白』配『鹅』做颜色游戏；『天』顶上一横要写得平、托住下面的『大』。"
      },
      {
        type: "meiwen",
        title: "名家美文 · 河里的白鹅",
        author: "仿叶圣陶笔调",
        emoji: "📖",
        excerpt: "清清的小河上，浮着几只白鹅。它们不慌不忙地游，红红的脚掌在水底下轻轻划。岸边的柳枝垂下来，像是给小河梳头发。",
        guide: "朗读时『清清的』『不慌不忙』要读得慢、轻，像水在慢慢流；读到『红红的脚掌』可以稍微扬一点声调。",
        shangxi: "这段用『浮、游、划、垂』几个动词，把静止的河写活了——好的文字会让画面动起来。",
        tip: "读完后让孩子也『写一句小河』，哪怕只说『小河在唱歌』也鼓励，先敢说再求好。"
      }
    ],
    practice: [
      { q: "《咏鹅》是谁写的？", type: "choice", options: ["骆宾王", "李白", "杜甫"], answer: "骆宾王", explain: "唐代诗人骆宾王，相传七岁作此诗。" },
      { q: "『曲项向天歌』里『曲项』指鹅的哪里？", type: "choice", options: ["弯弯的脖子", "红红的脚掌", "白白的毛"], answer: "弯弯的脖子", explain: "项 = 脖子；曲项 = 弯着脖子。" },
      { q: "诗里写鹅的毛是什么颜色？", type: "choice", options: ["白毛", "黑毛", "花毛"], answer: "白毛", explain: "『白毛浮绿水』。" },
      { q: "『水』的部首是？", type: "choice", options: ["水", "氵", "小"], answer: "水", explain: "『水』是部首字；三点水『氵』是它的变体。" },
      { q: "连线：把字和意思连起来。", type: "match", pairs: [{left:"浮", right:"漂在水面"}, {left:"拨", right:"用脚划开"}, {left:"歌", right:"鸣叫"}], explain: "浮=漂着；拨=划动；歌=叫。" },
      { q: "判断：『红掌拨清波』写的是鹅的脚掌。", type: "judge", answer: true, explain: "掌 = 脚掌，红掌拨开水波。" }
    ],
    flashcards: [
      { word: "白鹅", pinyin: "bái é", mean: "羽毛雪白的大鹅。", emoji: "🦢" },
      { word: "绿水", pinyin: "lǜ shuǐ", mean: "清澈发绿的水。", emoji: "💧" },
      { word: "清水", pinyin: "qīng shuǐ", mean: "干净透明的水。", emoji: "💦" },
      { word: "歌唱", pinyin: "gē chàng", mean: "唱歌、鸣叫。", emoji: "🎶" }
    ]
  },

  /* ===================== Day 4 ===================== */
  {
    day: 4,
    date: "第 4 天",
    theme: "传统节日 · 春节",
    items: [
      {
        type: "chuantong",
        title: "传统节日 · 春节",
        emoji: "🧧",
        intro: "春节是中国人最隆重的节日，是农历新年。全家人团聚、吃年夜饭、守岁、拜年。",
        customs: ["贴春联、福字", "放鞭炮（或电子鞭炮）", "收压岁钱", "吃饺子/年糕"],
        poem: "爆竹声中一岁除，春风送暖入屠苏。",
        tip: "春节是最好的『生活语文课』：贴福字时讲『福倒=福到』的谐音，包饺子时数数、认字。"
      },
      {
        type: "tongyao",
        title: "过年童谣",
        author: "民间童谣",
        emoji: "🏮",
        lines: ["二十三，糖瓜粘；", "二十四，扫房子；", "二十五，磨豆腐；", "三十晚上守岁坐。"],
        py: ["èr shí sān táng guā zhān", "èr shí sì sǎo fáng zi", "èr shí wǔ mó dòu fu", "sān shí wǎn shang shǒu suì zuò"],
        tip: "这是『忙年歌』节选，可每天念一句对应真正的大扫除/做豆腐，让童谣照进生活。"
      },
      {
        type: "hanzi",
        title: "汉字启蒙 · 福",
        emoji: "🧨",
        chars: [
          { char: "福", pinyin: "fú", radical: "礻", strokes: 13,
            theory: "左边『礻』（示字旁，和祭祀、祈愿有关），右边『畐』表示满。福 = 有吃有穿、心里满足的好运气。",
            words: ["福气", "幸福", "福字"] },
          { char: "门", pinyin: "mén", radical: "门", strokes: 3,
            theory: "象形字：像两扇对开的门板。门=房屋进出的口，也指一家人家。",
            words: ["大门", "开门", "门铃"] },
          { char: "灯", pinyin: "dēng", radical: "火", strokes: 6,
            theory: "火字旁『火』（发光发热）+ 丁。灯=能照亮的器具，夜里给人光。",
            words: ["灯笼", "台灯", "灯光"] },
          { char: "年", pinyin: "nián", radical: "干", strokes: 6,
            theory: "甲骨文像人背着沉甸甸的禾谷，表示丰收。年=地球绕太阳一圈的时间，也是过年的『年』。",
            words: ["过年", "新年", "年画"] }
        ],
        tip: "讲『福倒贴=福到了』的谐音梗；春节挂『灯笼』、贴『门』神，把这些字和真实物件一一对上。"
      },
      {
        type: "chengyu",
        title: "张灯结彩",
        emoji: "🏮",
        pinyin: "zhāng dēng jié cǎi",
        story: "每逢过年过节，家家户户挂起灯笼、系上彩带，把房子打扮得喜气洋洋。",
        yuyi: "形容节日或喜庆时，到处挂灯笼、结彩带，热闹又漂亮。",
        chuchu: "多用于描写节日喜庆场面。",
        tip: "让孩子用蜡笔给家里的画『张灯结彩』，边画边说这个成语，情境记忆最牢。"
      }
    ],
    practice: [
      { q: "春节是哪一种历法的新年？", type: "choice", options: ["农历（阴历）", "公历（阳历）", "星期"], answer: "农历（阴历）", explain: "春节是农历正月初一。" },
      { q: "『福倒贴』谐音表示什么？", type: "choice", options: ["福到了", "福走了", "福坏了"], answer: "福到了", explain: "倒=到，谐音讨口彩。" },
      { q: "『福』的部首是？", type: "choice", options: ["礻（示字旁）", "口", "田"], answer: "礻（示字旁）", explain: "福左边是示字旁。" },
      { q: "『张灯结彩』一般形容什么场合？", type: "choice", options: ["喜庆节日", "生病睡觉", "下雨天"], answer: "喜庆节日", explain: "挂灯结彩的热闹场面。" },
      { q: "连线：节日习俗。", type: "match", pairs: [{left:"贴", right:"福字"}, {left:"放", right:"鞭炮"}, {left:"收", right:"压岁钱"}], explain: "贴福字、放鞭炮、收压岁钱。" },
      { q: "判断：春节时一家人要团聚吃年夜饭。", type: "judge", answer: true, explain: "团圆是春节核心。" }
    ],
    flashcards: [
      { word: "春节", pinyin: "chūn jié", mean: "农历新年，最隆重的传统节日。", emoji: "🧧" },
      { word: "福气", pinyin: "fú qi", mean: "好运气、好福分。", emoji: "🧨" },
      { word: "灯笼", pinyin: "dēng long", mean: "节日挂的照明装饰。", emoji: "🏮" },
      { word: "压岁钱", pinyin: "yā suì qián", mean: "春节长辈给孩子的红包。", emoji: "💰" }
    ]
  },

  /* ===================== Day 5 ===================== */
  {
    day: 5,
    date: "第 5 天",
    theme: "成语 · 守株待兔",
    items: [
      {
        type: "chengyu",
        title: "守株待兔",
        emoji: "🐰",
        pinyin: "shǒu zhū dài tù",
        story: "宋国有个农夫，看见一只兔子撞死在树桩上，便放下农活，天天守着树桩等下一只兔子。结果兔子没等到，田地却荒了。",
        yuyi: "比喻死守经验、不知变通，或妄想不劳而获。",
        chuchu: "出自《韩非子》。",
        tip: "讲完问：『农夫聪明吗？』引导孩子明白：好事不会天天撞上来，要自己努力。"
      },
      {
        type: "hanzi",
        title: "汉字启蒙 · 兔",
        emoji: "🐇",
        chars: [
          { char: "兔", pinyin: "tù", radical: "刀（⺈）", strokes: 8,
            theory: "象形字：像一只兔子，长耳朵、短尾巴（那一点就是小尾巴）。记住『兔』字有点，『免』字没点。",
            words: ["兔子", "白兔", "玉兔"] },
          { char: "木", pinyin: "mù", radical: "木", strokes: 4,
            theory: "象形字：像一棵树——上面分叉是枝，中间一竖是干，下面分叉是根。木=树。",
            words: ["树木", "木头", "木瓜"] },
          { char: "田", pinyin: "tián", radical: "田", strokes: 5,
            theory: "象形字：像一块块被田埂分割好的耕地。田=种庄稼的土地。",
            words: ["田地", "水田", "田园"] },
          { char: "力", pinyin: "lì", radical: "力", strokes: 2,
            theory: "象形字：像耕地用的犁，也像用力时弯曲的手臂。力=力气、力量。",
            words: ["力气", "努力", "大力士"] }
        ],
        tip: "对比『兔』和『免』：一个点之差就是小尾巴；『木/田』都是象形字，照着图画就能写对。"
      },
      {
        type: "shenhua",
        title: "仓颉造字",
        emoji: "📜",
        figure: "仓颉（黄帝的史官）",
        story: "传说黄帝的史官仓颉，观察鸟兽脚印各有不同，受到启发，创造了文字。文字一出，『天雨粟、鬼夜哭』——天地都为之震动。",
        meaning: "汉字不是天上掉下来的，是古人观察世界、总结规律造出来的。每个字背后都有故事。",
        tip: "把『仓颉造字』和今天的『汉字启蒙』连起来：我们每天学的字，都是几千年前这样被『观察』出来的。"
      }
    ],
    practice: [
      { q: "守株待兔的农夫在等什么？", type: "choice", options: ["撞树的兔子", "飞来的鸟", "掉的钱"], answer: "撞树的兔子", explain: "他守着树桩等兔子再来撞死。" },
      { q: "守株待兔告诉我们什么？", type: "choice", options: ["要努力别空等", "天天守树最好", "兔子很多"], answer: "要努力别空等", explain: "讽刺不劳而获、不知变通。" },
      { q: "『兔』字和『免』字的区别是？", type: "choice", options: ["兔多一点（尾巴）", "兔少一点", "完全一样"], answer: "兔多一点（尾巴）", explain: "兔字右下有一点，像小尾巴。" },
      { q: "传说中谁创造了汉字？", type: "choice", options: ["仓颉", "孔子", "李白"], answer: "仓颉", explain: "仓颉是黄帝的史官，传说造字者。" },
      { q: "请写出一个带『兔』的词：白____", type: "fill", answer: "兔", explain: "白兔。" },
      { q: "判断：守株待兔的人最后庄稼荒废了。", type: "judge", answer: true, explain: "他光守树桩不干活，田地荒了。" }
    ],
    flashcards: [
      { word: "兔子", pinyin: "tù zi", mean: "长耳朵、短尾巴的小动物。", emoji: "🐇" },
      { word: "树桩", pinyin: "shù zhuāng", mean: "树被砍后留在地上的根墩。", emoji: "🪵" },
      { word: "汉字", pinyin: "hàn zì", mean: "我们使用的文字。", emoji: "📜" },
      { word: "努力", pinyin: "nǔ lì", mean: "用尽力气去做。", emoji: "💪" }
    ]
  },

  /* ===================== Day 6 ===================== */
  {
    day: 6,
    date: "第 6 天",
    theme: "古诗 · 悯农",
    items: [
      {
        type: "gushi",
        title: "悯农（其二）",
        author: "李绅",
        dynasty: "唐",
        emoji: "🌾",
        lines: ["锄禾日当午，", "汗滴禾下土。", "谁知盘中餐，", "粒粒皆辛苦。"],
        py: ["chú hé rì dāng wǔ", "hàn dī hé xià tǔ", "shéi zhī pán zhōng cān", "lì lì jiē xīn kǔ"],
        yi: "农民正午顶着烈日锄草，汗水一滴滴落进土里。谁知道盘中的饭，每一粒都饱含辛苦。",
        shangxi: "短短二十字，把『种』的苦和『吃』的甜连在一起。它教孩子：饭，不能浪费。",
        tip: "吃饭前念最后两句，是最好的『光盘行动』启蒙；可让孩子观察一粒米的来历。"
      },
      {
        type: "hanzi",
        title: "汉字启蒙 · 米",
        emoji: "🍚",
        chars: [
          { char: "米", pinyin: "mǐ", radical: "米", strokes: 6,
            theory: "象形字：中间一竖像稻穗，上下六点像撒落的米粒。『米』是部首，带『米』的字多和粮食有关（粮、粉、粒）。",
            words: ["大米", "米饭", "玉米"] },
          { char: "禾", pinyin: "hé", radical: "禾", strokes: 5,
            theory: "象形字：像一株垂着穗的庄稼，叶子往两边垂。禾=谷类植物，特指稻麦。",
            words: ["禾苗", "禾谷", "锄禾"] },
          { char: "土", pinyin: "tǔ", radical: "土", strokes: 3,
            theory: "象形字：地面上一堆土，下面一横是地平线。土=泥土、大地，万物从土里长出来。",
            words: ["土地", "泥土", "土豆"] },
          { char: "中", pinyin: "zhōng", radical: "丨", strokes: 4,
            theory: "象形字：一根旗杆插在正中，旗帜飘在正中间。中=中间、里面、不偏不倚。",
            words: ["中间", "中国", "心中"] }
        ],
        tip: "用几粒真米对照『米』字；『禾/土』都是地里长出来的，和《悯农》连起来讲最生动。"
      },
      {
        type: "chuantong",
        title: "二十四节气 · 芒种与丰收",
        emoji: "🌽",
        intro: "芒种是夏天的节气，『芒』指有芒的麦子该收了，『种』指稻谷该种了——一边收一边种，农民最忙。",
        customs: ["收麦子", "种水稻", "祭花神（送春）"],
        poem: "时雨及芒种，四野皆插秧。",
        tip: "结合《悯农》讲：我们碗里的饭，正是芒种时农民『汗滴禾下土』换来的。"
      }
    ],
    practice: [
      { q: "《悯农》里农民在什么时间锄草？", type: "choice", options: ["正午（日当午）", "半夜", "清晨"], answer: "正午（日当午）", explain: "『锄禾日当午』。" },
      { q: "『粒粒皆辛苦』劝我们什么？", type: "choice", options: ["别浪费饭", "多吃零食", "不吃菜"], answer: "别浪费饭", explain: "每粒米都来之不易。" },
      { q: "『米』字的部首是？", type: "choice", options: ["米", "木", "禾"], answer: "米", explain: "『米』是部首字。" },
      { q: "芒种节气农民在忙什么？", type: "choice", options: ["收麦又种稻", "滑雪", "赏月"], answer: "收麦又种稻", explain: "芒种是既收又种的忙季。" },
      { q: "连线：诗句与意思。", type: "match", pairs: [{left:"汗滴禾下土", right:"汗水落进土里"}, {left:"粒粒皆辛苦", right:"每粒都辛苦"}, {left:"盘中美餐", right:"碗里的饭"}], explain: "对应诗意理解。" },
      { q: "判断：『悯农』是赞美农民辛苦、劝人惜粮的诗。", type: "judge", answer: true, explain: "诗旨正是同情农民、珍惜粮食。" }
    ],
    flashcards: [
      { word: "农民", pinyin: "nóng mín", mean: "种地、种粮食的人。", emoji: "👨‍🌾" },
      { word: "米饭", pinyin: "mǐ fàn", mean: "用米煮成的饭。", emoji: "🍚" },
      { word: "辛苦", pinyin: "xīn kǔ", mean: "费力、劳累。", emoji: "😓" },
      { word: "珍惜", pinyin: "zhēn xī", mean: "看重、不浪费。", emoji: "💎" }
    ]
  },

  /* ===================== Day 7 ===================== */
  {
    day: 7,
    date: "第 7 天",
    theme: "神话 · 嫦娥奔月",
    items: [
      {
        type: "shenhua",
        title: "神话 · 嫦娥奔月",
        emoji: "🌕",
        figure: "嫦娥、后羿",
        story: "神射手后羿射下九个太阳，娶了嫦娥。西王母赐不死药，嫦娥为保护它不被坏人抢走，吞下后飞向月亮，从此住在广寒宫。",
        meaning: "嫦娥奔月是中国人『探月』梦想的最早样子；中秋赏月，就是在思念远方的亲人。",
        tip: "讲完可以看真月亮：『嫦娥就住在那上面』，把神话和真实夜空连起来，孩子会记得一辈子。"
      },
      {
        type: "tongyao",
        title: "月亮谣",
        author: "民间童谣",
        emoji: "🌝",
        lines: ["月亮月亮光光，", "照在窗上凉凉。", "嫦娥姐姐笑，", "玉兔捣药忙。"],
        py: ["yuè liang yuè liang guāng guāng", "zhào zài chuāng shang liáng liáng", "cháng é jiě jie xiào", "yù tù dǎo yào máng"],
        tip: "配合神话讲『玉兔捣药』，让孩子在童谣里认出嫦娥和玉兔两个角色。"
      },
      {
        type: "hanzi",
        title: "汉字启蒙 · 月",
        emoji: "🌙",
        chars: [
          { char: "月", pinyin: "yuè", radical: "月", strokes: 4,
            theory: "象形字：像一弯新月，里面两横是月光。『月』是部首，带『月』的字常和身体（肚、腿）或时间（期、明）有关。",
            words: ["月亮", "月光", "明月"] },
          { char: "日", pinyin: "rì", radical: "日", strokes: 4,
            theory: "象形字：圆圆的太阳，中间一点是太阳的黑子或光芒。日=太阳，也指白天。",
            words: ["日子", "日出", "红日"] },
          { char: "星", pinyin: "xīng", radical: "日", strokes: 9,
            theory: "上面『日』（星星像小太阳一样会发光），下面『生』。星=夜空中一闪一闪的小光点。",
            words: ["星星", "星光", "星空"] },
          { char: "光", pinyin: "guāng", radical: "儿", strokes: 6,
            theory: "上面『火』（火把），下面『儿』。光=火把照出的明亮，也指一切明亮的光线。",
            words: ["月光", "灯光", "阳光"] }
        ],
        tip: "画一弯月牙对照『月』字；『日/月』是天上最亮的两个，合起来就是『明』——古人造字多有意思。"
      },
      {
        type: "chengyu",
        title: "花好月圆",
        emoji: "🌕",
        pinyin: "huā hǎo yuè yuán",
        story: "花儿盛开、月亮圆满，是最美好的景象。",
        yuyi: "比喻生活美满、亲人团聚，常用于祝福（尤其中秋、新婚）。",
        chuchu: "宋·张先词句演化而来。",
        tip: "中秋夜说『花好月圆』，让孩子把成语和团圆的幸福感绑在一起。"
      }
    ],
    practice: [
      { q: "嫦娥奔月后住在哪里？", type: "choice", options: ["月亮（广寒宫）", "海底", "山顶"], answer: "月亮（广寒宫）", explain: "嫦娥吞药飞月，居广寒宫。" },
      { q: "童谣里谁在『捣药忙』？", type: "choice", options: ["玉兔", "嫦娥", "后羿"], answer: "玉兔", explain: "『玉兔捣药忙』。" },
      { q: "『月』字的字形像什么？", type: "choice", options: ["一弯新月", "太阳", "大山"], answer: "一弯新月", explain: "月是象形字，像弯月。" },
      { q: "『花好月圆』常用来祝福什么？", type: "choice", options: ["生活美满团聚", "考试满分", "下雨停了"], answer: "生活美满团聚", explain: "形容美好圆满。" },
      { q: "请写出一个带『月』的词：明____", type: "fill", answer: "月", explain: "明月。" },
      { q: "判断：后羿是神话里射下九个太阳的神射手。", type: "judge", answer: true, explain: "后羿射日是中国著名神话。" }
    ],
    flashcards: [
      { word: "月亮", pinyin: "yuè liang", mean: "夜空中发亮的星球。", emoji: "🌕" },
      { word: "嫦娥", pinyin: "cháng é", mean: "奔月的仙女，住在月亮上。", emoji: "🌙" },
      { word: "玉兔", pinyin: "yù tù", mean: "月亮上捣药的小白兔。", emoji: "🐇" },
      { word: "团圆", pinyin: "tuán yuán", mean: "亲人聚在一起。", emoji: "👨‍👩‍👧" }
    ]
  },

  /* ===================== Day 8 ===================== */
  {
    day: 8,
    date: "第 8 天",
    theme: "汉字 · 水与火",
    items: [
      {
        type: "hanzi",
        title: "汉字启蒙 · 水 / 火",
        emoji: "🔥",
        chars: [
          { char: "水", pinyin: "shuǐ", radical: "水", strokes: 4,
            theory: "象形字，像流动的水；作偏旁写成『氵』，带它的字多和水有关（河、海、洗）。",
            words: ["河水", "开水", "水果"] },
          { char: "火", pinyin: "huǒ", radical: "火", strokes: 4,
            theory: "象形字，像跳动的火苗；作偏旁写成『灬』（四点底），带它的字多和火/热有关（热、煮、照）。",
            words: ["火苗", "大火", "火花"] },
          { char: "山", pinyin: "shān", radical: "山", strokes: 3,
            theory: "象形字：像三座并排的山峰。山=高耸的大地，也指一座座山。",
            words: ["高山", "上山", "火山"] },
          { char: "石", pinyin: "shí", radical: "石", strokes: 5,
            theory: "上面『厂』（像山崖），下面『口』（像一块石头）。石=坚硬的石头，能盖房铺路。",
            words: ["石头", "石子", "化石"] }
        ],
        tip: "对比教学：『氵』是站着的水，『灬』是躺着的火；『山/石』是自然里的硬家伙，爬山时认一认。"
      },
      {
        type: "tongyao",
        title: "火苗谣",
        author: "民间童谣",
        emoji: "🔥",
        lines: ["小火苗，跳跳舞，", "红红的，暖乎乎。", "做饭煮汤都用它，", "小朋友，别去摸。"],
        py: ["xiǎo huǒ miáo tiào tiào wǔ", "hóng hóng de nuǎn hū hū", "zuò fàn zhǔ tāng dōu yòng tā", "xiǎo péng you bié qù mō"],
        tip: "借童谣做一次安全教育：火有用但危险，『别去摸』要郑重讲。"
      },
      {
        type: "meiwen",
        title: "名家美文 · 小河的歌",
        author: "仿冰心笔调",
        emoji: "🌊",
        excerpt: "小河唱着歌往前跑。它流过草地，草儿绿了；流过花园，花儿开了。它不怕累，也不怕远，一路把快乐送到大海的怀里。",
        guide: "读『唱着歌往前跑』要轻快；读『不怕累，也不怕远』要稳一点，像在夸小河。",
        shangxi: "把小河写成会唱歌、会送快乐的朋友，这叫『拟人』——让万物都有了表情。",
        tip: "读后让孩子用『拟人』说一句话，比如『小树向我招手』，捕捉这个写作小魔法。"
      },
      {
        type: "chengyu",
        title: "水深火热",
        emoji: "🌊",
        pinyin: "shuǐ shēn huǒ rè",
        story: "形容老百姓像泡在深水里、放在大火上一样痛苦。",
        yuyi: "比喻人民生活极端痛苦、处境艰难。",
        chuchu: "出自《孟子》。",
        tip: "先让孩子感受『水』和『火』两个字，再讲这个成语——由字到词，理解更扎实。"
      }
    ],
    practice: [
      { q: "『氵』（三点水）其实是什么的变体？", type: "choice", options: ["水", "火", "木"], answer: "水", explain: "三点水是『水』作偏旁。" },
      { q: "『灬』（四点底）其实是哪种偏旁的变体？", type: "choice", options: ["火", "水", "日"], answer: "火", explain: "四点底是『火』的变形，如热、煮、照。" },
      { q: "童谣告诉我们小朋友对火要怎样？", type: "choice", options: ["别去摸", "多去摸", "拿火烧"], answer: "别去摸", explain: "『小朋友，别去摸』是安全教育。" },
      { q: "『水深火热』形容什么？", type: "choice", options: ["生活极苦", "游泳很好", "天气真好"], answer: "生活极苦", explain: "比喻处境艰难痛苦。" },
      { q: "连线：偏旁与含义。", type: "match", pairs: [{left:"氵", right:"和水有关"}, {left:"灬", right:"和火/热有关"}, {left:"木", right:"和树木有关"}], explain: "常见偏旁归类。" },
      { q: "判断：『火苗谣』里火既能做饭也危险。", type: "judge", answer: true, explain: "童谣既说有用又说别摸。" }
    ],
    flashcards: [
      { word: "火苗", pinyin: "huǒ miáo", mean: "火焰最前端跳动的部分。", emoji: "🔥" },
      { word: "河水", pinyin: "hé shuǐ", mean: "河里流动的水。", emoji: "🌊" },
      { word: "开水", pinyin: "kāi shuǐ", mean: "煮沸的热水。", emoji: "♨️" },
      { word: "快乐", pinyin: "kuài lè", mean: "高兴、开心。", emoji: "😊" }
    ]
  },

  /* ===================== Day 9 ===================== */
  {
    day: 9,
    date: "第 9 天",
    theme: "古诗 · 静夜思",
    items: [
      {
        type: "gushi",
        title: "静夜思",
        author: "李白",
        dynasty: "唐",
        emoji: "🌟",
        lines: ["床前明月光，", "疑是地上霜。", "举头望明月，", "低头思故乡。"],
        py: ["chuáng qián míng yuè guāng", "yí shì dì shàng shuāng", "jǔ tóu wàng míng yuè", "dī tóu sī gù xiāng"],
        yi: "床前洒着明亮的月光，好像地上结了一层霜。抬起头望着天上的明月，低下头想起远方的家乡。",
        shangxi: "全诗没有难字，却把『看见月亮→想起家乡』的思念写到了极致。这是中国人共同的乡愁。",
        tip: "晚上关灯，用手电筒在天花板打『月光』，带孩子念诗，让『举头望明月』变成真实体验。"
      },
      {
        type: "hanzi",
        title: "汉字启蒙 · 思",
        emoji: "💭",
        chars: [
          { char: "思", pinyin: "sī", radical: "心", strokes: 9,
            theory: "上面『田』（古人说像脑门的纹路，代表脑袋），下面『心』。用『心』和『脑』一起想，就是『思』。",
            words: ["思念", "思想", "思考"] },
          { char: "心", pinyin: "xīn", radical: "心", strokes: 4,
            theory: "象形字：像一颗跳动的心脏。心=胸口里管感情的器官，也指心思、爱心。",
            words: ["小心", "开心", "爱心"] },
          { char: "头", pinyin: "tóu", radical: "大", strokes: 5,
            theory: "象形字：侧面的人头轮廓，有脑门、下巴。头=脑袋，人身最上面的部分。",
            words: ["头发", "头顶", "大头"] },
          { char: "乡", pinyin: "xiāng", radical: "乙", strokes: 3,
            theory: "甲骨文像两个人相向而坐共食，或两条蜿蜒的小路。乡=家乡、乡村，我们出生的地方。",
            words: ["家乡", "故乡", "乡村"] }
        ],
        tip: "指着自己的头和心说：『思=用脑想、用心念』；《静夜思》的『思故乡』，就是脑袋和心一起想念老家。"
      },
      {
        type: "chuantong",
        title: "传统节日 · 重阳节",
        emoji: "🍂",
        intro: "重阳节在农历九月初九，古人认为『九』是阳数，两九相重叫『重阳』。这天要登高、赏菊、敬老。",
        customs: ["登高望远", "赏菊花、喝菊花酒", "看望老人（敬老）"],
        poem: "独在异乡为异客，每逢佳节倍思亲。",
        tip: "把《静夜思》的『思故乡』和重阳节『倍思亲』连起来，教孩子：思念亲人是中华文化里很美的事。"
      }
    ],
    practice: [
      { q: "《静夜思》的作者是？", type: "choice", options: ["李白", "杜甫", "白居易"], answer: "李白", explain: "唐代大诗人李白。" },
      { q: "『疑是地上霜』把月光看成了什么？", type: "choice", options: ["霜", "雪", "水"], answer: "霜", explain: "月光照地，像白霜。" },
      { q: "『举头望明月，低头思故乡』写了什么情感？", type: "choice", options: ["思念家乡", "生气", "高兴"], answer: "思念家乡", explain: "望月思乡是诗眼。" },
      { q: "『思』字的部首是？", type: "choice", options: ["心", "田", "口"], answer: "心", explain: "思下面是心字底。" },
      { q: "重阳节在哪一天？", type: "choice", options: ["农历九月初九", "正月初一", "八月十五"], answer: "农历九月初九", explain: "两九相重为重阳。" },
      { q: "判断：重阳节有登高、赏菊、敬老的习俗。", type: "judge", answer: true, explain: "这正是重阳习俗。" }
    ],
    flashcards: [
      { word: "明月", pinyin: "míng yuè", mean: "明亮的月亮。", emoji: "🌕" },
      { word: "故乡", pinyin: "gù xiāng", mean: "自己的家乡、出生地。", emoji: "🏡" },
      { word: "思念", pinyin: "sī niàn", mean: "想念、惦记。", emoji: "💭" },
      { word: "登高", pinyin: "dēng gāo", mean: "爬上高处（重阳习俗）。", emoji: "⛰️" }
    ]
  },

  /* ===================== Day 10 ===================== */
  {
    day: 10,
    date: "第 10 天",
    theme: "复习 · 综合小测验",
    items: [
      {
        type: "tongyao",
        title: "一周回顾 · 我会背",
        emoji: "📚",
        lines: ["春风轻轻吹，小公鸡喔喔啼；", "咏鹅白毛浮绿水，悯农粒粒皆辛苦。", "月亮光光照嫦娥，小河唱歌送快乐；", "十天语文课，我是小小学霸！"],
        py: ["chūn fēng qīng qīng chuī", "yǒng é bái máo fú lǜ shuǐ", "yuè liang guāng guāng zhào cháng é", "shí tiān yǔ wén kè wǒ shì xiǎo xiǎo xué bà"],
        tip: "把前九天学过的童谣、古诗串成一段『回顾 rap』，拍手念，帮孩子把零散知识连成网。"
      },
      {
        type: "hanzi",
        title: "汉字回顾 · 偏旁小网",
        emoji: "🕸️",
        chars: [
          { char: "氵", pinyin: "shuǐ", radical: "氵", strokes: 3,
            theory: "三点水 = 水。家族：河、海、洗、清。", words: ["河水", "大海", "洗手"] },
          { char: "灬", pinyin: "huǒ", radical: "灬", strokes: 4,
            theory: "四点底 = 火。家族：热、煮、照、熟。", words: ["热水", "煮饭", "照亮"] },
          { char: "礻", pinyin: "shì", radical: "礻", strokes: 4,
            theory: "示字旁 = 和祈愿、祭祀有关。家族：福、祝、神。", words: ["福气", "祝福", "神仙"] }
        ],
        tip: "用三张彩纸分别写『氵/灬/礻』，让孩子把家里的字卡按偏旁『回家』，做偏旁分类游戏。"
      },
      {
        type: "chengyu",
        title: "成语回顾 · 四个好朋友",
        emoji: "🎯",
        pinyin: "（复习）",
        story: "这十天我们认识了：春暖花开、张灯结彩、守株待兔、花好月圆、水深火热。",
        yuyi: "复习小窍门：每个成语配一个画面——兔子撞树、灯笼高挂、月亮圆圆、火热水深。",
        chuchu: "出自寓言、节俗与古诗。",
        tip: "玩『成语你画我猜』：你比划画面，孩子猜成语，把复习变成游戏。"
      }
    ],
    practice: [
      { q: "下面哪个成语比喻『不劳而获、死守经验』？", type: "choice", options: ["守株待兔", "花好月圆", "张灯结彩"], answer: "守株待兔", explain: "守株待兔讽刺不努力空等。" },
      { q: "『白毛浮绿水，红掌拨清波』出自哪首诗？", type: "choice", options: ["咏鹅", "静夜思", "悯农"], answer: "咏鹅", explain: "骆宾王《咏鹅》。" },
      { q: "『粒粒皆辛苦』劝我们？", type: "choice", options: ["珍惜粮食", "多吃零食", "挑食"], answer: "珍惜粮食", explain: "悯农主旨。" },
      { q: "『氵』家族的字大多和什么有关？", type: "choice", options: ["水", "火", "土"], answer: "水", explain: "三点水表水。" },
      { q: "连线：成语与画面。", type: "match", pairs: [{left:"张灯结彩", right:"挂灯笼结彩带"}, {left:"花好月圆", right:"花儿开月亮圆"}, {left:"水深火热", right:"泡在水里火烧着"}], explain: "成语意象匹配。" },
      { q: "判断：重阳节要登高、赏菊、敬老。", type: "judge", answer: true, explain: "重阳习俗正确。" },
      { q: "请写出一个带『月』的词：____亮", type: "fill", answer: "月", explain: "月亮。" },
      { q: "这十天你最喜欢哪一个板块？请在备课笔记里写一句给爸爸妈妈的话。", type: "judge", answer: true, explain: "开放题，鼓励孩子表达，无标准答案，点『对』即可继续。" }
    ],
    flashcards: [
      { word: "复习", pinyin: "fù xí", mean: "再学一遍，记得更牢。", emoji: "🔁" },
      { word: "学霸", pinyin: "xué bà", mean: "学习很棒的人（开玩笑自称）。", emoji: "🎓" },
      { word: "分类", pinyin: "fēn lèi", mean: "按相同点分成一类类。", emoji: "🗂️" },
      { word: "表达", pinyin: "biǎo dá", mean: "把自己的想法说出来。", emoji: "🗣️" }
    ]
  },

  /* ===================== Day 11 · 国学周 ===================== */
  {
    day: 11,
    date: "第 11 天",
    theme: "国学启程 · 论语与司马光",
    items: [
      {
        type: "lunyu",
        title: "论语 · 学而时习",
        emoji: "📚",
        grade: "小学",
        lines: [
          { text: "子曰：『学而时习之，不亦说乎？』", py: "zǐ yuē xué ér shí xí zhī bù yì yuè hū",
            mean: "孔子说：『学了知识又按时温习，不是很快乐吗？』",
            fun: "『说』在这里读 yuè，就是『悦』——开心。复习像游戏二周目，越玩越顺手！" },
          { text: "子曰：『有朋自远方来，不亦乐乎？』", py: "zǐ yuē yǒu péng zì yuǎn fāng lái bù yì lè hū",
            mean: "孔子说：『有朋友从远方来一起学习，不是很快乐吗？』",
            fun: "两千多年前的孔子也喜欢『好朋友来家里玩』！学习有朋友陪，快乐加倍。" }
        ],
        tip: "拍手读两遍原文，再让孩子用白话讲给玩具听；强调『时习』=每天翻一翻学过的字卡。"
      },
      {
        type: "xiaoguwen",
        title: "小古文 · 司马光",
        emoji: "🏺",
        grade: "小学",
        lines: ["群儿戏于庭，", "一儿登瓮，", "足跌没水中。", "众皆弃去，", "光持石击瓮破之，", "水迸，儿得活。"],
        py: ["qún ér xì yú tíng", "yī ér dēng wèng", "zú diē mò shuǐ zhōng", "zhòng jiē qì qù", "guāng chí shí jī wèng pò zhī", "shuǐ bèng ér dé huó"],
        notes: [
          { w: "戏", m: "玩耍" }, { w: "庭", m: "院子" }, { w: "瓮", m: "口小肚大的水缸" },
          { w: "没", m: "淹没" }, { w: "皆", m: "都" }, { w: "持", m: "拿着" }, { w: "迸", m: "涌出" }
        ],
        yi: "一群孩子在院子里玩耍，一个孩子爬上大水缸，一失足掉进去被水淹没。别的孩子都吓得跑开了，司马光却拿起石头把水缸砸破，水一下子涌出来，孩子得救了。",
        fun: "司马光砸缸时只有七岁，和你差不多大！冷静 + 动脑，比力气更管用。",
        tip: "玩『如果你在场怎么办』：说出 3 种救人办法（喊大人、找绳子、砸缸），比一比谁的办法最稳。"
      },
      {
        type: "qianziwen",
        title: "千字文 · 天地玄黄",
        emoji: "🌌",
        grade: "小学",
        lines: ["天地玄黄，", "宇宙洪荒。", "日月盈昃，", "辰宿列张。"],
        py: ["tiān dì xuán huáng", "yǔ zhòu hóng huāng", "rì yuè yíng zè", "chén xiù liè zhāng"],
        pairs: [
          { text: "天地玄黄", mean: "天是深青色的，地是黄色的（古人眼里天地的颜色）" },
          { text: "宇宙洪荒", mean: "宇宙刚形成时，一片辽阔混沌" },
          { text: "日月盈昃", mean: "月亮圆了又缺，太阳升起又西斜" },
          { text: "辰宿列张", mean: "满天星斗排列散布在夜空中" }
        ],
        fun: "《千字文》是 1500 年前的『超级识字课本』：1000 个字不重样，还能讲天文地理！",
        tip: "四字一句打节拍念：『天地—玄黄』，像念 rap；晚上抬头找一找『辰宿』。"
      }
    ],
    practice: [
      { q: "『学而时习之，不亦说乎』里『说』的意思是？", type: "choice", options: ["快乐", "说话", "唱歌"], answer: "快乐", explain: "说 = 悦，快乐。" },
      { q: "《司马光》里，掉进水缸的小朋友是怎么得救的？", type: "choice", options: ["司马光拿石头砸破了缸", "他自己游了出来", "大人把他捞了出来"], answer: "司马光拿石头砸破了缸", explain: "光持石击瓮破之，水迸，儿得活。" },
      { q: "连线：古文词语和意思。", type: "match", pairs: [{left:"戏", right:"玩耍"}, {left:"瓮", right:"大水缸"}, {left:"迸", right:"涌出"}], explain: "戏=玩耍；瓮=水缸；迸=涌出。" },
      { q: "请补充《千字文》：天地玄黄，宇宙____。", type: "fill", answer: "洪荒", explain: "宇宙洪荒。" },
      { q: "《千字文》是谁编写的启蒙读物？", type: "choice", options: ["周兴嗣", "孔子", "李白"], answer: "周兴嗣", explain: "南朝梁的周兴嗣奉旨用一千个不重复的字编成。" },
      { q: "判断：《司马光》的故事告诉我们，遇到急事要冷静想办法。", type: "judge", answer: true, explain: "司马光没有慌，用砸缸的办法救人。" },
      { q: "判断：《千字文》全文有一千个不重复的字。", type: "judge", answer: true, explain: "千字文 = 一千个不重样的字。" }
    ],
    flashcards: [
      { word: "温习", pinyin: "wēn xí", mean: "再学一遍学过的知识，记得更牢。", emoji: "🔁", example: "每天温习字卡，是『学而时习之』。" },
      { word: "水缸", pinyin: "shuǐ gāng", mean: "装水的大缸，古文里叫『瓮』。", emoji: "🏺" },
      { word: "宇宙", pinyin: "yǔ zhòu", mean: "上下四方的空间和古往今来的时间。", emoji: "🌌" },
      { word: "洪荒", pinyin: "hóng huāng", mean: "远古时代混沌辽阔的样子。", emoji: "🌊" }
    ]
  },

  /* ===================== Day 12 ===================== */
  {
    day: 12,
    date: "第 12 天",
    theme: "寓言小古文 · 守株待兔",
    items: [
      {
        type: "lunyu",
        title: "论语 · 三人行",
        emoji: "📚",
        grade: "小学",
        lines: [
          { text: "子曰：『三人行，必有我师焉。』", py: "zǐ yuē sān rén xíng bì yǒu wǒ shī yān",
            mean: "孔子说：『几个人一起走，其中一定有能当我老师的人。』",
            fun: "会修玩具的爷爷、跳绳最厉害的同桌，都能当你的『小老师』！" },
          { text: "『择其善者而从之，其不善者而改之。』", py: "zé qí shàn zhě ér cóng zhī qí bù shàn zhě ér gǎi zhī",
            mean: "『学习别人的优点；看到别人的缺点，就反省自己有没有、改掉它。』",
            fun: "像逛超市挑苹果：好的放进篮子，坏的提醒自己也别做。" }
        ],
        tip: "玩『今天谁是我的小老师』：让孩子说一个今天从别人身上学到的东西。"
      },
      {
        type: "xiaoguwen",
        title: "小古文 · 守株待兔",
        emoji: "🐰",
        grade: "小学",
        lines: ["宋人有耕者。", "田中有株，", "兔走触株，折颈而死。", "因释其耒而守株，", "冀复得兔。", "兔不可复得，", "而身为宋国笑。"],
        py: ["sòng rén yǒu gēng zhě", "tián zhōng yǒu zhū", "tù zǒu chù zhū zhé jǐng ér sǐ", "yīn shì qí lěi ér shǒu zhū", "jì fù dé tù", "tù bù kě fù dé", "ér shēn wéi sòng guó xiào"],
        notes: [
          { w: "耕者", m: "种田的人" }, { w: "株", m: "树桩" }, { w: "走", m: "跑" },
          { w: "释", m: "放下" }, { w: "耒", m: "农具" }, { w: "冀", m: "希望" }, { w: "身", m: "自己" }
        ],
        yi: "宋国有个种田人，田里有个树桩。一只兔子飞奔过来撞上树桩，折断脖子死了。种田人于是放下农具，天天守着树桩，希望再捡到兔子。兔子再也没来，他自己却成了宋国人的笑话。",
        fun: "古文里的『走』是『跑』！古人『走路』要说『行』——兔子要是慢慢『行』，就不会撞树啦。",
        tip: "和第 5 天学过的成语『守株待兔』对照读：先回忆白话故事，再指读古文，让孩子发现成语是从古文里长出来的。"
      },
      {
        type: "qianziwen",
        title: "千字文 · 寒来暑往",
        emoji: "🍂",
        grade: "小学",
        lines: ["寒来暑往，", "秋收冬藏。", "闰余成岁，", "律吕调阳。"],
        py: ["hán lái shǔ wǎng", "qiū shōu dōng cáng", "rùn yú chéng suì", "lǜ lǚ tiáo yáng"],
        pairs: [
          { text: "寒来暑往", mean: "寒冬来了，酷暑过去，四季不断轮换" },
          { text: "秋收冬藏", mean: "秋天收割庄稼，冬天把粮食储藏起来" },
          { text: "闰余成岁", mean: "历法多出的日子攒成闰月，合成完整的一年" },
          { text: "律吕调阳", mean: "古人用十二根律管校正音律、对应节气" }
        ],
        fun: "闰月就像时间的小口袋：多出来的日子攒一攒，变成一整个月！",
        tip: "结合家里的日历找一找『闰月』；背『寒来暑往，秋收冬藏』时配上四季图片。"
      }
    ],
    practice: [
      { q: "『三人行，必有我师焉』告诉我们什么？", type: "choice", options: ["要虚心向别人学习", "三个人才能出门", "老师一定有三个人"], answer: "要虚心向别人学习", explain: "每个人都有值得学习的地方。" },
      { q: "《守株待兔》里『兔走触株』的『走』在古文中是？", type: "choice", options: ["跑", "走路", "跳"], answer: "跑", explain: "古文『走』= 跑。" },
      { q: "请补充：兔不可复得，而身为宋国____。", type: "fill", answer: "笑", explain: "他自己成了宋国人的笑话。" },
      { q: "连线：古文词语和意思。", type: "match", pairs: [{left:"株", right:"树桩"}, {left:"耒", right:"农具"}, {left:"冀", right:"希望"}], explain: "株=树桩；耒=农具；冀=希望。" },
      { q: "判断：农夫最后又等到了很多兔子。", type: "judge", answer: false, explain: "兔不可复得——兔子再也没有来过。" },
      { q: "『寒来暑往』说的是什么？", type: "choice", options: ["四季不断轮换", "冬天很冷", "夏天很热"], answer: "四季不断轮换", explain: "寒暑来往 = 季节更替。" },
      { q: "判断：『秋收冬藏』是说秋天收获、冬天储藏。", type: "judge", answer: true, explain: "收 = 收割，藏 = 储藏。" }
    ],
    flashcards: [
      { word: "树桩", pinyin: "shù zhuāng", mean: "砍倒大树后留在土里的根和矮干。", emoji: "🪵" },
      { word: "农具", pinyin: "nóng jù", mean: "种田用的工具，古文里叫『耒』。", emoji: "⛏️" },
      { word: "虚心", pinyin: "xū xīn", mean: "不自满、愿意向别人学习。", emoji: "🙇" },
      { word: "四季", pinyin: "sì jì", mean: "春夏秋冬，一年四个季节。", emoji: "🍂" }
    ]
  },

  /* ===================== Day 13 ===================== */
  {
    day: 13,
    date: "第 13 天",
    theme: "智慧小古文 · 曹冲称象",
    items: [
      {
        type: "lunyu",
        title: "论语 · 温故知新",
        emoji: "📚",
        grade: "小学",
        lines: [
          { text: "子曰：『温故而知新，可以为师矣。』", py: "zǐ yuē wēn gù ér zhī xīn kě yǐ wéi shī yǐ",
            mean: "孔子说：『温习学过的知识，又能从中得到新的理解，这样的人就可以当老师了。』",
            fun: "昨天学的字，今天再看一眼，说不定能发现新秘密——这就是『温故知新』！" }
        ],
        tip: "把『翻字卡』和这句挂钩：复习不是重复，是『挖新宝藏』。"
      },
      {
        type: "xiaoguwen",
        title: "小古文 · 曹冲称象",
        emoji: "🐘",
        grade: "小学",
        lines: ["冲少聪察，", "生五六岁，智若成人。", "时孙权致巨象，", "太祖欲知其重，", "访之群下，咸莫能出其理。", "冲曰：『置象船上，刻其水痕，", "称物载之，则可知矣。』"],
        py: ["chōng shào cōng chá", "shēng wǔ liù suì zhì ruò chéng rén", "shí sūn quán zhì jù xiàng", "tài zǔ yù zhī qí zhòng", "fǎng zhī qún xià xián mò néng chū qí lǐ", "chōng yuē zhì xiàng chuán shàng kè qí shuǐ hén", "chēng wù zài zhī zé kě zhī yǐ"],
        notes: [
          { w: "聪察", m: "聪明会观察" }, { w: "致", m: "送来" }, { w: "太祖", m: "曹操" },
          { w: "访", m: "询问" }, { w: "咸", m: "都" }, { w: "置", m: "放" }, { w: "校", m: "比较核对" }
        ],
        yi: "曹冲从小聪明会观察，五六岁时想法就像大人。当时孙权送来一头大象，曹操想知道它有多重，问大臣们，都想不出办法。曹冲说：『把大象赶上大船，在船舷刻下水面到达的痕迹，再装石头到同样的痕迹，称一称石头，就知道大象多重了。』",
        fun: "五六岁的小孩赢了满朝大臣！用『船 + 石头』代替超级大秤——换个思路，难题就开了。",
        tip: "洗澡时用脸盆 + 玩具船做浮力小实验：放玩具看水位上升，亲身体会『水痕称重』的原理。"
      },
      {
        type: "qianziwen",
        title: "千字文 · 云腾致雨",
        emoji: "🌦️",
        grade: "小学",
        lines: ["云腾致雨，", "露结为霜。", "金生丽水，", "玉出昆冈。"],
        py: ["yún téng zhì yǔ", "lù jié wéi shuāng", "jīn shēng lì shuǐ", "yù chū kūn gāng"],
        pairs: [
          { text: "云腾致雨", mean: "云气上升，聚集多了就变成雨落下来" },
          { text: "露结为霜", mean: "露水遇到寒冷，就凝结成霜" },
          { text: "金生丽水", mean:"金子产在美丽的丽水（金沙江）一带" },
          { text: "玉出昆冈", mean: "美玉出自昆仑山冈" }
        ],
        fun: "雨是云『攒』出来的，霜是露水『冻』出来的——明早去阳台找找霜！",
        tip: "天冷时观察草叶上的霜，摸一摸再说『露结为霜』，把四字句贴在生活里。"
      }
    ],
    practice: [
      { q: "『温故而知新』里『故』指的是？", type: "choice", options: ["学过的知识", "故事", "故乡"], answer: "学过的知识", explain: "故 = 旧的、学过的；新 = 新的理解。" },
      { q: "曹冲用什么办法称出大象的重量？", type: "choice", options: ["赶上船刻水痕，再装石头称", "用一根超级大秤", "让大象站在跷跷板上"], answer: "赶上船刻水痕，再装石头称", explain: "置象船上，刻其水痕，称物载之。" },
      { q: "请补充：置象船上，刻其____。", type: "fill", answer: "水痕", explain: "刻下水面到达的痕迹。" },
      { q: "连线：古文词语和意思。", type: "match", pairs: [{left:"咸", right:"都"}, {left:"置", right:"放"}, {left:"访", right:"询问"}], explain: "咸=都；置=放；访=询问。" },
      { q: "判断：大臣们都想出了称象的好办法。", type: "judge", answer: false, explain: "咸莫能出其理——谁都想不出来。" },
      { q: "『云腾致雨，露结为霜』讲的是？", type: "choice", options: ["天气现象的形成", "做饭的方法", "花草的名字"], answer: "天气现象的形成", explain: "云变成雨，露结成霜。" },
      { q: "判断：『金生丽水，玉出昆冈』说明古人知道金子和玉石的产地。", type: "judge", answer: true, explain: "丽水出金、昆冈出玉。" }
    ],
    flashcards: [
      { word: "温故", pinyin: "wēn gù", mean: "温习学过的知识。", emoji: "📖" },
      { word: "办法", pinyin: "bàn fǎ", mean: "解决问题的方法。", emoji: "💡" },
      { word: "大象", pinyin: "dà xiàng", mean: "陆地上最大的动物，长鼻子大耳朵。", emoji: "🐘" },
      { word: "寒霜", pinyin: "hán shuāng", mean: "天冷时水汽结成的白色冰晶。", emoji: "❄️" }
    ]
  },

  /* ===================== Day 14 ===================== */
  {
    day: 14,
    date: "第 14 天",
    theme: "思辨小古文 · 刻舟求剑",
    items: [
      {
        type: "lunyu",
        title: "论语 · 知者不惑",
        emoji: "📚",
        grade: "初中",
        lines: [
          { text: "子曰：『知者不惑，仁者不忧，勇者不惧。』", py: "zǐ yuē zhì zhě bù huò rén zhě bù yōu yǒng zhě bù jù",
            mean: "孔子说：『有智慧的人不迷惑，有仁德的人不忧愁，勇敢的人不畏惧。』",
            fun: "『知』在这里通『智』——智慧。背下这句，就像集齐三颗勇气宝石！" }
        ],
        tip: "标『初中』的句子只要求读顺、知大意；做成『智慧—仁爱—勇敢』三面小旗贴墙上。"
      },
      {
        type: "xiaoguwen",
        title: "小古文 · 刻舟求剑",
        emoji: "⚔️",
        grade: "小学",
        lines: ["楚人有涉江者，", "其剑自舟中坠于水，", "遽契其舟，曰：", "『是吾剑之所从坠。』", "舟止，从其所契者入水求之。", "舟已行矣，而剑不行，", "求剑若此，不亦惑乎！"],
        py: ["chǔ rén yǒu shè jiāng zhě", "qí jiàn zì zhōu zhōng zhuì yú shuǐ", "jù qì qí zhōu yuē", "shì wú jiàn zhī suǒ cóng zhuì", "zhōu zhǐ cóng qí suǒ qì zhě rù shuǐ qiú zhī", "zhōu yǐ xíng yǐ ér jiàn bù xíng", "qiú jiàn ruò cǐ bù yì huò hū"],
        notes: [
          { w: "涉", m: "渡过" }, { w: "坠", m: "掉下" }, { w: "遽", m: "急忙" },
          { w: "契", m: "用刀刻记号" }, { w: "是", m: "这里" }, { w: "惑", m: "糊涂" }
        ],
        yi: "楚国有个渡江的人，他的剑从船上掉进水里。他急忙在船舷上刻了个记号，说：『这是我的剑掉下去的地方。』船停后，他从刻记号的地方下水找剑。船已经向前走了，剑却没有走，像这样找剑，不是太糊涂了吗！",
        fun: "船在走、剑不动——在船舷刻记号，就像给『移动的房子』贴门牌，当然找不到啦！",
        tip: "画一条会『动』的船：把纸片船放脸盆上推着走，让孩子明白参照物在动，记号就失效。"
      },
      {
        type: "qianziwen",
        title: "千字文 · 海咸河淡",
        emoji: "🌊",
        grade: "小学",
        lines: ["海咸河淡，", "鳞潜羽翔。", "龙师火帝，", "鸟官人皇。"],
        py: ["hǎi xián hé dàn", "lín qián yǔ xiáng", "lóng shī huǒ dì", "niǎo guān rén huáng"],
        pairs: [
          { text: "海咸河淡", mean: "海水是咸的，河水是淡的" },
          { text: "鳞潜羽翔", mean: "鱼儿在水里游，鸟儿在天上飞" },
          { text: "龙师火帝", mean: "传说中以龙命名官职的伏羲氏、教人用火的神农氏" },
          { text: "鸟官人皇", mean: "以鸟命名官职的少昊氏和远古的人皇氏——都是上古贤君" }
        ],
        fun: "『鳞』是鱼、『羽』是鸟——古人用身上的『装备』给动物分队！",
        tip: "画『水—空』两格图，让孩子把动物卡片分到『鳞潜』和『羽翔』两队。"
      }
    ],
    practice: [
      { q: "『知者不惑』里『知』通哪个字？", type: "choice", options: ["智", "知", "之"], answer: "智", explain: "知 = 智，智慧。" },
      { q: "楚人为什么在船舷上刻记号？", type: "choice", options: ["剑从那里掉进水里，他想照着记号找", "他想给船做装饰", "他怕忘记回家的路"], answer: "剑从那里掉进水里，他想照着记号找", explain: "是吾剑之所从坠——这是我的剑掉下去的地方。" },
      { q: "判断：船停了以后，楚人从刻记号的地方下水，找到了剑。", type: "judge", answer: false, explain: "舟已行矣，而剑不行——船走了，剑没走，当然找不到。" },
      { q: "请补充：舟已行矣，而剑____。", type: "fill", answer: "不行", explain: "不行 = 没有走。" },
      { q: "连线：古文词语和意思。", type: "match", pairs: [{left:"涉", right:"渡过"}, {left:"遽", right:"急忙"}, {left:"契", right:"刻记号"}], explain: "涉=渡过；遽=急忙；契=刻。" },
      { q: "这个故事告诉我们什么道理？", type: "choice", options: ["情况变了，办法也要跟着变", "剑要拿稳别掉水里", "坐船不能刻记号"], answer: "情况变了，办法也要跟着变", explain: "世界在动，死守旧记号没用。" },
      { q: "『海咸河淡』的意思是？", type: "choice", options: ["海水是咸的，河水是淡的", "海比河大", "鱼和鸟是好朋友"], answer: "海水是咸的，河水是淡的", explain: "咸/淡说的是味道。" }
    ],
    flashcards: [
      { word: "迷惑", pinyin: "mí huò", mean: "心里糊涂、分不清对错。", emoji: "😵" },
      { word: "记号", pinyin: "jì hao", mean: "做的小标记，帮助记住位置。", emoji: "✏️" },
      { word: "变化", pinyin: "biàn huà", mean: "情况跟原来不一样了。", emoji: "🔄" },
      { word: "勇敢", pinyin: "yǒng gǎn", mean: "不害怕、敢面对困难。", emoji: "🦁" }
    ]
  },

  /* ===================== Day 15 ===================== */
  {
    day: 15,
    date: "第 15 天",
    theme: "初中衔接 · 陋室铭",
    items: [
      {
        type: "lunyu",
        title: "论语 · 学而不思",
        emoji: "📚",
        grade: "初中",
        lines: [
          { text: "子曰：『学而不思则罔，思而不学则殆。』", py: "zǐ yuē xué ér bù sī zé wǎng sī ér bù xué zé dài",
            mean: "孔子说：『只读书不动脑，就会迷茫而没有收获；只空想不读书，就会疑惑而无定见。』",
            fun: "学是『吃饭』，思是『消化』——只吃不动脑会积食，只动脑不吃饭会饿晕！" }
        ],
        tip: "初中《论语十二章》必背句；让孩子举一例：哪次『光背不想』结果忘了？"
      },
      {
        type: "xiaoguwen",
        title: "小古文 · 陋室铭（节选）",
        emoji: "🛖",
        grade: "初中",
        lines: ["山不在高，有仙则名。", "水不在深，有龙则灵。", "斯是陋室，惟吾德馨。"],
        py: ["shān bù zài gāo yǒu xiān zé míng", "shuǐ bù zài shēn yǒu lóng zé líng", "sī shì lòu shì wéi wú dé xīn"],
        notes: [
          { w: "名", m: "出名" }, { w: "灵", m: "有灵气" }, { w: "斯", m: "这" },
          { w: "惟", m: "只" }, { w: "德馨", m: "品德像香气一样远扬" }
        ],
        yi: "山不在于高，有仙人住着就会出名；水不在于深，有龙住着就会显灵。这间屋子虽然简陋，但因为我（刘禹锡）品德高尚，它也变得香气满屋。",
        fun: "房子好不好，不看大不大，看住在里面的人『香不香』！刘禹锡被贬官住小破屋，还写出这么神气的文章。",
        tip: "这是初中课文节选，读顺即可、不必深讲；让孩子用『不在于…在于…』造句，如『玩具不在于多，在于好玩』。"
      },
      {
        type: "qianziwen",
        title: "千字文 · 知过必改",
        emoji: "⭐",
        grade: "小学",
        lines: ["知过必改，", "得能莫忘。", "罔谈彼短，", "靡恃己长。"],
        py: ["zhī guò bì gǎi", "dé néng mò wàng", "wǎng tán bǐ duǎn", "mí shì jǐ cháng"],
        pairs: [
          { text: "知过必改", mean: "知道自己错了，就一定要改正" },
          { text: "得能莫忘", mean: "学会的本领，不要忘了（要常复习）" },
          { text: "罔谈彼短", mean: "不要议论别人的短处" },
          { text: "靡恃己长", mean: "不要仗着自己的长处而骄傲" }
        ],
        fun: "这四句是古人的『好习惯打卡表』：改错、温习、不嚼舌根、不骄傲！",
        tip: "把四句做成 4 张习惯卡贴墙上，本周每做到一条就贴一颗星。"
      }
    ],
    practice: [
      { q: "『学而不思则罔』里『罔』的意思是？", type: "choice", options: ["迷茫而没有收获", "渔网", "忘记"], answer: "迷茫而没有收获", explain: "只学不想，就会迷惘无所得。" },
      { q: "『斯是陋室，惟吾德馨』夸的是什么？", type: "choice", options: ["住的人品德高尚", "屋子又大又新", "屋子很香"], answer: "住的人品德高尚", explain: "德馨 = 品德像香气远扬。" },
      { q: "请补充：山不在高，有仙则____。", type: "fill", answer: "名", explain: "有仙则名——有仙人就出名。" },
      { q: "连线：词语和意思。", type: "match", pairs: [{left:"仙", right:"让山出名"}, {left:"龙", right:"让水显灵"}, {left:"德馨", right:"品德远扬"}], explain: "山不在高有仙则名；水不在深有龙则灵。" },
      { q: "判断：刘禹锡觉得屋子简陋，就住得很不开心。", type: "judge", answer: false, explain: "他觉得只要自己品德好，陋室也『何陋之有』。" },
      { q: "『知过必改』告诉我们什么？", type: "choice", options: ["知道错了就要改正", "犯错没关系", "不要学习本领"], answer: "知道错了就要改正", explain: "过 = 过错，必改 = 一定要改。" },
      { q: "判断：学习只要多读书，不需要动脑筋想。", type: "judge", answer: false, explain: "学而不思则罔——学思要结合。" }
    ],
    flashcards: [
      { word: "思考", pinyin: "sī kǎo", mean: "动脑筋想问题。", emoji: "🤔" },
      { word: "品德", pinyin: "pǐn dé", mean: "一个人的品质和道德。", emoji: "🌟" },
      { word: "简陋", pinyin: "jiǎn lòu", mean: "简单破旧、不完备。", emoji: "🛖" },
      { word: "改正", pinyin: "gǎi zhèng", mean: "把错误改过来。", emoji: "✅" }
    ]
  }
];

/* 板块中文名 + 图标（用于课表卡片与总览） */
window.SECTION_META = {
  tongyao:   { name: "童谣",     icon: "🎵" },
  gushi:     { name: "古诗",     icon: "📜" },
  chengyu:   { name: "成语故事", icon: "🎯" },
  hanzi:     { name: "汉字启蒙", icon: "✍️" },
  chuantong: { name: "传统文化", icon: "🏮" },
  meiwen:    { name: "名家美文", icon: "📖" },
  shenhua:   { name: "神话历史", icon: "🌟" },
  lunyu:     { name: "论语金句", icon: "📚" },
  xiaoguwen: { name: "小古文",   icon: "🖋️" },
  qianziwen: { name: "千字文",   icon: "🌌" }
};
