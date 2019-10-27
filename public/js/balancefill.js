var _html = (element, arr) => {
  var str = ""
  for (var elem of arr) {
    str += `<li><a href="${elem[0]}">${elem[1]}</a></li>`;
  }
  element.html(str);
}
(() => {
  var cate_list = $(".common .cate-list:nth-child(2)");
  var arr = [
    ["/aiqingxianhua/", "爱情鲜花"],
    ["/youqingxianhua/", "友情鲜花"],
    ["/theme/birthday/", "生日鲜花"],
    ["/songzhangbeixianhua/", "问候长辈"],
    ["/zhufuqinghexianhua/", "祝贺鲜花"],
    ["/hunqingxianhua/", "婚庆鲜花"],
    ["/tanbingweiwenxianhua/", "探病慰问"],
    ["/daoqianxianhua/", "道歉鲜花"],
    ["/businessFlower/kaiyehualan/", "开业花篮"]
  ];
  _html(cate_list, arr);
})();
(() => {
  var cate_list = $(".common .cate-list:nth-child(4)");
  var arr = [
    ["/yongshenghua/yongshenghua_box.html", "经典花盒"],
    ["/yongshenghua/yongshenghua_large.html", "巨型玫瑰"],
    ["/yongshenghua/yongshenghua_lavender.html", "薰衣草"],
    ["/yongshenghua/yongshenghua_vase.html", "永生瓶花"],
    ["/yongshenghua/yongshenghua_characteristic.html", "特色永生花"]
  ];
  _html(cate_list, arr);
})();
(() => {
  var cate_list = $(".common .cate-list:nth-child(6)");
  var arr = [
    ["/livingflower/", "泰国保鲜花"],
    ["/gifts/musicbox/", "音乐盒"],
    ["/gifts/crystallaser/", "水晶内雕"],
    ["/gifts/goldenflower/", "金箔花"],
    ["/gifts/cosmeticmirror/", "化妆镜"],
    ["/gifts/kingking/", "香薰系列"],
    ["/gifts/bestlife/", "音乐睡枕"],
    ["/gifts/vase/", "花瓶/相框"],
    ["/katonghuashu/", "卡通花束"],
    ["/toys/", "品牌公仔"],
    ["/gifts/shoushi", "首饰"],
    ["/gifts/giftstalk/", "Giftstalk精选"],
    ["/gifts/dengshi/", "创意礼品"],
    ["/qiyetuangou/gift_card.html", "礼品卡"],
    ["/gifts/duorouzhiwupenzai/", "多肉植物盆栽"]
  ];
  _html(cate_list, arr);
})();
(() => {
  var cate_list = $(".common .cate-list:nth-child(8)");
  var arr = [
    ["/Plant/greenplant/", "绿色植物"],
    ["/Plant/potflower/", "盆栽花卉"]
  ];
  _html(cate_list, arr);
})();
(() => {
  var nav = $(".nav");
  var arr = [
    ["/", "首页"],
    ["/flower/", "鲜花"],
    ["/yongshenghua/", "永生花"],
    ["/cake/", "蛋糕"],
    ["/gifts/", "礼品"],
    ["/gifts/chocolates/", "巧克力"],
    ["/huayu/", "花语大全"],
    ["/you/", "设计师臻选鲜花"],
    ["/theme/birthday/", "生日鲜花礼品"]
  ];
  _html(nav, arr);
})();
(() => {
  var arr = [
    ["/buy1.jpg", "31", "62"],
    ["/pic_mastercard.gif", "30", "50"],
    ["/pic_visa.gif", "30", "50"],
    ["/pic_ae.gif", "30", "50"]
  ];
  var paypal = $(".wrapper table:nth-child(4)>tbody>:nth-child(2)>:nth-child(2)");
  var str = "";
  for (var elem of arr) {
    str += `<a target="_blank" href="/Member/Payment/FillByPaypal?order_no=&total_fee=&sign="><img src="../../../pimg/${elem[0]}" height="${elem[1]}" border="0" width="${elem[2]}"></a>`;
  }
  paypal.html(str + '<br>支持PayPal帐户余额支付、全球VISA、Master卡、AE卡等<span style="color:#fe6600">境外开通</span>的银行卡或信用卡在线快捷支付');
})();
(() => {
  var arr = [
    ["支付宝帐户", "/Member/Payment/FillByAlipay?order_no=&total_fee=&sign=", "zfbzf_02"],
    ["微信支付", "/Member/Payment/FillByWeixin?order_no=&total_fee=&sign=", "wxzf_01"],
    ["关爱通支付", "/Member/Payment/FillByGuanAiTong?order_no=&total_fee=&sign=", "guanaitong"]
  ];
  var all_pay = $(".wrapper table:nth-child(2)>tbody");
  console.log(all_pay);
  var str = "";
  for (var elem of arr) {
    str += `
    <tr>
      <td height="90"><strong>${elem[0]}</strong></td>
      <td align="center"><a href="${elem[1]}" target="_blank" class="ablue"><img src="../../../pimg/${elem[2]}.jpg" alt="${elem[0]}"></a></td>
      <td valign="middle" align="center"><a href="${elem[1]}" target="_blank" class="ablue">${elem[0]} &gt;&gt;</a></td>
    </tr>`;
  }
  all_pay.append(str);
})();






