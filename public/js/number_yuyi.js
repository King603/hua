var arr = [
    [1, "情有独钟 你是我的唯一"],
    [2, "心目中只有我倆"],
    [3, "我爱你"],
    [4, "誓言、承诺 山盟海誓"],
    [5, "无怨无悔"],
    [6, "愿你一切顺利"],
    [7, "喜相逢"],
    [8, "深表歉意　盼您原谅"],
    [9, "终生相爱　无怨无悔"],
    [10, "完美的爱情 十全十美"],
    [11, "一心一意"],
    [12, "圆满组合　心心相印"],
    [13, "暗恋"],
    [15, "对你感到抱歉"],
    [16, "爱的最高点"],
    [17, "好聚好散"],
    [18, "真诚的心"],
    [19, "期待陪伴"],
    [20, "此情不渝　永远爱你"],
    [21, "你是我的最爱"],
    [22, "双双对对 你浓我浓 两情相悦"],
    [24, "思念"],
    [25, "祝你好运"],
    [29, "不须言语的爱"],
    [30, "爱到永久"],
    [33, "深情呼喚　我爱你三生三世"],
    [36, "浪漫心情　我心属于你"],
    [44, "亘古不变的誓言"],
    [50, "无怨无悔"],
    [55, "无悔的爱"],
    [56, "吾爱"],
    [60, "爱情永固"],
    [66, "心情顺利 真爱不变"],
    [77, "相逢自是有缘"],
    [88, "用心弥补一切的错"],
    [99, "长相厢守、坚定"],
    [100, "百分之百的爱 百年好合"],
    [101, "您是我的唯一"],
    [108, "嫁給我吧 求婚"],
    [123, "爱情自由"],
    [144, "爱你日日月月生生世世"],
    [365, "天天想你　天天爱你"],
    [999, "天长地久　爱无止休"],
    [1001, "忠诚的爱 直到永远"]
];
var str = `
<tr>
<th colspan="2" class="border-0 text-center">花朵数</th>
<th class="border-0">花语</th>
</tr>
`;
for (var i = 0; i < arr.length; i++) {
    str += `
<tr>
<td class="border-0">${arr[i][0]}</td>
<td class="border-0">朵</td>
<td class="border-0 col-11">${arr[i][1]}</td>
</tr>
`;
}
t1.innerHTML = str;