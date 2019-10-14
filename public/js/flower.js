var _html = (element, arr) => {
    var ul = document.querySelector(element);
    for (var elem of arr) {
        ul.innerHTML += `<li><a target="_blank" href="${elem[0]}">${elem[1]}</a></li>`;
    }
}
(() => {
    var div = document.querySelector("nav.common div.dropdown-menu");
    var arr = [
        ["/flower/", "鲜花"],
        ["/yongshenghua/", "永生花"],
        ["/gifts/", "礼品"],
        ["/Plant/", "绿植"]
    ];
    for (var elem of arr) {
        div.innerHTML += `
        <h4><a href="/${elem[0]}/">${elem[1]}</a></h4>
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
    _html(".dropdown-menu>ul.list-inline:nth-child(2)", arr);
})();
(() => {
    var arr = [
        ["/yongshenghua/yongshenghua_box.html", "经典花盒"],
        ["/yongshenghua/yongshenghua_large.html", "巨型玫瑰"],
        ["/yongshenghua/yongshenghua_lavender.html", "薰衣草"],
        ["/yongshenghua/yongshenghua_vase.html", "永生瓶花"],
        ["/yongshenghua/yongshenghua_characteristic.html", "特色永生花"]
    ];
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
        ["/flower", "鲜花"],
        ["/yongshenghua", "永生花"],
        ["/cake", "蛋糕"],
        ["/gifts", "礼品"],
        ["/gifts/chocolates", "巧克力"],
        ["/huayu", "花语大全"],
        ["/you", "设计师臻选鲜花"],
        ["/theme/chongyangjie", "重阳节鲜花礼品"],
    ];
    _html("nav .nav", arr);
})();
(() => {
    var ol = document.getElementsByClassName("carousel-indicators")[0];
    var div = document.getElementsByClassName("carousel-inner")[0];
    var arr = [
        [9012441, 9012441, "active", "语笑嫣然"],
        [9012204, 20190213, "", "幸福万年长"],
        [9012376, 20190213, "", "邂逅你的美"]
    ];
    var i = 1;
    for (var elem of arr) {
        div.innerHTML += `
        <div class="item ${elem[2]}">
            <a href="/product/${elem[0]}.html" target="_bank">
                <img src="../slider/xianhua0${i++}_${elem[1]}.jpg" alt="${elem[3]}">
            </a>
        </div>
        `;
        ol.innerHTML += `<li data-target="#flowerCarousel" data-slide-to="${i}" class="${elem[2]}"></li>`
    }
})();
(() => {
    var grid_item = document.getElementsByClassName("grid-wrapper")[0];
    var arr = [
        ["9012177", "不变的承诺", 539, "99枝红玫瑰", "经典99枝，鼎力推荐！"],
        ["9010966", "一往情深", 239, "精品玫瑰礼盒:19枝红玫瑰，勿忘我0.1扎", "经典爆款，年销售冠军！"],
        ["9010011", "一心一意", 139, "玫瑰11枝，粉色勿忘我0.3扎", "经典款式 精选爆款"],
        ["9012154", "甜美公主", 368, "白玫瑰22枝，粉佳人粉玫瑰14枝，粉色桔梗5枝", "甜美设计 清新典雅"],
        ["9012332", "留住好时光", 239, "粉绣球1枝，粉雪山玫瑰6枝", "精选昆明A级花材"],
        ["9012437", "粉雪佳人", 219, "戴安娜粉玫瑰11枝、白色香水百合2枝、白色洋桔梗5枝", "清新典雅，至臻设计"],
        ["9010855", "用心爱你", 520, "99枝：33枝戴安娜＋66枝红玫瑰", "与你相守，直到天荒地老"],
        ["9012009", "忘情巴黎", 298, "33枝红玫瑰", "浪漫唯美 女神挚爱"],
        ["9012089", "爱在心头", 385, "玫瑰50枝：戴安娜粉玫瑰19枝，红玫瑰31枝", "双色搭配 赏心悦目"],
        ["9012243", "恋恋情深", 198, "11枝香槟玫瑰，白色多头百合2枝", "经典款式 简约设计"],
        ["9012345", "甜蜜相伴", 162, "粉佳人玫瑰9枝，白色洋桔梗0.2扎", "创意包装 高端大气"],
        ["9012078", "你的香气", 129, "戴安娜粉玫瑰9枝", "温馨搭配 舒适百搭"],
        ["9010969", "你最珍贵", 248, "精品玫瑰礼盒:香槟玫瑰19枝，勿忘我适量", "优雅设计 精致甄选"],
        ["9012011", "阳光海岸", 228, "19枝香槟玫瑰", "98%好评率，热销推荐"],
        ["9012125", "缪斯女神", 188, "红玫瑰16枝，红豆5枝，粉色桔梗1枝，银叶菊2枝", "女神专属 美艳缪斯"],
        ["9012441", "语笑嫣然", 198, "粉佳人玫瑰9枝、粉色小菊、洋桔梗、尤加利叶", "温柔相伴，笑容常在"],
        ["9012223", "我只钟情你", 236, "香槟玫瑰11枝、白色小雏菊3枝", "错落有致 甜蜜纯洁"],
        ["9012060", "眷念", 298, "戴安娜粉玫瑰33枝，石竹梅20枝", "粉色少女心 超值推荐"],
        ["9012095", "幸福绽放", 172, "粉色康乃馨19枝", "温暖之选 亮丽花色"],
        ["9012150", "幸福久久", 599, "戴安娜粉玫瑰99枝，栀子叶适量", "99枝粉玫特惠款"],
        ["9012175", "月光女神", 232, "白玫瑰11枝，绿色桔梗5枝，小菊3枝，白色石竹梅4枝", "小清新设计 清新无比"],
        ["9010849", "缘份", 196, "11枝红玫瑰,2枝多头白香水百合", "寓意成双成对 百年好合"],
        ["9010766", "圆满", 280, "粉百合2枝、红玫瑰9枝、红色康乃馨15枝", "花篮设计 送礼百搭"],
        ["9092149", "一缕清香", 198, "向日葵3枝，白色洋桔梗0.5扎", "清新向日葵 夏日专属"],
        ["9010731", "牵手一生", 196, "红玫瑰19枝", "精选材料 简约搭配"],
        ["9012153", "浪漫絮语", 298, "（戴安娜粉玫瑰或者玛利亚粉玫瑰）32枝，白玫瑰6枝，香槟玫瑰6枝，红玫瑰6枝", ""],
        ["9012440", "星河璀璨", 289, "香槟玫瑰9枝、蓝绣球、向日葵、白色洋桔梗、尤加利叶", "倾情设计，为爱相守"],
        ["9012112", "温柔如你", 202, "戴安娜粉玫瑰12枝，石竹梅7枝", ""],

    ];
    for (var elem of arr) {
        grid_item.innerHTML += `
        <div class="grid-item">
            <div class="grid-panel">
                <div class="img-box">
                    <a href="/product/${elem[0]}.html" target="_blank" data-link="${elem[0]}"><img width="220"
                            height="240" src="../newpic/${elem[0]}.jpg_220x240.jpg"
                            alt="${elem[1]}"></a>
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
                        <a href="javascript:DoGuanZhu('${elem[0]}')" class="attention"><span
                                class="ico ico-heart-d"></span>收藏</a>
                        <a href="/shopping/AddtoCart?product_code=${elem[0]}" class="add-cart"
                            style="margin-left:-5px;"><span class="ico ico-cart-d"></span>加入购物车</a>
                    </div>
                </div>
            </div>
        </div>
        `;
    }
})();
(() => {
    var panel_body = document.getElementsByClassName("panel-body")[2];
    var arr = [
        [
            [10973, "为什么要选择鲜花速递？"],
            [10976, "选择鲜花速递需要注意什么？"],
            [20051115103610, "送花支数代表的含义"],
            [20051115103923, "各种花代表的不同含义"],
            [20051116172128, "玫瑰概述及花语"]
        ],
        [
            [20051115103610, "送花的常识和技巧"],
            [20051116174222, "经典送花祝福语"],
            [20050612082846, "用鲜花表达情感-谈送花礼仪"],
            [20050611130752, "不同场合送什么花？"],
            [20050611130659, "鲜花与星座"]
        ],
        [
            [20050422170012, "如何让鲜花保鲜"],
            [20050611130941, "鲜花与节日"],
            [20050611131024, "鲜花与生日"],
            [20050612080530, "婚礼用鲜花大全"],
            [20050405004253, "女孩都喜欢别人送鲜花吗？"]
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
    panel_body = str;
})();
(() => {
    var panel_body = document.getElementsByClassName("panel-body")[1];
    var arr = [
        [9012144, 310708, "速度快服务好"],
        [9012011, 312499, "非常满意非常满意非常满意非常满意非常满意非常满意"],
        [9012011, 312499, "非常满意非常满意非常满意非常满意非常满意非常满意非常满意"],
        [9012011, 312499, "非常满意非常满意非常满意非常满意"],
        [9012011, 312499, "非常满意非常满意非常满意"],
        [9012011, 312499, "非常满意非常满意"]
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
                <h5>会员号：${elem[1]}*</h5>
                <p><a href="/productpj/${elem[0]}.html" target="_blank">${elem[2]}</a></p>
            </div>
        </div>
        `;
    }
})();
(() => {
    var panel_body = document.getElementsByClassName("panel-body")[0];
    var arr = [
        [9010877, "致美丽的你", "红玫瑰11枝，满天星0.3扎，栀子叶0.5扎", 138],
        [9092117, "忘情巴黎＋德芙心语巧克力98克特价组合套装", "33枝红玫瑰", 356],
        [9012009, "忘情巴黎", "33枝红玫瑰", 298],
        [9012055, "不变的心", "戴安娜玫瑰66枝", 469],
        [9012223, "我只钟情你", "香槟玫瑰11枝、白色小雏菊3枝", 236]
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
var item = (arr, num) => {
    var item_list = document.getElementsByClassName("item-list")[num - 1];
    for (var elem of arr) {
        item_list.innerHTML += `<li><a href="${elem[0]}">${elem[1]}</a></li>`;
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
    item(arr, 1);
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
    item(arr, 2);
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
    item(arr, 3);
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
    item(arr, 4);
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
    item(arr, 5);
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
    item(arr, 6);
})();