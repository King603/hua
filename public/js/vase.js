var _html = (element, arr) => {
  var ul = $(element);
  var str = "";
  for (var elem of arr) {
    str += `<li><a target="_blank" href="${elem[0]}">${elem[1]}</a></li>`;
  }
  ul.html(str);
}
(() => {
  var arr = [
    ["/aiqingxianhua/", "爱情鲜花"],
    ["/shengriliwu/", "生日鲜花"],
    ["/youqingxianhua/", "友情鲜花"],
    ["/songzhangbeixianhua/", "问候长辈"],
    ["/tanbingweiwenxianhua/", "探病慰问"],
    ["/daoqianxianhua/", "道歉鲜花"],
    ["/zhufuqinghexianhua/", "祝贺鲜花"],
    ["/hunqingxianhua/", "婚庆鲜花"],
    ["/businessFlower/", "商务鲜花"]
  ];
  _html(".dropdown-menu>ul.list-inline:nth-child(2)", arr);
})();
(() => {
  var arr = [
    ["/yongshenghua_box.html", "经典花盒"],
    ["/yongshenghua_large.html", "巨型玫瑰"],
    ["/yongshenghua_lavender.html", "薰衣草"],
    ["/yongshenghua_vase.html", "永生瓶花"],
    ["/yongshenghua_characteristic.html", "特色永生花"]
  ];
  _html(".dropdown-menu>ul.list-inline:nth-child(4)", arr);
})();
(() => {
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
    ["/gifts/shoushi/", "首饰"],
    ["/gifts/giftstalk/", "Giftstalk精选"],
    ["/gifts/dengshi/", "创意礼品"],
    ["/qiyetuangou/gift_card.html", "礼品卡"],
    ["/gifts/duorouzhiwupenzai/", "多肉植物盆栽"]
  ];
  _html(".dropdown-menu>ul.list-inline:nth-child(6)", arr);
})();
(() => {
  var arr = [
    ["/greenplant/", "绿色植物"],
    ["/potflower/", "盆栽花卉"]
  ];
  _html(".dropdown-menu>ul.list-inline:nth-child(8)", arr);
})();
(() => {
  var arr = [
    ["/", "首页"],
    ["/flower/", "鲜花"],
    ["/yongshenghua/", "永生花"],
    ["/cake/", "蛋糕"],
    ["/gifts/", "礼品"],
    ["/gifts/chocolates/", "巧克力"],
    ["/huayu/", "花语大全"],
    ["/you/", "设计师臻选鲜花"],
    ["/theme/birthday/", "生日鲜花礼品"],
  ];
  _html("nav .nav", arr);
})();
(() => {
  var arr = [
    [1060030, "", "美丽无限/三色玫瑰", "", 298],
    [1060022, "", "斜口瓶花", "真空保鲜花，彩玫系列，5年不凋谢", 489],
    [1060002, "畅销榜特惠，泰国进口", "我爱你", "不凋谢的玫瑰 红玫瑰系列 最佳送女友礼物", 228],
    [1060010, "", "优雅", "真空玫瑰，彩玫七枝，5年不凋谢", 548],
    [1060038, "", "一路上有你/三色玫瑰", "5年不凋谢，真空保鲜花，彩玫系列，玫瑰5枝", 359],
    [1060009, "", "幸福时光", "爱情保鲜花，红玫瑰系列，5年不凋谢", 569],
    [1060005, "", "玫瑰恋曲", "玫瑰保鲜花，红玫瑰系列，泰国进口", 468],
    [1060037, "", "一生所爱", "进口保鲜花，三色玫瑰系列，5年不凋谢", 228],
    [1060028, "", "真爱玫瑰", "精选绽放优美的红玫瑰5枝", 459],
    [1060011, "", "美丽人生", "进口高档保鲜花,白玫瑰系列,生日礼物首选", 469],
    [1060063, "", "心若兰", "万紫千红系列进口泰国保鲜花，5年不凋谢", 238],
    [1060046, "特大号", "玫瑰花园/红", "进口保鲜花，红玫瑰9枝，不凋谢真空玫瑰花", 788],
    [1060045, "", "天使的爱", "荷兰工艺保鲜玫瑰，白/彩玫瑰共3朵，泰国进口", 218],
    [1060051, "泰国进口，特大号", "玫瑰花园/淡雅", "进口保鲜花，彩玫系列，清新优雅,生日礼品,家居礼物", 786],
    [1060007, "", "五彩生活", "不凋谢玫瑰，彩玫系列，进口保鲜花 ", 308],
    [1060026, "", "心心相恋", "真空玫瑰，红玫瑰系列，5年不凋", 429],
    [1060043, "", "约定", "高身方口花瓶进口保鲜花，彩玫系列,不凋谢玫瑰", 489],
    [1060001, "", "爱是唯一", "不凋谢的鲜花 红玫瑰系列 进口保鲜花", 158],
    [1060006, "", "纯心纯意", "保鲜玫瑰花，彩玫系列", 398],
    [1060013, "", "一路上有你", "真空玫瑰花，红玫瑰系列", 359],
    [1060064, "", "邂逅", "万紫千红系列进口泰国保鲜花，5年不凋谢", 469],
    [1060003, "", "爱永恒", "进口保鲜花，彩玫系列，5年不凋谢", 258]
  ];
  var product_list = $(".product-list>.com-width>ul");
  var str = "";
  for (var elem of arr) {
    str += `
    <li>
      <a href="/product/${elem[0]}.html" target="_blank" data-link="${elem[0]}">
        <div class="item-img">
          <img data-original="../newpic/${elem[0]}.jpg_220x240.jpg">
        </div>
        <div class="product-info">
          <p class="promotion">${elem[1]}&nbsp;</p>
          <h5 class="name">永生瓶花/${elem[2]}</h5>
          <p class="desc">${elem[3]}</p>
          <div class="box">
            <span class="price" data-id="${elem[0]}">¥&nbsp;${elem[4]}</span>
            <span class="btn-buy"></span>
          </div>
        </div>
      </a>
    </li>`;
  }
  product_list.html(str);
})();
(() => {
  var arr = [
    ["/huayu/11589.html", "什么是永生花？"],
    ["/huayu/11590.html", "永生花哪里有卖？"],
    ["/huayu/11591.html", "永生花是真花吗？"],
    ["/huayu/11593.html", "永生花多少钱？"],
    ["/huayu/11598.html", "永生花怎么保养？"],
    ["/profile/11914.html", "永生花寓意是什么？永生花的意义是什么？"],
    ["/huayu/11910.html ", "永生花是什么花？如何制作永生花？永生花制作方法介绍"],
    ["/huayu/11905.html", "永生花价格是多少？永生花贵吗？"],
    ["/huayu/12158.html", "永生花花语，永生玫瑰花代表什么？"],
    ["/huayu/11897.html", "永生花盒是什么？永生花盒哪家最好？"],
    ["/huayu/11865.html", "情人节送永生花代表什么？"],
    ["/huayu/13091.html", "进口永生玫瑰与国产永生玫瑰的区别"],
    ["/huayu/10594.html", "送女朋友保鲜花，代表不凋谢的爱情"],
    ["/huayu/10949.html", "送女孩子什么礼物好？泰国保鲜花推荐"],
    ["/huayu/12942.html", "结婚纪念送花：永生花·花永生·爱永恒"]
  ];
  var panel_body = $(".panel-body");
  var str = "";
  for (var i = 0; i < arr.length; i++) {
    if (i % 5 == 0) str += "<ul>";
    str += `<li><a href="${arr[i][0]}" target="_blank">${arr[i][1]}</a></li>`;
    if (i % 5 == 4) str += "</ul>";
  }
  panel_body.html(str);
  console.log(panel_body,str);
})();



