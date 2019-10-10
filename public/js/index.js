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
    str = "";
    for (var i = 0; i < arr.length; i++) {
        str += `<li style="width:30%"><a href="/${arr[i][0]}/" target="_blank">${arr[i][1]}</a></li>`
    }
    xhyt.innerHTML = str;
})();
(() => {
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
        str += `<li style="width:20%"><a href="/${arr[i][0]}/" target="_blank">${arr[i][1]}</a></li>`
    }
    xhhc.innerHTML = str;
})();
(() => {
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
    var arr = [
        [9010969, "你最珍贵", 248, ''],
        [9010731, "牵手一生", 196, ''],
        [9012055, "不变的心", 469, 'class="last-child"']
    ];
    var str = "";
    for (var i = 0; i < arr.length; i++) {
        str += `
        <a ${arr[i][3]} href="/product/${arr[i][0]}.html?huaPid=homepage-f00${i + 1}" target="_blank">
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
    toper_server_ul.innerHTML = str;
})();
(() => {
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
    xstj.innerHTML = str;
})();
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
    var str = "";
    for (var i = 0; i < arr.length; i++) {
        str += `
        <li>
            <a href="/product/${arr[i][1]}.html?huaPid=homepage-f10${i + 1}" target="_blank">
                <img class="img-box" data-original="newpic/${arr[i][1]}.jpg_220x240.jpg" src="newpic/${arr[i][1]}.jpg_220x240.jpg"
                    height="240" width="220">
                <span class="product-title">爱情 · ${arr[i][0]}</span>
                <p class="price">
                    <span class="price-sign">&yen;</span>
                    <span class="price-num" data-pp="${arr[i][1]}">${arr[i][2]}</span>
                </p>
            </a>
        </li>
        `;
    }
    f1.innerHTML = str;
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
    var str = "";
    for (var i = 0; i < arr.length; i++) {
        str += `
        <li>
            <a href="/product/${arr[i][1]}.html?huaPid=homepage-f20${i + 1}" target="_blank">
                <img class="img-box" data-original="newpic/${arr[i][1]}.jpg_220x240.jpg" src="newpic/${arr[i][1]}.jpg_220x240.jpg"
                    height="240" width="220">
                <span class="product-title">送长辈 ·  ${arr[i][0]}</span>
                <p class="price">
                    <span class="price-sign">&yen;</span>
                    <span class="price-num" data-pp="${arr[i][1]}">${arr[i][2]}</span>
                </p>
            </a>
        </li>
        `
    }
    f2.innerHTML = str;
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
    var str = "";
    for (var i = 0; i < arr.length; i++) {
        str += `
        <li>
            <a href="/product/${arr[i][1]}.html?huaPid=homepage-f30${i + 1}" target="_blank">
                <img class="img-box" data-original="newpic/${arr[i][1]}.jpg_220x240.jpg" src="newpic/${arr[i][1]}.jpg_220x240.jpg"
                    height="240" width="220">
                <span class="product-title">永生花 · ${arr[i][0]}</span>
                <p class="price">
                    <span class="price-sign">&yen;</span>
                    <span class="price-num" data-pp="${arr[i][1]}">${arr[i][2]}</span>
                </p>
            </a>
        </li>
        `
    }
    f3.innerHTML = str;
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
    var str = "";
    for (var i = 0; i < arr.length; i++) {
        str += `
        <li>
            <a href="/product/${arr[i][1]}.html?huaPid=homepage-f40${i + 1}" target="_blank">
                <img class="img-box" data-original="newpic/${arr[i][1]}.jpg_220x240.jpg" src="newpic/${arr[i][1]}.jpg_220x240.jpg"
                    height="240" width="220">
                <span class="product-title">${arr[i][0]}</span>
                <p class="price">
                    <span class="price-sign">&yen;</span>
                    <span class="price-num" data-pp="${arr[i][1]}">${arr[i][2]}</span>
                </p>
            </a>
        </li>
        `;
    }
    f4.innerHTML = str;
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
    var str = "";
    for (var i = 0; i < arr.length; i++) {
        str += `
        <li>
            <a href="/product/${arr[i][1]}.html?huaPid=homepage-f50${i + 1}" target="_blank">
                <img class="img-box" data-original="newpic/${arr[i][1]}.jpg_220x240.jpg" src="newpic/${arr[i][1]}.jpg_220x240.jpg"
                    height="240" width="220">
                <span class="product-title">礼品 · ${arr[i][0]}</span>
                <p class="price">
                    <span class="price-sign">&yen;</span>
                    <span class="price-num" data-pp="${arr[i][1]}">${arr[i][2]}</span>
                </p>
            </a>
        </li>
        `
    }
    f5.innerHTML = str;
})();
(() => {
    var arr = [
        ["/theme/tianchengzuo/", "天秤座鲜花礼物"],
        ["/huayu/20051115103610.htm", "鲜花枝数与其对应的含意"],
        ["/huayu/20051115103923.htm", "鲜花寓意 浪漫花语"],
        ["/huayu/20051116174222.htm", "通用送花祝福语-经典送花祝福语"],
        ["/huayu/20051115105306.htm", "送花的常识与技巧"],
        ["/huayu/20050405004253.htm", "女孩都喜欢别人送鲜花吗？"],
        ["//www.hua.com/huayu/22994.html", "给爷爷送花有哪些选择？给老人送花推荐！"],
        ["//www.hua.com/huayu/22993.html", "送花要注意什么？如何给老人，爱人，朋友送花？"],
        ["//www.hua.com/huayu/14821.html", "12星座异地恋如何维持？送你一份送花攻略！"],
        ["//www.hua.com/huayu/10786.html", "送花的含义，生活中怎么送花？"],
        ["//www.hua.com/huayu/11031.html", "送女朋友鲜花，送花卡片写什么？"],
        ["//www.hua.com/huayu/13297.html", "异地恋有大招，教你不分手！"],
        ["//www.hua.com/huayu/23044.html", "给客户送礼一般如何送？给客户送礼有哪些讲究？"],
        ["//www.hua.com/huayu/23043.html", "送女孩永不凋谢的花，有这几种选择"],
        ["//www.hua.com/huayu/23042.html", "第一次给女朋友过生日，该送什么？"],
        ["//www.hua.com/huayu/23040.html", "粉色系玫瑰有哪些？粉色系玫瑰有啥区别？"],
        ["//www.hua.com/huayu/23039.html", "苏醒玫瑰花语是什么？苏醒玫瑰适合送给谁？"],
        ["//www.hua.com/huayu/23038.html", "春天有哪些应季的花？"],
        ["//www.hua.com/huayu/23037.html", "白色情人节贺卡留言，白色情人节祝福语精选"],
        ["//www.hua.com/huayu/23036.html", "白色情人节是什么？白色情人节要干什么？"]
    ];
    var str = "";
    for (var i = 0; i < arr.length; i++) {
        str += `<li class="article-item"><a href="${arr[i][0]}" target="_blank">${arr[i][1]}</a></li>`
    }
    rmzx.innerHTML = str;
})();
(() => {
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
        `
    }
    comments.innerHTML = str;
})();
(() => {
    var arr = [
        ["/gifts/crystallaser/", "水晶内雕-3D激光内雕水晶"],
        ["/livingflower/", "进口/泰国保鲜花"],
        ["/gifts/goldenflower/", "金箔玫瑰/金箔画"],
        ["/gifts/musicbox/", "精品音乐盒/八音盒"]
    ];
    str = "";
    for (var i = 0; i < arr.length; i++) {
        str += `<li><a href="${arr[i][0]}" target="_blank">${arr[i][1]}</a></li>`
    }
    gifts_xg.innerHTML = str;
})();
(() => {
    var arr = [
        ["/a_birthday/", "生日礼品"],
        ["/a_dating/", "约会/求爱礼品"],
        ["/a_wedding/", "结婚礼品"],
        ["/a_thankyou/", "感谢/祝福礼品"],
        ["/a_visit/", "拜访/探望礼品"],
        ["/a_anniversary/", "结婚纪念日礼品"]
    ];
    str = "";
    for (var i = 0; i < arr.length; i++) {
        str += `<li><a href="/gifts${arr[i][0]}" target="_blank">${arr[i][1]}</a></li>`
    }
    gifts_yt.innerHTML = str;
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
    str = "";
    for (var i = 0; i < arr.length; i++) {
        str += `<li><a href="/cake${arr[i][0]}" target="_blank">${arr[i][1]}&nbsp;</a></li>`
    }
    cake_ul.innerHTML = str;
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
    var str = "";
    for (var i = 0; i < arr.length; i++) {
        str += `<li><a href="/cake/${arr[i][0]}" target="_blank">  ${arr[i][1]}</a></li>`;
    }
    cake_list.innerHTML = str;
})();
(() => {
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
        ["?city=海口" , "海口"],
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