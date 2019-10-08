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
        ["/theme/chongyangjie", "重阳节鲜花礼品"],
    ];
    for (var i = 0; i < arr.length; i++) {
        nav.innerHTML += `<li><a href="${arr[i][0]}">${arr[i][1]}</a></li>`
    }
})();
(() => {
    var arr = [
        [9012441, 9012441, "active", "语笑嫣然"],
        [9012204, 20190213, "", "幸福万年长"],
        [9012376, 20190213, "", "邂逅你的美"]
    ];
    for (var i = 0; i < arr.length; i++) {
        div.innerHTML += `
        <div class="item ${arr[i][2]}">
            <a href="/product/${arr[i][0]}.html" target="_bank">
                <img src="../slider/xianhua0${i + 1}_${arr[i][1]}.jpg" alt="${arr[i][3]}">
            </a>
        </div>
        `
        ol.innerHTML += `<li data-target="#flowerCarousel" data-slide-to="${i}" class="${arr[i][2]}"></li>`
    }
})();
(() => {
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
    for (var i = 0; i < arr.length; i++) {
        grid_item.innerHTML += `
        <div class="grid-item">
            <div class="grid-panel">
                <div class="img-box">
                    <a href="/product/${arr[i][0]}.html" target="_blank" data-link="${arr[i][0]}"><img width="220"
                            height="240" src="../newpic/${arr[i][0]}.jpg_220x240.jpg"
                            alt="${arr[i][1]}"></a>
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
                        <a href="javascript:DoGuanZhu('${arr[i][0]}')" class="attention"><span
                                class="ico ico-heart-d"></span>收藏</a>
                        <a href="/shopping/AddtoCart?product_code=${arr[i][0]}" class="add-cart"
                            style="margin-left:-5px;"><span class="ico ico-cart-d"></span>加入购物车</a>
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
    for (var i = 0; i < arr.length; i++) {
        str += "<ul>";
        for (var j = 0; j < arr[i].length; j++) {
            str += `<li><a href="/huayu/${arr[i][j][0]}.html" target="_blank">${arr[i][j][1]}</a></li>`
        }
        str += "</ul>";
    }
    liyi.innerHTML = str;
})();
(() => {
    var arr = [
        [9012144, 310708, "速度快服务好"],
        [9012011, 312499, "非常满意非常满意非常满意非常满意非常满意非常满意"],
        [9012011, 312499, "非常满意非常满意非常满意非常满意非常满意非常满意非常满意"],
        [9012011, 312499, "非常满意非常满意非常满意非常满意"],
        [9012011, 312499, "非常满意非常满意非常满意"],
        [9012011, 312499, "非常满意非常满意"]
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
                <h5>会员号：${arr[i][1]}*</h5>
                <p><a href="/productpj/${arr[i][0]}.html" target="_blank">${arr[i][2]}</a></p>
            </div>
        </div>
        `
    }
})();
(() => {
    var arr = [
        [9010877, "致美丽的你", "红玫瑰11枝，满天星0.3扎，栀子叶0.5扎", 138],
        [9092117, "忘情巴黎＋德芙心语巧克力98克特价组合套装", "33枝红玫瑰", 356],
        [9012009, "忘情巴黎", "33枝红玫瑰", 298],
        [9012055, "不变的心", "戴安娜玫瑰66枝", 469],
        [9012223, "我只钟情你", "香槟玫瑰11枝、白色小雏菊3枝", 236]
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