/* ============================================================
 * 家庭备课宝典 · 课程数据（45 天）
 * 教材参照：沪教版（五四学制）小学语文 + 人文素养拓展（学而思人文课思路）
 * 适用：刚满 6 岁，提前启蒙 1–5 年级语文，国学覆盖小学到初中
 * 内容分级：1-10 基础周 | 11-30 国学两周（论语/小古文/千字文）| 31-45 成语谚语歇后语
 * 每天固定含一个「偏旁识字」板块（PIANPANG_45 自动注入）+ 自动派生练习题（上限 8 题）
 *
 * 数据结构：
 *   CURRICULUM = [ { day, date, theme, items:[...], practice:[...], flashcards:[...] } ]
 *   item.type ∈ tongyao|gushi|chengyu|hanzi|chuantong|meiwen|shenhua|lunyu|xiaoguwen|qianziwen|pianpang|yanyu|xiehouyu
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
        lines: ["春风轻轻吹，", "吹绿了柳树，", "吹红了桃花，", "吹醒了青蛙。", "吹来了燕子，", "吹暖了小河，", "吹软了泥土，", "吹笑了娃娃。"],
        py: ["chūn fēng qīng qīng chuī", "chuī lǜ le liǔ shù", "chuī hóng le táo huā", "chuī xǐng le qīng wā", "chuī lái le yàn zi", "chuī nuǎn le xiǎo hé", "chuī ruǎn le ní tǔ", "chuī xiào le wá wa"],
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
        lines: ["小公鸡，真美丽，", "红红的冠子花外衣。", "每天清早喔喔啼，", "叫我起床去上学。", "小公鸡，真神气，", "金黄脚爪尖又利。", "会捉虫，会看家，", "吵醒太阳笑哈哈。"],
        py: ["xiǎo gōng jī zhēn měi lì", "hóng hóng de guān zi huā wài yī", "měi tiān qīng zǎo ō ō tí", "jiào wǒ qǐ chuáng qù shàng xué", "xiǎo gōng jī zhēn shén qì", "jīn huáng jiǎo zhǎo jiān yòu lì", "huì zhuō chóng huì kàn jiā", "chǎo xǐng tài yáng xiào hā hā"],
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
        lines: ["二十三，糖瓜粘；", "二十四，扫房子；", "二十五，磨豆腐；", "二十六，去买肉；", "二十七，宰年鸡；", "二十八，把面发；", "二十九，蒸馒头；", "三十晚上守岁坐。"],
        py: ["èr shí sān táng guā zhān", "èr shí sì sǎo fáng zi", "èr shí wǔ mó dòu fu", "èr shí liù qù mǎi ròu", "èr shí qī zǎi nián jī", "èr shí bā bǎ miàn fā", "èr shí jiǔ zhēng mán tou", "sān shí wǎn shang shǒu suì zuò"],
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
        story: "过年啦！家家户户挂起红红灯笼、系上彩色彩带，房子一下子变得喜气洋洋，像穿上了节日的花衣服。你家的窗户上贴了什么呀？",
        yuyi: "过节时挂灯笼、系彩带，到处红红火火、热热闹闹。",
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
        story: "宋国有个农夫，一天『砰』的一声——一只小兔子跑得太快，一头撞在树桩上晕倒了。农夫捡到兔子乐坏了：『明天还在这儿等！』从此他再也不干活，天天守着树桩。等呀等呀，兔子再也没来，田里的庄稼全荒了。",
        yuyi: "守着树桩等兔子——不能光想靠好运气，要自己动手努力呀。",
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
        lines: ["月亮月亮光光，", "照在窗上凉凉。", "嫦娥姐姐笑，", "玉兔捣药忙。", "桂花树下坐，", "月饼圆又香。", "宝宝抬头看，", "梦里游月宫。"],
        py: ["yuè liang yuè liang guāng guāng", "zhào zài chuāng shang liáng liáng", "cháng é jiě jie xiào", "yù tù dǎo yào máng", "guì huā shù xià zuò", "yuè bǐng yuán yòu xiāng", "bǎo bao tái tóu kàn", "mèng lǐ yóu yuè gōng"],
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
        story: "花儿开得漂漂亮亮，月亮又大又圆，一家人围坐在一起吃月饼、看月亮——这就是最幸福的时刻啦！",
        yuyi: "花儿盛开、月亮圆圆，祝福一家人团团圆圆、幸福美满。",
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
        lines: ["小火苗，跳跳舞，", "红红的，暖乎乎。", "做饭煮汤都用它，", "小朋友，别去摸。", "大人不在不玩火，", "火苗发火真可怕。", "记住安全第一桩，", "平安娃娃人人夸。"],
        py: ["xiǎo huǒ miáo tiào tiào wǔ", "hóng hóng de nuǎn hū hū", "zuò fàn zhǔ tāng dōu yòng tā", "xiǎo péng you bié qù mō", "dà rén bù zài bù wán huǒ", "huǒ miáo fā huǒ zhēn kě pà", "jì zhù ān quán dì yī zhuāng", "píng ān wá wa rén rén kuā"],
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
        story: "老百姓的日子过得太苦啦：像掉进深深的冷水里，冷得发抖；又像被架在火上烤，热得受不了。",
        yuyi: "像泡在深水里、烤在大火上——形容日子过得非常非常苦。",
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
        lines: ["春风轻轻吹，小公鸡喔喔啼；", "咏鹅白毛浮绿水，悯农粒粒皆辛苦。", "月亮光光照嫦娥，小河唱歌送快乐；", "十天语文课，我是小小学霸！", "春节福字倒着贴，重阳登高敬老人；", "守株待兔空等待，水深火热要记牢。", "字卡翻翻不熟练，明天再战志气高；", "妈妈夸我进步大，亲一口来抱一抱！"],
        py: ["chūn fēng qīng qīng chuī", "yǒng é bái máo fú lǜ shuǐ", "yuè liang guāng guāng zhào cháng é", "shí tiān yǔ wén kè wǒ shì xiǎo xiǎo xué bà", "chūn jié fú zì dào zhe tiē", "shǒu zhū dài tù kōng děng dài", "zì kǎ fān fān bù shú liàn", "mā ma kuā wǒ jìn bù dà"],
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
            mean: "孔子爷爷说：学过的东西，常常拿出来再读一读、再想一想，心里就特别开心，像见到老朋友一样！",
            fun: "『说』在这里读 yuè，就是『悦』——开心。复习像游戏二周目，越玩越顺手！" },
          { text: "子曰：『有朋自远方来，不亦乐乎？』", py: "zǐ yuē yǒu péng zì yuǎn fāng lái bù yì lè hū",
            mean: "孔子爷爷说：好朋友从很远很远的地方来看你，一起学习一起玩，是不是特别高兴呀？",
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
        yi: "一群小孩在院子里玩得正欢，突然『扑通』一声——一个小孩爬上大水缸，掉进去啦！水一下子就没过了他。别的小孩都吓哭了、跑掉了，只有司马光不慌张。他抱起一块大石头，『哐当』一下把水缸砸了个大洞，水哗哗哗流出来，小孩得救喽！",
        fun: "司马光砸缸时只有七岁，和你差不多大！遇到急事不慌张、动脑筋，比力气更管用。",
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
          { text: "天地玄黄", mean: "天是深蓝深蓝的，地是黄黄大大的——这就是古人睁大眼睛看到的天地颜色！" },
          { text: "宇宙洪荒", mean: "好久好久以前，宇宙刚睁开眼睛，到处灰蒙蒙、空荡荡，像一大团没睡醒的雾。" },
          { text: "日月盈昃", mean: "月亮有时圆滚滚像大饼，有时弯弯像小船；太阳早上爬上来，傍晚溜下山。" },
          { text: "辰宿列张", mean: "夜空是块大黑布，星星们排好队一闪一闪，像撒了一地的亮晶晶小宝石。" }
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
            mean: "孔子爷爷说：几个小朋友一起走，里面一定有能教我本领的人——你会跳绳，他会折纸，都是小老师！",
            fun: "会修玩具的爷爷、跳绳最厉害的同桌，都能当你的『小老师』！" },
          { text: "『择其善者而从之，其不善者而改之。』", py: "zé qí shàn zhě ér cóng zhī qí bù shàn zhě ér gǎi zhī",
            mean: "看到别人棒的地方，就学过来；看到别人做得不好的地方，就偷偷检查自己：我有没有这样呀？有就改掉！",
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
        yi: "宋国有个种田人，田里有个大树桩。一天，一只兔子『嗖』地飞奔过来，『砰』撞上树桩，脖子一歪，死掉了。种田人白捡一只兔子，高兴坏啦！从此他天天守在树桩边，啥活也不干，就等兔子再来撞。结果呢？兔子再也没来，田也荒了，大家都笑话他。",
        fun: "古文里的『走』是『跑』！兔子要是慢慢『走』，就不会撞树啦。记住：好运气不会天天送上门！",
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
          { text: "寒来暑往", mean: "冬天走了夏天来，夏天走了冬天来，四季像在玩跑圈圈，一圈又一圈。" },
          { text: "秋收冬藏", mean: "秋天把粮食收回家，冬天把粮食藏得好好的——小松鼠藏松果也是这样哦！" },
          { text: "闰余成岁", mean: "日历上多出来的日子攒呀攒，攒成一个小小的『闰月』，凑成完整的一年。" },
          { text: "律吕调阳", mean: "古人有十二根神奇的小管子，吹一吹就能知道季节变化，像会唱歌的日历。" }
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
            mean: "孔子爷爷说：把学过的知识再读一遍，还能发现新的秘密——能做到这个，你都可以当小老师啦！",
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
        yi: "曹操得到一头超级大的象，他很想知道大象有多重。可是秤太小、大象太大，大臣们全都摇头没办法。这时，才五六岁的曹冲说：『我有主意！把大象赶上船，在船边画下水面的位置；再把大象牵下来，往船上装石头，装到水面又到那条线。称一称石头，就知道大象多重啦！』大家都夸他真聪明！",
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
          { text: "云腾致雨", mean: "小云朵越飞越高、越聚越多，抱在一起变成大乌云，『哗啦啦』就下雨啦！" },
          { text: "露结为霜", mean: "夜里的小露珠一碰到冷空气，冷得直发抖，就变成了白白亮亮的小霜花。" },
          { text: "金生丽水", mean:"亮闪闪的金子，藏在丽水（金沙江）的沙子里，等人们去把它们找出来。" },
          { text: "玉出昆冈", mean: "又滑又漂亮的美玉，是从高高的昆仑山上来的，像大山藏起来的宝贝。" }
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
            mean: "孔子爷爷说：聪明的人不迷糊，善良的人不发愁，勇敢的人不害怕。三种『超能力』，你想不想要？",
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
        yi: "有个楚国人坐船过江，『扑通』——他的宝剑掉进水里啦！他不急不忙，掏出小刀在船边刻了个记号，说：『剑是从这儿掉下去的。』等船停了，他就从刻记号的地方跳下水找剑。嘻嘻，船一直在走，剑可不会跟着走呀！他当然找不到啦，你说他糊涂不糊涂？",
        fun: "船在走、剑不动——在船边刻记号，就像给『移动的房子』贴门牌，当然找不到啦！",
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
          { text: "海咸河淡", mean: "海水咸咸的（像放了好多盐），河水淡淡的——尝一口就知道到了哪儿！" },
          { text: "鳞潜羽翔", mean: "小鱼摆摆尾巴在水里游，小鸟扇扇翅膀在天上飞，一个在水里一个在天上。" },
          { text: "龙师火帝", mean: "很久很久以前，伏羲爷爷用龙给官职起名字，神农爷爷教大家用火烧饭吃。" },
          { text: "鸟官人皇", mean: "少昊爷爷用小鸟给官职起名字，还有更老更老的人皇爷爷——都是很棒的领袖。" }
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
            mean: "孔子爷爷说：只读书不动脑筋，就像吃饭不嚼就吞，会迷糊的；光瞎想不读书，就像空着肚子喊饿，越想越糊涂！",
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
        yi: "山不用很高，有神仙住着就有名气；水不用很深，有龙住着就很神奇。我的小屋虽然又小又旧，可我品德好，小屋里就像有香气一样，棒极了！",
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
          { text: "知过必改", mean: "知道自己做错了，就大大方方说『对不起，我改』——这才是勇敢的好孩子！" },
          { text: "得能莫忘", mean: "学会的本领要常常练一练，就像骑小自行车，太久不骑会忘的哦。" },
          { text: "罔谈彼短", mean: "不指着别人说『你这里不好、那里不好』——别人这么说你，你会难过吗？" },
          { text: "靡恃己长", mean: "会跳绳不骄傲，会认字不显摆——真本领不用吹，大家都能看见。" }
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
  },

  /* ===================== Day 16 · 国学第二周 ===================== */
  {
    day: 16,
    date: "第 16 天",
    theme: "论语 · 己所不欲 + 揠苗助长",
    items: [
      {
        type: "lunyu", title: "论语 · 己所不欲", emoji: "📚", grade: "初中",
        lines: [
          { text: "子曰：『己所不欲，勿施于人。』", py: "zǐ yuē jǐ suǒ bù yù wù shī yú rén",
            mean: "孔子爷爷说：你自己不喜欢的事，也别让别人去做。你不想被抢玩具，就先别抢别人的玩具哦！",
            fun: "你不想被抢玩具，就别抢别人的——这就是『将心比心』！" }
        ],
        tip: "标『初中』的句子读顺、知大意即可；玩『换一换』游戏：你不想要的事，能对弟弟/妹妹做吗？"
      },
      {
        type: "xiaoguwen", title: "小古文 · 揠苗助长", emoji: "🌱", grade: "小学",
        lines: ["宋人悯其苗之不长，", "揠而助之。", "芒芒然归，谓其子曰：", "『今日病矣，予助苗长矣！』", "其子趋视之，苗皆槁矣。"],
        py: ["sòng rén mǐn qí miáo zhī bù zhǎng", "yà ér zhù zhī", "máng máng rán guī wèi qí zǐ yuē", "jīn rì bìng yǐ yǔ zhù miáo zhǎng yǐ", "qí zǐ qū shì zhī miáo jiē gǎo yǐ"],
        notes: [{ w: "悯", m: "担心" }, { w: "揠", m: "拔" }, { w: "芒芒然", m: "疲惫的样子" }, { w: "病", m: "累坏" }, { w: "趋", m: "快步走" }, { w: "槁", m: "枯死" }],
        yi: "宋国有个急性子，嫌自己的禾苗长得太慢。他想了个『好办法』——把禾苗一棵一棵往上拔高！忙了一整天，累得腰都直不起来，回家还得意地说：『今天可累坏我了，我帮禾苗长高啦！』他儿子跑到田里一看——哎呀，禾苗全都枯死了！",
        fun: "禾苗要一天天慢慢长，拔它反而害死它——学习也一样，每天进步一点点最靠谱！",
        tip: "种一盆小绿豆，每天量一量高度，体会『生长急不得』。"
      },
      {
        type: "qianziwen", title: "千字文 · 剑号巨阙", emoji: "⚔️", grade: "小学",
        lines: ["剑号巨阙，", "珠称夜光。", "果珍李柰，", "菜重芥姜。"],
        py: ["jiàn hào jù què", "zhū chēng yè guāng", "guǒ zhēn lǐ nài", "cài zhòng jiè jiāng"],
        pairs: [
          { text: "剑号巨阙", mean: "最有名的宝剑叫『巨阙』，锋利得很，威风得像大山！" },
          { text: "珠称夜光", mean: "最有名的珍珠叫『夜光珠』，黑夜里也亮晶晶，像会发光的小月亮。" },
          { text: "果珍李柰", mean: "水果里的宝贝是李子和柰子，甜甜脆脆——你最爱吃哪种水果呀？" },
          { text: "菜重芥姜", mean: "蔬菜里的明星是芥菜和生姜，生姜辣辣的，喝碗姜汤身体暖暖的。" }
        ],
        fun: "古人的『名牌排行榜』：宝剑第一巨阙，珍珠第一夜光！",
        tip: "和孩子玩『排行榜』：说出自己心中的第一名水果、第一名玩具。"
      }
    ],
    practice: [
      { q: "『己所不欲，勿施于人』告诉我们什么？", type: "choice", options: ["自己不喜欢的事，也不要强加给别人", "不喜欢的东西要扔掉", "别人给的都要接受"], answer: "自己不喜欢的事，也不要强加给别人", explain: "要会『将心比心』。" },
      { q: "《揠苗助长》里，宋人做了什么傻事？", type: "choice", options: ["把禾苗一棵棵往上拔", "天天给禾苗浇水", "给禾苗施肥"], answer: "把禾苗一棵棵往上拔", explain: "揠 = 拔，他想帮禾苗长高。" },
      { q: "判断：禾苗被拔之后长得更高了。", type: "judge", answer: false, explain: "苗皆槁矣——禾苗全都枯死了。" },
      { q: "『剑号巨阙，珠称夜光』说的是什么？", type: "choice", options: ["最有名的宝剑和珍珠", "天上的星星", "古代的皇帝"], answer: "最有名的宝剑和珍珠", explain: "巨阙剑、夜光珠是宝物中的第一名。" }
    ],
    flashcards: [
      { word: "秧苗", pinyin: "yāng miáo", mean: "刚长出来的幼小禾苗。", emoji: "🌱" },
      { word: "白费", pinyin: "bái fèi", mean: "白白浪费，没有用处。", emoji: "💨" },
      { word: "宝剑", pinyin: "bǎo jiàn", mean: "珍贵锋利的剑。", emoji: "⚔️" },
      { word: "珍珠", pinyin: "zhēn zhū", mean: "蚌壳里长出的圆润宝石。", emoji: "🦪" }
    ]
  },

  /* ===================== Day 17 ===================== */
  {
    day: 17,
    date: "第 17 天",
    theme: "论语 · 不耻下问 + 亡羊补牢",
    items: [
      {
        type: "lunyu", title: "论语 · 敏而好学", emoji: "📚", grade: "小学",
        lines: [
          { text: "子曰：『敏而好学，不耻下问。』", py: "zǐ yuē mǐn ér hào xué bù chǐ xià wèn",
            mean: "孔子爷爷说：聪明又爱学习的人，向比自己小、比自己弱的人请教问题，一点儿也不丢人！",
            fun: "连孔子都向小孩子请教过问题——问问题不丢人，不问才可惜！" }
        ],
        tip: "鼓励孩子今天向任何人（包括弟弟妹妹）问一个『为什么』。"
      },
      {
        type: "xiaoguwen", title: "小古文 · 亡羊补牢", emoji: "🐑", grade: "小学",
        lines: ["昔有牧羊者，牢破，亡其羊。", "邻人劝之修牢，不听。", "明日，复亡数羊。", "牧者悔，急修其牢。", "其后羊不复亡。", "故曰：亡羊补牢，未为迟也。"],
        py: ["xī yǒu mù yáng zhě láo pò wáng qí yáng", "lín rén quàn zhī xiū láo bù tīng", "míng rì fù wáng shù yáng", "mù zhě huǐ jí xiū qí láo", "qí hòu yáng bù fù wáng", "gù yuē wáng yáng bǔ láo wèi wéi chí yě"],
        notes: [{ w: "牢", m: "羊圈" }, { w: "亡", m: "丢失" }, { w: "复", m: "又" }, { w: "悔", m: "后悔" }, { w: "故", m: "所以" }, { w: "迟", m: "晚" }],
        yi: "从前有个放羊的人，羊圈破了个洞，夜里狼钻进来叼走了一只羊。邻居说：『快把洞补上吧！』他说：『羊都丢了，补啥呀？』第二天，狼又来叼走一只羊！他这才后悔，赶紧把洞补得结结实实。从那以后，羊再也没丢过。你看，出错了马上改，就还来得及！",
        fun: "出错不怕，怕的是不补『洞』——错题本就是小朋友的『补羊圈』！",
        tip: "联系错题本：昨天写错的字，今天补写三遍，就是『亡羊补牢』。"
      },
      {
        type: "qianziwen", title: "千字文 · 始制文字", emoji: "📜", grade: "小学",
        lines: ["始制文字，", "乃服衣裳。", "推位让国，", "有虞陶唐。"],
        py: ["shǐ zhì wén zì", "nǎi fú yī shang", "tuī wèi ràng guó", "yǒu yú táo táng"],
        pairs: [
          { text: "始制文字", mean: "仓颉爷爷看着小鸟的脚印，想出了写字的办法——最早的字就这样来啦！" },
          { text: "乃服衣裳", mean: "嫘祖奶奶养蚕抽丝，教大家做衣服——从此人们不用光着身子挨冻啦。" },
          { text: "推位让国", mean: "尧爷爷年纪大了，把王位让给最聪明的舜——好东西愿意让给更合适的人。" },
          { text: "有虞陶唐", mean: "这两位就是尧和舜，都是又聪明又大方的贤君。" }
        ],
        fun: "没有仓颉造字，我们就没法读故事书——谢谢文字！",
        tip: "和孩子一起『造』一个象形字：画一座山、一条河，猜猜是什么字。"
      }
    ],
    practice: [
      { q: "『不耻下问』是说不以向谁请教为耻？", type: "choice", options: ["不如自己的人", "老师", "爸爸妈妈"], answer: "不如自己的人", explain: "下问 = 向地位、学问不如自己的人请教。" },
      { q: "放羊人第一次丢羊后，他听邻居的劝了吗？", type: "choice", options: ["没有听", "马上修好了", "修了但没修好"], answer: "没有听", explain: "邻人劝之修牢，不听。" },
      { q: "请补充：亡羊补牢，未为____也。", type: "fill", answer: "迟", explain: "现在补救，还不算晚。" },
      { q: "判断：传说中仓颉最早发明了文字。", type: "judge", answer: true, explain: "始制文字——仓颉造字。" }
    ],
    flashcards: [
      { word: "请教", pinyin: "qǐng jiào", mean: "有礼貌地向别人问问题。", emoji: "🙋" },
      { word: "羊圈", pinyin: "yáng juàn", mean: "关羊的围栏，古文里叫『牢』。", emoji: "🐑" },
      { word: "后悔", pinyin: "hòu huǐ", mean: "事后觉得当初不该那样做。", emoji: "😔" },
      { word: "及时", pinyin: "jí shí", mean: "正赶上时候，不晚。", emoji: "⏰" }
    ]
  },

  /* ===================== Day 18 ===================== */
  {
    day: 18,
    date: "第 18 天",
    theme: "论语 · 乐之者 + 狐假虎威",
    items: [
      {
        type: "lunyu", title: "论语 · 知之者", emoji: "📚", grade: "初中",
        lines: [
          { text: "子曰：『知之者不如好之者，好之者不如乐之者。』", py: "zǐ yuē zhī zhī zhě bù rú hào zhī zhě hào zhī zhě bù rú lè zhī zhě",
            mean: "孔子爷爷说：知道学习好，不如喜欢学习；喜欢学习，不如把学习当成最好玩的事！",
            fun: "三级台阶：『要我学』→『我要学』→『我爱学』，你到哪一级？" }
        ],
        tip: "问问孩子：哪一科是你『爱玩』的？把学习变成游戏就是乐之者。"
      },
      {
        type: "xiaoguwen", title: "小古文 · 狐假虎威", emoji: "🦊", grade: "小学",
        lines: ["虎求百兽而食之，得狐。", "狐曰：『子无敢食我也！", "天帝使我长百兽。", "子随我后，观百兽见我敢不走乎？』", "虎以为然，遂与之行。", "兽见之皆走。", "虎不知兽畏己而走，以为畏狐也。"],
        py: ["hǔ qiú bǎi shòu ér shí zhī dé hú", "hú yuē zǐ wú gǎn shí wǒ yě", "tiān dì shǐ wǒ zhǎng bǎi shòu", "zǐ suí wǒ hòu guān bǎi shòu jiàn wǒ gǎn bù zǒu hū", "hǔ yǐ wéi rán suì yǔ zhī xíng", "shòu jiàn zhī jiē zǒu", "hǔ bù zhī shòu wèi jǐ ér zǒu yǐ wéi wèi hú yě"],
        notes: [{ w: "求", m: "寻找" }, { w: "长", m: "做首领" }, { w: "走", m: "逃跑" }, { w: "遂", m: "于是" }, { w: "皆", m: "都" }, { w: "畏", m: "害怕" }],
        yi: "老虎抓到一只狐狸，刚要吃，狐狸眼珠子一转：『慢着！老天爷派我当百兽之王，你敢吃我？不信你跟我走一圈，看看动物们怕不怕我！』老虎半信半疑地跟在后面。哇，小动物们看见他们，全都撒腿就跑！老虎不知道，大家怕的其实是它自己呀！",
        fun: "『假』在这里是『借』的意思——狐狸借着老虎的威风吓唬百兽！",
        tip: "全家玩角色扮演：一人当狐狸大摇大摆，一人当老虎，其他人当逃跑的百兽。"
      },
      {
        type: "qianziwen", title: "千字文 · 吊民伐罪", emoji: "🏰", grade: "小学",
        lines: ["吊民伐罪，", "周发殷汤。", "坐朝问道，", "垂拱平章。"],
        py: ["diào mín fá zuì", "zhōu fā yīn tāng", "zuò cháo wèn dào", "chuí gǒng píng zhāng"],
        pairs: [
          { text: "吊民伐罪", mean: "好国王会安慰受苦的老百姓，批评做坏事的坏蛋——像超级英雄一样！" },
          { text: "周发殷汤", mean: "周武王和商汤王都是了不起的王，带着大家打败了坏国王。" },
          { text: "坐朝问道", mean: "国王坐在朝堂上认真问：『怎样才能把国家管好呀？』像上课认真提问。" },
          { text: "垂拱平章", mean: "好国王把事情安排得妥妥当当，轻轻一挥手，国家就整整齐齐。" }
        ],
        fun: "最厉害的国王，不用大喊大叫，袖子一挥国家就太平！",
        tip: "讲讲『周武王伐纣』的故事开头，孩子最爱听打仗的。"
      }
    ],
    practice: [
      { q: "『好之者不如乐之者』告诉我们，学习的最高境界是？", type: "choice", options: ["以学习为快乐", "只学不玩", "只玩不学"], answer: "以学习为快乐", explain: "乐之者 = 把学习当乐趣。" },
      { q: "《狐假虎威》里，狐狸借谁的威风吓跑百兽？", type: "choice", options: ["老虎", "狮子", "大象"], answer: "老虎", explain: "狐狸跟着老虎走，百兽怕的是老虎。" },
      { q: "判断：老虎最后明白狐狸在骗它。", type: "judge", answer: false, explain: "虎不知兽畏己而走，以为畏狐也。" },
      { q: "『吊民伐罪』的意思是？", type: "choice", options: ["安抚百姓、讨伐有罪的君主", "把百姓抓起来", "给罪犯送礼"], answer: "安抚百姓、讨伐有罪的君主", explain: "吊 = 安抚，伐 = 讨伐。" }
    ],
    flashcards: [
      { word: "威风", pinyin: "wēi fēng", mean: "让人敬畏的气势。", emoji: "🐯" },
      { word: "狡猾", pinyin: "jiǎo huá", mean: "诡计多端、爱耍小聪明。", emoji: "🦊" },
      { word: "百兽", pinyin: "bǎi shòu", mean: "各种各样的野兽。", emoji: "🦁" },
      { word: "兴趣", pinyin: "xìng qù", mean: "对事物的喜爱和好奇。", emoji: "🎨" }
    ]
  },

  /* ===================== Day 19 ===================== */
  {
    day: 19,
    date: "第 19 天",
    theme: "论语 · 逝者如斯 + 画蛇添足",
    items: [
      {
        type: "lunyu", title: "论语 · 逝者如斯", emoji: "📚", grade: "初中",
        lines: [
          { text: "子在川上曰：『逝者如斯夫，不舍昼夜。』", py: "zǐ zài chuān shàng yuē shì zhě rú sī fú bù shě zhòu yè",
            mean: "孔子爷爷站在河边说：时间就像这河水一样，白天黑夜不停地流走，再也不回来啦！",
            fun: "时间像小河，流走就不回头——所以今天的字要今天练！" }
        ],
        tip: "带孩子看一次流水（或水龙头），说一句『逝者如斯夫』。"
      },
      {
        type: "xiaoguwen", title: "小古文 · 画蛇添足", emoji: "🐍", grade: "小学",
        lines: ["楚人有祠者，赐其舍人卮酒。", "相谓曰：『画地为蛇，先成者饮。』", "一人先成，引酒且饮，", "曰：『吾能为之足。』", "足未成，他人蛇成，", "夺其卮曰：『蛇固无足，安能为之足？』遂饮其酒。"],
        py: ["chǔ rén yǒu cí zhě cì qí shè rén zhī jiǔ", "xiāng wèi yuē huà dì wéi shé xiān chéng zhě yǐn", "yī rén xiān chéng yǐn jiǔ qiě yǐn", "yuē wú néng wéi zhī zú", "zú wèi chéng tā rén shé chéng", "duó qí zhī yuē shé gù wú zú ān néng wéi zhī zú suì yǐn qí jiǔ"],
        notes: [{ w: "祠", m: "祭祀" }, { w: "卮", m: "酒杯" }, { w: "引", m: "拿起" }, { w: "固", m: "本来" }, { w: "安", m: "怎么" }],
        yi: "几个人分一壶酒，说好谁先画完一条蛇，酒就归谁。一个人『刷刷刷』最先画完，得意洋洋地拿起酒壶：『我再给蛇添几只脚！』脚还没画完，另一个人画好了，一把抢过酒壶：『蛇哪有脚啊？你画的不算！』说完咕咚咕咚把酒喝了。唉，多此一举，酒没啦！",
        fun: "多画四只脚，到嘴的酒飞了——做多不如做刚刚好！",
        tip: "画一条蛇，再故意添上脚，让孩子自己说出『画蛇添足』。"
      },
      {
        type: "qianziwen", title: "千字文 · 爱育黎首", emoji: "🤝", grade: "小学",
        lines: ["爱育黎首，", "臣伏戎羌。", "遐迩一体，", "率宾归王。"],
        py: ["ài yù lí shǒu", "chén fú róng qiāng", "xiá ěr yī tǐ", "shuài bīn guī wáng"],
        pairs: [
          { text: "爱育黎首", mean: "像妈妈爱你一样，爱护所有的老百姓，让大家吃饱穿暖。" },
          { text: "臣伏戎羌", mean: "远方的朋友们都说：『这样的好国王，我们愿意跟你做好朋友！』" },
          { text: "遐迩一体", mean: "住得再远的人和住得近的人，都像一家人一样亲。" },
          { text: "率宾归王", mean: "天下的大家都愿意跟着贤明的国王，像小鸟跟着鸟妈妈。" }
        ],
        fun: "好国王不发火，远亲近邻都愿意来做朋友！",
        tip: "解释『黎首』就是老百姓；问问孩子：怎样让全班小朋友都喜欢和你玩？"
      }
    ],
    practice: [
      { q: "『逝者如斯夫』里『逝者』指的是什么？", type: "choice", options: ["流逝的时光", "去世的人", "流动的河水"], answer: "流逝的时光", explain: "孔子站在河边感叹时间像河水一样流走。" },
      { q: "画蛇的人为什么输掉了酒？", type: "choice", options: ["他给蛇添上了脚", "他画得太慢", "他把酒打翻了"], answer: "他给蛇添上了脚", explain: "蛇固无足——蛇本来没有脚。" },
      { q: "判断：蛇本来长着四只脚。", type: "judge", answer: false, explain: "蛇没有脚，添脚是多余的。" },
      { q: "请补充《千字文》：爱育黎首，臣伏____。", type: "fill", answer: "戎羌", explain: "臣伏戎羌。" }
    ],
    flashcards: [
      { word: "流逝", pinyin: "liú shì", mean: "像流水一样悄悄过去。", emoji: "🏞️" },
      { word: "多余", pinyin: "duō yú", mean: "多出来的、不需要的。", emoji: "➕" },
      { word: "喝酒", pinyin: "hē jiǔ", mean: "饮酒（故事里的奖品）。", emoji: "🍶" },
      { word: "珍惜", pinyin: "zhēn xī", mean: "爱惜、不浪费。", emoji: "💎" }
    ]
  },

  /* ===================== Day 20 ===================== */
  {
    day: 20,
    date: "第 20 天",
    theme: "论语 · 匹夫之志 + 井底之蛙",
    items: [
      {
        type: "lunyu", title: "论语 · 三军夺帅", emoji: "📚", grade: "初中",
        lines: [
          { text: "子曰：『三军可夺帅也，匹夫不可夺志也。』", py: "zǐ yuē sān jūn kě duó shuài yě pǐ fū bù kě duó zhì yě",
            mean: "孔子爷爷说：一支军队可以没有将军，但一个人心里的小目标，谁也抢不走！",
            fun: "志向是藏在你心里的『小旗子』，谁也抢不走！" }
        ],
        tip: "问孩子长大想做什么，告诉他：认准的事，别人笑话也不改，这就是『志』。"
      },
      {
        type: "xiaoguwen", title: "小古文 · 井底之蛙", emoji: "🐸", grade: "小学",
        lines: ["有蛙居于井底，", "常谓人曰：『天不过井口大也。』", "东海之鳖闻之，", "告以海之广大，浩瀚无边。", "蛙乃知天之高、海之阔，", "非井口所能容也。"],
        py: ["yǒu wā jū yú jǐng dǐ", "cháng wèi rén yuē tiān bù guò jǐng kǒu dà yě", "dōng hǎi zhī biē wén zhī", "gào yǐ hǎi zhī guǎng dà hào hàn wú biān", "wā nǎi zhī tiān zhī gāo hǎi zhī kuò", "fēi jǐng kǒu suǒ néng róng yě"],
        notes: [{ w: "谓", m: "对…说" }, { w: "鳖", m: "大甲鱼" }, { w: "浩瀚", m: "辽阔无边" }, { w: "乃", m: "才" }, { w: "容", m: "装下" }],
        yi: "一口井里住着一只小青蛙，它天天说：『天就井口这么大，我在这儿最舒服啦！』一只东海的大甲鱼告诉它：『海大得看不到边，天也高得没个头，你那口井才多大点儿呀！』小青蛙这才明白：原来世界这么大，我以前看到的只是小小的一角！",
        fun: "没见过大海的青蛙，以为天只有井口大——多出去走走，才知道世界有多大！",
        tip: "用卷纸筒做成『井』，让孩子从筒里看天花板，再拿开看看——亲身体会『眼界』。"
      },
      {
        type: "qianziwen", title: "千字文 · 鸣凤在竹", emoji: "🦚", grade: "小学",
        lines: ["鸣凤在竹，", "白驹食场。", "化被草木，", "赖及万方。"],
        py: ["míng fèng zài zhú", "bái jū shí chǎng", "huà bèi cǎo mù", "lài jí wàn fāng"],
        pairs: [
          { text: "鸣凤在竹", mean: "凤凰在竹林里唱歌，唱得可好听啦——好国王来了，吉祥鸟都来报到。" },
          { text: "白驹食场", mean: "白白的小马在草场上蹦蹦跳跳吃青草，吃得可开心啦。" },
          { text: "化被草木", mean: "国王的仁慈像春天一样，连小草小花都感觉到暖暖的。" },
          { text: "赖及万方", mean: "好的恩惠像阳光，照到四面八方每一个角落。" }
        ],
        fun: "凤凰爱竹子、小马爱草场——太平年景，连花草都开心！",
        tip: "画『凤凰+竹子+小白马』一张小画，边画边念这四句。"
      }
    ],
    practice: [
      { q: "『匹夫不可夺志也』是说普通人的什么不能被夺走？", type: "choice", options: ["志向", "玩具", "零食"], answer: "志向", explain: "志 = 志向、理想。" },
      { q: "井底的青蛙为什么觉得天很小？", type: "choice", options: ["它一直住在井里，只能看到井口大的天", "天真的很小", "它眼睛坏了"], answer: "它一直住在井里，只能看到井口大的天", explain: "眼界被井口限制了。" },
      { q: "判断：大甲鱼告诉青蛙，大海比井大得多。", type: "judge", answer: true, explain: "告以海之广大，浩瀚无边。" },
      { q: "请补充《千字文》：鸣凤在竹，白驹____。", type: "fill", answer: "食场", explain: "白驹食场。" }
    ],
    flashcards: [
      { word: "志向", pinyin: "zhì xiàng", mean: "心里认准的目标和理想。", emoji: "🚩" },
      { word: "井底", pinyin: "jǐng dǐ", mean: "水井的最下面。", emoji: "🕳️" },
      { word: "眼界", pinyin: "yǎn jiè", mean: "能看到的范围，比喻见识。", emoji: "👀" },
      { word: "广阔", pinyin: "guǎng kuò", mean: "又大又辽阔。", emoji: "🌅" }
    ]
  },

  /* ===================== Day 21 ===================== */
  {
    day: 21,
    date: "第 21 天",
    theme: "论语 · 松柏后凋 + 精卫填海",
    items: [
      {
        type: "lunyu", title: "论语 · 岁寒松柏", emoji: "📚", grade: "初中",
        lines: [
          { text: "子曰：『岁寒，然后知松柏之后凋也。』", py: "zǐ yuē suì hán rán hòu zhī sōng bǎi zhī hòu diāo yě",
            mean: "孔子爷爷说：到了最冷最冷的冬天，别的树都光秃秃了，松树和柏树还是绿油油的——真坚强！",
            fun: "天气越冷，松柏越绿——困难越大，越能看出谁最坚强！" }
        ],
        tip: "冬天散步时找一棵松树，摸摸它的叶子，说一句『岁寒知松柏』。"
      },
      {
        type: "xiaoguwen", title: "小古文 · 精卫填海", emoji: "🐦", grade: "小学",
        lines: ["炎帝之少女，名曰女娃。", "女娃游于东海，", "溺而不返，故为精卫。", "常衔西山之木石，", "以堙于东海。"],
        py: ["yán dì zhī shào nǚ míng yuē nǚ wá", "nǚ wá yóu yú dōng hǎi", "nì ér bù fǎn gù wéi jīng wèi", "cháng xián xī shān zhī mù shí", "yǐ yīn yú dōng hǎi"],
        notes: [{ w: "少女", m: "小女儿" }, { w: "溺", m: "溺水" }, { w: "故", m: "因此" }, { w: "衔", m: "用嘴叼" }, { w: "堙", m: "填塞" }],
        yi: "炎帝的小女儿女娃去东海边玩，不小心掉进海里，再也没有回来。她变成了一只小鸟，名字叫精卫。精卫每天从西山叼来小树枝、小石子，『扑棱扑棱』飞到东海丢下去，发誓要把大海填平。海那么大，鸟那么小，可她一天也不休息！",
        fun: "一只小鸟想把大海填平——别人笑她傻，她却天天不放弃！",
        tip: "这是四年级课文原文；和孩子一起用积木『填』一盆水，边填边念，体会坚持。"
      },
      {
        type: "qianziwen", title: "千字文 · 盖此身发", emoji: "🙏", grade: "小学",
        lines: ["盖此身发，", "四大五常。", "恭惟鞠养，", "岂敢毁伤。"],
        py: ["gài cǐ shēn fà", "sì dà wǔ cháng", "gōng wéi jū yǎng", "qǐ gǎn huǐ shāng"],
        pairs: [
          { text: "盖此身发", mean: "我们的身体、我们的头发，都是爸爸妈妈送给我们的宝贝。" },
          { text: "四大五常", mean: "要好好爱护自己的身体，还要做讲仁义、懂礼貌的好孩子。" },
          { text: "恭惟鞠养", mean: "想一想：是谁天天给你做饭、陪你读书？是爸爸妈妈——记得说谢谢！" },
          { text: "岂敢毁伤", mean: "身体是宝贝，不乱碰危险的东西弄伤自己——爱护自己也是爱爸爸妈妈。" }
        ],
        fun: "身体发肤受之父母——好好吃饭、不碰危险，就是孝顺的第一步！",
        tip: "结合安全教育讲：保护自己的身体，就是让爸爸妈妈放心。"
      }
    ],
    practice: [
      { q: "『岁寒，然后知松柏之后凋也』赞美的是什么？", type: "choice", options: ["松柏耐寒，比喻人有骨气", "松柏长得快", "冬天很冷"], answer: "松柏耐寒，比喻人有骨气", explain: "越冷越绿，比喻困难中见品格。" },
      { q: "精卫原来是谁的女儿？", type: "choice", options: ["炎帝", "黄帝", "大禹"], answer: "炎帝", explain: "炎帝之少女，名曰女娃。" },
      { q: "判断：精卫发誓要把大海填平。", type: "judge", answer: true, explain: "常衔西山之木石，以堙于东海。" },
      { q: "『盖此身发，四大五常』提醒我们什么？", type: "choice", options: ["爱护自己的身体", "多买衣服", "剪短头发"], answer: "爱护自己的身体", explain: "身体发肤受之父母，岂敢毁伤。" }
    ],
    flashcards: [
      { word: "松柏", pinyin: "sōng bǎi", mean: "松树和柏树，冬天也常青。", emoji: "🌲" },
      { word: "填海", pinyin: "tián hǎi", mean: "用木石把海填起来。", emoji: "🌊" },
      { word: "发誓", pinyin: "fā shì", mean: "下定决心一定要做到。", emoji: "✊" },
      { word: "爱护", pinyin: "ài hù", mean: "爱惜保护。", emoji: "💗" }
    ]
  },

  /* ===================== Day 22 ===================== */
  {
    day: 22,
    date: "第 22 天",
    theme: "论语 · 君子坦荡 + 王戎识李",
    items: [
      {
        type: "lunyu", title: "论语 · 君子坦荡荡", emoji: "📚", grade: "初中",
        lines: [
          { text: "子曰：『君子坦荡荡，小人长戚戚。』", py: "zǐ yuē jūn zǐ tǎn dàng dàng xiǎo rén cháng qī qī",
            mean: "孔子爷爷说：君子心里亮堂堂，睡觉都踏实；小人心里老是七上八下，总担心这担心那。",
            fun: "心里没鬼，睡觉都香——这就是『坦荡荡』！" }
        ],
        tip: "问孩子：今天有没有一件事，说出来心里就特别轻松？"
      },
      {
        type: "xiaoguwen", title: "小古文 · 王戎不取道旁李", emoji: "🍑", grade: "小学",
        lines: ["王戎七岁，尝与诸小儿游。", "看道边李树多子折枝，", "诸儿竞走取之，唯戎不动。", "人问之，答曰：", "『树在道边而多子，此必苦李。』", "取之，信然。"],
        py: ["wáng róng qī suì cháng yǔ zhū xiǎo ér yóu", "kàn dào biān lǐ shù duō zǐ zhé zhī", "zhū ér jìng zǒu qǔ zhī wéi róng bù dòng", "rén wèn zhī dá yuē", "shù zài dào biān ér duō zǐ cǐ bì kǔ lǐ", "qǔ zhī xìn rán"],
        notes: [{ w: "尝", m: "曾经" }, { w: "诸", m: "众、许多" }, { w: "竞走", m: "争着跑去" }, { w: "唯", m: "只有" }, { w: "信然", m: "果然如此" }],
        yi: "王戎七岁的时候，和一群小朋友出去玩。路边有棵李树，结满了李子，把树枝都压弯了。小朋友们『呼啦』一下全跑去摘，只有王戎站着不动。别人问他为啥不去，他说：『树长在路边，李子还这么多，肯定是苦的——甜的早被摘光啦！』大家一尝，哇，真的是苦的！",
        fun: "好吃的李子长在路边，早被人摘光啦——剩下满树果子，肯定有鬼！王戎用脑子省了力气。",
        tip: "这是四年级课文原文；出个推理题：公园长椅上有瓶没开封的饮料，能随便喝吗？"
      },
      {
        type: "qianziwen", title: "千字文 · 女慕贞洁", emoji: "🎖️", grade: "小学",
        lines: ["女慕贞洁，", "男效才良。", "信使可覆，", "器欲难量。"],
        py: ["nǚ mù zhēn jié", "nán xiào cái liáng", "xìn shǐ kě fù", "qì yù nán liáng"],
        pairs: [
          { text: "女慕贞洁", mean: "女孩子要做干净、诚实、说话算数的好孩子。" },
          { text: "男效才良", mean: "男孩子要向有本领、有礼貌的人学习，像他们一样棒。" },
          { text: "信使可覆", mean: "答应过的事情要做到，说过的话要算数——这才是让人相信的好孩子。" },
          { text: "器欲难量", mean: "心要像大海一样大，不跟人计较小事情，能装下好多好多快乐。" }
        ],
        fun: "说到做到的小朋友，信用就像金子一样亮！",
        tip: "和孩子定一个『说到做到』小约定，今晚就兑现一次。"
      }
    ],
    practice: [
      { q: "『君子坦荡荡』形容君子怎样？", type: "choice", options: ["心胸开阔坦荡", "长得很高", "力气很大"], answer: "心胸开阔坦荡", explain: "坦荡荡 = 心里开阔、不藏私心。" },
      { q: "王戎为什么不摘路边的李子？", type: "choice", options: ["树在路边却果子多，一定是苦的", "他不喜欢吃李子", "他够不着"], answer: "树在路边却果子多，一定是苦的", explain: "树在道边而多子，此必苦李。" },
      { q: "判断：别的孩子都去抢摘李子了。", type: "judge", answer: true, explain: "诸儿竞走取之。" },
      { q: "请补充《千字文》：女慕贞洁，男效____。", type: "fill", answer: "才良", explain: "男效才良。" }
    ],
    flashcards: [
      { word: "坦荡", pinyin: "tǎn dàng", mean: "心胸开阔、没有私心。", emoji: "🌞" },
      { word: "观察", pinyin: "guān chá", mean: "仔细地看。", emoji: "🔍" },
      { word: "推理", pinyin: "tuī lǐ", mean: "根据线索想明白事情。", emoji: "🧠" },
      { word: "信用", pinyin: "xìn yòng", mean: "说到做到、让人信任。", emoji: "🤝" }
    ]
  },

  /* ===================== Day 23 ===================== */
  {
    day: 23,
    date: "第 23 天",
    theme: "论语 · 德不孤 + 囊萤夜读",
    items: [
      {
        type: "lunyu", title: "论语 · 德不孤", emoji: "📚", grade: "初中",
        lines: [
          { text: "子曰：『德不孤，必有邻。』", py: "zǐ yuē dé bù gū bì yǒu lín",
            mean: "孔子爷爷说：好孩子不会没朋友的——你对别人好，别人也愿意跟你玩！",
            fun: "你对别人好，好朋友就会像小磁铁一样吸过来！" }
        ],
        tip: "问孩子：你的好朋友为什么喜欢你？引导他说出自己的好品质。"
      },
      {
        type: "xiaoguwen", title: "小古文 · 囊萤夜读", emoji: "✨", grade: "小学",
        lines: ["胤恭勤不倦，博学多通。", "家贫不常得油，", "夏月则练囊盛数十萤火以照书，", "以夜继日焉。"],
        py: ["yìn gōng qín bù juàn bó xué duō tōng", "jiā pín bù cháng dé yóu", "xià yuè zé liàn náng shèng shù shí yíng huǒ yǐ zhào shū", "yǐ yè jì rì yān"],
        notes: [{ w: "恭勤", m: "勤勉" }, { w: "通", m: "通晓" }, { w: "练囊", m: "白绢做的口袋" }, { w: "盛", m: "装" }, { w: "继", m: "接续" }],
        yi: "车胤特别爱读书，可是家里穷，买不起灯油，晚上黑漆漆的怎么办呢？夏天的晚上，他抓来几十只萤火虫，装进小白布袋里。萤火虫一闪一闪，就像一盏小灯笼！他就借着这点点光，一夜接一夜地读书。后来他成了很有学问的人。",
        fun: "没有台灯，就抓一袋萤火虫当『小灯泡』——想读书，办法总比困难多！",
        tip: "这是四年级课文原文；关灯体验一分钟『没有灯怎么看书』，再说说车胤的办法。"
      },
      {
        type: "qianziwen", title: "千字文 · 墨悲丝染", emoji: "🕊️", grade: "小学",
        lines: ["墨悲丝染，", "诗赞羔羊。", "景行维贤，", "克念作圣。"],
        py: ["mò bēi sī rǎn", "shī zàn gāo yáng", "jǐng xíng wéi xián", "kè niàn zuò shèng"],
        pairs: [
          { text: "墨悲丝染", mean: "白丝巾掉进染缸就变颜色了——跟什么样的人玩就会变成什么样，要跟好孩子玩！" },
          { text: "诗赞羔羊", mean: "《诗经》夸小羔羊又干净又善良——我们也要做干干净净、心地善良的孩子。" },
          { text: "景行维贤", mean: "看到别人做得好，就偷偷学起来——慢慢的，你也会变得那么好。" },
          { text: "克念作圣", mean: "想吃第二颗糖时能忍住，想发脾气时能冷静——管住自己最了不起！" }
        ],
        fun: "白丝染什么颜色就变成什么颜色——跟什么朋友玩，就会学什么样！",
        tip: "和孩子聊『近朱者赤』：选一个学习上的好榜样，说说要向他学什么。"
      }
    ],
    practice: [
      { q: "『德不孤，必有邻』的意思是？", type: "choice", options: ["有德行的人不会孤单，一定会有朋友", "邻居很多", "不要一个人住"], answer: "有德行的人不会孤单，一定会有朋友", explain: "好人自然有伙伴。" },
      { q: "车胤用什么来照明读书？", type: "choice", options: ["装在袋子里的萤火虫", "蜡烛", "油灯"], answer: "装在袋子里的萤火虫", explain: "练囊盛数十萤火以照书。" },
      { q: "判断：车胤家里很富有，点得起灯。", type: "judge", answer: false, explain: "家贫不常得油——家里穷买不起灯油。" },
      { q: "『墨悲丝染』告诫我们什么？", type: "choice", options: ["环境能改变人，要选好环境和朋友", "白丝很容易脏", "墨子很爱哭"], answer: "环境能改变人，要选好环境和朋友", explain: "近朱者赤，近墨者黑。" }
    ],
    flashcards: [
      { word: "邻居", pinyin: "lín jū", mean: "住在附近的人家，也指好伙伴。", emoji: "🏡" },
      { word: "萤火", pinyin: "yíng huǒ", mean: "萤火虫发出的光。", emoji: "✨" },
      { word: "照亮", pinyin: "zhào liàng", mean: "用光使东西变亮。", emoji: "🔦" },
      { word: "环境", pinyin: "huán jìng", mean: "周围的地方和氛围。", emoji: "🌳" }
    ]
  },

  /* ===================== Day 24 ===================== */
  {
    day: 24,
    date: "第 24 天",
    theme: "论语 · 见贤思齐 + 铁杵成针",
    items: [
      {
        type: "lunyu", title: "论语 · 见贤思齐", emoji: "📚", grade: "初中",
        lines: [
          { text: "子曰：『见贤思齐焉，见不贤而内自省也。』", py: "zǐ yuē jiàn xián sī qí yān jiàn bù xián ér nèi zì xǐng yě",
            mean: "孔子爷爷说：看到厉害的人，就想『我也要像他一样棒』；看到做得不好的人，就悄悄想想自己有没有同样的毛病。",
            fun: "看见别人跳绳好，就想『我也要练』——这就是见贤思齐！" }
        ],
        tip: "今天找一个『小榜样』：说说班里/家里谁有值得学的地方。"
      },
      {
        type: "xiaoguwen", title: "小古文 · 铁杵成针", emoji: "🪡", grade: "小学",
        lines: ["磨针溪，在象耳山下。", "世传李太白读书山中，未成，弃去。", "过是溪，逢老媪方磨铁杵。", "问之，曰：『欲作针。』", "太白感其意，还卒业。"],
        py: ["mó zhēn xī zài xiàng ěr shān xià", "shì chuán lǐ tài bái dú shū shān zhōng wèi chéng qì qù", "guò shì xī féng lǎo ǎo fāng mó tiě chǔ", "wèn zhī yuē yù zuò zhēn", "tài bái gǎn qí yì huán zú yè"],
        notes: [{ w: "弃去", m: "放弃离开" }, { w: "老媪", m: "老婆婆" }, { w: "方", m: "正在" }, { w: "杵", m: "捣物的棒槌" }, { w: "感", m: "被感动" }, { w: "卒业", m: "完成学业" }],
        yi: "李白小时候读书读烦了，偷偷跑出去玩。路过一条小溪，看见一位老婆婆正在石头上『嚓嚓嚓』地磨一根粗铁棒。李白好奇地问：『婆婆，您在干嘛呀？』老婆婆说：『我要把它磨成一根绣花针。』李白惊呆了：这么粗的铁棒，天天磨，真的能变成针！他马上跑回去，认认真真把书读完了。",
        fun: "铁棒那么粗，针那么细——只要天天磨，铁棒也能变绣花针！",
        tip: "这是四年级课文原文；和孩子一起算：每天练字 10 分钟，一年是多少小时？"
      },
      {
        type: "qianziwen", title: "千字文 · 德建名立", emoji: "🏅", grade: "小学",
        lines: ["德建名立，", "形端表正。", "空谷传声，", "虚堂习听。"],
        py: ["dé jiàn míng lì", "xíng duān biǎo zhèng", "kōng gǔ chuán shēng", "xū táng xí tīng"],
        pairs: [
          { text: "德建名立", mean: "好好做事、好好做人，好名声自己就会来找你，不用喊。" },
          { text: "形端表正", mean: "站得直直的、坐得正正的，人就像小松树一样精神！" },
          { text: "空谷传声", mean: "对着大山喊『你好——』，大山会回答你『你好——』，山谷传声可远啦！" },
          { text: "虚堂习听", mean: "空空的大房子里说话，回音嗡嗡的，听得特别清楚。" }
        ],
        fun: "你做过的好事，就像山谷里的回声，会传得很远很远！",
        tip: "对着走廊喊一声名字听回声，再说『空谷传声』。"
      }
    ],
    practice: [
      { q: "请补充：见贤思齐焉，见不贤而内____也。", type: "fill", answer: "自省", explain: "内自省 = 在心里反省自己。" },
      { q: "老婆婆要把铁杵磨成什么？", type: "choice", options: ["针", "刀", "钉子"], answer: "针", explain: "曰：『欲作针。』" },
      { q: "判断：李白被老妇人的话打动，回去完成了学业。", type: "judge", answer: true, explain: "太白感其意，还卒业。" },
      { q: "『德建名立』是说什么？", type: "choice", options: ["德行建立了，名声自然树立", "盖房子要先打地基", "名字要起得响亮"], answer: "德行建立了，名声自然树立", explain: "先有好品德，才有好名声。" }
    ],
    flashcards: [
      { word: "铁杵", pinyin: "tiě chǔ", mean: "捣东西用的粗铁棒。", emoji: "🔩" },
      { word: "磨针", pinyin: "mó zhēn", mean: "把铁棒磨成针，比喻下苦功。", emoji: "🪡" },
      { word: "感动", pinyin: "gǎn dòng", mean: "被别人的行为触动内心。", emoji: "🥹" },
      { word: "建立", pinyin: "jiàn lì", mean: "从无到有地树立起来。", emoji: "🏗️" }
    ]
  },

  /* ===================== Day 25 ===================== */
  {
    day: 25,
    date: "第 25 天",
    theme: "论语 · 工欲善其事 + 学弈",
    items: [
      {
        type: "lunyu", title: "论语 · 工欲善其事", emoji: "📚", grade: "初中",
        lines: [
          { text: "子曰：『工欲善其事，必先利其器。』", py: "zǐ yuē gōng yù shàn qí shì bì xiān lì qí qì",
            mean: "孔子爷爷说：木工叔叔想把活干好，会先把刀磨快。你想写好字，也要先把铅笔削好、本子摆好哦！",
            fun: "想画好画，先削好铅笔——写字前先把田字格摆好！" }
        ],
        tip: "做作业前和孩子一起『利其器』：摆好铅笔、橡皮、田字格，再开始写。"
      },
      {
        type: "xiaoguwen", title: "小古文 · 学弈", emoji: "♟️", grade: "小学",
        lines: ["弈秋，通国之善弈者也。", "使弈秋诲二人弈，", "其一人专心致志，惟弈秋之为听；", "一人虽听之，", "一心以为有鸿鹄将至，思援弓缴而射之。", "虽与之俱学，弗若之矣。"],
        py: ["yì qiū tōng guó zhī shàn yì zhě yě", "shǐ yì qiū huì èr rén yì", "qí yī rén zhuān xīn zhì zhì wéi yì qiū zhī wéi tīng", "yī rén suī tīng zhī", "yī xīn yǐ wéi yǒu hóng hú jiāng zhì sī yuán gōng zhuó ér shè zhī", "suī yǔ zhī jù xué fú ruò zhī yǐ"],
        notes: [{ w: "通国", m: "全国" }, { w: "诲", m: "教导" }, { w: "致志", m: "集中意志" }, { w: "鸿鹄", m: "天鹅" }, { w: "援", m: "拉" }, { w: "弗若", m: "不如" }],
        yi: "弈秋是全国最厉害的下棋高手。他教两个学生下棋：一个学生眼睛盯着棋盘，老师讲的每句话都认真听；另一个学生呢，耳朵在听，心里却想：『是不是有天鹅要飞过来呀？我要拿弓箭射它！』结果，一起学的两个人，专心的那个学得好，分心的那个差远啦！",
        fun: "同一个老师，一个成了高手一个没学成——差的不在脑子，在『心飞没飞走』！",
        tip: "这是六年级课文原文；和孩子玩『专心 10 分钟』：计时拼拼图，手机全收走。"
      },
      {
        type: "qianziwen", title: "千字文 · 祸因恶积", emoji: "⏳", grade: "小学",
        lines: ["祸因恶积，", "福缘善庆。", "尺璧非宝，", "寸阴是竞。"],
        py: ["huò yīn è jī", "fú yuán shàn qìng", "chǐ bì fēi bǎo", "cùn yīn shì jìng"],
        pairs: [
          { text: "祸因恶积", mean: "坏事做一件没被发现，做两件也没被发现……攒多了，麻烦就找上门啦。" },
          { text: "福缘善庆", mean: "帮别人一次，快乐存一点；好事做多了，好运气就嗡嗡飞来找你。" },
          { text: "尺璧非宝", mean: "一块大大的美玉，也比不上时间珍贵——时间花掉就买不回来啦！" },
          { text: "寸阴是竞", mean: "一寸长的时间也要珍惜——玩要玩个痛快，学也要学个认真！" }
        ],
        fun: "每天背一句国学，就是在给自己的『福气银行』存钱！",
        tip: "设一个『存钱罐时间』：每天存 10 分钟学习，周末看看存了多少。"
      }
    ],
    practice: [
      { q: "『工欲善其事，必先利其器』强调什么？", type: "choice", options: ["先准备好工具和方法", "工具越贵越好", "干活要快"], answer: "先准备好工具和方法", explain: "利其器 = 先把工具准备好。" },
      { q: "《学弈》里两个学生，谁学得好？", type: "choice", options: ["专心听讲的那一个", "想射天鹅的那一个", "两个一样好"], answer: "专心听讲的那一个", explain: "其一人专心致志，惟弈秋之为听。" },
      { q: "判断：两人棋艺有差别，是因为智力不同。", type: "judge", answer: false, explain: "一个专心一个分心，不是智力问题。" },
      { q: "请补充《千字文》：祸因恶积，福缘____。", type: "fill", answer: "善庆", explain: "福缘善庆。" }
    ],
    flashcards: [
      { word: "准备", pinyin: "zhǔn bèi", mean: "事先安排好要用的东西。", emoji: "🎒" },
      { word: "专心", pinyin: "zhuān xīn", mean: "集中注意力、不分心。", emoji: "🎯" },
      { word: "下棋", pinyin: "xià qí", mean: "进行棋类游戏。", emoji: "♟️" },
      { word: "工具", pinyin: "gōng jù", mean: "干活用的器具。", emoji: "🔧" }
    ]
  },

  /* ===================== Day 26 ===================== */
  {
    day: 26,
    date: "第 26 天",
    theme: "论语 · 人无远虑 + 两小儿辩日",
    items: [
      {
        type: "lunyu", title: "论语 · 人无远虑", emoji: "📚", grade: "初中",
        lines: [
          { text: "子曰：『人无远虑，必有近忧。』", py: "zǐ yuē rén wú yuǎn lǜ bì yǒu jìn yōu",
            mean: "孔子爷爷说：不提前想一想明天的事，明天就会手忙脚乱。今晚收拾好书包，明早就不慌啦！",
            fun: "明天要远足，今晚就收拾好书包——这就是『远虑』！" }
        ],
        tip: "今晚让孩子自己收拾明天的书包，体会『提前准备不慌张』。"
      },
      {
        type: "xiaoguwen", title: "小古文 · 两小儿辩日", emoji: "🌞", grade: "小学",
        lines: ["孔子东游，见两小儿辩斗，问其故。", "一儿曰：『我以日始出时去人近，", "而日中时远也。』", "一儿曰：『我以日初出远，", "而日中时近也。』", "孔子不能决也。", "两小儿笑曰：『孰为汝多知乎？』"],
        py: ["kǒng zǐ dōng yóu jiàn liǎng xiǎo ér biàn dòu wèn qí gù", "yī ér yuē wǒ yǐ rì shǐ chū shí qù rén jìn", "ér rì zhōng shí yuǎn yě", "yī ér yuē wǒ yǐ rì chū chū yuǎn", "ér rì zhōng shí jìn yě", "kǒng zǐ bù néng jué yě", "liǎng xiǎo ér xiào yuē shú wèi rǔ duō zhì hū"],
        notes: [{ w: "辩斗", m: "争论" }, { w: "以", m: "认为" }, { w: "去", m: "距离" }, { w: "决", m: "判断" }, { w: "孰", m: "谁" }, { w: "汝", m: "你" }],
        yi: "孔子出门游学，看见两个小孩争得面红耳赤。一个说：『太阳刚升起来时离我们近，你看它多大呀！中午变小了，就远了。』另一个说：『不对不对！早晨凉凉的，中午热乎乎的，热就说明中午近！』孔子听了，也分不清谁对谁错。两个小孩笑了：『原来大学问家也有不知道的呀！』",
        fun: "连孔子都有答不上的问题——承认『不知道』，也是一种大智慧！",
        tip: "这是六年级课文原文；早晚各看一次太阳，比大小、试温度，说说两小儿各自的理由。"
      },
      {
        type: "qianziwen", title: "千字文 · 资父事君", emoji: "👨‍👧", grade: "小学",
        lines: ["资父事君，", "曰严与敬。", "孝当竭力，", "忠则尽命。"],
        py: ["zī fù shì jūn", "yuē yán yǔ jìng", "xiào dāng jié lì", "zhōng zé jìn mìng"],
        pairs: [
          { text: "资父事君", mean: "帮爸爸妈妈做小事，认真完成该做的事——小小的你也能担起小小的责任。" },
          { text: "曰严与敬", mean: "做事情认认真真，对人客客气气，大人小孩都喜欢。" },
          { text: "孝当竭力", mean: "给爸妈捶捶背、帮忙拿拖鞋，用尽全力爱他们——爱要大声做出来！" },
          { text: "忠则尽命", mean: "答应别人的事，就要用心用心再用心地做好。" }
        ],
        fun: "给爸爸妈妈捶捶背、倒杯水，就是小朋友的『孝当竭力』！",
        tip: "今天让孩子为家长做一件小事，说一句『孝当竭力』。"
      }
    ],
    practice: [
      { q: "『人无远虑，必有近忧』告诫我们什么？", type: "choice", options: ["要有长远打算", "不要担心明天", "忧愁没有用"], answer: "要有长远打算", explain: "远虑 = 提前考虑。" },
      { q: "两小儿争论太阳什么时候离人近，孔子怎么回答？", type: "choice", options: ["他也判断不了谁对谁错", "早晨近", "中午近"], answer: "他也判断不了谁对谁错", explain: "孔子不能决也。" },
      { q: "判断：孔子承认自己也有不懂的事，这是诚实的表现。", type: "judge", answer: true, explain: "知之为知之，不知为不知，是知也。" },
      { q: "『孝当竭力』讲的是？", type: "choice", options: ["孝顺父母要竭尽全力", "尽力玩耍", "听老师的话"], answer: "孝顺父母要竭尽全力", explain: "孝 = 孝顺，竭力 = 用尽力量。" }
    ],
    flashcards: [
      { word: "远虑", pinyin: "yuǎn lǜ", mean: "为将来做打算。", emoji: "🔭" },
      { word: "辩论", pinyin: "biàn lùn", mean: "各说各的道理来争论。", emoji: "💬" },
      { word: "诚实", pinyin: "chéng shí", mean: "说真话、不骗人。", emoji: "💛" },
      { word: "孝顺", pinyin: "xiào shùn", mean: "尊敬爱护父母。", emoji: "👨‍👧" }
    ]
  },

  /* ===================== Day 27 ===================== */
  {
    day: 27,
    date: "第 27 天",
    theme: "论语 · 小不忍 + 伯牙鼓琴",
    items: [
      {
        type: "lunyu", title: "论语 · 小不忍", emoji: "📚", grade: "初中",
        lines: [
          { text: "子曰：『小不忍则乱大谋。』", py: "zǐ yuē xiǎo bù rěn zé luàn dà móu",
            mean: "孔子爷爷说：一点点小事都忍不住，就会把大事情搞砸。就像搭积木，一发火全推倒，多可惜！",
            fun: "等一等再吃糖，牙才不疼——小忍耐换来大健康！" }
        ],
        tip: "玩『延迟满足』：棉花糖实验——等 10 分钟，奖励翻倍。"
      },
      {
        type: "xiaoguwen", title: "小古文 · 伯牙鼓琴", emoji: "🎵", grade: "小学",
        lines: ["伯牙鼓琴，钟子期听之。", "方鼓琴而志在太山，", "钟子期曰：『善哉乎鼓琴！巍巍乎若太山。』", "少选之间而志在流水，", "钟子期又曰：『善哉乎鼓琴！汤汤乎若流水。』", "钟子期死，伯牙破琴绝弦，", "终身不复鼓琴，以为世无足复为鼓琴者。"],
        py: ["bó yá gǔ qín zhōng zǐ qī tīng zhī", "fāng gǔ qín ér zhì zài tài shān", "zhōng zǐ qī yuē shàn zāi hū gǔ qín wēi wēi hū ruò tài shān", "shǎo xuǎn zhī jiān ér zhì zài liú shuǐ", "zhōng zǐ qī yòu yuē shàn zāi hū gǔ qín shāng shāng hū ruò liú shuǐ", "zhōng zǐ qī sǐ bó yá pò qín jué xián", "zhōng shēng bù fù gǔ qín yǐ wéi shì wú zú fù wéi gǔ qín zhě"],
        notes: [{ w: "鼓", m: "弹" }, { w: "志", m: "心志" }, { w: "巍巍", m: "高大的样子" }, { w: "少选", m: "一会儿" }, { w: "绝", m: "断" }, { w: "足", m: "值得" }],
        yi: "伯牙弹琴弹得特别好，钟子期特别会听。伯牙心里想着高山弹一曲，钟子期马上说：『真好听！像大山一样高高耸立！』伯牙心里想着流水弹一曲，钟子期又说：『真妙！像大河一样哗哗流淌！』后来钟子期去世了，伯牙伤心地把琴摔破、把弦扯断，再也不弹了——因为世界上再也没有能听懂他琴声的人了。",
        fun: "好朋友就是那个『你一弹，他就懂』的人——所以伯牙的琴声，只弹给知音听！",
        tip: "这是六年级课文原文；放一段音乐，和孩子互相猜『这段音乐像高山还是流水』。"
      },
      {
        type: "qianziwen", title: "千字文 · 临深履薄", emoji: "🧊", grade: "小学",
        lines: ["临深履薄，", "夙兴温凊。", "似兰斯馨，", "如松之盛。"],
        py: ["lín shēn lǚ bó", "sù xīng wēn qìng", "sì lán sī xīn", "rú sōng zhī shèng"],
        pairs: [
          { text: "临深履薄", mean: "到马路边、水坑边要小心，像踩在薄薄的冰上——安全第一！" },
          { text: "夙兴温凊", mean: "古时候的好孩子早早起床，冬天给爸妈暖被窝，夏天给爸妈扇扇子。" },
          { text: "似兰斯馨", mean: "品德好的孩子像兰花，走到哪儿都香香的，大家都愿意靠近。" },
          { text: "如松之盛", mean: "像大松树一样，冬天也不怕冷，四季都绿油油、精神满满！" }
        ],
        fun: "走在冰上要轻轻的——小心驶得万年船！",
        tip: "在地板上贴一条『薄冰线』，让孩子轻轻走过，说一句『临深履薄』。"
      }
    ],
    practice: [
      { q: "『小不忍则乱大谋』告诫我们什么？", type: "choice", options: ["小事不忍耐会坏了大事", "小事不用管", "大事才要忍耐"], answer: "小事不忍耐会坏了大事", explain: "忍一时，成大事。" },
      { q: "伯牙的知音是谁？", type: "choice", options: ["钟子期", "孔子", "李白"], answer: "钟子期", explain: "伯牙鼓琴，钟子期听之。" },
      { q: "请补充：钟子期死后，伯牙____，终身不复鼓琴。", type: "fill", answer: "破琴绝弦", explain: "摔破琴、挑断弦，再也不弹了。" },
      { q: "『临深履薄』形容什么？", type: "choice", options: ["像走近深渊、踩在薄冰上一样小心", "河水很深", "冬天很滑"], answer: "像走近深渊、踩在薄冰上一样小心", explain: "形容做事非常谨慎。" }
    ],
    flashcards: [
      { word: "忍耐", pinyin: "rěn nài", mean: "忍住性子不发作。", emoji: "🧘" },
      { word: "知音", pinyin: "zhī yīn", mean: "真正懂自己的好朋友。", emoji: "🎵" },
      { word: "古琴", pinyin: "gǔ qín", mean: "古代的七弦琴。", emoji: "🎼" },
      { word: "谨慎", pinyin: "jǐn shèn", mean: "小心、不冒失。", emoji: "🧊" }
    ]
  },

  /* ===================== Day 28 ===================== */
  {
    day: 28,
    date: "第 28 天",
    theme: "论语 · 道听涂说 + 书戴嵩画牛",
    items: [
      {
        type: "lunyu", title: "论语 · 道听涂说", emoji: "📚", grade: "初中",
        lines: [
          { text: "子曰：『道听而涂说，德之弃也。』", py: "zǐ yuē dào tīng ér tú shuō dé zhī qì yě",
            mean: "孔子爷爷说：路上听来的话，没弄明白就到处讲，可不是好习惯。要先问一句：是真的吗？",
            fun: "『听说』要打个问号——没亲眼见到，先别忙着传！" }
        ],
        tip: "玩『传话游戏』：一句话传三个人，看看最后变成什么样，体会『道听涂说』。"
      },
      {
        type: "xiaoguwen", title: "小古文 · 书戴嵩画牛", emoji: "🐂", grade: "小学",
        lines: ["蜀中有杜处士，好书画，所宝以百数。", "有戴嵩《牛》一轴，尤所爱。", "一日曝书画，有一牧童见之，拊掌大笑，", "曰：『此画斗牛也。", "牛斗，力在角，尾搐入两股间，", "今乃掉尾而斗，谬矣。』处士笑而然之。"],
        py: ["shǔ zhōng yǒu dù chǔ shì hào shū huà suǒ bǎo yǐ bǎi shù", "yǒu dài sōng niú yī zhóu yóu suǒ ài", "yī rì pù shū huà yǒu yī mù tóng jiàn zhī fǔ zhǎng dà xiào", "yuē cǐ huà dòu niú yě", "niú dòu lì zài jiǎo wěi chù rù liǎng gǔ jiān", "jīn nǎi diào wěi ér dòu miù yǐ chǔ shì xiào ér rán zhī"],
        notes: [{ w: "处士", m: "有才德而不做官的人" }, { w: "曝", m: "晒" }, { w: "拊掌", m: "拍手" }, { w: "搐", m: "抽缩" }, { w: "股", m: "大腿" }, { w: "然", m: "认为对" }],
        yi: "四川有个杜处士，爱好书画，珍藏的书画数以百计。其中有一幅戴嵩画的《斗牛图》，他尤其喜爱。一天他晒书画，一个牧童看见了，拍手大笑说：『这画的是斗牛啊。牛打架时力气用在角上，尾巴紧紧夹在两腿之间，画上却摇着尾巴相斗，画错了。』杜处士笑了，认为牧童说得对。",
        fun: "名画家也会画错——天天放牛的牧童，才是真正的『牛专家』！",
        tip: "这是六年级课文原文；找一张牛的照片，和孩子观察牛的尾巴在干什么。"
      },
      {
        type: "qianziwen", title: "千字文 · 川流不息", emoji: "🏞️", grade: "小学",
        lines: ["川流不息，", "渊澄取映。", "容止若思，", "言辞安定。"],
        py: ["chuān liú bù xī", "yuān chéng qǔ yìng", "róng zhǐ ruò sī", "yán cí ān dìng"],
        pairs: [
          { text: "川流不息", mean: "小河哗啦哗啦一直流，不偷懒不停下——学本领也要这样坚持。" },
          { text: "渊澄取映", mean: "清清的深潭像一面大镜子，能照出天上的云和你的小脸蛋。" },
          { text: "容止若思", mean: "说话做事前先想一想，不毛毛躁躁——像小思想家一样稳稳的。" },
          { text: "言辞安定", mean: "说话不慌不忙、清清楚楚，别人一下就能听明白。" }
        ],
        fun: "小河从不停下来——学习也一样，每天坚持就不断流！",
        tip: "倒水进杯子，看看什么时候水面能照出影子，说一句『渊澄取映』。"
      }
    ],
    practice: [
      { q: "『道听而涂说，德之弃也』批评的是什么行为？", type: "choice", options: ["传播没有根据的传闻", "走路听歌", "大声说话"], answer: "传播没有根据的传闻", explain: "没核实的消息不要乱传。" },
      { q: "牧童说戴嵩画的牛哪里画错了？", type: "choice", options: ["牛斗时尾巴应夹在两腿间，却画成摇尾巴", "牛角画歪了", "牛画得太胖"], answer: "牛斗时尾巴应夹在两腿间，却画成摇尾巴", explain: "尾搐入两股间，今乃掉尾而斗，谬矣。" },
      { q: "判断：杜处士听了牧童的话很生气。", type: "judge", answer: false, explain: "处士笑而然之——他笑着认为牧童说得对。" },
      { q: "请补充《千字文》：川流不息，渊澄____。", type: "fill", answer: "取映", explain: "渊澄取映。" }
    ],
    flashcards: [
      { word: "传闻", pinyin: "chuán wén", mean: "听来的、没核实的消息。", emoji: "📣" },
      { word: "尾巴", pinyin: "wěi ba", mean: "动物身体末端的部分。", emoji: "🐕" },
      { word: "观察", pinyin: "guān chá", mean: "仔细地看。", emoji: "🔎" },
      { word: "接受", pinyin: "jiē shòu", mean: "听取、采纳别人的意见。", emoji: "✅" }
    ]
  },

  /* ===================== Day 29 ===================== */
  {
    day: 29,
    date: "第 29 天",
    theme: "论语 · 和而不同 + 自相矛盾",
    items: [
      {
        type: "lunyu", title: "论语 · 和而不同", emoji: "📚", grade: "初中",
        lines: [
          { text: "子曰：『君子和而不同，小人同而不和。』", py: "zǐ yuē jūn zǐ hé ér bù tóng xiǎo rén tóng ér bù hé",
            mean: "孔子爷爷说：君子和大家玩得很好，但有自己的想法；小人只会跟着别人说，心里其实并不服气。",
            fun: "好朋友可以喜欢不同的颜色，照样手拉手！" }
        ],
        tip: "问孩子：好朋友和你意见不一样时怎么办？——不一样也能做朋友。"
      },
      {
        type: "xiaoguwen", title: "小古文 · 自相矛盾", emoji: "🛡️", grade: "小学",
        lines: ["楚人有鬻盾与矛者，", "誉之曰：『吾盾之坚，物莫能陷也。』", "又誉其矛曰：『吾矛之利，于物无不陷也。』", "或曰：『以子之矛陷子之盾，何如？』", "其人弗能应也。"],
        py: ["chǔ rén yǒu yù dùn yǔ máo zhě", "yù zhī yuē wú dùn zhī jiān wù mò néng xiàn yě", "yòu yù qí máo yuē wú máo zhī lì yú wù wú bù xiàn yě", "huò yuē yǐ zǐ zhī máo xiàn zǐ zhī dùn hé rú", "qí rén fú néng yìng yě"],
        notes: [{ w: "鬻", m: "卖" }, { w: "誉", m: "夸赞" }, { w: "陷", m: "刺破" }, { w: "或", m: "有人" }, { w: "应", m: "回答" }],
        yi: "楚国有个卖盾和矛的人，夸他的盾说：『我的盾坚固极了，没有什么东西能刺破它。』又夸他的矛说：『我的矛锋利极了，任何东西都能刺破。』有人问：『用你的矛去刺你的盾，会怎样呢？』那个人回答不上来了。",
        fun: "『什么都刺不破的盾』和『什么都能刺破的矛』，一碰面就露馅——说话不能自相矛盾！",
        tip: "这是五年级课文原文；和孩子玩『找矛盾』：我说『我从来不撒谎』，这句话有没有问题？"
      },
      {
        type: "qianziwen", title: "千字文 · 笃初诚美", emoji: "🌱", grade: "小学",
        lines: ["笃初诚美，", "慎终宜令。", "荣业所基，", "籍甚无竟。"],
        py: ["dǔ chū chéng měi", "shèn zhōng yí lìng", "róng yè suǒ jī", "jí shèn wú jìng"],
        pairs: [
          { text: "笃初诚美", mean: "决定做的事，开头要认真——像盖房子，地基要打得好好的。" },
          { text: "慎终宜令", mean: "最后一步也要认真做——积木搭到最后一下倒了，多可惜呀！" },
          { text: "荣业所基", mean: "认真做好每件小事，就是你长大做大事的地基。" },
          { text: "籍甚无竟", mean: "好名声会飞到好远好远的地方，怎么飞也飞不完。" }
        ],
        fun: "好的开始是成功的一半，坚持到底才是完整的胜利！",
        tip: "回顾孩子坚持最久的一件事，夸一夸『慎终宜令』。"
      }
    ],
    practice: [
      { q: "『君子和而不同』是说君子怎样？", type: "choice", options: ["和谐相处但有自己的见解", "什么都听别人的", "总和别人吵架"], answer: "和谐相处但有自己的见解", explain: "和 = 和谐，不同 = 有主见。" },
      { q: "楚人卖矛和盾，别人问他什么他就答不上来了？", type: "choice", options: ["用你的矛刺你的盾，会怎样？", "你的矛多少钱？", "你的盾什么颜色？"], answer: "用你的矛刺你的盾，会怎样？", explain: "以子之矛陷子之盾，何如？" },
      { q: "判断：坚不可摧的盾和无坚不摧的矛可以同时存在。", type: "judge", answer: false, explain: "不可陷之盾与无不陷之矛，不可同世而立。" },
      { q: "请补充《千字文》：笃初诚美，慎终____。", type: "fill", answer: "宜令", explain: "慎终宜令。" }
    ],
    flashcards: [
      { word: "和谐", pinyin: "hé xié", mean: "相处得融洽美好。", emoji: "🕊️" },
      { word: "矛盾", pinyin: "máo dùn", mean: "前后不一致、互相冲突。", emoji: "⚔️" },
      { word: "回答", pinyin: "huí dá", mean: "对问题作出答复。", emoji: "💬" },
      { word: "坚持", pinyin: "jiān chí", mean: "一直做下去、不放弃。", emoji: "🏃" }
    ]
  },

  /* ===================== Day 30 ===================== */
  {
    day: 30,
    date: "第 30 天",
    theme: "论语 · 博学笃志 + 杨氏之子",
    items: [
      {
        type: "lunyu", title: "论语 · 博学笃志", emoji: "📚", grade: "初中",
        lines: [
          { text: "子曰：『博学而笃志，切问而近思，仁在其中矣。』", py: "zǐ yuē bó xué ér dǔ zhì qiè wèn ér jìn sī rén zài qí zhōng yǐ",
            mean: "孔子爷爷说：多读书、定好目标、不懂就问、常常思考——做到这些，你就会变成特别棒的人！",
            fun: "多学 + 多问 + 多想 = 变成更棒的自己！" }
        ],
        tip: "这是国学第二周的最后一句论语；和孩子一起把 15 句论语做成『论语卡』，每天抽一张读。"
      },
      {
        type: "xiaoguwen", title: "小古文 · 杨氏之子", emoji: "🧒", grade: "小学",
        lines: ["梁国杨氏子九岁，甚聪惠。", "孔君平诣其父，父不在，乃呼儿出。", "为设果，果有杨梅。", "孔指以示儿曰：『此是君家果。』", "儿应声答曰：『未闻孔雀是夫子家禽。』"],
        py: ["liáng guó yáng shì zǐ jiǔ suì shèn cōng huì", "kǒng jūn píng yì qí fù fù bù zài nǎi hū ér chū", "wèi shè guǒ guǒ yǒu yáng méi", "kǒng zhǐ yǐ shì ér yuē cǐ shì jūn jiā guǒ", "ér yìng shēng dá yuē wèi wén kǒng què shì fū zǐ jiā qín"],
        notes: [{ w: "甚", m: "很" }, { w: "聪惠", m: "聪明（惠通慧）" }, { w: "诣", m: "拜访" }, { w: "乃", m: "于是" }, { w: "示", m: "给…看" }, { w: "应声", m: "立刻（随着话音）" }],
        yi: "梁国一户姓杨的人家有个九岁的儿子，非常聪明。孔君平来拜访他的父亲，父亲不在，就把孩子叫了出来。孩子端上水果，水果里有杨梅。孔君平指着杨梅给孩子看，开玩笑说：『这是你家的果子。』孩子立刻回答：『可没听说孔雀是您家的鸟啊。』",
        fun: "你拿『杨梅』开我姓杨的玩笑，我就用『孔雀』回敬你姓孔的——九岁小孩，机智满分！",
        tip: "这是五年级课文原文；玩『姓氏接龙玩笑』：用家人的姓造一个机智问答。"
      },
      {
        type: "qianziwen", title: "千字文 · 学优登仕", emoji: "🎓", grade: "小学",
        lines: ["学优登仕，", "摄职从政。", "存以甘棠，", "去而益咏。"],
        py: ["xué yōu dēng shì", "shè zhí cóng zhèng", "cún yǐ gān táng", "qù ér yì yǒng"],
        pairs: [
          { text: "学优登仕", mean: "书读得好、本领学得棒，长大了就能做有用的大事。" },
          { text: "摄职从政", mean: "担起自己的任务，认认真真把它做好，像值日生管好小图书角。" },
          { text: "存以甘棠", mean: "召公爷爷在甘棠树下帮大家办事，大家舍不得砍那棵树——好人大家都记得。" },
          { text: "去而益咏", mean: "他走了以后，大家还想他、夸他——做过的好事，别人会记好久好久。" }
        ],
        fun: "把学问用出来帮助别人，走了以后大家还会想念你！",
        tip: "告诉孩子：学习不是为了分数，是为了将来能帮到更多人。"
      }
    ],
    practice: [
      { q: "『博学而笃志，切问而近思』是讲什么？", type: "choice", options: ["学习的方法：多学、坚定、多问、多思考", "怎么交朋友", "怎么做官"], answer: "学习的方法：多学、坚定、多问、多思考", explain: "博学+笃志+切问+近思，仁在其中。" },
      { q: "杨氏之子怎样回应孔君平的玩笑？", type: "choice", options: ["未闻孔雀是夫子家禽", "杨梅真好吃", "欢迎您再来"], answer: "未闻孔雀是夫子家禽", explain: "用对方的姓氏机智回敬。" },
      { q: "判断：杨氏之子只有九岁，非常机智。", type: "judge", answer: true, explain: "梁国杨氏子九岁，甚聪惠。" },
      { q: "这一国学周我们没有学过哪一篇？", type: "choice", options: ["三顾茅庐", "司马光", "守株待兔"], answer: "三顾茅庐", explain: "三顾茅庐还没学到，以后会学哦。" }
    ],
    flashcards: [
      { word: "博学", pinyin: "bó xué", mean: "广泛地学习，知识丰富。", emoji: "📚" },
      { word: "机智", pinyin: "jī zhì", mean: "反应快、会想办法。", emoji: "💡" },
      { word: "孔雀", pinyin: "kǒng què", mean: "尾巴像大扇子的美丽大鸟。", emoji: "🦚" },
      { word: "复习", pinyin: "fù xí", mean: "再学一遍，记得更牢。", emoji: "🔁" }
    ]
  },

  /* ===================== Day 31 · 成语谚语歇后语周 ===================== */
  {
    day: 31,
    date: "第 31 天",
    theme: "愚公移山 + 一年之计 + 泥菩萨过江",
    items: [
      {
        type: "chengyu", title: "愚公移山", pinyin: "yú gōng yí shān", emoji: "⛰️", grade: "小学",
        story: "愚公家门前堵着两座大山，出门要绕好远好远。九十岁的愚公说：『我们把山挖平吧！』邻居智叟笑他：『老头子，你挖得完吗？』愚公说：『我挖不完还有儿子，儿子还有孙子，一代接一代挖，山又不会长高！』天帝听见了，感动得派神仙把两座大山背走啦。",
        yuyi: "只要一代一代坚持干，再大的山也能搬走——不怕困难，坚持就赢。",
        chuchu: "《列子·汤问》",
        tip: "问孩子：如果是你，门前有一座大山，你会搬家还是挖山？为什么？"
      },
      {
        type: "yanyu", title: "谚语 · 一年之计在于春", emoji: "🌸", grade: "小学",
        lines: ["一年之计在于春，", "一日之计在于晨。"],
        py: ["yī nián zhī jì zài yú chūn", "yī rì zhī jì zài yú chén"],
        mean: "一年的打算要在春天安排好，一天的打算要在早晨安排好——凡事要早做计划、珍惜时光。",
        fun: "早晨的脑子最新鲜，背单词、读课文都最快！",
        tip: "和孩子一起做一张『早晨计划表』：读 5 分钟书再出门。"
      },
      {
        type: "xiehouyu", title: "歇后语 · 泥菩萨过江", emoji: "😄", grade: "小学",
        first: "泥菩萨过江", py1: "ní pú sà guò jiāng",
        second: "自身难保", py2: "zì shēn nán bǎo",
        mean: "泥做的菩萨过江会被水冲坏，比喻自己处境危险，连自己都保不住，更别说帮别人。",
        fun: "泥菩萨怕水呀——自己都要化掉了，怎么保佑别人？",
        tip: "用橡皮泥捏个小人放水里试试，看看『泥菩萨过江』会怎样。"
      }
    ],
    practice: [
      { q: "愚公移山靠的是什么？", type: "choice", options: ["子子孙孙坚持不懈", "请来大力士", "用炸药炸山"], answer: "子子孙孙坚持不懈", explain: "愚公说子子孙孙没有穷尽，山不会长高。" },
      { q: "『一年之计在于春』告诉我们什么？", type: "choice", options: ["一年开头要做好计划", "春天最适合睡觉", "只有春天能学习"], answer: "一年开头要做好计划", explain: "凡事要早做计划、珍惜时光。" },
      { q: "判断：天帝被愚公的诚心感动，派神仙把山搬走了。", type: "judge", answer: true, explain: "故事结局：天帝派神把两座山背走了。" }
    ],
    flashcards: [
      { word: "移山", pinyin: "yí shān", mean: "把山搬走，比喻做很难的事。", emoji: "⛰️" },
      { word: "计划", pinyin: "jì huà", mean: "事先想好的打算。", emoji: "🗓️" },
      { word: "清晨", pinyin: "qīng chén", mean: "天刚亮的时候。", emoji: "🌅" },
      { word: "诚心", pinyin: "chéng xīn", mean: "真诚的心意。", emoji: "💗" }
    ]
  },

  /* ===================== Day 32 ===================== */
  {
    day: 32,
    date: "第 32 天",
    theme: "掩耳盗铃 + 早起的鸟儿 + 竹篮打水",
    items: [
      {
        type: "chengyu", title: "掩耳盗铃", pinyin: "yǎn ěr dào líng", emoji: "🔔", grade: "小学",
        story: "有个小偷想去偷大铃铛，可铃铛一碰就『叮当叮当』响。他想了个『妙计』：把自己的耳朵捂住！『我听不见，别人也听不见啦！』结果刚摘下铃铛，就被人家当场抓住了——铃铛照响，只是他自己听不见而已呀！",
        yuyi: "捂住自己的耳朵去偷铃铛——自己骗自己，是没有用的。",
        chuchu: "《吕氏春秋》",
        tip: "和孩子玩『捂耳朵听铃声』：捂住耳朵摇铃铛，问孩子别人还听不听得见。"
      },
      {
        type: "yanyu", title: "谚语 · 早起的鸟儿有虫吃", emoji: "🐦", grade: "小学",
        lines: ["早起的鸟儿，", "有虫吃。"],
        py: ["zǎo qǐ de niǎo ér", "yǒu chóng chī"],
        mean: "起得早的鸟先找到虫子——做事赶早不赶晚，勤快的人有收获。",
        fun: "虫子起得晚，早起的鸟儿先下手为强！",
        tip: "明早和孩子比一比谁是『早起的鸟儿』，先完成的盖个小印章。"
      },
      {
        type: "xiehouyu", title: "歇后语 · 竹篮打水", emoji: "😄", grade: "小学",
        first: "竹篮打水", py1: "zhú lán dǎ shuǐ",
        second: "一场空", py2: "yī cháng kōng",
        mean: "竹篮子全是洞，打不上水来，比喻白费力气，最后一无所得。",
        fun: "篮子装不住水——用错了工具，再努力也白搭！",
        tip: "拿漏勺和普通杯子各舀一次水，让孩子明白『工具要选对』。"
      }
    ],
    practice: [
      { q: "捂着自己耳朵偷铃铛的人错在哪里？", type: "choice", options: ["骗得了自己骗不了别人", "铃铛太重了", "他走得太慢"], answer: "骗得了自己骗不了别人", explain: "捂住自己的耳朵，别人照样听得见。" },
      { q: "『早起的鸟儿有虫吃』是说什么？", type: "choice", options: ["行动早的人更容易有收获", "鸟儿都爱吃虫", "虫子早上不出来"], answer: "行动早的人更容易有收获", explain: "赶早不赶晚，勤先有收获。" },
      { q: "判断：偷铃人最后成功偷到了铃铛。", type: "judge", answer: false, explain: "他当场被人抓住了。" }
    ],
    flashcards: [
      { word: "铃铛", pinyin: "líng dang", mean: "一摇就叮当响的小铃。", emoji: "🔔" },
      { word: "自欺", pinyin: "zì qī", mean: "自己欺骗自己。", emoji: "🙈" },
      { word: "早起", pinyin: "zǎo qǐ", mean: "早早起床。", emoji: "⏰" },
      { word: "收获", pinyin: "shōu huò", mean: "得到成果。", emoji: "🌾" }
    ]
  },

  /* ===================== Day 33 ===================== */
  {
    day: 33,
    date: "第 33 天",
    theme: "对牛弹琴 + 人心齐 + 芝麻开花",
    items: [
      {
        type: "chengyu", title: "对牛弹琴", pinyin: "duì niú tán qín", emoji: "🐄", grade: "小学",
        story: "音乐家公明仪琴弹得超级好。一天他看见一头牛在吃草，就对它弹起了最美妙的曲子。牛呢？『哞——』继续低头吃草，看都不看他一眼。不是曲子不好听，是牛根本听不懂呀！",
        yuyi: "对着一头牛弹琴——说话要看对象，对听不懂的人讲道理是白讲。",
        chuchu: "《弘明集》",
        tip: "问孩子：给布娃娃讲乘法口诀有用吗？——说话要看对象哦。"
      },
      {
        type: "yanyu", title: "谚语 · 人心齐，泰山移", emoji: "⛰️", grade: "小学",
        lines: ["人心齐，", "泰山移。"],
        py: ["rén xīn qí", "tài shān yí"],
        mean: "只要大家心往一处想，连泰山都能移动——团结起来力量大。",
        fun: "一根筷子容易折，一把筷子折不断！",
        tip: "和孩子玩『筷子实验』：先折一根，再折一把，感受团结的力量。"
      },
      {
        type: "xiehouyu", title: "歇后语 · 芝麻开花", emoji: "😄", grade: "小学",
        first: "芝麻开花", py1: "zhī ma kāi huā",
        second: "节节高", py2: "jié jié gāo",
        mean: "芝麻开花时一节比一节高，比喻生活或成绩一天比一天好。",
        fun: "祝小朋友的成绩像芝麻开花——一节更比一节高！",
        tip: "用积木搭『芝麻秆』：一层比一层高，边搭边说『节节高』。"
      }
    ],
    practice: [
      { q: "『对牛弹琴』现在多用来形容什么？", type: "choice", options: ["对不懂道理的人讲道理，白费口舌", "给牛听音乐", "琴弹得很好"], answer: "对不懂道理的人讲道理，白费口舌", explain: "说话要看对象。" },
      { q: "『人心齐，泰山移』强调什么？", type: "choice", options: ["团结力量大", "泰山很重", "人很多"], answer: "团结力量大", explain: "心往一处想，泰山都能移。" },
      { q: "判断：公明仪的琴弹得不好，所以牛不听。", type: "judge", answer: false, explain: "不是琴不好，是牛听不懂。" }
    ],
    flashcards: [
      { word: "弹琴", pinyin: "tán qín", mean: "演奏琴类乐器。", emoji: "🎹" },
      { word: "道理", pinyin: "dào lǐ", mean: "事情的原因和规律。", emoji: "📖" },
      { word: "团结", pinyin: "tuán jié", mean: "大家一条心、合力做事。", emoji: "🤝" },
      { word: "力量", pinyin: "lì liàng", mean: "力气和能力。", emoji: "💪" }
    ]
  },

  /* ===================== Day 34 ===================== */
  {
    day: 34,
    date: "第 34 天",
    theme: "胸有成竹 + 三个臭皮匠 + 十五个吊桶",
    items: [
      {
        type: "chengyu", title: "胸有成竹", pinyin: "xiōng yǒu chéng zhú", emoji: "🎋", grade: "小学",
        story: "画家文与可最爱竹子啦！他在房前屋后种满竹子，天天看：晴天看、雨天看、春天看、冬天看。看得太多啦，闭上眼睛竹子就在脑子里长出来了。所以他画竹子又快又像——笔还没动，竹子早就在心里画好啦！",
        yuyi: "竹子早就长在心里了——做事之前，心里已经有了全套计划和把握。",
        chuchu: "苏轼《文与可画筼筜谷偃竹记》",
        tip: "让孩子画画前先说说要画什么、怎么画，练习『胸有成竹』。"
      },
      {
        type: "yanyu", title: "谚语 · 三个臭皮匠", emoji: "🧠", grade: "小学",
        lines: ["三个臭皮匠，", "顶个诸葛亮。"],
        py: ["sān gè chòu pí jiàng", "dǐng gè zhū gě liàng"],
        mean: "三个普通人的智慧合起来，能顶一个诸葛亮——人多主意多。",
        fun: "诸葛亮再聪明，也架不住大家一起出主意！",
        tip: "家里遇到小难题（比如玩具找不到），开个『皮匠会』，每人说一个办法。"
      },
      {
        type: "xiehouyu", title: "歇后语 · 十五个吊桶打水", emoji: "😄", grade: "小学",
        first: "十五个吊桶打水", py1: "shí wǔ gè diào tǒng dǎ shuǐ",
        second: "七上八下", py2: "qī shàng bā xià",
        mean: "十五个吊桶打水，七个上来八个下去，比喻心里非常慌乱、忐忑不安。",
        fun: "考试前心里十五个吊桶——七上八下！深呼吸，放轻松。",
        tip: "问问孩子：什么时候心里会『七上八下』？说出来就不慌了。"
      }
    ],
    practice: [
      { q: "『胸有成竹』是说做事之前怎样？", type: "choice", options: ["心里已经有了完整的计划", "胸口画了竹子", "先去买竹子"], answer: "心里已经有了完整的计划", explain: "落笔前，竹子的样子已经在心里。" },
      { q: "『三个臭皮匠，顶个诸葛亮』说明什么？", type: "choice", options: ["人多智慧多", "皮匠很臭", "诸葛亮是皮匠"], answer: "人多智慧多", explain: "大家一起出主意，比一个人强。" },
      { q: "判断：文与可画竹前常常先仔细观察竹子。", type: "judge", answer: true, explain: "他种满竹子天天观察，所以画得快又好。" }
    ],
    flashcards: [
      { word: "画笔", pinyin: "huà bǐ", mean: "画画用的笔。", emoji: "🖌️" },
      { word: "主意", pinyin: "zhǔ yi", mean: "想出来的办法。", emoji: "💡" },
      { word: "合作", pinyin: "hé zuò", mean: "一起合力做事。", emoji: "🤜" },
      { word: "智慧", pinyin: "zhì huì", mean: "聪明、会想办法。", emoji: "🧠" }
    ]
  },

  /* ===================== Day 35 ===================== */
  {
    day: 35,
    date: "第 35 天",
    theme: "熟能生巧 + 一分耕耘 + 小葱拌豆腐",
    items: [
      {
        type: "chengyu", title: "熟能生巧", pinyin: "shú néng shēng qiǎo", emoji: "🏺", grade: "小学",
        story: "射箭能手陈尧咨百发百中，可卖油老爷爷只是微微一笑。老爷爷拿出一个葫芦，口上放一枚铜钱，舀起一勺油『哧——』倒下去，油像一条细细的线，正好从钱孔中间穿过，铜钱一点儿都没湿！他说：『我没啥本事，就是天天倒，手熟啦。』",
        yuyi: "练得多了，手就熟了；手熟了，本领就巧了——多练出功夫！",
        chuchu: "欧阳修《归田录·卖油翁》",
        tip: "和孩子玩『倒米挑战』：把米从一个杯子倒进另一个，练三次，体会手熟。"
      },
      {
        type: "yanyu", title: "谚语 · 一分耕耘，一分收获", emoji: "🌾", grade: "小学",
        lines: ["一分耕耘，", "一分收获。"],
        py: ["yī fēn gēng yún", "yī fēn shōu huò"],
        mean: "付出一分劳动，就有一分收获——有付出才有回报。",
        fun: "学习就像种地：今天浇的水，秋天都会变成粮食！",
        tip: "种一颗豆子，让孩子每天浇水记录，体会『耕耘与收获』。"
      },
      {
        type: "xiehouyu", title: "歇后语 · 小葱拌豆腐", emoji: "😄", grade: "小学",
        first: "小葱拌豆腐", py1: "xiǎo cōng bàn dòu fu",
        second: "一清二白", py2: "yī qīng èr bái",
        mean: "小葱是青的，豆腐是白的，拌在一起清清楚楚——比喻清清楚楚、明明白白。",
        fun: "青的是葱、白的是豆腐，一眼就看明白！",
        tip: "今晚如果吃豆腐，让孩子看看『一清二白』是什么样子。"
      }
    ],
    practice: [
      { q: "卖油翁倒油的本领说明了什么道理？", type: "choice", options: ["熟练了就能生巧", "油很值钱", "铜钱很好用"], answer: "熟练了就能生巧", explain: "惟手熟尔——只是手熟罢了。" },
      { q: "『一分耕耘，一分收获』告诉我们什么？", type: "choice", options: ["付出多少努力就有多少收获", "种地很辛苦", "一分很少"], answer: "付出多少努力就有多少收获", explain: "有付出才有回报。" },
      { q: "判断：卖油翁觉得他的本领是天生的。", type: "judge", answer: false, explain: "他说『只是手熟罢了』。" }
    ],
    flashcards: [
      { word: "熟练", pinyin: "shú liàn", mean: "做得多、做得很顺。", emoji: "🎯" },
      { word: "本领", pinyin: "běn lǐng", mean: "学会的技能。", emoji: "⭐" },
      { word: "耕耘", pinyin: "gēng yún", mean: "耕地除草，比喻辛勤劳动。", emoji: "🌾" },
      { word: "清白", pinyin: "qīng bái", mean: "清清楚楚、干干净净。", emoji: "🤍" }
    ]
  },

  /* ===================== Day 36 ===================== */
  {
    day: 36,
    date: "第 36 天",
    theme: "闻鸡起舞 + 世上无难事 + 孔夫子搬家",
    items: [
      {
        type: "chengyu", title: "闻鸡起舞", pinyin: "wén jī qǐ wǔ", emoji: "🐓", grade: "小学",
        story: "祖逖和刘琨是好朋友，都想为国家出力。半夜『喔喔喔——』鸡叫了，祖逖一脚踢醒刘琨：『快起来练剑！』两人揉揉眼睛，披上衣服就到院子里舞剑，冬天练、夏天练，一天都不停。后来呀，他们都成了大将军！",
        yuyi: "一听鸡叫就起床练剑——有志气的孩子，说干就干，天天坚持。",
        chuchu: "《晋书·祖逖传》",
        tip: "和孩子约定一个『闻鸡起舞』暗号：听到闹钟就一骨碌起床。"
      },
      {
        type: "yanyu", title: "谚语 · 世上无难事", emoji: "💪", grade: "小学",
        lines: ["世上无难事，", "只怕有心人。"],
        py: ["shì shàng wú nán shì", "zhǐ pà yǒu xīn rén"],
        mean: "世界上没有难办的事，只怕有决心去做的人——有恒心就能成功。",
        fun: "『有心人』就是有决心的人——你认真实在就是最大的魔法！",
        tip: "孩子遇到难题想放弃时，一起念这句，再试一次。"
      },
      {
        type: "xiehouyu", title: "歇后语 · 孔夫子搬家", emoji: "😄", grade: "小学",
        first: "孔夫子搬家", py1: "kǒng fū zǐ bān jiā",
        second: "尽是输（书）", py2: "jìn shì shū",
        mean: "孔子家里书多，搬家搬的都是书（输），比喻总是失败。谐音双关。",
        fun: "『书』和『输』读音一样——歇后语最爱玩谐音梗！",
        tip: "告诉孩子这是谐音歇后语，请他猜猜：孔夫子为什么『尽是输』？"
      }
    ],
    practice: [
      { q: "祖逖听到鸡叫就起来做什么？", type: "choice", options: ["练剑", "吃早饭", "继续睡觉"], answer: "练剑", explain: "闻鸡起舞——听到鸡叫就起来练武。" },
      { q: "『世上无难事，只怕有心人』里『有心人』指什么人？", type: "choice", options: ["有决心、肯坚持的人", "心脏好的人", "想家的人"], answer: "有决心、肯坚持的人", explain: "有恒心，难事也能成。" },
      { q: "判断：『闻鸡起舞』现在用来形容睡懒觉。", type: "judge", answer: false, explain: "恰恰相反，它形容勤奋刻苦。" }
    ],
    flashcards: [
      { word: "舞剑", pinyin: "wǔ jiàn", mean: "挥舞宝剑练武。", emoji: "🗡️" },
      { word: "决心", pinyin: "jué xīn", mean: "坚定不动摇的心意。", emoji: "💪" },
      { word: "勤学", pinyin: "qín xué", mean: "勤奋地学习。", emoji: "📖" },
      { word: "谐音", pinyin: "xié yīn", mean: "读音相同或相近的字。", emoji: "🔤" }
    ]
  },

  /* ===================== Day 37 ===================== */
  {
    day: 37,
    date: "第 37 天",
    theme: "凿壁偷光 + 滴水穿石 + 外甥打灯笼",
    items: [
      {
        type: "chengyu", title: "凿壁偷光", pinyin: "záo bì tōu guāng", emoji: "🕯️", grade: "小学",
        story: "匡衡家里穷得连灯都点不起，晚上想读书怎么办？他发现墙上有个小缝，邻居家灯光漏过来了！他悄悄把小缝凿成小洞，就着那一小束光，一页一页地读。后来他成了特别有学问的人。",
        yuyi: "凿开墙壁借邻居的光读书——再苦的条件，也挡不住想学习的心。",
        chuchu: "《西京杂记》",
        tip: "和『囊萤夜读』对比着讲：古人没有灯，照样想办法读书。"
      },
      {
        type: "yanyu", title: "谚语 · 滴水穿石", emoji: "💧", grade: "小学",
        lines: ["滴水穿石，", "非一日之功。"],
        py: ["dī shuǐ chuān shí", "fēi yī rì zhī gōng"],
        mean: "水滴能把石头滴穿，靠的不是一天的功夫——坚持就有力量。",
        fun: "小水滴力气小，天天滴，石头也能穿出洞！",
        tip: "在水龙头下接半杯水，让孩子看水滴，说一句『滴水穿石』。"
      },
      {
        type: "xiehouyu", title: "歇后语 · 外甥打灯笼", emoji: "😄", grade: "小学",
        first: "外甥打灯笼", py1: "wài sheng dǎ dēng long",
        second: "照旧（舅）", py2: "zhào jiù",
        mean: "外甥打灯笼照的是舅舅（旧），比喻还是老样子、没有变化。谐音双关。",
        fun: "『照舅』=『照旧』——又是一个谐音小魔术！",
        tip: "和孩子找一找家里谁是舅舅，说说这个谐音怎么来的。"
      }
    ],
    practice: [
      { q: "匡衡为什么要『凿壁』？", type: "choice", options: ["家穷点不起灯，借邻居家的灯光读书", "墙上有个洞好玩", "他想看邻居家"], answer: "家穷点不起灯，借邻居家的灯光读书", explain: "凿壁偷光，刻苦读书。" },
      { q: "『滴水穿石，非一日之功』说明什么？", type: "choice", options: ["坚持的力量，日积月累", "水滴很大", "石头很软"], answer: "坚持的力量，日积月累", explain: "天天坚持，柔能克刚。" },
      { q: "判断：匡衡后来成为了有学问的人。", type: "judge", answer: true, explain: "他做了大官，成了有名的学问家。" }
    ],
    flashcards: [
      { word: "墙壁", pinyin: "qiáng bì", mean: "房屋的墙。", emoji: "🧱" },
      { word: "灯光", pinyin: "dēng guāng", mean: "灯发出的光。", emoji: "💡" },
      { word: "刻苦", pinyin: "kè kǔ", mean: "肯下苦功夫。", emoji: "📚" },
      { word: "照旧", pinyin: "zhào jiù", mean: "还是老样子。", emoji: "🏮" }
    ]
  },

  /* ===================== Day 38 ===================== */
  {
    day: 38,
    date: "第 38 天",
    theme: "程门立雪 + 失败是成功之母 + 兔子尾巴",
    items: [
      {
        type: "chengyu", title: "程门立雪", pinyin: "chéng mén lì xuě", emoji: "❄️", grade: "小学",
        story: "杨时和同学去拜见老师程颐，到了门口一看：老师正坐着打瞌睡呢。『别吵醒老师。』两人就站在门外轻轻等。雪花飘呀飘，落满他们的头和肩膀。老师醒来一看：门外站着两个『雪人』！雪都积了一尺深啦。",
        yuyi: "在大雪里站在老师门口等——尊敬老师、诚心求学，就是这样的。",
        chuchu: "《宋史·杨时传》",
        tip: "问孩子：如果你去找老师问题目，老师在休息，你会怎么做？"
      },
      {
        type: "yanyu", title: "谚语 · 失败是成功之母", emoji: "🌈", grade: "小学",
        lines: ["失败是成功之母。"],
        py: ["shī bài shì chéng gōng zhī mǔ"],
        mean: "失败能教我们吸取教训，就像成功走过的『妈妈』——不怕失败，才能成功。",
        fun: "摔倒不可怕，每次摔倒都教我们怎么站得更稳！",
        tip: "和孩子聊聊：最近哪件事没做好？从中学到了什么？"
      },
      {
        type: "xiehouyu", title: "歇后语 · 兔子尾巴", emoji: "😄", grade: "小学",
        first: "兔子尾巴", py1: "tù zi wěi ba",
        second: "长不了", py2: "cháng bù liǎo",
        mean: "兔子的尾巴很短，比喻事物或好运维持不了多久。",
        fun: "揪一揪玩具兔的尾巴——真的长不了！",
        tip: "观察兔子图片，找找它的尾巴在哪里，体会『长不了』。"
      }
    ],
    practice: [
      { q: "杨时在雪里站着等谁醒来？", type: "choice", options: ["老师程颐", "同学游酢", "门卫"], answer: "老师程颐", explain: "他恭恭敬敬等老师睡醒。" },
      { q: "『失败是成功之母』是说什么？", type: "choice", options: ["从失败中吸取教训，就能走向成功", "失败很可怕", "成功没有妈妈"], answer: "从失败中吸取教训，就能走向成功", explain: "失败教我们成长。" },
      { q: "判断：『程门立雪』讲的是尊敬老师。", type: "judge", answer: true, explain: "杨时立雪等候，尊师重道。" },
      { q: "『兔子尾巴——长不了』里的『长不了』是什么意思？", type: "choice", options: ["维持不了多久", "尾巴会长长", "兔子跑不快"], answer: "维持不了多久", explain: "兔子尾巴短，比喻好景不长。" }
    ],
    flashcards: [
      { word: "尊敬", pinyin: "zūn jìng", mean: "敬重、有礼貌地对待。", emoji: "🙇" },
      { word: "等待", pinyin: "děng dài", mean: "耐心等候。", emoji: "⏳" },
      { word: "失败", pinyin: "shī bài", mean: "没有成功。", emoji: "🌧️" },
      { word: "教训", pinyin: "jiào xùn", mean: "从错误中学到的经验。", emoji: "📝" }
    ]
  },

  /* ===================== Day 39 ===================== */
  {
    day: 39,
    date: "第 39 天",
    theme: "画龙点睛 + 读万卷书 + 老鼠过街",
    items: [
      {
        type: "chengyu", title: "画龙点睛", pinyin: "huà lóng diǎn jīng", emoji: "🐉", grade: "小学",
        story: "画家张僧繇在墙上画了四条龙，鳞片闪闪、爪子威风，就是没有眼睛。大家问：『为什么不画眼睛？』他说：『点了眼睛，龙会飞走的！』『吹牛！』大家非要他点。他刚点完两条龙的眼睛——『轰隆！』电闪雷鸣，墙裂开了，两条龙真的腾云驾雾飞上天啦！",
        yuyi: "给龙点上眼睛，龙就飞了——在关键地方加一笔，整件事就活起来啦。",
        chuchu: "《历代名画记》",
        tip: "让孩子给画好的恐龙点眼睛，说一句『画龙点睛』。"
      },
      {
        type: "yanyu", title: "谚语 · 读万卷书，行万里路", emoji: "🥾", grade: "小学",
        lines: ["读万卷书，", "行万里路。"],
        py: ["dú wàn juàn shū", "xíng wàn lǐ lù"],
        mean: "既要读很多书，也要走很多路——读书和实践一样重要。",
        fun: "书里有世界，路上也有世界——两个都要去看看！",
        tip: "周末安排一次小远足，路上说『行万里路』，回家读一本书。"
      },
      {
        type: "xiehouyu", title: "歇后语 · 老鼠过街", emoji: "😄", grade: "小学",
        first: "老鼠过街", py1: "lǎo shǔ guò jiē",
        second: "人人喊打", py2: "rén rén hǎn dǎ",
        mean: "老鼠从街上跑过，人人见了都要打——比喻坏人人人痛恨。",
        fun: "老鼠偷粮食，所以大家都不欢迎它！",
        tip: "讲讲为什么不能做『过街老鼠』：做了坏事，大家都会不喜欢。"
      }
    ],
    practice: [
      { q: "张僧繇点上眼睛的龙怎么了？", type: "choice", options: ["飞走了", "睡着了", "哭了"], answer: "飞走了", explain: "雷电大作，两条龙破壁飞去。" },
      { q: "『读万卷书，行万里路』告诉我们什么？", type: "choice", options: ["既要读书也要多见识、多实践", "只要读书就行", "只要旅行就行"], answer: "既要读书也要多见识、多实践", explain: "读书和实践一样重要。" },
      { q: "判断：画家一开始就把所有龙都点了眼睛。", type: "judge", answer: false, explain: "只点了其中两条，两条飞走了。" }
    ],
    flashcards: [
      { word: "飞龙", pinyin: "fēi lóng", mean: "会飞的龙。", emoji: "🐉" },
      { word: "眼睛", pinyin: "yǎn jing", mean: "用来看东西的器官。", emoji: "👁️" },
      { word: "实践", pinyin: "shí jiàn", mean: "亲自去做、去体验。", emoji: "🥾" },
      { word: "见识", pinyin: "jiàn shi", mean: "见闻和知识。", emoji: "🌍" }
    ]
  },

  /* ===================== Day 40 ===================== */
  {
    day: 40,
    date: "第 40 天",
    theme: "惊弓之鸟 + 少壮不努力 + 猫哭老鼠",
    items: [
      {
        type: "chengyu", title: "惊弓之鸟", pinyin: "jīng gōng zhī niǎo", emoji: "🦅", grade: "小学",
        story: "神射手更羸陪魏王散步，一只大雁飞过。更羸说：『我不用箭，拉一下弓弦就能让它掉下来！』『嘣——』他空拉了一下弓，大雁真的『咚』地摔下来了！魏王看呆了。更羸说：『这只雁受过箭伤，一听见弓弦响，吓得拼命往上飞，伤口裂开，就掉下来啦。』",
        yuyi: "被弓吓怕了的鸟——受过惊吓的人，一点小动静都会让他特别害怕。",
        chuchu: "《战国策》",
        tip: "讲讲更羸是怎么推理的：飞得慢+叫声悲=受过伤——观察力比箭还厉害！"
      },
      {
        type: "yanyu", title: "谚语 · 少壮不努力", emoji: "🌱", grade: "小学",
        lines: ["少壮不努力，", "老大徒伤悲。"],
        py: ["shào zhuàng bù nǔ lì", "lǎo dà tú shāng bēi"],
        mean: "年轻时不努力，老了只能白白地伤心——要珍惜年少时光。",
        fun: "小时候是『充电』时间，电充得满满的，长大才有力气跑！",
        tip: "这句出自《长歌行》，可以找全文读一读前几句『青青园中葵』。"
      },
      {
        type: "xiehouyu", title: "歇后语 · 猫哭老鼠", emoji: "😄", grade: "小学",
        first: "猫哭老鼠", py1: "māo kū lǎo shǔ",
        second: "假慈悲", py2: "jiǎ cí bēi",
        mean: "猫吃老鼠，却假装哭着哀悼——比喻假装同情、假惺惺。",
        fun: "猫抓到老鼠会哭吗？才不会！它是装的。",
        tip: "演一演：假装哭着说『小老鼠好可怜』，再问孩子猫真的可怜老鼠吗？"
      }
    ],
    practice: [
      { q: "那只大雁为什么听到弓弦声就掉下来了？", type: "choice", options: ["它受过箭伤，心里害怕", "它被箭射中了", "它飞累了"], answer: "它受过箭伤，心里害怕", explain: "惊弓之鸟——旧伤+害怕，伤口裂开坠落。" },
      { q: "『少壮不努力，老大徒伤悲』告诫我们什么？", type: "choice", options: ["年轻时要珍惜时间努力学习", "老人容易伤心", "小孩子不用学习"], answer: "年轻时要珍惜时间努力学习", explain: "少壮 = 年轻的时候。" },
      { q: "判断：更羸真的用箭射下了大雁。", type: "judge", answer: false, explain: "他只拉了弓弦，没射箭。" }
    ],
    flashcards: [
      { word: "弓箭", pinyin: "gōng jiàn", mean: "古代的射击武器。", emoji: "🏹" },
      { word: "害怕", pinyin: "hài pà", mean: "心里恐惧。", emoji: "😨" },
      { word: "珍惜", pinyin: "zhēn xī", mean: "爱惜、不浪费。", emoji: "⏰" },
      { word: "慈悲", pinyin: "cí bēi", mean: "怜悯、同情。", emoji: "🙏" }
    ]
  },

  /* ===================== Day 41 ===================== */
  {
    day: 41,
    date: "第 41 天",
    theme: "杯弓蛇影 + 良药苦口 + 狗拿耗子",
    items: [
      {
        type: "chengyu", title: "杯弓蛇影", pinyin: "bēi gōng shé yǐng", emoji: "🍷", grade: "小学",
        story: "乐广请朋友喝酒，朋友端起杯子突然『呀』了一声——杯里有条小蛇在晃！他硬着头皮喝下去，回家越想越怕，竟然病倒了。乐广想了想，请他坐回原位：原来墙上挂着一张弓，弓的影子掉进酒杯里，像条小蛇！真相大白，朋友的病『唰』地全好了！",
        yuyi: "把弓的影子当成小蛇——疑神疑鬼、自己吓自己，病都是吓出来的。",
        chuchu: "《晋书·乐广传》",
        tip: "用手电筒照一张卡片，看影子映在水杯里——影子有时候会骗人！"
      },
      {
        type: "yanyu", title: "谚语 · 良药苦口", emoji: "💊", grade: "小学",
        lines: ["良药苦口利于病，", "忠言逆耳利于行。"],
        py: ["liáng yào kǔ kǒu lì yú bìng", "zhōng yán nì ěr lì yú xíng"],
        mean: "好药虽然苦却有利于治病，诚恳的劝告虽然不顺耳却有利于行动。",
        fun: "药苦才治病，批评虽然不好听，却是帮我们变好！",
        tip: "孩子被批评时，和他一起念这句，再想想批评里有没有道理。"
      },
      {
        type: "xiehouyu", title: "歇后语 · 狗拿耗子", emoji: "😄", grade: "小学",
        first: "狗拿耗子", py1: "gǒu ná hào zi",
        second: "多管闲事", py2: "duō guǎn xián shì",
        mean: "抓老鼠是猫的事，狗去管就是多管闲事——比喻管了自己不该管的事。",
        fun: "狗狗：我抓老鼠是帮忙！猫猫：这是我的工作！",
        tip: "和孩子分工家务：各管各的一小块，说说什么是『管好自己的事』。"
      }
    ],
    practice: [
      { q: "乐广的朋友为什么会生病？", type: "choice", options: ["他以为把酒杯里的蛇影喝进了肚子", "酒里有毒", "他着凉了"], answer: "他以为把酒杯里的蛇影喝进了肚子", explain: "杯弓蛇影——弓的倒影像小蛇。" },
      { q: "『良药苦口利于病』的下一句是？", type: "choice", options: ["忠言逆耳利于行", "忠言逆耳利于心", "良言一句三冬暖"], answer: "忠言逆耳利于行", explain: "苦药治病，逆耳的忠告利于行动。" },
      { q: "判断：酒杯里真的有一条小蛇。", type: "judge", answer: false, explain: "是墙上弓的影子。" }
    ],
    flashcards: [
      { word: "酒杯", pinyin: "jiǔ bēi", mean: "喝酒用的杯子。", emoji: "🍷" },
      { word: "倒影", pinyin: "dào yǐng", mean: "映在水面或杯里的影子。", emoji: "🪞" },
      { word: "误会", pinyin: "wù huì", mean: "理解错了别人的意思。", emoji: "😵" },
      { word: "劝告", pinyin: "quàn gào", mean: "劝人改正的话。", emoji: "🗣️" }
    ]
  },

  /* ===================== Day 42 ===================== */
  {
    day: 42,
    date: "第 42 天",
    theme: "叶公好龙 + 谦虚使人进步 + 哑巴吃黄连",
    items: [
      {
        type: "chengyu", title: "叶公好龙", pinyin: "yè gōng hào lóng", emoji: "🐲", grade: "小学",
        story: "叶公最爱龙啦：衣服绣着龙，杯子刻着龙，柱子上、墙壁上全是龙！真龙听说了，感动地飞下来看他，龙头伸进窗户：『听说你想我啦？』叶公一看真龙——『妈呀！』脸都白了，转身就跑！原来他爱的只是像龙的东西呀。",
        yuyi: "嘴上说爱龙，见到真龙却吓跑——表面喜欢，其实并不真喜欢。",
        chuchu: "《新序·杂事》",
        tip: "问孩子：如果你说喜欢恐龙，真恐龙来了你怕不怕？——真爱要经得起见面！"
      },
      {
        type: "yanyu", title: "谚语 · 谦虚使人进步", emoji: "🌿", grade: "小学",
        lines: ["谦虚使人进步，", "骄傲使人落后。"],
        py: ["qiān xū shǐ rén jìn bù", "jiāo ào shǐ rén luò hòu"],
        mean: "谦虚让人不断进步，骄傲让人退步——要虚心。",
        fun: "装满水的杯子倒不进新水——空一点，才能装更多！",
        tip: "孩子考好了先夸再提醒：谦虚使人进步哦。"
      },
      {
        type: "xiehouyu", title: "歇后语 · 哑巴吃黄连", emoji: "😄", grade: "小学",
        first: "哑巴吃黄连", py1: "yǎ ba chī huáng lián",
        second: "有苦说不出", py2: "yǒu kǔ shuō bù chū",
        mean: "黄连极苦，哑巴吃了苦却说不出话来——比喻有苦难言。",
        fun: "黄连是最苦的中药——尝一口，眉毛都皱起来！",
        tip: "说说『有苦说不出』的感觉；告诉孩子：心里难受可以告诉爸爸妈妈。"
      }
    ],
    practice: [
      { q: "叶公见到真龙后怎么样了？", type: "choice", options: ["吓得转身就跑", "高兴地抱了抱龙", "请龙喝茶"], answer: "吓得转身就跑", explain: "他喜欢的只是像龙的东西。" },
      { q: "『谦虚使人进步』的下一句是？", type: "choice", options: ["骄傲使人落后", "骄傲使人进步", "努力使人进步"], answer: "骄傲使人落后", explain: "谦虚进步，骄傲落后。" },
      { q: "判断：叶公是真的喜欢龙。", type: "judge", answer: false, explain: "他只是喜欢龙的图案，见真龙就吓跑了。" }
    ],
    flashcards: [
      { word: "谦虚", pinyin: "qiān xū", mean: "不自满、肯学习。", emoji: "🌿" },
      { word: "骄傲", pinyin: "jiāo ào", mean: "自满、看不起别人。", emoji: "🦚" },
      { word: "进步", pinyin: "jìn bù", mean: "变得更好、向前发展。", emoji: "📈" },
      { word: "黄连", pinyin: "huáng lián", mean: "一种极苦的中药。", emoji: "🌿" }
    ]
  },

  /* ===================== Day 43 ===================== */
  {
    day: 43,
    date: "第 43 天",
    theme: "盲人摸象 + 活到老学到老 + 打破砂锅",
    items: [
      {
        type: "chengyu", title: "盲人摸象", pinyin: "máng rén mō xiàng", emoji: "🐘", grade: "小学",
        story: "几个盲人摸大象：摸到腿的喊『像根大柱子！』摸到耳朵的喊『像把大扇子！』摸到尾巴的说『明明像根绳子！』摸到肚子的嚷『像堵大墙！』四个吵得面红耳赤——其实呀，他们都只摸到了大象的一小块！",
        yuyi: "只摸到象的一条腿就说象像柱子——只看一小部分就说知道全部，可不行。",
        chuchu: "《大般涅槃经》",
        tip: "玩『摸物猜物』：蒙上眼睛摸玩具的一部分，猜猜是什么，再睁眼看看。"
      },
      {
        type: "yanyu", title: "谚语 · 活到老，学到老", emoji: "📚", grade: "小学",
        lines: ["活到老，", "学到老。"],
        py: ["huó dào lǎo", "xué dào lǎo"],
        mean: "人活到多老，就要学到多老——学习是一辈子的事。",
        fun: "爷爷奶奶也在学用智能手机——学习永远不晚！",
        tip: "问问家里长辈最近在学什么新东西，体会『活到老学到老』。"
      },
      {
        type: "xiehouyu", title: "歇后语 · 打破砂锅", emoji: "😄", grade: "小学",
        first: "打破砂锅", py1: "dǎ pò shā guō",
        second: "问（璺）到底", py2: "wèn dào dǐ",
        mean: "砂锅打破后裂纹（璺，和『问』谐音）一直到底——比喻对事情追根究底。",
        fun: "『璺』和『问』读音一样——爱问到底的孩子最聪明！",
        tip: "孩子问『为什么』时别嫌烦，夸一句『真是打破砂锅问到底』。"
      }
    ],
    practice: [
      { q: "盲人们摸象为什么吵了起来？", type: "choice", options: ["每人只摸到大象的一部分，都以为自己全对", "大象踢了他们", "他们都想骑大象"], answer: "每人只摸到大象的一部分，都以为自己全对", explain: "摸腿说像柱子，摸耳朵说像扇子——都不全面。" },
      { q: "『活到老，学到老』告诉我们什么？", type: "choice", options: ["学习是一辈子的事", "老人不用学习", "学习很累"], answer: "学习是一辈子的事", explain: "什么时候学习都不晚。" },
      { q: "判断：摸到腿的盲人说大象像柱子。", type: "judge", answer: true, explain: "大象腿又粗又直，确实像柱子。" }
    ],
    flashcards: [
      { word: "部分", pinyin: "bù fen", mean: "整体中的一块。", emoji: "🧩" },
      { word: "全面", pinyin: "quán miàn", mean: "各个方面都看到。", emoji: "🌐" },
      { word: "终身", pinyin: "zhōng shēn", mean: "一辈子。", emoji: "🌳" },
      { word: "追问", pinyin: "zhuī wèn", mean: "不停地问、刨根问底。", emoji: "❓" }
    ]
  },

  /* ===================== Day 44 ===================== */
  {
    day: 44,
    date: "第 44 天",
    theme: "塞翁失马 + 路遥知马力 + 门缝里看人",
    items: [
      {
        type: "chengyu", title: "塞翁失马", pinyin: "sài wēng shī mǎ", emoji: "🐴", grade: "小学",
        story: "边塞老爷爷的马跑了，邻居来安慰他，他说：『说不定是好事呢？』几天后，马带回一群野马！邻居来道喜，他说：『说不定是坏事呢？』儿子骑野马摔断了腿，他说：『说不定是好事呢？』不久打仗了，年轻人都要去，他儿子因为腿伤留在家——平平安安。你看，好事坏事，说不定会变哦！",
        yuyi: "马丢了也可能是好事——坏事能变好事，遇到事情要看长远一点。",
        chuchu: "《淮南子·人间训》",
        tip: "玩『变好变坏』接龙：我说一件『坏事』，孩子说可能变成什么好事。"
      },
      {
        type: "yanyu", title: "谚语 · 路遥知马力", emoji: "🛤️", grade: "小学",
        lines: ["路遥知马力，", "日久见人心。"],
        py: ["lù yáo zhī mǎ lì", "rì jiǔ jiàn rén xīn"],
        mean: "路走远了才知道马的力气，日子久了才能看清人的心。",
        fun: "新朋友好不好，处久了才知道——时间是最好的检验员！",
        tip: "和孩子聊：认识很久的好朋友，你最欣赏他哪一点？"
      },
      {
        type: "xiehouyu", title: "歇后语 · 门缝里看人", emoji: "😄", grade: "小学",
        first: "门缝里看人", py1: "mén fèng lǐ kàn rén",
        second: "把人看扁了", py2: "bǎ rén kàn biǎn le",
        mean: "从门缝里看人，看到的是扁的——比喻小看别人、把人看低了。",
        fun: "门缝那么窄，看人都变扁了——每个人都有你看不到的大本领！",
        tip: "真的从门缝往外看一眼：只能看到一点点——所以不能小瞧别人。"
      }
    ],
    practice: [
      { q: "塞翁丢了马，他说这可能是什么？", type: "choice", options: ["好事（焉知非福）", "天大的坏事", "无所谓"], answer: "好事（焉知非福）", explain: "塞翁失马，焉知非福。" },
      { q: "『路遥知马力，日久见人心』是说什么？", type: "choice", options: ["时间长了才能看出真正的好坏", "马跑得很快", "人心看不清"], answer: "时间长了才能看出真正的好坏", explain: "路遥知马力——时间见真章。" },
      { q: "判断：『塞翁失马』告诉我们坏事有时能变好事。", type: "judge", answer: true, explain: "丢马→带回野马→儿子摔伤→保住性命。" }
    ],
    flashcards: [
      { word: "丢失", pinyin: "diū shī", mean: "东西不见了。", emoji: "🐴" },
      { word: "福气", pinyin: "fú qì", mean: "好运气。", emoji: "🍀" },
      { word: "人心", pinyin: "rén xīn", mean: "人的真实想法和品性。", emoji: "❤️" },
      { word: "小看", pinyin: "xiǎo kàn", mean: "瞧不起别人。", emoji: "🚪" }
    ]
  },

  /* ===================== Day 45 ===================== */
  {
    day: 45,
    date: "第 45 天",
    theme: "八仙过海 + 种瓜得瓜 + 姜太公钓鱼",
    items: [
      {
        type: "chengyu", title: "八仙过海", pinyin: "bā xiān guò hǎi", emoji: "🌊", grade: "小学",
        story: "八位神仙过东海，不用船！铁拐李把拐杖往海里一扔，变成小船；汉钟离躺在芭蕉扇上漂；张果老倒骑着毛驴踩浪花；何仙姑踩着大荷花，蓝采和站在花篮里……八个人八般武艺，说说笑笑就过了大海！",
        yuyi: "八位神仙各有各的过海办法——每个人都拿出自己的本领来，各显神通！",
        chuchu: "民间传说《东游记》",
        tip: "45 天课程到此圆满结束！和孩子玩『各显神通』：全家每人用一个本领解决同一个问题。"
      },
      {
        type: "yanyu", title: "谚语 · 种瓜得瓜，种豆得豆", emoji: "🍉", grade: "小学",
        lines: ["种瓜得瓜，", "种豆得豆。"],
        py: ["zhòng guā dé guā", "zhòng dòu dé dòu"],
        mean: "种下瓜籽收瓜，种下豆子收豆——付出什么就收获什么。",
        fun: "种下『每天读一句国学』，45 天后收获满满！",
        tip: "45 天最后一天：把这句当作总结——孩子种下的努力，都变成了知识。"
      },
      {
        type: "xiehouyu", title: "歇后语 · 姜太公钓鱼", emoji: "😄", grade: "小学",
        first: "姜太公钓鱼", py1: "jiāng tài gōng diào yú",
        second: "愿者上钩", py2: "yuàn zhě shàng gōu",
        mean: "姜太公用直钩钓鱼，愿意上钩的鱼自己上钩——比喻心甘情愿地进入别人设下的圈套。",
        fun: "姜太公的钩是直的还不放鱼饵——愿者上钩！",
        tip: "讲讲姜太公等到周文王的故事：有真本事，自然有人来请。"
      }
    ],
    practice: [
      { q: "『八仙过海，各显神通』是说什么？", type: "choice", options: ["各人拿出各人的本领", "八位神仙在游泳", "过海必须坐船"], answer: "各人拿出各人的本领", explain: "各显神通 = 各展本领。" },
      { q: "『种瓜得瓜，种豆得豆』告诉我们什么？", type: "choice", options: ["付出什么就收获什么", "瓜和豆很好吃", "种地很简单"], answer: "付出什么就收获什么", explain: "种什么因，得什么果。" },
      { q: "判断：这 15 天我们学习了成语、谚语和歇后语。", type: "judge", answer: true, explain: "成语 15 个、谚语 15 条、歇后语 15 条，收获满满！" }
    ],
    flashcards: [
      { word: "神通", pinyin: "shén tōng", mean: "神奇的本领。", emoji: "✨" },
      { word: "瓜豆", pinyin: "guā dòu", mean: "瓜类和豆类。", emoji: "🍉" },
      { word: "钓鱼", pinyin: "diào yú", mean: "用鱼钩捕鱼。", emoji: "🎣" },
      { word: "圆满", pinyin: "yuán mǎn", mean: "完整、没有缺憾。", emoji: "🌕" }
    ]
  }
];

