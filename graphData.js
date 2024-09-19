const kanjiData = [
    {
        kanji: "日",
        readings: [
            { type: "kun", reading: "か", vocab: [""] },
            { type: "kun", reading: "じつ", vocab: [""] },
            { type: "kun", reading: "にち", vocab: [""] },
            { type: "kun", reading: "にっ", vocab: [""] },
            { type: "kun", reading: "にほん", vocab: [""] },
            { type: "kun", reading: "ひ", vocab: [""] },
            { type: "kun", reading: "び", vocab: [""] },
            { type: "kun", reading: "ぴ", vocab: [""] },
            { type: "kun", reading: "イル", vocab: [""] }
        ]
    },
    {
        kanji: "一",
        readings: [
            { type: "kun", reading: "いち", vocab: [""] },
            { type: "kun", reading: "いちがつ", vocab: [""] },
            { type: "kun", reading: "いちず", vocab: [""] },
            { type: "kun", reading: "いっ", vocab: [""] },
            { type: "kun", reading: "いつ", vocab: [""] },
            { type: "kun", reading: "おととい", vocab: [""] },
            { type: "kun", reading: "おととし", vocab: [""] },
            { type: "kun", reading: "せん", vocab: [""] },
            { type: "kun", reading: "ついたち", vocab: [""] },
            { type: "kun", reading: "ひと", vocab: [""] },
            { type: "kun", reading: "ひとり", vocab: [""] }
        ]
    },
    {
        kanji: "二",
        readings: [
            { type: "kun", reading: "じ", vocab: [""] },
            { type: "kun", reading: "に", vocab: [""] },
            { type: "kun", reading: "にじゅうろく", vocab: [""] },
            { type: "kun", reading: "はたち", vocab: [""] },
            { type: "kun", reading: "はつか", vocab: [""] },
            { type: "kun", reading: "ふた", vocab: [""] },
            { type: "kun", reading: "ふたり", vocab: [""] },
            { type: "kun", reading: "ふつか", vocab: [""] }
        ]
    },
    {
        kanji: "三",
        readings: [
            { type: "kun", reading: "さぶ", vocab: [""] },
            { type: "kun", reading: "さん", vocab: [""] },
            { type: "kun", reading: "さんじゅう", vocab: [""] },
            { type: "kun", reading: "さんみ", vocab: [""] },
            { type: "kun", reading: "しゃみせん", vocab: [""] },
            { type: "kun", reading: "み", vocab: [""] },
            { type: "kun", reading: "みっ", vocab: [""] }
        ]
    },
    {
        kanji: "十",
        readings: [
            { type: "kun", reading: "じっ", vocab: [""] },
            { type: "kun", reading: "じゅう", vocab: [""] },
            { type: "kun", reading: "じゅっ", vocab: [""] },
            { type: "kun", reading: "とお", vocab: [""] }
        ]
    },
    {
        kanji: "四",
        readings: [
            { type: "kun", reading: "し", vocab: [""] },
            { type: "kun", reading: "よ", vocab: [""] },
            { type: "kun", reading: "よっ", vocab: [""] },
            { type: "kun", reading: "よん", vocab: [""] },
            { type: "kun", reading: "よんひゃく", vocab: [""] }
        ]
    },
    {
        kanji: "五",
        readings: [
            { type: "kun", reading: "いつ", vocab: [""] },
            { type: "kun", reading: "ご", vocab: [""] }
        ]
    },
    {
        kanji: "六",
        readings: [
            { type: "kun", reading: "むい", vocab: [""] },
            { type: "kun", reading: "むっ", vocab: [""] },
            { type: "kun", reading: "ろく", vocab: [""] },
            { type: "kun", reading: "ろっ", vocab: [""] }
        ]
    },
    {
        kanji: "七",
        readings: [
            { type: "kun", reading: "しち", vocab: [""] },
            { type: "kun", reading: "たなばた", vocab: [""] },
            { type: "kun", reading: "なな", vocab: [""] },
            { type: "kun", reading: "なの", vocab: [""] }
        ]
    },
    {
        kanji: "八",
        readings: [
            { type: "kun", reading: "はち", vocab: [""] },
            { type: "kun", reading: "はちじゅう", vocab: [""] },
            { type: "kun", reading: "はっ", vocab: [""] },
            { type: "kun", reading: "ばち", vocab: [""] },
            { type: "kun", reading: "や", vocab: [""] },
            { type: "kun", reading: "やっ", vocab: [""] },
            { type: "kun", reading: "よう", vocab: [""] }
        ]
    },
    {
        kanji: "九",
        readings: [
            { type: "kun", reading: "きゅう", vocab: [""] },
            { type: "kun", reading: "きゅうひゃく", vocab: [""] },
            { type: "kun", reading: "く", vocab: [""] },
            { type: "kun", reading: "ここの", vocab: [""] }
        ]
    },
    {
        kanji: "丸",
        readings: [
            { type: "kun", reading: "がん", vocab: [""] },
            { type: "kun", reading: "まる", vocab: [""] }
        ]
    },
    {
        kanji: "円",
        readings: [
            { type: "kun", reading: "えん", vocab: [""] },
            { type: "kun", reading: "まる", vocab: [""] }
        ]
    },
    {
        kanji: "〇",
        readings: [
            { type: "kun", reading: "まる", vocab: [""] }
        ]
    },
    {
        kanji: "人",
        readings: [
            { type: "kun", reading: "じん", vocab: [""] },
            { type: "kun", reading: "と", vocab: [""] },
            { type: "kun", reading: "にん", vocab: [""] },
            { type: "kun", reading: "ひと", vocab: [""] },
            { type: "kun", reading: "びと", vocab: [""] },
            { type: "kun", reading: "り", vocab: [""] }
        ]
    },
    {
        kanji: "百",
        readings: [
            { type: "kun", reading: "お", vocab: [""] },
            { type: "kun", reading: "ひゃく", vocab: [""] },
            { type: "kun", reading: "ひゃくえん", vocab: [""] },
            { type: "kun", reading: "ひゃっ", vocab: [""] },
            { type: "kun", reading: "びゃく", vocab: [""] },
            { type: "kun", reading: "ぴゃく", vocab: [""] }
        ]
    },
    {
        kanji: "千",
        readings: [
            { type: "kun", reading: "せん", vocab: [""] },
            { type: "kun", reading: "ぜん", vocab: [""] },
            { type: "kun", reading: "ち", vocab: [""] }
        ]
    },
    {
        kanji: "万",
        readings: [
            { type: "kun", reading: "ばん", vocab: [""] },
            { type: "kun", reading: "まん", vocab: [""] }
        ]
    },
    {
        kanji: "口",
        readings: [
            { type: "kun", reading: "く", vocab: [""] },
            { type: "kun", reading: "くち", vocab: [""] },
            { type: "kun", reading: "ぐち", vocab: [""] },
            { type: "kun", reading: "こ", vocab: [""] },
            { type: "kun", reading: "こう", vocab: [""] }
        ]
    },
    {
        kanji: "田",
        readings: [
            { type: "kun", reading: "いなか", vocab: [""] },
            { type: "kun", reading: "た", vocab: [""] },
            { type: "kun", reading: "だ", vocab: [""] },
            { type: "kun", reading: "でん", vocab: [""] }
        ]
    },
    {
        kanji: "目",
        readings: [
            { type: "kun", reading: "ま", vocab: [""] },
            { type: "kun", reading: "め", vocab: [""] },
            { type: "kun", reading: "もく", vocab: [""] },
            { type: "kun", reading: "もっ", vocab: [""] }
        ]
    },
    {
        kanji: "川",
        readings: [
            { type: "kun", reading: "かわ", vocab: [""] },
            { type: "kun", reading: "かわら", vocab: [""] },
            { type: "kun", reading: "がわ", vocab: [""] },
            { type: "kun", reading: "せん", vocab: [""] }
        ]
    },
    {
        kanji: "月",
        readings: [
            { type: "kun", reading: "がっ", vocab: [""] },
            { type: "kun", reading: "がつ", vocab: [""] },
            { type: "kun", reading: "げっ", vocab: [""] },
            { type: "kun", reading: "げつ", vocab: [""] },
            { type: "kun", reading: "つき", vocab: [""] },
            { type: "kun", reading: "づき", vocab: [""] }
        ]
    },
    {
        kanji: "明",
        readings: [
            { type: "kun", reading: "あ", vocab: [""] },
            { type: "kun", reading: "あか", vocab: [""] },
            { type: "kun", reading: "あき", vocab: [""] },
            { type: "kun", reading: "あきら", vocab: [""] },
            { type: "kun", reading: "あさって", vocab: [""] },
            { type: "kun", reading: "あした", vocab: [""] },
            { type: "kun", reading: "みょう", vocab: [""] },
            { type: "kun", reading: "めい", vocab: [""] },
            { type: "kun", reading: "ミン", vocab: [""] }
        ]
    },
    {
        kanji: "曜",
        readings: [
            { type: "kun", reading: "よう", vocab: [""] }
        ]
    },
    {
        kanji: "火",
        readings: [
            { type: "kun", reading: "か", vocab: [""] },
            { type: "kun", reading: "ひ", vocab: [""] },
            { type: "kun", reading: "び", vocab: [""] }
        ]
    },
    {
        kanji: "水",
        readings: [
            { type: "kun", reading: "すい", vocab: [""] },
            { type: "kun", reading: "ずい", vocab: [""] },
            { type: "kun", reading: "みず", vocab: [""] }
        ]
    },
    {
        kanji: "木",
        readings: [
            { type: "kun", reading: "き", vocab: [""] },
            { type: "kun", reading: "ぎ", vocab: [""] },
            { type: "kun", reading: "こ", vocab: [""] },
            { type: "kun", reading: "ぼく", vocab: [""] },
            { type: "kun", reading: "もく", vocab: [""] },
            { type: "kun", reading: "もっ", vocab: [""] },
            { type: "kun", reading: "もめん", vocab: [""] }
        ]
    },
    {
        kanji: "金",
        readings: [
            { type: "kun", reading: "かな", vocab: [""] },
            { type: "kun", reading: "かね", vocab: [""] },
            { type: "kun", reading: "がね", vocab: [""] },
            { type: "kun", reading: "きん", vocab: [""] },
            { type: "kun", reading: "ごん", vocab: [""] },
            { type: "kun", reading: "キム", vocab: [""] },
            { type: "kun", reading: "キム・イルソン", vocab: [""] }
        ]
    },
    {
        kanji: "土",
        readings: [
            { type: "kun", reading: "つち", vocab: [""] },
            { type: "kun", reading: "と", vocab: [""] },
            { type: "kun", reading: "ど", vocab: [""] },
            { type: "kun", reading: "みやげ", vocab: [""] }
        ]
    },
    {
        kanji: "本",
        readings: [
            { type: "kun", reading: "ほん", vocab: [""] },
            { type: "kun", reading: "ぼん", vocab: [""] },
            { type: "kun", reading: "ぽん", vocab: [""] },
            { type: "kun", reading: "もと", vocab: [""] }
        ]
    },
    {
        kanji: "東",
        readings: [
            { type: "kun", reading: "とう", vocab: [""] },
            { type: "kun", reading: "ひがし", vocab: [""] }
        ]
    },
    {
        kanji: "大",
        readings: [
            { type: "kun", reading: "おお", vocab: [""] },
            { type: "kun", reading: "おおい", vocab: [""] },
            { type: "kun", reading: "おとな", vocab: [""] },
            { type: "kun", reading: "たい", vocab: [""] },
            { type: "kun", reading: "たいしょうてんのう", vocab: [""] },
            { type: "kun", reading: "だい", vocab: [""] },
            { type: "kun", reading: "やまと", vocab: [""] }
        ]
    },
    {
        kanji: "小",
        readings: [
            { type: "kun", reading: "あずき", vocab: [""] },
            { type: "kun", reading: "お", vocab: [""] },
            { type: "kun", reading: "こ", vocab: [""] },
            { type: "kun", reading: "ご", vocab: [""] },
            { type: "kun", reading: "しょう", vocab: [""] },
            { type: "kun", reading: "ちい", vocab: [""] }
        ]
    },
    {
        kanji: "中",
        readings: [
            { type: "kun", reading: "じゅう", vocab: [""] },
            { type: "kun", reading: "ちゅう", vocab: [""] },
            { type: "kun", reading: "なか", vocab: [""] }
        ]
    },
    {
        kanji: "生",
        readings: [
            { type: "kun", reading: "い", vocab: [""] },
            { type: "kun", reading: "いけ", vocab: [""] },
            { type: "kun", reading: "う", vocab: [""] },
            { type: "kun", reading: "き", vocab: [""] },
            { type: "kun", reading: "しょう", vocab: [""] },
            { type: "kun", reading: "じょう", vocab: [""] },
            { type: "kun", reading: "せい", vocab: [""] },
            { type: "kun", reading: "なま", vocab: [""] },
            { type: "kun", reading: "は", vocab: [""] }
        ]
    },
    {
        kanji: "山",
        readings: [
            { type: "kun", reading: "さん", vocab: [""] },
            { type: "kun", reading: "ざん", vocab: [""] },
            { type: "kun", reading: "や", vocab: [""] },
            { type: "kun", reading: "やま", vocab: [""] },
            { type: "kun", reading: "やまのて", vocab: [""] }
        ]
    },
    {
        kanji: "出",
        readings: [
            { type: "kun", reading: "いだ", vocab: [""] },
            { type: "kun", reading: "しゅっ", vocab: [""] },
            { type: "kun", reading: "しゅつ", vocab: [""] },
            { type: "kun", reading: "だ", vocab: [""] },
            { type: "kun", reading: "で", vocab: [""] }
        ]
    },
    {
        kanji: "入",
        readings: [
            { type: "kun", reading: "い", vocab: [""] },
            { type: "kun", reading: "いり", vocab: [""] },
            { type: "kun", reading: "にゅう", vocab: [""] },
            { type: "kun", reading: "はい", vocab: [""] }
        ]
    },
    {
        kanji: "下",
        readings: [
            { type: "kun", reading: "お", vocab: [""] },
            { type: "kun", reading: "か", vocab: [""] },
            { type: "kun", reading: "くだ", vocab: [""] },
            { type: "kun", reading: "げ", vocab: [""] },
            { type: "kun", reading: "さ", vocab: [""] },
            { type: "kun", reading: "した", vocab: [""] },
            { type: "kun", reading: "しも", vocab: [""] },
            { type: "kun", reading: "のした", vocab: [""] },
            { type: "kun", reading: "へ", vocab: [""] },
            { type: "kun", reading: "もと", vocab: [""] }
        ]
    },
    {
        kanji: "上",
        readings: [
            { type: "on", reading: "ジョウ", vocab: ["上下", "水上"] },
            { type: "kun", reading: "あ", vocab: ["上げる", "上がる"] },
            { type: "kun", reading: "う", vocab: [""] },
            { type: "kun", reading: "うえ", vocab: ["上", "目上", "上田さん"] },
            { type: "kun", reading: "うわ", vocab: [""] },
            { type: "kun", reading: "かみ", vocab: [""] },
            { type: "kun", reading: "がみ", vocab: [""] },
            { type: "kun", reading: "じょうず", vocab: [""] },
            { type: "kun", reading: "のうえ", vocab: [""] },
            { type: "kun", reading: "のぼ", vocab: ["上る", "上り"] },
            { type: "kun", reading: "シャンハイ", vocab: [""] }
        ]
    },
    {
        kanji: "止",
        readings: [
            { type: "kun", reading: "し", vocab: [""] },
            { type: "kun", reading: "と", vocab: [""] },
            { type: "kun", reading: "とど", vocab: [""] },
            { type: "kun", reading: "とま", vocab: [""] },
            { type: "kun", reading: "ど", vocab: [""] },
            { type: "kun", reading: "どま", vocab: [""] },
            { type: "kun", reading: "や", vocab: [""] }
        ]
    },
    {
        kanji: "正",
        readings: [
            { type: "kun", reading: "しょう", vocab: [""] },
            { type: "kun", reading: "せい", vocab: [""] },
            { type: "kun", reading: "ただ", vocab: [""] },
            { type: "kun", reading: "まさ", vocab: [""] },
            { type: "kun", reading: "ジョン", vocab: [""] }
        ]
    },
    {
        kanji: "足",
        readings: [
            { type: "kun", reading: "あ", vocab: [""] },
            { type: "kun", reading: "あし", vocab: [""] },
            { type: "kun", reading: "そく", vocab: [""] },
            { type: "kun", reading: "そっ", vocab: [""] },
            { type: "kun", reading: "ぞく", vocab: [""] },
            { type: "kun", reading: "た", vocab: [""] }
        ]
    },
    {
        kanji: "定",
        readings: [
            { type: "kun", reading: "さだ", vocab: [""] },
            { type: "kun", reading: "じょう", vocab: [""] },
            { type: "kun", reading: "てい", vocab: [""] }
        ]
    },
    {
        kanji: "手",
        readings: [
            { type: "kun", reading: "しゅ", vocab: [""] },
            { type: "kun", reading: "た", vocab: [""] },
            { type: "kun", reading: "って", vocab: [""] },
            { type: "kun", reading: "て", vocab: [""] },
            { type: "kun", reading: "で", vocab: [""] },
            { type: "kun", reading: "ま", vocab: [""] }
        ]
    },
    {
        kanji: "用",
        readings: [
            { type: "kun", reading: "もち", vocab: [""] },
            { type: "kun", reading: "よう", vocab: [""] }
        ]
    },
    {
        kanji: "無",
        readings: [
            { type: "on", reading: " ム", vocab: ["無水", "無", "無人", "無足", "無用", "無口", "無言"] },
            { type: "kun", reading: "な", vocab: ["無い", "無くす", "無くなる"] },
            { type: "kun", reading: "ぶ", vocab: [""] },
        ]
    },
    {
        kanji: "不",
        readings: [
            { type: "kun", reading: "ふ", vocab: [""] },
            { type: "kun", reading: "ぶ", vocab: [""] },
            { type: "kun", reading: "ま", vocab: [""] }
        ]
    },
    {
        kanji: "回",
        readings: [
            { type: "kun", reading: "かい", vocab: [""] },
            { type: "kun", reading: "まわ", vocab: [""] }
        ]
    },
    {
        kanji: "言",
        readings: [
            { type: "kun", reading: "い", vocab: [""] },
            { type: "kun", reading: "げん", vocab: [""] },
            { type: "kun", reading: "こと", vocab: [""] },
            { type: "kun", reading: "ごと", vocab: [""] },
            { type: "kun", reading: "ごん", vocab: [""] }
        ]
    },
    {
        kanji: "舌",
        readings: [
            { type: "kun", reading: "した", vocab: [""] },
            { type: "kun", reading: "じた", vocab: [""] },
            { type: "kun", reading: "ぜつ", vocab: [""] }
        ]
    },
    {
        kanji: "話",
        readings: [
            { type: "kun", reading: "はな", vocab: [""] },
            { type: "kun", reading: "はなし", vocab: [""] },
            { type: "kun", reading: "ばなし", vocab: [""] },
            { type: "kun", reading: "わ", vocab: [""] }
        ]
    },
    {
        kanji: "活",
        readings: [
            { type: "kun", reading: "い", vocab: [""] },
            { type: "kun", reading: "かっ", vocab: [""] },
            { type: "kun", reading: "かつ", vocab: [""] }
        ]
    },
    {
        kanji: "行",
        readings: [
            { type: "kun", reading: "い", vocab: [""] },
            { type: "kun", reading: "おこ", vocab: [""] },
            { type: "kun", reading: "おこな", vocab: [""] },
            { type: "kun", reading: "ぎょう", vocab: [""] },
            { type: "kun", reading: "こう", vocab: [""] },
            { type: "kun", reading: "ここな", vocab: [""] },
            { type: "kun", reading: "ゆ", vocab: [""] },
            { type: "kun", reading: "ゆき", vocab: [""] },
            { type: "kun", reading: "ゆくえ", vocab: [""] }
        ]
    },
    {
        kanji: "心",
        readings: [
            { type: "kun", reading: "こ", vocab: [""] },
            { type: "kun", reading: "ここち", vocab: [""] },
            { type: "kun", reading: "こころ", vocab: [""] },
            { type: "kun", reading: "ごころ", vocab: [""] },
            { type: "kun", reading: "しん", vocab: [""] },
            { type: "kun", reading: "じん", vocab: [""] }
        ]
    },
    {
        kanji: "耳",
        readings: [
            { type: "kun", reading: "じ", vocab: [""] },
            { type: "kun", reading: "みみ", vocab: [""] }
        ]
    },
    {
        kanji: "又",
        readings: [
            { type: "kun", reading: "また", vocab: [""] }
        ]
    },
    {
        kanji: "取",
        readings: [
            { type: "kun", reading: "しゅ", vocab: [""] },
            { type: "kun", reading: "と", vocab: [""] },
            { type: "kun", reading: "とり", vocab: [""] },
            { type: "kun", reading: "ど", vocab: [""] },
            { type: "kun", reading: "どり", vocab: [""] }
        ]
    },
    {
        kanji: "身",
        readings: [
            { type: "kun", reading: "からだ", vocab: ["身体", "身体中"] },
            { type: "on", reading: "シン", vocab: ["出身", "心身", "小身", "全身"] },
            { type: "kun", reading: "み", vocab: ["身なり", "身につける", "中身", "身"] }
        ]
    },
    {
        kanji: "休",
        readings: [
            { type: "kun", reading: "きゅう", vocab: [""] },
            { type: "kun", reading: "やす", vocab: [""] }
        ]
    },
    {
        kanji: "体",
        readings: [
            { type: "kun", reading: "からだ", vocab: [""] },
            { type: "kun", reading: "たい", vocab: [""] }
        ]
    },
    {
        kanji: "信",
        readings: [
            { type: "on", reading: "シン", vocab: ["信じる", "信じられない", "信用"] },
            { type: "kun", reading: "しが", vocab: [""] },
            { type: "kun", reading: "しな", vocab: [""] },
        ]
    },
    {
        kanji: "付",
        readings: [
            { type: "on", reading: "フ", vocab: ["付言"] },
            { type: "kun", reading: "つ", vocab: ["付ける", "付き", "取り付ける"] },
            { type: "kun", reading: "つけ", vocab: [""] },
            { type: "kun", reading: "づ", vocab: [""] },
            { type: "kun", reading: "づけ", vocab: ["日付"] },
        ]
    },
    {
        kanji: "受",
        readings: [
            { type: "on", reading: "ジュ", vocab: ["受信"] },
            { type: "kun", reading: "う", vocab: ["受け止める", "受ける", "受け入れる", "受け身", "受け取る"] },
            { type: "kun", reading: "うけ", vocab: ["受付"] },
        ]
    },
    {
        kanji: "以",
        readings: [
            { type: "on", reading: "イ", vocab: ["以上", "以下", "以前", "以後"] },
            { type: "kun", reading: "もっ", vocab: ["以て"] }
        ]
    },
    {
        kanji: "立",
        readings: [
            { type: "kun", reading: "た", vocab: ["立つ", "立ち", "立ちっぱなし"] },
            { type: "kun", reading: "たち", vocab: ["立川"] },
            { type: "kun", reading: "たて", vocab: [""] },
            { type: "kun", reading: "だ", vocab: ["目立つ"] },
            { type: "kun", reading: "だち", vocab: ["足立"] },
            { type: "on", reading: "リッ", vocab: ["立体"] },
            { type: "on", reading: "リツ", vocab: ["中立", "成立", "中立国", "成立"] }
        ]
    },
    {
        kanji: "部",
        readings: [
            { type: "kun", reading: "なべ", vocab: [""] },
            { type: "on", reading: "ブ", vocab: ["下部", "中部", "三部", "東部", "一部", "上部", "中心部", "部下", "二部", "部", "全部", "部分", "大部分"] },
            { type: "kun", reading: "へ", vocab: [""] },
            { type: "kun", reading: "べ", vocab: [""] },
            { type: "kun", reading: "べや", vocab: [""] }
        ]
    },
    {
        kanji: "倍",
        readings: [
            { type: "kun", reading: "ばい", vocab: [""] },
            { type: "kun", reading: "べ", vocab: [""] }
        ]
    },
    {
        kanji: "成",
        readings: [
            { type: "kun", reading: "せい", vocab: [""] },
            { type: "kun", reading: "な", vocab: [""] },
            { type: "kun", reading: "なり", vocab: [""] },
            { type: "kun", reading: "ソン", vocab: [""] }
        ]
    },
    {
        kanji: "代",
        readings: [
            { type: "kun", reading: "か", vocab: [""] },
            { type: "kun", reading: "がわ", vocab: [""] },
            { type: "kun", reading: "しろ", vocab: [""] },
            { type: "kun", reading: "たい", vocab: [""] },
            { type: "kun", reading: "だい", vocab: [""] },
            { type: "kun", reading: "よ", vocab: [""] }
        ]
    },
    {
        kanji: "王",
        readings: [
            { type: "kun", reading: "おう", vocab: [""] },
            { type: "kun", reading: "ワン", vocab: [""] }
        ]
    },
    {
        kanji: "玉",
        readings: [
            { type: "kun", reading: "ぎょく", vocab: [""] },
            { type: "kun", reading: "たま", vocab: [""] },
            { type: "kun", reading: "だま", vocab: [""] }
        ]
    },
    {
        kanji: "宝",
        readings: [
            { type: "kun", reading: "たから", vocab: [""] },
            { type: "kun", reading: "ほう", vocab: [""] }
        ]
    },
    {
        kanji: "国",
        readings: [
            { type: "kun", reading: "くに", vocab: [""] },
            { type: "kun", reading: "ぐに", vocab: [""] },
            { type: "kun", reading: "こく", vocab: [""] },
            { type: "kun", reading: "こっ", vocab: [""] },
            { type: "kun", reading: "ごく", vocab: [""] }
        ]
    },
    {
        kanji: "白",
        readings: [
            { type: "kun", reading: "しら", vocab: [""] },
            { type: "kun", reading: "しろ", vocab: [""] },
            { type: "kun", reading: "じろ", vocab: [""] },
            { type: "kun", reading: "はく", vocab: [""] },
            { type: "kun", reading: "はっ", vocab: [""] }
        ]
    },
    {
        kanji: "皇",
        readings: [
            { type: "kun", reading: "こう", vocab: [""] }
        ]
    },
    {
        kanji: "全",
        readings: [
            { type: "kun", reading: "すべ", vocab: [""] },
            { type: "kun", reading: "ぜん", vocab: [""] },
            { type: "kun", reading: "まった", vocab: [""] }
        ]
    },
    {
        kanji: "書",
        readings: [
            { type: "kun", reading: "か", vocab: [""] },
            { type: "kun", reading: "が", vocab: [""] },
            { type: "kun", reading: "がき", vocab: [""] },
            { type: "kun", reading: "しょ", vocab: [""] }
        ]
    },
    {
        kanji: "事",
        readings: [
            { type: "kun", reading: "こと", vocab: [""] },
            { type: "kun", reading: "ごと", vocab: [""] },
            { type: "kun", reading: "じ", vocab: [""] }
        ]
    },
    {
        kanji: "自",
        readings: [
            { type: "kun", reading: "おの", vocab: [""] },
            { type: "kun", reading: "し", vocab: [""] },
            { type: "kun", reading: "じ", vocab: [""] },
            { type: "kun", reading: "みずか", vocab: [""] }
        ]
    },
    {
        kanji: "貝",
        readings: [
            { type: "kun", reading: "かい", vocab: [""] },
            { type: "kun", reading: "がい", vocab: [""] }
        ]
    },
    {
        kanji: "見",
        readings: [
            { type: "kun", reading: "けん", vocab: [""] },
            { type: "kun", reading: "み", vocab: [""] },
            { type: "kun", reading: "みこみきゃく", vocab: [""] }
        ]
    },
    {
        kanji: "力",
        readings: [
            { type: "kun", reading: "ちから", vocab: [""] },
            { type: "kun", reading: "りき", vocab: [""] },
            { type: "kun", reading: "りょく", vocab: [""] }
        ]
    },
    {
        kanji: "刀",
        readings: [
            { type: "kun", reading: "かたな", vocab: [""] },
            { type: "kun", reading: "がたな", vocab: [""] },
            { type: "kun", reading: "ち", vocab: [""] },
            { type: "kun", reading: "とう", vocab: [""] },
            { type: "kun", reading: "ん", vocab: [""] }
        ]
    },
    {
        kanji: "切",
        readings: [
            { type: "kun", reading: "き", vocab: [""] },
            { type: "kun", reading: "きっ", vocab: [""] },
            { type: "kun", reading: "きり", vocab: [""] },
            { type: "kun", reading: "ぎ", vocab: [""] },
            { type: "kun", reading: "ぎっ", vocab: [""] },
            { type: "kun", reading: "さい", vocab: [""] },
            { type: "kun", reading: "せつ", vocab: [""] }
        ]
    },
    {
        kanji: "刃",
        readings: [
            { type: "kun", reading: "じん", vocab: [""] },
            { type: "kun", reading: "は", vocab: [""] },
            { type: "kun", reading: "ば", vocab: [""] }
        ]
    },
    {
        kanji: "分",
        readings: [
            { type: "kun", reading: "ふん", vocab: [""] },
            { type: "kun", reading: "ぶ", vocab: [""] },
            { type: "kun", reading: "ぶん", vocab: [""] },
            { type: "kun", reading: "ぷん", vocab: [""] },
            { type: "kun", reading: "わ", vocab: [""] },
            { type: "kun", reading: "わか", vocab: [""] }
        ]
    },
    {
        kanji: "公",
        readings: [
            { type: "kun", reading: "おおやけ", vocab: [""] },
            { type: "kun", reading: "こう", vocab: [""] }
        ]
    },
    {
        kanji: "別",
        readings: [
            { type: "kun", reading: "べっ", vocab: [""] },
            { type: "kun", reading: "べつ", vocab: [""] },
            { type: "kun", reading: "わか", vocab: [""] }
        ]
    },
    {
        kanji: "長",
        readings: [
            { type: "kun", reading: "ちょう", vocab: [""] },
            { type: "kun", reading: "なが", vocab: [""] }
        ]
    },
    {
        kanji: "男",
        readings: [
            { type: "kun", reading: "お", vocab: [""] },
            { type: "kun", reading: "おとこ", vocab: [""] },
            { type: "kun", reading: "だん", vocab: [""] },
            { type: "kun", reading: "だんせいか", vocab: [""] },
            { type: "kun", reading: "なん", vocab: [""] }
        ]
    },
    {
        kanji: "女",
        readings: [
            { type: "kun", reading: "おんな", vocab: [""] },
            { type: "kun", reading: "じょ", vocab: [""] },
            { type: "kun", reading: "にょ", vocab: [""] },
            { type: "kun", reading: "め", vocab: [""] }
        ]
    },
    {
        kanji: "子",
        readings: [
            { type: "kun", reading: "こ", vocab: [""] },
            { type: "kun", reading: "ご", vocab: [""] },
            { type: "kun", reading: "し", vocab: [""] },
            { type: "kun", reading: "じ", vocab: [""] },
            { type: "kun", reading: "す", vocab: [""] }
        ]
    },
    {
        kanji: "好",
        readings: [
            { type: "kun", reading: "こう", vocab: [""] },
            { type: "kun", reading: "この", vocab: [""] },
            { type: "kun", reading: "ごの", vocab: [""] },
            { type: "kun", reading: "す", vocab: [""] },
            { type: "kun", reading: "ず", vocab: [""] },
            { type: "kun", reading: "よ", vocab: [""] }
        ]
    },
    {
        kanji: "安",
        readings: [
            { type: "kun", reading: "あ", vocab: [""] },
            { type: "kun", reading: "あん", vocab: [""] },
            { type: "kun", reading: "やす", vocab: [""] }
        ]
    },
    {
        kanji: "案",
        readings: [
            { type: "kun", reading: "あん", vocab: [""] }
        ]
    },
    {
        kanji: "字",
        readings: [
            { type: "kun", reading: "じ", vocab: [""] }
        ]
    },
    {
        kanji: "学",
        readings: [
            { type: "kun", reading: "がく", vocab: [""] },
            { type: "kun", reading: "がっ", vocab: [""] },
            { type: "kun", reading: "まな", vocab: [""] }
        ]
    },
    {
        kanji: "父",
        readings: [
            { type: "kun", reading: "ちち", vocab: [""] },
            { type: "kun", reading: "とう", vocab: [""] },
            { type: "kun", reading: "ふ", vocab: [""] },
            { type: "kun", reading: "ぷ", vocab: [""] }
        ]
    },
    {
        kanji: "文",
        readings: [
            { type: "kun", reading: "ぶん", vocab: [""] },
            { type: "kun", reading: "も", vocab: [""] },
            { type: "kun", reading: "もん", vocab: [""] }
        ]
    },
    {
        kanji: "交",
        readings: [
            { type: "kun", reading: "か", vocab: [""] },
            { type: "kun", reading: "こう", vocab: [""] },
            { type: "kun", reading: "ま", vocab: [""] },
            { type: "kun", reading: "まじ", vocab: [""] }
        ]
    },
    {
        kanji: "校",
        readings: [
            { type: "kun", reading: "こう", vocab: [""] }
        ]
    },
    {
        kanji: "母",
        readings: [
            { type: "kun", reading: "あ", vocab: [""] },
            { type: "kun", reading: "かあ", vocab: [""] },
            { type: "kun", reading: "はは", vocab: [""] },
            { type: "kun", reading: "ば", vocab: [""] },
            { type: "kun", reading: "ぼ", vocab: [""] }
        ]
    },
    {
        kanji: "毎",
        readings: [
            { type: "kun", reading: "ごと", vocab: [""] },
            { type: "kun", reading: "まい", vocab: [""] }
        ]
    },
    {
        kanji: "海",
        readings: [
            { type: "kun", reading: "いるか", vocab: [""] },
            { type: "kun", reading: "うみ", vocab: [""] },
            { type: "kun", reading: "え", vocab: [""] },
            { type: "kun", reading: "かい", vocab: [""] },
            { type: "kun", reading: "み", vocab: [""] }
        ]
    },
    {
        kanji: "者",
        readings: [
            { type: "kun", reading: "しゃ", vocab: [""] },
            { type: "kun", reading: "じゃ", vocab: [""] },
            { type: "kun", reading: "もの", vocab: [""] }
        ]
    },
    {
        kanji: "工",
        readings: [
            { type: "kun", reading: "く", vocab: [""] },
            { type: "kun", reading: "こう", vocab: [""] }
        ]
    },
    {
        kanji: "式",
        readings: [
            { type: "kun", reading: "しき", vocab: [""] }
        ]
    },
    {
        kanji: "弐",
        readings: [
            { type: "kun", reading: "に", vocab: [""] }
        ]
    },
    {
        kanji: "武",
        readings: [
            { type: "kun", reading: "たけ", vocab: [""] },
            { type: "kun", reading: "ぶ", vocab: [""] },
            { type: "kun", reading: "む", vocab: [""] },
            { type: "kun", reading: "むさし", vocab: [""] }
        ]
    },
    {
        kanji: "糸",
        readings: [
            { type: "kun", reading: "いと", vocab: [""] },
            { type: "kun", reading: "し", vocab: [""] }
        ]
    },
    {
        kanji: "前",
        readings: [
            { type: "kun", reading: "ぜん", vocab: [""] },
            { type: "kun", reading: "まえ", vocab: [""] }
        ]
    },
    {
        kanji: "後",
        readings: [
            { type: "kun", reading: "あと", vocab: [""] },
            { type: "kun", reading: "うし", vocab: [""] },
            { type: "kun", reading: "おく", vocab: [""] },
            { type: "kun", reading: "こう", vocab: [""] },
            { type: "kun", reading: "ご", vocab: [""] },
            { type: "kun", reading: "のち", vocab: [""] }
        ]
    },
    {
        kanji: "午",
        readings: [
            { type: "kun", reading: "ご", vocab: [""] }
        ]
    },
    {
        kanji: "牛",
        readings: [
            { type: "kun", reading: "うし", vocab: [""] },
            { type: "kun", reading: "ぎゅう", vocab: [""] }
        ]
    },
    {
        kanji: "年",
        readings: [
            { type: "kun", reading: "とし", vocab: [""] },
            { type: "kun", reading: "どし", vocab: [""] },
            { type: "kun", reading: "ねん", vocab: [""] }
        ]
    },
    {
        kanji: "件",
        readings: [
            { type: "kun", reading: "けん", vocab: [""] }
        ]
    },
    {
        kanji: "条",
        readings: [
            { type: "kun", reading: "じょう", vocab: [""] }
        ]
    },
    {
        kanji: "化",
        readings: [
            { type: "kun", reading: "か", vocab: [""] },
            { type: "kun", reading: "け", vocab: [""] },
            { type: "kun", reading: "ば", vocab: [""] }
        ]
    },
    {
        kanji: "花",
        readings: [
            { type: "kun", reading: "か", vocab: [""] },
            { type: "kun", reading: "はな", vocab: [""] },
            { type: "kun", reading: "ばな", vocab: [""] }
        ]
    },
    {
        kanji: "北",
        readings: [
            { type: "kun", reading: "きた", vocab: [""] },
            { type: "kun", reading: "ほく", vocab: [""] },
            { type: "kun", reading: "ほっ", vocab: [""] },
            { type: "kun", reading: "ぼく", vocab: [""] },
            { type: "kun", reading: "ペ", vocab: [""] }
        ]
    },
    {
        kanji: "比",
        readings: [
            { type: "kun", reading: "くら", vocab: [""] },
            { type: "kun", reading: "ひ", vocab: [""] }
        ]
    },
    {
        kanji: "背",
        readings: [
            { type: "kun", reading: "せ", vocab: [""] },
            { type: "kun", reading: "せい", vocab: [""] },
            { type: "kun", reading: "そむ", vocab: [""] },
            { type: "kun", reading: "はい", vocab: [""] }
        ]
    },
    {
        kanji: "車",
        readings: [
            { type: "kun", reading: "くるま", vocab: [""] },
            { type: "kun", reading: "ぐるま", vocab: [""] },
            { type: "kun", reading: "しゃ", vocab: [""] }
        ]
    },
    {
        kanji: "気",
        readings: [
            { type: "kun", reading: "き", vocab: [""] },
            { type: "kun", reading: "ぎ", vocab: [""] },
            { type: "kun", reading: "く", vocab: [""] },
            { type: "kun", reading: "け", vocab: [""] },
            { type: "kun", reading: "げ", vocab: [""] }
        ]
    },
    {
        kanji: "汽",
        readings: [
            { type: "kun", reading: "き", vocab: [""] }
        ]
    },
    {
        kanji: "性",
        readings: [
            { type: "kun", reading: "じょう", vocab: [""] },
            { type: "kun", reading: "せい", vocab: [""] }
        ]
    },
    {
        kanji: "畑",
        readings: [
            { type: "kun", reading: "はた", vocab: [""] },
            { type: "kun", reading: "はたけ", vocab: [""] },
            { type: "kun", reading: "ばた", vocab: [""] },
            { type: "kun", reading: "ばたけ", vocab: [""] }
        ]
    },
    {
        kanji: "青",
        readings: [
            { type: "kun", reading: "あお", vocab: [""] },
            { type: "kun", reading: "しょう", vocab: [""] },
            { type: "kun", reading: "せい", vocab: [""] },
            { type: "kun", reading: "チン", vocab: [""] }
        ]
    },
    {
        kanji: "麦",
        readings: [
            { type: "kun", reading: "ば", vocab: [""] },
            { type: "kun", reading: "むぎ", vocab: [""] }
        ]
    },
    {
        kanji: "素",
        readings: [
            { type: "kun", reading: "しろうと", vocab: [""] },
            { type: "kun", reading: "す", vocab: [""] },
            { type: "kun", reading: "そ", vocab: [""] }
        ]
    },
    {
        kanji: "毒",
        readings: [
            { type: "kun", reading: "どく", vocab: [""] }
        ]
    },
    {
        kanji: "先",
        readings: [
            { type: "kun", reading: "さき", vocab: [""] },
            { type: "kun", reading: "せん", vocab: [""] },
            { type: "kun", reading: "ま", vocab: [""] }
        ]
    },
    {
        kanji: "洗",
        readings: [
            { type: "kun", reading: "あら", vocab: [""] },
            { type: "kun", reading: "あらい", vocab: [""] },
            { type: "kun", reading: "せん", vocab: [""] }
        ]
    },
    {
        kanji: "元",
        readings: [
            { type: "kun", reading: "がん", vocab: [""] },
            { type: "kun", reading: "げん", vocab: [""] },
            { type: "kun", reading: "もと", vocab: [""] }
        ]
    },
    {
        kanji: "光",
        readings: [
            { type: "kun", reading: "こう", vocab: [""] },
            { type: "kun", reading: "ひか", vocab: [""] },
            { type: "kun", reading: "ひかり", vocab: [""] },
            { type: "kun", reading: "ひかる", vocab: [""] }
        ]
    },
    {
        kanji: "去",
        readings: [
            { type: "kun", reading: "きょ", vocab: [""] },
            { type: "kun", reading: "こ", vocab: [""] },
            { type: "kun", reading: "さ", vocab: [""] },
            { type: "kun", reading: "ざ", vocab: [""] }
        ]
    },
    {
        kanji: "法",
        readings: [
            { type: "kun", reading: "ほう", vocab: [""] },
            { type: "kun", reading: "ぽう", vocab: [""] }
        ]
    },
    {
        kanji: "走",
        readings: [
            { type: "kun", reading: "そう", vocab: [""] },
            { type: "kun", reading: "はし", vocab: [""] },
            { type: "kun", reading: "ばし", vocab: [""] }
        ]
    },
    {
        kanji: "当",
        readings: [
            { type: "kun", reading: "あ", vocab: [""] },
            { type: "kun", reading: "あた", vocab: [""] },
            { type: "kun", reading: "あて", vocab: [""] },
            { type: "kun", reading: "とう", vocab: [""] }
        ]
    },
    {
        kanji: "思",
        readings: [
            { type: "kun", reading: "おも", vocab: [""] },
            { type: "kun", reading: "し", vocab: [""] }
        ]
    },
    {
        kanji: "早",
        readings: [
            { type: "kun", reading: "そう", vocab: [""] },
            { type: "kun", reading: "はや", vocab: [""] },
            { type: "kun", reading: "ばや", vocab: [""] }
        ]
    },
    {
        kanji: "草",
        readings: [
            { type: "kun", reading: "くさ", vocab: [""] },
            { type: "kun", reading: "そう", vocab: [""] }
        ]
    },
    {
        kanji: "朝",
        readings: [
            { type: "kun", reading: "あさ", vocab: [""] },
            { type: "kun", reading: "ちょう", vocab: [""] }
        ]
    },
    {
        kanji: "潮",
        readings: [
            { type: "kun", reading: "しお", vocab: [""] },
            { type: "kun", reading: "ちょう", vocab: [""] }
        ]
    },
    {
        kanji: "形",
        readings: [
            { type: "kun", reading: "かたち", vocab: [""] },
            { type: "kun", reading: "がた", vocab: [""] },
            { type: "kun", reading: "ぎょう", vocab: [""] },
            { type: "kun", reading: "けい", vocab: [""] }
        ]
    },
    {
        kanji: "発",
        readings: [
            { type: "kun", reading: "た", vocab: [""] },
            { type: "kun", reading: "は", vocab: [""] },
            { type: "kun", reading: "はっ", vocab: [""] },
            { type: "kun", reading: "はつ", vocab: [""] },
            { type: "kun", reading: "ぱつ", vocab: [""] },
            { type: "kun", reading: "ほっ", vocab: [""] }
        ]
    },
    {
        kanji: "廃",
        readings: [
            { type: "kun", reading: "すた", vocab: [""] },
            { type: "kun", reading: "はい", vocab: [""] }
        ]
    },
    {
        kanji: "音",
        readings: [
            { type: "kun", reading: "いん", vocab: [""] },
            { type: "kun", reading: "おと", vocab: [""] },
            { type: "kun", reading: "おん", vocab: [""] },
            { type: "kun", reading: "ね", vocab: [""] },
            { type: "kun", reading: "のん", vocab: [""] }
        ]
    },
    {
        kanji: "意",
        readings: [
            { type: "kun", reading: "い", vocab: [""] }
        ]
    },
    {
        kanji: "作",
        readings: [
            { type: "kun", reading: "さ", vocab: [""] },
            { type: "kun", reading: "さく", vocab: [""] },
            { type: "kun", reading: "さっ", vocab: [""] },
            { type: "kun", reading: "つく", vocab: [""] },
            { type: "kun", reading: "づく", vocab: [""] }
        ]
    },
    {
        kanji: "昨",
        readings: [
            { type: "kun", reading: "きのう", vocab: [""] },
            { type: "kun", reading: "さく", vocab: [""] }
        ]
    },
    {
        kanji: "雨",
        readings: [
            { type: "kun", reading: "あま", vocab: [""] },
            { type: "kun", reading: "あめ", vocab: [""] },
            { type: "kun", reading: "う", vocab: [""] },
            { type: "kun", reading: "さめ", vocab: [""] }
        ]
    },
    {
        kanji: "電",
        readings: [
            { type: "kun", reading: "でん", vocab: [""] }
        ]
    },
    {
        kanji: "頁",
        readings: [
            { type: "kun", reading: "ページ", vocab: [""] }
        ]
    },
    {
        kanji: "首",
        readings: [
            { type: "kun", reading: "くび", vocab: [""] },
            { type: "kun", reading: "しゅ", vocab: [""] }
        ]
    },
    {
        kanji: "道",
        readings: [
            { type: "kun", reading: "とう", vocab: [""] },
            { type: "kun", reading: "どう", vocab: [""] },
            { type: "kun", reading: "みち", vocab: [""] }
        ]
    },
    {
        kanji: "通",
        readings: [
            { type: "kun", reading: "かよ", vocab: [""] },
            { type: "kun", reading: "つ", vocab: [""] },
            { type: "kun", reading: "つう", vocab: [""] },
            { type: "kun", reading: "とお", vocab: [""] },
            { type: "kun", reading: "どお", vocab: [""] },
            { type: "kun", reading: "どおり", vocab: [""] }
        ]
    },
    {
        kanji: "乳",
        readings: [
            { type: "kun", reading: "う", vocab: [""] },
            { type: "kun", reading: "うば", vocab: [""] },
            { type: "kun", reading: "ち", vocab: [""] },
            { type: "kun", reading: "ちち", vocab: [""] },
            { type: "kun", reading: "にゅう", vocab: [""] }
        ]
    },
    {
        kanji: "豆",
        readings: [
            { type: "kun", reading: "ず", vocab: [""] },
            { type: "kun", reading: "とう", vocab: [""] },
            { type: "kun", reading: "まめ", vocab: [""] }
        ]
    },
    {
        kanji: "頭",
        readings: [
            { type: "kun", reading: "あたま", vocab: [""] },
            { type: "kun", reading: "かしら", vocab: [""] },
            { type: "kun", reading: "ず", vocab: [""] },
            { type: "kun", reading: "とう", vocab: [""] }
        ]
    },
    {
        kanji: "予",
        readings: [
            { type: "kun", reading: "あらかじ", vocab: [""] },
            { type: "kun", reading: "よ", vocab: [""] }
        ]
    },
    {
        kanji: "矛",
        readings: [
            { type: "kun", reading: "ほこ", vocab: [""] }
        ]
    },
    {
        kanji: "預",
        readings: [
            { type: "kun", reading: "あず", vocab: [""] },
            { type: "kun", reading: "あずか", vocab: [""] },
            { type: "kun", reading: "よ", vocab: [""] }
        ]
    },
    {
        kanji: "句",
        readings: [
            { type: "kun", reading: "く", vocab: [""] }
        ]
    },
    {
        kanji: "旬",
        readings: [
            { type: "kun", reading: "しゅん", vocab: [""] },
            { type: "kun", reading: "じゅん", vocab: [""] }
        ]
    },
    {
        kanji: "勺",
        readings: [
            { type: "kun", reading: "しゃく", vocab: [""] }
        ]
    },
    {
        kanji: "的",
        readings: [
            { type: "kun", reading: "てき", vocab: [""] },
            { type: "kun", reading: "まと", vocab: [""] }
        ]
    },
    {
        kanji: "約",
        readings: [
            { type: "kun", reading: "やく", vocab: [""] }
        ]
    },
    {
        kanji: "勿",
        readings: [
            { type: "kun", reading: "もち", vocab: [""] },
            { type: "kun", reading: "もっ", vocab: [""] }
        ]
    },
    {
        kanji: "物",
        readings: [
            { type: "kun", reading: "ぶっ", vocab: [""] },
            { type: "kun", reading: "ぶつ", vocab: [""] },
            { type: "kun", reading: "もつ", vocab: [""] },
            { type: "kun", reading: "もの", vocab: [""] }
        ]
    },
    {
        kanji: "方",
        readings: [
            { type: "kun", reading: "かた", vocab: [""] },
            { type: "kun", reading: "がた", vocab: [""] },
            { type: "kun", reading: "ほう", vocab: [""] },
            { type: "kun", reading: "ぽう", vocab: [""] }
        ]
    },
    {
        kanji: "防",
        readings: [
            { type: "kun", reading: "ふせ", vocab: [""] },
            { type: "kun", reading: "ぼう", vocab: [""] }
        ]
    },
    {
        kanji: "面",
        readings: [
            { type: "kun", reading: "おも", vocab: [""] },
            { type: "kun", reading: "じ", vocab: [""] },
            { type: "kun", reading: "めん", vocab: [""] }
        ]
    },
    {
        kanji: "画",
        readings: [
            { type: "kun", reading: "かく", vocab: [""] },
            { type: "kun", reading: "かっ", vocab: [""] },
            { type: "kun", reading: "が", vocab: [""] }
        ]
    },
    {
        kanji: "両",
        readings: [
            { type: "kun", reading: "りょう", vocab: [""] }
        ]
    },
    {
        kanji: "岡",
        readings: [
            { type: "kun", reading: "おか", vocab: [""] }
        ]
    },
    {
        kanji: "満",
        readings: [
            { type: "kun", reading: "ま", vocab: [""] },
            { type: "kun", reading: "まん", vocab: [""] },
            { type: "kun", reading: "み", vocab: [""] }
        ]
    },
    {
        kanji: "顔",
        readings: [
            { type: "kun", reading: "かお", vocab: [""] },
            { type: "kun", reading: "がお", vocab: [""] },
            { type: "kun", reading: "がん", vocab: [""] }
        ]
    },
    {
        kanji: "産",
        readings: [
            { type: "kun", reading: "う", vocab: [""] },
            { type: "kun", reading: "うぶ", vocab: [""] },
            { type: "kun", reading: "さん", vocab: [""] },
            { type: "kun", reading: "ざん", vocab: [""] }
        ]
    },
    {
        kanji: "同",
        readings: [
            { type: "kun", reading: "おな", vocab: [""] },
            { type: "kun", reading: "どう", vocab: [""] }
        ]
    },
    {
        kanji: "向",
        readings: [
            { type: "kun", reading: "こう", vocab: [""] },
            { type: "kun", reading: "む", vocab: [""] },
            { type: "kun", reading: "むか", vocab: [""] },
            { type: "kun", reading: "むこ", vocab: [""] }
        ]
    },
    {
        kanji: "尚",
        readings: [
            { type: "kun", reading: "しょう", vocab: [""] },
            { type: "kun", reading: "なお", vocab: [""] }
        ]
    },
    {
        kanji: "高",
        readings: [
            { type: "kun", reading: "こう", vocab: [""] },
            { type: "kun", reading: "たか", vocab: [""] },
            { type: "kun", reading: "だか", vocab: [""] }
        ]
    },
    {
        kanji: "圧",
        readings: [
            { type: "kun", reading: "あっ", vocab: [""] },
            { type: "kun", reading: "あつ", vocab: [""] },
            { type: "kun", reading: "おっ", vocab: [""] }
        ]
    },
    {
        kanji: "地",
        readings: [
            { type: "kun", reading: "じ", vocab: [""] },
            { type: "kun", reading: "ち", vocab: [""] }
        ]
    },
    {
        kanji: "池",
        readings: [
            { type: "kun", reading: "いけ", vocab: [""] },
            { type: "kun", reading: "ち", vocab: [""] }
        ]
    },
    {
        kanji: "他",
        readings: [
            { type: "kun", reading: "た", vocab: [""] },
            { type: "kun", reading: "ほか", vocab: [""] }
        ]
    },
    {
        kanji: "集",
        readings: [
            { type: "kun", reading: "あつ", vocab: [""] },
            { type: "kun", reading: "しゅう", vocab: [""] },
            { type: "kun", reading: "つど", vocab: [""] }
        ]
    },
    {
        kanji: "進",
        readings: [
            { type: "kun", reading: "しん", vocab: [""] },
            { type: "kun", reading: "じん", vocab: [""] },
            { type: "kun", reading: "すす", vocab: [""] },
            { type: "kun", reading: "すすむ", vocab: [""] }
        ]
    },
    {
        kanji: "込",
        readings: [
            { type: "kun", reading: "こ", vocab: [""] },
            { type: "kun", reading: "こみ", vocab: [""] },
            { type: "kun", reading: "ご", vocab: [""] }
        ]
    },
    {
        kanji: "斤",
        readings: [
            { type: "kun", reading: "きん", vocab: [""] }
        ]
    },
    {
        kanji: "近",
        readings: [
            { type: "kun", reading: "きん", vocab: [""] },
            { type: "kun", reading: "ちか", vocab: [""] },
            { type: "kun", reading: "ぢか", vocab: [""] }
        ]
    },
    {
        kanji: "辺",
        readings: [
            { type: "kun", reading: "あた", vocab: [""] },
            { type: "kun", reading: "あたり", vocab: [""] },
            { type: "kun", reading: "なべ", vocab: [""] },
            { type: "kun", reading: "へん", vocab: [""] },
            { type: "kun", reading: "べ", vocab: [""] },
            { type: "kun", reading: "ぺん", vocab: [""] }
        ]
    },
    {
        kanji: "最",
        readings: [
            { type: "kun", reading: "さ", vocab: [""] },
            { type: "kun", reading: "さい", vocab: [""] },
            { type: "kun", reading: "もっと", vocab: [""] }
        ]
    },
    {
        kanji: "皿",
        readings: [
            { type: "kun", reading: "さら", vocab: [""] },
            { type: "kun", reading: "ざら", vocab: [""] }
        ]
    },
    {
        kanji: "血",
        readings: [
            { type: "kun", reading: "けっ", vocab: [""] },
            { type: "kun", reading: "けつ", vocab: [""] },
            { type: "kun", reading: "ち", vocab: [""] }
        ]
    },
    {
        kanji: "温",
        readings: [
            { type: "kun", reading: "あたた", vocab: [""] },
            { type: "kun", reading: "あつ", vocab: [""] },
            { type: "kun", reading: "おん", vocab: [""] },
            { type: "kun", reading: "ぬく", vocab: [""] }
        ]
    },
    {
        kanji: "湿",
        readings: [
            { type: "kun", reading: "しっ", vocab: [""] },
            { type: "kun", reading: "しめ", vocab: [""] }
        ]
    },
    {
        kanji: "爪",
        readings: [
            { type: "kun", reading: "つま", vocab: [""] },
            { type: "kun", reading: "つめ", vocab: [""] }
        ]
    },
    {
        kanji: "瓜",
        readings: [
            { type: "kun", reading: "うり", vocab: [""] },
            { type: "kun", reading: "か", vocab: [""] }
        ]
    },
    {
        kanji: "巾",
        readings: [
            { type: "kun", reading: "きん", vocab: [""] }
        ]
    },
    {
        kanji: "布",
        readings: [
            { type: "kun", reading: "ぬの", vocab: [""] },
            { type: "kun", reading: "ふ", vocab: [""] },
            { type: "kun", reading: "ぶ", vocab: [""] },
            { type: "kun", reading: "ぷ", vocab: [""] }
        ]
    },
    {
        kanji: "市",
        readings: [
            { type: "kun", reading: "いち", vocab: [""] },
            { type: "kun", reading: "し", vocab: [""] }
        ]
    },
    {
        kanji: "吊",
        readings: [
            { type: "kun", reading: "つ", vocab: [""] }
        ]
    },
    {
        kanji: "泉",
        readings: [
            { type: "kun", reading: "いずみ", vocab: [""] },
            { type: "kun", reading: "せん", vocab: [""] }
        ]
    },
    {
        kanji: "原",
        readings: [
            { type: "kun", reading: "げん", vocab: [""] },
            { type: "kun", reading: "はら", vocab: [""] },
            { type: "kun", reading: "ばら", vocab: [""] },
            { type: "kun", reading: "わら", vocab: [""] }
        ]
    },
    {
        kanji: "源",
        readings: [
            { type: "kun", reading: "げん", vocab: [""] },
            { type: "kun", reading: "みなもと", vocab: [""] }
        ]
    },
    {
        kanji: "線",
        readings: [
            { type: "kun", reading: "せん", vocab: [""] }
        ]
    },
    {
        kanji: "綿",
        readings: [
            { type: "kun", reading: "めん", vocab: [""] },
            { type: "kun", reading: "わた", vocab: [""] }
        ]
    },
    {
        kanji: "絹",
        readings: [
            { type: "kun", reading: "きぬ", vocab: [""] },
            { type: "kun", reading: "けん", vocab: [""] }
        ]
    },
    {
        kanji: "錦",
        readings: [
            { type: "kun", reading: "にしき", vocab: [""] }
        ]
    },
    {
        kanji: "願",
        readings: [
            { type: "kun", reading: "がん", vocab: [""] },
            { type: "kun", reading: "ねが", vocab: [""] }
        ]
    },
    {
        kanji: "内",
        readings: [
            { type: "kun", reading: "うち", vocab: [""] },
            { type: "kun", reading: "ない", vocab: [""] }
        ]
    },
    {
        kanji: "肉",
        readings: [
            { type: "kun", reading: "にく", vocab: [""] }
        ]
    },
    {
        kanji: "猪",
        readings: [
            { type: "kun", reading: "い", vocab: [""] },
            { type: "kun", reading: "いのしし", vocab: [""] },
            { type: "kun", reading: "ちょ", vocab: [""] }
        ]
    },
    {
        kanji: "豚",
        readings: [
            { type: "kun", reading: "ぐ", vocab: [""] },
            { type: "kun", reading: "とん", vocab: [""] },
            { type: "kun", reading: "ぶた", vocab: [""] }
        ]
    },
    {
        kanji: "家",
        readings: [
            { type: "kun", reading: "いえ", vocab: [""] },
            { type: "kun", reading: "うち", vocab: [""] },
            { type: "kun", reading: "か", vocab: [""] },
            { type: "kun", reading: "け", vocab: [""] },
            { type: "kun", reading: "や", vocab: [""] },
            { type: "kun", reading: "りや", vocab: [""] }
        ]
    },
    {
        kanji: "吾",
        readings: [
            { type: "kun", reading: "あ", vocab: [""] },
            { type: "kun", reading: "ご", vocab: [""] },
            { type: "kun", reading: "われ", vocab: [""] }
        ]
    },
    {
        kanji: "我",
        readings: [
            { type: "kun", reading: "が", vocab: [""] },
            { type: "kun", reading: "わ", vocab: [""] },
            { type: "kun", reading: "わが", vocab: [""] },
            { type: "kun", reading: "われ", vocab: [""] }
        ]
    },
    {
        kanji: "語",
        readings: [
            { type: "kun", reading: "かた", vocab: [""] },
            { type: "kun", reading: "がた", vocab: [""] },
            { type: "kun", reading: "がたり", vocab: [""] },
            { type: "kun", reading: "ご", vocab: [""] }
        ]
    },
    {
        kanji: "伝",
        readings: [
            { type: "kun", reading: "つた", vocab: [""] },
            { type: "kun", reading: "つだ", vocab: [""] },
            { type: "kun", reading: "づた", vocab: [""] },
            { type: "kun", reading: "でん", vocab: [""] }
        ]
    },
    {
        kanji: "転",
        readings: [
            { type: "kun", reading: "ころ", vocab: [""] },
            { type: "kun", reading: "てん", vocab: [""] }
        ]
    },
    {
        kanji: "芸",
        readings: [
            { type: "kun", reading: "げい", vocab: [""] }
        ]
    },
    {
        kanji: "会",
        readings: [
            { type: "kun", reading: "あ", vocab: [""] },
            { type: "kun", reading: "かい", vocab: [""] },
            { type: "kun", reading: "がい", vocab: [""] }
        ]
    },
    {
        kanji: "合",
        readings: [
            { type: "kun", reading: "あ", vocab: [""] },
            { type: "kun", reading: "あい", vocab: [""] },
            { type: "kun", reading: "が", vocab: [""] },
            { type: "kun", reading: "がっ", vocab: [""] },
            { type: "kun", reading: "ごう", vocab: [""] },
            { type: "kun", reading: "ちあい", vocab: [""] }
        ]
    },
    {
        kanji: "今",
        readings: [
            { type: "kun", reading: "いま", vocab: [""] },
            { type: "kun", reading: "きょう", vocab: [""] },
            { type: "kun", reading: "けさ", vocab: [""] },
            { type: "kun", reading: "ことし", vocab: [""] },
            { type: "kun", reading: "こん", vocab: [""] }
        ]
    },
    {
        kanji: "令",
        readings: [
            { type: "kun", reading: "れい", vocab: [""] }
        ]
    },
    {
        kanji: "念",
        readings: [
            { type: "kun", reading: "ねん", vocab: [""] }
        ]
    },
    {
        kanji: "印",
        readings: [
            { type: "kun", reading: "いん", vocab: [""] },
            { type: "kun", reading: "しるし", vocab: [""] },
            { type: "kun", reading: "じるし", vocab: [""] }
        ]
    },
    {
        kanji: "命",
        readings: [
            { type: "kun", reading: "いのち", vocab: [""] },
            { type: "kun", reading: "めい", vocab: [""] }
        ]
    },
    {
        kanji: "亡",
        readings: [
            { type: "kun", reading: "な", vocab: [""] },
            { type: "kun", reading: "ぼう", vocab: [""] },
            { type: "kun", reading: "もう", vocab: [""] }
        ]
    },
    {
        kanji: "米",
        readings: [
            { type: "kun", reading: "こめ", vocab: [""] },
            { type: "kun", reading: "べい", vocab: [""] },
            { type: "kun", reading: "まい", vocab: [""] }
        ]
    },
    {
        kanji: "粒",
        readings: [
            { type: "kun", reading: "つぶ", vocab: [""] },
            { type: "kun", reading: "りゅう", vocab: [""] }
        ]
    },
    {
        kanji: "和",
        readings: [
            { type: "kun", reading: "か", vocab: [""] },
            { type: "kun", reading: "かず", vocab: [""] },
            { type: "kun", reading: "なご", vocab: [""] },
            { type: "kun", reading: "やわ", vocab: [""] },
            { type: "kun", reading: "わ", vocab: [""] }
        ]
    },
    {
        kanji: "私",
        readings: [
            { type: "kun", reading: "し", vocab: [""] },
            { type: "kun", reading: "わたし", vocab: [""] }
        ]
    },
    {
        kanji: "広",
        readings: [
            { type: "kun", reading: "こう", vocab: [""] },
            { type: "kun", reading: "ひろ", vocab: [""] },
            { type: "kun", reading: "びろ", vocab: [""] },
            { type: "kun", reading: "カントン", vocab: [""] }
        ]
    },
    {
        kanji: "細",
        readings: [
            { type: "kun", reading: "こま", vocab: [""] },
            { type: "kun", reading: "さい", vocab: [""] },
            { type: "kun", reading: "さざ", vocab: [""] },
            { type: "kun", reading: "ざい", vocab: [""] },
            { type: "kun", reading: "ほそ", vocab: [""] },
            { type: "kun", reading: "ぼそ", vocab: [""] }
        ]
    },
    {
        kanji: "林",
        readings: [
            { type: "kun", reading: "はやし", vocab: [""] },
            { type: "kun", reading: "ばやし", vocab: [""] },
            { type: "kun", reading: "りん", vocab: [""] }
        ]
    },
    {
        kanji: "森",
        readings: [
            { type: "kun", reading: "しん", vocab: [""] },
            { type: "kun", reading: "もり", vocab: [""] }
        ]
    },
    {
        kanji: "松",
        readings: [
            { type: "kun", reading: "たいまつ", vocab: [""] },
            { type: "kun", reading: "まつ", vocab: [""] }
        ]
    },
    {
        kanji: "竹",
        readings: [
            { type: "kun", reading: "しない", vocab: [""] },
            { type: "kun", reading: "たけ", vocab: [""] },
            { type: "kun", reading: "ちく", vocab: [""] }
        ]
    },
    {
        kanji: "都",
        readings: [
            { type: "kun", reading: "つ", vocab: [""] },
            { type: "kun", reading: "と", vocab: [""] },
            { type: "kun", reading: "みやこ", vocab: [""] }
        ]
    },
    {
        kanji: "京",
        readings: [
            { type: "kun", reading: "きょう", vocab: [""] },
            { type: "kun", reading: "ぎょう", vocab: [""] },
            { type: "kun", reading: "けい", vocab: [""] },
            { type: "kun", reading: "キン", vocab: [""] }
        ]
    },
    {
        kanji: "政",
        readings: [
            { type: "kun", reading: "せい", vocab: [""] }
        ]
    },
    {
        kanji: "府",
        readings: [
            { type: "kun", reading: "ふ", vocab: [""] }
        ]
    },
    {
        kanji: "戸",
        readings: [
            { type: "kun", reading: "こ", vocab: [""] },
            { type: "kun", reading: "と", vocab: [""] },
            { type: "kun", reading: "ど", vocab: [""] }
        ]
    },
    {
        kanji: "所",
        readings: [
            { type: "kun", reading: "しょ", vocab: [""] },
            { type: "kun", reading: "じょ", vocab: [""] },
            { type: "kun", reading: "ところ", vocab: [""] },
            { type: "kun", reading: "どころ", vocab: [""] }
        ]
    },
    {
        kanji: "至",
        readings: [
            { type: "kun", reading: "いた", vocab: [""] },
            { type: "kun", reading: "し", vocab: [""] }
        ]
    },
    {
        kanji: "致",
        readings: [
            { type: "kun", reading: "いた", vocab: [""] },
            { type: "kun", reading: "ち", vocab: [""] }
        ]
    },
    {
        kanji: "屋",
        readings: [
            { type: "kun", reading: "おく", vocab: [""] },
            { type: "kun", reading: "や", vocab: [""] }
        ]
    },
    {
        kanji: "室",
        readings: [
            { type: "kun", reading: "しつ", vocab: [""] },
            { type: "kun", reading: "むろ", vocab: [""] }
        ]
    },
    {
        kanji: "古",
        readings: [
            { type: "kun", reading: "こ", vocab: [""] },
            { type: "kun", reading: "ご", vocab: [""] },
            { type: "kun", reading: "ふる", vocab: [""] }
        ]
    },
    {
        kanji: "居",
        readings: [
            { type: "kun", reading: "い", vocab: [""] },
            { type: "kun", reading: "いごこち", vocab: [""] },
            { type: "kun", reading: "お", vocab: [""] },
            { type: "kun", reading: "きょ", vocab: [""] }
        ]
    },
    {
        kanji: "局",
        readings: [
            { type: "kun", reading: "きょく", vocab: [""] }
        ]
    },
    {
        kanji: "故",
        readings: [
            { type: "kun", reading: "こ", vocab: [""] },
            { type: "kun", reading: "ご", vocab: [""] },
            { type: "kun", reading: "ぜ", vocab: [""] },
            { type: "kun", reading: "ゆえ", vocab: [""] }
        ]
    },
    {
        kanji: "胡",
        readings: [
            { type: "kun", reading: "きゅうり", vocab: [""] },
            { type: "kun", reading: "こ", vocab: [""] },
            { type: "kun", reading: "ご", vocab: [""] },
            { type: "kun", reading: "フ", vocab: [""] }
        ]
    },
    {
        kanji: "湖",
        readings: [
            { type: "kun", reading: "こ", vocab: [""] },
            { type: "kun", reading: "こほくしょう", vocab: [""] },
            { type: "kun", reading: "みずうみ", vocab: [""] }
        ]
    },
    {
        kanji: "固",
        readings: [
            { type: "kun", reading: "かた", vocab: [""] },
            { type: "kun", reading: "がた", vocab: [""] },
            { type: "kun", reading: "こ", vocab: [""] }
        ]
    },
    {
        kanji: "箇",
        readings: [
            { type: "kun", reading: "か", vocab: [""] }
        ]
    },
    {
        kanji: "個",
        readings: [
            { type: "kun", reading: "か", vocab: [""] },
            { type: "kun", reading: "こ", vocab: [""] }
        ]
    },
    {
        kanji: "且",
        readings: [
            { type: "kun", reading: "か", vocab: [""] }
        ]
    },
    {
        kanji: "組",
        readings: [
            { type: "kun", reading: "く", vocab: [""] },
            { type: "kun", reading: "くみ", vocab: [""] },
            { type: "kun", reading: "ぐみ", vocab: [""] },
            { type: "kun", reading: "そ", vocab: [""] }
        ]
    },
    {
        kanji: "夕",
        readings: [
            { type: "kun", reading: "せき", vocab: [""] },
            { type: "kun", reading: "ゆ", vocab: [""] },
            { type: "kun", reading: "ゆう", vocab: [""] }
        ]
    },
    {
        kanji: "外",
        readings: [
            { type: "kun", reading: "がい", vocab: [""] },
            { type: "kun", reading: "がいけん", vocab: [""] },
            { type: "kun", reading: "げ", vocab: [""] },
            { type: "kun", reading: "そと", vocab: [""] },
            { type: "kun", reading: "はず", vocab: [""] }
        ]
    },
    {
        kanji: "多",
        readings: [
            { type: "kun", reading: "おお", vocab: [""] },
            { type: "kun", reading: "た", vocab: [""] },
            { type: "kun", reading: "だ", vocab: [""] }
        ]
    },
    {
        kanji: "汐",
        readings: [
            { type: "kun", reading: "しお", vocab: [""] },
            { type: "kun", reading: "せき", vocab: [""] }
        ]
    },
    {
        kanji: "名",
        readings: [
            { type: "kun", reading: "な", vocab: [""] },
            { type: "kun", reading: "みょう", vocab: [""] },
            { type: "kun", reading: "めい", vocab: [""] }
        ]
    },
    {
        kanji: "天",
        readings: [
            { type: "kun", reading: "あま", vocab: [""] },
            { type: "kun", reading: "てっ", vocab: [""] },
            { type: "kun", reading: "てん", vocab: [""] },
            { type: "kun", reading: "てんのう", vocab: [""] }
        ]
    },
    {
        kanji: "未",
        readings: [
            { type: "kun", reading: "いま", vocab: [""] },
            { type: "kun", reading: "み", vocab: [""] }
        ]
    },
    {
        kanji: "末",
        readings: [
            { type: "kun", reading: "すえ", vocab: [""] },
            { type: "kun", reading: "まっ", vocab: [""] },
            { type: "kun", reading: "まつ", vocab: [""] }
        ]
    },
    {
        kanji: "味",
        readings: [
            { type: "kun", reading: "あじ", vocab: [""] },
            { type: "kun", reading: "い", vocab: [""] },
            { type: "kun", reading: "ず", vocab: [""] },
            { type: "kun", reading: "み", vocab: [""] }
        ]
    },
    {
        kanji: "来",
        readings: [
            { type: "kun", reading: "き", vocab: [""] },
            { type: "kun", reading: "きた", vocab: [""] },
            { type: "kun", reading: "く", vocab: [""] },
            { type: "kun", reading: "こ", vocab: [""] },
            { type: "kun", reading: "らい", vocab: [""] }
        ]
    },
    {
        kanji: "新",
        readings: [
            { type: "kun", reading: "あたら", vocab: [""] },
            { type: "kun", reading: "あら", vocab: [""] },
            { type: "kun", reading: "あらた", vocab: [""] },
            { type: "kun", reading: "しん", vocab: [""] }
        ]
    },
    {
        kanji: "親",
        readings: [
            { type: "kun", reading: "おや", vocab: [""] },
            { type: "kun", reading: "した", vocab: [""] },
            { type: "kun", reading: "しん", vocab: [""] }
        ]
    },
    {
        kanji: "欠",
        readings: [
            { type: "kun", reading: "か", vocab: [""] },
            { type: "kun", reading: "けっ", vocab: [""] },
            { type: "kun", reading: "けつ", vocab: [""] }
        ]
    },
    {
        kanji: "次",
        readings: [
            { type: "kun", reading: "じ", vocab: [""] },
            { type: "kun", reading: "つ", vocab: [""] },
            { type: "kun", reading: "つぎ", vocab: [""] }
        ]
    },
    {
        kanji: "席",
        readings: [
            { type: "kun", reading: "せき", vocab: [""] }
        ]
    },
    {
        kanji: "度",
        readings: [
            { type: "kun", reading: "たく", vocab: [""] },
            { type: "kun", reading: "たび", vocab: [""] },
            { type: "kun", reading: "ど", vocab: [""] }
        ]
    },
    {
        kanji: "渡",
        readings: [
            { type: "kun", reading: "と", vocab: [""] },
            { type: "kun", reading: "わた", vocab: [""] }
        ]
    },
    {
        kanji: "限",
        readings: [
            { type: "kun", reading: "かぎ", vocab: [""] },
            { type: "kun", reading: "げん", vocab: [""] }
        ]
    },
    {
        kanji: "銀",
        readings: [
            { type: "kun", reading: "ぎん", vocab: [""] }
        ]
    },
    {
        kanji: "根",
        readings: [
            { type: "kun", reading: "こん", vocab: [""] },
            { type: "kun", reading: "ね", vocab: [""] }
        ]
    },
    {
        kanji: "良",
        readings: [
            { type: "kun", reading: "よ", vocab: [""] },
            { type: "kun", reading: "ら", vocab: [""] },
            { type: "kun", reading: "りょう", vocab: [""] }
        ]
    },
    {
        kanji: "郎",
        readings: [
            { type: "kun", reading: "ろう", vocab: [""] }
        ]
    },
    {
        kanji: "廊",
        readings: [
            { type: "kun", reading: "ろう", vocab: [""] }
        ]
    },
    {
        kanji: "食",
        readings: [
            { type: "kun", reading: "く", vocab: [""] },
            { type: "kun", reading: "ぐ", vocab: [""] },
            { type: "kun", reading: "しょく", vocab: [""] },
            { type: "kun", reading: "しょっ", vocab: [""] },
            { type: "kun", reading: "た", vocab: [""] }
        ]
    },
    {
        kanji: "飲",
        readings: [
            { type: "kun", reading: "いん", vocab: [""] },
            { type: "kun", reading: "の", vocab: [""] },
            { type: "kun", reading: "のみ", vocab: [""] }
        ]
    },
    {
        kanji: "官",
        readings: [
            { type: "kun", reading: "かん", vocab: [""] }
        ]
    },
    {
        kanji: "館",
        readings: [
            { type: "kun", reading: "かん", vocab: [""] }
        ]
    },
    {
        kanji: "宿",
        readings: [
            { type: "kun", reading: "しゅく", vocab: [""] },
            { type: "kun", reading: "じゅく", vocab: [""] },
            { type: "kun", reading: "やど", vocab: [""] }
        ]
    },
    {
        kanji: "犬",
        readings: [
            { type: "kun", reading: "いぬ", vocab: [""] },
            { type: "kun", reading: "けん", vocab: [""] }
        ]
    },
    {
        kanji: "太",
        readings: [
            { type: "kun", reading: "た", vocab: [""] },
            { type: "kun", reading: "たい", vocab: [""] },
            { type: "kun", reading: "たいち", vocab: [""] },
            { type: "kun", reading: "ふと", vocab: [""] },
            { type: "kun", reading: "ぶと", vocab: [""] }
        ]
    },
    {
        kanji: "器",
        readings: [
            { type: "kun", reading: "うつわ", vocab: [""] },
            { type: "kun", reading: "き", vocab: [""] }
        ]
    },
    {
        kanji: "凶",
        readings: [
            { type: "kun", reading: "きょう", vocab: [""] }
        ]
    },
    {
        kanji: "区",
        readings: [
            { type: "kun", reading: "く", vocab: [""] }
        ]
    },
    {
        kanji: "図",
        readings: [
            { type: "kun", reading: "ず", vocab: [""] },
            { type: "kun", reading: "ずう", vocab: [""] },
            { type: "kun", reading: "と", vocab: [""] },
            { type: "kun", reading: "はか", vocab: [""] }
        ]
    },
    {
        kanji: "番",
        readings: [
            { type: "kun", reading: "ばん", vocab: [""] }
        ]
    },
    {
        kanji: "号",
        readings: [
            { type: "kun", reading: "ごう", vocab: [""] }
        ]
    },
    {
        kanji: "品",
        readings: [
            { type: "kun", reading: "しな", vocab: [""] },
            { type: "kun", reading: "じな", vocab: [""] },
            { type: "kun", reading: "ひん", vocab: [""] },
            { type: "kun", reading: "ぴん", vocab: [""] }
        ]
    },
    {
        kanji: "楽",
        readings: [
            { type: "kun", reading: "がく", vocab: [""] },
            { type: "kun", reading: "がっ", vocab: [""] },
            { type: "kun", reading: "たの", vocab: [""] },
            { type: "kun", reading: "らき", vocab: [""] },
            { type: "kun", reading: "らく", vocab: [""] }
        ]
    },
    {
        kanji: "薬",
        readings: [
            { type: "kun", reading: "くすり", vocab: [""] },
            { type: "kun", reading: "ぐすり", vocab: [""] },
            { type: "kun", reading: "やく", vocab: [""] },
            { type: "kun", reading: "やっ", vocab: [""] }
        ]
    },
    {
        kanji: "周",
        readings: [
            { type: "kun", reading: "しゅう", vocab: [""] },
            { type: "kun", reading: "まわ", vocab: [""] },
            { type: "kun", reading: "ジョ", vocab: [""] }
        ]
    },
    {
        kanji: "週",
        readings: [
            { type: "kun", reading: "しゅう", vocab: [""] }
        ]
    },
    {
        kanji: "調",
        readings: [
            { type: "kun", reading: "しら", vocab: [""] },
            { type: "kun", reading: "ちょう", vocab: [""] },
            { type: "kun", reading: "ぢょう", vocab: [""] },
            { type: "kun", reading: "ととの", vocab: [""] }
        ]
    },
    {
        kanji: "束",
        readings: [
            { type: "kun", reading: "そく", vocab: [""] },
            { type: "kun", reading: "たば", vocab: [""] },
            { type: "kun", reading: "たわし", vocab: [""] }
        ]
    },
    {
        kanji: "整",
        readings: [
            { type: "kun", reading: "せい", vocab: [""] },
            { type: "kun", reading: "ととの", vocab: [""] }
        ]
    },
    {
        kanji: "数",
        readings: [
            { type: "kun", reading: "かず", vocab: [""] },
            { type: "kun", reading: "かぞ", vocab: [""] },
            { type: "kun", reading: "すう", vocab: [""] }
        ]
    },
    {
        kanji: "類",
        readings: [
            { type: "kun", reading: "たぐ", vocab: [""] },
            { type: "kun", reading: "るい", vocab: [""] }
        ]
    },
    {
        kanji: "示",
        readings: [
            { type: "kun", reading: "し", vocab: [""] },
            { type: "kun", reading: "しめ", vocab: [""] },
            { type: "kun", reading: "じ", vocab: [""] }
        ]
    },
    {
        kanji: "禁",
        readings: [
            { type: "kun", reading: "きん", vocab: [""] }
        ]
    },
    {
        kanji: "礼",
        readings: [
            { type: "kun", reading: "れい", vocab: [""] }
        ]
    },
    {
        kanji: "社",
        readings: [
            { type: "kun", reading: "しゃ", vocab: [""] },
            { type: "kun", reading: "じゃ", vocab: [""] },
            { type: "kun", reading: "やしろ", vocab: [""] }
        ]
    },
    {
        kanji: "申",
        readings: [
            { type: "kun", reading: "しん", vocab: [""] },
            { type: "kun", reading: "もう", vocab: [""] },
            { type: "kun", reading: "もうし", vocab: [""] }
        ]
    },
    {
        kanji: "神",
        readings: [
            { type: "kun", reading: "かみ", vocab: [""] },
            { type: "kun", reading: "かん", vocab: [""] },
            { type: "kun", reading: "がみ", vocab: [""] },
            { type: "kun", reading: "こうべ", vocab: [""] },
            { type: "kun", reading: "しん", vocab: [""] },
            { type: "kun", reading: "じん", vocab: [""] },
            { type: "kun", reading: "みこし", vocab: [""] }
        ]
    },
    {
        kanji: "員",
        readings: [
            { type: "kun", reading: "いん", vocab: [""] }
        ]
    },
    {
        kanji: "質",
        readings: [
            { type: "kun", reading: "しち", vocab: [""] },
            { type: "kun", reading: "しっ", vocab: [""] },
            { type: "kun", reading: "しつ", vocab: [""] },
            { type: "kun", reading: "じち", vocab: [""] }
        ]
    },
    {
        kanji: "党",
        readings: [
            { type: "kun", reading: "とう", vocab: [""] }
        ]
    },
    {
        kanji: "堂",
        readings: [
            { type: "kun", reading: "どう", vocab: [""] }
        ]
    },
    {
        kanji: "常",
        readings: [
            { type: "kun", reading: "じょう", vocab: [""] },
            { type: "kun", reading: "つね", vocab: [""] }
        ]
    },
    {
        kanji: "賞",
        readings: [
            { type: "kun", reading: "しょう", vocab: [""] }
        ]
    },
    {
        kanji: "償",
        readings: [
            { type: "kun", reading: "しょう", vocab: [""] },
            { type: "kun", reading: "つぐな", vocab: [""] }
        ]
    },
    {
        kanji: "掌",
        readings: [
            { type: "kun", reading: "しょう", vocab: [""] },
            { type: "kun", reading: "てのひら", vocab: [""] }
        ]
    },
    {
        kanji: "覚",
        readings: [
            { type: "kun", reading: "おぼ", vocab: [""] },
            { type: "kun", reading: "かく", vocab: [""] },
            { type: "kun", reading: "さ", vocab: [""] },
            { type: "kun", reading: "ざ", vocab: [""] },
            { type: "kun", reading: "ざま", vocab: [""] }
        ]
    },
    {
        kanji: "悟",
        readings: [
            { type: "kun", reading: "ご", vocab: [""] },
            { type: "kun", reading: "さと", vocab: [""] }
        ]
    },
    {
        kanji: "感",
        readings: [
            { type: "kun", reading: "かん", vocab: [""] }
        ]
    },
    {
        kanji: "央",
        readings: [
            { type: "kun", reading: "おう", vocab: [""] }
        ]
    },
    {
        kanji: "映",
        readings: [
            { type: "kun", reading: "うつ", vocab: [""] },
            { type: "kun", reading: "えい", vocab: [""] },
            { type: "kun", reading: "ば", vocab: [""] }
        ]
    },
    {
        kanji: "決",
        readings: [
            { type: "kun", reading: "き", vocab: [""] },
            { type: "kun", reading: "けっ", vocab: [""] },
            { type: "kun", reading: "けつ", vocab: [""] }
        ]
    },
    {
        kanji: "快",
        readings: [
            { type: "kun", reading: "かい", vocab: [""] },
            { type: "kun", reading: "こころよ", vocab: [""] }
        ]
    },
    {
        kanji: "英",
        readings: [
            { type: "kun", reading: "えい", vocab: [""] }
        ]
    },
    {
        kanji: "並",
        readings: [
            { type: "kun", reading: "な", vocab: [""] },
            { type: "kun", reading: "なみ", vocab: [""] },
            { type: "kun", reading: "なら", vocab: [""] },
            { type: "kun", reading: "へい", vocab: [""] }
        ]
    },
    {
        kanji: "平",
        readings: [
            { type: "kun", reading: "たい", vocab: [""] },
            { type: "kun", reading: "ひら", vocab: [""] },
            { type: "kun", reading: "びょう", vocab: [""] },
            { type: "kun", reading: "へい", vocab: [""] }
        ]
    },
    {
        kanji: "半",
        readings: [
            { type: "kun", reading: "なか", vocab: [""] },
            { type: "kun", reading: "はん", vocab: [""] }
        ]
    },
    {
        kanji: "馬",
        readings: [
            { type: "kun", reading: "うま", vocab: [""] },
            { type: "kun", reading: "ば", vocab: [""] },
            { type: "kun", reading: "マ", vocab: [""] }
        ]
    },
    {
        kanji: "尺",
        readings: [
            { type: "kun", reading: "しゃく", vocab: [""] },
            { type: "kun", reading: "じゃく", vocab: [""] }
        ]
    },
    {
        kanji: "尽",
        readings: [
            { type: "kun", reading: "じん", vocab: [""] },
            { type: "kun", reading: "つ", vocab: [""] },
            { type: "kun", reading: "つく", vocab: [""] }
        ]
    },
    {
        kanji: "駅",
        readings: [
            { type: "kun", reading: "えき", vocab: [""] }
        ]
    },
    {
        kanji: "鳥",
        readings: [
            { type: "kun", reading: "ちょう", vocab: [""] },
            { type: "kun", reading: "とっ", vocab: [""] },
            { type: "kun", reading: "とり", vocab: [""] },
            { type: "kun", reading: "どり", vocab: [""] }
        ]
    },
    {
        kanji: "島",
        readings: [
            { type: "kun", reading: "しま", vocab: [""] },
            { type: "kun", reading: "じま", vocab: [""] },
            { type: "kun", reading: "とう", vocab: [""] },
            { type: "kun", reading: "タオ", vocab: [""] }
        ]
    },
    {
        kanji: "角",
        readings: [
            { type: "kun", reading: "かく", vocab: [""] },
            { type: "kun", reading: "かっ", vocab: [""] },
            { type: "kun", reading: "かど", vocab: [""] },
            { type: "kun", reading: "がく", vocab: [""] },
            { type: "kun", reading: "つの", vocab: [""] }
        ]
    },
    {
        kanji: "虫",
        readings: [
            { type: "kun", reading: "ちゅう", vocab: [""] },
            { type: "kun", reading: "むし", vocab: [""] }
        ]
    },
    {
        kanji: "触",
        readings: [
            { type: "kun", reading: "さわ", vocab: [""] },
            { type: "kun", reading: "ざわ", vocab: [""] },
            { type: "kun", reading: "しょく", vocab: [""] },
            { type: "kun", reading: "しょっ", vocab: [""] },
            { type: "kun", reading: "ふ", vocab: [""] }
        ]
    },
    {
        kanji: "解",
        readings: [
            { type: "kun", reading: "かい", vocab: [""] },
            { type: "kun", reading: "と", vocab: [""] },
            { type: "kun", reading: "わか", vocab: [""] }
        ]
    },
    {
        kanji: "独",
        readings: [
            { type: "kun", reading: "どく", vocab: [""] },
            { type: "kun", reading: "ひと", vocab: [""] }
        ]
    },
    {
        kanji: "店",
        readings: [
            { type: "kun", reading: "てん", vocab: [""] },
            { type: "kun", reading: "みせ", vocab: [""] }
        ]
    },
    {
        kanji: "占",
        readings: [
            { type: "kun", reading: "うらな", vocab: [""] },
            { type: "kun", reading: "し", vocab: [""] },
            { type: "kun", reading: "じ", vocab: [""] },
            { type: "kun", reading: "せん", vocab: [""] }
        ]
    },
    {
        kanji: "点",
        readings: [
            { type: "kun", reading: "てん", vocab: [""] }
        ]
    },
    {
        kanji: "士",
        readings: [
            { type: "kun", reading: "し", vocab: [""] }
        ]
    },
    {
        kanji: "商",
        readings: [
            { type: "kun", reading: "あきな", vocab: [""] },
            { type: "kun", reading: "しょう", vocab: [""] }
        ]
    },
    {
        kanji: "買",
        readings: [
            { type: "kun", reading: "か", vocab: [""] },
            { type: "kun", reading: "かい", vocab: [""] },
            { type: "kun", reading: "がい", vocab: [""] },
            { type: "kun", reading: "ばい", vocab: [""] }
        ]
    },
    {
        kanji: "売",
        readings: [
            { type: "kun", reading: "う", vocab: [""] },
            { type: "kun", reading: "うり", vocab: [""] },
            { type: "kun", reading: "ばい", vocab: [""] }
        ]
    },
    {
        kanji: "続",
        readings: [
            { type: "kun", reading: "ぞく", vocab: [""] },
            { type: "kun", reading: "ぞっ", vocab: [""] },
            { type: "kun", reading: "つづ", vocab: [""] },
            { type: "kun", reading: "つづき", vocab: [""] }
        ]
    },
    {
        kanji: "読",
        readings: [
            { type: "kun", reading: "とう", vocab: [""] },
            { type: "kun", reading: "どく", vocab: [""] },
            { type: "kun", reading: "よ", vocab: [""] }
        ]
    },
    {
        kanji: "共",
        readings: [
            { type: "kun", reading: "きょう", vocab: [""] },
            { type: "kun", reading: "とも", vocab: [""] }
        ]
    },
    {
        kanji: "供",
        readings: [
            { type: "kun", reading: "きょう", vocab: [""] },
            { type: "kun", reading: "そな", vocab: [""] },
            { type: "kun", reading: "とも", vocab: [""] },
            { type: "kun", reading: "ども", vocab: [""] }
        ]
    },
    {
        kanji: "洪",
        readings: [
            { type: "kun", reading: "こう", vocab: [""] }
        ]
    },
    {
        kanji: "昔",
        readings: [
            { type: "kun", reading: "じゃく", vocab: [""] },
            { type: "kun", reading: "むかし", vocab: [""] }
        ]
    },
    {
        kanji: "冬",
        readings: [
            { type: "kun", reading: "とう", vocab: [""] },
            { type: "kun", reading: "ふゆ", vocab: [""] }
        ]
    },
    {
        kanji: "寒",
        readings: [
            { type: "kun", reading: "かん", vocab: [""] },
            { type: "kun", reading: "さむ", vocab: [""] }
        ]
    },
    {
        kanji: "春",
        readings: [
            { type: "kun", reading: "しゅん", vocab: [""] },
            { type: "kun", reading: "はる", vocab: [""] }
        ]
    },
    {
        kanji: "夏",
        readings: [
            { type: "kun", reading: "か", vocab: [""] },
            { type: "kun", reading: "げ", vocab: [""] },
            { type: "kun", reading: "なつ", vocab: [""] }
        ]
    },
    {
        kanji: "秋",
        readings: [
            { type: "kun", reading: "あき", vocab: [""] },
            { type: "kun", reading: "さ", vocab: [""] },
            { type: "kun", reading: "しゅう", vocab: [""] }
        ]
    },
    {
        kanji: "主",
        readings: [
            { type: "kun", reading: "いぬし", vocab: [""] },
            { type: "kun", reading: "おも", vocab: [""] },
            { type: "kun", reading: "しゅ", vocab: [""] },
            { type: "kun", reading: "ぬし", vocab: [""] }
        ]
    },
    {
        kanji: "住",
        readings: [
            { type: "kun", reading: "じゅう", vocab: [""] },
            { type: "kun", reading: "す", vocab: [""] }
        ]
    },
    {
        kanji: "駐",
        readings: [
            { type: "kun", reading: "ちゅう", vocab: [""] }
        ]
    },
    {
        kanji: "注",
        readings: [
            { type: "kun", reading: "さ", vocab: [""] },
            { type: "kun", reading: "そそ", vocab: [""] },
            { type: "kun", reading: "ちゅう", vocab: [""] },
            { type: "kun", reading: "つ", vocab: [""] }
        ]
    },
    {
        kanji: "志",
        readings: [
            { type: "kun", reading: "こころざ", vocab: [""] },
            { type: "kun", reading: "し", vocab: [""] }
        ]
    },
    {
        kanji: "誌",
        readings: [
            { type: "kun", reading: "し", vocab: [""] }
        ]
    },
    {
        kanji: "仕",
        readings: [
            { type: "kun", reading: "し", vocab: [""] },
            { type: "kun", reading: "じ", vocab: [""] },
            { type: "kun", reading: "つか", vocab: [""] }
        ]
    },
    {
        kanji: "任",
        readings: [
            { type: "kun", reading: "にん", vocab: [""] },
            { type: "kun", reading: "まか", vocab: [""] }
        ]
    },
    {
        kanji: "支",
        readings: [
            { type: "kun", reading: "ささ", vocab: [""] },
            { type: "kun", reading: "し", vocab: [""] },
            { type: "kun", reading: "じ", vocab: [""] }
        ]
    },
    {
        kanji: "反",
        readings: [
            { type: "kun", reading: "そ", vocab: [""] },
            { type: "kun", reading: "はん", vocab: [""] },
            { type: "kun", reading: "ほ", vocab: [""] }
        ]
    },
    {
        kanji: "坂",
        readings: [
            { type: "kun", reading: "さか", vocab: [""] },
            { type: "kun", reading: "ざか", vocab: [""] }
        ]
    },
    {
        kanji: "阪",
        readings: [
            { type: "kun", reading: "さか", vocab: [""] },
            { type: "kun", reading: "はん", vocab: [""] }
        ]
    },
    {
        kanji: "飯",
        readings: [
            { type: "kun", reading: "はん", vocab: [""] },
            { type: "kun", reading: "めし", vocab: [""] }
        ]
    },
    {
        kanji: "返",
        readings: [
            { type: "kun", reading: "かえ", vocab: [""] },
            { type: "kun", reading: "がえ", vocab: [""] },
            { type: "kun", reading: "へん", vocab: [""] }
        ]
    },
    {
        kanji: "雑",
        readings: [
            { type: "kun", reading: "ざっ", vocab: [""] },
            { type: "kun", reading: "ざつ", vocab: [""] },
            { type: "kun", reading: "ぞう", vocab: [""] }
        ]
    },
    {
        kanji: "乱",
        readings: [
            { type: "kun", reading: "みだ", vocab: [""] },
            { type: "kun", reading: "らん", vocab: [""] }
        ]
    },
    {
        kanji: "寸",
        readings: [
            { type: "kun", reading: "すん", vocab: [""] }
        ]
    },
    {
        kanji: "寺",
        readings: [
            { type: "kun", reading: "じ", vocab: [""] },
            { type: "kun", reading: "てら", vocab: [""] },
            { type: "kun", reading: "でら", vocab: [""] }
        ]
    },
    {
        kanji: "時",
        readings: [
            { type: "kun", reading: "じ", vocab: [""] },
            { type: "kun", reading: "つ", vocab: [""] },
            { type: "kun", reading: "とき", vocab: [""] },
            { type: "kun", reading: "とけい", vocab: [""] },
            { type: "kun", reading: "ど", vocab: [""] },
            { type: "kun", reading: "どき", vocab: [""] },
            { type: "kun", reading: "どけい", vocab: [""] }
        ]
    },
    {
        kanji: "持",
        readings: [
            { type: "kun", reading: "じ", vocab: [""] },
            { type: "kun", reading: "も", vocab: [""] },
            { type: "kun", reading: "もち", vocab: [""] }
        ]
    },
    {
        kanji: "特",
        readings: [
            { type: "kun", reading: "とく", vocab: [""] }
        ]
    },
    {
        kanji: "待",
        readings: [
            { type: "kun", reading: "たい", vocab: [""] },
            { type: "kun", reading: "ま", vocab: [""] },
            { type: "kun", reading: "まち", vocab: [""] }
        ]
    },
    {
        kanji: "得",
        readings: [
            { type: "kun", reading: "え", vocab: [""] },
            { type: "kun", reading: "とく", vocab: [""] },
            { type: "kun", reading: "どく", vocab: [""] }
        ]
    },
    {
        kanji: "侍",
        readings: [
            { type: "kun", reading: "さむらい", vocab: [""] },
            { type: "kun", reading: "じ", vocab: [""] }
        ]
    },
    {
        kanji: "詩",
        readings: [
            { type: "kun", reading: "し", vocab: [""] }
        ]
    },
    {
        kanji: "即",
        readings: [
            { type: "kun", reading: "すなわ", vocab: [""] },
            { type: "kun", reading: "そく", vocab: [""] },
            { type: "kun", reading: "そっ", vocab: [""] }
        ]
    },
    {
        kanji: "節",
        readings: [
            { type: "kun", reading: "せっ", vocab: [""] },
            { type: "kun", reading: "せつ", vocab: [""] },
            { type: "kun", reading: "ふし", vocab: [""] },
            { type: "kun", reading: "ぶし", vocab: [""] }
        ]
    },
    {
        kanji: "筋",
        readings: [
            { type: "kun", reading: "きん", vocab: [""] },
            { type: "kun", reading: "すじ", vocab: [""] }
        ]
    },
    {
        kanji: "等",
        readings: [
            { type: "kun", reading: "とう", vocab: [""] },
            { type: "kun", reading: "どう", vocab: [""] },
            { type: "kun", reading: "など", vocab: [""] },
            { type: "kun", reading: "ひと", vocab: [""] },
            { type: "kun", reading: "ら", vocab: [""] }
        ]
    },
    {
        kanji: "均",
        readings: [
            { type: "kun", reading: "きん", vocab: [""] }
        ]
    },
    {
        kanji: "季",
        readings: [
            { type: "kun", reading: "き", vocab: [""] }
        ]
    },
    {
        kanji: "委",
        readings: [
            { type: "kun", reading: "い", vocab: [""] },
            { type: "kun", reading: "ゆだ", vocab: [""] }
        ]
    },
    {
        kanji: "穴",
        readings: [
            { type: "kun", reading: "あな", vocab: [""] },
            { type: "kun", reading: "けっ", vocab: [""] },
            { type: "kun", reading: "けつ", vocab: [""] }
        ]
    },
    {
        kanji: "空",
        readings: [
            { type: "kun", reading: "あ", vocab: [""] },
            { type: "kun", reading: "から", vocab: [""] },
            { type: "kun", reading: "くう", vocab: [""] },
            { type: "kun", reading: "す", vocab: [""] },
            { type: "kun", reading: "そら", vocab: [""] },
            { type: "kun", reading: "ぞら", vocab: [""] }
        ]
    },
    {
        kanji: "友",
        readings: [
            { type: "kun", reading: "とも", vocab: [""] },
            { type: "kun", reading: "ゆ", vocab: [""] },
            { type: "kun", reading: "ゆう", vocab: [""] }
        ]
    },
    {
        kanji: "有",
        readings: [
            { type: "kun", reading: "あ", vocab: [""] },
            { type: "kun", reading: "あり", vocab: [""] },
            { type: "kun", reading: "ありがと", vocab: [""] },
            { type: "kun", reading: "ゆう", vocab: [""] }
        ]
    },
    {
        kanji: "左",
        readings: [
            { type: "kun", reading: "さ", vocab: [""] },
            { type: "kun", reading: "ひだり", vocab: [""] }
        ]
    },
    {
        kanji: "右",
        readings: [
            { type: "kun", reading: "う", vocab: [""] },
            { type: "kun", reading: "みぎ", vocab: [""] },
            { type: "kun", reading: "ゆう", vocab: [""] }
        ]
    },
    {
        kanji: "石",
        readings: [
            { type: "kun", reading: "いし", vocab: [""] },
            { type: "kun", reading: "し", vocab: [""] },
            { type: "kun", reading: "せき", vocab: [""] },
            { type: "kun", reading: "せっ", vocab: [""] }
        ]
    },
    {
        kanji: "若",
        readings: [
            { type: "kun", reading: "じゃく", vocab: [""] },
            { type: "kun", reading: "じゃっ", vocab: [""] },
            { type: "kun", reading: "にゃく", vocab: [""] },
            { type: "kun", reading: "も", vocab: [""] },
            { type: "kun", reading: "わか", vocab: [""] }
        ]
    },
    {
        kanji: "苦",
        readings: [
            { type: "kun", reading: "く", vocab: [""] },
            { type: "kun", reading: "くる", vocab: [""] },
            { type: "kun", reading: "ぐる", vocab: [""] },
            { type: "kun", reading: "にが", vocab: [""] }
        ]
    },
    {
        kanji: "在",
        readings: [
            { type: "kun", reading: "ざい", vocab: [""] }
        ]
    },
    {
        kanji: "存",
        readings: [
            { type: "kun", reading: "そん", vocab: [""] },
            { type: "kun", reading: "ぞん", vocab: [""] }
        ]
    },
    {
        kanji: "干",
        readings: [
            { type: "kun", reading: "かん", vocab: [""] },
            { type: "kun", reading: "ひ", vocab: [""] },
            { type: "kun", reading: "ほ", vocab: [""] },
            { type: "kun", reading: "ぼ", vocab: [""] }
        ]
    },
    {
        kanji: "刊",
        readings: [
            { type: "kun", reading: "かん", vocab: [""] }
        ]
    },
    {
        kanji: "汗",
        readings: [
            { type: "kun", reading: "あせ", vocab: [""] },
            { type: "kun", reading: "かん", vocab: [""] }
        ]
    },
    {
        kanji: "竿",
        readings: [
            { type: "kun", reading: "さお", vocab: [""] }
        ]
    },
    {
        kanji: "利",
        readings: [
            { type: "kun", reading: "き", vocab: [""] },
            { type: "kun", reading: "り", vocab: [""] }
        ]
    },
    {
        kanji: "害",
        readings: [
            { type: "kun", reading: "がい", vocab: [""] }
        ]
    },
    {
        kanji: "益",
        readings: [
            { type: "kun", reading: "えき", vocab: [""] },
            { type: "kun", reading: "ま", vocab: [""] },
            { type: "kun", reading: "ます", vocab: [""] }
        ]
    },
    {
        kanji: "溢",
        readings: [
            { type: "kun", reading: "あふ", vocab: [""] },
            { type: "kun", reading: "いっ", vocab: [""] }
        ]
    },
    {
        kanji: "割",
        readings: [
            { type: "kun", reading: "かつ", vocab: [""] },
            { type: "kun", reading: "わ", vocab: [""] },
            { type: "kun", reading: "わり", vocab: [""] }
        ]
    },
    {
        kanji: "憲",
        readings: [
            { type: "kun", reading: "けん", vocab: [""] }
        ]
    },
    {
        kanji: "羽",
        readings: [
            { type: "kun", reading: "う", vocab: [""] },
            { type: "kun", reading: "は", vocab: [""] },
            { type: "kun", reading: "はね", vocab: [""] },
            { type: "kun", reading: "ば", vocab: [""] },
            { type: "kun", reading: "ばね", vocab: [""] },
            { type: "kun", reading: "わ", vocab: [""] }
        ]
    },
    {
        kanji: "翌",
        readings: [
            { type: "kun", reading: "よく", vocab: [""] }
        ]
    },
    {
        kanji: "習",
        readings: [
            { type: "kun", reading: "しゅう", vocab: [""] },
            { type: "kun", reading: "なら", vocab: [""] }
        ]
    },
    {
        kanji: "弓",
        readings: [
            { type: "kun", reading: "きゅう", vocab: [""] },
            { type: "kun", reading: "ゆ", vocab: [""] },
            { type: "kun", reading: "ゆみ", vocab: [""] }
        ]
    },
    {
        kanji: "引",
        readings: [
            { type: "kun", reading: "いん", vocab: [""] },
            { type: "kun", reading: "ひ", vocab: [""] },
            { type: "kun", reading: "ひき", vocab: [""] },
            { type: "kun", reading: "び", vocab: [""] },
            { type: "kun", reading: "びき", vocab: [""] }
        ]
    },
    {
        kanji: "強",
        readings: [
            { type: "kun", reading: "きょう", vocab: [""] },
            { type: "kun", reading: "し", vocab: [""] },
            { type: "kun", reading: "つよ", vocab: [""] },
            { type: "kun", reading: "づよ", vocab: [""] }
        ]
    },
    {
        kanji: "弱",
        readings: [
            { type: "kun", reading: "じゃく", vocab: [""] },
            { type: "kun", reading: "よわ", vocab: [""] }
        ]
    },
    {
        kanji: "風",
        readings: [
            { type: "kun", reading: "かざ", vocab: [""] },
            { type: "kun", reading: "かぜ", vocab: [""] },
            { type: "kun", reading: "ふう", vocab: [""] },
            { type: "kun", reading: "ぷう", vocab: [""] }
        ]
    },
    {
        kanji: "己",
        readings: [
            { type: "kun", reading: "おのれ", vocab: [""] },
            { type: "kun", reading: "こ", vocab: [""] }
        ]
    },
    {
        kanji: "記",
        readings: [
            { type: "kun", reading: "き", vocab: [""] },
            { type: "kun", reading: "しる", vocab: [""] }
        ]
    },
    {
        kanji: "紀",
        readings: [
            { type: "kun", reading: "き", vocab: [""] }
        ]
    },
    {
        kanji: "改",
        readings: [
            { type: "kun", reading: "あらた", vocab: [""] },
            { type: "kun", reading: "かい", vocab: [""] }
        ]
    },
    {
        kanji: "起",
        readings: [
            { type: "kun", reading: "お", vocab: [""] },
            { type: "kun", reading: "おこ", vocab: [""] },
            { type: "kun", reading: "き", vocab: [""] },
            { type: "kun", reading: "ぎ", vocab: [""] },
            { type: "kun", reading: "た", vocab: [""] }
        ]
    },
    {
        kanji: "姓",
        readings: [
            { type: "kun", reading: "しょう", vocab: [""] },
            { type: "kun", reading: "せい", vocab: [""] }
        ]
    },
    {
        kanji: "由",
        readings: [
            { type: "kun", reading: "ゆ", vocab: [""] },
            { type: "kun", reading: "ゆう", vocab: [""] },
            { type: "kun", reading: "よし", vocab: [""] }
        ]
    },
    {
        kanji: "油",
        readings: [
            { type: "kun", reading: "あぶら", vocab: [""] },
            { type: "kun", reading: "ゆ", vocab: [""] }
        ]
    },
    {
        kanji: "井",
        readings: [
            { type: "kun", reading: "い", vocab: [""] },
            { type: "kun", reading: "じょう", vocab: [""] },
            { type: "kun", reading: "せい", vocab: [""] }
        ]
    },
    {
        kanji: "囲",
        readings: [
            { type: "kun", reading: "い", vocab: [""] },
            { type: "kun", reading: "かこ", vocab: [""] }
        ]
    },
    {
        kanji: "丼",
        readings: [
            { type: "kun", reading: "どん", vocab: [""] },
            { type: "kun", reading: "どんぶり", vocab: [""] }
        ]
    },
    {
        kanji: "丁",
        readings: [
            { type: "kun", reading: "ちょう", vocab: [""] },
            { type: "kun", reading: "てい", vocab: [""] }
        ]
    },
    {
        kanji: "寧",
        readings: [
            { type: "kun", reading: "ねい", vocab: [""] }
        ]
    },
    {
        kanji: "町",
        readings: [
            { type: "kun", reading: "ちょう", vocab: [""] },
            { type: "kun", reading: "まち", vocab: [""] }
        ]
    },
    {
        kanji: "灯",
        readings: [
            { type: "kun", reading: "あか", vocab: [""] },
            { type: "kun", reading: "あかり", vocab: [""] },
            { type: "kun", reading: "とう", vocab: [""] },
            { type: "kun", reading: "とも", vocab: [""] },
            { type: "kun", reading: "ともし", vocab: [""] }
        ]
    },
    {
        kanji: "庁",
        readings: [
            { type: "kun", reading: "ちょう", vocab: [""] }
        ]
    },
    {
        kanji: "貯",
        readings: [
            { type: "kun", reading: "た", vocab: [""] },
            { type: "kun", reading: "ちょ", vocab: [""] }
        ]
    },
    {
        kanji: "易",
        readings: [
            { type: "kun", reading: "い", vocab: [""] },
            { type: "kun", reading: "えき", vocab: [""] },
            { type: "kun", reading: "やさ", vocab: [""] },
            { type: "kun", reading: "やす", vocab: [""] }
        ]
    },
    {
        kanji: "賜",
        readings: [
            { type: "kun", reading: "たま", vocab: [""] },
            { type: "kun", reading: "たまわ", vocab: [""] }
        ]
    },
    {
        kanji: "場",
        readings: [
            { type: "kun", reading: "じょう", vocab: [""] },
            { type: "kun", reading: "ば", vocab: [""] },
            { type: "kun", reading: "りば", vocab: [""] }
        ]
    },
    {
        kanji: "湯",
        readings: [
            { type: "kun", reading: "のゆ", vocab: [""] },
            { type: "kun", reading: "ゆ", vocab: [""] }
        ]
    },
    {
        kanji: "門",
        readings: [
            { type: "kun", reading: "かど", vocab: [""] },
            { type: "kun", reading: "もん", vocab: [""] }
        ]
    },
    {
        kanji: "間",
        readings: [
            { type: "kun", reading: "あいだ", vocab: [""] },
            { type: "kun", reading: "かん", vocab: [""] },
            { type: "kun", reading: "けん", vocab: [""] },
            { type: "kun", reading: "げん", vocab: [""] },
            { type: "kun", reading: "ま", vocab: [""] }
        ]
    },
    {
        kanji: "閉",
        readings: [
            { type: "kun", reading: "し", vocab: [""] },
            { type: "kun", reading: "と", vocab: [""] },
            { type: "kun", reading: "へい", vocab: [""] }
        ]
    },
    {
        kanji: "開",
        readings: [
            { type: "kun", reading: "あ", vocab: [""] },
            { type: "kun", reading: "かい", vocab: [""] },
            { type: "kun", reading: "ひら", vocab: [""] },
            { type: "kun", reading: "びら", vocab: [""] }
        ]
    },
    {
        kanji: "関",
        readings: [
            { type: "kun", reading: "かか", vocab: [""] },
            { type: "kun", reading: "かん", vocab: [""] },
            { type: "kun", reading: "せき", vocab: [""] },
            { type: "kun", reading: "ぜき", vocab: [""] },
            { type: "kun", reading: "のせき", vocab: [""] }
        ]
    },
    {
        kanji: "問",
        readings: [
            { type: "kun", reading: "と", vocab: [""] },
            { type: "kun", reading: "とん", vocab: [""] },
            { type: "kun", reading: "もん", vocab: [""] }
        ]
    },
    {
        kanji: "聞",
        readings: [
            { type: "kun", reading: "き", vocab: [""] },
            { type: "kun", reading: "きこ", vocab: [""] },
            { type: "kun", reading: "ぎ", vocab: [""] },
            { type: "kun", reading: "ぶん", vocab: [""] }
        ]
    },
    {
        kanji: "訪",
        readings: [
            { type: "kun", reading: "おとず", vocab: [""] },
            { type: "kun", reading: "たず", vocab: [""] },
            { type: "kun", reading: "ほう", vocab: [""] }
        ]
    },
    {
        kanji: "送",
        readings: [
            { type: "kun", reading: "おく", vocab: [""] },
            { type: "kun", reading: "そう", vocab: [""] }
        ]
    },
    {
        kanji: "券",
        readings: [
            { type: "kun", reading: "けん", vocab: [""] }
        ]
    },
    {
        kanji: "包",
        readings: [
            { type: "kun", reading: "つつ", vocab: [""] },
            { type: "kun", reading: "づつみ", vocab: [""] },
            { type: "kun", reading: "ほう", vocab: [""] },
            { type: "kun", reading: "ぼう", vocab: [""] }
        ]
    },
    {
        kanji: "巻",
        readings: [
            { type: "kun", reading: "かん", vocab: [""] },
            { type: "kun", reading: "ま", vocab: [""] },
            { type: "kun", reading: "まき", vocab: [""] }
        ]
    },
    {
        kanji: "圏",
        readings: [
            { type: "kun", reading: "けん", vocab: [""] }
        ]
    },
    {
        kanji: "勝",
        readings: [
            { type: "kun", reading: "か", vocab: [""] },
            { type: "kun", reading: "かっ", vocab: [""] },
            { type: "kun", reading: "かつ", vocab: [""] },
            { type: "kun", reading: "が", vocab: [""] },
            { type: "kun", reading: "しょう", vocab: [""] },
            { type: "kun", reading: "まさ", vocab: [""] },
            { type: "kun", reading: "まさる", vocab: [""] }
        ]
    },
    {
        kanji: "戦",
        readings: [
            { type: "kun", reading: "いくさ", vocab: [""] },
            { type: "kun", reading: "せん", vocab: [""] },
            { type: "kun", reading: "たたか", vocab: [""] }
        ]
    },
    {
        kanji: "単",
        readings: [
            { type: "kun", reading: "たん", vocab: [""] }
        ]
    },
    {
        kanji: "簡",
        readings: [
            { type: "kun", reading: "かん", vocab: [""] }
        ]
    },
    {
        kanji: "過",
        readings: [
            { type: "kun", reading: "あやま", vocab: [""] },
            { type: "kun", reading: "か", vocab: [""] },
            { type: "kun", reading: "す", vocab: [""] }
        ]
    },
    {
        kanji: "骨",
        readings: [
            { type: "kun", reading: "こっ", vocab: [""] },
            { type: "kun", reading: "こつ", vocab: [""] },
            { type: "kun", reading: "ほね", vocab: [""] },
            { type: "kun", reading: "ぼね", vocab: [""] }
        ]
    },
    {
        kanji: "昼",
        readings: [
            { type: "kun", reading: "ちゅう", vocab: [""] },
            { type: "kun", reading: "ひる", vocab: [""] },
            { type: "kun", reading: "ぴる", vocab: [""] }
        ]
    },
    {
        kanji: "夜",
        readings: [
            { type: "kun", reading: "や", vocab: [""] },
            { type: "kun", reading: "よ", vocab: [""] },
            { type: "kun", reading: "よる", vocab: [""] }
        ]
    },
    {
        kanji: "液",
        readings: [
            { type: "kun", reading: "えき", vocab: [""] }
        ]
    },
    {
        kanji: "戒",
        readings: [
            { type: "kun", reading: "いまし", vocab: [""] },
            { type: "kun", reading: "かい", vocab: [""] }
        ]
    },
    {
        kanji: "幾",
        readings: [
            { type: "kun", reading: "いく", vocab: [""] },
            { type: "kun", reading: "き", vocab: [""] }
        ]
    },
    {
        kanji: "畿",
        readings: [
            { type: "kun", reading: "き", vocab: [""] }
        ]
    },
    {
        kanji: "磯",
        readings: [
            { type: "kun", reading: "いそ", vocab: [""] }
        ]
    },
    {
        kanji: "機",
        readings: [
            { type: "kun", reading: "き", vocab: [""] }
        ]
    },
    {
        kanji: "械",
        readings: [
            { type: "kun", reading: "かい", vocab: [""] }
        ]
    },
    {
        kanji: "飛",
        readings: [
            { type: "kun", reading: "と", vocab: [""] },
            { type: "kun", reading: "ひ", vocab: [""] }
        ]
    },
    {
        kanji: "氏",
        readings: [
            { type: "kun", reading: "し", vocab: [""] },
            { type: "kun", reading: "っし", vocab: [""] }
        ]
    },
    {
        kanji: "民",
        readings: [
            { type: "kun", reading: "たみ", vocab: [""] },
            { type: "kun", reading: "みん", vocab: [""] }
        ]
    },
    {
        kanji: "紙",
        readings: [
            { type: "kun", reading: "かみ", vocab: [""] },
            { type: "kun", reading: "がみ", vocab: [""] },
            { type: "kun", reading: "し", vocab: [""] }
        ]
    },
    {
        kanji: "低",
        readings: [
            { type: "kun", reading: "てい", vocab: [""] },
            { type: "kun", reading: "ひく", vocab: [""] }
        ]
    },
    {
        kanji: "抵",
        readings: [
            { type: "kun", reading: "てい", vocab: [""] }
        ]
    },
    {
        kanji: "邸",
        readings: [
            { type: "kun", reading: "てい", vocab: [""] }
        ]
    },
    {
        kanji: "底",
        readings: [
            { type: "kun", reading: "そこ", vocab: [""] },
            { type: "kun", reading: "ぞこ", vocab: [""] },
            { type: "kun", reading: "てい", vocab: [""] }
        ]
    },
    {
        kanji: "巨",
        readings: [
            { type: "kun", reading: "きょ", vocab: [""] }
        ]
    },
    {
        kanji: "臣",
        readings: [
            { type: "kun", reading: "しん", vocab: [""] },
            { type: "kun", reading: "じん", vocab: [""] }
        ]
    },
    {
        kanji: "基",
        readings: [
            { type: "kun", reading: "き", vocab: [""] },
            { type: "kun", reading: "もと", vocab: [""] },
            { type: "kun", reading: "もとづ", vocab: [""] }
        ]
    },
    {
        kanji: "期",
        readings: [
            { type: "kun", reading: "き", vocab: [""] }
        ]
    },
    {
        kanji: "毛",
        readings: [
            { type: "kun", reading: "け", vocab: [""] },
            { type: "kun", reading: "げ", vocab: [""] },
            { type: "kun", reading: "もう", vocab: [""] }
        ]
    },
    {
        kanji: "尾",
        readings: [
            { type: "kun", reading: "お", vocab: [""] },
            { type: "kun", reading: "び", vocab: [""] }
        ]
    },
    {
        kanji: "育",
        readings: [
            { type: "kun", reading: "いく", vocab: [""] },
            { type: "kun", reading: "そだ", vocab: [""] }
        ]
    },
    {
        kanji: "羊",
        readings: [
            { type: "kun", reading: "ぎ", vocab: [""] },
            { type: "kun", reading: "ひつじ", vocab: [""] },
            { type: "kun", reading: "よう", vocab: [""] }
        ]
    },
    {
        kanji: "洋",
        readings: [
            { type: "kun", reading: "よう", vocab: [""] }
        ]
    },
    {
        kanji: "魚",
        readings: [
            { type: "kun", reading: "うお", vocab: [""] },
            { type: "kun", reading: "ぎょ", vocab: [""] },
            { type: "kun", reading: "さかな", vocab: [""] },
            { type: "kun", reading: "ま", vocab: [""] }
        ]
    },
    {
        kanji: "鮮",
        readings: [
            { type: "kun", reading: "あざ", vocab: [""] },
            { type: "kun", reading: "せん", vocab: [""] }
        ]
    },
    {
        kanji: "蘇",
        readings: [
            { type: "kun", reading: "そ", vocab: [""] },
            { type: "kun", reading: "よみがえ", vocab: [""] }
        ]
    },
    {
        kanji: "詳",
        readings: [
            { type: "kun", reading: "くわ", vocab: [""] },
            { type: "kun", reading: "しょう", vocab: [""] }
        ]
    },
    {
        kanji: "祥",
        readings: [
            { type: "kun", reading: "しょう", vocab: [""] },
            { type: "kun", reading: "じょう", vocab: [""] }
        ]
    },
    {
        kanji: "美",
        readings: [
            { type: "kun", reading: "うつく", vocab: [""] },
            { type: "kun", reading: "お", vocab: [""] },
            { type: "kun", reading: "けみ", vocab: [""] },
            { type: "kun", reading: "び", vocab: [""] },
            { type: "kun", reading: "み", vocab: [""] }
        ]
    },
    {
        kanji: "業",
        readings: [
            { type: "kun", reading: "ぎょう", vocab: [""] },
            { type: "kun", reading: "わざ", vocab: [""] }
        ]
    },
    {
        kanji: "実",
        readings: [
            { type: "kun", reading: "じっ", vocab: [""] },
            { type: "kun", reading: "じつ", vocab: [""] },
            { type: "kun", reading: "み", vocab: [""] },
            { type: "kun", reading: "みの", vocab: [""] },
            { type: "kun", reading: "みのる", vocab: [""] },
            { type: "kun", reading: "め", vocab: [""] }
        ]
    },
    {
        kanji: "養",
        readings: [
            { type: "kun", reading: "やしな", vocab: [""] },
            { type: "kun", reading: "よう", vocab: [""] }
        ]
    },
    {
        kanji: "様",
        readings: [
            { type: "kun", reading: "さま", vocab: [""] },
            { type: "kun", reading: "よう", vocab: [""] }
        ]
    },
    {
        kanji: "企",
        readings: [
            { type: "kun", reading: "き", vocab: [""] },
            { type: "kun", reading: "くわだ", vocab: [""] },
            { type: "kun", reading: "たくら", vocab: [""] }
        ]
    },
    {
        kanji: "曲",
        readings: [
            { type: "kun", reading: "きょく", vocab: [""] },
            { type: "kun", reading: "きょっ", vocab: [""] },
            { type: "kun", reading: "ま", vocab: [""] },
            { type: "kun", reading: "まが", vocab: [""] }
        ]
    },
    {
        kanji: "典",
        readings: [
            { type: "kun", reading: "てん", vocab: [""] }
        ]
    },
    {
        kanji: "興",
        readings: [
            { type: "kun", reading: "きょう", vocab: [""] },
            { type: "kun", reading: "こう", vocab: [""] },
            { type: "kun", reading: "ごう", vocab: [""] }
        ]
    },
    {
        kanji: "輿",
        readings: [
            { type: "kun", reading: "こし", vocab: [""] }
        ]
    },
    {
        kanji: "竜",
        readings: [
            { type: "kun", reading: "たつ", vocab: [""] },
            { type: "kun", reading: "りゅう", vocab: [""] },
            { type: "kun", reading: "りょう", vocab: [""] }
        ]
    },
    {
        kanji: "滝",
        readings: [
            { type: "kun", reading: "たき", vocab: [""] }
        ]
    },
    {
        kanji: "籠",
        readings: [
            { type: "kun", reading: "かご", vocab: [""] },
            { type: "kun", reading: "こも", vocab: [""] }
        ]
    },
    {
        kanji: "辰",
        readings: [
            { type: "kun", reading: "たつ", vocab: [""] }
        ]
    },
    {
        kanji: "農",
        readings: [
            { type: "kun", reading: "のう", vocab: [""] }
        ]
    },
    {
        kanji: "濃",
        readings: [
            { type: "kun", reading: "こ", vocab: [""] },
            { type: "kun", reading: "の", vocab: [""] },
            { type: "kun", reading: "のう", vocab: [""] }
        ]
    },
    {
        kanji: "豊",
        readings: [
            { type: "kun", reading: "とよ", vocab: [""] },
            { type: "kun", reading: "ほう", vocab: [""] },
            { type: "kun", reading: "ゆた", vocab: [""] }
        ]
    },
    {
        kanji: "吉",
        readings: [
            { type: "kun", reading: "きち", vocab: [""] },
            { type: "kun", reading: "きつ", vocab: [""] },
            { type: "kun", reading: "よし", vocab: [""] }
        ]
    },
    {
        kanji: "詰",
        readings: [
            { type: "kun", reading: "きつ", vocab: [""] },
            { type: "kun", reading: "つ", vocab: [""] },
            { type: "kun", reading: "づ", vocab: [""] },
            { type: "kun", reading: "づま", vocab: [""] }
        ]
    },
    {
        kanji: "結",
        readings: [
            { type: "kun", reading: "けっ", vocab: [""] },
            { type: "kun", reading: "けつ", vocab: [""] },
            { type: "kun", reading: "むす", vocab: [""] },
            { type: "kun", reading: "ゆ", vocab: [""] }
        ]
    },
    {
        kanji: "投",
        readings: [
            { type: "kun", reading: "とう", vocab: [""] },
            { type: "kun", reading: "な", vocab: [""] }
        ]
    },
    {
        kanji: "役",
        readings: [
            { type: "kun", reading: "えき", vocab: [""] },
            { type: "kun", reading: "やく", vocab: [""] }
        ]
    },
    {
        kanji: "没",
        readings: [
            { type: "kun", reading: "ぼっ", vocab: [""] },
            { type: "kun", reading: "ぼつ", vocab: [""] }
        ]
    },
    {
        kanji: "設",
        readings: [
            { type: "kun", reading: "せっ", vocab: [""] },
            { type: "kun", reading: "せつ", vocab: [""] },
            { type: "kun", reading: "もう", vocab: [""] }
        ]
    },
    {
        kanji: "段",
        readings: [
            { type: "kun", reading: "だん", vocab: [""] }
        ]
    },
    {
        kanji: "殺",
        readings: [
            { type: "kun", reading: "ころ", vocab: [""] },
            { type: "kun", reading: "さい", vocab: [""] },
            { type: "kun", reading: "さっ", vocab: [""] },
            { type: "kun", reading: "さつ", vocab: [""] }
        ]
    },
    {
        kanji: "刹",
        readings: [
            { type: "kun", reading: "さつ", vocab: [""] }
        ]
    },
    {
        kanji: "刈",
        readings: [
            { type: "kun", reading: "か", vocab: [""] }
        ]
    },
    {
        kanji: "絵",
        readings: [
            { type: "kun", reading: "え", vocab: [""] },
            { type: "kun", reading: "かい", vocab: [""] }
        ]
    },
    {
        kanji: "給",
        readings: [
            { type: "kun", reading: "きゅう", vocab: [""] }
        ]
    },
    {
        kanji: "巴",
        readings: [
            { type: "kun", reading: "どもえ", vocab: [""] }
        ]
    },
    {
        kanji: "色",
        readings: [
            { type: "kun", reading: "いろ", vocab: [""] },
            { type: "kun", reading: "しき", vocab: [""] },
            { type: "kun", reading: "しょく", vocab: [""] }
        ]
    },
    {
        kanji: "声",
        readings: [
            { type: "kun", reading: "こえ", vocab: [""] },
            { type: "kun", reading: "ごえ", vocab: [""] },
            { type: "kun", reading: "せい", vocab: [""] }
        ]
    },
    {
        kanji: "眉",
        readings: [
            { type: "kun", reading: "まゆ", vocab: [""] },
            { type: "kun", reading: "み", vocab: [""] }
        ]
    },
    {
        kanji: "里",
        readings: [
            { type: "kun", reading: "さと", vocab: [""] },
            { type: "kun", reading: "り", vocab: [""] }
        ]
    },
    {
        kanji: "理",
        readings: [
            { type: "kun", reading: "り", vocab: [""] }
        ]
    },
    {
        kanji: "埋",
        readings: [
            { type: "kun", reading: "う", vocab: [""] },
            { type: "kun", reading: "うず", vocab: [""] },
            { type: "kun", reading: "まい", vocab: [""] }
        ]
    },
    {
        kanji: "野",
        readings: [
            { type: "kun", reading: "の", vocab: [""] },
            { type: "kun", reading: "のら", vocab: [""] },
            { type: "kun", reading: "や", vocab: [""] }
        ]
    },
    {
        kanji: "黒",
        readings: [
            { type: "kun", reading: "くろ", vocab: [""] },
            { type: "kun", reading: "ぐろ", vocab: [""] },
            { type: "kun", reading: "こく", vocab: [""] }
        ]
    },
    {
        kanji: "墨",
        readings: [
            { type: "kun", reading: "すみ", vocab: [""] },
            { type: "kun", reading: "ぼく", vocab: [""] }
        ]
    },
    {
        kanji: "童",
        readings: [
            { type: "kun", reading: "どう", vocab: [""] },
            { type: "kun", reading: "わらべ", vocab: [""] }
        ]
    },
    {
        kanji: "量",
        readings: [
            { type: "kun", reading: "はか", vocab: [""] },
            { type: "kun", reading: "りょう", vocab: [""] }
        ]
    },
    {
        kanji: "重",
        readings: [
            { type: "kun", reading: "おも", vocab: [""] },
            { type: "kun", reading: "かさ", vocab: [""] },
            { type: "kun", reading: "じゅう", vocab: [""] },
            { type: "kun", reading: "ちょう", vocab: [""] }
        ]
    },
    {
        kanji: "動",
        readings: [
            { type: "kun", reading: "うご", vocab: [""] },
            { type: "kun", reading: "どう", vocab: [""] }
        ]
    },
    {
        kanji: "働",
        readings: [
            { type: "kun", reading: "どう", vocab: [""] },
            { type: "kun", reading: "はたら", vocab: [""] }
        ]
    },
    {
        kanji: "労",
        readings: [
            { type: "kun", reading: "ろう", vocab: [""] }
        ]
    },
    {
        kanji: "協",
        readings: [
            { type: "kun", reading: "きょう", vocab: [""] }
        ]
    },
    {
        kanji: "種",
        readings: [
            { type: "kun", reading: "しゅ", vocab: [""] },
            { type: "kun", reading: "たね", vocab: [""] }
        ]
    },
    {
        kanji: "亜",
        readings: [
            { type: "kun", reading: "あ", vocab: [""] }
        ]
    },
    {
        kanji: "悪",
        readings: [
            { type: "kun", reading: "あ", vocab: [""] },
            { type: "kun", reading: "あく", vocab: [""] },
            { type: "kun", reading: "あっ", vocab: [""] },
            { type: "kun", reading: "わる", vocab: [""] }
        ]
    },
    {
        kanji: "要",
        readings: [
            { type: "kun", reading: "い", vocab: [""] },
            { type: "kun", reading: "よう", vocab: [""] }
        ]
    },
    {
        kanji: "価",
        readings: [
            { type: "kun", reading: "か", vocab: [""] }
        ]
    },
    {
        kanji: "必",
        readings: [
            { type: "kun", reading: "かなら", vocab: [""] },
            { type: "kun", reading: "ひっ", vocab: [""] },
            { type: "kun", reading: "ひつ", vocab: [""] }
        ]
    },
    {
        kanji: "証",
        readings: [
            { type: "kun", reading: "しょう", vocab: [""] }
        ]
    },
    {
        kanji: "歪",
        readings: [
            { type: "kun", reading: "ゆが", vocab: [""] },
            { type: "kun", reading: "わい", vocab: [""] }
        ]
    },
    {
        kanji: "否",
        readings: [
            { type: "kun", reading: "いな", vocab: [""] },
            { type: "kun", reading: "ひ", vocab: [""] }
        ]
    },
    {
        kanji: "処",
        readings: [
            { type: "kun", reading: "こ", vocab: [""] },
            { type: "kun", reading: "しょ", vocab: [""] },
            { type: "kun", reading: "ところ", vocab: [""] }
        ]
    },
    {
        kanji: "拠",
        readings: [
            { type: "kun", reading: "きょ", vocab: [""] },
            { type: "kun", reading: "こ", vocab: [""] },
            { type: "kun", reading: "よ", vocab: [""] }
        ]
    },
    {
        kanji: "計",
        readings: [
            { type: "kun", reading: "けい", vocab: [""] },
            { type: "kun", reading: "はか", vocab: [""] }
        ]
    },
    {
        kanji: "針",
        readings: [
            { type: "kun", reading: "しん", vocab: [""] },
            { type: "kun", reading: "はり", vocab: [""] },
            { type: "kun", reading: "ばり", vocab: [""] }
        ]
    },
    {
        kanji: "総",
        readings: [
            { type: "kun", reading: "そう", vocab: [""] }
        ]
    },
    {
        kanji: "窓",
        readings: [
            { type: "kun", reading: "そう", vocab: [""] },
            { type: "kun", reading: "まど", vocab: [""] }
        ]
    },
    {
        kanji: "矢",
        readings: [
            { type: "kun", reading: "や", vocab: [""] }
        ]
    },
    {
        kanji: "知",
        readings: [
            { type: "kun", reading: "し", vocab: [""] },
            { type: "kun", reading: "ち", vocab: [""] },
            { type: "kun", reading: "ぢ", vocab: [""] }
        ]
    },
    {
        kanji: "医",
        readings: [
            { type: "kun", reading: "い", vocab: [""] }
        ]
    },
    {
        kanji: "短",
        readings: [
            { type: "kun", reading: "たん", vocab: [""] },
            { type: "kun", reading: "みじか", vocab: [""] }
        ]
    },
    {
        kanji: "失",
        readings: [
            { type: "kun", reading: "うしな", vocab: [""] },
            { type: "kun", reading: "しっ", vocab: [""] },
            { type: "kun", reading: "しつ", vocab: [""] }
        ]
    },
    {
        kanji: "鉄",
        readings: [
            { type: "kun", reading: "てっ", vocab: [""] },
            { type: "kun", reading: "てつ", vocab: [""] }
        ]
    },
    {
        kanji: "夫",
        readings: [
            { type: "kun", reading: "おっと", vocab: [""] },
            { type: "kun", reading: "ふ", vocab: [""] },
            { type: "kun", reading: "ふう", vocab: [""] },
            { type: "kun", reading: "ぶ", vocab: [""] },
            { type: "kun", reading: "ぷ", vocab: [""] }
        ]
    },
    {
        kanji: "朱",
        readings: [
            { type: "kun", reading: "しゅ", vocab: [""] },
            { type: "kun", reading: "ジュ", vocab: [""] }
        ]
    },
    {
        kanji: "株",
        readings: [
            { type: "kun", reading: "かぶ", vocab: [""] }
        ]
    },
    {
        kanji: "族",
        readings: [
            { type: "kun", reading: "ぞく", vocab: [""] }
        ]
    },
    {
        kanji: "旅",
        readings: [
            { type: "kun", reading: "たび", vocab: [""] },
            { type: "kun", reading: "りょ", vocab: [""] }
        ]
    },
    {
        kanji: "遊",
        readings: [
            { type: "kun", reading: "あそ", vocab: [""] },
            { type: "kun", reading: "ゆ", vocab: [""] },
            { type: "kun", reading: "ゆう", vocab: [""] }
        ]
    },
    {
        kanji: "施",
        readings: [
            { type: "kun", reading: "し", vocab: [""] },
            { type: "kun", reading: "ほどこ", vocab: [""] }
        ]
    },
    {
        kanji: "旋",
        readings: [
            { type: "kun", reading: "せん", vocab: [""] }
        ]
    },
    {
        kanji: "旗",
        readings: [
            { type: "kun", reading: "き", vocab: [""] },
            { type: "kun", reading: "はた", vocab: [""] },
            { type: "kun", reading: "ばた", vocab: [""] }
        ]
    },
    {
        kanji: "放",
        readings: [
            { type: "kun", reading: "はな", vocab: [""] },
            { type: "kun", reading: "ばな", vocab: [""] },
            { type: "kun", reading: "ぱな", vocab: [""] },
            { type: "kun", reading: "ほ", vocab: [""] },
            { type: "kun", reading: "ほう", vocab: [""] },
            { type: "kun", reading: "ほお", vocab: [""] }
        ]
    },
    {
        kanji: "激",
        readings: [
            { type: "kun", reading: "げき", vocab: [""] },
            { type: "kun", reading: "はげ", vocab: [""] }
        ]
    },
    {
        kanji: "牧",
        readings: [
            { type: "kun", reading: "ぼく", vocab: [""] },
            { type: "kun", reading: "ぼっ", vocab: [""] },
            { type: "kun", reading: "まき", vocab: [""] }
        ]
    },
    {
        kanji: "位",
        readings: [
            { type: "kun", reading: "い", vocab: [""] },
            { type: "kun", reading: "くらい", vocab: [""] }
        ]
    },
    {
        kanji: "泣",
        readings: [
            { type: "kun", reading: "きゅう", vocab: [""] },
            { type: "kun", reading: "な", vocab: [""] }
        ]
    },
    {
        kanji: "笑",
        readings: [
            { type: "kun", reading: "え", vocab: [""] },
            { type: "kun", reading: "わら", vocab: [""] }
        ]
    },
    {
        kanji: "専",
        readings: [
            { type: "kun", reading: "せん", vocab: [""] },
            { type: "kun", reading: "もっぱ", vocab: [""] }
        ]
    },
    {
        kanji: "恵",
        readings: [
            { type: "kun", reading: "え", vocab: [""] },
            { type: "kun", reading: "けい", vocab: [""] },
            { type: "kun", reading: "めぐ", vocab: [""] },
            { type: "kun", reading: "めぐみ", vocab: [""] }
        ]
    },
    {
        kanji: "連",
        readings: [
            { type: "kun", reading: "つ", vocab: [""] },
            { type: "kun", reading: "つら", vocab: [""] },
            { type: "kun", reading: "づ", vocab: [""] },
            { type: "kun", reading: "れん", vocab: [""] }
        ]
    },
    {
        kanji: "軍",
        readings: [
            { type: "kun", reading: "ぐん", vocab: [""] }
        ]
    },
    {
        kanji: "運",
        readings: [
            { type: "kun", reading: "うん", vocab: [""] },
            { type: "kun", reading: "はこ", vocab: [""] }
        ]
    },
    {
        kanji: "蓮",
        readings: [
            { type: "kun", reading: "はす", vocab: [""] },
            { type: "kun", reading: "れん", vocab: [""] }
        ]
    },
    {
        kanji: "隊",
        readings: [
            { type: "kun", reading: "たい", vocab: [""] }
        ]
    },
    {
        kanji: "呈",
        readings: [
            { type: "kun", reading: "てい", vocab: [""] }
        ]
    },
    {
        kanji: "程",
        readings: [
            { type: "kun", reading: "てい", vocab: [""] },
            { type: "kun", reading: "ほど", vocab: [""] }
        ]
    },
    {
        kanji: "聖",
        readings: [
            { type: "kun", reading: "せい", vocab: [""] }
        ]
    },
    {
        kanji: "丑",
        readings: [
            { type: "kun", reading: "うし", vocab: [""] }
        ]
    },
    {
        kanji: "紐",
        readings: [
            { type: "kun", reading: "ひも", vocab: [""] }
        ]
    },
    {
        kanji: "革",
        readings: [
            { type: "kun", reading: "かく", vocab: [""] },
            { type: "kun", reading: "かわ", vocab: [""] },
            { type: "kun", reading: "がわ", vocab: [""] }
        ]
    },
    {
        kanji: "靴",
        readings: [
            { type: "kun", reading: "か", vocab: [""] },
            { type: "kun", reading: "くつ", vocab: [""] },
            { type: "kun", reading: "ぐつ", vocab: [""] }
        ]
    },
    {
        kanji: "鞄",
        readings: [
            { type: "kun", reading: "かばん", vocab: [""] }
        ]
    },
    {
        kanji: "皮",
        readings: [
            { type: "kun", reading: "かわ", vocab: [""] },
            { type: "kun", reading: "がわ", vocab: [""] },
            { type: "kun", reading: "ひ", vocab: [""] }
        ]
    },
    {
        kanji: "破",
        readings: [
            { type: "kun", reading: "は", vocab: [""] },
            { type: "kun", reading: "ぱ", vocab: [""] },
            { type: "kun", reading: "やぶ", vocab: [""] }
        ]
    },
    {
        kanji: "彼",
        readings: [
            { type: "kun", reading: "あそこ", vocab: [""] },
            { type: "kun", reading: "あちら", vocab: [""] },
            { type: "kun", reading: "かなた", vocab: [""] },
            { type: "kun", reading: "かの", vocab: [""] },
            { type: "kun", reading: "かれ", vocab: [""] }
        ]
    },
    {
        kanji: "波",
        readings: [
            { type: "kun", reading: "なみ", vocab: [""] },
            { type: "kun", reading: "は", vocab: [""] },
            { type: "kun", reading: "ぱ", vocab: [""] }
        ]
    },
    {
        kanji: "果",
        readings: [
            { type: "kun", reading: "か", vocab: [""] },
            { type: "kun", reading: "くだもの", vocab: [""] },
            { type: "kun", reading: "は", vocab: [""] }
        ]
    },
    {
        kanji: "課",
        readings: [
            { type: "kun", reading: "か", vocab: [""] }
        ]
    },
    {
        kanji: "巣",
        readings: [
            { type: "kun", reading: "す", vocab: [""] },
            { type: "kun", reading: "そう", vocab: [""] }
        ]
    },
    {
        kanji: "菓",
        readings: [
            { type: "kun", reading: "か", vocab: [""] },
            { type: "kun", reading: "が", vocab: [""] }
        ]
    },
    {
        kanji: "茶",
        readings: [
            { type: "kun", reading: "ちゃ", vocab: [""] }
        ]
    },
    {
        kanji: "世",
        readings: [
            { type: "kun", reading: "すよ", vocab: [""] },
            { type: "kun", reading: "せ", vocab: [""] },
            { type: "kun", reading: "せい", vocab: [""] },
            { type: "kun", reading: "よ", vocab: [""] }
        ]
    },
    {
        kanji: "葉",
        readings: [
            { type: "kun", reading: "は", vocab: [""] },
            { type: "kun", reading: "ば", vocab: [""] },
            { type: "kun", reading: "ぱ", vocab: [""] },
            { type: "kun", reading: "よう", vocab: [""] }
        ]
    },
    {
        kanji: "棄",
        readings: [
            { type: "kun", reading: "き", vocab: [""] }
        ]
    },
    {
        kanji: "緑",
        readings: [
            { type: "kun", reading: "みどり", vocab: [""] },
            { type: "kun", reading: "りょく", vocab: [""] },
            { type: "kun", reading: "ろく", vocab: [""] }
        ]
    },
    {
        kanji: "録",
        readings: [
            { type: "kun", reading: "ろく", vocab: [""] }
        ]
    },
    {
        kanji: "剥",
        readings: [
            { type: "kun", reading: "は", vocab: [""] },
            { type: "kun", reading: "む", vocab: [""] }
        ]
    },
    {
        kanji: "縁",
        readings: [
            { type: "kun", reading: "えん", vocab: [""] },
            { type: "kun", reading: "ふち", vocab: [""] },
            { type: "kun", reading: "ぶち", vocab: [""] }
        ]
    },
    {
        kanji: "介",
        readings: [
            { type: "kun", reading: "かい", vocab: [""] }
        ]
    },
    {
        kanji: "界",
        readings: [
            { type: "kun", reading: "かい", vocab: [""] }
        ]
    },
    {
        kanji: "浮",
        readings: [
            { type: "kun", reading: "う", vocab: [""] },
            { type: "kun", reading: "うか", vocab: [""] },
            { type: "kun", reading: "うわ", vocab: [""] },
            { type: "kun", reading: "ふ", vocab: [""] }
        ]
    },
    {
        kanji: "将",
        readings: [
            { type: "kun", reading: "しょう", vocab: [""] },
            { type: "kun", reading: "じょう", vocab: [""] }
        ]
    },
    {
        kanji: "奨",
        readings: [
            { type: "kun", reading: "しょう", vocab: [""] }
        ]
    },
    {
        kanji: "状",
        readings: [
            { type: "kun", reading: "じょう", vocab: [""] }
        ]
    },
    {
        kanji: "病",
        readings: [
            { type: "kun", reading: "びょう", vocab: [""] },
            { type: "kun", reading: "や", vocab: [""] },
            { type: "kun", reading: "やまい", vocab: [""] }
        ]
    },
    {
        kanji: "症",
        readings: [
            { type: "kun", reading: "しょう", vocab: [""] }
        ]
    },
    {
        kanji: "痛",
        readings: [
            { type: "kun", reading: "いた", vocab: [""] },
            { type: "kun", reading: "つう", vocab: [""] }
        ]
    },
    {
        kanji: "憶",
        readings: [
            { type: "kun", reading: "おく", vocab: [""] }
        ]
    },
    {
        kanji: "臆",
        readings: [
            { type: "kun", reading: "おく", vocab: [""] }
        ]
    },
    {
        kanji: "億",
        readings: [
            { type: "kun", reading: "おく", vocab: [""] }
        ]
    },
    {
        kanji: "視",
        readings: [
            { type: "kun", reading: "し", vocab: [""] }
        ]
    },
    {
        kanji: "規",
        readings: [
            { type: "kun", reading: "き", vocab: [""] },
            { type: "kun", reading: "ぎ", vocab: [""] }
        ]
    },
    {
        kanji: "則",
        readings: [
            { type: "kun", reading: "そく", vocab: [""] }
        ]
    },
    {
        kanji: "側",
        readings: [
            { type: "kun", reading: "がわ", vocab: [""] },
            { type: "kun", reading: "そく", vocab: [""] },
            { type: "kun", reading: "そっ", vocab: [""] },
            { type: "kun", reading: "そば", vocab: [""] }
        ]
    },
    {
        kanji: "測",
        readings: [
            { type: "kun", reading: "そく", vocab: [""] },
            { type: "kun", reading: "はか", vocab: [""] }
        ]
    },
    {
        kanji: "考",
        readings: [
            { type: "kun", reading: "かんが", vocab: [""] },
            { type: "kun", reading: "こう", vocab: [""] }
        ]
    },
    {
        kanji: "老",
        readings: [
            { type: "kun", reading: "お", vocab: [""] },
            { type: "kun", reading: "び", vocab: [""] },
            { type: "kun", reading: "ふ", vocab: [""] },
            { type: "kun", reading: "ろう", vocab: [""] }
        ]
    },
    {
        kanji: "孝",
        readings: [
            { type: "kun", reading: "こう", vocab: [""] }
        ]
    },
    {
        kanji: "厚",
        readings: [
            { type: "kun", reading: "あつ", vocab: [""] },
            { type: "kun", reading: "こう", vocab: [""] }
        ]
    },
    {
        kanji: "教",
        readings: [
            { type: "kun", reading: "おし", vocab: [""] },
            { type: "kun", reading: "おそ", vocab: [""] },
            { type: "kun", reading: "きょう", vocab: [""] }
        ]
    },
    {
        kanji: "完",
        readings: [
            { type: "kun", reading: "かん", vocab: [""] }
        ]
    },
    {
        kanji: "院",
        readings: [
            { type: "kun", reading: "いん", vocab: [""] }
        ]
    },
    {
        kanji: "奈",
        readings: [
            { type: "kun", reading: "な", vocab: [""] }
        ]
    },
    {
        kanji: "宗",
        readings: [
            { type: "kun", reading: "しゅう", vocab: [""] }
        ]
    },
    {
        kanji: "祭",
        readings: [
            { type: "kun", reading: "さい", vocab: [""] },
            { type: "kun", reading: "まつ", vocab: [""] }
        ]
    },
    {
        kanji: "際",
        readings: [
            { type: "kun", reading: "きわ", vocab: [""] },
            { type: "kun", reading: "ぎわ", vocab: [""] },
            { type: "kun", reading: "さい", vocab: [""] }
        ]
    },
    {
        kanji: "察",
        readings: [
            { type: "kun", reading: "さっ", vocab: [""] },
            { type: "kun", reading: "さつ", vocab: [""] }
        ]
    },
    {
        kanji: "祈",
        readings: [
            { type: "kun", reading: "いの", vocab: [""] },
            { type: "kun", reading: "き", vocab: [""] }
        ]
    },
    {
        kanji: "祖",
        readings: [
            { type: "kun", reading: "そ", vocab: [""] },
            { type: "kun", reading: "ぞ", vocab: [""] },
            { type: "kun", reading: "ば", vocab: [""] }
        ]
    },
    {
        kanji: "助",
        readings: [
            { type: "kun", reading: "じょ", vocab: [""] },
            { type: "kun", reading: "たす", vocab: [""] },
            { type: "kun", reading: "だす", vocab: [""] }
        ]
    },
    {
        kanji: "仲",
        readings: [
            { type: "kun", reading: "ちゅう", vocab: [""] },
            { type: "kun", reading: "なか", vocab: [""] },
            { type: "kun", reading: "なこうど", vocab: [""] }
        ]
    },
    {
        kanji: "忠",
        readings: [
            { type: "kun", reading: "ちゅう", vocab: [""] },
            { type: "kun", reading: "ま", vocab: [""] }
        ]
    },
    {
        kanji: "沖",
        readings: [
            { type: "kun", reading: "おき", vocab: [""] },
            { type: "kun", reading: "ちゅう", vocab: [""] }
        ]
    },
    {
        kanji: "保",
        readings: [
            { type: "kun", reading: "たも", vocab: [""] },
            { type: "kun", reading: "ほ", vocab: [""] },
            { type: "kun", reading: "ぼ", vocab: [""] }
        ]
    },
    {
        kanji: "呆",
        readings: [
            { type: "kun", reading: "あき", vocab: [""] },
            { type: "kun", reading: "あっ", vocab: [""] },
            { type: "kun", reading: "ぼう", vocab: [""] }
        ]
    },
    {
        kanji: "守",
        readings: [
            { type: "kun", reading: "しゅ", vocab: [""] },
            { type: "kun", reading: "まも", vocab: [""] },
            { type: "kun", reading: "も", vocab: [""] },
            { type: "kun", reading: "もり", vocab: [""] }
        ]
    },
    {
        kanji: "団",
        readings: [
            { type: "kun", reading: "だん", vocab: [""] },
            { type: "kun", reading: "とん", vocab: [""] }
        ]
    },
    {
        kanji: "対",
        readings: [
            { type: "kun", reading: "たい", vocab: [""] },
            { type: "kun", reading: "つい", vocab: [""] }
        ]
    },
    {
        kanji: "村",
        readings: [
            { type: "kun", reading: "えむら", vocab: [""] },
            { type: "kun", reading: "そん", vocab: [""] },
            { type: "kun", reading: "むら", vocab: [""] }
        ]
    },
    {
        kanji: "才",
        readings: [
            { type: "kun", reading: "さい", vocab: [""] }
        ]
    },
    {
        kanji: "財",
        readings: [
            { type: "kun", reading: "さい", vocab: [""] },
            { type: "kun", reading: "ざい", vocab: [""] }
        ]
    },
    {
        kanji: "材",
        readings: [
            { type: "kun", reading: "ざい", vocab: [""] }
        ]
    },
    {
        kanji: "沈",
        readings: [
            { type: "kun", reading: "しず", vocab: [""] },
            { type: "kun", reading: "ちん", vocab: [""] }
        ]
    },
    {
        kanji: "枕",
        readings: [
            { type: "kun", reading: "まくら", vocab: [""] }
        ]
    },
    {
        kanji: "丈",
        readings: [
            { type: "kun", reading: "じょう", vocab: [""] },
            { type: "kun", reading: "たけ", vocab: [""] }
        ]
    },
    {
        kanji: "杖",
        readings: [
            { type: "kun", reading: "つえ", vocab: [""] },
            { type: "kun", reading: "づえ", vocab: [""] }
        ]
    },
    {
        kanji: "偉",
        readings: [
            { type: "kun", reading: "い", vocab: [""] },
            { type: "kun", reading: "えら", vocab: [""] }
        ]
    },
    {
        kanji: "緯",
        readings: [
            { type: "kun", reading: "い", vocab: [""] }
        ]
    },
    {
        kanji: "衛",
        readings: [
            { type: "kun", reading: "えい", vocab: [""] }
        ]
    },
    {
        kanji: "韓",
        readings: [
            { type: "kun", reading: "かん", vocab: [""] }
        ]
    },
    {
        kanji: "違",
        readings: [
            { type: "kun", reading: "い", vocab: [""] },
            { type: "kun", reading: "ちが", vocab: [""] }
        ]
    },
    {
        kanji: "抱",
        readings: [
            { type: "kun", reading: "いだ", vocab: [""] },
            { type: "kun", reading: "かか", vocab: [""] },
            { type: "kun", reading: "だ", vocab: [""] },
            { type: "kun", reading: "ほう", vocab: [""] }
        ]
    },
    {
        kanji: "砲",
        readings: [
            { type: "kun", reading: "ほう", vocab: [""] },
            { type: "kun", reading: "ぽう", vocab: [""] }
        ]
    },
    {
        kanji: "泡",
        readings: [
            { type: "kun", reading: "あわ", vocab: [""] },
            { type: "kun", reading: "ほう", vocab: [""] },
            { type: "kun", reading: "ぽう", vocab: [""] }
        ]
    },
    {
        kanji: "丹",
        readings: [
            { type: "kun", reading: "たん", vocab: [""] }
        ]
    },
    {
        kanji: "舟",
        readings: [
            { type: "kun", reading: "しゅう", vocab: [""] },
            { type: "kun", reading: "ふね", vocab: [""] },
            { type: "kun", reading: "ぶね", vocab: [""] }
        ]
    },
    {
        kanji: "船",
        readings: [
            { type: "kun", reading: "せん", vocab: [""] },
            { type: "kun", reading: "ふな", vocab: [""] },
            { type: "kun", reading: "ふね", vocab: [""] }
        ]
    },
    {
        kanji: "舶",
        readings: [
            { type: "kun", reading: "ぱく", vocab: [""] }
        ]
    },
    {
        kanji: "般",
        readings: [
            { type: "kun", reading: "ぱん", vocab: [""] }
        ]
    },
    {
        kanji: "搬",
        readings: [
            { type: "kun", reading: "はん", vocab: [""] },
            { type: "kun", reading: "ぱん", vocab: [""] }
        ]
    },
    {
        kanji: "盤",
        readings: [
            { type: "kun", reading: "ばん", vocab: [""] }
        ]
    },
    {
        kanji: "歯",
        readings: [
            { type: "kun", reading: "し", vocab: [""] },
            { type: "kun", reading: "は", vocab: [""] },
            { type: "kun", reading: "ば", vocab: [""] }
        ]
    },
    {
        kanji: "冷",
        readings: [
            { type: "kun", reading: "さ", vocab: [""] },
            { type: "kun", reading: "つめ", vocab: [""] },
            { type: "kun", reading: "ひ", vocab: [""] },
            { type: "kun", reading: "ひや", vocab: [""] },
            { type: "kun", reading: "れい", vocab: [""] }
        ]
    },
    {
        kanji: "齢",
        readings: [
            { type: "kun", reading: "れい", vocab: [""] }
        ]
    },
    {
        kanji: "少",
        readings: [
            { type: "kun", reading: "しょう", vocab: [""] },
            { type: "kun", reading: "すく", vocab: [""] },
            { type: "kun", reading: "すこ", vocab: [""] }
        ]
    },
    {
        kanji: "砂",
        readings: [
            { type: "kun", reading: "さ", vocab: [""] },
            { type: "kun", reading: "じゃ", vocab: [""] },
            { type: "kun", reading: "すな", vocab: [""] }
        ]
    },
    {
        kanji: "歩",
        readings: [
            { type: "kun", reading: "あゆ", vocab: [""] },
            { type: "kun", reading: "ある", vocab: [""] },
            { type: "kun", reading: "ぶ", vocab: [""] },
            { type: "kun", reading: "ほ", vocab: [""] },
            { type: "kun", reading: "ぽ", vocab: [""] }
        ]
    },
    {
        kanji: "渉",
        readings: [
            { type: "kun", reading: "しょう", vocab: [""] }
        ]
    },
    {
        kanji: "省",
        readings: [
            { type: "kun", reading: "かえり", vocab: [""] },
            { type: "kun", reading: "しょう", vocab: [""] },
            { type: "kun", reading: "せい", vocab: [""] },
            { type: "kun", reading: "はぶ", vocab: [""] }
        ]
    },
    {
        kanji: "相",
        readings: [
            { type: "kun", reading: "あい", vocab: [""] },
            { type: "kun", reading: "しょう", vocab: [""] },
            { type: "kun", reading: "そう", vocab: [""] }
        ]
    },
    {
        kanji: "想",
        readings: [
            { type: "kun", reading: "おも", vocab: [""] },
            { type: "kun", reading: "そ", vocab: [""] },
            { type: "kun", reading: "そう", vocab: [""] }
        ]
    },
    {
        kanji: "称",
        readings: [
            { type: "kun", reading: "しょう", vocab: [""] },
            { type: "kun", reading: "たた", vocab: [""] }
        ]
    },
    {
        kanji: "弥",
        readings: [
            { type: "kun", reading: "や", vocab: [""] },
            { type: "kun", reading: "やよい", vocab: [""] }
        ]
    },
    {
        kanji: "互",
        readings: [
            { type: "kun", reading: "ご", vocab: [""] },
            { type: "kun", reading: "たが", vocab: [""] }
        ]
    },
    {
        kanji: "務",
        readings: [
            { type: "kun", reading: "つと", vocab: [""] },
            { type: "kun", reading: "む", vocab: [""] }
        ]
    },
    {
        kanji: "柔",
        readings: [
            { type: "kun", reading: "じゅう", vocab: [""] },
            { type: "kun", reading: "にゅう", vocab: [""] },
            { type: "kun", reading: "やわ", vocab: [""] }
        ]
    },
    {
        kanji: "軟",
        readings: [
            { type: "kun", reading: "なん", vocab: [""] }
        ]
    },
    {
        kanji: "軌",
        readings: [
            { type: "kun", reading: "き", vocab: [""] }
        ]
    },
    {
        kanji: "軒",
        readings: [
            { type: "kun", reading: "けん", vocab: [""] },
            { type: "kun", reading: "のき", vocab: [""] }
        ]
    },
    {
        kanji: "軸",
        readings: [
            { type: "kun", reading: "じく", vocab: [""] }
        ]
    },
    {
        kanji: "較",
        readings: [
            { type: "kun", reading: "かく", vocab: [""] }
        ]
    },
    {
        kanji: "庫",
        readings: [
            { type: "kun", reading: "こ", vocab: [""] },
            { type: "kun", reading: "ご", vocab: [""] }
        ]
    },
    {
        kanji: "蔵",
        readings: [
            { type: "kun", reading: "くら", vocab: [""] },
            { type: "kun", reading: "ぞう", vocab: [""] }
        ]
    },
    {
        kanji: "倉",
        readings: [
            { type: "kun", reading: "くら", vocab: [""] },
            { type: "kun", reading: "ぐら", vocab: [""] },
            { type: "kun", reading: "そう", vocab: [""] }
        ]
    },
    {
        kanji: "創",
        readings: [
            { type: "kun", reading: "そう", vocab: [""] },
            { type: "kun", reading: "つく", vocab: [""] }
        ]
    },
    {
        kanji: "告",
        readings: [
            { type: "kun", reading: "こく", vocab: [""] },
            { type: "kun", reading: "つ", vocab: [""] }
        ]
    },
    {
        kanji: "造",
        readings: [
            { type: "kun", reading: "ぞう", vocab: [""] },
            { type: "kun", reading: "つく", vocab: [""] },
            { type: "kun", reading: "づく", vocab: [""] }
        ]
    },
    {
        kanji: "衣",
        readings: [
            { type: "kun", reading: "い", vocab: [""] },
            { type: "kun", reading: "きぬ", vocab: [""] },
            { type: "kun", reading: "ぎ", vocab: [""] },
            { type: "kun", reading: "ころも", vocab: [""] }
        ]
    },
    {
        kanji: "依",
        readings: [
            { type: "kun", reading: "い", vocab: [""] }
        ]
    },
    {
        kanji: "袋",
        readings: [
            { type: "kun", reading: "たい", vocab: [""] },
            { type: "kun", reading: "び", vocab: [""] },
            { type: "kun", reading: "ふくろ", vocab: [""] },
            { type: "kun", reading: "ふくろこう", vocab: [""] },
            { type: "kun", reading: "ぶくろ", vocab: [""] }
        ]
    },
    {
        kanji: "褒",
        readings: [
            { type: "kun", reading: "ほ", vocab: [""] },
            { type: "kun", reading: "ほう", vocab: [""] }
        ]
    },
    {
        kanji: "裏",
        readings: [
            { type: "kun", reading: "うら", vocab: [""] },
            { type: "kun", reading: "り", vocab: [""] }
        ]
    },
    {
        kanji: "表",
        readings: [
            { type: "kun", reading: "あら", vocab: [""] },
            { type: "kun", reading: "あらわ", vocab: [""] },
            { type: "kun", reading: "おもて", vocab: [""] },
            { type: "kun", reading: "ひょう", vocab: [""] },
            { type: "kun", reading: "ぴょう", vocab: [""] }
        ]
    },
    {
        kanji: "現",
        readings: [
            { type: "kun", reading: "あらわ", vocab: [""] },
            { type: "kun", reading: "げん", vocab: [""] }
        ]
    },
    {
        kanji: "著",
        readings: [
            { type: "kun", reading: "あらわ", vocab: [""] },
            { type: "kun", reading: "いちじる", vocab: [""] },
            { type: "kun", reading: "ちょ", vocab: [""] }
        ]
    },
    {
        kanji: "制",
        readings: [
            { type: "kun", reading: "せい", vocab: [""] }
        ]
    },
    {
        kanji: "製",
        readings: [
            { type: "kun", reading: "せい", vocab: [""] }
        ]
    },
    {
        kanji: "初",
        readings: [
            { type: "kun", reading: "しょ", vocab: [""] },
            { type: "kun", reading: "はじ", vocab: [""] },
            { type: "kun", reading: "はっ", vocab: [""] },
            { type: "kun", reading: "はつ", vocab: [""] }
        ]
    },
    {
        kanji: "裸",
        readings: [
            { type: "kun", reading: "はだか", vocab: [""] },
            { type: "kun", reading: "はだし", vocab: [""] },
            { type: "kun", reading: "ぱだか", vocab: [""] },
            { type: "kun", reading: "ら", vocab: [""] }
        ]
    },
    {
        kanji: "難",
        readings: [
            { type: "kun", reading: "がた", vocab: [""] },
            { type: "kun", reading: "なん", vocab: [""] },
            { type: "kun", reading: "むずか", vocab: [""] }
        ]
    },
    {
        kanji: "准",
        readings: [
            { type: "kun", reading: "じゅん", vocab: [""] }
        ]
    },
    {
        kanji: "準",
        readings: [
            { type: "kun", reading: "じゅん", vocab: [""] }
        ]
    },
    {
        kanji: "備",
        readings: [
            { type: "kun", reading: "そな", vocab: [""] },
            { type: "kun", reading: "び", vocab: [""] }
        ]
    },
    {
        kanji: "死",
        readings: [
            { type: "kun", reading: "し", vocab: [""] },
            { type: "kun", reading: "じに", vocab: [""] }
        ]
    },
    {
        kanji: "葬",
        readings: [
            { type: "kun", reading: "そう", vocab: [""] },
            { type: "kun", reading: "ほうむ", vocab: [""] }
        ]
    },
    {
        kanji: "列",
        readings: [
            { type: "kun", reading: "れっ", vocab: [""] },
            { type: "kun", reading: "れつ", vocab: [""] }
        ]
    },
    {
        kanji: "烈",
        readings: [
            { type: "kun", reading: "れっ", vocab: [""] },
            { type: "kun", reading: "れつ", vocab: [""] }
        ]
    },
    {
        kanji: "裂",
        readings: [
            { type: "kun", reading: "さ", vocab: [""] },
            { type: "kun", reading: "れっ", vocab: [""] },
            { type: "kun", reading: "れつ", vocab: [""] }
        ]
    },
    {
        kanji: "例",
        readings: [
            { type: "kun", reading: "たと", vocab: [""] },
            { type: "kun", reading: "れい", vocab: [""] }
        ]
    },
    {
        kanji: "刑",
        readings: [
            { type: "kun", reading: "けい", vocab: [""] }
        ]
    },
    {
        kanji: "型",
        readings: [
            { type: "kun", reading: "かた", vocab: [""] },
            { type: "kun", reading: "がた", vocab: [""] },
            { type: "kun", reading: "けい", vocab: [""] }
        ]
    },
    {
        kanji: "研",
        readings: [
            { type: "kun", reading: "けん", vocab: [""] },
            { type: "kun", reading: "と", vocab: [""] }
        ]
    },
    {
        kanji: "厄",
        readings: [
            { type: "kun", reading: "やく", vocab: [""] },
            { type: "kun", reading: "やっ", vocab: [""] }
        ]
    },
    {
        kanji: "危",
        readings: [
            { type: "kun", reading: "あぶ", vocab: [""] },
            { type: "kun", reading: "あや", vocab: [""] },
            { type: "kun", reading: "き", vocab: [""] }
        ]
    },
    {
        kanji: "範",
        readings: [
            { type: "kun", reading: "はん", vocab: [""] },
            { type: "kun", reading: "はんいがい", vocab: [""] },
            { type: "kun", reading: "ぱん", vocab: [""] }
        ]
    },
    {
        kanji: "怨",
        readings: [
            { type: "kun", reading: "うら", vocab: [""] },
            { type: "kun", reading: "おん", vocab: [""] }
        ]
    },
    {
        kanji: "苑",
        readings: [
            { type: "kun", reading: "えん", vocab: [""] }
        ]
    },
    {
        kanji: "宛",
        readings: [
            { type: "kun", reading: "あ", vocab: [""] },
            { type: "kun", reading: "あて", vocab: [""] }
        ]
    },
    {
        kanji: "碗",
        readings: [
            { type: "kun", reading: "わん", vocab: [""] }
        ]
    },
    {
        kanji: "腕",
        readings: [
            { type: "kun", reading: "うで", vocab: [""] },
            { type: "kun", reading: "わん", vocab: [""] }
        ]
    },
    {
        kanji: "却",
        readings: [
            { type: "kun", reading: "きゃく", vocab: [""] },
            { type: "kun", reading: "きゃっ", vocab: [""] }
        ]
    },
    {
        kanji: "脚",
        readings: [
            { type: "kun", reading: "あし", vocab: [""] },
            { type: "kun", reading: "きゃく", vocab: [""] }
        ]
    },
    {
        kanji: "犯",
        readings: [
            { type: "kun", reading: "おか", vocab: [""] },
            { type: "kun", reading: "はん", vocab: [""] }
        ]
    },
    {
        kanji: "狂",
        readings: [
            { type: "kun", reading: "きょう", vocab: [""] },
            { type: "kun", reading: "くる", vocab: [""] }
        ]
    },
    {
        kanji: "獄",
        readings: [
            { type: "kun", reading: "ごく", vocab: [""] }
        ]
    },
    {
        kanji: "非",
        readings: [
            { type: "kun", reading: "ひ", vocab: [""] }
        ]
    },
    {
        kanji: "排",
        readings: [
            { type: "kun", reading: "はい", vocab: [""] }
        ]
    },
    {
        kanji: "俳",
        readings: [
            { type: "kun", reading: "はい", vocab: [""] }
        ]
    },
    {
        kanji: "罪",
        readings: [
            { type: "kun", reading: "ざい", vocab: [""] },
            { type: "kun", reading: "つみ", vocab: [""] }
        ]
    },
    {
        kanji: "罰",
        readings: [
            { type: "kun", reading: "ばっ", vocab: [""] },
            { type: "kun", reading: "ばつ", vocab: [""] }
        ]
    },
    {
        kanji: "伴",
        readings: [
            { type: "kun", reading: "ともな", vocab: [""] },
            { type: "kun", reading: "はん", vocab: [""] }
        ]
    },
    {
        kanji: "判",
        readings: [
            { type: "kun", reading: "はん", vocab: [""] },
            { type: "kun", reading: "ばん", vocab: [""] }
        ]
    },
    {
        kanji: "評",
        readings: [
            { type: "kun", reading: "ひょう", vocab: [""] }
        ]
    },
    {
        kanji: "批",
        readings: [
            { type: "kun", reading: "ひ", vocab: [""] }
        ]
    },
    {
        kanji: "帥",
        readings: [
            { type: "kun", reading: "すい", vocab: [""] }
        ]
    },
    {
        kanji: "師",
        readings: [
            { type: "kun", reading: "し", vocab: [""] }
        ]
    },
    {
        kanji: "座",
        readings: [
            { type: "kun", reading: "ざ", vocab: [""] },
            { type: "kun", reading: "すわ", vocab: [""] }
        ]
    },
    {
        kanji: "坐",
        readings: [
            { type: "kun", reading: "ざ", vocab: [""] },
            { type: "kun", reading: "すわ", vocab: [""] }
        ]
    },
    {
        kanji: "卒",
        readings: [
            { type: "kun", reading: "そっ", vocab: [""] },
            { type: "kun", reading: "そつ", vocab: [""] }
        ]
    },
    {
        kanji: "率",
        readings: [
            { type: "kun", reading: "そっ", vocab: [""] },
            { type: "kun", reading: "そつ", vocab: [""] },
            { type: "kun", reading: "ひき", vocab: [""] },
            { type: "kun", reading: "りつ", vocab: [""] }
        ]
    },
    {
        kanji: "傘",
        readings: [
            { type: "kun", reading: "かさ", vocab: [""] },
            { type: "kun", reading: "がさ", vocab: [""] },
            { type: "kun", reading: "さん", vocab: [""] }
        ]
    },
    {
        kanji: "笠",
        readings: [
            { type: "kun", reading: "かさ", vocab: [""] },
            { type: "kun", reading: "がさ", vocab: [""] }
        ]
    },
    {
        kanji: "星",
        readings: [
            { type: "kun", reading: "せい", vocab: [""] },
            { type: "kun", reading: "ほし", vocab: [""] },
            { type: "kun", reading: "ぼし", vocab: [""] }
        ]
    },
    {
        kanji: "汁",
        readings: [
            { type: "kun", reading: "しる", vocab: [""] },
            { type: "kun", reading: "じゅう", vocab: [""] },
            { type: "kun", reading: "じる", vocab: [""] }
        ]
    },
    {
        kanji: "斗",
        readings: [
            { type: "kun", reading: "と", vocab: [""] }
        ]
    },
    {
        kanji: "料",
        readings: [
            { type: "kun", reading: "りょう", vocab: [""] }
        ]
    },
    {
        kanji: "科",
        readings: [
            { type: "kun", reading: "か", vocab: [""] }
        ]
    },
    {
        kanji: "然",
        readings: [
            { type: "kun", reading: "ぜん", vocab: [""] },
            { type: "kun", reading: "ねん", vocab: [""] }
        ]
    },
    {
        kanji: "燃",
        readings: [
            { type: "kun", reading: "ねん", vocab: [""] },
            { type: "kun", reading: "も", vocab: [""] }
        ]
    },
    {
        kanji: "黙",
        readings: [
            { type: "kun", reading: "だま", vocab: [""] },
            { type: "kun", reading: "もく", vocab: [""] },
            { type: "kun", reading: "もだ", vocab: [""] }
        ]
    },
    {
        kanji: "獣",
        readings: [
            { type: "kun", reading: "けもの", vocab: [""] },
            { type: "kun", reading: "じゅう", vocab: [""] }
        ]
    },
    {
        kanji: "猟",
        readings: [
            { type: "kun", reading: "りょう", vocab: [""] }
        ]
    },
    {
        kanji: "漁",
        readings: [
            { type: "kun", reading: "ぎょ", vocab: [""] },
            { type: "kun", reading: "りょう", vocab: [""] }
        ]
    },
    {
        kanji: "狩",
        readings: [
            { type: "kun", reading: "か", vocab: [""] },
            { type: "kun", reading: "かり", vocab: [""] },
            { type: "kun", reading: "しゅ", vocab: [""] }
        ]
    },
    {
        kanji: "猛",
        readings: [
            { type: "kun", reading: "もう", vocab: [""] }
        ]
    },
    {
        kanji: "煙",
        readings: [
            { type: "kun", reading: "えん", vocab: [""] },
            { type: "kun", reading: "けむ", vocab: [""] },
            { type: "kun", reading: "けむり", vocab: [""] },
            { type: "kun", reading: "たばこ", vocab: [""] }
        ]
    },
    {
        kanji: "焼",
        readings: [
            { type: "kun", reading: "しょう", vocab: [""] },
            { type: "kun", reading: "や", vocab: [""] },
            { type: "kun", reading: "やけ", vocab: [""] }
        ]
    },
    {
        kanji: "暁",
        readings: [
            { type: "kun", reading: "あかつき", vocab: [""] }
        ]
    },
    {
        kanji: "旧",
        readings: [
            { type: "kun", reading: "きゅう", vocab: [""] }
        ]
    },
    {
        kanji: "児",
        readings: [
            { type: "kun", reading: "こ", vocab: [""] },
            { type: "kun", reading: "じ", vocab: [""] },
            { type: "kun", reading: "に", vocab: [""] }
        ]
    },
    {
        kanji: "亦",
        readings: [
            { type: "kun", reading: "また", vocab: [""] }
        ]
    },
    {
        kanji: "赤",
        readings: [
            { type: "kun", reading: "あか", vocab: [""] },
            { type: "kun", reading: "か", vocab: [""] },
            { type: "kun", reading: "せき", vocab: [""] }
        ]
    },
    {
        kanji: "変",
        readings: [
            { type: "kun", reading: "か", vocab: [""] },
            { type: "kun", reading: "かわ", vocab: [""] },
            { type: "kun", reading: "が", vocab: [""] },
            { type: "kun", reading: "がわ", vocab: [""] },
            { type: "kun", reading: "へん", vocab: [""] }
        ]
    },
    {
        kanji: "蛮",
        readings: [
            { type: "kun", reading: "ばん", vocab: [""] }
        ]
    },
    {
        kanji: "恋",
        readings: [
            { type: "kun", reading: "こい", vocab: [""] },
            { type: "kun", reading: "れん", vocab: [""] }
        ]
    },
    {
        kanji: "愛",
        readings: [
            { type: "kun", reading: "あ", vocab: [""] },
            { type: "kun", reading: "あい", vocab: [""] },
            { type: "kun", reading: "いと", vocab: [""] }
        ]
    },
    {
        kanji: "憂",
        readings: [
            { type: "kun", reading: "う", vocab: [""] },
            { type: "kun", reading: "ゆう", vocab: [""] }
        ]
    },
    {
        kanji: "優",
        readings: [
            { type: "kun", reading: "すぐ", vocab: [""] },
            { type: "kun", reading: "まさ", vocab: [""] },
            { type: "kun", reading: "やさ", vocab: [""] },
            { type: "kun", reading: "ゆ", vocab: [""] },
            { type: "kun", reading: "ゆう", vocab: [""] }
        ]
    },
    {
        kanji: "栗",
        readings: [
            { type: "kun", reading: "くり", vocab: [""] }
        ]
    },
    {
        kanji: "票",
        readings: [
            { type: "kun", reading: "ひょう", vocab: [""] },
            { type: "kun", reading: "ぴょう", vocab: [""] }
        ]
    },
    {
        kanji: "標",
        readings: [
            { type: "kun", reading: "ひょう", vocab: [""] }
        ]
    },
    {
        kanji: "漂",
        readings: [
            { type: "kun", reading: "ただ", vocab: [""] },
            { type: "kun", reading: "ただよ", vocab: [""] },
            { type: "kun", reading: "ひょう", vocab: [""] }
        ]
    },
    {
        kanji: "遷",
        readings: [
            { type: "kun", reading: "せん", vocab: [""] }
        ]
    },
    {
        kanji: "各",
        readings: [
            { type: "kun", reading: "おの", vocab: [""] },
            { type: "kun", reading: "かく", vocab: [""] },
            { type: "kun", reading: "かっ", vocab: [""] }
        ]
    },
    {
        kanji: "客",
        readings: [
            { type: "kun", reading: "かく", vocab: [""] },
            { type: "kun", reading: "きゃく", vocab: [""] }
        ]
    },
    {
        kanji: "路",
        readings: [
            { type: "kun", reading: "じ", vocab: [""] },
            { type: "kun", reading: "ろ", vocab: [""] }
        ]
    },
    {
        kanji: "格",
        readings: [
            { type: "kun", reading: "かく", vocab: [""] },
            { type: "kun", reading: "かっ", vocab: [""] },
            { type: "kun", reading: "こう", vocab: [""] }
        ]
    },
    {
        kanji: "絡",
        readings: [
            { type: "kun", reading: "から", vocab: [""] },
            { type: "kun", reading: "らく", vocab: [""] }
        ]
    },
    {
        kanji: "略",
        readings: [
            { type: "kun", reading: "りゃく", vocab: [""] }
        ]
    },
    {
        kanji: "閣",
        readings: [
            { type: "kun", reading: "かく", vocab: [""] },
            { type: "kun", reading: "かっ", vocab: [""] }
        ]
    },
    {
        kanji: "落",
        readings: [
            { type: "kun", reading: "お", vocab: [""] },
            { type: "kun", reading: "おと", vocab: [""] },
            { type: "kun", reading: "らく", vocab: [""] },
            { type: "kun", reading: "らっ", vocab: [""] }
        ]
    },
    {
        kanji: "南",
        readings: [
            { type: "kun", reading: "なん", vocab: [""] },
            { type: "kun", reading: "みなみ", vocab: [""] }
        ]
    },
    {
        kanji: "西",
        readings: [
            { type: "kun", reading: "ざい", vocab: [""] },
            { type: "kun", reading: "すい", vocab: [""] },
            { type: "kun", reading: "せい", vocab: [""] },
            { type: "kun", reading: "にし", vocab: [""] }
        ]
    },
    {
        kanji: "酉",
        readings: [
            { type: "kun", reading: "とり", vocab: [""] }
        ]
    },
    {
        kanji: "酒",
        readings: [
            { type: "kun", reading: "さか", vocab: [""] },
            { type: "kun", reading: "さけ", vocab: [""] },
            { type: "kun", reading: "ざけ", vocab: [""] },
            { type: "kun", reading: "しゅ", vocab: [""] }
        ]
    },
    {
        kanji: "洒",
        readings: [
            { type: "kun", reading: "しゃれ", vocab: [""] }
        ]
    },
    {
        kanji: "配",
        readings: [
            { type: "kun", reading: "くば", vocab: [""] },
            { type: "kun", reading: "はい", vocab: [""] },
            { type: "kun", reading: "ぱい", vocab: [""] }
        ]
    },
    {
        kanji: "酸",
        readings: [
            { type: "kun", reading: "さん", vocab: [""] }
        ]
    },
    {
        kanji: "猶",
        readings: [
            { type: "kun", reading: "ゆう", vocab: [""] }
        ]
    },
    {
        kanji: "尊",
        readings: [
            { type: "kun", reading: "そん", vocab: [""] },
            { type: "kun", reading: "ぞん", vocab: [""] },
            { type: "kun", reading: "とうと", vocab: [""] }
        ]
    },
    {
        kanji: "遵",
        readings: [
            { type: "kun", reading: "じゅん", vocab: [""] }
        ]
    },
    {
        kanji: "導",
        readings: [
            { type: "kun", reading: "どう", vocab: [""] },
            { type: "kun", reading: "みちび", vocab: [""] }
        ]
    },
    {
        kanji: "敬",
        readings: [
            { type: "kun", reading: "うやま", vocab: [""] },
            { type: "kun", reading: "ぎょう", vocab: [""] },
            { type: "kun", reading: "けい", vocab: [""] }
        ]
    },
    {
        kanji: "警",
        readings: [
            { type: "kun", reading: "けい", vocab: [""] }
        ]
    },
    {
        kanji: "驚",
        readings: [
            { type: "kun", reading: "おどろ", vocab: [""] },
            { type: "kun", reading: "きょう", vocab: [""] }
        ]
    },
    {
        kanji: "散",
        readings: [
            { type: "kun", reading: "さん", vocab: [""] },
            { type: "kun", reading: "ち", vocab: [""] },
            { type: "kun", reading: "ぢ", vocab: [""] }
        ]
    },
    {
        kanji: "敢",
        readings: [
            { type: "kun", reading: "あ", vocab: [""] },
            { type: "kun", reading: "かん", vocab: [""] }
        ]
    },
    {
        kanji: "厳",
        readings: [
            { type: "kun", reading: "おごそ", vocab: [""] },
            { type: "kun", reading: "きび", vocab: [""] },
            { type: "kun", reading: "げん", vocab: [""] }
        ]
    },
    {
        kanji: "仏",
        readings: [
            { type: "kun", reading: "ふつ", vocab: [""] },
            { type: "kun", reading: "ぶっ", vocab: [""] },
            { type: "kun", reading: "ぶつ", vocab: [""] },
            { type: "kun", reading: "ほとけ", vocab: [""] }
        ]
    },
    {
        kanji: "払",
        readings: [
            { type: "kun", reading: "はら", vocab: [""] },
            { type: "kun", reading: "はらい", vocab: [""] },
            { type: "kun", reading: "ばら", vocab: [""] },
            { type: "kun", reading: "ばらい", vocab: [""] }
        ]
    },
    {
        kanji: "拡",
        readings: [
            { type: "kun", reading: "かく", vocab: [""] }
        ]
    },
    {
        kanji: "可",
        readings: [
            { type: "kun", reading: "か", vocab: [""] },
            { type: "kun", reading: "かわい", vocab: [""] }
        ]
    },
    {
        kanji: "何",
        readings: [
            { type: "kun", reading: "い", vocab: [""] },
            { type: "kun", reading: "か", vocab: [""] },
            { type: "kun", reading: "ど", vocab: [""] },
            { type: "kun", reading: "どちら", vocab: [""] },
            { type: "kun", reading: "な", vocab: [""] },
            { type: "kun", reading: "なに", vocab: [""] },
            { type: "kun", reading: "なん", vocab: [""] }
        ]
    },
    {
        kanji: "苛",
        readings: [
            { type: "kun", reading: "いじ", vocab: [""] },
            { type: "kun", reading: "いら", vocab: [""] },
            { type: "kun", reading: "か", vocab: [""] }
        ]
    },
    {
        kanji: "荷",
        readings: [
            { type: "kun", reading: "か", vocab: [""] },
            { type: "kun", reading: "に", vocab: [""] }
        ]
    },
    {
        kanji: "河",
        readings: [
            { type: "kun", reading: "か", vocab: [""] },
            { type: "kun", reading: "かわ", vocab: [""] },
            { type: "kun", reading: "が", vocab: [""] },
            { type: "kun", reading: "ふ", vocab: [""] }
        ]
    },
    {
        kanji: "阿",
        readings: [
            { type: "kun", reading: "あ", vocab: [""] }
        ]
    },
    {
        kanji: "司",
        readings: [
            { type: "kun", reading: "し", vocab: [""] }
        ]
    },
    {
        kanji: "伺",
        readings: [
            { type: "kun", reading: "うかが", vocab: [""] }
        ]
    },
    {
        kanji: "詞",
        readings: [
            { type: "kun", reading: "し", vocab: [""] }
        ]
    },
    {
        kanji: "飼",
        readings: [
            { type: "kun", reading: "か", vocab: [""] },
            { type: "kun", reading: "し", vocab: [""] }
        ]
    },
    {
        kanji: "冊",
        readings: [
            { type: "kun", reading: "さっ", vocab: [""] },
            { type: "kun", reading: "さつ", vocab: [""] }
        ]
    },
    {
        kanji: "嗣",
        readings: [
            { type: "kun", reading: "し", vocab: [""] }
        ]
    },
    {
        kanji: "覗",
        readings: [
            { type: "kun", reading: "のぞ", vocab: [""] }
        ]
    },
    {
        kanji: "歌",
        readings: [
            { type: "kun", reading: "うた", vocab: [""] },
            { type: "kun", reading: "か", vocab: [""] }
        ]
    },
    {
        kanji: "唄",
        readings: [
            { type: "kun", reading: "うた", vocab: [""] }
        ]
    },
    {
        kanji: "負",
        readings: [
            { type: "kun", reading: "お", vocab: [""] },
            { type: "kun", reading: "おい", vocab: [""] },
            { type: "kun", reading: "ふ", vocab: [""] },
            { type: "kun", reading: "ぶ", vocab: [""] },
            { type: "kun", reading: "ま", vocab: [""] }
        ]
    },
    {
        kanji: "敗",
        readings: [
            { type: "kun", reading: "はい", vocab: [""] },
            { type: "kun", reading: "ぱい", vocab: [""] },
            { type: "kun", reading: "ま", vocab: [""] },
            { type: "kun", reading: "やぶ", vocab: [""] }
        ]
    },
    {
        kanji: "責",
        readings: [
            { type: "kun", reading: "せ", vocab: [""] },
            { type: "kun", reading: "せき", vocab: [""] }
        ]
    },
    {
        kanji: "積",
        readings: [
            { type: "kun", reading: "せき", vocab: [""] },
            { type: "kun", reading: "つ", vocab: [""] },
            { type: "kun", reading: "つみ", vocab: [""] },
            { type: "kun", reading: "つも", vocab: [""] },
            { type: "kun", reading: "づ", vocab: [""] }
        ]
    },
    {
        kanji: "債",
        readings: [
            { type: "kun", reading: "さい", vocab: [""] }
        ]
    },
    {
        kanji: "漬",
        readings: [
            { type: "kun", reading: "つ", vocab: [""] },
            { type: "kun", reading: "づ", vocab: [""] }
        ]
    },
    {
        kanji: "紡",
        readings: [
            { type: "kun", reading: "つむ", vocab: [""] },
            { type: "kun", reading: "ぼう", vocab: [""] }
        ]
    },
    {
        kanji: "績",
        readings: [
            { type: "kun", reading: "せき", vocab: [""] }
        ]
    },
    {
        kanji: "具",
        readings: [
            { type: "kun", reading: "ぐ", vocab: [""] }
        ]
    },
    {
        kanji: "真",
        readings: [
            { type: "kun", reading: "しん", vocab: [""] },
            { type: "kun", reading: "ま", vocab: [""] },
            { type: "kun", reading: "まんなか", vocab: [""] }
        ]
    },
    {
        kanji: "直",
        readings: [
            { type: "kun", reading: "じき", vocab: [""] },
            { type: "kun", reading: "す", vocab: [""] },
            { type: "kun", reading: "ただ", vocab: [""] },
            { type: "kun", reading: "ちょく", vocab: [""] },
            { type: "kun", reading: "ちょっ", vocab: [""] },
            { type: "kun", reading: "なお", vocab: [""] }
        ]
    },
    {
        kanji: "植",
        readings: [
            { type: "kun", reading: "う", vocab: [""] },
            { type: "kun", reading: "うえ", vocab: [""] },
            { type: "kun", reading: "しょく", vocab: [""] }
        ]
    },
    {
        kanji: "殖",
        readings: [
            { type: "kun", reading: "しょく", vocab: [""] },
            { type: "kun", reading: "ふ", vocab: [""] }
        ]
    },
    {
        kanji: "値",
        readings: [
            { type: "kun", reading: "あたい", vocab: [""] },
            { type: "kun", reading: "ち", vocab: [""] },
            { type: "kun", reading: "ね", vocab: [""] }
        ]
    },
    {
        kanji: "置",
        readings: [
            { type: "kun", reading: "お", vocab: [""] },
            { type: "kun", reading: "ち", vocab: [""] }
        ]
    },
    {
        kanji: "県",
        readings: [
            { type: "kun", reading: "けん", vocab: [""] }
        ]
    },
    {
        kanji: "州",
        readings: [
            { type: "kun", reading: "しゅう", vocab: [""] },
            { type: "kun", reading: "しゅうりつ", vocab: [""] }
        ]
    },
    {
        kanji: "洲",
        readings: [
            { type: "kun", reading: "す", vocab: [""] }
        ]
    },
    {
        kanji: "接",
        readings: [
            { type: "kun", reading: "せっ", vocab: [""] },
            { type: "kun", reading: "せつ", vocab: [""] },
            { type: "kun", reading: "つ", vocab: [""] }
        ]
    },
    {
        kanji: "継",
        readings: [
            { type: "kun", reading: "けい", vocab: [""] },
            { type: "kun", reading: "つ", vocab: [""] }
        ]
    },
    {
        kanji: "断",
        readings: [
            { type: "kun", reading: "ことわ", vocab: [""] },
            { type: "kun", reading: "た", vocab: [""] },
            { type: "kun", reading: "だん", vocab: [""] }
        ]
    },
    {
        kanji: "応",
        readings: [
            { type: "kun", reading: "おう", vocab: [""] },
            { type: "kun", reading: "こた", vocab: [""] },
            { type: "kun", reading: "のう", vocab: [""] }
        ]
    },
    {
        kanji: "床",
        readings: [
            { type: "kun", reading: "しょう", vocab: [""] },
            { type: "kun", reading: "とこ", vocab: [""] },
            { type: "kun", reading: "ゆか", vocab: [""] }
        ]
    },
    {
        kanji: "麻",
        readings: [
            { type: "kun", reading: "あざ", vocab: [""] },
            { type: "kun", reading: "ま", vocab: [""] }
        ]
    },
    {
        kanji: "歴",
        readings: [
            { type: "kun", reading: "れき", vocab: [""] }
        ]
    },
    {
        kanji: "暦",
        readings: [
            { type: "kun", reading: "れき", vocab: [""] }
        ]
    },
    {
        kanji: "臨",
        readings: [
            { type: "kun", reading: "のぞ", vocab: [""] },
            { type: "kun", reading: "りん", vocab: [""] }
        ]
    },
    {
        kanji: "園",
        readings: [
            { type: "kun", reading: "えん", vocab: [""] },
            { type: "kun", reading: "その", vocab: [""] },
            { type: "kun", reading: "ぞの", vocab: [""] }
        ]
    },
    {
        kanji: "遠",
        readings: [
            { type: "kun", reading: "えん", vocab: [""] },
            { type: "kun", reading: "おん", vocab: [""] },
            { type: "kun", reading: "とお", vocab: [""] }
        ]
    },
    {
        kanji: "与",
        readings: [
            { type: "kun", reading: "あた", vocab: [""] },
            { type: "kun", reading: "よ", vocab: [""] }
        ]
    },
    {
        kanji: "写",
        readings: [
            { type: "kun", reading: "うつ", vocab: [""] },
            { type: "kun", reading: "しゃ", vocab: [""] },
            { type: "kun", reading: "じゃ", vocab: [""] }
        ]
    },
    {
        kanji: "移",
        readings: [
            { type: "kun", reading: "い", vocab: [""] },
            { type: "kun", reading: "うつ", vocab: [""] }
        ]
    },
    {
        kanji: "卸",
        readings: [
            { type: "kun", reading: "おろ", vocab: [""] },
            { type: "kun", reading: "おろし", vocab: [""] }
        ]
    },
    {
        kanji: "御",
        readings: [
            { type: "kun", reading: "お", vocab: [""] },
            { type: "kun", reading: "ぎょ", vocab: [""] },
            { type: "kun", reading: "ご", vocab: [""] }
        ]
    },
    {
        kanji: "複",
        readings: [
            { type: "kun", reading: "ふく", vocab: [""] }
        ]
    },
    {
        kanji: "腹",
        readings: [
            { type: "kun", reading: "なか", vocab: [""] },
            { type: "kun", reading: "はら", vocab: [""] },
            { type: "kun", reading: "ばら", vocab: [""] },
            { type: "kun", reading: "ぱら", vocab: [""] },
            { type: "kun", reading: "ふく", vocab: [""] },
            { type: "kun", reading: "ふっ", vocab: [""] },
            { type: "kun", reading: "ぷく", vocab: [""] }
        ]
    },
    {
        kanji: "復",
        readings: [
            { type: "kun", reading: "ふく", vocab: [""] },
            { type: "kun", reading: "ふっ", vocab: [""] },
            { type: "kun", reading: "ぷく", vocab: [""] }
        ]
    },
    {
        kanji: "往",
        readings: [
            { type: "kun", reading: "おう", vocab: [""] }
        ]
    },
    {
        kanji: "柱",
        readings: [
            { type: "kun", reading: "ちゅう", vocab: [""] },
            { type: "kun", reading: "はしら", vocab: [""] },
            { type: "kun", reading: "ばしら", vocab: [""] }
        ]
    },
    {
        kanji: "征",
        readings: [
            { type: "kun", reading: "せい", vocab: [""] }
        ]
    },
    {
        kanji: "従",
        readings: [
            { type: "kun", reading: "したが", vocab: [""] },
            { type: "kun", reading: "じゅう", vocab: [""] }
        ]
    },
    {
        kanji: "徒",
        readings: [
            { type: "kun", reading: "と", vocab: [""] }
        ]
    },
    {
        kanji: "縦",
        readings: [
            { type: "kun", reading: "じゅう", vocab: [""] },
            { type: "kun", reading: "たて", vocab: [""] }
        ]
    },
    {
        kanji: "延",
        readings: [
            { type: "kun", reading: "えん", vocab: [""] },
            { type: "kun", reading: "の", vocab: [""] },
            { type: "kun", reading: "のぶ", vocab: [""] }
        ]
    },
    {
        kanji: "伸",
        readings: [
            { type: "kun", reading: "しん", vocab: [""] },
            { type: "kun", reading: "の", vocab: [""] }
        ]
    },
    {
        kanji: "紳",
        readings: [
            { type: "kun", reading: "しん", vocab: [""] }
        ]
    },
    {
        kanji: "縮",
        readings: [
            { type: "kun", reading: "しゅく", vocab: [""] },
            { type: "kun", reading: "ちぢ", vocab: [""] }
        ]
    },
    {
        kanji: "誕",
        readings: [
            { type: "kun", reading: "たん", vocab: [""] }
        ]
    },
    {
        kanji: "廷",
        readings: [
            { type: "kun", reading: "てい", vocab: [""] }
        ]
    },
    {
        kanji: "庭",
        readings: [
            { type: "kun", reading: "てい", vocab: [""] },
            { type: "kun", reading: "にわ", vocab: [""] }
        ]
    },
    {
        kanji: "艇",
        readings: [
            { type: "kun", reading: "てい", vocab: [""] }
        ]
    },
    {
        kanji: "展",
        readings: [
            { type: "kun", reading: "てん", vocab: [""] }
        ]
    },
    {
        kanji: "殿",
        readings: [
            { type: "kun", reading: "てん", vocab: [""] },
            { type: "kun", reading: "でん", vocab: [""] }
        ]
    },
    {
        kanji: "異",
        readings: [
            { type: "kun", reading: "い", vocab: [""] },
            { type: "kun", reading: "こと", vocab: [""] }
        ]
    },
    {
        kanji: "翼",
        readings: [
            { type: "kun", reading: "つばさ", vocab: [""] },
            { type: "kun", reading: "よく", vocab: [""] }
        ]
    },
    {
        kanji: "累",
        readings: [
            { type: "kun", reading: "るい", vocab: [""] }
        ]
    },
    {
        kanji: "塁",
        readings: [
            { type: "kun", reading: "るい", vocab: [""] }
        ]
    },
    {
        kanji: "吏",
        readings: [
            { type: "kun", reading: "り", vocab: [""] }
        ]
    },
    {
        kanji: "使",
        readings: [
            { type: "kun", reading: "し", vocab: [""] },
            { type: "kun", reading: "つか", vocab: [""] }
        ]
    },
    {
        kanji: "史",
        readings: [
            { type: "kun", reading: "し", vocab: [""] }
        ]
    },
    {
        kanji: "更",
        readings: [
            { type: "kun", reading: "こう", vocab: [""] },
            { type: "kun", reading: "さら", vocab: [""] },
            { type: "kun", reading: "ふ", vocab: [""] }
        ]
    },
    {
        kanji: "便",
        readings: [
            { type: "kun", reading: "たよ", vocab: [""] },
            { type: "kun", reading: "びん", vocab: [""] },
            { type: "kun", reading: "べん", vocab: [""] }
        ]
    },
    {
        kanji: "硬",
        readings: [
            { type: "kun", reading: "かた", vocab: [""] },
            { type: "kun", reading: "こう", vocab: [""] }
        ]
    },
    {
        kanji: "能",
        readings: [
            { type: "kun", reading: "のう", vocab: [""] }
        ]
    },
    {
        kanji: "態",
        readings: [
            { type: "kun", reading: "たい", vocab: [""] }
        ]
    },
    {
        kanji: "熊",
        readings: [
            { type: "kun", reading: "くま", vocab: [""] },
            { type: "kun", reading: "ぐま", vocab: [""] }
        ]
    },
    {
        kanji: "罷",
        readings: [
            { type: "kun", reading: "ひ", vocab: [""] }
        ]
    },
    {
        kanji: "羅",
        readings: [
            { type: "kun", reading: "ら", vocab: [""] }
        ]
    },
    {
        kanji: "雲",
        readings: [
            { type: "kun", reading: "うんなんしょう", vocab: [""] },
            { type: "kun", reading: "くも", vocab: [""] }
        ]
    },
    {
        kanji: "曇",
        readings: [
            { type: "kun", reading: "くも", vocab: [""] },
            { type: "kun", reading: "ぐも", vocab: [""] },
            { type: "kun", reading: "どん", vocab: [""] }
        ]
    },
    {
        kanji: "雪",
        readings: [
            { type: "kun", reading: "せつ", vocab: [""] },
            { type: "kun", reading: "ゆき", vocab: [""] }
        ]
    },
    {
        kanji: "雷",
        readings: [
            { type: "kun", reading: "かみなり", vocab: [""] },
            { type: "kun", reading: "らい", vocab: [""] }
        ]
    },
    {
        kanji: "零",
        readings: [
            { type: "kun", reading: "れい", vocab: [""] }
        ]
    },
    {
        kanji: "震",
        readings: [
            { type: "kun", reading: "しん", vocab: [""] },
            { type: "kun", reading: "ふる", vocab: [""] },
            { type: "kun", reading: "ぶる", vocab: [""] }
        ]
    },
    {
        kanji: "振",
        readings: [
            { type: "kun", reading: "しん", vocab: [""] },
            { type: "kun", reading: "ふ", vocab: [""] },
            { type: "kun", reading: "ふり", vocab: [""] },
            { type: "kun", reading: "ふる", vocab: [""] },
            { type: "kun", reading: "ぶ", vocab: [""] }
        ]
    },
    {
        kanji: "久",
        readings: [
            { type: "kun", reading: "きゅう", vocab: [""] },
            { type: "kun", reading: "く", vocab: [""] },
            { type: "kun", reading: "ひさ", vocab: [""] }
        ]
    },
    {
        kanji: "賑",
        readings: [
            { type: "kun", reading: "にぎ", vocab: [""] }
        ]
    },
    {
        kanji: "丘",
        readings: [
            { type: "kun", reading: "おか", vocab: [""] },
            { type: "kun", reading: "きゅう", vocab: [""] }
        ]
    },
    {
        kanji: "兵",
        readings: [
            { type: "kun", reading: "ひょう", vocab: [""] },
            { type: "kun", reading: "へい", vocab: [""] },
            { type: "kun", reading: "ぺい", vocab: [""] }
        ]
    },
    {
        kanji: "岳",
        readings: [
            { type: "kun", reading: "がく", vocab: [""] }
        ]
    },
    {
        kanji: "浜",
        readings: [
            { type: "kun", reading: "はま", vocab: [""] },
            { type: "kun", reading: "ひん", vocab: [""] }
        ]
    },
    {
        kanji: "舎",
        readings: [
            { type: "kun", reading: "しゃ", vocab: [""] }
        ]
    },
    {
        kanji: "再",
        readings: [
            { type: "kun", reading: "さ", vocab: [""] },
            { type: "kun", reading: "さい", vocab: [""] },
            { type: "kun", reading: "ふたた", vocab: [""] }
        ]
    },
    {
        kanji: "虎",
        readings: [
            { type: "kun", reading: "こ", vocab: [""] },
            { type: "kun", reading: "とら", vocab: [""] }
        ]
    },
    {
        kanji: "寅",
        readings: [
            { type: "kun", reading: "とら", vocab: [""] }
        ]
    },
    {
        kanji: "演",
        readings: [
            { type: "kun", reading: "えん", vocab: [""] }
        ]
    },
    {
        kanji: "黄",
        readings: [
            { type: "kun", reading: "おう", vocab: [""] },
            { type: "kun", reading: "き", vocab: [""] },
            { type: "kun", reading: "フアン", vocab: [""] }
        ]
    },
    {
        kanji: "横",
        readings: [
            { type: "kun", reading: "おう", vocab: [""] },
            { type: "kun", reading: "よこ", vocab: [""] }
        ]
    },
    {
        kanji: "構",
        readings: [
            { type: "kun", reading: "かま", vocab: [""] },
            { type: "kun", reading: "こう", vocab: [""] }
        ]
    },
    {
        kanji: "講",
        readings: [
            { type: "kun", reading: "こう", vocab: [""] }
        ]
    },
    {
        kanji: "購",
        readings: [
            { type: "kun", reading: "こう", vocab: [""] }
        ]
    },
    {
        kanji: "溝",
        readings: [
            { type: "kun", reading: "こう", vocab: [""] },
            { type: "kun", reading: "みぞ", vocab: [""] }
        ]
    },
    {
        kanji: "仮",
        readings: [
            { type: "kun", reading: "か", vocab: [""] },
            { type: "kun", reading: "かり", vocab: [""] },
            { type: "kun", reading: "け", vocab: [""] }
        ]
    },
    {
        kanji: "片",
        readings: [
            { type: "kun", reading: "かた", vocab: [""] },
            { type: "kun", reading: "へん", vocab: [""] },
            { type: "kun", reading: "ぺん", vocab: [""] }
        ]
    },
    {
        kanji: "版",
        readings: [
            { type: "kun", reading: "はん", vocab: [""] },
            { type: "kun", reading: "ばん", vocab: [""] },
            { type: "kun", reading: "ぱん", vocab: [""] }
        ]
    },
    {
        kanji: "板",
        readings: [
            { type: "kun", reading: "いた", vocab: [""] },
            { type: "kun", reading: "ばん", vocab: [""] },
            { type: "kun", reading: "ぱん", vocab: [""] }
        ]
    },
    {
        kanji: "販",
        readings: [
            { type: "kun", reading: "はん", vocab: [""] },
            { type: "kun", reading: "ぱん", vocab: [""] }
        ]
    },
    {
        kanji: "義",
        readings: [
            { type: "kun", reading: "ぎ", vocab: [""] }
        ]
    },
    {
        kanji: "議",
        readings: [
            { type: "kun", reading: "ぎ", vocab: [""] }
        ]
    },
    {
        kanji: "儀",
        readings: [
            { type: "kun", reading: "ぎ", vocab: [""] }
        ]
    },
    {
        kanji: "犠",
        readings: [
            { type: "kun", reading: "ぎ", vocab: [""] }
        ]
    },
    {
        kanji: "牲",
        readings: [
            { type: "kun", reading: "せい", vocab: [""] }
        ]
    },
    {
        kanji: "旨",
        readings: [
            { type: "kun", reading: "うま", vocab: [""] },
            { type: "kun", reading: "し", vocab: [""] },
            { type: "kun", reading: "むね", vocab: [""] }
        ]
    },
    {
        kanji: "指",
        readings: [
            { type: "kun", reading: "さ", vocab: [""] },
            { type: "kun", reading: "さし", vocab: [""] },
            { type: "kun", reading: "ざ", vocab: [""] },
            { type: "kun", reading: "し", vocab: [""] },
            { type: "kun", reading: "ゆび", vocab: [""] }
        ]
    },
    {
        kanji: "揮",
        readings: [
            { type: "kun", reading: "き", vocab: [""] }
        ]
    },
    {
        kanji: "輝",
        readings: [
            { type: "kun", reading: "かがや", vocab: [""] },
            { type: "kun", reading: "き", vocab: [""] }
        ]
    },
    {
        kanji: "刺",
        readings: [
            { type: "kun", reading: "さ", vocab: [""] },
            { type: "kun", reading: "さし", vocab: [""] },
            { type: "kun", reading: "し", vocab: [""] }
        ]
    },
    {
        kanji: "策",
        readings: [
            { type: "kun", reading: "さく", vocab: [""] }
        ]
    },
    {
        kanji: "差",
        readings: [
            { type: "kun", reading: "さ", vocab: [""] }
        ]
    },
    {
        kanji: "着",
        readings: [
            { type: "kun", reading: "き", vocab: [""] },
            { type: "kun", reading: "ぎ", vocab: [""] },
            { type: "kun", reading: "ちゃく", vocab: [""] },
            { type: "kun", reading: "つ", vocab: [""] }
        ]
    },
    {
        kanji: "看",
        readings: [
            { type: "kun", reading: "かん", vocab: [""] }
        ]
    },
    {
        kanji: "到",
        readings: [
            { type: "kun", reading: "いた", vocab: [""] },
            { type: "kun", reading: "とう", vocab: [""] }
        ]
    },
    {
        kanji: "倒",
        readings: [
            { type: "kun", reading: "たお", vocab: [""] },
            { type: "kun", reading: "とう", vocab: [""] },
            { type: "kun", reading: "どう", vocab: [""] }
        ]
    },
    {
        kanji: "論",
        readings: [
            { type: "kun", reading: "ろん", vocab: [""] }
        ]
    },
    {
        kanji: "倫",
        readings: [
            { type: "kun", reading: "りん", vocab: [""] }
        ]
    },
    {
        kanji: "輪",
        readings: [
            { type: "kun", reading: "りん", vocab: [""] },
            { type: "kun", reading: "わ", vocab: [""] }
        ]
    },
    {
        kanji: "輸",
        readings: [
            { type: "kun", reading: "ゆ", vocab: [""] }
        ]
    },
    {
        kanji: "諭",
        readings: [
            { type: "kun", reading: "さと", vocab: [""] }
        ]
    },
    {
        kanji: "愉",
        readings: [
            { type: "kun", reading: "ゆ", vocab: [""] }
        ]
    },
    {
        kanji: "癒",
        readings: [
            { type: "kun", reading: "いや", vocab: [""] },
            { type: "kun", reading: "ゆ", vocab: [""] }
        ]
    },
    {
        kanji: "台",
        readings: [
            { type: "kun", reading: "せりふ", vocab: [""] },
            { type: "kun", reading: "たい", vocab: [""] },
            { type: "kun", reading: "だい", vocab: [""] }
        ]
    },
    {
        kanji: "治",
        readings: [
            { type: "kun", reading: "おさ", vocab: [""] },
            { type: "kun", reading: "じ", vocab: [""] },
            { type: "kun", reading: "ち", vocab: [""] },
            { type: "kun", reading: "なお", vocab: [""] }
        ]
    },
    {
        kanji: "冶",
        readings: [
            { type: "kun", reading: "や", vocab: [""] }
        ]
    },
    {
        kanji: "療",
        readings: [
            { type: "kun", reading: "りょう", vocab: [""] }
        ]
    },
    {
        kanji: "僚",
        readings: [
            { type: "kun", reading: "りょう", vocab: [""] }
        ]
    },
    {
        kanji: "瞭",
        readings: [
            { type: "kun", reading: "りょう", vocab: [""] }
        ]
    },
    {
        kanji: "寮",
        readings: [
            { type: "kun", reading: "りょう", vocab: [""] }
        ]
    },
    {
        kanji: "始",
        readings: [
            { type: "kun", reading: "し", vocab: [""] },
            { type: "kun", reading: "はじ", vocab: [""] }
        ]
    },
    {
        kanji: "終",
        readings: [
            { type: "kun", reading: "お", vocab: [""] },
            { type: "kun", reading: "おわ", vocab: [""] },
            { type: "kun", reading: "しゅう", vocab: [""] },
            { type: "kun", reading: "じゅう", vocab: [""] }
        ]
    },
    {
        kanji: "了",
        readings: [
            { type: "kun", reading: "りょう", vocab: [""] }
        ]
    },
    {
        kanji: "承",
        readings: [
            { type: "kun", reading: "うけたまわ", vocab: [""] },
            { type: "kun", reading: "しょう", vocab: [""] }
        ]
    },
    {
        kanji: "蒸",
        readings: [
            { type: "kun", reading: "じょう", vocab: [""] },
            { type: "kun", reading: "む", vocab: [""] }
        ]
    },
    {
        kanji: "舞",
        readings: [
            { type: "kun", reading: "ぶ", vocab: [""] },
            { type: "kun", reading: "ま", vocab: [""] }
        ]
    },
    {
        kanji: "隣",
        readings: [
            { type: "kun", reading: "となり", vocab: [""] },
            { type: "kun", reading: "どなり", vocab: [""] },
            { type: "kun", reading: "りん", vocab: [""] }
        ]
    },
    {
        kanji: "瞬",
        readings: [
            { type: "kun", reading: "しゅん", vocab: [""] },
            { type: "kun", reading: "またた", vocab: [""] }
        ]
    },
    {
        kanji: "夢",
        readings: [
            { type: "kun", reading: "む", vocab: [""] },
            { type: "kun", reading: "ゆめ", vocab: [""] }
        ]
    },
    {
        kanji: "枝",
        readings: [
            { type: "kun", reading: "えだ", vocab: [""] },
            { type: "kun", reading: "ずえ", vocab: [""] }
        ]
    },
    {
        kanji: "技",
        readings: [
            { type: "kun", reading: "ぎ", vocab: [""] }
        ]
    },
    {
        kanji: "伎",
        readings: [
            { type: "kun", reading: "き", vocab: [""] },
            { type: "kun", reading: "ぎ", vocab: [""] }
        ]
    },
    {
        kanji: "岐",
        readings: [
            { type: "kun", reading: "き", vocab: [""] },
            { type: "kun", reading: "ぎ", vocab: [""] }
        ]
    },
    {
        kanji: "峠",
        readings: [
            { type: "kun", reading: "とうげ", vocab: [""] }
        ]
    },
    {
        kanji: "阜",
        readings: [
            { type: "kun", reading: "ふ", vocab: [""] }
        ]
    },
    {
        kanji: "急",
        readings: [
            { type: "kun", reading: "いそ", vocab: [""] },
            { type: "kun", reading: "きゅう", vocab: [""] }
        ]
    },
    {
        kanji: "争",
        readings: [
            { type: "kun", reading: "あらそ", vocab: [""] },
            { type: "kun", reading: "そう", vocab: [""] }
        ]
    },
    {
        kanji: "情",
        readings: [
            { type: "kun", reading: "じょう", vocab: [""] },
            { type: "kun", reading: "なさ", vocab: [""] }
        ]
    },
    {
        kanji: "清",
        readings: [
            { type: "kun", reading: "きよ", vocab: [""] },
            { type: "kun", reading: "せい", vocab: [""] }
        ]
    },
    {
        kanji: "晴",
        readings: [
            { type: "kun", reading: "せい", vocab: [""] },
            { type: "kun", reading: "は", vocab: [""] },
            { type: "kun", reading: "ば", vocab: [""] }
        ]
    },
    {
        kanji: "精",
        readings: [
            { type: "kun", reading: "しょう", vocab: [""] },
            { type: "kun", reading: "せい", vocab: [""] }
        ]
    },
    {
        kanji: "請",
        readings: [
            { type: "kun", reading: "う", vocab: [""] },
            { type: "kun", reading: "うけ", vocab: [""] },
            { type: "kun", reading: "せい", vocab: [""] }
        ]
    },
    {
        kanji: "静",
        readings: [
            { type: "kun", reading: "しず", vocab: [""] },
            { type: "kun", reading: "じ", vocab: [""] },
            { type: "kun", reading: "せい", vocab: [""] }
        ]
    },
    {
        kanji: "浄",
        readings: [
            { type: "kun", reading: "じょう", vocab: [""] }
        ]
    },
    {
        kanji: "算",
        readings: [
            { type: "kun", reading: "さん", vocab: [""] },
            { type: "kun", reading: "ざん", vocab: [""] },
            { type: "kun", reading: "そろばん", vocab: [""] }
        ]
    },
    {
        kanji: "答",
        readings: [
            { type: "kun", reading: "こた", vocab: [""] },
            { type: "kun", reading: "ごた", vocab: [""] },
            { type: "kun", reading: "とう", vocab: [""] },
            { type: "kun", reading: "どう", vocab: [""] }
        ]
    },
    {
        kanji: "符",
        readings: [
            { type: "kun", reading: "ふ", vocab: [""] },
            { type: "kun", reading: "ぷ", vocab: [""] }
        ]
    },
    {
        kanji: "博",
        readings: [
            { type: "kun", reading: "はか", vocab: [""] },
            { type: "kun", reading: "はかせ", vocab: [""] },
            { type: "kun", reading: "はく", vocab: [""] }
        ]
    },
    {
        kanji: "縛",
        readings: [
            { type: "kun", reading: "しば", vocab: [""] },
            { type: "kun", reading: "ばく", vocab: [""] }
        ]
    },
    {
        kanji: "簿",
        readings: [
            { type: "kun", reading: "ぼ", vocab: [""] }
        ]
    },
    {
        kanji: "薄",
        readings: [
            { type: "kun", reading: "うす", vocab: [""] },
            { type: "kun", reading: "はく", vocab: [""] }
        ]
    },
    {
        kanji: "采",
        readings: [
            { type: "kun", reading: "さい", vocab: [""] }
        ]
    },
    {
        kanji: "菜",
        readings: [
            { type: "kun", reading: "さい", vocab: [""] },
            { type: "kun", reading: "な", vocab: [""] }
        ]
    },
    {
        kanji: "採",
        readings: [
            { type: "kun", reading: "さい", vocab: [""] },
            { type: "kun", reading: "と", vocab: [""] }
        ]
    },
    {
        kanji: "彩",
        readings: [
            { type: "kun", reading: "いろど", vocab: [""] },
            { type: "kun", reading: "さい", vocab: [""] }
        ]
    },
    {
        kanji: "杉",
        readings: [
            { type: "kun", reading: "すぎ", vocab: [""] }
        ]
    },
    {
        kanji: "街",
        readings: [
            { type: "kun", reading: "かい", vocab: [""] },
            { type: "kun", reading: "がい", vocab: [""] },
            { type: "kun", reading: "まち", vocab: [""] }
        ]
    },
    {
        kanji: "術",
        readings: [
            { type: "kun", reading: "じゅつ", vocab: [""] }
        ]
    },
    {
        kanji: "述",
        readings: [
            { type: "kun", reading: "じゅつ", vocab: [""] },
            { type: "kun", reading: "の", vocab: [""] }
        ]
    },
    {
        kanji: "余",
        readings: [
            { type: "kun", reading: "あま", vocab: [""] },
            { type: "kun", reading: "よ", vocab: [""] }
        ]
    },
    {
        kanji: "除",
        readings: [
            { type: "kun", reading: "じょ", vocab: [""] },
            { type: "kun", reading: "のぞ", vocab: [""] }
        ]
    },
    {
        kanji: "徐",
        readings: [
            { type: "kun", reading: "じょ", vocab: [""] },
            { type: "kun", reading: "じょじょ", vocab: [""] }
        ]
    },
    {
        kanji: "叙",
        readings: [
            { type: "kun", reading: "じょ", vocab: [""] }
        ]
    },
    {
        kanji: "斜",
        readings: [
            { type: "kun", reading: "しゃ", vocab: [""] }
        ]
    },
    {
        kanji: "途",
        readings: [
            { type: "kun", reading: "と", vocab: [""] }
        ]
    }
];
