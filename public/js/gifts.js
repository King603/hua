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
        [1076062, "星期耳钉礼盒", "星期耳钉，每天都不同", "s925银个性耳钉", 198, "火热畅销款"],
        [1073262, "施华洛世奇BEEAQUEEN皇冠套装/限量版", '免费送定制女神"恋"条包', "施华洛世奇项链+手链+耳饰套装，免费送施华洛世奇限量定制女神“恋”条包", 3490, "送定制恋条包"],
        [1070072, "MUID化妆镜台灯 / 藕色", "补妆神器，照亮你的美", "藕色", 169, "新款上市"],
        [1077008, "woody手工气泡玻璃小鹿灯（海天蓝）", "每个细节都带着温度", "", 168, "专属你的礼物"],
        [1077011, "woody书灯木质led折叠usb书本灯-时尚版（黑胡桃）", "创意书灯", "", 198, "精选礼品"],
        [1077022, "猫王&#183;乌托邦 复古蓝牙音箱 MW-6", "原木手工 匠人匠心", "猫王乌托邦FM复古蓝牙音箱复古收音机音响（胡桃木）", 1099, "匠心原木手工"],
        [1076057, "施华洛世奇DAZZLING SWAN手链+项链套装", "<span>专柜正品 精典套装</span>", "AZZLING SWAN手链+项链套装--浪漫天鹅 项链+手链套装饰品 镀玫瑰金色", 2399, "畅销新品"],
        [1077024, "猫王小王子FM/蓝牙便携式音箱/粉色", "<span>粉系萌宠 暖音妙品</span>", "猫王小王子FM/蓝牙便携式音箱/粉色", 398, "温馨首选"],
        [1076040, "Glam Ever星星月亮不对称玫瑰金耳钉", "<span>孙俪都在戴平价潮牌</span>", "魅力星月系列", 145, "热销"],
        [1070017, "天使之恋", "<span>水钻与贝壳镶嵌 高档礼盒</span>", "高档精品化妆镜,天然深海母贝，彩白色的奥地利水钻", 159, "礼盒装畅销款"],
        [1070074, "如意艺术化妆镜/纯铜镜框", "<span>高档艺术随身化妆镜</span>", "镶嵌水钻及贝壳，高档设计，便携随身", 179, "6折特价"],
        [1090038, "公仔创意花束-兔子小姐", "<span>萌兔花束 TA的最爱</span>", "品牌metoo梦幻黄布偶娃娃+白色爱心兔+粉色爱心兔", 169, "萌兔花束"],
        [1090044, "小熊物语", "<span>特价小熊花束</span>", "8只关节熊搭配勿忘我,小熊花束", 119, "特价小熊花束"],
        [1064005, "十八音水晶钢琴", "<span>精湛工艺，音质纯正</span>", "水晶音乐盒 韵升精品机芯 精选送女友礼物", 239, "经典畅销款"],
        [1061006, "999纯金箔玫瑰+陶瓷花瓶", "<span>不凋谢的玫瑰</span>", "千足金箔玫瑰 最佳送女友送爱人礼物 结婚纪念礼物", 138, "热卖推荐"],
        [1076050, "迪奥口红#520+迪奥花漾淡香水30ml", "<span>迪奥专柜专属礼盒款</span>", "口红+香水礼盒套装", 859, "女神最爱"],
        [1071007, "心形3D水晶内雕爱在心里", "<span>升级版带音乐底座</span>", "激光内雕水晶工艺品，USB七彩旋转发光", 169, "甜蜜心形水晶"],
        [1061036, "kiss娃娃摆件/小号", "", "富贵典雅 婚庆结婚礼品", 398, ""],
        [1071031, "心形3D水晶内雕陪你走到老", "<span>七彩光交替变换</span>", "激光内雕水晶工艺品，USB七彩旋转发光, 带音乐底座", 169, ""],
        [1077026, "猫王小王子FM/蓝牙便携式音箱/黑色", "<span>重金属机车风</span>", "猫王小王子FM/蓝牙便携式音箱/黑色", 398, "温馨首选"],
        [1070030, "粉玫瑰花化妆镜", "<span>6折特价，限量抢购</span>", "高档精品化妆镜,经典玫瑰造型镶嵌彩色水钻......", 99, "直降，6折"],
        [1064004, "三十音水晶钢琴", "<span>音质纯正，演奏经典</span>", "内置30音精品韵升机芯，高级音乐盒 ", 1298, ""],
        [1077005, "Woody3D木质创意LED灯/玫瑰花", "", "木质底座3D灯,LED创意礼品家居摆件,送礼佳品", 139, ""],
        [1076048, "Glam Ever流星烟花耳环项链套装", "", "烟花系列", 698, "新品"],
        [1082001, "公爵套装雕羽", "<span>高档尊贵，超顺书写</span>", "复古羽毛笔，特别精选送男性礼物", 189, ""],
        [1077016, "Woody创意木质3D灯之风车系列", "<span>音乐风车灯</span>", "荷兰风车", 158, "特色礼物"],
        [1065004, "宝石旋转木马/蓝", "<span>造型精致，音质悦耳</span>", "音乐盒畅销款 送女友表白最佳礼物", 158, "畅销爆款"],
        [1070032, "限量奢华爱情玫瑰", "<span>限量款特价</span>", "纯铜镜壳+电镀双层加厚24K黄金，金色化妆镜，奢华系列礼盒", 298, "限量特价抢购"]
    ];
    for (var i = 0; i < arr.length; i++) {
        dataList.innerHTML += `
        <li class="product-list-item">
            <a href="/product/${arr[i][0]}.html" target="_blank">
                <div class="product-list-item__pic">
                    <img src="../img/375x409.png"
                        data-original="../newpic/${arr[i][0]}.jpg_220x240.jpg"
                        alt="${arr[i][1]}" />
                </div>
                <div class="product-list-item__info">
                    <div class="product-info-tag">
                        <span>${arr[i][2]}</span>
                    </div>
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
            ["10917.html", "毕业礼物送什么好？"],
            ["12177.html", "毕业了送同学什么最有纪念意义？"],
            ["12205.html", "送同学什么生日礼物好？"],
            ["12029.html", "特色礼物有哪些？"],
            ["10949.html", "送女孩子什么礼物好？泰国保鲜花推荐"]
        ],
        [
            ["11008.html", "送国内爱人什么生日礼物好？"],
            ["10772.html", "送老婆什么生日礼物好？"],
            ["10557.html", "老婆生日送什么礼物好?"],
            ["11197.html", "结婚礼物推荐，结婚送什么礼物最好？"],
            ["11850.html", "情人节礼物送什么？"]
        ],
        [
            ["20060816173328.htm", "不宜在公开场合赠送的礼物"],
            ["8003.htm", "如何给同辈者送的生日礼物？"],
            ["8004.htm", "懒人的节日礼物应急方案"],
            ["8005.htm", "结婚礼品推荐"],
            ["8008.htm", "赠送礼品小常识"]
        ]
    ];
    var str="";
    for (var i = 0; i < arr.length; i++) {
        str += "<ul>";
        for (var j = 0; j < arr[i].length; j++) {
            str += `<li><a href="/huayu/${arr[i][j][0]}" target="_blank">${arr[i][j][1]}</a></li>`
        }
        str += "</ul>";
    }
    panel_body.innerHTML=str;
})();