/* ===================== 偏旁板块：每日一个（注入全部 45 天） ===================== */
/* 格式：[偏旁, 名称, 拼音, 家族本义, 干扰项1, 干扰项2, [[例字,拼音,词],...], 趣味点, 备课提示] */
var PIANPANG_45 = [
  ["氵","三点水","sān diǎn shuǐ","水","火","土",[["河","hé","河水"],["海","hǎi","大海"],["洗","xǐ","洗手"],["江","jiāng","长江"],["泳","yǒng","游泳"]],"三点水就像小河里的水波～带它的字都和水是好朋友：河里哗啦啦淌着水，大海一望无边，我们天天洗手、在游泳池里扑腾也离不开水。你听，『哗啦哗啦』就是水的声音！","玩『偏旁找家』：说出 5 个三点水的字。"],
  ["火","火字旁","huǒ zì páng","火","水","木",[["烧","shāo","烧饭"],["灯","dēng","台灯"],["炒","chǎo","炒菜"],["烤","kǎo","烤火"],["炸","zhá","炸鸡"]],"火字旁像一簇跳跳的小火苗～烧饭的火、暖暖的台灯、炒菜的香、冬天烤火的暖、香喷喷的炸鸡，全都要靠火。不过小朋友可不能自己去碰火哦，火苗虽然可爱，但会咬人！","厨房寻宝：找 5 样火字旁的东西。"],
  ["木","木字旁","mù zì páng","树木","水","火",[["林","lín","树林"],["桥","qiáo","小桥"],["桌","zhuō","桌子"],["树","shù","大树"],["桃","táo","桃子"]],"木字旁就是一棵小树～树林里好多树，小桥是木头搭的，桌子是木头做的，大树又高又壮，桃子也长在树上。我们用的铅笔也是木头做的，摸摸看是不是？","木头大搜查：家中有哪些木字旁？"],
  ["艹","草字头","cǎo zì tóu","花草","水","木",[["花","huā","花朵"],["草","cǎo","小草"],["芽","yá","发芽"],["菜","cài","青菜"],["蓝","lán","蓝天"]],"草字头像两片刚冒头的小嫩芽～花朵、小草、发芽、青菜、蓝天（蓝字头上是草字头变的），都和植物有关。下楼找一找，草地里好多字都戴着这顶『小草帽』！","草帽小侦探：楼下找 3 种草字头植物。"],
  ["口","口字旁","kǒu zì páng","嘴巴","手","耳",[["吃","chī","吃饭"],["唱","chàng","唱歌"],["叫","jiào","叫声"],["吹","chuī","吹气"],["喊","hǎn","喊叫"]],"口字旁就是一张小嘴巴～吃饭用嘴、唱歌用嘴、叫人用嘴、吹泡泡用嘴、喊人也要用嘴。对着镜子做一个大大的『啊——』，你就在用自己的口字旁啦！","嘴巴总动员：吃、唱、叫、吹、喊，边做边念。"],
  ["日","日字旁","rì zì páng","太阳","月亮","水",[["早","zǎo","早上"],["明","míng","明天"],["春","chūn","春天"],["晴","qíng","晴天"],["时","shí","时间"]],"日字旁就是红红的太阳公公～早上太阳升起是『早』，明天太阳又来是『明』，春天晒太阳暖暖的是『春』，晴天有太阳，时间也是太阳走出来的。拉开窗帘说声早安吧！","太阳问候：拉开窗帘说一声『日字旁早安』。"],
  ["月","月字旁","yuè zì páng","月亮和身体","太阳","水",[["朋","péng","朋友"],["脸","liǎn","脸蛋"],["肚","dù","肚子"],["脚","jiǎo","脚丫"],["胖","pàng","胖乎乎"]],"月字旁有两个小家族哦：一个是天上弯弯的月亮（朋友、明亮），一个是身体里软软的地方（脸蛋、肚子、脚丫、胖乎乎）。摸摸你的小脸蛋，它也是月字旁！","摸摸身体：脸、肚、脚，都是月字旁。"],
  ["土","提土旁","tí tǔ páng","泥土","水","火",[["地","dì","大地"],["城","chéng","城市"],["块","kuài","土块"],["坡","pō","山坡"],["墙","qiáng","围墙"]],"提土旁就是一把泥土～大地踩上去软软的，城市建在土地上，土块能捏碎，山坡是土堆起来的，围墙也是土砖砌的。楼下抓一把土，这就是提土旁的家！","抓一把土：感受提土旁的大地。"],
  ["扌","提手旁","tí shǒu páng","手","脚","口",[["打","dǎ","打球"],["拍","pāi","拍手"],["抱","bào","拥抱"],["拉","lā","拉手"],["推","tuī","推开"]],"提手旁就是一只小小手～打球、拍手、抱抱、拉勾勾、推开小门，全都是手的动作。伸出你的小手，拍一拍、抱一抱，你就是小小的提手旁！","动作猜字：拍、抱、拉、推、打，做出来。"],
  ["足","足字旁","zú zì páng","脚","手","口",[["跑","pǎo","跑步"],["跳","tiào","跳绳"],["踢","tī","踢球"],["踩","cǎi","踩水"],["跟","gēn","跟着"]],"足字旁就是一双小脚丫～跑步、跳绳、踢球、踩水坑、跟着妈妈走，都要用脚。脱下鞋子动动脚指头，跑一跑、跳一跳，足字旁就活啦！","脚部三连：跑、跳、踢，边跳边念。"],
  ["讠","言字旁","yán zì páng","说话","手","耳",[["说","shuō","说话"],["读","dú","读书"],["课","kè","上课"],["讲","jiǎng","讲课"],["话","huà","电话"]],"言字旁就是一句话从嘴里飘出来～说话、读书、上课听讲、老师讲课、打电话，全都要用语言。当一回小主播，用一句话讲讲今天吃了什么吧！","小小播报员：用一句话播报今天。"],
  ["忄","竖心旁","shù xīn páng","心情","手","水",[["快","kuài","快乐"],["怕","pà","害怕"],["忙","máng","帮忙"],["想","xiǎng","想法"],["念","niàn","想念"]],"竖心旁是一颗竖起来、怦怦跳的小心心～快乐时它蹦蹦跳，害怕时它缩一缩，帮忙时它暖暖的，想念谁时它软软的。今天你的小心心是快乐还是害羞呀？","心情播报：今天快乐还是害怕？"],
  ["辶","走之底","zǒu zhī dǐ","走路","手","飞",[["远","yuǎn","很远"],["近","jìn","很近"],["送","sòng","送别"],["过","guò","过河"],["迷","mí","迷路"]],"走之底像一条弯弯曲曲的小路～走远一点、走近一点、送别好朋友、过小河、迷路了，都和走路有关。在家地板上走走，远的地方和近的地方都是它管的！","远近距离：走到最远和最近的地方。"],
  ["阝","双耳旁","shuāng ěr páng","山岭或城市","耳朵","手",[["阳","yáng","太阳"],["队","duì","队伍"],["院","yuàn","院子"],["都","dū","首都"],["邻","lín","邻居"]],"双耳旁像两座小山坡～太阳（阳）爬上山坡，队伍排成行，院子围起来，首都大城市，邻居就在隔壁。找找小区名字里带『阝』的字：院、都、邻，都是山坡变来的！","小区找阝：院、都、邻，在哪儿见过？"],
  ["女","女字旁","nǚ zì páng","女性","男","子",[["妈","mā","妈妈"],["好","hǎo","好人"],["妹","mèi","妹妹"],["姐","jiě","姐姐"],["姑","gū","姑姑"]],"女字旁就是温柔的女生～妈妈最爱你，好人大家都喜欢，妹妹小小的，姐姐陪你玩，姑姑也疼你。数一数家里有几位女生，她们的称呼都戴着女字旁！","女生点数：家里几位女性？称呼都是女字旁。"],
  ["子","子字旁","zǐ zì páng","孩子","女","口",[["孩","hái","孩子"],["学","xué","学习"],["孔","kǒng","小孔"],["孙","sūn","孙子"],["字","zì","写字"]],"子字旁就是可爱的小宝宝～你是爸爸妈妈的孩子，学习是在屋顶下学本领（学），小孔是洞洞，孙子是爷爷奶奶的宝，写字也是子字旁。指指自己：子字旁就是我！","自我介绍：我就是『孩子』，子字旁就是我。"],
  ["宀","宝盖头","bǎo gài tóu","房屋","人","门",[["家","jiā","回家"],["安","ān","安全"],["室","shì","教室"],["字","zì","写字"],["宅","zhái","住宅"]],"宝盖头像我们家尖尖的屋顶～回家躲雨、安静睡一觉、教室上课、写字念书、住宅住人，都在屋顶下面。双手搭个屋顶戴头上，这就是宀，是我们的家！","搭屋顶：双手搭顶说『这是我的家』。"],
  ["广","广字旁","guǎng zì páng","大屋子","小","门",[["床","chuáng","小床"],["店","diàn","商店"],["座","zuò","座位"],["库","kù","仓库"],["庭","tíng","家庭"]],"广字旁是一间大大的房子～小床睡觉、商店买糖、座位坐下、仓库存货、家庭团聚，都在屋子里。逛街时抬头看招牌：店、座、库，都戴着广字旁！","招牌猎人：街上看店、座、库。"],
  ["门","门字框","mén zì kuàng","门户","窗","口",[["问","wèn","问题"],["间","jiān","时间"],["闪","shǎn","闪电"],["闲","xián","清闲"],["闷","mèn","闷热"]],"门字框就是两扇会开合的大门～有问题站门口开口问（问），时间从门里走过（间），闪电从门里蹿出来（闪），清闲时门半开，闷了门紧紧关。推开门问个问题吧！","门口提问：站门口问一个问题。"],
  ["囗","国字框","guó zì kuàng","围起来","门","口",[["国","guó","国家"],["园","yuán","花园"],["回","huí","回家"],["围","wéi","包围"],["圈","quān","圆圈"]],"国字框是四面围起来的围墙～国家被边界围住，花园用篱笆围起来，回家走进围起来的家，包围起来保护你，圆圈也是围一圈。用积木围个圈，把玩具圈进去就是『园』！","积木围园：用积木围圈放玩具。"],
  ["亻","单人旁","dān rén páng","人","手","木",[["你","nǐ","你好"],["他","tā","他们"],["做","zuò","做事"],["们","men","我们"],["休","xiū","休息"]],"单人旁就是一个站着的小人儿～你好、他、我们做事情（做）、他们、休息时靠在树旁（休），都是人。互相指一指：你、我、他，都是单人旁的小伙伴！","互相指认：你、我、他，都是单人旁。"],
  ["彳","双人旁","shuāng rén páng","道路","人","水",[["行","xíng","行走"],["往","wǎng","来往"],["很","hěn","很多"],["得","dé","得到"],["街","jiē","街道"]],"双人旁像两个人并排在路上走～行走、来往串门、很多朋友、得到礼物、街道上人来人往，都和走路有关。找个小伙伴拉手走一走，双人旁就出现啦！","双人拉手：找小伙伴走一走。"],
  ["犭","反犬旁","fǎn quǎn páng","动物","人","鸟",[["猫","māo","小猫"],["狗","gǒu","小狗"],["猴","hóu","猴子"],["狐","hú","狐狸"],["狮","shī","狮子"]],"反犬旁就是一只趴着的小动物～小猫喵喵、小狗汪汪、猴子调皮、狐狸聪明、狮子威风，多是四条腿的小兽。学三种动物叫，它们都是反犬旁的家庭成员！","动物模仿秀：学猫狗猴狐狮叫。"],
  ["虫","虫字旁","chóng zì páng","虫类","鱼","鸟",[["蝴","hú","蝴蝶"],["蛙","wā","青蛙"],["蚁","yǐ","蚂蚁"],["蝶","dié","飞蝶"],["蜂","fēng","蜜蜂"]],"虫字旁就是小虫子家族～蝴蝶花间飞，青蛙呱呱叫，蚂蚁排队走，飞蝶转圈圈，蜜蜂采蜜忙。下楼找一只小虫，看看它的名字是不是戴着虫字旁！","虫子观察：楼下找一只虫认名字。"],
  ["鱼","鱼字旁","yú zì páng","鱼类","虫","鸟",[["鲜","xiān","新鲜"],["鲤","lǐ","鲤鱼"],["鲸","jīng","鲸鱼"],["鲨","shā","鲨鱼"],["鲁","lǔ","粗鲁"]],"鱼字旁就是水里游的小鱼儿～鱼和羊一起煮最鲜（鲜），鲤鱼跳龙门，鲸鱼大大的，鲨鱼尖尖牙，粗鲁的鲁也带鱼。看鱼缸里认一认：鲤、鲸、鲨，都在吐泡泡！","鱼缸认鱼：鲤、鲸、鲨，哪个最大？"],
  ["鸟","鸟字旁","niǎo zì páng","鸟类","鱼","虫",[["鸡","jī","小鸡"],["鸭","yā","鸭子"],["鹅","é","白鹅"],["鸽","gē","鸽子"],["鸦","yā","乌鸦"]],"鸟字旁就是长翅膀的小鸟～小鸡叽叽，鸭子嘎嘎，白鹅曲项向天歌，鸽子送信，乌鸦聪明。学三种鸟叫，它们都是鸟字旁，扑棱着翅膀飞走啦！","鸟类合唱：鸡鸭鹅鸽鸦，各学一声。"],
  ["马","马字旁","mǎ zì páng","马","牛","羊",[["骑","qí","骑马"],["驼","tuó","骆驼"],["驶","shǐ","驾驶"],["驴","lǘ","毛驴"],["驰","chí","奔驰"]],"马字旁就是奔跑的小马～骑马哒哒哒，骆驼背着两座山，驾驶马车跑得快，毛驴小步摇，奔驰像风。学马跑『哒哒哒』，记住马字旁最强壮！","马蹄节奏：哒哒哒，学小马跑。"],
  ["牜","牛字旁","niú zì páng","牛","马","羊",[["物","wù","动物"],["牧","mù","放牧"],["特","tè","特别"],["牲","shēng","牲口"],["犊","dú","牛犊"]],"牛字旁就是勤劳的大水牛～动物里有它，放牧是赶着牛走（牧），特别的事很牛，牲口也是牛家，牛犊是小牛宝宝。喝牛奶时想想：牛字旁的牛最勤快！","牛奶时间：喝牛奶想想牛字旁。"],
  ["羊","羊字旁","yáng zì páng","羊","牛","马",[["群","qún","羊群"],["美","měi","美丽"],["羔","gāo","羔羊"],["洋","yáng","海洋"],["样","yàng","样子"]],"羊字旁就是卷卷毛的小羊～羊群咩咩，古人说肥羊最『美』（羊大为美），羔羊是小宝宝，海洋的洋、样子的样都戴羊。画只小羊咩咩叫，羊字旁真可爱！","画小羊：卷毛咩咩，羊字旁。"],
  ["禾","禾木旁","hé mù páng","庄稼","木","草",[["秋","qiū","秋天"],["种","zhǒng","种子"],["香","xiāng","香味"],["和","hé","和好"],["稻","dào","水稻"]],"禾木旁就是田里金黄的庄稼～秋天庄稼熟了是『秋』，种下种子等发芽，米饭香喷喷，和和气气一家人，水稻弯弯腰。吃米饭时说：米是禾苗长出来的！","米饭感恩：吃米念『禾苗长出来』。"],
  ["米","米字旁","mǐ zì páng","粮食","禾","木",[["粒","lì","米粒"],["粮","liáng","粮食"],["精","jīng","精心"],["粉","fěn","面粉"],["糕","gāo","蛋糕"]],"米字旁就是白白的米粒～一粒米很小（粒），粮食装满仓（粮），精心做饭，面粉做馒头，蛋糕甜甜的。念一句『粒粒皆辛苦』，别浪费小米粒哦！","不浪费米：念『粒粒皆辛苦』。"],
  ["纟","绞丝旁","jiǎo sī páng","丝线","毛","布",[["红","hóng","红色"],["纸","zhǐ","白纸"],["绿","lǜ","绿色"],["线","xiàn","线团"],["织","zhī","织布"]],"绞丝旁像两股拧在一起的丝线～红色、绿色是染出来的，白纸也是丝絮压的，线团能织毛衣，织布机嗡嗡响。摸摸衣服的线头，绞丝旁就藏在那儿！","线头探索：摸衣服找绞丝旁。"],
  ["钅","金字旁","jīn zì páng","金属","木","石",[["钱","qián","钱币"],["钟","zhōng","时钟"],["铁","tiě","铁块"],["银","yín","银子"],["铜","tóng","铜锣"]],"金字旁就是亮亮的金属～钱币能买糖，时钟滴答走，铁块硬硬的，银子白花花，铜锣咚咚敲。找一枚硬币，它就是金字旁的『钱』，凉凉的、硬硬的！","硬币游戏：找一枚硬币认『钱』。"],
  ["石","石字旁","shí zì páng","石头","土","金",[["岩","yán","岩石"],["破","pò","打破"],["碧","bì","碧绿"],["码","mǎ","码头"],["硬","yìng","坚硬"]],"石字旁就是硬硬的石头～岩石大山里，碰破会疼，碧绿像玉，码头停船，坚硬砸不碎。捡一块小石头，它就是石字旁，敲敲听『叮』的一声！","石头敲击：捡石听『叮』。"],
  ["山","山字旁","shān zì páng","山","石","土",[["峰","fēng","山峰"],["岭","lǐng","山岭"],["岛","dǎo","小岛"],["岩","yán","岩石"],["崖","yá","山崖"]],"山字旁就是高高的山～山峰尖尖，山岭连成线，小岛像海里的山，岩石是山的孩子，山崖笔直笔直。用手比三座尖尖峰，就是『山』字变来的！","山峰手势：手比三峰说『山』。"],
  ["田","田字旁","tián zì páng","田地","土","水",[["苗","miáo","禾苗"],["男","nán","男孩"],["界","jiè","世界"],["留","liú","留下"],["累","lèi","累了"]],"田字旁就是一块方方的田地～禾苗在田里长，田里出力干活的是『男』，世界大无边，留下脚印，累了在田边歇。画个田字格，田字格就是田地变的！","田字格画画：画田说田地。"],
  ["目","目字旁","mù zì páng","眼睛","耳","口",[["看","kàn","看见"],["眼","yǎn","眼睛"],["睡","shuì","睡觉"],["睛","jīng","眼睛"],["盯","dīng","盯着"]],"目字旁就是圆圆的眼睛～看见美好，眼睛亮晶晶，睡觉闭眼睛，盯着看仔细。闭上眼再睁开，做『看』的动作：手搭凉棚看远方，目字旁就睁开了！","手搭凉棚：做『看』认目字旁。"],
  ["耳","耳字旁","ěr zì páng","耳朵","目","口",[["闻","wén","新闻"],["聪","cōng","聪明"],["取","qǔ","取得"],["职","zhí","职业"],["联","lián","联系"]],"耳字旁就是爱听的小耳朵～新闻用耳听，聪明（聪）是耳听眼看清，取得靠耳朵学，职业要用耳，联系也靠听。捂住耳朵再放开，『聪』字为什么有耳？","捂耳游戏：聪字为什么有耳？"],
  ["舌","舌字旁","shé zì páng","舌头","口","牙",[["甜","tián","甜味"],["舔","tiǎn","舔一舔"],["辞","cí","告辞"],["舌","shé","舌头"],["乱","luàn","乱说"]],"舌字旁就是红红的小舌头～甜味要用舌头尝，舔一舔棒棒糖，告辞说再见，舌头会说话，乱说可不行。舔一口糖，甜甜的——舌字旁尝出来啦！","尝甜游戏：舔糖说『甜是舌字旁』。"],
  ["牙","牙字旁","yá zì páng","牙齿","口","舌",[["呀","ya","好呀"],["鸦","yā","乌鸦"],["穿","chuān","穿衣服"],["芽","yá","发芽"],["雅","yǎ","优雅"]],"牙字旁就是白白的牙齿～好呀张嘴露牙，乌鸦有尖嘴，穿衣服要扣好，发芽从土里钻，优雅笑露齿。张嘴照镜子看牙齿，牙字旁在和你笑呢！","镜子看牙：张嘴认牙字旁。"],
  ["巾","巾字旁","jīn zì páng","布巾","布","衣",[["布","bù","花布"],["帽","mào","帽子"],["帮","bāng","帮助"],["帕","pà","手帕"],["带","dài","皮带"]],"巾字旁就是软软的布～花布做裙子，帽子挡太阳，帮助用毛巾，手帕擦鼻涕，皮带系裤子。拿一条小毛巾擦擦手，它就是『巾』，软软的！","毛巾擦手：它就是『巾』。"],
  ["衤","衣字旁","yī zì páng","衣服","布","巾",[["衫","shān","衬衫"],["裤","kù","裤子"],["被","bèi","被子"],["袜","wà","袜子"],["裙","qún","裙子"]],"衣字旁(衤)就是身上的衣服～衬衫、裤子、被子、袜子、裙子，全是穿的。它比『礻』多一点，别认错啦！翻翻衣柜，衫、裤、裙、袜都在这儿！","衣柜搜查：衫裤裙袜，都是衣字旁。"],
  ["⺮","竹字头","zhú zì tóu","竹子","木","草",[["笔","bǐ","毛笔"],["笑","xiào","微笑"],["篮","lán","篮子"],["筷","kuài","筷子"],["笛","dí","笛子"]],"竹字头像两片绿竹叶～毛笔杆是竹子，篮子编竹子，筷子夹菜，笛子吹歌，笑字像竹下笑脸。找根筷子——竹子做的，竹字头摇啊摇！","筷子竹子：找筷子认竹字头。"],
  ["雨","雨字头","yǔ zì tóu","天气","水","云",[["雪","xuě","下雪"],["雷","léi","打雷"],["霜","shuāng","寒霜"],["露","lù","露水"],["雾","wù","大雾"]],"雨字头就是从天上掉下来的天气～下雪白花花，打雷轰隆隆，寒霜冷冰冰，露水亮晶晶，大雾白茫茫。看窗外今天什么天，找找对应的雨字头汉字！","天气播报：今天什么天？对应雨字头。"],
  ["气","气字旁","qì zì páng","气体","水","风",[["氧","yǎng","氧气"],["汽","qì","汽水"],["氛","fēn","气氛"],["氢","qīng","氢气"],["氮","dàn","氮气"]],"气字旁就是看不见的气体～我们呼吸的氧气最重要，汽水是冒泡泡的气，气氛热热闹闹，氢气会飘上天，氮气静静待着。深呼吸一口——吸进的就是气字旁的『气』！","深呼吸：吸一口，气字旁的『气』。"]
];

