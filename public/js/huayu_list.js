(() => {
    var zxwz=document.getElementById("zxwz");
    var arr = [
        [23044, "给客户送礼一般如何送？给客户送礼有哪些讲究？", "很多人一提到给客户送礼，就头大，送什么，花多少钱合适……心里都没有一点数，如果是一个有心的人，其实他会在送礼之前首先应该列一份清单，把需要打点的人一一列出。给客户送礼一般如何送？给客户送礼有哪些讲究？"],
        [23043, "送女孩永不凋谢的花，有这几种选择", "送女孩永不凋谢的花，有这几种选择"],
        [23042, "第一次给女朋友过生日，该送什么？", "第一次给女朋友过生日，该送什么？"],
        [23040, "粉色系玫瑰有哪些？粉色系玫瑰有啥区别？", "粉色系玫瑰有哪些？粉色系玫瑰有啥区别？"],
        [23039, "苏醒玫瑰花语是什么？苏醒玫瑰适合送给谁？", "苏醒玫瑰花语是什么？苏醒玫瑰适合送给谁？"],
        [23038, "春天有哪些应季的花？", "春天有哪些应季的花？"],
        [23037, "白色情人节贺卡留言，白色情人节祝福语精选", "白色情人节贺卡留言，白色情人节祝福语精选"],
        [23036, "白色情人节是什么？白色情人节要干什么？", "白色情人节是什么？白色情人节要干什么？"]
    ];
    var str = "";
    for (var elem of arr) {
        str += `
        <div class="Item_Title">
            <a class="left" href="/huayu/${elem[0]}.html" target="_blank">${elem[1]}</a>
        </div>
        <div class="Item_Brief">
            <a href="/huayu/${elem[0]}.html" target="_blank">${elem[2]}</a>
        </div>
        `;
    }
    zxwz.innerHTML = str;
})();
var get_list=(arr,num,father)=>{
    var list=document.querySelectorAll(".aboutallbox .home_rec_cat")[num-1];
    var str = `<div class="header"><a class="left" target="_blank" href="/huayu/${father.href}.html">${father.title}</a><a class="right" target="_blank" href="/huayu/shengri.html">更多>></a></div>`;
    for (var elem of arr) {
        str += `<div><a href="/huayu/${elem[0]}.html" target="_blank">${elem[1]}</a></div>`;
    }
    list.innerHTML = str;
}
(() => {
    var arr = [
        [19164, "忘记老婆生日怎么办？如何选用生日鲜花？"],
        [18507, "你知道吗？其实生日送花也有许多讲究"],
        [18119, "生日送花送不同的人分别送什么花？"],
        [16624, "女朋友生日送永生花有没有推荐？"],
        [13891, "未来婆婆生日送什么花？"],
        [23032, "浪漫双鱼月，送给TA的专属礼物快看过来吧~"],
        [22888, "花开一面墙，花落一路香，一棵爬藤植物的花海"],
        [22874, "生日送花祝福语怎么写？给老婆，给朋友，给长辈祝福语！"]
    ];
    get_list(arr,1,{href:"shengri",title:"生日送花"});
})();
(() => {
    var arr = [
        [18142, "怎么对应星座送花？"],
        [18094, "为什么越来越多的年轻人喜欢过儿童节？"],
        [13210, "在青岛送花请问哪里有送货上门的，有推荐的吗？"],
        [19291, "送花给女生有什么讲究？"],
        [18141, "支招十二星座送花攻略"],
        [18082, "2017七夕送花攻略"],
        [18212, "巨蟹座性格分析及星座配对！"],
        [17743, "永生花是什么？永生花是真花吗？它为什么叫永生花？"]
    ];
    get_list(arr,2,{href:"jiqiao",title:"送花艺术"});
})();
(() => {
    var arr = [
        [23012, "花毛茛花语是什么？花毛茛养护技巧？"],
        [22281, "黄玫瑰和香槟玫瑰一样吗？两者有何不同？"],
        [22027, "线状，块状，散状...不同形态的花材插花时运用于哪些地方？"],
        [19659, "宋仲基宋慧乔结婚，宋慧乔手上的手捧花是什么花？"],
        [19502, "戴安娜粉玫瑰和粉佳人玫瑰有什么区别？怎么区分戴安娜粉玫瑰和粉佳人？"],
        [18209, "刷新你对菊花的认识！"],
        [17774, "对不起，我应该早点告诉你"],
        [14593, "2016，为12星座开运的12种花"]
    ];
    get_list(arr,3,{href:"zhishi",title:"鲜花常识"});
})();
(() => {
    var arr = [
        [22993, "送花要注意什么？如何给老人，爱人，朋友送花？"],
        [21595, "盘点那些超级受欢迎的鲜花，有你喜欢的吗？"],
        [21062, "家里有孕妇，这些花千万不要养！"],
        [19995, "新娘手捧花的由来是什么？手捧花有什么传说？"],
        [18202, "「轻奢」的生活，一点都不昂贵"],
        [17487, "你见过秋色绣球的美吗？秋色绣球如何做干花？"],
        [15442, "最能代表女神的花，你是哪一种？"],
        [13519, "雾霾天，清除污染的最佳十大室内植物"]
    ];
    get_list(arr,4,{href:"shenghuo",title:"鲜花生活"});
})();
(() => {
    var arr = [
        [21571, "520脱单指南~简单粗暴的脱单最令人心动啦~"],
        [21334, "花艺包装的色彩要怎么搭配？花艺包装的色彩搭配方案"],
        [20600, "寓意延年益寿的年宵花有哪些？"],
        [20203, "森林系蕨类植物的婚礼装饰"],
        [19998, "关于结婚的捧花、胸花、蜜月，有哪些我们不知道的结婚冷知识？"],
        [19914, "学习花艺十大误区，你中了几条？"],
        [17749, "如何区分进口永生花和国产永生花？"],
        [18135, "插花要怎么弄才具有独一无二的美？"]
    ];
    get_list(arr,5,{href:"huayi",title:"花卉花艺"});
})();
(() => {
    var arr = [
        [22051, "满天星的传说是什么？满天星为什么是配角？"],
        [11044, "白玫瑰花语，送白玫瑰代表什么意思？"],
        [10866, "勿忘我花语"],
        [10807, "薰衣草花语是什么？"],
        [10550, "蓝色妖姬花语和寓意是什么？"],
        [17747, "永生花的花语是什么？送永生花有什么寓意！"],
        [17488, "多头康乃馨的花语是什么？"],
        [11558, "百合花语，百合花怎么养？"]
    ];
    get_list(arr,6,{href:"huayu",title:"花语"});
})();
var get_menu=(arr,num)=>{
    var menu=document.querySelectorAll(".dropdown-menu .list-inline")[num-1];
    for(var elem of arr){
        menu.innerHTML+=`<li><a href="/${elem[0]}/">${elem[1]}</a></li>`;
    }
}
(() => {
    var arr = [
        ["/aiqingxianhua/", "爱情鲜花"],
        ["/youqingxianhua/", "友情鲜花"],
        ["/shengriliwu/", "生日鲜花"],
        ["/songzhangbeixianhua/", "问候长辈"],
        ["/zhufuqinghexianhua/", "祝贺鲜花"],
        ["/hunqingxianhua/", "婚庆鲜花"],
        ["/tanbingweiwenxianhua/", "探病慰问"],
        ["/daoqianxianhua/", "道歉鲜花"],
        ["/businessFlower/kaiyehualan/", "开业花篮"]
    ];
    get_menu(arr,1);
})();
(() => {
    var arr = [
        ["/yongshenghua/yongshenghua_box.html", "经典花盒"],
        ["/yongshenghua/yongshenghua_large.html", "巨型玫瑰"],
        ["/yongshenghua/yongshenghua_lavender.html", "薰衣草"]
    ];
    get_menu(arr,2);
})();
(() => {
    var nav=document.getElementsByClassName("nav")[0];
    var arr = [
        ["/", "首页"],
        ["/flower/", "鲜花"],
        ["/yongshenghua/", "永生花"],
        ["/huayu/", "花语大全"]
    ];
    for (var i = 0; i < arr.length; i++) {
        nav.innerHTML += `<li><a href="${arr[i][0]}">${arr[i][1]}</a></li>`;
    }
})();
(() => {
    var arr = [
        ["jiehun", "结婚送花"],
        ["story", "送花故事分享"],
        ["shengri", "生日送花"],
        ["jiqiao", "送花艺术"],
        ["zhishi", "鲜花常识"],
        ["shenghuo", "鲜花生活"],
        ["huayi", "花卉花艺"],
        ["huayu", "花语"],
        ["shangwu", "商务送花"],
        ["huadian", "花店经营"],
        ["daoqian", "道歉送花"],
        ["kaiye", "开业送花"],
        ["qiaoqian", "乔迁送花"],
        ["shengzi", "生子送花"],
        ["tanbing", "探病送花"],
        ["biye", "毕业送花"],
        ["jiehunjinian", "结婚纪念送花"],
        ["forgirl", "给女朋友送花"],
        ["forfriend", "给朋友送花"],
        ["forleader", "给领导送花"],
        ["forkids", "给孩子送花"],
        ["forelder", "给长辈送花"],
        ["forteacher", "给老师送花"],
        ["formate", "给同事送花"],
        ["forclient", "给客户送花"],
        ["forparent", "给父母送花"],
        ["forwife", "给妻子送花"],
        ["forrelative", "给亲属送花"],
        ["yidisonghua", "异地送花"],
        ["zhushousonghua", "祝寿送花"],
        ["qiuhunsonghua", "求婚送花"],
        ["biaobaisonghua", "求爱表白送花"],
        ["guanggunjie", "光棍节送花"],
        ["ganenjie", "感恩节送花"],
        ["shengdanjie", "圣诞节送花"],
        ["chunjie", "春节送花"],
        ["qingrenjie", "情人节送花"],
        ["sanbajie", "三八妇女节送花"],
        ["muqingjie", "母亲节送花"],
        ["fuqingjie", "父亲节送花"],
        ["qixijie", "七夕节送花"],
        ["jiaoshijie", "教师节送花"],
        ["zhongqiujie", "中秋节送花"],
        ["hushijie", "护士节送花"],
        ["duanwujie", "端午节送花"],
        ["chongyangjie", "重阳节送花"],
        ["yuanxiaojie", "元宵节送花"],
        ["whiteday", "白色情人节送花"]
    ];
    var sh=document.getElementById("sh");
    for (var i = 0; i < arr.length; i++) {
        sh.innerHTML += `<dd><img src="../img/baike/tree_switch.gif" /><a href="/huayu/${arr[i][0]}.html" target="_blank">${arr[i][1]}</a></dd>`;
    }
})();
(() => {
    var arr = [
        [10626, "向日葵的花语"],
        [11421, "绿萝的养殖方法和注意事项"],
        [10542, "19朵玫瑰代表什么？"],
        [10610, "粉玫瑰的花语是什么？"],
        [11044, "白玫瑰花语，送白玫瑰代表什么意思？"],
        [11251, "绣球花花语"],
        [10869, "蝴蝶兰花语"],
        [10839, "紫罗兰花语是什么？"],
        [11644, "满天星的花语是什么？"],
        [11031, "送女朋友鲜花，送花卡片写什么？"]
    ];
    var ul11=document.getElementsByClassName("ul11")[0];
    for (var i = 0; i < arr.length; i++) {
        ul11.innerHTML += `<li><a href="/huayu/${arr[i][0]}.html" target="_self">${arr[i][1]}</a></li>`;
    }
})();










