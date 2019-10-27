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
    ["/theme/birthday/", "友情鲜花"],
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
var toys_list = (href, name, arr, str = "") => {
  var list = $("#flowerCarousel").parent();
  str += `
  <!-- 礼品推荐 ${name} START-->
  <!-- 品牌信息 -->
  <div class="brand-wraper">
    <div class="hd_t">
      <div class="small pull-right">
        <a href="${href}">更多${name} &gt;&gt;</a>
      </div>
      <strong>${name}推荐</strong>
    </div>
  </div>
  <!-- 品牌信息 End -->
  <!-- 商品列表 -->
  <div class="grid-wrapper">
    <!-- 商品 -->`;
  for (var elem of arr) {
    str += `
    <div class="grid-item">
      <div class="grid-panel">
        <div class="img-box">
          <a href="/product/${elem[0]}.html" target="_blank" data-link="${elem[0]}"><img width="220" height="240" src="../newpic/${elem[0]}.jpg_220x240.jpg" alt="${elem[1]}">
            </div>
        <div class="info-cont">
          <div class="price">
            <span class="price-sign">&yen;</span>
            <span class="price-num" data-pp="${elem[0]}">${elem[4]}</span>
          </div>
          <div class="title">
            <a href="/product/${elem[0]}.html" target="_blank" data-link="${elem[0]}" title="公仔/${elem[1]}">
              <span class="product-title">公仔/${elem[2]}</span>
              <span class="feature">${elem[3]}</span>
            </a>
          </div>
          <div class="operate">
            <a href="javascript:DoGuanZhu('${elem[0]}')" class="attention"><span class="ico ico-heart-d"></span>收藏</a>
            <a href="/shopping/AddtoCart?product_code=${elem[0]}" class="add-cart" style="margin-left:-5px;"><span class="ico ico-cart-d"></span>加入购物车</a>
          </div>
        </div>
      </div>
    </div>`;
  }
  str += `
    <!-- 商品 End -->
  </div>
  <!-- 商品列表 End -->
  <!-- 礼品推荐 ${name} End -->`;
  list.append(str);
}
(() => {
  var arr = [
    [1200240, "Hello Kitty爱的礼物毛绒公仔（40cm）", "Hello Kitty爱的礼物毛绒公仔（40cm）-Hello Kitty公仔授权正版", "30cm、40cm可选", 369],
    [1200227, "Hello Kitty水手毛绒公仔（30cm）", "Hello Kitty水手毛绒公仔（30cm）-Hello Kitty公仔授权正版", "", 326],
    [1200226, "Hello Kitty水手毛绒公仔（20cm）", "Hello Kitty水手毛绒公仔（20cm）-Hello Kitty公仔授权正版", "20cm、30cm可选", 228],
    [1200221, "hello Kitty草莓点点（20cm）", "hello Kitty草莓点点（20cm）-Hello Kitty公仔授权正版", "20cm、30cm、40cm可选", 198]
  ];
  toys_list("/HelloKitty/", "Hello Kitty公仔", arr, "<!-- 大图轮播 End -->");
})();
(() => {
  var arr = [];
  toys_list("/doge/", "doge公仔", arr);
})();
(() => {
  var arr = [];
  toys_list("/gifts/bestlife/", "Bestlife", arr);
})();
(() => {
  var arr = [
    [1090038, "公仔创意花束-兔子小姐", "公仔创意花束-兔子小姐-品牌metoo梦幻黄布偶娃娃+白色爱心兔+粉色爱心兔", "萌兔花束 TA的最爱", 169],
    [1090052, "小熊先生公仔花束/棕", "小熊先生公仔花束/棕-小熊花束：浅棕色关节熊7个，搭配勿忘我和薰衣草等", "可爱小棕熊花束", 129],
    [1090051, "小熊先生公仔花束/白", "小熊先生公仔花束/白-小熊花束：格子底坐姿熊7个", "可爱小白熊花束", 129],
    [1090050, "米菲兔公仔花束", "米菲兔公仔花束-可爱小兔花束：白色米菲兔6个、玫红色love爱心兔3个", "可爱小兔花束", 129]
  ];
  toys_list("/katonghuashu/", "卡通花束", arr);
})();
var item_list = (n, arr) => {
  var list = $(`.navigation>:nth-child(${n})>.item-list`);
  var str = "";
  for (var elem of arr) {
    str += `<li><a href="${elem[0]}">${elem[1]}</a></li>`;
  }
  list.html(str);
}
(() => {
  var arr = [
    ["/HelloKitty/", "Hello Kitty公仔"],
    ["/doge/", "doge神烦狗"],
    ["/gifts/bestlife/", "BestLife音乐睡枕/抱枕"],
    ["/katonghuashu/", "卡通花束(公仔花束)"]
  ];
  item_list(1, arr);
})();
(() => {
  var arr = [
    ["/gongzaijiage/0-80/", "80元以下"],
    ["/gongzaijiage/80-150/", "80-150元"],
    ["/gongzaijiage/150-300/", "150-300元"],
    ["/gongzaijiage/300-500/", "300-500元"],
    ["/gongzaijiage/500-99999/", "500元以上"]
  ];
  item_list(2, arr);
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
    ["/gifts/dengshi/", "创意礼品"],
    ["/gifts/chocolates/", "品牌巧克力"],
    ["/qiyetuangou/gift_card.html", "礼品卡"]
  ];
  item_list(3, arr);
})();
var panel = (nth, arr, a) => {
  var panel_body = $(`.panel-info>.panel-body:${nth}`);
  console.log(panel_body)
  var str = `<!-- 侧边${a} -->`;
  for (var elem of arr) {
    str = `
    `;
  }
  panel_body.html(str);
}
(() => {
  var arr = [
    [1200218, "KT夏日风公仔(40cm)", "授权正版Hello Kitty公仔", 398],
    [1200226, "Hello Kitty水手毛绒公仔（20cm）", "Hello Kitty授权正版", 228],
    [1090038, "公仔创意花束-兔子小姐", "品牌metoo梦幻黄布偶娃娃+白色爱心兔+粉色爱心兔", 169],
    [1073198, "公仔创意花束-小狗先生", "永生花＋手工毛毡萌物", 198],
    [1200240, "Hello Kitty爱的礼物毛绒公仔（40cm）", "Hello Kitty授权正版", 369]
  ];
  var panel_body = $(".panel-info>.panel-body:first");
  var str = "";
  for (var elem of arr) {
    str += `
    <div class="side-item">
      <div class="img-box">
        <a href="/product/${elem[0]}.html" target="_blank" data-link="${elem[0]}">
          <img src="../newpic/${elem[0]}.jpg_220x240.jpg" width="180" height="196" alt="${elem[1]}">
        </a>
      </div>
      <div class="info-cont">
        <div class="title">
          <a href="/product/${elem[0]}.html" class="product-title" data-link="${elem[0]}">
            礼品/${elem[1]}-${elem[2]}
          </a>
        </div>
        <div class="price" style="text-align:left;">
          <span class="price-sign">&yen;</span>
          <span class="price-num" data-pp="${elem[0]}">${elem[3]}</span>
        </div>
      </div>
    </div>`;
  }
  panel_body.html(str);
})();
(() => {
  var arr = [
    [1204040, "314556*", "客服态度非常好，商品也不错"],
    [1201003, "177****9116", "时间好快本来说是要两三天才到的，哪知第二天就到了，很满意，口感不错"],
    [1207010, "181****0332", "精致，挺好的"],
    [1201003, "136****6051", "迟来的评论：入口即化，软糯甜蜜！"],
    [1201002, "1013025*", "东西很好，值得购买"]
  ];
  var panel_body = $(".panel-info>.panel-body:last");
  var str = "";
  for (var elem of arr) {
    str += `
    <div class="side-com">
      <div class="img-box">
        <a href="/product/${elem[0]}.html" target="_blank">
          <img src="../newpic/${elem[0]}.jpg_80x87.jpg">
        </a>
      </div>
      <div class="com-cont">
        <h5>会员号：${elem[1]}</h5>
        <p><a href="/productpj/${elem[0]}.html" target="_blank">${elem[2]}</a></p>
      </div>
    </div>`;
  }
  panel_body.html(str);
})();
(() => {
  var arr = [
    [
      ["10931.html", "送女朋友什么礼物好？送女朋友卡通花束好不好？"],
      ["11775.html", "玫瑰花搭配公仔有什么寓意？"],
      ["10545.html", "同事生日送什么礼物好？"],
      ["12029.html", "特色礼物有哪些？"],
      ["10949.html", "送女孩子什么礼物好？泰国保鲜花推荐"]
    ],
    [
      ["11352.html", "贴心的女性礼物：薰衣草小熊"],
      ["10772.html", "送老婆什么生日礼物好？"],
      ["10557.html", "老婆生日送什么礼物好?"],
      ["11197.html", "结婚礼物推荐，结婚送什么礼物最好？"],
      ["11850.html", "情人节礼物送什么？"]
    ],
    [
      ["20060816173328.htm", "不宜在公开场合赠送的礼物"],
      ["8003.htm", "如何给同辈者送的生日礼物？"],
      ["8004.htm", "懒人的节日礼物应急方案"],
      ["8005.htm", "结婚礼品推荐"],
      ["8008.htm", "赠送礼品小常识"]
    ]
  ];
  var panel_body = $(".panel-body:last");
  var str = "";
  for (var i = 0; i < arr.length; i++) {
    str += "<ul>";
    for (var j = 0; arr[i].length; j++) {
      str += `<li><a href="/huayu/${elem[0]}" target="_blank">${elem[1]}</a></li>`;
    }
    str += "</ul>";
  }
  panel_body.html(str);
})();














