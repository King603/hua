var arr2 = [
    ["红玫瑰", "代表热情、热恋、深爱着你", "黄玫瑰", "代表为爱道歉"],
    ["紫玫瑰", "代表浪漫真情和珍贵独特", "白玫瑰", "代表纯洁、天真、纯真的爱"],
    ["黑玫瑰", "代表温柔真心", "橘红色玫瑰", "代表友情和青春美丽"],
    ["蓝玫瑰", "代表清醇的爱、敦厚善良", "粉玫瑰", "代表爱的宣言、初恋、特别的关怀"]
];
var arr2_str = `
    <tr>
        <td class="border-0 py-0" colspan="4">玫瑰</td>
    </tr>
`;
for (var i = 0; i < arr2.length; i++) {
    arr2_str += `
    <tr>
        <td class="border-0 py-0">${arr2[i][0]}</td>
        <td class="border-0 py-0">${arr2[i][1]}</td>
        <td class="border-0 py-0">${arr2[i][2]}</td>
        <td class="border-0 py-0">${arr2[i][3]}</td>
    </tr>
    `;
}
d2.innerHTML = arr2_str;