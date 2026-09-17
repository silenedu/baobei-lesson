/* 甲骨文 / 古字形「想象图」
 * 说明：下面是各字**古文字形的简化线描想象图**，用于帮 6 岁孩子建立「字—画」联系。
 * 并非严格考古拓片，而是取甲骨文/金文之神韵的童趣描画，家长可配合讲解。
 * 颜色用古朴的「甲骨棕」，线条圆润。viewBox 统一 0 0 100 100。
 */
(function () {
  var S = 'stroke="#8a5a2b" stroke-width="3.2" fill="none" stroke-linecap="round" stroke-linejoin="round"';
  var O = {
    "春": '<svg viewBox="0 0 100 100"><circle cx="50" cy="70" r="14" '+S+'/><path d="M50 56 V40" '+S+'/><path d="M38 48 q12 -18 24 0" '+S+'/><path d="M30 60 q-8 -10 4 -16" '+S+'/><path d="M70 60 q8 -10 -4 -16" '+S+'/></svg>',
    "风": '<svg viewBox="0 0 100 100"><path d="M20 40 q30 -8 50 4 q14 8 10 24" '+S+'/><path d="M30 56 q24 -4 40 6" '+S+'/><path d="M44 30 q10 6 6 18" '+S+'/></svg>',
    "花": '<svg viewBox="0 0 100 100"><path d="M50 78 V46" '+S+'/><circle cx="50" cy="34" r="9" '+S+'/><path d="M50 25 V16 M50 43 V52 M41 34 H32 M59 34 H68 M44 28 L38 22 M56 28 L62 22 M44 40 L38 46 M56 40 L62 46" '+S+'/></svg>',
    "草": '<svg viewBox="0 0 100 100"><path d="M30 70 H70" '+S+'/><path d="M50 70 V40" '+S+'/><path d="M50 52 q-16 -10 -22 -22" '+S+'/><path d="M50 52 q16 -10 22 -22" '+S+'/></svg>',
    "鸟": '<svg viewBox="0 0 100 100"><path d="M30 62 q14 -30 40 -22 q10 4 8 14 q14 2 12 12 q-2 8 -14 6 q-2 10 -14 8 q-20 -2 -16 -18 Z" '+S+'/><circle cx="58" cy="46" r="2.4" fill="#8a5a2b"/><path d="M70 56 q12 4 16 -2" '+S+'/><path d="M40 70 V84 M58 70 V84" '+S+'/></svg>',
    "鸡": '<svg viewBox="0 0 100 100"><path d="M34 60 q12 -28 34 -20 q8 4 6 12 q4 10 -8 12 q0 12 -16 10 q-18 -2 -16 -14 Z" '+S+'/><path d="M40 38 l-6 -10 M48 36 l0 -12" '+S+'/><circle cx="56" cy="46" r="2.4" fill="#8a5a2b"/><path d="M44 72 V86 M60 72 V86" '+S+'/></svg>',
    "虫": '<svg viewBox="0 0 100 100"><path d="M28 30 q22 14 44 0 q6 14 -6 22 q14 8 0 20 q-22 8 -38 -4 q-10 -16 0 -38 Z" '+S+'/><circle cx="40" cy="34" r="2" fill="#8a5a2b"/><circle cx="56" cy="34" r="2" fill="#8a5a2b"/></svg>',
    "鱼": '<svg viewBox="0 0 100 100"><path d="M22 50 q18 -20 44 -10 q14 4 14 10 q0 6 -14 10 q-26 10 -44 -10 Z" '+S+'/><path d="M80 50 l12 -10 V60 Z" '+S+'/><circle cx="36" cy="46" r="2.4" fill="#8a5a2b"/><path d="M30 56 q14 8 30 4 M30 44 q14 -6 30 4" '+S+'/></svg>',
    "水": '<svg viewBox="0 0 100 100"><path d="M50 18 V82" '+S+'/><path d="M50 30 q-16 -8 -22 4 q-4 10 8 12 q-16 2 -20 14 q-2 10 10 10" '+S+'/><path d="M50 30 q16 -8 22 4 q4 10 -8 12 q16 2 20 14 q2 10 -10 10" '+S+'/></svg>',
    "白": '<svg viewBox="0 0 100 100"><path d="M34 28 h32 l-4 44 q-12 8 -24 0 Z" '+S+'/><path d="M50 40 V58" '+S+'/></svg>',
    "红": '<svg viewBox="0 0 100 100"><path d="M30 24 h40 M30 24 v14 h40 V24" '+S+'/><path d="M50 38 V72 M36 50 h28 M36 62 h28" '+S+'/></svg>',
    "天": '<svg viewBox="0 0 100 100"><circle cx="50" cy="30" r="14" '+S+'/><path d="M50 44 V82 M50 58 H30 M50 58 H70 M50 72 H32 M50 72 H68" '+S+'/></svg>',
    "福": '<svg viewBox="0 0 100 100"><path d="M34 24 v52 q16 8 32 0 V24" '+S+'/><path d="M34 42 h32 M34 58 h32" '+S+'/><path d="M50 30 V36" '+S+'/><path d="M42 76 h16" '+S+'/></svg>',
    "门": '<svg viewBox="0 0 100 100"><path d="M26 22 V82 H44 V32 q-9 -8 -18 -10 Z" '+S+'/><path d="M74 22 V82 H56 V32 q9 -8 18 -10 Z" '+S+'/></svg>',
    "灯": '<svg viewBox="0 0 100 100"><path d="M50 20 q14 6 12 24 q-2 12 -12 14 q-10 -2 -12 -14 q-2 -18 12 -24 Z" '+S+'/><path d="M40 62 H60 M44 74 h12 M46 84 h8" '+S+'/></svg>',
    "年": '<svg viewBox="0 0 100 100"><path d="M50 30 V18 M50 24 q-14 -2 -18 6 M50 24 q14 -2 18 6" '+S+'/><path d="M50 30 q-12 8 -16 22 M50 30 q12 8 16 22" '+S+'/><path d="M34 78 q16 -10 32 0" '+S+'/></svg>',
    "兔": '<svg viewBox="0 0 100 100"><path d="M40 70 q-6 -34 16 -40 q22 6 16 40 q-2 12 -16 12 q-14 0 -16 -12 Z" '+S+'/><path d="M44 32 q-6 -20 -2 -26 M56 32 q6 -20 2 -26" '+S+'/><circle cx="50" cy="50" r="2.6" fill="#8a5a2b"/><circle cx="74" cy="66" r="3" fill="#8a5a2b"/></svg>',
    "木": '<svg viewBox="0 0 100 100"><path d="M50 82 V40" '+S+'/><path d="M50 56 q-16 -4 -22 -16 M50 56 q16 -4 22 -16" '+S+'/><path d="M50 82 q-12 -2 -18 -14 M50 82 q12 -2 18 -14" '+S+'/></svg>',
    "田": '<svg viewBox="0 0 100 100"><path d="M26 26 H74 V74 H26 Z" '+S+'/><path d="M50 26 V74 M26 50 H74" '+S+'/></svg>',
    "力": '<svg viewBox="0 0 100 100"><path d="M40 22 q22 6 24 30 q2 20 -14 30 q-10 -6 -4 -16 q8 -8 2 -18 q-6 -12 -18 -14" '+S+'/></svg>',
    "米": '<svg viewBox="0 0 100 100"><path d="M50 22 V78" '+S+'/><path d="M30 34 l8 8 M70 34 l-8 8 M26 50 h10 M64 50 h10 M30 66 l8 -8 M70 66 l-8 -8" '+S+'/></svg>',
    "禾": '<svg viewBox="0 0 100 100"><path d="M50 80 V36" '+S+'/><path d="M50 36 q-10 -14 -20 -16 M50 36 q10 -14 20 -16 M50 50 q-16 -2 -24 -10 M50 50 q16 -2 24 -10" '+S+'/><path d="M50 80 q-14 -2 -20 -12 M50 80 q14 -2 20 -12" '+S+'/></svg>',
    "土": '<svg viewBox="0 0 100 100"><path d="M34 40 H66 M40 40 V24 M60 40 V24" '+S+'/><path d="M26 70 q24 -12 48 0" '+S+'/><path d="M50 56 V70" '+S+'/></svg>',
    "中": '<svg viewBox="0 0 100 100"><path d="M22 38 H78 M22 62 H78" '+S+'/><circle cx="50" cy="50" r="13" '+S+'/><path d="M50 26 V74" '+S+'/></svg>',
    "月": '<svg viewBox="0 0 100 100"><path d="M62 22 q-30 6 -30 28 q0 22 30 28 q-14 -14 -14 -28 q0 -14 14 -28 Z" '+S+'/><path d="M52 40 q-6 8 0 16" '+S+'/></svg>',
    "日": '<svg viewBox="0 0 100 100"><circle cx="50" cy="50" r="26" '+S+'/><path d="M38 50 H62" '+S+'/></svg>',
    "星": '<svg viewBox="0 0 100 100"><circle cx="34" cy="34" r="7" '+S+'/><circle cx="66" cy="30" r="6" '+S+'/><circle cx="50" cy="58" r="9" '+S+'/><circle cx="30" cy="68" r="5" '+S+'/><circle cx="70" cy="66" r="6" '+S+'/></svg>',
    "光": '<svg viewBox="0 0 100 100"><path d="M50 26 q14 8 12 24 q-2 12 -12 14 q-10 -2 -12 -14 q-2 -16 12 -24 Z" '+S+'/><path d="M50 64 V84 M30 74 l-10 12 M70 74 l10 12 M22 50 H8 M78 50 H92" '+S+'/></svg>',
    "火": '<svg viewBox="0 0 100 100"><path d="M50 22 q14 18 -2 30 q-8 6 0 14 q-16 0 -16 -18 q0 -16 18 -26 Z" '+S+'/><path d="M34 60 q16 16 32 0" '+S+'/><path d="M40 72 q10 10 20 0" '+S+'/></svg>',
    "山": '<svg viewBox="0 0 100 100"><path d="M18 74 L38 38 L50 58 L62 34 L82 74 Z" '+S+'/></svg>',
    "石": '<svg viewBox="0 0 100 100"><path d="M20 40 H70 L86 60 H40 Z" '+S+'/><path d="M40 60 V82 H86" '+S+'/><path d="M28 52 H44" '+S+'/></svg>',
    "思": '<svg viewBox="0 0 100 100"><circle cx="50" cy="34" r="14" '+S+'/><path d="M50 48 V62" '+S+'/><path d="M34 70 q16 -10 32 0 q-4 16 -16 16 q-12 0 -16 -16 Z" '+S+'/></svg>',
    "心": '<svg viewBox="0 0 100 100"><path d="M30 40 q-10 18 6 30 q14 12 24 0 q16 -12 6 -30 q-8 8 -18 0 q-10 8 -18 0 Z" '+S+'/></svg>',
    "头": '<svg viewBox="0 0 100 100"><path d="M34 38 q16 -18 32 0 q6 18 -4 30 q-12 12 -24 0 q-10 -12 -4 -30 Z" '+S+'/><path d="M42 70 V84 M58 70 V84" '+S+'/></svg>',
    "乡": '<svg viewBox="0 0 100 100"><path d="M34 22 q-10 30 0 56 M50 22 q-10 30 0 56 M66 22 q-10 30 0 56" '+S+'/></svg>'
  };
  window.ORACLE = O;
})();
