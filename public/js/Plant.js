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
    ["/gifts/shoushi/", "首饰"],
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
  var cate_list = $("nav .nav");
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
  _html(cate_list, arr);
})();
(() => {
  var arr = [
    [6010621, "蝴蝶兰4株", "338", "蝴蝶兰4株-蝴蝶兰-室内盆栽（4株紫色一品蝴蝶兰"],
    [6010613, "吉祥如意", "218", "吉祥如意-蝴蝶兰- 室内盆栽（2株紫红色蝴蝶兰）。"],
    [6010612, "十全十美", "899", "十全十美-蝴蝶兰- 室内盆栽（10株红色一品蝴蝶兰）。"],
    [6010611, "纯洁天使", "498", "纯洁天使-蝴蝶兰（5株白色一品蝴蝶兰"],
    [6010606, "迎福纳祥", "452", "迎福纳祥-5株粉红色一品蝴蝶兰。(开花期3个月以上"],
    [6010605, "蝴蝶兰5株", "498", "蝴蝶兰5株-蝴蝶兰- 室内盆栽(紫蝴蝶兰3株、浅粉蝴蝶兰2株)"],
    [6010603, "蝴蝶兰6株", "558", "蝴蝶兰6株-蝴蝶兰-室内盆栽（6株红色一品蝴蝶兰"],
    [6010602, "蝴蝶兰7株", "658", "蝴蝶兰7株-蝴蝶兰7株- 室内盆"],
    [6010601, "一帆风顺", "109", "一帆风顺-盆装一帆风顺（白鹤芋"],
    [6010021, "步步高升开运竹", "198", "步步高升开运竹-八层的盆装富贵"],
    [6010013, "绿帝王", "108", "绿帝王-绿帝王，白色塑料盆，高0.4米左"],
    [6010012, "万年青", "135", "万年青-多头斑马万年"],
    [6010011, "合果芋", "108", "合果芋-合果芋，0.4米左"],
    [6010010, "大绿萝", "258", "大绿萝-大绿萝，陶瓷花盆，高1.5"],
    [6010003, "发财树", "328", "发财树-发财树，陶瓷花盆，高1.5"],
    [6010001, "黄金竹", "369", "黄金竹-黄金竹，陶瓷花盆，高120c"],
    [6010005, "巴西木", "298", "巴西木-巴西木，陶瓷花盆，高1.5"],
    [6010620, "金钱树", "618", "金钱树-金钱树，0.8-1.0"],
    [6010610, "吉星高照", "298", "吉星高照-双株大红色凤梨，瓷盆"],
    [6010609, "君子兰", "360", "君子兰-君子兰--高约40-60cm；陶瓷花"],
    [6010608, "火鹤", "168", "火鹤-多头火鹤（即红掌）盆栽"],
    [6010607, "花开富贵", "358", "花开富贵-盆栽两株粉红色仙客来加精美包"]
  ];
  var grid_item = $(".grid-wrapper:last");
  var str = "";
  for (var elem of arr) {
    str += `
    <div class="grid-item">
      <div class="grid-panel">
        <div class="img-box">
          <a href="/product/${elem[0]}.html" target="_blank" data-link="${elem[0]}">
            <img src="../newpic/${elem[0]}.jpg_220x240.jpg" alt="${elem[1]}">
          </a>
        </div>
        <div class="info-cont">
          <div class="price">
            <span class="price-sign">&yen;</span>
            <span class="price-num" data-pp="${elem[0]}">${elem[2]}</span>
          </div>
          <div class="title">
            <a href="/product/${elem[0]}.html" target="_blank" data-link="${elem[0]}">
              <span class="product-title">绿色植物/${elem[3]}</span>
              <span class="feature"></span>
            </a>
          </div>
          <div class="operate">
            <a href="javascript:DoGuanZhu('${elem[0]}')" class="attention">
              <span class="ico ico-heart-d"></span>收藏
            </a>
            <a href="/shopping/AddtoCart?product_code=${elem[0]}" class="add-cart" style="margin-left:-5px;">
              <span class="ico ico-cart-d"></span>加入购物车
            </a>
          </div>
        </div>
      </div>
    </div>`;
  }
  grid_item.html(str);
})();
var item_list = (where, arr) => {
  var list = $(`.item-list:${where}`);
  var str = "";
  for (var elem of arr) {
    str += `<li><a href="${elem[0]}">${elem[1]}</a></li>`;
  }
  list.html(str);
}
(() => {
  var arr = [
    ["/Plant/", "全部商品"],
    ["/Plant/greenplant/", "绿色植物"],
    ["/Plant/potflower/", "盆栽花卉"]
  ];
  item_list("first", arr)
})();
(() => {
  var arr = [
    ["/meigui/", "玫瑰"],
    ["/kangnaixin/", "康乃馨"],
    ["/yujinxiang/", "郁金香"],
    ["/baihe/", "百合"],
    ["/fulang/", "扶郎"],
    ["/matilian/", "马蹄莲"],
    ["/xiangrikui/", "向日葵"]
  ];
  item_list("eq(1)", arr)
})();
(() => {
  var arr = [
    ["/gifts/a_birthday/", "生日礼品"],
    ["/gifts/a_dating/", "约会/求爱礼品"],
    ["/gifts/a_wedding/", "结婚礼品"],
    ["/gifts/a_thankyou/", "感谢/祝福礼品"],
    ["/gifts/a_visit/", "拜访/探望礼品"],
    ["/gifts/a_anniversary/", "结婚纪念日礼品"],
    ["/gifts/a_qiaoqian/", "乔迁礼品"],
    ["/gifts/a_home/", "家居礼品"]
  ];
  item_list("last", arr)
})();
(() => {
  var arr = [
    [6010003, "发财树", "发财树-发财树，陶瓷花盆，高1.5米", "328"],
    [6010613, "吉祥如意", "吉祥如意-蝴蝶兰- 室内盆栽（2株紫红色蝴蝶兰）。", "218"],
    [6010021, "步步高升开运竹", "步步高升开运竹-八层的盆装富贵竹", "198"],
    [6010606, "迎福纳祥", "迎福纳祥-5株粉红色一品蝴蝶兰。(开花期3个月以上)", "452"],
    [6010603, "蝴蝶兰6株", "蝴蝶兰6株-蝴蝶兰-室内盆栽（6株红色一品蝴蝶兰）", "658"]
  ];
  var side_item = $(".panel-body:first");
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
            ${elem[1]}-${elem[2]}
          </a>
        </div>
        <div class="price" style="text-align:left;">
          <span class="price-sign">&yen;</span>
          <span class="price-num" data-pp="${elem[0]}">${elem[3]}</span>
        </div>
      </div>
    </div>`;
  }
  side_item.html(str);
})();
(() => {
  var arr = [
    [6010163, "134****8032", "送货及时赶到"],
    [6010021, "187****0573", "实物与描述相符，客服非常给力，送达时间下单时无法选择当天，联系客服，不到一小时便送竹上门，并且售后告知培养注意事项，非常贴心，朋友很满意"],
    [6010607, "vickyji*", "非常满意，花礼网一如既往的好，每年都会来给父母订花，谢谢你们可以帮助在海外的我们给父母送去一份祝福"],
    [6010167, "139****5085", "比我想象的要好"],
    [6010621, "zhangda*", "满意非常满意"],
    [6010021, "huanghe*", "父亲大人非常喜欢"]
  ];
  var side_item = $(".panel-body:eq(1)");
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
  side_item.html(str);
})();
(() => {
  var arr = [
    [5001, "观叶植物的冬季养护"],
    [5002, "绿植养护知识"],
    [5003, "常见办公室租摆植物介绍"],
    [5004, "各种绿植养护简介"],
    [5005, "六月份花事管理早知道"],
    [5006, "春节盆栽为何“过了初一，过不了十五”"],
    [5007, "居家植物 为萧瑟冬季注入活力"],
    [5008, "“养不死”的办公室绿色植物（一）"],
    [5009, "“养不死”的办公室绿色植物（二）"],
    [5010, "“养不死”的办公室绿色植物（三）"],
    [5011, "“养不死”的办公室绿色植物（四）"],
    [5012, "居室绿色植物：净化空气 有益健康"],
    [5013, "养绿色植物可防“暖气病”"],
    [5014, "室内观叶植物管理月历"],
    [5015, "哪些绿色植物适合在室内养？"]
  ];
  var side_item = $(".panel-body:last");
  var str = "";
  for (var i = 0; i < arr.length; i++) {
    if (i % 5 == 0) {
      str += "<ul>";
    }
    str += `<li><a href="/huayu/${arr[i][0]}.html" target="_blank">${arr[i][1]}</a></li>`;
    if (i % 5 == 4) {
      str += "</ul>";
    }
  }
  side_item.html(str);
})();