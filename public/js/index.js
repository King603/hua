(() => {
    var xhyt = document.getElementById("xhyt");
    var arr = [
        ["aiqingxianhua", "爱情鲜花"],
        ["theme/birthday", "生日鲜花"],
        ["youqingxianhua", "友情鲜花"],
        ["songzhangbeixianhua", "问候长辈"],
        ["tanbingweiwenxianhua", "探病慰问"],
        ["daoqianxianhua", "道歉鲜花"],
        ["zhufuqinghexianhua", "祝贺鲜花"],
        ["hunqingxianhua", "婚庆鲜花"],
        ["businessFlower", "商务鲜花"]
    ];
    str = "";
    for (var i = 0; i < arr.length; i++) {
        str += `<li><a href="/${arr[i][0]}/" target="_blank">${arr[i][1]}</a></li>`
    }
    xhyt.innerHTML = str;
})();
(() => {
    var xhhc = document.getElementById("xhhc");
    var arr = [
        ["meigui", "玫瑰"],
        ["kangnaixin", "康乃馨"],
        ["baihe", "百合"],
        ["xiangrikui", "向日葵"],
        ["fulang", "扶郎"],
        ["yujinxiang", "郁金香"],
        ["matilian", "马蹄莲"]
    ];
    str = "";
    for (var i = 0; i < arr.length; i++) {
        str += `<li><a href="/${arr[i][0]}/" target="_blank">${arr[i][1]}</a></li>`
    }
    xhhc.innerHTML = str;
})();
(() => {
    var ysh = document.getElementById("ysh");
    var arr = [
        ["box", "经典花盒"],
        ["large", "巨型玫瑰"],
        ["lavender", "薰衣草"],
        ["vase", "永生瓶花"],
        ["characteristic", "特色永生花"]
    ];
    var str = "";
    for (var i = 0; i < arr.length; i++) {
        str += `
        <a href="/yongshenghua/yongshenghua_${arr[i][0]}.html" target="_blank">
            <img src="img/index/ysh_brand_menu_0${i + 1}.jpg" height="62" width="96">${arr[i][1]}
        </a>
        `
    }
    ysh.innerHTML = str;
})();
(() => {
    var cake_logo = document.getElementById("cake_logo");
    var arr = [
        ["ganso", "cake_brand_menu_01.jpg", "元祖"],
        ["21cake", "cake_brand_21cake.png", "廿一客蛋糕"],
        ["lecake", "cake_brand_menu_08.jpg", "诺心蛋糕"],
        ["incake", "cake_brand_s_16.png", "INCAKE"],
        ["beisike", "brandcake_beisike.png", ">贝思客"],
        ["boncake", "boncake.png", "BONCAKE"],
        ["mcake", "cake_brand_menu_09.jpg", "Mcake蛋糕"],
        ["micamika", "cake_brand_menu_05.jpg", "米卡米卡"],
        ["waffleboy", "cake_brand_menu_04.jpg", "窝夫小子"],
        ["xfxb", "cake_brand_menu_07.jpg", "幸福西饼"],
        ["heartcheesecake", "cake_brand_s_xinzhihe.png", "心之和蛋糕"],
        ["cakeboss", "cakebrand_cakeboss_96x62.png", "CAKEBOSS"],
        ["vcake", "cake_brand_menu_10.jpg", "Vcake蛋糕"]
    ];
    var str = "";
    for (var i = 0; i < arr.length; i++) {
        str += `
        <a href="/cake/${arr[i][0]}/" target="_blank">
            <img src="img/index/${arr[i][1]}" alt="" height="62" width="96">${arr[i][2]}
        </a>
        `
    }
    cake_logo.innerHTML = str + '<a href="/cake/allcitycake/" class="national" target="_blank">全国蛋糕</a>';
})();
(() => {
    var city = document.getElementById("city");
    var arr = [
        ["beijingdangao.html", "北京"],
        ["shanghaidangao.html", "上海"],
        ["guangzhoudangao.html", "广州"],
        ["shenzhendangao.html", "深圳"],
        ["tianjindangao.html", "天津"],
        ["chengdudangao.html", "成都"],
        ["chongqingdangao.html", "重庆"],
        ["xiandangao.html", "西安"],
        ["suzhoudangao.html", "苏州"],
        ["hangzhoudangao.html", "杭州"],
        ["nanjingdangao.html", "南京"],
        ["?city=合肥", "合肥"],
        ["wuhandangao.html", "武汉"],
        ["?city=郑州", "郑州"],
        ["?city=长沙", "长沙"],
        ["?city=南昌", "南昌"],
        ["haerbindangao.html", "哈尔滨"],
        ["shenyangdangao.html", "沈阳"],
        ["changchundangao.html", "长春"],
        ["daliandangao.html", "大连"],
        ["?city=青岛", "青岛"],
        ["?city=济南", "济南"],
        ["?city=福州", "福州"],
        ["?city=厦门", "厦门"],
        ["?city=昆明", "昆明"],
        ["?city=贵阳", "贵阳"],
        ["?city=南宁", "南宁"],
        ["shijiazhuangdangao.html", "石家庄"],
        ["?city=海口", "海口"],
        ["taiyuandangao.html", "太原"],
        ["?city=兰州", "兰州"],
        ["?city=乌鲁木齐", "乌鲁木齐"],
        ["tangshandangao.html", "唐山"],
        ["huhehaotedangao.html", "呼和浩特"],
        ["?city=东莞", "东莞"],
        ["?city=佛山", "佛山"],
        ["?city=宁波", "宁波"],
        ["?city=无锡", "无锡"],
        ["?city=温州", "温州"],
        ["?city=常州", "常州"]
    ];
    var str = "";
    for (var i = 0; i < arr.length; i++) {
        str += `
        <a href="/cake/city/${arr[i][0]}" target="_blank">${arr[i][1]}</a>
        `
    }
    city.innerHTML = str + '<a href="/cake/" target="_blank">更多&gt;&gt;</a>';
})();
(() => {
    var gifts = document.getElementById("gifts");
    var arr = [
        ["/Gifts/musicbox/", "gifts-musicbox.png", "音乐盒"],
        ["/Gifts/goldenflower/", "gifts-goldenflower.png", "金箔花"],
        ["/gifts/crystallaser/", "gifts-crystallaser.png", "3D水晶内雕"],
        ["/Gifts/shoushi/", "gifts-shoushi.png", "首饰/美妆"],
        ["/gifts/chocolates/", "gifts-chocolates.png", "巧克力"],
        ["/toys/", "gifts-toys.png", "公仔/睡枕"],
        ["/gifts/dengshi/", "gifts-dengshi.png", "摆件/其他"]
    ];
    var str = "";
    for (var i = 0; i < arr.length; i++) {
        str += `
        <a href="${arr[i][0]}" target="_blank">
            <img src="img/gifts/${arr[i][1]}" height="62" width="58">${arr[i][2]}
        </a>
        `
    }
    gifts.innerHTML = str;
})();
(() => {
    var nav = document.getElementById("nav");
    var arr = [
        ["/flower/", "", "鲜花"],
        ["/yongshenghua/", "", "永生花"],
        ["/cake/", "", "蛋糕"],
        ["/gifts/", "", "礼品"],
        ["/gifts/chocolates/", "", "巧克力"],
        ["/huayu/", "", "花语大全"],
        ["/qiyetuangou/", "", "企业团购"],
        ["/you/", "", "设计师臻选鲜花"],
        ["/theme/chongyangjie/", "color:#f60", "重阳节鲜花礼品"]
    ];
    var str = "";
    for (var i = 0; i < arr.length; i++) {
        str += `<li><a href="${arr[i][0]}" target="_blank" style="${arr[i][1]}">${arr[i][2]}</a></li>`
    }
    nav.innerHTML = str;
})();
(() => {
    var banner = document.getElementsByClassName("carousel-inner")[0];
    var ol = document.getElementsByClassName("carousel-indicators")[0];
    var arr = [
        ["slider/19_chongyangjie_pc.jpg", "/theme/chongyangjie/", "active"],
        ["slider/18_birthday_pc.jpg?830", "/theme/birthday/?830", ""],
        ["slider/17_banner_tc_pc.jpg", "/theme/tianchengzuo/", ""],
        ["slider/18_youflower_pc.jpg?830", "/you/", ""],
        ["banner/longtou.jpg", "/profile/17656.html", ""]
    ];
    var str1 = "";
    var str2 = "";
    for (var i = 0; i < arr.length; i++) {
        str1 += `
        <div class="item ${arr[i][2]}" id="banner0${i}">
            <div class="fill" style="background-image:url('${arr[i][0]}');"><a href="${arr[i][1]}"target="_blank"></a></div>
        </div>
        `
        str2 += `<li data-target="#fullCarousel" data-slide-to="${i}" class="${arr[i][2]}"></li>`
    }
    banner.innerHTML = str1;
    ol.innerHTML = str2;
})();
(() => {
    var bd = document.querySelector("#fullCarousel .bd")
    var arr = [
        [9010969, "你最珍贵", 248, ''],
        [9010731, "牵手一生", 196, ''],
        [9012055, "不变的心", 469, "last-child"]
    ];
    var str = "";
    for (var i = 0; i < arr.length; i++) {
        str += `
        <a class="${arr[i][3]}" href="/product/${arr[i][0]}.html?huaPid=homepage-f00${i + 1}" target="_blank">
            <img src="tuijian/rightbox_${arr[i][0]}.png" height="140" width="210">
            <div class="rightbox">
                <p class="rightbox-name">${arr[i][1]}</p>
                <p><span data-id="${arr[i][0]}">${arr[i][2]}</span>元</p>
            </div>
        </a>
        `
    }
    bd.innerHTML = str;
})();
(() => {
    var ul = document.querySelector(".container .toper-server ul")
    var arr = [
        ["/profile/why_choose_us.htm", "鲜花电商龙头", "销量领先，权威认证龙头企业"],
        ["/productpj/", "14年品牌 真实口碑", '最近评价<font id="pjCount">334029</font>条'],
        ["/XianHuaShiPai/", "鲜花实拍秀展示", "敢展现送前实拍的鲜花网"],
        ["/help/send_bytime.htm", "3小时送花", "全国连锁，3小时送2000城市"],
        ["/help/afterservice.htm", "200%退赔承诺", "可靠的售后保障"]
    ];
    var str = "";
    for (var i = 0; i < arr.length; i++) {
        str += `
        <li>
            <a href="${arr[i][0]}" target="_blank">
                <span class="ico ico-server-o${i + 1}"></span>
                <h4>${arr[i][1]}</h4>
                <p>${arr[i][2]}</p>
            </a>
        </li>
        `;
    }
    ul.innerHTML = str;
})();
(() => {
    var product_list = document.getElementsByClassName("product-list")[0];
    var arr = [
        ["9010947", "真爱如初", 299, 56],
        ["9012089", "爱在心头", 587, 108],
        ["9010849", "缘分", 298, 55]
    ];
    var str = "";
    for (var i = 0; i < arr.length; i++) {
        str += `
        <li>
            <a href="/product/${arr[i][0]}.html?huaPid=homepage-f00${i + 4}" target="_blank">
                <img src="tuijian/xianshi_${i + 1}_${arr[i][0]}.png" alt="" width="238" height="198">
                <div class="tuijian">
                    <p class="tuijian-desc">${arr[i][1]}</p>
                    <p class="tuijian-price price">￥<span data-id="${arr[i][0]}">${arr[i][2]}</span></p>
                    <p class="tuijian-discount"><img src="tuijian/tuijian_arrow.png" alt="" />直降<span data-id="${arr[i][0]}">${arr[i][3]}</span>元</p>
                </div>
            </a>
        </li>
        `;
    }
    product_list.innerHTML = str;
})();
var get_floor = (arr, num, st = "") => {
    var f = document.querySelectorAll(".container .floor .floor-products")[num - 1];
    var i = 1;
    var str = "";
    for (var elem of arr) {
        str += `
        <li>
            <a href="/product/${elem[1]}.html?huaPid=homepage-f50${i++}" target="_blank">
                <img class="img-box" data-original="newpic/${elem[1]}.jpg_220x240.jpg" src="newpic/${elem[1]}.jpg_220x240.jpg"
                    height="240" width="220">
                <span class="product-title">${st} · ${elem[0]}</span>
                <p class="price">
                    <span class="price-sign">&yen;</span>
                    <span class="price-num" data-pp="${elem[1]}">${elem[2]}</span>
                </p>
            </a>
        </li>
        `;
    }
    f.innerHTML = str;
}
(() => {
    var arr = [
        ["一往情深", "9010966", "239"],
        ["甜美公主", "9012154", "368"],
        ["一心一意", "9010011", "139"],
        ["不变的承诺", "9012177", "539"],
        ["恋恋情深", "9012243", "198"],
        ["浪漫心情", "9012228", "218"],
        ["99枝玫瑰赠德芙心语巧克力", "9092112", "629"],
        ["我只钟情你", "9012223", "236"]
    ];
    get_floor(arr, 1, "爱情");
})();
(() => {
    var arr = [
        ["馨情无限", "9012201", "238"],
        ["母爱", "9012092", "172"],
        ["温馨问候", "9012314", "285"],
        ["一缕清香", "9092149", "198"],
        ["恩情无限", "9012189", "178"],
        ["留住好时光", "9012332", "239"],
        ["幸福万年长", "9012204", "338"],
        ["感激", "9010736", "218"]
    ];
    get_floor(arr, 2, "送长辈");
})();
(() => {
    var arr = [
        ["花好月圆永生花台灯", "1073247", "298"],
        ["永生花带灯+蓝牙音箱/天空蓝", "1073243", "398"],
        ["我如此爱你-口红款999", "1073185", "588"],
        ["一生一世", "1073033", "198"],
        ["永生花带灯+蓝牙音箱/浪漫粉", "1073244", "398"],
        ["To温暖你心", "1073094", "288"],
        ["爱与祝福", "1073039", "198"],
        ["公主的水晶鞋&#183;粉", "1073125", "198"]
    ];
    get_floor(arr, 3, "永生花");
})();
(() => {
    var arr = [
        ["幸福西饼蛋糕·四重奏蛋糕(约2磅)", "5602016", "228"],
        ["幸福西饼蛋糕·浪漫果纷蛋糕(约2磅)", "5602045", "218"],
        ["诺心蛋糕·草莓拿破仑蛋糕(5-8人食)", "5902028", "336"],
        ["诺心蛋糕·王子蛋糕(2-4人食)", "5901021", "218"],
        ["元祖蛋糕·小圆香径鲜奶蛋糕(黄金燕麦)(8寸)", "5302064", "258"],
        ["窝夫小子蛋糕·累成狗焦糖海盐奶油蛋糕(6寸)", "5501138", "199"],
        ["Mcake蛋糕·小熊动物造型芝士味生日儿童生日宴会蛋糕(2磅)", "5142028", "298"],
        ["21CAKE蛋糕·百香果酸乳酪慕斯蛋糕(2磅)", "5222023", "298"]
    ];
    get_floor(arr, 4);
})();
(() => {
    var arr = [
        ["一路上有你/三色玫瑰", "1060038", "359"],
        ["紫轩-桃李满门", "1061019", "398"],
        ["公爵套装雕羽", "1082001", "189"],
        ["猫王&#183;原子唱机B612 蓝牙智能便携式音箱/篮色", "1077029", "298"],
        ["999纯金箔玫瑰+陶瓷花瓶", "1061006", "138"],
        ["宝石旋转木马/蓝", "1065004", "158"],
        ["十八音粉水晶钢琴", "1064035", "258"],
        ["星期耳钉礼盒", "1076062", "198"]
    ];
    get_floor(arr, 5, "礼品");
})();
(() => {
    var article = document.getElementsByClassName("article-list")[0];
    var arr = [
        ["/theme/tianchengzuo/", "天秤座鲜花礼物"],
        ["/huayu/20051115103610.htm", "鲜花枝数与其对应的含意"],
        ["/huayu/20051115103923.htm", "鲜花寓意 浪漫花语"],
        ["/huayu/20051116174222.htm", "通用送花祝福语-经典送花祝福语"],
        ["/huayu/20051115105306.htm", "送花的常识与技巧"],
        ["/huayu/20050405004253.htm", "女孩都喜欢别人送鲜花吗？"],
        ["/huayu/22994.html", "给爷爷送花有哪些选择？给老人送花推荐！"],
        ["/huayu/22993.html", "送花要注意什么？如何给老人，爱人，朋友送花？"],
        ["/huayu/14821.html", "12星座异地恋如何维持？送你一份送花攻略！"],
        ["/huayu/10786.html", "送花的含义，生活中怎么送花？"],
        ["/huayu/11031.html", "送女朋友鲜花，送花卡片写什么？"],
        ["/huayu/13297.html", "异地恋有大招，教你不分手！"],
        ["/huayu/23044.html", "给客户送礼一般如何送？给客户送礼有哪些讲究？"],
        ["/huayu/23043.html", "送女孩永不凋谢的花，有这几种选择"],
        ["/huayu/23042.html", "第一次给女朋友过生日，该送什么？"],
        ["/huayu/23040.html", "粉色系玫瑰有哪些？粉色系玫瑰有啥区别？"],
        ["/huayu/23039.html", "苏醒玫瑰花语是什么？苏醒玫瑰适合送给谁？"],
        ["/huayu/23038.html", "春天有哪些应季的花？"],
        ["/huayu/23037.html", "白色情人节贺卡留言，白色情人节祝福语精选"],
        ["/huayu/23036.html", "白色情人节是什么？白色情人节要干什么？"]
    ];
    var str = "";
    for (var i = 0; i < arr.length; i++) {
        str += `<li class="article-item"><a href="${arr[i][0]}" target="_blank">${arr[i][1]}</a></li>`;
    }
    article.innerHTML = str;
})();
(() => {
    var comments = document.getElementsByClassName("comments-list")[0];
    var arr = [
        ["avatar_default_04.jpg", "M*", "速度快，准时送达，还挺好看的！", "b844c15ef9854f4b8ad027abd235ad4a.jpg", "浙江杭州市余杭区", "2019-10-03"],
        ["avatar_default_05.jpg", "M*", "挺不错的，服务到位！还好看！", "5534c63513a24ef180919914456cd388.jpg", "浙江杭州市余杭区", "2019-10-03"],
        ["avatar_default_09.jpg", "李*海", "花非常飘靓，可惜没有送成功？下次再来？哈哈哈哈哈", "31cc7b203ac24841a53c64de550ff347.jpg", "广东中山市", "2019-10-03"],
        ["avatar_default_08.jpg", "王*", "认真负责，及时送到，花也漂亮！", "30db7e0ec8714e5991ca083581676716.jpeg", "陕西省西安市雁塔区", "2019-10-03"]
    ];
    var str = "";
    for (var i = 0; i < arr.length; i++) {
        str += `
        <li class="comments-item">
            <div class="comments-item-hd">
                <div class="comments-item-pic"><img
                        src="img/index/${arr[i][0]}" />
                </div>
                <div class="comments-item-info">
                    <span>${arr[i][1]}</span>
                    <div class="comments-item-rating comments-item-rating-5"></div>
                </div>
            </div>
            <div class="comments-item-bd">
                <div class="comments-item-desc"><a href="/product/9012177.html"
                        target="_blank">${arr[i][2]}</a></div>
                <div class="comments-item-imglist">
                    <div class="comments-item-imglist-item"><img
                            src="img/index/${arr[i][3]}" />
                    </div>
                </div>
                <div>
                    <address class="comments-item-address"><i class="iconfont"></i>${arr[i][4]}
                    </address>
                    <span class="comments-item-time">${arr[i][5]}</span>
                </div>
            </div>
        </li>
        `;
    }
    comments.innerHTML = str;
})();
var item = (floor, arr, num) => {
    var item = document.querySelectorAll(`.${floor} .item-list`)[num - 1];
    for (var elem of arr) {
        item.innerHTML += `<li><a href="${elem[0]}" target="_blank">${elem[1]}</a></li>`;
    }
}
(() => {
    var arr = [
        ["/gifts/crystallaser/", "水晶内雕-3D激光内雕水晶"],
        ["/livingflower/", "进口/泰国保鲜花"],
        ["/gifts/goldenflower/", "金箔玫瑰/金箔画"],
        ["/gifts/musicbox/", "精品音乐盒/八音盒"]
    ];
    item("f5", arr, 1);
})();
(() => {
    var arr = [
        ["/gifts/a_birthday/", "生日礼品"],
        ["/gifts/a_dating/", "约会/求爱礼品"],
        ["/gifts/a_wedding/", "结婚礼品"],
        ["/gifts/a_thankyou/", "感谢/祝福礼品"],
        ["/gifts/a_visit/", "拜访/探望礼品"],
        ["/gifts/a_anniversary/", "结婚纪念日礼品"]
    ];
    item("f5", arr, 2);
})();
(() => {
    var arr = [
        ["/ganso/", "元祖蛋糕"],
        ["/21cake/", "廿一客蛋糕"],
        ["/lecake/", "诺心蛋糕"],
        ["/incake/", "INCAKE蛋糕"],
        ["/beisike/", "贝思客蛋糕"],
        ["/boncake/", "BONCAKE"],
        ["/mcake/", "Mcake蛋糕"],
        ["/micamika/", "米卡米卡蛋糕"],
        ["/waffleboy/", "窝夫小子蛋糕"],
        ["/xfxb/", "幸福西饼蛋糕"],
        ["/heartcheesecake/", "心之和蛋糕"],
        ["/vcake/", "Vcake蛋糕"],
        ["/cakeboss/", "CAKEBOSS"],
        ["/allcitycake/", "全国蛋糕"]
    ];
    item("f4", arr, 1);
})();
(() => {
    var arr = [
        ["city/beijingdangao.html", "北京"],
        ["city/shanghaidangao.html", "上海"],
        ["city/shenzhendangao.html", "深圳"],
        ["city/guangzhoudangao.html", "广州"],
        ["city/tianjindangao.html", "天津"],
        ["city/chongqingdangao.html", "重庆"],
        ["city/chengdudangao.html", "成都"],
        ["city/shenyangdangao.html", "沈阳"],
        ["city/wuhandangao.html", "武汉"],
        ["city/xiandangao.html", "西安"],
        ["city/hangzhoudangao.html", "杭州"],
        ["city/nanjingdangao.html", "南京"],
        ["city/suzhoudangao.html", "苏州"],
        ["", "更多"]
    ];
    item("f4", arr, 2);
})();
(() => {
    var city_list=document.querySelector(".f4 ul");
    var arr = [
        ["beijingdangao.html", "北京"],
        ["shanghaidangao.html", "上海"],
        ["guangzhoudangao.html", "广州"],
        ["shenzhendangao.html", "深圳"],
        ["tianjindangao.html", "天津"],
        ["chengdudangao.html", "成都"],
        ["chongqingdangao.html", "重庆"],
        ["xiandangao.html", "西安"],
        ["suzhoudangao.html", "苏州"],
        ["hangzhoudangao.html", "杭州"],
        ["nanjingdangao.html", "南京"],
        ["?city=合肥", "合肥"],
        ["wuhandangao.html", "武汉"],
        ["?city=郑州", "郑州"],
        ["?city=长沙", "长沙"],
        ["?city=南昌", "南昌"],
        ["haerbindangao.html", "哈尔滨"],
        ["shenyangdangao.html", "沈阳"],
        ["changchundangao.html", "长春"],
        ["daliandangao.html", "大连"],
        ["?city=青岛", "青岛"],
        ["?city=济南", "济南"],
        ["?city=福州", "福州"],
        ["?city=厦门", "厦门"],
        ["?city=昆明", "昆明"],
        ["?city=贵阳", "贵阳"],
        ["?city=南宁", "南宁"],
        ["shijiazhuangdangao.html", "石家庄"],
        ["?city=海口", "海口"],
        ["taiyuandangao.html", "太原"],
        ["?city=兰州", "兰州"],
        ["?city=乌鲁木齐", "乌鲁木齐"],
        ["tangshandangao.html", "唐山"],
        ["huhehaotedangao.html", "呼和浩特"],
        ["?city=东莞", "东莞"],
        ["?city=佛山", "佛山"],
        ["?city=宁波", "宁波"],
        ["?city=无锡", "无锡"],
        ["?city=温州", "温州"],
        ["?city=常州", "常州"]
    ];
    for (var i = 0; i < arr.length; i++) {
        city_list.innerHTML += `<li><a href="/cake/city/${arr[i][0]}" target="_blank">${arr[i][1]}</a></li>`;
    }
})();
(() => {
    var yl=document.querySelector(".footer-link>div");
    var arr = [
        ["www.chinaname.cn", "中华取名网"],
        ["sz.fang.com", "深圳房产网"],
        ["www.juanpi.com", "卷皮网"],
        ["www.wbiao.cn", "腕表"],
        ["www.bbhun.com", "宝贝婚团网"],
        ["www.yuanlin365.com", "苗木"],
        ["www.zocai.com", "佐卡伊珠宝网"],
        ["www.blove.com", "钻石婚戒定制"],
        ["www.spider.com.cn", "杂志"],
        ["www.iyijiao.com", "中国青少年艺术教育网"],
        ["www.aiuw.com", "装修网"],
        ["www.dog126.com", "淘狗网"],
        ["www.liwuyou.com", "礼无忧网"],
        ["www.goupuzi.com", "宠物狗"],
        ["www.jiyouwang.com", "机友网"],
        ["www.cocodiy.com", "礼物网"],
        ["zx.meilele.com", "装修"],
        ["www.ipo3.com", "新三板"],
        ["www.huoming.com", "商标注册"],
        ["www.loho88.com", "眼镜店"]
    ];
    var str = "";
    for (var i = 0; i < arr.length; i++) {
        str += `<a href="http://${arr[i][0]}/" target="_blank">${arr[i][1]}</a>`
    }
    yl.innerHTML = str;
})();
(() => {
    var fh_1=document.getElementsByClassName("list-unstyled")[0];
    var arr = [
        ["default.htm", "服务声明"],
        ["faq.htm", "常见问题"],
        ["afterservice.htm", "售后服务"],
        ["send_shuoming.htm", "配送说明"],
        ["sendRange.htm", "配送范围"],
        ["ordercx/", "订单查询"],
        ["order_cancel.htm", "取消订单"],
        ["re_payment.htm", "补交货款"],
        ["private.htm", "隐私条款"],
        ["safe.htm", "安全条款"]
    ];
    var str = "";
    for (var i = 0; i < arr.length; i++) {
        str += `<li><a href="/help/${arr[i][0]}" target="_blank" rel="nofollow">${arr[i][1]}</a></li>`
    }
    fh_1.innerHTML = str;
})();
(() => {
    var fh_2=document.getElementsByClassName("list-unstyled")[1];
    var arr = [
        ["shop_step.htm", "中国鲜花礼品网购物流程"],
        ["demo.htm", "中国鲜花礼品网订购演示"],
        ["sendRange.htm", "鲜花网能配送哪些城市？"],
        ["afterservice.htm", "鲜花售后服务是怎么样的？"],
        ["Orde_in_advance.htm", "我应该提前多久预订鲜花？"]
    ];
    var str = "";
    for (var i = 0; i < arr.length; i++) {
        str += `<li><a href="/help/${arr[i][0]}" target="_blank">${arr[i][1]}</a></li>`
    }
    fh_2.innerHTML = str;
})();
(() => {
    var fh_3=document.getElementsByClassName("list-unstyled")[2];
    var arr = [
        ["http://sz.hua.com/", "深圳鲜花"],
        ["http://bj.hua.com/", "北京鲜花"],
        ["http://sh.hua.com/", "上海鲜花"],
        ["http://gz.hua.com/", "广州鲜花"],
        ["http://tj.hua.com/", "天津鲜花"],
        ["http://cq.hua.com/", "重庆鲜花"],
        ["http://cd.hua.com/", "成都鲜花"],
        ["http://xa.hua.com/", "西安鲜花"],
        ["http://wh.hua.com/", "武汉鲜花"],
        ["http://nj.hua.com/", "南京鲜花"],
        ["http://xm.hua.com/", "厦门鲜花"],
        ["/help/sendRange.htm", "更多城市"]
    ];
    var str = "";
    for (var i = 0; i < arr.length; i++) {
        str += `<li><a href="${arr[i][0]}" target="_blank" title="${arr[i][1]}">${arr[i][1]}</a></li>`
    }
    fh_3.innerHTML = str;
})();
(() => {
    var fs=document.querySelector(".footer-server>ul");
    var arr = [
        ["pp", "十四年品牌"],
        ["xldy", "销量领先"],
        ["bwkh_btn", "百万客户信赖"],
        ["ychy_btn", "时尚原创花艺"],
        ["ddsp_btn", "订单实拍"],
        ["djbz_btn", "低价保障"],
        ["sd_btn", "3小时配送"],
        ["tpcn_btn", "两倍退赔承诺"]
    ];
    var str = "";
    for (var i = 0; i < arr.length; i++) {
        str += `<li><a href="/profile/why_choose_us.htm#${arr[i][0]}" target="_blank"><span class="ico ico-server-w${i + 1}"></span>${arr[i][1]}</a></li>`
    }
    fs.innerHTML = str;
})();