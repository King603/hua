var _html = (element, arr) => {
    var ul = document.querySelector(element);
    for (var elem of arr) {
        ul.innerHTML += `<li><a target="_blank" href="${elem[0]}">${elem[1]}</a></li>`;
    }
}
(() => {
    var arr = [
        ["/aiqingxianhua/", "爱情鲜花"],
        ["/shengriliwu/", "生日鲜花"],
        ["/youqingxianhua/", "友情鲜花"],
        ["/songzhangbeixianhua/", "问候长辈"],
        ["/zhufuqinghexianhua/", "祝贺鲜花"],
        ["/hunqingxianhua/", "婚庆鲜花"],
        ["/tanbingweiwenxianhua/", "探病慰问"],
        ["/daoqianxianhua/", "道歉鲜花"],
        ["/businessFlower/kaiyehualan/", "开业花篮"]
    ];
    _html(".dropdown-menu>ul.list-inline:nth-child(2)", arr);
})();
(() => {
    var arr = [
        ["box.html", "经典花盒"],
        ["large.html", "巨型玫瑰"],
        ["lavender.html", "薰衣草"],
        ["vase.html", "永生瓶花"],
        ["characteristic.html", "特色永生花"]
    ];
    _html(".dropdown-menu>ul.list-inline:nth-child(4)", arr);
})();
(() => {
    var arr = [
        ["ganso", "元祖"],
        ["21cake", "廿一客蛋糕"],
        ["lecake", "诺心"],
        ["incake", "INCAKE"],
        ["beisike", "贝思客"],
        ["boncake", "BONCAKE"],
        ["mcake", "Mcake"],
        ["micamika", "米卡米卡"],
        ["waffleboy", "窝夫小子"],
        ["xfxb", "幸福西饼"],
        ["heartcheesecake", "心之和蛋糕"],
        ["vcake", "Vcake"],
        ["allcitycake", "全国品牌"]
    ];
    _html(".dropdown-menu>ul.list-inline:nth-child(6)", arr);
})();
(() => {
    var arr = [
        ["/livingflower/", "泰国保鲜花"],
        ["/gifts/musicbox/", "音乐盒"],
        ["/gifts/crystallaser/", "水晶内雕"],
        ["/gifts/goldenflower/", "金箔花"],
        ["/gifts/cosmeticmirror/", "化妆镜"],
        ["/gifts/vase/", "花瓶/相框"],
        ["/katonghuashu/", "卡通花束"],
        ["/toys/", "品牌公仔"],
        ["/gifts/shoushi/", "首饰"],
        ["/gifts/jinkouqiaokeli/", "进口巧克力"],
        ["/gifts/chocolate/", "手工巧克力"],
        ["/gifts/qiaokouqiaokeli/", "巧蔻巧克力"],
        ["/gifts/dengshi/", "创意灯饰"],
        ["/qiyetuangou/gift_card.html", "礼品卡"],
        ["/gifts/duorouzhiwupenzai/", "多肉植物盆栽"]
    ];
    _html(".dropdown-menu>ul.list-inline:nth-child(8)", arr);
})();
(() => {
    var arr = [
        ["/Plant/greenplant/", "绿色植物"],
        ["/Plant/potflower/", "盆栽花卉"]
    ];
    _html(".dropdown-menu>ul.list-inline:nth-child(10)", arr);
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
var get_product = (arr, num, id) => {
    var product = document.querySelectorAll("#mainSection>.product")[num - 1];
    var str = `
    <div class="product-title">
        <img src="../../img/chongyangjie/pc_title${parseInt(id / 100)}.png" />
    </div>
    <div class="product-list product-list-flex3">`;
    for (var i = 0; i < arr.length; i++) {
        str += `
        <div class="product-item" id="f${id}">
            <a href="/product/${arr[i][0]}?huaPid=chongyangjie-f${id}" target="_blank">
                <div class="product-item-pic">
                    <img src="../../img/chongyangjie/${arr[i][0]}.jpg_220x240.jpg" style="display: inline;" />
                </div>
                <div class="product-item-info">
                    <div class="product-item-info-header">
                        <span class="product-item-info-title">${arr[i][1]}</span>
                        <span class="product-item-info-desc">${arr[i][2]}</span>
                    </div>
                    <div class="product-item-info-footer">
                        <span class="product-item-info-price">${arr[i][3]}</span>
                        <span class="product-item-info-sprice">${arr[i][4]}</span>
                        <button class="product-item-info-btn">购买</button>
                    </div>
                </div>
            </a>
        </div>`;
        id++;
    }
    product.innerHTML = str + "</div>";
}
(() => {
    var arr = [
        ["9012332", "留住好时光·", "粉绣球1枝，粉雪山玫瑰6枝，粉桔梗0.3扎，栀子叶0.5扎", 239, "¥306"],
        ["9012201", "馨情无限·", "高档礼盒装鲜花:戴安娜粉玫瑰11枝，红色康乃馨11支，红色石竹梅4枝，栀子叶4枝", 238, "¥312"],
        ["9012440", "星河璀璨·", "香槟玫瑰9枝、蓝绣球1枝、向日葵3枝、白色洋桔梗5枝、尤加利叶5枝！", 289, "¥376"]
    ];
    get_product(arr, 1, 101);
})();
(() => {
    var arr = [
        ["9012189", "恩情无限·", "粉色康乃馨11枝，粉色多头香水百合2枝，栀子叶10枝", 178, "¥232"],
        ["9012441", " 语笑嫣然·", "粉佳人玫瑰9枝、粉色小菊3枝、洋桔梗5枝、尤加利叶5枝", 198, "¥256"],
        ["9010736", "感激·", "29枝红康乃馨，多头粉百合2枝，黄莺10枝", 218, "¥278"],
        ["9012072", "向日葵之歌·", "向日葵6枝，黄色勿忘我0.2扎、（如黄色勿忘我缺货可用粉色勿忘我代替）、黄莺10枝", 189, "¥242"],
        ["9012314", "温馨问候·", "香槟玫瑰9枝、多头白百合2枝、粉色康乃馨13枝", 285, "¥389"],
        ["9012204", "幸福万年长·", "红色康乃馨66枝，搭配白边紫色多头康乃馨15枝，栀子叶2扎", 338, "¥486"]
    ];
    get_product(arr, 2, 201);
})();
(() => {
    var arr = [
        ["9010766", "圆满·", "粉百合2枝、红玫瑰9枝、叶上花1扎、红色康乃馨15枝、粉色洋桔梗0.5扎", 280, "¥368"],
        ["9012334", "幸福满溢·", "多头百合2枝（5朵以上/枝），卡罗拉玫瑰8枝，红太阳花6枝，混色石竹梅0.3扎，栀子叶0.5扎", 239, "¥288"],
        ["9020012", "水果花篮-欣情·", "粉香水百合1枝,红掌1枝,粉玫瑰4枝,粉扶郎4枝, 粉色康乃馨+红色康乃馨间插,巴西叶+绿叶适量; 进口橙子3个,红富士苹果3个,进口红提1.5斤，哈密瓜一个。", 348, "¥446"],
        ["9012430", "Better You·", "苏醒粉玫瑰19枝、粉色桔梗5枝、银叶菊5枝", 239, "¥306"],
        ["9012410", "感恩有你·", "紫红康乃馨10枝，苏醒玫瑰10枝，蓝色绣球1枝，浅紫紫罗兰10枝（紫罗兰属于季节性花材，无货用浅紫色洋桔梗代替），粉勿忘我10枝，尤加利叶10枝", 339, "¥429"],
        ["9020015", "水果花篮-温馨祝福·", "粉香水百合1枝,粉玫瑰8枝,粉康+紫康+紫边康乃馨间插,巴西叶和其他绿叶适量; 进口橙子3个,红富士苹果3个，进口红提1斤。", 279, "¥339"]
    ];
    get_product(arr, 3, 301);
})();
(() => {
    var arr = [
        ["1073039", "爱与祝福·", "FlowerSong永生花系列：进口粉色康乃馨1枝，紫心奥斯汀玫瑰1朵，浅粉桃色小玫瑰2朵，搭配白粉双色绣球，蓝色绣球", 198, "¥356"],
        ["1073129", "温柔清浅·", "进口粉色永生玫瑰2枝（直径6-7cm），进口浅紫色永生康乃馨3枝，粉边紫心永生奥斯丁玫瑰2枝，搭配粉色、蓝色绣球，橡栗叶1片，兔尾草1枝", 366, "¥466"],
        ["1073263", "进口哥伦比亚优质永生花园玫瑰3朵，搭配绣球等永生花材，手工精制而成。再搭配满月型艺术台灯，造型独特，创意十足，是送礼、居家自用的极佳选择。", 398, "¥498"],
        ["1073176", "幸运之吻-香氛款·", "厄瓜多尔进口永生红色康乃馨1朵进口、永生红玫1朵(直径6-7CM)、红色永生小玫瑰2朵、红色小果子2颗、进口红绣球适量、进口雪松枝适量；美国进口Voluspa香氛1盒（Voluspa起源于美国南加州，好莱坞巨星们是常客！由于味道好闻颜值又高，VOLUSPA还经常成为奥斯卡、格莱美等颁奖典礼的伴手礼。依循欧洲古老传统的制蜡配方，添加只从天然植物、水果和香料中萃取的精油，闻起来舒服自然。）", 388, "¥588"],
        ["1073128", "幸福港湾·", "进口粉色永生玫瑰1枝（直径6-7cm）、浅紫色康乃馨1枝，浅粉桃色小玫瑰1朵，搭配粉色、蓝色、黄色绣球，小星花3枝，小满天星适量", 288, "¥448"],
        ["1060009", "幸福时光·", "精选绽放优美的红玫瑰七枝，配叶适量，在采摘后一个小时内用荷兰最新专利工艺处理，完整保留鲜花色泽和形态，经泰国花艺师精妙构思与巧手装扮，封入精美玻璃花瓶，保证产品使用寿命5年以上。", 569, "¥869"]
    ];
    get_product(arr, 4, 401);
})();
(() => {
    var panel_body = document.getElementsByClassName("panel-body")[0];
    var arr = [
        [
            [22620, "重阳节送礼送什么好？"],
            [22565, "2018重阳节给老人祝福语精选"],
            [22560, "重阳节的习俗有哪些？"],
            [22452, "重阳节给长辈的祝福语精选"],
            [22451, "关于重阳节的故事你知道多少？"]
        ],
        [
            [19621, "重阳节即将到来，礼物你准备好了吗？"],
            [19608, "重阳节：给老人家送礼物是我最大的牵挂！"],
            [19510, "重阳节：给老人的祝寿祝福语怎么说？"],
            [19451, "重阳节：请告诉你身边的老年人，这些花不要养！"],
            [19450, "哪些地方适合重阳节赏菊？重阳节赏菊好地方推荐"]
        ],
        [
            [19448, "2017年的重阳节是哪一天？"],
            [19445, "重阳节有哪些禁忌？"],
            [19444, "重阳节登高的好去处，总有一款适合你！"],
            [19443, "重阳节，老人家怎样养生身体更棒？"],
            [19442, "重阳节，你想为父母做点什么？"]
        ]
    ];
    var str = "";
    for (var elems of arr) {
        str += "<ul>";
        for (var elem of elems) {
            str += `<li><a href="/huayu/${elem[0]}.html" target="_blank">${elem[1]}</a></li>`;
        }
        str += "</ul>"
    }
    panel_body.innerHTML = str;
})();