function _mkPp(a) {
  return { type: "pianpang", title: "偏旁 · " + a[1], emoji: "🧩", grade: "小学",
    radical: a[0], name: a[1], py: a[2], origin: a[3], wrong1: a[4], wrong2: a[5],
    chars: a[6].map(function (c) { return { c: c[0], p: c[1], w: c[2] }; }),
    fun: a[7], tip: a[8] };
}
CURRICULUM.forEach(function (d, i) { if (PIANPANG_45[i]) d.items.push(_mkPp(PIANPANG_45[i])); });

/* ===================== 自动派生练习题（由当日内容自动生成，上限 8 题/天） ===================== */
(function () {
  CURRICULUM.forEach(function (d) {
    var auto = [];
    var pp = null, xg = null, qz = null, yy = null, xh = null;
    d.items.forEach(function (it) {
      if (it.type === "pianpang") pp = it;
      else if (it.type === "xiaoguwen" && !xg) xg = it;
      else if (it.type === "qianziwen" && !qz) qz = it;
      else if (it.type === "yanyu" && !yy) yy = it;
      else if (it.type === "xiehouyu" && !xh) xh = it;
    });
    if (pp) {
      var opts = [pp.origin, pp.wrong1, pp.wrong2];
      var rot = d.day % 3;
      opts = opts.slice(rot).concat(opts.slice(0, rot));
      auto.push({ q: "『" + pp.radical + "』" + pp.name + "家族的字，大多和什么有关？", type: "choice", options: opts, answer: pp.origin, explain: pp.name + " 就是「" + pp.origin + "」家族。" });
    }
    if (xg && xg.notes && xg.notes.length >= 3) auto.push({ q: "连线：古文词语和意思。", type: "match", pairs: xg.notes.slice(0, 3).map(function (n) { return { left: n.w, right: n.m }; }), explain: "对照「注释小锦囊」。" });
    if (qz && qz.lines && qz.lines.length >= 2) auto.push({ q: "请补充《千字文》：" + qz.lines[0] + "____。", type: "fill", answer: (qz.lines[1] || "").replace(/[，。！？]/g, ""), explain: qz.lines[0] + qz.lines[1] });
    if (yy && yy.lines && yy.lines.length >= 2) auto.push({ q: "请补充谚语：" + yy.lines[0] + "____。", type: "fill", answer: (yy.lines[1] || "").replace(/[，。！？]/g, ""), explain: yy.lines.join("") });
    if (xh) auto.push({ q: "请补充歇后语：" + xh.first + "——____。", type: "fill", answer: (xh.second || "").replace(/（[^）]*）/g, ""), explain: xh.first + "——" + xh.second + "。" });
    var room = Math.max(0, 8 - d.practice.length);
    d.practice = d.practice.concat(auto.slice(0, room));
  });
})();

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
  qianziwen: { name: "千字文",   icon: "🌌" },
  pianpang:  { name: "偏旁识字", icon: "🧩" },
  yanyu:     { name: "谚语",     icon: "💬" },
  xiehouyu:  { name: "歇后语",   icon: "😄" }
};
