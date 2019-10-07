(() => {
    var arr = [
        ["aiqingxianhua", "爱情鲜花"],
        ["shengriliwu", "生日鲜花"],
        ["youqingxianhua", "友情鲜花"],
        ["songzhangbeixianhua", "问候长辈"],
        ["tanbingweiwenxianhua", "探病慰问"],
        ["daoqianxianhua", "道歉鲜花"],
        ["zhufuqinghexianhua", "祝贺鲜花"],
        ["hunqingxianhua", "婚庆鲜花"],
        ["businessFlower", "商务鲜花"]
    ];
    for (var i = 0; i < arr.length; i++) {
        xhyt.innerHTML += `<li style="width:30%"><a href="/${arr[i][0]}/" target="_blank">${arr[i][1]}</a></li>`
    }
})();
(() => {
    var arr = [
        ["box", "经典花盒"],
        ["large", "巨型玫瑰"],
        ["lavender", "薰衣草"],
        ["vase", "永生瓶花"],
        ["characteristic", "特色永生花"]
    ];
    for (var i = 0; i < arr.length; i++) {
        ysh.innerHTML += `<li><a target="_blank" href="/yongshenghua/yongshenghua_${arr[i][0]}.html">${arr[i][1]}</a></li>`
    }
})();
(() => {
    var arr = [
        ["livingflower/", "泰国保鲜花"],
        ["gifts/musicbox/", "音乐盒"],
        ["gifts/crystallaser/", "水晶内雕"],
        ["gifts/goldenflower/", "金箔花"],
        ["gifts/cosmeticmirror/", "化妆镜"],
        ["gifts/kingking/", "香薰系列"],
        ["gifts/bestlife/", "音乐睡枕"],
        ["gifts/vase/", "花瓶/相框"],
        ["katonghuashu/", "卡通花束"],
        ["toys/", "品牌公仔"],
        ["gifts/shoushi/", "首饰"],
        ["gifts/giftstalk/", "Giftstalk精选"],
        ["gifts/dengshi/", "创意礼品"],
        ["qiyetuangou/gift_card.html", "礼品卡"],
        ["gifts/duorouzhiwupenzai/", "多肉植物盆栽"]
    ];
    for (var i = 0; i < arr.length; i++) {
        lp.innerHTML += `<li><a target="_blank" href="/${arr[i][0]}">${arr[i][1]}</a></li>`
    }
})();
(() => {
    var arr = [
        ["greenplant/", "绿色植物"],
        ["potflower/", "盆栽花卉"]
    ];
    for (var i = 0; i < arr.length; i++) {
        plant1.innerHTML += `<li><a target="_blank" href="/Plant/${arr[i][0]}">${arr[i][1]}</a></li>`
        plant2.innerHTML += `<a target="_blank" href="/Plant/${arr[i][0]}">${arr[i][1]}</a>`
    }
})();
(() => {
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
    var arr = [
        ["flower", "鲜花"],
        ["yongshenghua", "永生花"],
        ["cake", "蛋糕"],
        ["gifts", "礼品"],
        ["giftsBasket", "礼篮"],
        ["Plant", "绿植花卉"]
    ];
    for (var i = 0; i < arr.length; i++) {
        btn.innerHTML += `<a href="/${arr[i][0]}/"><li style="margin-right:30px;">${arr[i][1]}</li></a>`
    }
})();
(() => {
    var arr = [
        ["aiqingxianhua", "爱情鲜花", ""],
        ["youqingxianhua", "友情鲜花", ""],
        ["shengriliwu", "生日鲜花", ""],
        ["songzhangbeixianhua", "问候长辈", ""],
        ["songlaoshixianhua", "回报老师", ""],
        ["tanbingweiwenxianhua", "探病慰问", ""],
        ["daoqianxianhua", "道歉鲜花", ""],
        ["hunqingxianhua", "婚庆鲜花", ""],
        ["zhufuqinghexianhua", "祝贺鲜花", ""],
        ["aisixianhua", "哀思鲜花", ""],
        ["businessFlower", "开业乔迁", "<br>"],
        ["florist", "自选鲜花", ""],
        ["worldflora", "港澳台送花", ""]
    ];
    for (var i = 0; i < arr.length; i++) {
        yt1.innerHTML += `<a href="/${arr[i][0]}/">${arr[i][1]}</a> ${arr[i][2]}`
    }
})();
(() => {
    var arr = [
        ["meigui", "玫瑰", ""],
        ["hongmeigui", "红玫瑰", ""],
        ["fenmeigui", "粉玫瑰", ""],
        ["baimeigui", "白玫瑰", ""],
        ["zimeigui", "紫玫瑰", ""],
        ["lanmeigui", "蓝玫瑰", ""],
        ["xiangbinmeigui", "香槟玫瑰", ""],
        ["huangmeigui", "黄玫瑰", ""],
        ["kangnaixin", "康乃馨", ""],
        ["baihe", "百合", "<br>"],
        ["fulang", "扶郎", ""],
        ["xiangrikui", "向日葵", ""],
        ["yujinxiang", "郁金香", ""],
        ["matilian", "马蹄莲", ""]
    ];
    for (var i = 0; i < arr.length; i++) {
        hc.innerHTML += `<a href="/${arr[i][0]}/">${arr[i][1]}</a>${arr[i][2]}`
    }
})();
(() => {
    var arr = [
        ["hongse", "red", "红色"],
        ["fense", "pink", "粉色"],
        ["xiangbinse", "champagne", "香槟"],
        ["huangse", "yellow", "黄色"],
        ["baise", "white", "白色"],
        ["zise", "purple", "紫色"],
        ["lanse", "blue", "蓝色"]
    ];
    for (var i = 0; i < arr.length; i++) {
        ys.innerHTML += `<a href="/${arr[i][0]}xianhua/"><i class="c-${arr[i][1]}"></i>${arr[i][2]}</a>`
    }
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
    for (var i = 0; i < arr.length; i++) {
        lb1.innerHTML += `<a href="${arr[i][0]}">${arr[i][1]}</a>`
    }
})();
(() => {
    var arr = [
        ["kaiyehualan", "开业鲜花"],
        ["meetingflower", "公司及会议鲜花"],
        ["liyiflower", "礼仪鲜花"]
    ];
    for (var i = 0; i < arr.length; i++) {
        sw.innerHTML += `<a href="/businessFlower/${arr[i][0]}/">${arr[i][1]}</a>`
    }
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
    for (var i = 0; i < arr.length; i++) {
        jg.innerHTML += `<a href="${arr[i][0]}">${arr[i][1]}</a>`
    }
})();
(() => {
    var arr = [
        ["jiu", 9],
        ["shi", 10],
        ["shiyi", 11],
        ["shier", 12],
        ["shiliu", 16],
        ["shiba", 18],
        ["shijiu", 19],
        ["ershi", 20],
        ["ershier", 22],
        ["ershijiu", 29],
        ["sanshisan", 33],
        ["sanshiliu", 36],
        ["wushi", 50],
        ["liushiliu", 66],
        ["jiushijiu", 99],
    ];
    for (var i = 0; i < arr.length; i++) {
        zs.innerHTML += `<a href="/${arr[i][0]}duomeigui/">${arr[i][1]}枝</a>`
    }
})();
(() => {
    var arr = [
        ["/theme/yuandanjie/", "元旦节", ""],
        ["/theme/spring/", "春节", ""],
        ["/theme/yuanxiao/", "元宵节", ""],
        ["/theme/valentine/", "情人节", ""],
        ["/aisixianhua/", "清明节", ""],
        ["/theme/MothersDay/", "母亲节", ""],
        ["/theme/hushijie/", "护士节", ""],
        ["/theme/Day520/", "5.20情人节", "<br>"],
        ["/theme/graduation/", "毕业", ""],
        ["/theme/ertongjie/", "儿童节", ""],
        ["/theme/duanwujie/", "端午节", ""],
        ["/theme/FatherDay/", "父亲节", ""],
        ["/theme/qixi/", "七夕节", ""],
        ["/theme/TeacherDay/", "教师节", ""],
        ["/theme/920/", "9.20表白节", ""],
        ["/theme/zhongqiu/", "中秋节", ""],
        ["/theme/chongyangjie/", "重阳节", ""],
        ["/theme/day1111/", "光棍节", ""],
        ["/theme/thanksday/", "感恩节", ""],
        ["/theme/xmas/", "圣诞节", ""]
    ];
    for (var i = 0; i < arr.length; i++) {
        jr.innerHTML += `<a href="${arr[i][0]}">${arr[i][1]}鲜花</a>${arr[i][2]}`
    }
})();
(() => {
    var arr = [
        ["box", "经典花盒"],
        ["box", "巨型玫瑰"],
        ["lavender", "薰衣草"]
    ];
    for (var i = 0; i < arr.length; i++) {
        yongshenghua.innerHTML += `<a href="/yongshenghua/yongshenghua_${arr[i][0]}.html">${arr[i][1]}</a>`
    }
})();
(() => {
    var arr = [
        ["city/beijingdangao.html", "北京", ""],
        ["city/shanghaidangao.html", "上海", ""],
        ["city/shenzhendangao.html", "深圳", ""],
        ["city/guangzhoudangao.html", "广州", ""],
        ["city/tianjindangao.html", "天津", ""],
        ["city/chongqingdangao.html", "重庆", ""],
        ["city/chengdudangao.html", "成都", ""],
        ["city/shenyangdangao.html", "沈阳", ""],
        ["city/wuhandangao.html", "武汉", "<br />"],
        ["city/xiandangao.html", "西安", ""],
        ["city/hangzhoudangao.html", "杭州", ""],
        ["city/nanjingdangao.html", "南京", ""],
        ["city/suzhoudangao.html", "苏州", ""],
        ["", "更多", ""],
    ];
    for (var i = 0; i < arr.length; i++) {
        city.innerHTML += `<a href="/cake/${arr[i][0]}" target="_blank">${arr[i][1]}</a>${arr[i][2]}`
    }
})();
(() => {
    var arr = [
        ["ganso/", "元祖蛋糕", ""],
        ["21cake/", "廿一客蛋糕", ""],
        ["lecake/", "诺心蛋糕", ""],
        ["incake/", "INCAKE蛋糕", ""],
        ["beisike/", "贝思客蛋糕", ""],
        ["boncake/", "BONCAKE蛋糕", ""],
        ["mcake/", "MCAKE蛋糕", "<br />"],
        ["waffleboy/", "窝夫小子蛋糕", ""],
        ["micamika/", "米卡米卡蛋糕", ""],
        ["xfxb/", "幸福西饼蛋糕", ""],
        ["vcake/", "Vcake蛋糕", ""],
        ["heartcheesecake/", "心之和蛋糕", ""],
        ["allcitycake/", "全国蛋糕", ""],
    ];
    for (var i = 0; i < arr.length; i++) {
        pb.innerHTML += `<a href="/cake/${arr[i][0]}">${arr[i][1]}</a>${arr[i][2]}`
    }
})();
(() => {
    var arr = [
        ["xiannaidangao/", "鲜奶蛋糕", ""],
        ["shuiguodangao/", "水果蛋糕", ""],
        ["qiaokelidangao/", "巧克力蛋糕", ""],
        ["musidangao/", "慕斯蛋糕", ""],
        ["wutangdangao/", "无糖蛋糕", ""],
        ["shengxiaodangao/", "生肖蛋糕", ""],
        ["qinglvdangao/", "情人蛋糕", "<br>"],
        ["hunqingdangao/", "婚庆蛋糕", ""],
        ["zhushoudangao/", "祝寿蛋糕", ""],
        ["ertongdangao/", "儿童蛋糕", ""],
        ["oushidangao/", "欧式蛋糕", ""],
        ["jieqingdangao/", "节庆蛋糕", ""],
    ];
    for (var i = 0; i < arr.length; i++) {
        fl1.innerHTML += `<a href="/cake/${arr[i][0]}">${arr[i][1]}</a>${arr[i][2]}`
    }
})();
(() => {
    var arr = [
        ["jinkouqiaokeli/", "进口巧克力"],
        ["chocolate/", "巧罗手工巧克力"],
        ["qiaokouqiaokeli/", "巧蔻巧克力"],
    ];
    for (var i = 0; i < arr.length; i++) {
        fl2.innerHTML += `<a href="/gifts/${arr[i][0]}">${arr[i][1]}</a>`
    }
})();
(() => {
    var arr = [
        ["/livingflower/", "泰国保鲜花", ""],
        ["/gifts/musicbox/", "音乐盒", ""],
        ["/gifts/crystallaser/", "水晶内雕", ""],
        ["/gifts/goldenflower/", "金箔花", ""],
        ["/gifts/cosmeticmirror/", "化妆镜", ""],
        ["/gifts/vase/", "花瓶/相框", "<br />"],
        ["/qiyetuangou/gift_card.html", "礼品卡", ""],
        ["/katonghuashu/", "通花束", ""],
        ["/toys/", "牌公仔", ""],
        ["/gifts/jinkouqiaokeli/", "进口巧克力", ""],
        ["/gifts/chocolate/", "手工巧克力", ""],
        ["/gifts/qiaokouqiaokeli/", "巧蔻巧克力", ""],
        ["/gifts/shoushi/", "首饰", ""],
        ["/gifts/dengshi/", "创意灯饰", ""],
        ["/gifts/duorouzhiwupenzai/", "多肉植物盆栽", ""],
    ];
    for (var i = 0; i < arr.length; i++) {
        lb2.innerHTML += `<a href="/gifts/${arr[i][0]}">${arr[i][1]}</a>${arr[i][2]}`
    }
})();
(() => {
    var arr = [
        ["birthday/", "生日礼品", ""],
        ["dating/", "约会/求爱礼品", ""],
        ["wedding/", "结婚礼品", ""],
        ["thankyou/", "感谢/祝福礼品", ""],
        ["visit/", "拜访/探望礼品", "<br>"],
        ["anniversary/", "结婚纪念日礼品", ""],
        ["qiaoqian/", "乔迁礼品", ""],
        ["home/", "家居礼品", ""]
    ];
    for (var i = 0; i < arr.length; i++) {
        yt2.innerHTML += `<a href="/gifts/a_${arr[i][0]}">${arr[i][1]}</a>${arr[i][2]}`
    }
})();
(() => {
    var arr = [
        ["lover/", "送恋人妻子礼品", ""],
        ["friend/", "送朋友同事礼物", ""],
        ["client/", "送客户礼品", ""],
        ["teacher/", "送老师礼品", ""],
        ["kids/", "送小孩礼品", "<br>"],
        ["leader/", "送领导礼品", ""],
        ["parents/", "送父母长辈礼品", ""],
    ];
    for (var i = 0; i < arr.length; i++) {
        dx.innerHTML += `<a href="/gifts/to_${arr[i][0]}">${arr[i][1]}</a>${arr[i][2]}`
    }
})();
(() => {
    var arr = [
        ["/HelloKitty/","Hello Kitty公仔"],
        ["/katonghuashu/","卡通花束(公仔花束)"]
    ];
    for (var i = 0; i < arr.length; i++) {
        toy.innerHTML += `<a href="${arr[i][0]}">${arr[i][1]}</a>`
    }
})();
(() => {
    var arr = [
        ["0-80/", "80元以下"],
        ["80-150/", "80-150元"],
        ["150-300/", "150-300元"],
        ["300-500/", "300-500元"],
        ["500-99999/", "500元以上"],
    ];
    for (var i = 0; i < arr.length; i++) {
        price.innerHTML += `<a href="/gongzaijiage/${arr[i][0]}">${arr[i][1]}</a>`
    }
})();
(() => {
    var arr = [
        ["guolan/", "水果花篮"],
        ["lilan/", "礼品花篮"],
    ];
    for (var i = 0; i < arr.length; i++) {
        ll.innerHTML += `<a href="/giftsBasket/${arr[i][0]}">${arr[i][1]}</a>`
    }
})();