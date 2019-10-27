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
    [1075009, "太阳能木头蓝牙音箱带小鸟亮灯", "", "大自然之音,户外高品质蓝牙音箱", 668, ""],
    [1075007, "太阳能灰色石头蓝牙音箱带蝴蝶和花朵亮灯", "", "大自然之音,户外高品质蓝牙音箱", 568, ""],
    [1075010, "太阳能熊猫抱竹子蓝牙音箱", "", "大自然之音,户外高品质蓝牙音箱", 668, ""],
    [1073243, "永生花带灯+蓝牙音箱/天空蓝", "永生花+台灯+蓝牙音箱", "看得到的美好，听得到的浪漫！", 398, "创意新品上市"],
    [1077029, "猫王&#183;原子唱机B612 蓝牙智能便携式音箱/篮色", "金属机身 拨杆操控", "猫王&#183;原子唱机B612 蓝牙智能便携式音箱/篮色", 298, "温馨首选"],
    [1073244, "永生花带灯+蓝牙音箱/浪漫粉", "永生花+台灯+蓝牙音箱", "看得到的美好，听得到的浪漫！", 398, "好评无数"],
    [1073242, "永生花带灯+蓝牙音箱/玫瑰红", "永生花+台灯+蓝牙音箱", "创意新品，看得到的美好，听得到的浪漫！", 398, "创意新品上市"],
    [1073250, "HelloKitty一心一意-蓝牙音箱", "KT创意设计 手工制作", "永生花蓝牙音箱+小夜灯", 429, "KT创意设计"],
    [1073248, "Hellokitty永生花香薰机加湿器", "创意设计香薰机+加湿器", "永生玫瑰香薰机加湿器", 339, "创意双功能款"],
    [1077027, "猫王&#183;原子唱机B612 蓝牙智能便携式音箱/粉色", "黎贝卡的异想世界", "猫王&#183;原子唱机B612 蓝牙智能便携式音箱/粉色", 298, "温馨首选"],
    [1077020, "猫王小王子蓝牙便携式音箱 MW-1", "便携式蓝牙音箱（胡桃木）", "便携式蓝牙音箱", 349, "原木手工音箱"],
    [1077021, "猫王小王子FM/蓝牙便携式音箱 MW-2", "礼盒装 花纹精美木质坚实", "猫王小王子FM/蓝牙便携式音箱", 539, "送母亲礼盒装"],
    [1077025, "猫王小王子FM/蓝牙便携式音箱/OTR红", "容颜妖娆 小巧迷人", "猫王小王子FM/蓝牙便携式音箱/红色", 398, "温馨首选"],
    [1077024, "猫王小王子FM/蓝牙便携式音箱/粉色", "粉系萌宠 暖音妙品", "猫王小王子FM/蓝牙便携式音箱/粉色", 398, "温馨首选"],
    [1077022, "猫王&#183;乌托邦 复古蓝牙音箱 MW-6", "原木手工 匠人匠心", "猫王乌托邦FM复古蓝牙音箱复古收音机音响（胡桃木）", 1099, "匠心原木手工"],
    [1077026, "猫王小王子FM/蓝牙便携式音箱/黑色", "重金属机车风", "猫王小王子FM/蓝牙便携式音箱/黑色", 398, "温馨首选"],
    [1075008, "太阳能石头花盆蓝牙音箱", "", "大自然之音,户外高品质蓝牙音箱", 568, ""],
    [1075006, "太阳能蘑菇蓝牙音箱", "", "大自然之音,户外高品质蓝牙音箱", 568, ""],
    [1075005, "太阳能鹅卵石蓝牙音箱", "", "大自然之音,户外高品质蓝牙音箱", 468, ""],
    [1075004, "太阳能土黄色石头蓝牙音箱", "", "大自然之音,户外高品质蓝牙音箱", 498, ""],
    [1075003, "太阳能灰色石头蓝牙音箱", "", "大自然之音,户外高品质蓝牙音箱", 468, ""]
  ];
  var dataList = $("#dataList");
  console.log(dataList);
  var str = "";
  for (var elem of arr) {
    str += `
    <li class="product-list-item">
      <a href="/product/${elem[0]}.html" target="_blank">
        <div class="product-list-item__pic">
          <img src="../img/375x409.png"
            data-original="../newpic/${elem[0]}.jpg_220x240.jpg" alt="${elem[1]}" />
        </div>
        <div class="product-list-item__info">
          <div class="product-info-tag">
            <span>${elem[2]}</span>
          </div>
          <div class="product-info-name">${elem[1]}-${elem[3]}</div>
          <div class="product-info-price">&yen;${elem[4]}</div>
          <hr />
          <div class="product-info-light">${elem[5]}</div>
        </div>
      </a>
    </li>`;
  }
  dataList.html(str);
})();

