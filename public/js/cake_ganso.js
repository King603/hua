var _html = (element, arr) => {
    var ul = document.querySelector(element);
    for (var elem of arr) {
        ul.innerHTML += `<li><a target="_blank" href="${elem[0]}">${elem[1]}</a></li>`;
    }
}
(() => {
    var arr = [
        ["aiqingxianhua", "爱情鲜花"],
        ["shengriliwu", "生日鲜花"],
        ["youqingxianhua", "友情鲜花"],
        ["songzhangbeixianhua", "问候长辈"],
        ["zhufuqinghexianhua", "祝贺鲜花"],
        ["hunqingxianhua", "婚庆鲜花"],
        ["tanbingweiwenxianhua", "探病慰问"],
        ["daoqianxianhua", "道歉鲜花"],
        ["businessFlower/kaiyehualan", "开业花篮"]
    ];
    _html(".dropdown-menu>ul.list-inline:nth-child(2)", arr);
})();
(() => {
    var arr = [
        ["box", "经典花盒"],
        ["large", "巨型玫瑰"],
        ["lavender", "薰衣草"],
        ["vase", "永生瓶花"],
        ["characteristic", "特色永生花"]
    ];
    _html(".dropdown-menu>ul.list-inline:nth-child(4)", arr);
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
    _html(".dropdown-menu>ul.list-inline:nth-child(6)", arr);
})();
(() => {
    var arr = [
        ["greenplant", "绿色植物"],
        ["potflower", "盆栽花卉"]
    ];
    _html(".dropdown-menu>ul.list-inline:nth-child(8)", arr);
})();
(() => {
    var arr = [
        ["/", "首页"],
        ["/flower/", "鲜花"],
        ["/yongshenghua/", "永生花"],
        ["/cake/", "蛋糕"],
        ["/gifts/", "礼品"],
        ["/gifts/chocolates/", "巧克力"],
        ["/huayu/", "花语大全"],
        ["/you/", "设计师臻选鲜花"],
        ["/theme/birthday/", "生日鲜花礼品"]
    ];
    _html("nav .nav", arr);
})();
(() => {
    var arr = [
        [5302071, "清风有信(8寸)", "258", "元祖慕斯蛋糕", "元祖授权销售"],
        [5302066, "情有独钟(8寸)", "258", "元祖鲜奶蛋糕", "元祖授权销售"],
        [5302064, "小圆香径鲜奶蛋糕（黄金燕麦）(8寸)", "258", "元祖鲜奶蛋糕", "元祖授权销售"],
        [5302063, "爱的种子(8寸)", "258", "元祖鲜奶蛋糕", "元祖授权销售"],
        [5302062, "缤纷贝蒂(8寸)", "258", "元祖鲜奶蛋糕", "元祖授权销售"],
        [5302019, "Nice兔meet you！(8寸)", "258", "元祖鲜奶蛋糕，布丁加水果夹层", "元祖授权销售"],
        [5302017, "甜蜜如心(8寸)", "258", "元祖鲜奶蛋糕，布丁加水果夹层", "元祖授权销售"],
        [5302016, "田园晓美(8寸)", "258", "鲜奶蛋糕，布丁水果夹层", "元祖授权销售"],
        [5302015, "水果之恋(8寸)", "258", "元祖鲜奶蛋糕，布丁水果夹层", "元祖授权销售"],
        [5302014, "我的歌声里(8寸)", "258", "元祖鲜奶蛋糕，布丁水果夹层", "元祖授权销售"],
        [5302010, "果嘉年华(8寸)", "258", "元祖鲜奶蛋糕，布丁加水果夹层", "元祖授权销售"],
        [5302008, "蝶恋花景(8寸)", "258", "元祖鲜奶蛋糕，布丁加水果夹层", "元祖授权销售"],
        [5302003, "春晖洒暖(8寸)", "258", "元祖鲜奶蛋糕", "元祖授权销售"],
        [5309101, "西点卷(肉松卷)", "10", "纯手工制，香气宜人", ""],
        [5309100, "西点卷(香槟葡萄卷)", "10", "纯手工制，香气宜人", ""],
        [5309099, "西点卷(草莓卷)", "10", "纯手工制，香气宜人", ""],
        [5309098, "西点卷(抹茶红豆卷)", "10", "纯手工制，香气宜人", ""],
        [5309097, "西点卷(咖啡卷)", "10", "纯手工制，香气宜人", ""],
        [5302099, "LOVE ME(8寸)", "10", "鲜奶蛋糕", ""],
        [5302097, "青春时光(8寸)", "10", "鲜奶蛋糕", ""],
        [5301096, "西点卷(虎皮卷)", "10", "纯手工制，香气宜人", ""],
        [5301095, "三角慕思", "22", "慕思小蛋糕", ""],
        [5302078, "蟠桃献颂(8寸)", "258", "元祖鲜奶蛋糕", ""],
        [5309076, "百寿延绵(8号+12号+14号)", "1150", "元祖祝寿蛋糕,需600元蛋糕架押金，并须提前3个工作日预订", "元祖授权销售"]
    ];
    var grid_wrapper=document.getElementsByClassName("grid-wrapper")[0];
    for (var elem of arr) {
        grid_wrapper.innerHTML += `
        <div class="grid-item">
            <div class="grid-panel">
                <div class="img-box">
                    <a href="/product/${elem[0]}.html" target="_blank" data-link="${elem[0]}"><img width="220" height="240" src="../../newpic/${elem[0]}.jpg_220x240.jpg" alt="${elem[1]}"></a>
                </div>
                <div class="info-cont">
                    <div class="price">
                        <span class="price-sign">&yen;</span>
                        <span class="price-num" data-pp="${elem[0]}">${elem[2]}</span>
                    </div>
                    <div class="title">
                        <a href="/product/${elem[0]}.html" target="_blank" data-link="${elem[0]}">
                            <span class="product-title">元祖蛋糕/${elem[1]}-${elem[3]}</span>
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
var get_cake_list=(arr,num)=>{
    var list=document.querySelectorAll(".navigation .item-list")[num-1];
    for (var elem of arr) {
        list.innerHTML += `<li><a href="/cake/${elem[0]}">${elem[1]}</a></li>`;
    }
}
(() => {
    var arr = [
        ["city/beijingdangao.html", "北京"],
        ["city/shanghaidangao.html", "上海"],
        ["city/shenzhendangao.html", "深圳"],
        ["city/guangzhoudangao.html", "广州"],
        ["city/tianjindangao.html", "天津"],
        ["city/chongqingdangao.html", "重庆"],
        ["city/chengdudangao.html", "成都"],
        ["city/shenyangdangao.html", "沈阳"],
        ["city/wuhandangao.html", "武汉"],
        ["city/xiandangao.html", "西安"],
        ["city/hangzhoudangao.html", "杭州"],
        ["city/nanjingdangao.html", "南京"],
        ["city/suzhoudangao.html", "苏州"],
        ["", "更多&gt;&gt;"]
    ];
    get_cake_list(arr,1);
})();
(() => {
    var arr = [
        ["ganso/", "元祖蛋糕"],
        ["21cake/", "廿一客蛋糕"],
        ["lecake/", "诺心蛋糕"],
        ["incake/", "INCAKE"],
        ["beisike/", "贝思客蛋糕"],
        ["boncake/", "BONCAKE"],
        ["mcake/", "Mcake蛋糕"],
        ["waffleboy/", "窝夫小子"],
        ["micamika/", "米卡米卡"],
        ["xfxb/", "幸福西饼"],
        ["vcake/", "Vcake蛋糕"],
        ["heartcheesecake/", "心之和蛋糕"],
        ["cakeboss/", "CAKEBOSS"],
        ["allcitycake/", "全国蛋糕"]
    ];
    get_cake_list(arr,2);
})();
(() => {
    var arr = [
        ["xiannaidangao/", "鲜奶蛋糕"],
        ["shuiguodangao/", "水果蛋糕"],
        ["qiaokelidangao/", "巧克力蛋糕"],
        ["musidangao/", "慕斯蛋糕"],
        ["wutangdangao", "无糖蛋糕"],
        ["shengxiaodangao/", "生肖蛋糕"],
        ["qinglvdangao/", "情人蛋糕"],
        ["hunqingdangao/", "婚庆蛋糕"],
        ["zhushoudangao/", "祝寿蛋糕"],
        ["ertongdangao/", "儿童蛋糕"],
        ["oushidangao/", "欧式蛋糕"],
        ["jieqingdangao/", "节庆蛋糕"]
    ];
    get_cake_list(arr,3);
})();
(() => {
    var panel_list1=document.getElementsByClassName("panel-body")[0];
    var arr = [
        [5302015, "水果之恋(8寸)", "元祖鲜奶蛋糕，布丁水果夹层", "258"],
        [5302066, "情有独钟(8寸)", "元祖鲜奶蛋糕", "258"],
        [5302019, "Nice兔meet you！(8寸)", "元祖鲜奶蛋糕，布丁加水果夹层", "258"],
        [5309099, "西点卷(草莓卷)", "纯手工制，香气宜人", "10"],
        [5301096, "西点卷(虎皮卷)", "纯手工制，香气宜人", "10"]
    ];
    for (var elem of arr) {
        panel_list1.innerHTML += `
        <div class="side-item">
            <div class="img-box">
                <a href="/product/${elem[0]}.html" target="_blank" data-link="${elem[0]}">
                    <img src="../../newpic/${elem[0]}.jpg_220x240.jpg" width="180" height="196" alt="${elem[1]}">
                </a>
            </div>
            <div class="info-cont">
                <div class="title">
                    <a href="/product/${elem[0]}.html" class="product-title" data-link="${elem[0]}">
                        蛋糕/${elem[1]}-${elem[2]}
                    </a>
                </div>
                <div class="price" style="text-align:left;">
                    <span class="price-sign">&yen;</span>
                    <span class="price-num" data-pp="${elem[0]}">${elem[3]}</span>
                </div>
            </div>
        </div>
        `;
    }
})();
(() => {
    var panel_list2=document.getElementsByClassName("panel-body")[1];
    var arr = [
        [9012078, "hpl3581*", "謝謝你們，準時到達"],
        [5501001, "jessj*", "送货及时，不错"],
        [5014011, "159****3971", "物流速度很快，产品质量不错，满意！"],
        [5019006, "131****7791", "快准时，态度好"],
        [5018002, "152952*", "不错！！！！"],
        [5301097, "jaceyzh*", "花不是很新鲜"]
    ];
    for (var elem of arr) {
        panel_list2.innerHTML += `
        <div class="side-com">
            <div class="img-box">
                <a href="/product/${elem[0]}.html" target="_blank">
                    <img src="../../newpic/${elem[0]}.jpg_80x87.jpg">
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
    var panel_list3=document.getElementsByClassName("panel-body")[2];
    var arr = [
        [
            [4016, "元祖蛋糕介绍"],
            [4002, "蛋糕的起源"],
            [4003, "九种蛋糕的做法"],
            [4004, "美味蛋糕新做法"],
            [4009, "烘焙食品"]
        ],
        [
            [4005, "选择婚礼蛋糕有学问"],
            [4006, "生活常识：巧切蛋糕"],
            [4007, "微波炉蛋糕的做法"],
            [4008, "风俗之结婚蛋糕"],
            [4010, "诱人的圣诞节蛋糕"]
        ],
        [
            [4011, "纽约芝士蛋糕的配方与制作"],
            [4012, "蓝莓慕斯蛋糕的制作方法"],
            [4013, "巧克力慕斯蛋糕的制作方法"],
            [4014, "蛋糕的价值"],
            [4015, "DIY蛋糕方法"]
        ]
    ];
    var str = "";
    for (var elems of arr) {
        str += "<ul>";
        for (var elem of elems) {
            str += `<li><a href="/huayu/${elem[0]}.htm" target="_blank">${elem[1]}</a></li>`;
        }
        str += "</ul>";
    }
    panel_list3.innerHTML = str;
})();






















