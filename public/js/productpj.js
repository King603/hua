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
    ["/zhufuqinghexianhua/", "祝贺鲜花"],
    ["/hunqingxianhua/", "婚庆鲜花"],
    ["/tanbingweiwenxianhua/", "探病慰问"],
    ["/daoqianxianhua/", "道歉鲜花"],
    ["/businessFlower/kaiyehualan/", "开业花篮"]
  ];
  _html(".dropdown-menu>ul.list-inline:nth-child(2)", arr);
})();
(() => {
  var arr = [
    ["/yongshenghua/yongshenghua_box.html", "经典花盒"],
    ["/yongshenghua/yongshenghua_large.html", "巨型玫瑰"],
    ["/yongshenghua/yongshenghua_lavender.html", "薰衣草"],
    ["/yongshenghua/yongshenghua_vase.html", "永生瓶花"],
    ["/yongshenghua/yongshenghua_characteristic.html", "特色永生花"]
  ]
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
    ["/Plant/greenplant/", "绿色植物"],
    ["/Plant/potflower/", "盆栽花卉"]
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
    ["/theme/birthday/", "生日鲜花礼品"]
  ];
  _html("nav .nav", arr);
})();
(() => {
  var arr = [
    ["../img/avatar_default_09.jpg", "田*", "感觉很不错！", "安徽合肥市肥东县", "2019-10-16", 9010011, "一心一意"],
    ["../img/132.jpg", "账号已*期.", "非常满意啊很好", "辽宁大连市甘井子区", "2019-10-16", 9010011, "一心一意"],
    ["../img/avatar_default_08.jpg", "刘*爽", "很喜欢，我在北方给南方的女朋友订了，很快就能收到，很漂亮", "广西南宁市西乡塘区", "2019-10-16", 9012209, "紫色的梦"],
    ["../img/avatar_default_05.jpg", "江*国", "非常非常满意", "浙江丽水市莲都区", "2019-10-16", 9010011, "一心一意"],
    ["../img/132(1).jpg", "GuanC*uli_", "按时送达，很满意。", "广东广州市天河区", "2019-10-16", 9012072, "向日葵之歌"],
    ["../img/3139531_20191007155535.jpg?1492274397", "于*生", "虽然吃不到美味，但能感受到店家的辛劳！", "广东深圳市南山区", "2019-10-16", 5112019, "开心百分百 （1.5磅）"],
    ["../img/avatar_default_05.jpg", "孙*军", "好好好好好好", "江苏徐州市铜山区", "2019-10-16", 9010966, "一往情深"],
    ["../img/132(2).jpg", "任*辉", "好好好 好好好", "北京市海淀区", "2019-10-16", 9012288, "心连心"],
    ["../img/132(3).jpg", "雨亭*生", "很漂亮，女朋友很喜欢", "浙江杭州市滨江区", " 2019-10-16", 9012243, "恋恋情深"],
    ["../img/g.jpg", "咒*", "很好，非常满意，以后还会再买", "云南普洱市思茅区", "2019-10-16", 9010966, "一往情深"]
  ];
  var list = $(`.comments .comments-list`);
  var str = "";
  for (var elem of arr) {
    str += `
    <div class="comments-item">
      <div class="comments-item-left">
        <div class="comments-item-pic"><img src="../img/${elem[0]}" /></div>
        <p class="comments-item-username">${elem[1]}</p>
      </div>
      <div class="comments-item-right tm-m-photos">
        <div class="comments-item-rating comments-item-rating-5"></div>
        <p class="comments-item-desc">${elem[2]}</p>
        <div>
          <address class="comments-item-address"><i class="iconfont"></i>${elem[3]}</address>
          <span class="comments-item-time">${elem[4]}</span>
        </div>
        <a href="/product/${elem[5]}.html" target="_blank">
          <div class="comments-item-product">
            <div class="comments-item-product-l">
              <div class="comments-item-product-img">
                <img src="../newpic/${elem[5]}.jpg_220x240.jpg">
              </div>
            </div>
            <div class="comments-item-product-c">
              <div class="comments-item-product-name">[鲜花]${elem[6]}</div>
              <div class="comments-item-product-price" data-id="${elem[5]}"></div>
            </div>
            <div class="comments-item-product-r">
              <div class="comments-item-product-btn">我也要买</div>
            </div>
          </div>
        </a>
      </div>
    </div>`;
  }
  list.html(str);
})();