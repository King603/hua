var get_nav = (arr, num) => {
    var list = document.querySelectorAll(".common .cate-list")[num - 1];
    for (var elem of arr) {
        list.innerHTML += `<li><a href="${elem[0]}" target="_blank">${elem[1]}</a></li>`;
    }
}
var get_list = (arr, num) => {
    var list = document.querySelectorAll(".container h3");
    console.log(list);
    for (var elem of arr) {
        list[num].innerHTML += `<a href="/${elem[0]}/">${elem[1]}</a>`;
    }
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
    get_nav(arr, 1);
})();
(() => {
    var arr = [
        ["/yongshenghua/yongshenghua_box.html", "经典花盒"],
        ["/yongshenghua/yongshenghua_large.html", "巨型玫瑰"],
        ["/yongshenghua/yongshenghua_lavender.html", "薰衣草"],
        ["/yongshenghua/yongshenghua_vase.html", "永生瓶花"],
        ["/yongshenghua/yongshenghua_characteristic.html", "特色永生花"]
    ];
    get_nav(arr, 2);
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
    get_nav(arr, 3);
})();
(() => {
    var arr = [
        ["greenplant/", "绿色植物"],
        ["potflower/", "盆栽花卉"]
    ];
    get_list(arr,20);
    get_nav(arr, 4);
})();
(() => {
    var nav = document.getElementsByClassName("nav")[0];
    var arr = [
        ["/", "首页"],
        ["/flower", "鲜花"],
        ["/yongshenghua", "永生花"],
        ["/cake", "蛋糕"],
        ["/gifts", "礼品"],
        ["/gifts/chocolates", "巧克力"],
        ["/huayu", "花语大全"],
        ["/you", "设计师臻选鲜花"],
        ["/theme/chongyangjie", "重阳节鲜花礼品"],
    ];
    for (var i = 0; i < arr.length; i++) {
        nav.innerHTML += `<li><a href="${arr[i][0]}">${arr[i][1]}</a></li>`
    }
})();
(() => {
    var btn = document.querySelector(".container .fl_list");
    var arr = [
        ["flower", "鲜花"],
        ["yongshenghua", "永生花"],
        ["cake", "蛋糕"],
        ["gifts", "礼品"],
        ["giftsBasket", "礼篮"],
        ["Plant", "绿植花卉"]
    ];
    var str = "<ul>"
    for (var i = 0; i < arr.length; i++) {
        str += `<a href="/${arr[i][0]}/"><li style="margin-right:30px;">${arr[i][1]}</li></a>`
    }
    btn.innerHTML += str + "</ul>";
})();
(() => {
    var arr = [
        ["/aiqingxianhua/", "爱情鲜花"],
        ["/youqingxianhua/", "友情鲜花"],
        ["/shengriliwu/", "生日鲜花"],
        ["/songzhangbeixianhua/", "问候长辈"],
        ["/songlaoshixianhua/", "回报老师"],
        ["/tanbingweiwenxianhua/", "探病慰问"],
        ["/daoqianxianhua/", "道歉鲜花"],
        ["/hunqingxianhua/", "婚庆鲜花"],
        ["/zhufuqinghexianhua/", "祝贺鲜花"],
        ["/aisixianhua/", "哀思鲜花"],
        ["/businessFlower/", "开业乔迁"],
        ["/florist/", "自选鲜花"],
        ["/worldflora/", "港澳台送花"]
    ];
    get_list(arr,1);
})();
(() => {
    var arr = [
        ["meigui", "玫瑰"],
        ["hongmeigui", "红玫瑰"],
        ["fenmeigui", "粉玫瑰"],
        ["baimeigui", "白玫瑰"],
        ["zimeigui", "紫玫瑰"],
        ["lanmeigui", "蓝玫瑰"],
        ["xiangbinmeigui", "香槟玫瑰"],
        ["huangmeigui", "黄玫瑰"],
        ["kangnaixin", "康乃馨"],
        ["baihe", "百合"],
        ["fulang", "扶郎"],
        ["xiangrikui", "向日葵"],
        ["yujinxiang", "郁金香"],
        ["matilian", "马蹄莲"]
    ];
    get_list(arr,2);
})();
(() => {
    var arr = [
        ["hongse", '<i class="c-red"></i>红色'],
        ["fense", '<i class="c-pink"></i>粉色'],
        ["xiangbinse", '<i class="c-champagne"></i>香槟'],
        ["huangse", '<i class="c-yellow"></i>黄色'],
        ["baise", '<i class="c-white"></i>白色'],
        ["zise", '<i class="c-purple"></i>紫色'],
        ["lanse", '<i class="c-blue"></i>蓝色']
    ];
    get_list(arr,3);
})();
(() => {
    var arr = [
        ["/huashu/", "花束"],
        ["/hezhuanghua/", "花盒"],
        ["/pingchahua/", "瓶花"],
        ["/flower/JingPinXianHua/", "精品鲜花"],
        ["/giftsBasket/", "果篮"],
        ["/hualan/", "桌面花篮"],
        ["/businessFlower/kaiyehualan/", "开业花篮"]
    ];
    get_list(arr,4);
})();
(() => {
    var arr = [
        ["/businessFlower/kaiyehualan/", "开业鲜花"],
        ["/businessFlower/meetingflower/", "公司及会议鲜花"],
        ["/businessFlower/liyiflower/", "礼仪鲜花"]
    ];
    get_list(arr,5);
})();
(() => {
    var arr = [
        ["/tejiaxianhua/", "特价鲜花"],
        ["/xianhuajiage/0-150/", "150元以下"],
        ["/xianhuajiage/150-250/", "150-250元"],
        ["/xianhuajiage/250-350/", "250-350元"],
        ["/xianhuajiage/350-550/", "350-550元"],
        ["/xianhuajiage/550-800/", "550-800元"],
        ["/xianhuajiage/800-99999/", "800元以上"]
    ];
    get_list(arr,6);
})();
(() => {
    var arr = [
        ["/jiuduomeigui/", "9枝"],
        ["/shiduomeigui/", "10枝"],
        ["/shiyiduomeigui/", "11枝"],
        ["/shierduomeigui/", "12枝"],
        ["/shiliuduomeigui/", "16枝"],
        ["/shibaduomeigui/", "18枝"],
        ["/shijiuduomeigui/", "19枝"],
        ["/ershiduomeigui/", "20枝"],
        ["/ershierduomeigui/", "22枝"],
        ["/ershijiuduomeigui/", "29枝"],
        ["/sanshisanduomeigui/", "33枝"],
        ["/sanshiliuduomeigui/", "36枝"],
        ["/wushiduomeigui/", "50枝"],
        ["/liushiliuduomeigui/", "66枝"],
        ["/jiushijiuduomeigui/", "99枝"],
    ];
    get_list(arr,7);
})();
(() => {
    var arr = [
        ["/theme/yuandanjie/", "元旦节鲜花"],
        ["/theme/spring/", "春节鲜花"],
        ["/theme/yuanxiao/", "元宵节鲜花"],
        ["/theme/valentine/", "情人节鲜花"],
        ["/aisixianhua/", "清明节鲜花"],
        ["/theme/MothersDay/", "母亲节鲜花"],
        ["/theme/hushijie/", "护士节鲜花"],
        ["/theme/Day520/", "5.20情人节鲜花"],
        ["/theme/graduation/", "毕业鲜花"],
        ["/theme/ertongjie/", "儿童节鲜花"],
        ["/theme/duanwujie/", "端午节鲜花"],
        ["/theme/FatherDay/", "父亲节鲜花"],
        ["/theme/qixi/", "七夕节鲜花"],
        ["/theme/TeacherDay/", "教师节鲜花"],
        ["/theme/920/", "9.20表白节鲜花"],
        ["/theme/zhongqiu/", "中秋节鲜花"],
        ["/theme/chongyangjie/", "重阳节鲜花"],
        ["/theme/day1111/", "光棍节鲜花"],
        ["/theme/thanksday/", "感恩节鲜花"],
        ["/theme/xmas/", "圣诞节鲜花"]
    ];
    get_list(arr,8);
})();
(() => {
    var arr = [
        ["/yongshenghua/yongshenghua_box.html", "经典花盒"],
        ["/yongshenghua/yongshenghua_box.html", "巨型玫瑰"],
        ["/yongshenghua/yongshenghua_lavender.html", "薰衣草"]
    ];
    get_list(arr,9);
})();
(() => {
    var arr = [
        ["/cake/city/beijingdangao.html", "北京"],
        ["/cake/city/shanghaidangao.html", "上海"],
        ["/cake/city/shenzhendangao.html", "深圳"],
        ["/cake/city/guangzhoudangao.html", "广州"],
        ["/cake/city/tianjindangao.html", "天津"],
        ["/cake/city/chongqingdangao.html", "重庆"],
        ["/cake/city/chengdudangao.html", "成都"],
        ["/cake/city/shenyangdangao.html", "沈阳"],
        ["/cake/city/wuhandangao.html", "武汉"],
        ["/cake/city/xiandangao.html", "西安"],
        ["/cake/city/hangzhoudangao.html", "杭州"],
        ["/cake/city/nanjingdangao.html", "南京"],
        ["/cake/city/suzhoudangao.html", "苏州"],
        ["/cake/", "更多"],
    ];
    get_list(arr,10);
})();
(() => {
    var arr = [
        ["/cake/ganso/", "元祖蛋糕"],
        ["/cake/21cake/", "廿一客蛋糕"],
        ["/cake/lecake/", "诺心蛋糕"],
        ["/cake/incake/", "INCAKE蛋糕"],
        ["/cake/beisike/", "贝思客蛋糕"],
        ["/cake/boncake/", "BONCAKE蛋糕"],
        ["/cake/mcake/", "MCAKE蛋糕"],
        ["/cake/waffleboy/", "窝夫小子蛋糕"],
        ["/cake/micamika/", "米卡米卡蛋糕"],
        ["/cake/xfxb/", "幸福西饼蛋糕"],
        ["/cake/vcake/", "Vcake蛋糕"],
        ["/cake/heartcheesecake/", "心之和蛋糕"],
        ["/cake/allcitycake/", "全国蛋糕"],
    ];
    get_list(arr,11);
})();
(() => {
    var arr = [
        ["/cake/xiannaidangao/", "鲜奶蛋糕"],
        ["/cake/shuiguodangao/", "水果蛋糕"],
        ["/cake/qiaokelidangao/", "巧克力蛋糕"],
        ["/cake/musidangao/", "慕斯蛋糕"],
        ["/cake/wutangdangao/", "无糖蛋糕"],
        ["/cake/shengxiaodangao/", "生肖蛋糕"],
        ["/cake/qinglvdangao/", "情人蛋糕"],
        ["/cake/hunqingdangao/", "婚庆蛋糕"],
        ["/cake/zhushoudangao/", "祝寿蛋糕"],
        ["/cake/ertongdangao/", "儿童蛋糕"],
        ["/cake/oushidangao/", "欧式蛋糕"],
        ["/cake/jieqingdangao/", "节庆蛋糕"],
    ];
    get_list(arr,12);
})();
(() => {
    var arr = [
        ["/gifts/jinkouqiaokeli/", "进口巧克力"],
        ["/gifts/chocolate/", "巧罗手工巧克力"],
        ["/gifts/qiaokouqiaokeli/", "巧蔻巧克力"],
    ];
    get_list(arr,13);
})();
(() => {
    var arr = [
        ["/livingflower/", "泰国保鲜花"],
        ["/gifts/musicbox/", "音乐盒"],
        ["/gifts/crystallaser/", "水晶内雕"],
        ["/gifts/goldenflower/", "金箔花"],
        ["/gifts/cosmeticmirror/", "化妆镜"],
        ["/gifts/vase/", "花瓶/相框"],
        ["/qiyetuangou/gift_card.html", "礼品卡"],
        ["/katonghuashu/", "通花束"],
        ["/toys/", "牌公仔"],
        ["/gifts/jinkouqiaokeli/", "进口巧克力"],
        ["/gifts/chocolate/", "手工巧克力"],
        ["/gifts/qiaokouqiaokeli/", "巧蔻巧克力"],
        ["/gifts/shoushi/", "首饰"],
        ["/gifts/dengshi/", "创意灯饰"],
        ["/gifts/duorouzhiwupenzai/", "多肉植物盆栽"],
    ];
    get_list(arr,14);
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
    get_list(arr,15);
})();
(() => {
    var arr = [
        ["/gifts/to_lover/", "送恋人妻子礼品"],
        ["/gifts/to_friend/", "送朋友同事礼物"],
        ["/gifts/to_client/", "送客户礼品"],
        ["/gifts/to_teacher/", "送老师礼品"],
        ["/gifts/to_kids/", "送小孩礼品"],
        ["/gifts/to_leader/", "送领导礼品"],
        ["/gifts/to_parents/", "送父母长辈礼品"],
    ];
    get_list(arr,16);
})();
(() => {
    var arr = [
        ["/HelloKitty/", "Hello Kitty公仔"],
        ["/katonghuashu/", "卡通花束(公仔花束)"]
    ];
    get_list(arr,17);
})();
(() => {
    var arr = [
        ["/gongzaijiage/0-80/", "80元以下"],
        ["/gongzaijiage/80-150/", "80-150元"],
        ["/gongzaijiage/150-300/", "150-300元"],
        ["/gongzaijiage/300-500/", "300-500元"],
        ["/gongzaijiage/500-99999/", "500元以上"],
    ];
    get_list(arr,18);
})();
(() => {
    var arr = [
        ["/giftsBasket/guolan/", "水果花篮"],
        ["/giftsBasket/lilan/", "礼品花篮"],
    ];
    get_list(arr,19);
})();