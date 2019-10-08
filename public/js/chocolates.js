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
        ["active", "/Gifts/", "all", "全部"],
        ["", "/Gifts/musicbox/", "yyh", "音乐盒"],
        ["", "/Gifts/goldenflower/", "jbh", "金箔花"],
        ["", "/gifts/crystallaser/", "sj", "3D水晶内雕"],
        ["", "/Gifts/shoushi/", "ss", "首饰/美妆"],
        ["", "/gifts/chocolates/", "qkl", "巧克力"],
        ["", "/toys/", "gz", "公仔/睡枕"],
        ["", "/gifts/dengshi/", "bj", "摆件/其他"]
    ];
    for (var i = 0; i < arr.length; i++) {
        giftcate.innerHTML += `
        <div class="giftcate-item ${arr[i][0]}">
            <a href="${arr[i][1]}">
                <i class="scon scon-cate-${arr[i][2]}"></i>
                <p>${arr[i][3]}</p>
            </a>
        </div>
        `;
    }
})();
(() => {
    var arr = [
        [1201003, "奢悦之美巧克力礼盒", "<span>始于颜值 忠于口感</span>", "夹心巧克力", 158, ""],
        [1201002, "玫瑰之约手工巧克力礼盒", "", "手工巧克力", 99, ""],
        [1201019, "棒棒糖形手工纯脂巧克力礼盒", "<span>满足你的童年乐趣</span>", "混合口味巧克力礼盒六一儿童节礼物", 119, "生日推荐"],
        [1207008, "巧克巧蔻定制6粒装手工夹心巧克力", "", "手工夹心巧克力", 108, ""],
        [1207050, "巧克巧蔻铅笔造型礼盒", "", "创意手工巧克力", 198, ""],
        [1207002, "巧克巧蔻53%纯可可脂黑巧克力薄片", "", "独立薄片散装儿", 88, ""],
        [1207052, "巧克巧蔻组合口味定制礼盒（ 冻干草莓+酸奶提子+扁桃仁）", "", "", 198, ""],
        [1207062, "手工卡通棒棒糖", "<span>儿童节定制</span>", "不重样6支款式随机", 150, ""],
        [1207051, "巧克巧蔻hot棒两周装礼盒", "", "创意手工巧克力", 280, ""],
        [1207068, "心动炫彩口红礼盒", "<span>口红礼盒巧克力</span>", "夹心巧克力", 258, "新品上新"],
        [1207071, "网红脏脏球巧克力( 榛子、腰果、巴旦木三口味组合装)", "<span>网红人气款</span>", "网红脏脏球巧克力", 189, ""],
        [1207012, "巧克巧蔻公仔巧克力", "", "创意手工巧克力", 98, ""],
        [1207070, "巧克巧蔻 松露巧克力（原味）", "", "松露巧克力", 158, ""],
        [1207009, "巧克巧蔻定制9粒装手工夹心巧克力", "", "手工夹心巧克力", 162, "畅销爆款"],
        [1207040, "七夕巧克力小食瓶", "", "创意手工巧克力", 189, ""],
        [1207032, "巧克巧蔻谢谢你play系列礼盒", "<span>随身携带，随时补充能量</span>", "创意手工巧克力", 135, ""],
        [1207030, "巧克巧蔻嫁给我play系列礼盒", "", "创意手工巧克力", 135, ""],
        [1207004, "巧克巧蔻96%纯可可脂黑巧克力薄片", "", "独立薄片散装儿", 98, ""],
        [1207069, "风情板块巧克力（草莓味+脆米牛奶味+咖啡牛奶味）", "<span>超值礼盒装</span>", "板块巧克力", 144, ""],
        [1207003, "巧克巧蔻70%纯可可脂黑巧克力薄片", "", "独立薄片散装儿", 88, ""],
        [1207001, "巧克巧蔻33%纯可可脂黑巧克力薄片", "", "独立薄片散装儿", 88, ""],
        [1204040, "Felchlin妃亭12粒装巧克力礼盒", "<span>原产地德国进口</span>", "德国手工夹心巧克力", 238, "送礼优选"],
        [1207067, "蜜语心形礼盒", "<span>心形包装 多种口味</span>", "夹心巧克力", 198, "甜蜜礼盒"],
        [1204050, "Felchlin妃亭手工巧克力音乐礼盒 ", "<span>高颜值礼盒 女神都爱</span>", "夹心巧克力巧克力", 358, ""],
        [1204042, "Felchlin妃亭18粒装巧克力礼盒", "<span>原产地德国进口</span>", "德国进口松露夹心巧克力", 348, ""],
        [1204041, "Felchlin妃亭16粒装巧克力礼盒", "<span>原产地德国进口</span>", "德国进口夹心手工巧克力", 298, ""],
        [1207010, "巧克巧蔻定制16粒装手工夹心巧克力", "", "手工夹心巧克力", 288, ""],
        [1207024, "巧克巧蔻情人节play系列礼盒", "<span>随身携带，随时补充能量</span>", "创意手工巧克力", 159, ""]
    ];
    for (var i = 0; i < arr.length; i++) {
        dataList.innerHTML += `
        <li class="product-list-item">
            <a href="/product/${arr[i][0]}.html" target="_blank" data-link="${arr[i][0]}">
                <div class="product-list-item__pic">
                    <img src="../../img/375x409.png" data-original="../../newpic/${arr[i][0]}.jpg_220x240.jpg" alt="${arr[i][1]}" />
                </div>
                <div class="product-list-item__info">
                    <div class="product-info-tag">${arr[i][2]}</div>
                    <div class="product-info-name">${arr[i][1]}--${arr[i][3]}</div>
                    <div class="product-info-price">&yen;${arr[i][4]}</div>
                    <hr />
                    <div class="product-info-light">${arr[i][5]}</div>
                </div>
            </a>
        </li>
        `;
    }
})();
(() => {
    var arr = [
        [
            ["13947.html", "情人节送花和巧克力代表什么？"],
            ["13106.html", "情人节巧克力的甜蜜传说"],
            ["14585.html", "情绪低落时，一大束花比吃巧克力管用！"],
            ["17737.html", "异地恋必须知道的5个技巧"],
            ["10949.html", "送女孩子什么礼物好？泰国保鲜花推荐"]
        ],
        [
            ["17734.html", "女朋友过生日送什么好？"],
            ["10772.html", "送老婆什么生日礼物好？"],
            ["10557.html", "老婆生日送什么礼物好?"],
            ["17607.html", "男朋友不送礼物是不是不爱你？"],
            ["11850.html", "情人节礼物送什么？"]
        ],
        [
            ["17606.html", "想暗示别人送礼物给自己，有什么方法及技巧？"],
            ["8003.htm", "如何给同辈者送的生日礼物？"],
            ["8004.htm", "懒人的节日礼物应急方案"],
            ["8005.htm", "结婚礼品推荐"],
            ["8008.htm", "赠送礼品小常识"]
        ]
    ];
    var str = "";
    for (var i = 0; i < arr.length; i++) {
        str += "<ul>";
        for (var j = 0; j < arr[i].length; j++) {
            str += `<li><a href="/huayu/${arr[i][j][0]}" target="_blank">${arr[i][j][1]}</a></li>`;
        }
        str += "</ul>";
    }
    panel_body.innerHTML = str;
})();