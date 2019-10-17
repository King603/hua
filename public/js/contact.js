var _html = (element, arr) => {
  var str=""
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
    var str="";
    for (var elem of arr) {
        str += `<li><a href="${elem[0]}"><span class="ico ico-about${i++}"></span>${elem[1]}</a></li>`;
    }
    bd.html(str);
    console.log(str)
})();