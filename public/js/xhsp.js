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
(() => {
  var city_list = $("table tbody:first td:last p");
  var arr = [
    ["?act=city&name=北京", "北京"],
    ["?act=city&name=上海", "上海"],
    ["?act=city&name=广州", "广州"],
    ["?act=city&name=深圳", "深圳"],
    ["?act=city&name=哈尔滨", "哈尔滨"],
    ["?act=city&name=沈阳", "沈阳"],
    ["?act=city&name=大连", "大连"],
    ["?act=city&name=天津", "天津"],
    ["?act=city&name=太原", "太原"],
    ["?act=city&name=石家庄", "石家庄"],
    ["?act=city&name=青岛", "青岛"],
    ["?act=city&name=兰州", "兰州"],
    ["?act=city&name=西安", "西安"],
    ["?act=city&name=苏州", "苏州"],
    ["?act=city&name=杭州", "杭州"],
    ["?act=city&name=宁波", "宁波"],
    ["?act=city&name=合肥", "合肥"],
    ["?act=city&name=南京", "南京"],
    ["?act=city&name=成都", "成都"],
    ["?act=city&name=重庆", "重庆"],
    ["?act=city&name=贵阳", "贵阳"],
    ["?act=city&name=长沙", "长沙"],
    ["?act=city&name=武汉", "武汉"],
    ["?act=city&name=福州", "福州"],
    ["?act=city&name=厦门", "厦门"],
    ["?act=city&name=昆明", "昆明"],
    ["?act=city&name=南宁", "南宁"],
    ["?act=city&name=东莞", "东莞"],
    ["?act=city&name=珠海", "珠海"],
    ["?act=city&name=海口", "海口"]
  ];
  var str = "";
  for (var elem of arr) {
    str += `<span><a href="${elem[0]}">${elem[1]}</a></span>`;
  }
  city_list.html(str + '<br class="clear">');
})();
var about_plbox = (n, arr, name, imgID) => {
  var list = $(`.about_plbox:nth-child(${n})`);
  var str = `
  <div>
    <table cellpadding="0" cellspacing="0">
      <tr>
        <td style="color:#333;">
          商品原图<br />
          <span style="color:#666666;">名称：</span>${name} <a target="_blank" href="/product/${imgID}.html">详情>></a><br />
          <a href="/product/${imgID}.html" target="_blank">
            <img src="../newpic/${imgID}.jpg_220x240.jpg" />
          </a>
        </td>
      </tr>
    </table>
  </div>`;
  for (var elem of arr) {
    str += `
    <div>
      <table cellpadding="0" cellspacing="0" style="color:#333;">
        <tr>
          <td>
            <span style="color:#666666;">订单号：</span>${elem[0]}<br />
            <span style="color:#666666;">地址：</span><span title="${elem[1]}">${elem[2]}</span><br />
            <a target="_blank" href="/xianhuashipai/detail/${imgID}.html?type=1&key=&id=${elem[3]}#start">
              <img src="../uploadshipai/${elem[4]}.jpg" />
            </a>
          </td>
        </tr>
      </table>
    </div>`;
  }
  list.html(
    str + `
    <div class="RightMore">
      <a target="_blank" href="/xianhuashipai/detail/${name}.html#start">
        <img src="../img/more_ors.png" />
      </a>
    </div>`
  );
}
(() => {
  var arr = [
    [9558518, "欧亚大道与灞河东路十*****", "欧亚大道与灞河东…", 6389, "201561717565852954"],
    [9566467, "福田区彩田路*****", "福田区彩田路深业…", 6401, "201562416293147064"],
    [9593918, "白云区黄石东路黄石*****", "白云区黄石东路黄…", 6513, "201591714442511271"]
  ];
  about_plbox(1, arr, "忘情巴黎", 9012009);
})();
(() => {
  var arr=[
    [9678216,"雁塔区东仪路中段17号*****","雁塔区东仪路中段…",6517,"20159181413239011"],
    [131537132,"深圳市罗湖区水贝二路2*****","深圳市罗湖区水贝…",6643,"2015112015502777094"],
    [159845005,"广东省广州市荔湾区中*****","广东省广州市荔湾…",6855,"201682217524050168"]
  ];
  about_plbox(2, arr, "热恋", 9012042);
})();
(() => {
  var arr=[
    [9563660,"大连市中山区人民路15*****","大连市中山区人民…",6396,"201562416264187011"],
    [9569405,"上海市 浦东新区 浦东新*****","上海市浦东新区…",6406,"20157315312385614"],
    [9578471,"上海上海市徐汇区枫林路*****","上海上海市徐汇区…",6419,"20157101718274283"]
  ];
  about_plbox(3, arr, "暖暖", 9010965);
})();
(() => {
  var arr=[
    [137571756,"围堤道106号增*****","围堤道106号增…",6700,"201611417424010653"],
    [137649188,"天津市和平区常德道3*****","天津市和平区常德…",6701,"20161141743081861"],
    [138240340,"昆明路360号2*****","昆明路360号2…",6709,"20161251762297257"]
  ];
  about_plbox(4, arr, "眷念", 9012060);
})();
(() => {
  var arr=[
    [162052623,"集美区日东***","集美区日东路10…",6911,"201691415164817746"],
    [160976093,"渝中区长江一路鹅岭*****","渝中区长江一路鹅…",6922,"201691415254468280"],
    [161923924,"宝安区石岩镇羊台*****","宝安区石岩镇羊台…",6939,"201691415351358886"]
  ];
  about_plbox(5, arr, "缪斯女神", 9012125);
})();
(() => {
  var arr=[
    [9654815,"大连市西岗区11*****","大连市西岗区11…",6470,"201582614415852397"],
    [131216037,"福田区香梅路水*****","福田区香梅路水榭…",6628,"201511131353884830"],
    [133617894,"广东省广州市天河区*****","广东省广州市天河…",6666,"2015121017255861272"]
  ];
  about_plbox(6, arr, "浪漫缤纷", 9012041);
})();
(() => {
  var arr=[
    [9470202,"雁塔区雁翔路华*****","雁塔区雁翔路华尔…",6314,"20154101601240135"],
    [9164300,"西安高新区科技八路*****","西安高新区科技八…",5996,"20148201753283962"],
    [8417812,"上海市浦东新区银城中*****","上海市浦东新区银…",1502,"20118918225387491"]
  ];
  about_plbox(7, arr, "LOVE 99", 9010668);
})();
(() => {
  var arr=[
    [130290216,"碑林区金花南路*****","碑林区金花南路1…",6614,"20151161595816701"],
    [9660030,"古美路1515*****","古美路1515号…",6479,"20159810362222276"],
    [128043931,"东二环金花北路176*****","东二环金花北路1…",6561,"20151022161068556"]
  ];
  about_plbox(8, arr, "天使的心跳", 9012030);
})();
(() => {
  var bd = $(".pull-left .bd");
  var arr = [
      ["../profile/news.htm", "公司动态"],
      ["../profile/media.html", "媒体报道"],
      ["../profile/culture.htm", "企业文化"],
      ["../productpj/", "客户体验"],
      ["../profile/gdsj.html", "感动瞬间"],
      ["/XianHuaShiPai/", "订单实拍秀"],
      ["../profile/why_choose_us.htm", "为什么选择我们"],
      ["../profile/contact.htm", "联系我们"]
  ];
  var i = 1;
  var str="";
  for (var elem of arr) {
      str += `<li><a href="${elem[0]}"><span class="ico ico-about${i++}"></span>${elem[1]}</a></li>`;
  }
  bd.html(str);
  console.log(str)
})();