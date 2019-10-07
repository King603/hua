(() => {
    var arr = [
        ["aiqingxianhua", "爱情鲜花"],
        ["youqingxianhua", "友情鲜花"],
        ["shengriliwu", "生日鲜花"],
        ["songzhangbeixianhua", "问候长辈"],
        ["zhufuqinghexianhua", "祝贺鲜花"],
        ["hunqingxianhua", "婚庆鲜花"],
        ["tanbingweiwenxianhua", "探病慰问"],
        ["daoqianxianhua", "道歉鲜花"],
        ["businessFlower/kaiyehualan", "开业鲜花"]
    ];
    for (var i = 0; i < arr.length; i++) {
        xhyt.innerHTML += `<li style="width:30%">
        <a href="/${arr[i][0]}/" target="_blank">${arr[i][1]}</a></li>`
    }
})();
(() => {
    var arr = [
        ["box", "经典花盒"],
        ["large", "巨型玫瑰"],
        ["lavender", "薰衣草"],
    ];
    for (var i = 0; i < arr.length; i++) {
        ysh.innerHTML += `<li><a target="_blank" href="/yongshenghua/yongshenghua_${arr[i][0]}.html">${arr[i][1]}</a></li>`
    }
})();
(() => {
    var arr = [
        ["/", "首页"],
        ["/flower", "鲜花"],
        ["/yongshenghua", "永生花"],
        ["/huayu", "花语大全"]
    ];
    for (var i = 0; i < arr.length; i++) {
        nav.innerHTML += `<li><a href="${arr[i][0]}">${arr[i][1]}</a></li>`
    }
})();
(() => {
    var arr = [
        ["", "18339", "20181015140110280", "天秤座性格分析及星座配对！", "生日礼物指南", "天秤座可能是十二星座里最憋屈的了，因为几乎没有人叫对了ta们的名字，实际上，“秤”这个字只有一个音：chèng，天秤座中的秤也并不是指天平，天秤座里面的“秤”称…"],
        ["g-a4", "22732", "2018101514033054", "开花店需要哪些条件？你到底适不适合开花店？", "花店经营", "很多想要开花店的人都是那种对花艺感兴趣并且想以此生存的人，开花店需要哪些条件？你到底适不适合开花店？"],
        ["", "23027", "20190305182251653", "春天的花有哪些？", "花卉花艺", "不知不觉，春天的脚步近了。寒冬的冰天雪地逐渐被绿意和一朵朵艳丽的花儿取代。春天，是最富有生机的。春雨，伴着万物生长。在春天开放的花儿之中，你认识多少种呢？"],
        ["g-a4", "20901", "20180620085627742", "追女生除了送玫瑰还可以送什么花好？", "给朋友送花", "有一个很喜欢的女孩子，现在在追求阶段，想给她送花，送什么比较好？现在很多男生都觉得女生难追，费尽心思还是还来一句咱们只适合做朋友！有可能只是你的方式不对，爱情当…"],
        ["", "23012", "20190315111443532", "花毛茛花语是什么？花毛茛养护技巧？", "鲜花常识", "要说春季必买的花卉之一，花毛茛肯定当之无愧，花色丰富的它，买几盆放在阳台和客厅里，绝对吸引眼球。花毛茛为重瓣或半重瓣，恍惚间，还颇有牡丹花的容颜，令人沉迷。"],
        ["g-a4", "21805", "2018062009100895", "平时如何给女朋友创造惊喜？让女人倍感甜蜜的大绝招！", "给女朋友送花", "女人都喜欢浪漫与惊喜，这一点毋庸置疑。就是我们平时说的嘴上说着不要不要，但是收到你送的惊喜内心其实是很欢喜的，平时如何给女朋友创造惊喜？让女人倍感甜蜜的大绝招！"]
    ];
    var str = "";
    for (var i = 0; i < arr.length; i++) {
        str += `
        <li class="${arr[i][0]}">
            <div class="g-row article">
                <div class="pic">
                    <a href="/huayu/${arr[i][1]}.html" target="_blank"><img width="134" height="100" src="../baikeimg/by_${arr[i][2]}.jpg"></a>
                </div>
                <div class="g-a1 ccontent">
                    <div class="g-row">
                        <h4><a href="/huayu/${arr[i][1]}.html" target="_blank" title="${arr[i][3]}">${arr[i][3]}！</a></h4>
                        <span> 分类：<a target="_blank" href="/huayu/${arr[i][1]}.html">${arr[i][4]}</a></span>
                    </div>
                    <p>${arr[i][5]}</p>
                </div>
            </div>
        </li>
        `
    }
    twtj.innerHTML = str;
})();
(() => {
    var arr = [
        ["Title", "/huayu/23025.html", "父亲六十大寿适合送什么花？", "/huayu/tozhangbei.html", "送长辈生日礼物"],
        ["Brief", "/huayu/23025.html", "父亲六十大寿适合送什么花？", "", ""],
        ["Title", "/huayu/23012.html", "花毛茛花语是什么？花毛茛养护技巧？", "/huayu/zhishi.html", "鲜花常识"],
        ["Brief", "/huayu/23012.html", "要说春季必买的花卉之一，花毛茛肯定当之无愧，花色丰富的它，买几盆放在阳台和客厅里，绝对吸引眼球。花毛茛为重瓣或半重瓣，恍惚间，还颇有牡丹花的容颜，令人沉迷。", "", ""],
        ["Title", "/huayu/22994.html", "给爷爷送花有哪些选择？给老人送花推荐！", "/huayu/forelder.html", "给长辈送花"],
        ["Brief", "/huayu/22994.html", "爷爷今年70岁生日，如果要给他老人家送花，一般是怎么选择？有哪些寓意比较吉利的花适合送给老人，给爷爷送花有哪些选择？给老人送花推荐！", "", ""],
        ["Title", "/huayu/22993.html", "送花要注意什么？如何给老人，爱人，朋友送花？", "/huayu/shenghuo.html", "鲜花生活"],
        ["Brief", "/huayu/22993.html", "送花要注意什么？如何给老人，爱人，朋友送花？", "", ""],
        ["Title", "/huayu/22732.html", "开花店需要哪些条件？你到底适不适合开花店？", "/huayu/huadian.html", "花店经营"],
        ["Brief", "/huayu/22732.html", "很多想要开花店的人都是那种对花艺感兴趣并且想以此生存的人，开花店需要哪些条件？你到底适不适合开花店？", "", ""],
        ["Title", "/huayu/22614.html", "婚礼清单|距离国庆婚礼旺季不到一周，该如何查漏补缺？", "/huayu/jiehun.html", "结婚送花"],
        ["Brief", "/huayu/22614.html", "国庆婚礼旺季即将来临，对于一生只有一次的婚礼，细节十分重要！婚礼前一周是一个非常重要的时间，之前没准备好的要赶紧补上，已经准备好的，也要查漏补缺。", "", ""],
        ["Title", "/huayu/22370.html", "女朋友压力大，有哪些缓解压力的妙招？", "/huayu/forgirl.html", "给女朋友送花"],
        ["Brief", "/huayu/22370.html", "现代社会里，每个人要面对的压力实在太多了，小到连续加班、工作瓶颈、恋爱争吵，大到升学、求职、婚姻生育等重要人生选择，还有最近北上广深暴涨的房价，都让人头大，女朋友压力大，有哪些缓解压力的妙招？", "", ""],
        ["Title", "/huayu/22337.html", "9.10教师节给老师送什么花合适？", "/huayu/jiaoshijie.html", "教师节送花"],
        ["Brief", "/huayu/22337.html", "还有不到一个月的时间就是教师节了，各位想好给老师送什么礼物了吗？俗话说得好，礼轻情意重。礼物的贵重与否不重要，重要的是这份礼物的心意，送花是最不会出错的选择，也许有的人有这个心，但就是不知道送什么花给老师合适，小编给大家推荐一下！", "", ""]
    ];
    var str = "";
    for (var i = 0; i < arr.length; i++) {
        str += `
        <div class="Item_${arr[i][0]}">
            <a href="${arr[i][1]}" class="left" target="_blank">${arr[i][2]}</a>
            <a href="${arr[i][3]}" class="right" target="_blank">${arr[i][4]}</a>
        </div>
        `;
    }
    tjwz.innerHTML = str;
})();
(() => {
    for (var i = 1; i < 14; i += 2) {
        list_all.innerHTML += `
        <dl class="home_rec_cat" id="list${i}"></dl>
        <dl class="home_rec_cat g-a4" id="list${i + 1}"></dl>
        <div class="separate"></div>
        `
    }
})();
(() => {
    var arr = [
        ["23025", "父亲六十大寿适合送什么花？"],
        ["18395", "摩羯座喜欢你的内心活动？摩羯座女生喜欢什么礼物？"],
        ["22058", "最完整的巨蟹座性格分析及星座配对！"],
        ["21979", "男朋友做过的哪件事情让你认定就是他了？"],
        ["21183", "给领导和同事送礼有哪些误区？送礼需要注意哪些细节？"],
        ["21153", "祝老婆生日快乐的祝福怎么说？老婆生日祝福精选！"],
        ["21072", "男生身上这些特质，最能吸引妹子的注意力了！"],
        ["21053", "如何聊天才不会把天聊死？"]
    ];
    var str = '<dd class="header"><a class="left" target="_blank" href="/huayu/list_liwu.html">送礼</a><a class="right" target="_blank" href="/huayu/list_liwu.html">更多>> </a></dd>';
    for (var i = 0; i < arr.length; i++) {
        str += `<a href="/huayu/${arr[i][0]}.html" target="_blank">${arr[i][1]}</a></dd>`;
    }
    list1.innerHTML = str;
})();
(() => {
    var arr = [
        ["19164", "忘记老婆生日怎么办？如何选用生日鲜花？"],
        ["18507", "你知道吗？其实生日送花也有许多讲究"],
        ["18119", "生日送花送不同的人分别送什么花？"],
        ["16624", "女朋友生日送永生花有没有推荐？"],
        ["13891", "未来婆婆生日送什么花？"],
        ["23032", "浪漫双鱼月，送给TA的专属礼物快看过来吧~"],
        ["22888", "花开一面墙，花落一路香，一棵爬藤植物的花海"],
        ["22874", "生日送花祝福语怎么写？给老婆，给朋友，给长辈祝福语！"]
    ];
    var str = '<dd class="header"><a class="left" target="_blank" href="/huayu/shengri.html">生日送花</a><a class="right" target="_blank" href="/huayu/shengri.html">更多>> </a></dd>';
    for (var i = 0; i < arr.length; i++) {
        str += `<a href="/huayu/${arr[i][0]}.html" target="_blank">${arr[i][1]}</a></dd>`
    }
    list2.innerHTML = str;
})();
(() => {
    var arr = [
        ["18142", "怎么对应星座送花？"],
        ["18094", "为什么越来越多的年轻人喜欢过儿童节？"],
        ["13210", "在青岛送花请问哪里有送货上门的，有推荐的吗？"],
        ["19291", "送花给女生有什么讲究？"],
        ["18141", "支招十二星座送花攻略"],
        ["18082", "2017七夕送花攻略"],
        ["18212", "巨蟹座性格分析及星座配对！"],
        ["17743", "永生花是什么？永生花是真花吗？它为什么叫永生花？"]
    ];
    var str = '<dd class="header"><a class="left" target="_blank" href="/huayu/jiqiao.html">送花艺术</a><a class="right" target="_blank" href="/huayu/jiqiao.html">更多>> </a></dd>';
    for (var i = 0; i < arr.length; i++) {
        str += `<a href="/huayu/${arr[i][0]}.html" target="_blank">${arr[i][1]}</a></dd>`
    }
    list3.innerHTML = str;
})();
(() => {
    var arr = [
        ["23012", "花毛茛花语是什么？花毛茛养护技巧？"],
        ["22281", "黄玫瑰和香槟玫瑰一样吗？两者有何不同？"],
        ["22027", "线状，块状，散状...不同形态的花材插花时运用于哪些地方？"],
        ["19659", "宋仲基宋慧乔结婚，宋慧乔手上的手捧花是什么花？"],
        ["19502", "戴安娜粉玫瑰和粉佳人玫瑰有什么区别？怎么区分戴安娜粉玫瑰和粉佳人？"],
        ["18209", "刷新你对菊花的认识！"],
        ["17774", "对不起，我应该早点告诉你"],
        ["14593", "2016，为12星座开运的12种花"]
    ];
    var str = '<dd class="header"><a class="left" target="_blank" href="/huayu/zhishi.html">鲜花常识</a><a class="right" target="_blank" href="/huayu/zhishi.html">更多>> </a></dd>';
    for (var i = 0; i < arr.length; i++) {
        str += `<a href="/huayu/${arr[i][0]}.html" target="_blank">${arr[i][1]}</a></dd>`
    }
    list4.innerHTML = str;
})();
(() => {
    var arr = [
        ["22993", "送花要注意什么？如何给老人，爱人，朋友送花？"],
        ["21595", "盘点那些超级受欢迎的鲜花，有你喜欢的吗？"],
        ["21062", "家里有孕妇，这些花千万不要养！"],
        ["19995", "新娘手捧花的由来是什么？手捧花有什么传说？"],
        ["18202", "「轻奢」的生活，一点都不昂贵"],
        ["17487", "你见过秋色绣球的美吗？秋色绣球如何做干花？"],
        ["15442", "最能代表女神的花，你是哪一种？"],
        ["13519", "雾霾天，清除污染的最佳十大室内植物"]
    ];
    var str = '<dd class="header"><a class="left" target="_blank" href="/huayu/shenghuo.html">鲜花生活</a><a class="right" target="_blank" href="/huayu/shenghuo.html">更多>> </a></dd>';
    for (var i = 0; i < arr.length; i++) {
        str += `<a href="/huayu/${arr[i][0]}.html" target="_blank">${arr[i][1]}</a></dd>`
    }
    list5.innerHTML = str;
})();
(() => {
    var arr = [
        ["21571", "520脱单指南~简单粗暴的脱单最令人心动啦~"],
        ["21334", "花艺包装的色彩要怎么搭配？花艺包装的色彩搭配方案"],
        ["20600", "寓意延年益寿的年宵花有哪些？"],
        ["20203", "森林系蕨类植物的婚礼装饰"],
        ["19998", "关于结婚的捧花、胸花、蜜月，有哪些我们不知道的结婚冷知识？"],
        ["19914", "学习花艺十大误区，你中了几条？"],
        ["17749", "如何区分进口永生花和国产永生花？"],
        ["18135", "插花要怎么弄才具有独一无二的美？"]
    ];
    var str = '<dd class="header"><a class="left" target="_blank" href="/huayu/huayi.html">花卉花艺</a><a class="right" target="_blank" href="/huayu/huayi.html">更多>> </a></dd>';
    for (var i = 0; i < arr.length; i++) {
        str += `<a href="/huayu/${arr[i][0]}.html" target="_blank">${arr[i][1]}</a></dd>`
    }
    list6.innerHTML = str;
})();
(() => {
    var arr = [
        ["22051", "满天星的传说是什么？满天星为什么是配角？"],
        ["11044", "白玫瑰花语，送白玫瑰代表什么意思？"],
        ["10866", "勿忘我花语"],
        ["10807", "薰衣草花语是什么？"],
        ["10550", "蓝色妖姬花语和寓意是什么？"],
        ["17747", "永生花的花语是什么？送永生花有什么寓意！"],
        ["17488", "多头康乃馨的花语是什么？"],
        ["11558", "百合花语，百合花怎么养？"]
    ];
    var str = '<dd class="header"><a class="left" target="_blank" href="/huayu/huayu.html">花语</a><a class="right" target="_blank" href="/huayu/huayu.html">更多>> </a></dd>';
    for (var i = 0; i < arr.length; i++) {
        str += `<a href="/huayu/${arr[i][0]}.html" target="_blank">${arr[i][1]}</a></dd>`
    }
    list7.innerHTML = str;
})();
(() => {
    var arr = [
        ["20659", "2018搞笑春节拜年祝福语"],
        ["19782", "2017给恋人给朋友给长辈祝福语精选"],
        ["13284", "重阳节送花祝福语精选"],
        ["18450", "2017七夕贺卡留言精选"],
        ["20060119182956", "情人节祝福语（一）"],
        ["20120525123201", "经典生日祝福语"],
        ["20051116174222", "经典送花祝福语"],
        ["23056", "一年一度的父亲节又快到了，有什么想对爸爸说的吗？"]
    ];
    var str = '<dd class="header"><a class="left" target="_blank" href="/huayu/list_zhufuyu.html">祝福语大全</a><a class="right" target="_blank" href="/huayu/list_zhufuyu.html">更多>> </a></dd>';
    for (var i = 0; i < arr.length; i++) {
        str += `<a href="/huayu/${arr[i][0]}.html" target="_blank">${arr[i][1]}</a></dd>`
    }
    list8.innerHTML = str;
})();
(() => {
    var arr = [
        ["21153", "祝老婆生日快乐的祝福怎么说？老婆生日祝福精选！"],
        ["20873", "双鱼座女神的性格特质，给双鱼座女孩子如何送礼？"],
        ["20187", "女朋友生日，怎么给她策划一场生日惊喜？"],
        ["22168", "女朋友过生日送什么礼物好？"],
        ["22092", "工作后的第一个生日，想送Ta这些"],
        ["22078", "女朋友过生日，生日祝福愿望怎么说？"],
        ["22071", "生日送花卡片怎么写？给女朋友生日送花祝福语精选！"],
        ["22055", "送对生日礼物，让女友温柔一整年"]
    ];
    var str = '<dd class="header"><a class="left" target="_blank" href="/huayu/tonvyou.html">送女朋友生日礼物</a><a class="right" target="_blank" href="/huayu/tonvyou.html">更多>> </a></dd>';
    for (var i = 0; i < arr.length; i++) {
        str += `<a href="/huayu/${arr[i][0]}.html" target="_blank">${arr[i][1]}</a></dd>`
    }
    list9.innerHTML = str;
})();
(() => {
    var arr = [
        ["23031", "2.19-3.20浪漫双鱼月，庆生小攻略"],
        ["22149", "你长得这么好看，送你的生日礼物必须颜值高"],
        ["22142", "闺蜜马上过生日，这些礼物准合她心意"],
        ["22136", "朋友25岁生日送什么礼物好？生日祝福语怎么说！"],
        ["21938", "巨蟹座：坚强的外壳藏不住你的温柔"],
        ["21901", "给朋友生日送礼要注意哪些事项？哪些祝福语更能表达情谊？"],
        ["21738", "送礼指南| 如何为百变双子座女生挑选礼物？"],
        ["21139", "祝朋友生日快乐的话！朋友生日祝福语精选！"]
    ];
    var str = '<dd class="header"><a class="left" target="_blank" href="/huayu/topengyou.html">送朋友生日礼物</a><a class="right" target="_blank" href="/huayu/topengyou.html">更多>> </a></dd>';
    for (var i = 0; i < arr.length; i++) {
        str += `<a href="/huayu/${arr[i][0]}.html" target="_blank">${arr[i][1]}</a></dd>`
    }
    list10.innerHTML = str;
})();
(() => {
    var arr = [
        ["17494", "挑什么礼物送给男性朋友？"],
        ["16970", "释放洪荒之力，教你如何拿下处女座MM"],
        ["16555", "最全送礼禁忌整理！"],
        ["16415", "教你如何在结婚纪念日时，为爱人挑选礼物？"],
        ["8002", "如今送礼送什么?"],
        ["8001", "送礼的技巧"],
        ["8007", "新年礼物选购"],
        ["8006", "礼赠艺术"]
    ];
    var str = '<dd class="header"><a class="left" target="_blank" href="/huayu/tosongli.html">送礼艺术</a><a class="right" target="_blank" href="/huayu/tosongli.html">更多>> </a></dd>';
    for (var i = 0; i < arr.length; i++) {
        str += `<a href="/huayu/${arr[i][0]}.html" target="_blank">${arr[i][1]}</a></dd>`
    }
    list11.innerHTML = str;
})();
(() => {
    var arr = [
        ["17495", "这些节日礼物所代表的寓意你都知道吗？"],
        ["18072", "520送给她一份甜蜜的礼物"],
        ["10561", "元旦送什么礼物？"],
        ["22161", "想不出七夕礼物送什么？赶紧戳"],
        ["22160", "七夕特辑｜浪漫小银饰温暖Ta的心"],
        ["21976", "七夕送礼正确指南|T400银饰，适合情侣&闺蜜"],
        ["21974", "500元以下礼物清单，送出最走心的七夕礼物！"],
        ["21325", "520情人节送礼物，四款永生花让女友乐开花！"]
    ];
    var str = '<dd class="header"><a class="left" target="_blank" href="/huayu/tojieri.html">节日礼物</a><a class="right" target="_blank" href="/huayu/tojieri.html">更多>> </a></dd>';
    for (var i = 0; i < arr.length; i++) {
        str += `<a href="/huayu/${arr[i][0]}.html" target="_blank">${arr[i][1]}</a></dd>`
    }
    list12.innerHTML = str;
})();
(() => {
    var arr = [
        ["17371", "鲜花助力920表白节，看花礼网如何玩转“920”？"],
        ["10413", "中国鲜花礼品网，引领网上送花潮流"],
        ["23005", "2018年世界电子商务大会在京召开，花礼网荣获电子商务最具品牌价值奖"],
        ["22454", "互联网已经进入下半场，鲜花电商该何去何从？"],
        ["19691", "2017世界电子商务大会在京举行，花礼网荣获最具影响力奖"],
        ["17809", "花礼网被授予中国电子商务行业联盟副理事长单位"],
        ["17656", "花礼网荣获中国电子商务行业门户大会鲜花礼品行业龙头奖"],
        ["17639", "百易（花礼网）获2016年国家级高新技术企业认定"]
    ];
    var str = '<dd class="header"><a class="left" target="_blank" href="/profile/media.html">媒体报道</a><a class="right" target="_blank" href="/profile/media.html">更多>> </a></dd>';
    for (var i = 0; i < arr.length; i++) {
        str += `<a href="/profile/${arr[i][0]}.html" target="_blank">${arr[i][1]}</a></dd>`
    }
    list13.innerHTML = str;
})();
(() => {
    var arr = [
        ["19626", "8年送花99束，神一样的花礼网客户"],
        ["19133", "超感动 | 花礼网用户真情告白故事"],
        ["11821", "当之无愧女主角"],
        ["11819", "一起抵达梦的彼岸"],
        ["11812", "我愿做你的召唤兽"],
        ["11798", "女人爱花，男人爱酒"],
        ["11796", "小女人的“幸福”"],
        ["11784", "不能让真爱“埋没掉”"]
    ];
    var str = '<dd class="header"><a class="left" target="_blank" href="/profile/gdsj.html">感动瞬间</a><a class="right" target="_blank" href="/profile/gdsj.html">更多>> </a></dd>';
    for (var i = 0; i < arr.length; i++) {
        str += `<a href="/profile/${arr[i][0]}.html" target="_blank">${arr[i][1]}</a></dd>`
    }
    list14.innerHTML = str;
})();
(() => {
    var arr = [
        ["23056", "一年一度的父亲节又快到了，有什么想对爸爸说的吗？", "一年一度的父亲节又快到了，有什么想对爸爸说的吗？"],
        ["23044", "给客户送礼一般如何送？给客户送礼有哪些讲究？", "很多人一提到给客户送礼，就头大，送什么，花多少钱合适……心里都没有一点数，如果是一个有心的人，其实他会在送礼之前首先应该列一份清单，把需要打点的人一一列出。给客户送礼一般如何送？给客户送礼有哪些讲究？"],
        ["23043", "送女孩永不凋谢的花，有这几种选择", "送女孩永不凋谢的花，有这几种选择"],
        ["23042", "第一次给女朋友过生日，该送什么？", "第一次给女朋友过生日，该送什么？"],
        ["23040", "粉色系玫瑰有哪些？粉色系玫瑰有啥区别？", "粉色系玫瑰有哪些？粉色系玫瑰有啥区别？"],
        ["23039", "苏醒玫瑰花语是什么？苏醒玫瑰适合送给谁？", "苏醒玫瑰花语是什么？苏醒玫瑰适合送给谁？"],
        ["23038", "春天有哪些应季的花？", "春天有哪些应季的花？"],
        ["23037", "白色情人节贺卡留言，白色情人节祝福语精选", "白色情人节贺卡留言，白色情人节祝福语精选"]
    ];
    var str = "";
    for (var i = 0; i < arr.length; i++) {
        str += `
        <div class="Item_Title">
            <a class="left" href="/huayu/${arr[i][0]}.html" target="_blank">${arr[i][1]}</a>
        </div>
        <div class="Item_Brief">
            <a href="/huayu/${arr[i][0]}.html" target="_blank">${arr[i][2]}</a>
        </div>
        `;
    }
    list15.innerHTML = str;
})();
(() => {
    var arr = [
        ["/huayu/list_xianhua.html", "送花", [
            ["/huayu/jiehun.html", "结婚送花"],
            ["/huayu/story.html", "送花故事分享"],
            ["/huayu/shengri.html", "生日送花"],
            ["/huayu/jiqiao.html", "送花艺术"],
            ["/huayu/zhishi.html", "鲜花常识"],
            ["/huayu/shenghuo.html", "鲜花生活"],
            ["/huayu/huayi.html", "花卉花艺"],
            ["/huayu/huayu.html", "花语"],
            ["/huayu/shangwu.html", "商务送花"],
            ["/huayu/huadian.html", "花店经营"],
            ["/huayu/daoqian.html", "道歉送花"],
            ["/huayu/kaiye.html", "开业送花"],
            ["/huayu/qiaoqian.html", "乔迁送花"],
            ["/huayu/shengzi.html", "生子送花"],
            ["/huayu/tanbing.html", "探病送花"],
            ["/huayu/biye.html", "毕业送花"],
            ["/huayu/jiehunjinian.html", "结婚纪念送花"],
            ["/huayu/forgirl.html", "给女朋友送花"],
            ["/huayu/forfriend.html", "给朋友送花"],
            ["/huayu/forleader.html", "给领导送花"],
            ["/huayu/forkids.html", "给孩子送花"],
            ["/huayu/forelder.html", "给长辈送花"],
            ["/huayu/forteacher.html", "给老师送花"],
            ["/huayu/formate.html", "给同事送花"],
            ["/huayu/forclient.html", "给客户送花"],
            ["/huayu/forparent.html", "给父母送花"],
            ["/huayu/forwife.html", "给妻子送花"],
            ["/huayu/forrelative.html", "给亲属送花"],
            ["/huayu/yidisonghua.html", "异地送花"],
            ["/huayu/zhushousonghua.html", "祝寿送花"],
            ["/huayu/qiuhunsonghua.html", "求婚送花"],
            ["/huayu/biaobaisonghua.html", "求爱表白送花"],
            ["/huayu/guanggunjie.html", "光棍节送花"],
            ["/huayu/ganenjie.html", "感恩节送花"],
            ["/huayu/shengdanjie.html", "圣诞节送花"],
            ["/huayu/chunjie.html", "春节送花"],
            ["/huayu/qingrenjie.html", "情人节送花"],
            ["/huayu/sanbajie.html", "三八妇女节送花"],
            ["/huayu/muqingjie.html", "母亲节送花"],
            ["/huayu/fuqingjie.html", "父亲节送花"],
            ["/huayu/qixijie.html", "七夕节送花"],
            ["/huayu/jiaoshijie.html", "教师节送花"],
            ["/huayu/zhongqiujie.html", "中秋节送花"],
            ["/huayu/hushijie.html", "护士节送花"],
            ["/huayu/duanwujie.html", "端午节送花"],
            ["/huayu/chongyangjie.html", "重阳节送花"],
            ["/huayu/yuanxiaojie.html", "元宵节送花"],
            ["/huayu/whiteday.html", "白色情人节送花"]
        ]],
        ["/huayu/list_dangao.html", "蛋糕常识", []],
        ["/huayu/list_liwu.html", "送礼", [
            ["/huayu/tolingdao.html", "送领导生日礼物"],
            ["/huayu/tozhangbei.html", "送长辈生日礼物"],
            ["/huayu/totongshi.html", "送同事生日礼物"],
            ["/huayu/tomuqing.html", "送母亲生日礼物"],
            ["/huayu/tonvyou.html", "送女朋友生日礼物"],
            ["/huayu/tonanyou.html", "送男朋友生日礼物"],
            ["/huayu/tokehu.html", "送客户生日礼物"],
            ["/huayu/togongsi.html", "送员工生日礼物"],
            ["/huayu/topengyou.html", "送朋友生日礼物"],
            ["/huayu/toxiaohai.html", "送小孩生日礼物"],
            ["/huayu/tofuqing.html", "送父亲生日礼物"],
            ["/huayu/tosongli.html", "送礼艺术"],
            ["/huayu/tozhinan.html", "生日礼物指南"],
            ["/huayu/tojieri.html", "节日礼物"],
            ["/huayu/toqizi.html", "送妻子生日礼物"],
            ["/huayu/toqingshu.html", "送家人亲属礼物"],
            ["/huayu/tolaoshi.html", "送老师礼物"]
        ]],
        ["/huayu/list_zhufuyu.html", "祝福语大全", []],
        ["/profile/news.htm", "公司动态", []],
        ["/profile/media.html", "媒体报道", []],
        ["/profile/gdsj.html", "感动瞬间", []],
        ["/huayu/yanghua.html", "养花", [
            ["/huayu/yanghua_01.html", "鲜花养护"],
            ["/huayu/yanghua_02.html", "花卉盆栽养护"],
            ["/huayu/yanghua_03.html", "绿植养护"],
            ["/huayu/huahuidaquan.html", "花卉大全"],
            ["/huayu/xianqiehua.html", "常用鲜切花专辑"]
        ]],
        ["#", "图片大全", [
            ["//www.hua.com/flower_picture", "鲜花图片大全"],
            ["//www.hua.com/flower_picture/dangao", "蛋糕图片大全"]
        ]]
    ];
    var str = "";
    for (var i = 0; i < arr.length; i++) {
        str += `
        <li class="first"><a href="${arr[i][0]}" target="_blank">${arr[i][1]}</a></li>
        <li>
            <dl>
        `;
        for (var j = 0; j < arr[i][2].length; j++) {
            str += `<dd><a href="${arr[i][2][j][0]}" target="_blank">${arr[i][2][j][1]}</a></dd>`;
        }
        str += "</dl></li>";
    }
    bk_menu.innerHTML=str;
})();