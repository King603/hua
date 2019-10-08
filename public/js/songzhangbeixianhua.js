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
        ["/theme/birthday/", "生日鲜花礼品"],
    ];
    for (var i = 0; i < arr.length; i++) {
        nav.innerHTML += `<li><a href="${arr[i][0]}">${arr[i][1]}</a></li>`
    }
})();
(() => {
    var arr = [
        ["/aiqingxianhua/", "爱情鲜花"],
        ["/youqingxianhua/", "友情鲜花"],
        ["/theme/birthday/", "生日鲜花"],
        ["/songzhangbeixianhua/", "问候长辈"],
        ["/songlaoshixianhua/", "回报老师"],
        ["/tanbingweiwenxianhua/", "探病慰问"],
        ["/daoqianxianhua/", "道歉鲜花"],
        ["/hunqingxianhua/", "婚庆鲜花"],
        ["/zhufuqinghexianhua/", "祝贺鲜花"],
        ["/aisixianhua/", "哀思鲜花"],
        ["/businessFlower/", "商务鲜花"],
        ["/businessFlower/kaiyehualan/", "开业花篮"],
        ["/florist/", "自选鲜花"],
        ["/worldflora/", "澳台送花"]
    ];
    for (var i = 0; i < arr.length; i++) {
        item_1.innerHTML += `<li><a href="${arr[i][0]}">${arr[i][1]}</a></li>`
    }
})();
(() => {
    var arr = [
        ["/meigui/", "玫瑰"],
        ["/hongmeigui/", "红玫瑰"],
        ["/fenmeigui/", "粉玫瑰"],
        ["/baimeigui/", "白玫瑰"],
        ["/zimeigui/", "紫玫瑰"],
        ["/xiangbinmeigui/", "香槟玫瑰"],
        ["/huangmeigui/", "黄玫瑰"],
        ["/kangnaixin/", "康乃馨"],
        ["/baihe/", "百合"],
        ["/fulang/", "扶郎"],
        ["/xiangrikui/", "向日葵"],
        ["/yujinxiang/", "郁金香"],
        ["/matilian/", "马蹄莲"]
    ];
    for (var i = 0; i < arr.length; i++) {
        item_2.innerHTML += `<li><a href="${arr[i][0]}">${arr[i][1]}</a></li>`
    }
})();
(() => {
    var arr = [
        ["/hongsexianhua/", "red", "红色"],
        ["/fensexianhua/", "pink", "粉色"],
        ["/xiangbinsexianhua/", "champagne", "香槟"],
        ["/huangsexianhua/", "yellow", "黄色"],
        ["/baisexianhua/", "white", "白色"],
        ["/zisexianhua/", "purple", "紫色"],
        ["/lansexianhua/", "blue", "蓝色"]
    ];
    for (var i = 0; i < arr.length; i++) {
        item_3.innerHTML += `<li><a href="${arr[i][0]}"><span class="c-${arr[i][1]}"></span>${arr[i][2]}</a></li>`
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
        ["/businessFlower/kaiyehualan/", "开业花蓝"],
        ["/zuhexianhua/", "组合鲜花"]
    ];
    for (var i = 0; i < arr.length; i++) {
        item_4.innerHTML += `<li><a href="${arr[i][0]}">${arr[i][1]}</a></li>`
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
        item_5.innerHTML += `<li><a href="${arr[i][0]}">${arr[i][1]}</a></li>`
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
        item_6.innerHTML += `<li><a href="/${arr[i][0]}duomeigui/">${arr[i][1]}枝</a></li>`
    }
})();
(() => {
    var arr = [
        [9010845, "幸福典藏", "红色康乃馨16枝，白色相思梅5枝，栀子叶0.5扎", "146"],
        [9010846, "幸福花园", "红色康乃馨11枝", "121"],
        [9010842, "感恩密码", "19枝粉康乃馨", "165"],
        [9010840, "爱的祝福", "2枝多头白香水百合,19枝粉康乃馨", "208"],
        [9010741, "健康长久", "红色康乃馨99枝、多头红色康乃馨1扎", "436"]
    ];
    for (var i = 0; i < arr.length; i++) {
        tuijian.innerHTML += `
        <div class="side-item">
            <div class="img-box">
                <a href="/product/${arr[i][0]}.html" target="_blank" data-link="${arr[i][0]}"><img src="../newpic/${arr[i][0]}.jpg_220x240.jpg" width="180" height="196" alt="${arr[i][1]}"></a>
            </div>
            <div class="info-cont">
                <div class="title">
                    <a href="/product/${arr[i][0]}.html" class="product-title" data-link="${arr[i][0]}">鲜花/${arr[i][1]}-${arr[i][2]}</a>
                </div>
                <div class="price">
                    <span class="price-sign">&yen;</span>
                    <span class="price-num" data-pp="${arr[i][0]}">${arr[i][3]}</span>
                </div>
            </div>
        </div>
        `
    }
})();
(() => {
    var arr = [
        [9012009, "6872479*", "送花速度很快"],
        [9012219, "152885*", "早上11点下单，下午3点不到就送到了，而且花花很新鲜，盛赞啊啊啊~~~"],
        [9010871, "youyida*", "一直在花礼网购买"],
        [9012078, "youyida*", "公司员工的入职福利、家属的生日福利，全是在花礼网购买的，很不错，会继续采购"],
        [9012056, "youyida*", "给公司员工家属的生日福利，很不错！"],
        [9012441, "181****3681", "不错不错不错"]
    ];
    for (var i = 0; i < arr.length; i++) {
        pingjia.innerHTML += `
        <div class="side-com">
            <div class="img-box">
                <a href="/product/${arr[i][0]}.html" target="_blank">
                    <img src="../newpic/${arr[i][0]}.jpg_80x87.jpg">
                </a>
            </div>
            <div class="com-cont">
                <h5>会员号：${arr[i][1]}</h5>
                <p><a href="/productpj/${arr[i][0]}.html" target="_blank">${arr[i][2]}</a></p>
            </div>
        </div>
        `
    }
})();
(() => {
    var arr = [
        [9012332, "留住好时光", "239", "粉绣球1枝，粉雪山玫瑰6枝", "精选昆明A级花材"],
        [9012095, "幸福绽放", "172", "粉色康乃馨19枝", "温暖之选 亮丽花色"],
        [9010766, "圆满", "280", "粉百合2枝、红玫瑰9枝、红色康乃馨15枝", "花篮设计 送礼百搭"],
        [9092149, "一缕清香", "198", "向日葵3枝，白色洋桔梗0.5扎", "清新向日葵 夏日专属"],
        [9012189, "恩情无限", "178", "粉色康乃馨11枝，百合2枝", "精选花材 精心设计"],
        [9012072, "向日葵之歌", "189", "向日葵6枝", "心向暖阳，快乐相伴"],
        [9010736, "感激", "218", "29枝红康乃馨,2枝多头粉百合", "多花材搭配"],
        [9012339, "抱抱我/自然风抱桶花", "158", "向日葵1枝，红玫瑰2枝，红色多头玫瑰2枝", "抱抱桶新款"],
        [9012440, "星河璀璨", "289", "香槟玫瑰9枝、蓝绣球、向日葵、白色洋桔梗、尤加利叶", "倾情设计，为爱相守"],
        [9012201, "馨情无限", "238", "戴安娜玫瑰11枝，红色康乃馨11支，红色石竹梅4枝", "高端花盒设计 "],
        [9012414, "真的爱你", "288", "粉色康乃馨10枝，浅蓝色绣球1枝，浅紫色紫罗兰5枝", "清新设计 多样花材"],
        [9012314, "温馨问候", "285", "香槟玫瑰9枝、多头白百合2枝、粉色康乃馨13枝", ""],
        [9012334, "幸福满溢", "239", "多头百合2枝，卡罗拉玫瑰8枝，红太阳花6枝", "畅销节日花篮"],
        [9012190, "温情祝福", "195", "紫红色康乃馨9枝，粉色多头香水百合2枝，紫色桔梗4枝", ""],
        [9010846, "幸福花园", "121", "红色康乃馨11枝", "阳光明媚，温情永在"],
        [9012092, "母爱", "172", "紫红色康乃馨9枝，粉色多头康乃馨10枝", "红粉搭配 花色明艳"],
        [9010842, "感恩密码", "165", "19枝粉康乃馨", ""],
        [9012059, "紫听您说", "176", "紫色康乃馨12枝，粉色康乃馨7枝，多头百合1枝", ""],
        [9012411, "十全十美", "349", "香槟玫瑰10枝，橙康乃馨10枝，红色洋牡丹10枝", "春季新品"],
        [9012191, "嫣然", "208", "粉色康乃馨19枝，粉色扶郎花5枝，紫色小雏菊3枝，银叶菊10枝", ""],
        [9012054, "真诚祝愿", "288", "花篮", ""],
        [9020012, "水果花篮-欣情", "248", "百合、红掌、玫瑰、扶郎、康乃馨等花材；进口橙子、红富士苹果、红提、哈密瓜等新鲜水果", ""],
        [9010964, "天使之祈", "198", "精品康乃馨礼盒,粉色康乃馨19枝，勿忘我适量", ""],
        [9020015, "水果花篮-温馨祝福", "279", "粉香水百合1枝,粉玫瑰8枝", ""],
        [9012096, "妈妈的爱", "159", "红色康乃馨16枝,香槟色桔梗3枝", "精选A级空运鲜花"],
        [9012200, "暖暖的问候", "259", "苏醒11枝、白百合2枝、浅粉色康乃馨9枝", "高端礼盒装"],
        [9012093, "永恒的爱", "258", "粉色康乃馨33枝", ""],
        [9012188, "相思红", "178", "红色康乃馨11枝，粉色桔梗4枝，红豆5枝", ""]
    ];
    for (var i = 0; i < arr.length; i++) {
        grid_item.innerHTML += `
        <div class="grid-item">
            <div class="grid-panel">
                <div class="img-box">
                    <a href="/product/${arr[i][0]}.html" target="_blank" data-link="${arr[i][0]}"><img width="220" height="240" src="../newpic/${arr[i][0]}.jpg_220x240.jpg" alt="${arr[i][1]}"></a>
                </div>
                <div class="info-cont">
                    <div class="price">
                        <span class="price-sign">&yen;</span>
                        <span class="price-num" data-pp="${arr[i][0]}">${arr[i][2]}</span>
                    </div>
                    <div class="title">
                        <a href="/product/${arr[i][0]}.html" target="_blank" data-link="${arr[i][0]}">
                            <span class="product-title">鲜花/${arr[i][1]}-${arr[i][3]}</span>
                            <span class="feature">${arr[i][4]}</span>
                        </a>
                    </div>
                    <div class="operate">
                        <a href="javascript:DoGuanZhu('${arr[i][0]}')" class="attention"><span class="ico ico-heart-d"></span>收藏</a>
                        <a href="/shopping/AddtoCart?product_code=${arr[i][0]}" class="add-cart" style="margin-left:-5px;"><span class="ico ico-cart-d"></span>加入购物车</a>
                    </div>
                </div>
            </div>
        </div>
        `
    }
})();
(() => {
    var arr = [
        [
            ["10482", "送花给长辈送什么花？"],
            ["10483", "分类推荐，给长辈送花的各种选择"],
            ["11664", "长辈生日送什么花？"],
            ["12033", "康乃馨花语，母亲节为什么送康乃馨？"],
            ["10870", "母亲节送什么？母亲节鲜花推荐"]
        ],


        [
            ["10510", "送长辈送什么花好？"],
            ["10428", "妈妈生日，精心准备的几款鲜花"],
            ["11537", "送爸爸应该送什么花？"],
            ["10792", "母亲节送什么花？"],
            ["11351", "妇女节鲜花，三八节送妈妈什么花最温馨？"]
        ],


        [
            ["11619", "给老师送什么花合适？"],
            ["10516", "给老师送花的精心推荐"],
            ["20051116174222", "经典送花祝福语"],
            ["20051115103610", "送花支数代表的含义"],
            ["20050611131024", " 鲜花与生日"]
        ]
    ];
    var str = "";
    for (var i = 0; i < arr.length; i++) {
        str += "<ul>";
        for (var j = 0; j < arr[i].length; j++) {
            str += `<li><a href="/huayu/${arr[i][j][0]}.html" target="_blank">${arr[i][j][1]}</a></li>`
        }
        str += "</ul>";
    }
    liyi.innerHTML = str;
})();