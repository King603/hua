function get_nav(arr, num) {
    var cate_list = document.querySelectorAll(".common .cate-list")[num - 1];
    for (var elem of arr) {
        cate_list.innerHTML += `<li><a href="${elem[0]}" target="_blank">${elem[1]}</a></li>`
    }
}
(() => {
    var arr = [
        ["/flower/", "鲜花"],
        ["/yongshenghua/", "永生花"],
        ["/gifts/", "礼品"],
        ["/Plant/", "绿植"]
    ];
    var dropdown_cate = document.querySelector(".common .dropdown-cate");
    for (var elem of arr) {
        dropdown_cate.innerHTML += `
        <h4><a href="${elem[0]}">${elem[1]}</a></h4>
        <ul class="cate-list list-inline"></ul>
        `;
    }
})();


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
        ["/Plant/greenplant/", "绿色植物"],
        ["/Plant/potflower/", "盆栽花卉"]
    ];
    get_nav(arr, 4);
})();
(() => {
    var nav = document.getElementsByClassName("nav")[0];
    var arr = [
        ["/", "首页"],
        ["/flower/", "鲜花"],
        ["/yongshenghua/", "永生花"],
        ["/cake/", "蛋糕"],
        ["/gifts/", "礼品"],
        ["/gifts/chocolates/", "巧克力"],
        ["/huayu/", "花语大全"],
        ["/you/", "设计师臻选鲜花"],
        ["/theme/birthday/", "生日鲜花礼品"],
    ];
    for (var elem of arr) {
        nav.innerHTML += `<li><a href="${elem[0]}">${elem[1]}</a></li>`
    }
})();
(() => {
    var arr = [
        ["", "effect", "用途", ""],
        ["", "texture", "花材", ""],
        ["", "color", "颜色", ""],
        ["", "sort", "类别", ""],
        ["", "price", "价格", ""],
        ["last-child", "num", "枝数", "list-special"]
    ];
    var navigation = document.getElementsByClassName("navigation")[0];
    for (var elem of arr) {
        navigation.innerHTML += `
        <div class="item ${elem[0]}">
            <div class="title">
                <span class="ico ico-${elem[1]}"></span>
                <h4>${elem[2]}</h4>
            </div>
            <ul class="item-list ${elem[3]} list-inline"></ul>
        </div>
        `;
    }
})();
function get_item(num, arr) {
    var item = document.querySelectorAll(".navigation>.item>.item-list")[num - 1];
    for (var elem of arr) {
        item.innerHTML += `<li><a href="${elem[0]}">${elem[1]}</a></li>`
    }
}
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
    get_item(1, arr);
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
    get_item(2, arr);
})();
(() => {
    var arr = [
        ["/hongsexianhua/", '<span class="c-red"></span>红色'],
        ["/fensexianhua/", '<span class="c-pink"></span>粉色'],
        ["/xiangbinsexianhua/", '<span class="c-champagne"></span>香槟'],
        ["/huangsexianhua/", '<span class="c-yellow"></span>黄色'],
        ["/baisexianhua/", '<span class="c-white"></span>白色'],
        ["/zisexianhua/", '<span class="c-purple"></span>紫色'],
        ["/lansexianhua/", '<span class="c-blue"></span>蓝色']
    ];
    get_item(3, arr);
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
    get_item(4, arr);
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
    get_item(5, arr);
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
    get_item(6, arr);
})();
(() => {
    var panel_body=document.getElementsByClassName("panel-body")[0];
    var arr = [
        [9010845, "幸福典藏", "红色康乃馨16枝，白色相思梅5枝，栀子叶0.5扎", "146"],
        [9010846, "幸福花园", "红色康乃馨11枝", "121"],
        [9010842, "感恩密码", "19枝粉康乃馨", "165"],
        [9010840, "爱的祝福", "2枝多头白香水百合,19枝粉康乃馨", "208"],
        [9010741, "健康长久", "红色康乃馨99枝、多头红色康乃馨1扎", "436"]
    ];
    for (var elem of arr) {
        panel_body.innerHTML += `
        <div class="side-item">
            <div class="img-box">
                <a href="/product/${elem[0]}.html" target="_blank" data-link="${elem[0]}"><img src="../newpic/${elem[0]}.jpg_220x240.jpg" width="180" height="196" alt="${elem[1]}"></a>
            </div>
            <div class="info-cont">
                <div class="title">
                    <a href="/product/${elem[0]}.html" class="product-title" data-link="${elem[0]}">鲜花/${elem[1]}-${elem[2]}</a>
                </div>
                <div class="price">
                    <span class="price-sign">&yen;</span>
                    <span class="price-num" data-pp="${elem[0]}">${elem[3]}</span>
                </div>
            </div>
        </div>
        `;
    }
})();
(() => {
    var panel_body=document.getElementsByClassName("panel-body")[1];
    var arr = [
        [9012009, "6872479*", "送花速度很快"],
        [9012219, "152885*", "早上11点下单，下午3点不到就送到了，而且花花很新鲜，盛赞啊啊啊~~~"],
        [9010871, "youyida*", "一直在花礼网购买"],
        [9012078, "youyida*", "公司员工的入职福利、家属的生日福利，全是在花礼网购买的，很不错，会继续采购"],
        [9012056, "youyida*", "给公司员工家属的生日福利，很不错！"],
        [9012441, "181****3681", "不错不错不错"]
    ];
    for (var elem of arr) {
        panel_body.innerHTML += `
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
        </div>
        `;
    }
})();
(() => {
    var grid_item=document.getElementsByClassName("grid-wrapper")[0];
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
    for (var elem of arr) {
        grid_item.innerHTML += `
        <div class="grid-item">
            <div class="grid-panel">
                <div class="img-box">
                    <a href="/product/${elem[0]}.html" target="_blank" data-link="${elem[0]}"><img width="220" height="240" src="../newpic/${elem[0]}.jpg_220x240.jpg" alt="${elem[1]}"></a>
                </div>
                <div class="info-cont">
                    <div class="price">
                        <span class="price-sign">&yen;</span>
                        <span class="price-num" data-pp="${elem[0]}">${elem[2]}</span>
                    </div>
                    <div class="title">
                        <a href="/product/${elem[0]}.html" target="_blank" data-link="${elem[0]}">
                            <span class="product-title">鲜花/${elem[1]}-${elem[3]}</span>
                            <span class="feature">${elem[4]}</span>
                        </a>
                    </div>
                    <div class="operate">
                        <a href="javascript:DoGuanZhu('${elem[0]}')" class="attention"><span class="ico ico-heart-d"></span>收藏</a>
                        <a href="/shopping/AddtoCart?product_code=${elem[0]}" class="add-cart" style="margin-left:-5px;"><span class="ico ico-cart-d"></span>加入购物车</a>
                    </div>
                </div>
            </div>
        </div>
        `;
    }
})();
(() => {
    var panel_body=document.getElementsByClassName("panel-body")[2];
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
    for (var elems of arr) {
        str += "<ul>";
        for (var elem of elems) {
            str += `<li><a href="/huayu/${elem[0]}.html" target="_blank">${elem[1]}</a></li>`;
        }
        str += "</ul>";
    }
    panel_body.innerHTML = str;
})();