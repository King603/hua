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
    ["/shengriliwu/", "生日鲜花"],
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
    ["/yongshenghua/yongshenghua_lavender.html", "薰衣草"]
  ];
  _html(cate_list, arr);
})();
(() => {
  var nav = $(".nav");
  var arr = [
    ["/", "首页"],
    ["/flower/", "鲜花"],
    ["/yongshenghua/", "永生花"],
    ["/huayu/", "花语大全"]
  ];
  _html(nav, arr);
})();
(() => {
  var bd = $(".pull-left .bd");
  var arr = [
    ["news.htm", "公司动态"],
    ["media.html", "媒体报道"],
    ["culture.htm", "企业文化"],
    ["/productpj/", "客户体验"],
    ["gdsj.html", "感动瞬间"],
    ["/XianHuaShiPai/", "订单实拍秀"],
    ["why_choose_us.htm", "为什么选择我们"],
    ["contact.htm", "联系我们"]
  ];
  var i = 1;
  var str = "";
  for (var elem of arr) {
    str += `<li><a href="${elem[0]}"><span class="ico ico-about${i++}"></span>${elem[1]}</a></li>`;
  }
  bd.html(str);
})();
(() => {
  var arr = [
    ["https://www.hua.com/", "flowercn_88x31.gif"],
    ["http://www.china-flower.com/", "logo_cfn.gif"],
    ["http://www.dahangzhou.com", "LOGO_dahangzhou.gif"],
    ["http://www.felissimo.com.cn/", "logo_felissimo.jpg"],
    ["http://www.keede.com/", "keedelogo.gif"],
    ["http://www.salawed.com/", "logo_salawed.gif"],
    ["http://www.8photo.cn/", "2013-05-17.jpg"]
  ];
  var table = $("table:first table");
  console.log(table);
  var str = "<tr>";
  for (var i = 0; i < 12; i++) {
    if (arr[i] === undefined) {
      str += "<td></td>";
    } else {
      str += `<td><a href="${arr[i][0]}" target="_blank"><img src="../img/${arr[i][1]}"></a></td>`;
      if (i == 5) {
        str += "</tr><tr>";
      }
    }
  }
  str += "</tr>";
  table.html(str);
})();
(() => {
  var arr = [
    ["http://www.womai.com/", "我买网购物"],
    ["http://www.ixi360.cn/", "爱喜婚尚-婚礼"],
    ["http://www.mbaobao.com/", "麦包包"],
    ["http://www.taoxie.com/", "淘鞋网"],
    ["http://www.5lux.com/", "第五大道奢侈品网"],
    ["http://www.unscard.com/", "商联卡"],
    ["http://www.justonline.cn/", "Justyle"],
    ["http://www.xiu.com/", "走秀网"],
    ["http://www.yihaodian.com/", "网上商城"],
    ["http://www.zbird.com/news/detail/id/1429/", "钻石等级"],
    ["http://www.moonbasa.com/", "梦芭莎"],
    ["http://www.ehmall.com.cn/", "电视购物"],
    ["http://www.pb89.com/", "太平鸟"],
    ["http://www.vancl.com/", "凡客诚品"],
    ["http://www.dionly.com/", "戴欧妮钻石"],
    ["http://www.s.cn/p-0-123-51.html", "皮鞋"],
    ["http://www.spider.com.cn/", "蜘蛛网"],
    ["http://www.51fashion.com.cn/", "时尚饰界"],
    ["http://www.xituan.com/", "喜团网"],
    ["http://china.trade2cn.com/", "中国诚商网"],
    ["http://www.lidodo.com/", "礼多多"],
    ["http://www.ymatou.com/", "洋码头"],
    ["http://www.gome.com.cn/", "国美在线"],
    ["http://www.hhsq.net/", "花卉商情"],
    ["http://www.hnhm.com/", "花木"],
    ["http://www.ynhmw.com/", "云南花木网"],
    ["http://www.obolee.com/", "订婚戒指"],
    ["http://www.xiaomishu.com/", "网上订餐"],
    ["http://www.tejiawang.com/", "特价王"],
    ["http://seller.dhgate.com/", "外贸b2b网站"],
    ["http://www.sfbest.com/", "网上超市"],
    ["http://www.wbiao.cn/", "万表网"],
    ["http://www.bloves.com/", "钻戒"],
    ["http://www.doido.com/", "爱度钻石"],
    ["http://www.cnhm.net/", "中国花木网"],
    ["http://www.huamu.cn/", "花木网"]
  ];
  var table = $("table:last");
  console.log(table);
  var str = "";
  for (var i = 0; i < arr.length; i++) {
    if (i % 6 == 0) {
      str += "<tr>";
    }
    str += `<td><div><a href="${arr[i][0]}" target="_blank">${arr[i][1]}</a></div></td>`;
    if (i % 6 == 5) {
      str += "</tr>";
    }
  }
  table.html(str);
})();





