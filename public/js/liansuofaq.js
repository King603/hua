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
var list = (n, arr) => {
  var ul10 = $(`.liansuo${n}_box .ul10`);
  console.log(ul10);
  var str = "";
  for (var elem of arr) {
    str += `<li><a href="${elem[0]}">${elem[1]}</a></li>`;
  }
  ul10.html(str);
}
(() => {
  var arr = [
    ["/liansuo/", '连锁花店加盟介绍'],
    ["/liansuo/JoinStep.htm", '连锁加盟花店流程'],
    ["/liansuo/faq.htm", '<font color="#FF6600">连锁加盟花店FAQ</font>'],
    ["/liansuo/sender_form.htm", '配送店免费加入']
  ];
  list(1, arr);
})();
(() => {
  var arr = [
    ["//www.hua.com/city/beijing/", "北京花店"],
    ["//www.hua.com/city/shenzhen/", "深圳花店"],
    ["//www.hua.com/city/shanghai/", "上海花店"],
    ["//www.hua.com/city/guangzhou/", "广州花店"],
    ["//www.hua.com/city/tianjin/", "天津花店"],
    ["//www.hua.com/city/zhongqing/", "重庆花店"],
    ["//www.hua.com/city/chengdu/", "成都花店"],
    ["//www.hua.com/city/hangzhou/", "杭州花店"],
    ["//www.hua.com/city/nanjing/", "南京花店"],
    ["//www.hua.com/city/wuhan/", "武汉花店"],
    ["//www.hua.com/city/suzhou/", "苏州花店"],
    ["//www.hua.com/city/changsha/", "长沙花店"]
  ];
  list(2, arr);
})();