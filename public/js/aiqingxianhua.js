var get_html = (arr, num) => {
    var cate_list = document.querySelectorAll(".common .cate-list")[num - 1];
    for (var elem of arr) {
        cate_list.innerHTML += `<li><a href="/${elem[0]}/" target="_blank">${elem[1]}</a></li>`;
    }
}
var get_item = (arr, num) => {
    var item = document.querySelectorAll(".navigation .item-list")[num - 1];
    for (var elem of arr) {
        item.innerHTML += `<li><a href="${elem[0]}">${elem[1]}</a></li>`;
    }
}
(() => {
    var arr = [
        ["flower", "鲜花"],
        ["yongshenghua", "永生花"],
        ["gifts", "礼品"],
        ["Plant", "绿植"]
    ];
    var menu = document.querySelector(".common .dropdown-menu");
    for (var elem of arr) {
        menu.innerHTML += `
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
    get_html(arr, 1);
})();
(() => {
    var arr = [
        ["/yongshenghua/yongshenghua_box.html", "经典花盒"],
        ["/yongshenghua/yongshenghua_large.html", "巨型玫瑰"],
        ["/yongshenghua/yongshenghua_lavender.html", "薰衣草"],
        ["/yongshenghua/yongshenghua_vase.html", "永生瓶花"],
        ["/yongshenghua/yongshenghua_characteristic.html", "特色永生花"]
    ];
    get_html(arr, 2);
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
    get_html(arr, 3);
})();
(() => {
    var arr = [
        ["/Plant/greenplant/", "绿色植物"],
        ["/Plant/potflower/", "盆栽花卉"]
    ];
    get_html(arr, 4);
})();
(() => {
    var nav = document.querySelector("nav .nav");
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
    for (var i = 0; i < arr.length; i++) {
        nav.innerHTML += `<li><a href="${arr[i][0]}">${arr[i][1]}</a></li>`
    }
})();
(() => {
    var grid_item = document.getElementsByClassName("grid-wrapper")[0];
    var arr = [
        [9012177, "不变的承诺", "539", "99枝红玫瑰", "经典99枝，鼎力推荐！"],
        [9010011, "一心一意", "139", "玫瑰11枝，粉色勿忘我0.3扎", "经典款式 精选爆款"],
        [9010966, "一往情深", "239", "精品玫瑰礼盒:19枝红玫瑰，勿忘我0.1扎", "经典爆款，年销售冠军！"],
        [9012154, "甜美公主", "368", "白玫瑰22枝，粉佳人粉玫瑰14枝，粉色桔梗5枝", "甜美设计 清新典雅"],
        [9010855, "用心爱你", "520", "99枝：33枝戴安娜＋66枝红玫瑰", "与你相守，直到天荒地老"],
        [9012089, "爱在心头", "385", "玫瑰50枝：戴安娜粉玫瑰19枝，红玫瑰31枝", "双色搭配 赏心悦目"],
        [9012009, "忘情巴黎", "298", "33枝红玫瑰", "浪漫唯美 女神挚爱"],
        [9012437, "粉雪佳人", "219", "戴安娜粉玫瑰11枝、白色香水百合2枝、白色洋桔梗5枝", "清新典雅，至臻设计"],
        [9012243, "恋恋情深", "198", "11枝香槟玫瑰，白色多头百合2枝", "经典款式 简约设计"],
        [9012345, "甜蜜相伴", "162", "粉佳人玫瑰9枝，白色洋桔梗0.2扎", "创意包装 高端大气"],
        [9012078, "你的香气", "129", "戴安娜粉玫瑰9枝", "温馨搭配 舒适百搭"],
        [9012011, "阳光海岸", "228", "19枝香槟玫瑰", "98%好评率，热销推荐"],
        [9012125, "缪斯女神", "188", "红玫瑰16枝，红豆5枝，粉色桔梗1枝，银叶菊2枝", "女神专属 美艳缪斯"],
        [9012060, "眷念", "298", "戴安娜粉玫瑰33枝，石竹梅20枝", "粉色少女心 超值推荐"],
        [9012223, "我只钟情你", "236", "香槟玫瑰11枝、白色小雏菊3枝", "错落有致 甜蜜纯洁"],
        [9012175, "月光女神", "232", "白玫瑰11枝，绿色桔梗5枝，小菊3枝，白色石竹梅4枝", "小清新设计 清新无比"],
        [9012150, "幸福久久", "599", "戴安娜粉玫瑰99枝，栀子叶适量", "99枝粉玫特惠款"],
        [9010849, "缘份", "196", "11枝红玫瑰,2枝多头白香水百合", "寓意成双成对 百年好合"],
        [9012149, "99的爱", "639", "香槟玫瑰99枝，尤加利15枝", ""],
        [9012112, "温柔如你", "202", "戴安娜粉玫瑰12枝，石竹梅7枝", ""],
        [9012153, "浪漫絮语", "398", "（戴安娜粉玫瑰或者玛利亚粉玫瑰）32枝，白玫瑰6枝，香槟玫瑰6枝，红玫瑰6枝", ""],
        [9010731, "牵手一生", "196", "红玫瑰19枝", "精选材料 简约搭配"],
        [9092117, "忘情巴黎＋德芙心语巧克力98克特价组合套装", "356", "33枝红玫瑰", "表白送礼必备"],
        [9010890, "致青春/无声的爱", "229", "满天星一大扎", ""],
        [9012088, "白雪公主", "398", "白玫瑰50枝", ""],
        [9012041, "浪漫缤纷", "398", "戴安娜粉玫瑰50枝", "经典款式"],
        [9012376, "邂逅你的美", "198", "白玫瑰9枝，橙色多头玫6枝", "配色鲜明 送礼优选"],
        [9012038, "依靠", "155", "戴安娜粉玫瑰12枝，紫色桔梗5枝，粉色勿忘我3枝", "浪漫配色 美好寓意"]
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
        `
    }
})();
(() => {
    var tuijian = document.getElementsByClassName("panel-body")[0];
    var arr = [
        [9010011, "一心一意", "一心一意-玫瑰11枝，粉色勿忘我0.3扎", "139"],
        [9012177, "不变的承诺", "不变的承诺-99枝红玫瑰", "539"],
        [9010877, "致美丽的你", "致美丽的你-红玫瑰11枝，满天星0.3扎，栀子叶0.5扎", "138"],
        [9010731, "牵手一生", "牵手一生-红玫瑰19枝", "196"],
        [9092117, "忘情巴黎＋德芙心语巧克力98克特价组合套装", "忘情巴黎＋德芙心语巧克力98克特价组合套装-33枝红玫瑰", "356"]
    ];
    for (var i = 0; i < arr.length; i++) {
        tuijian.innerHTML += `
        <div class="side-item">
            <div class="img-box">
                <a href="/product/${arr[i][0]}.html" target="_blank" data-link="${arr[i][0]}">
                    <img src="../newpic/${arr[i][0]}.jpg_220x240.jpg" width="180" height="196" alt="${arr[i][1]}">
                </a>
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
        `;
    }
})();
(() => {
    var pingjia = document.getElementsByClassName("panel-body")[1];
    var arr = [
        [9012125, "wxmp_hl*", "最满意的就是制作不走样，不减工减料，严格依照原版，新鲜度也好！收礼人十分满意，特嘱咐下单人打满分！那么以后有此项需求一定再来，也会推荐朋友使用花礼网咯！"],
        [9040013, "5041043*", "感谢，从客服小姐姐到送花小哥哥，都非常敬业！"],
        [9012177, "vzn*", "送给我最亲爱的小雨雨！给她道歉用的！"],
        [9010969, "135****0412", "按时送达服务一流点赞好评"],
        [9012338, "4576990*", "凌晨下的订单，没想到第二天中午之前就送到了，服务非常满意，花也非常漂亮，卡片也非常搭，非常感谢，必须推荐！"],
        [9012332, "159****1670", "蛋糕漂亮，花朵艳丽，给女儿带来了好心情！"]
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
        `;
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
            <ul id="item_1" class="item-list list-inline ${elem[3]}"></ul>
        </div>
        `;
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
    get_item(arr, 1);
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
    get_item(arr, 2);
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
    get_item(arr, 3);
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
    get_item(arr, 4);
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
    get_item(arr, 5);
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
        ["/jiushijiuduomeigui/", "99枝"]
    ];
    get_item(arr, 6);
})();
(() => {
    var liyi = document.getElementsByClassName("panel-body")[2];
    var arr = [
        [
            [11392, "爱情鲜花：鲜花，守护在爱恋时光里"],
            [10500, "爱情“保鲜”战：结婚纪念日送花"],
            [11395, "这些花，比爱情更温暖"],
            [12087, "妻子生日送多少朵玫瑰最好？"],
            [11876, "结婚后的情人节送什么？"]
        ],
        [
            [12071, "恋爱的那点事儿，怎样谈恋爱？"],
            [11441, "老婆过生日送什么花？"],
            [11685, "向女朋友求婚送什么花？"],
            [12023, "惹女友生气了怎么办？"],
            [11883, "送花的含义：相爱纪念日送什么花？"]
        ],
        [
            [11370, "解读爱情：十二星座之守护花"],
            [20051116174222, "经典送花祝福语"],
            [20051115103610, "送花支数代表的含义"],
            [20050611131024, " 鲜花与生日"],
            [20050611130659, " 鲜花与星座"]
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
    liyi.innerHTML = str;
})();



