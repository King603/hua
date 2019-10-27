var _html = (element, arr) => {
    var ul = document.querySelector(element);
    for (var elem of arr) {
        ul.innerHTML += `<li><a target="_blank" href="/${elem[0]}">${elem[1]}</a></li>`;
    }
}
(() => {
    var div = document.querySelector("nav.common div.dropdown-menu");
    var arr = [
        ["flower", "鲜花"],
        ["yongshenghua", "永生花"],
        ["cake", "蛋糕"],
        ["gifts", "礼品"],
        ["Plant", "绿植"]
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
        ["aiqingxianhua/", "爱情鲜花"],
        ["theme/birthday/", "生日鲜花"],
        ["youqingxianhua/", "友情鲜花"],
        ["songzhangbeixianhua/", "问候长辈"],
        ["zhufuqinghexianhua/", "祝贺鲜花"],
        ["hunqingxianhua/", "婚庆鲜花"],
        ["tanbingweiwenxianhua/", "探病慰问"],
        ["daoqianxianhua/", "道歉鲜花"],
        ["businessFlower/kaiyehualan/", "开业花篮"]
    ];
    _html(".dropdown-menu>ul.list-inline:nth-child(2)", arr);
})();
(() => {
    var arr = [
        ["yongshenghua/yongshenghua_box.html", "经典花盒"],
        ["yongshenghua/yongshenghua_large.html", "巨型玫瑰"],
        ["yongshenghua/yongshenghua_lavender.html", "薰衣草"],
        ["yongshenghua/yongshenghua_vase.html", "永生瓶花"],
        ["yongshenghua/yongshenghua_characteristic.html", "特色永生花"]
    ];
    _html(".dropdown-menu>ul.list-inline:nth-child(4)", arr);
})();
(() => {
    var arr = [
        ["cake/ganso/", "元祖"],
        ["cake/21cake/", "廿一客蛋糕"],
        ["cake/lecake/", "诺心"],
        ["cake/incake/", "INCAKE"],
        ["cake/beisike/", "贝思客"],
        ["cake/boncake/", "BONCAKE"],
        ["cake/mcake/", "Mcake"],
        ["cake/micamika/", "米卡米卡"],
        ["cake/waffleboy/", "窝夫小子"],
        ["cake/xfxb/", "幸福西饼"],
        ["cake/heartcheesecake/", "心之和蛋糕"],
        ["cake/vcake/", "Vcake"],
        ["cake/yipinxuan/", "一品轩"],
        ["cake/mzmk/", "美滋每客"],
        ["cake/allcitycake/", "全国品牌"]
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
        ["/gifts/kingking/", "香薰系列"],
        ["/gifts/bestlife/", "音乐睡枕"],
        ["/gifts/vase/", "花瓶/相框"],
        ["/katonghuashu/", "卡通花束"],
        ["/toys/", "品牌公仔"],
        ["/gifts/shoushi/", "首饰"],
        ["/gifts/jinkouqiaokeli/", "进口巧克力"],
        ["/gifts/chocolate/", "手工巧克力"],
        ["/gifts/qiaokouqiaokeli/", "巧蔻巧克力"],
        ["/gifts/lindtchocolate/", "瑞士莲巧克力"],
        ["/gifts/giftstalk/", "Giftstalk精选"],
        ["/gifts/dengshi/", "创意礼品"],
        ["/qiyetuangou/gift_card.html", "礼品卡"],
        ["/gifts/duorouzhiwupenzai/", "多肉植物盆栽"]
    ];
    _html(".dropdown-menu>ul.list-inline:nth-child(8)", arr);
})();
(() => {
    var arr = [
        ["Plant/greenplant/", "绿色植物"],
        ["Plant/potflower/", "盆栽花卉"]
    ];
    _html(".dropdown-menu>ul.list-inline:nth-child(10)", arr);
})();
(() => {
    var arr = [
        ["", "首页"],
        ["flower/", "鲜花"],
        ["yongshenghua/", "永生花"],
        ["cake/", "蛋糕"],
        ["gifts/", "礼品"],
        ["gifts/chocolates/", "巧克力"],
        ["huayu/", "花语大全"],
        ["you/", "设计师臻选鲜花"],
        ["theme/birthday/", "浪漫生日礼"]
    ];
    _html(".nav", arr);
})();
(() => {
    var Product_1 = document.querySelectorAll("#mainSection .product")[0];
    var product_item = Product_1.querySelectorAll(".product-item");
    var arr = [
        [9010966, "pc-pro1", "一往情深", "红玫瑰19枝", "代表陪伴与一生的守候<br>定制环保花盒，高端上档次<br>在打开的瞬间惊喜倍增", 245, 315],
        [9092112, "pc-pro3", "用心爱你", "红/粉玫瑰共99枝", "代表天长地久，浪漫，感动<br>赠巧克力！双重惊喜，为爱加码<br>张杰演唱会定制款", 739, 869],
        [9010011, "pc-pro2", "一心一意", "红玫瑰11枝", "代表爱你一生一世·永不分离<br>红玫瑰代表热烈,浓浓的爱<br>勿忘我代表永不变的心", 139, 178]
    ];
    var i = 0;
    for (var elem of arr) {
        product_item[i].innerHTML += `
        <a href="/product/${elem[0]}.html?huaPid=birthday-f10${i++}" target="_blank">
            <img class="item-bg" src="../../birthday/${elem[1]}.png" />
            <div class="product-item-pic">
                <img src="../../birthday/product_${elem[0]}.jpg" alt="${elem[2]}" />
            </div>
            <div class="product-item-info">
                <div class="product-item-info-title">
                    <span class="text-bold">${elem[2]}</span> · <span class="text-gray">${elem[3]}</span>
                </div>
                <div class="product-item-info-desc">${elem[4]}</div>
                <div class="product-item-info-price" product-id="${elem[0]}">
                    <span class="text-bold">￥${elem[5]}</span>&nbsp;<s class="text-gray">￥${elem[6]}</s>
                </div>
                <span class="product-item-info-btn">立即购买</span>
            </div>
        </a>
        `;
    }
})();
(() => {
    var Product_2 = document.querySelectorAll("#mainSection .product")[1];
    var product_item = Product_2.querySelectorAll(".product-item");
    var arr = [
        [9092114, "真爱+ 生日蛋糕B款", "红玫瑰9枝，石竹梅4枝，栀子叶0.5扎", 248, 278],
        [9092116, "恋恋情深＋心相印蛋糕", "11枝香槟玫瑰，白百合2枝", 315, 345],
        [9092111, "11枝红玫瑰+德芙心语巧克力98克特价组合套装", "红玫瑰11枝，满天星围绕", 199, 259],
        [9092122, "爱在心头+德芙心语巧克力98克特价组合套装", "玫瑰50枝：戴安娜粉玫瑰19枝，红玫瑰31枝", 410, 437]
    ];
    var i = 0;
    for (var elem of arr) {
        product_item[i].innerHTML += `
        <a href="/product/${elem[0]}.html?huaPid=birthday-f20${i++}" target="_blank">
            <div class="product-item-pic">
                <img src="../../newpic/${elem[0]}.jpg" />
            </div>
            <div class="product-item-info">
                <div class="product-item-info-title">
                    <span class="text-bold">${elem[1]}</span> · <span class="text-gray">${elem[2]}</span>
                </div>
                <div class="product-item-info-price">
                    <div class="product-item-info-price-left" product-id="${elem[0]}">
                        <span class="text-bold">￥${elem[3]}</span>&nbsp;<s class="text-gray">￥${elem[4]}</s>
                    </div>
                    <div class="product-item-info-price-right">
                        <span class="product-item-info-btn">购买</span>
                    </div>
                </div>
            </div>
        </a>
        `;
    }
})();
(() => {
    var Product_3 = document.querySelectorAll("#mainSection .product")[2];
    var product_item = Product_3.querySelectorAll(".product-item");
    var arr = [
        [9012360, "送恋人", "「生日定制」爱意满怀", "粉雪山玫瑰9枝、粉色桔梗4枝", 176, 226],
        [9012009, "送恋人", "忘情巴黎", "33枝红玫瑰", 298, 383],
        [9010947, "送恋人", "真爱如初", "雪山玫瑰11枝、深紫色勿忘我0.3扎", 206, 265],
        [9012056, "送恋人", "香妃", "香槟玫瑰9枝", 146, 188],
        [9012011, "送恋人", "阳光海岸", "19枝香槟玫瑰", 228, 292],
        [9012177, "送恋人", "不变的承诺", "99枝红玫瑰", 520, 639],
        [9012332, "送长辈", "留住好时光", "粉绣球1枝，粉雪山玫瑰6枝", 239, 306],
        [9012092, "送长辈", "母爱", "紫红色康乃馨9枝，粉色多头康乃馨10枝", 178, 228],
        [9012201, "送长辈", "馨情无限", "戴安娜玫瑰11枝，红色康乃馨11支，红色石竹梅4枝", 246, 315],
        [9012315, "送长辈", "妈妈我爱你", "粉色康乃馨、粉绣球、香槟玫瑰、洋牡丹、黄色香雪兰", 429, 562],
        [9012361, "送朋友", "「生日定制」暖心陪伴", "粉雪山9枝，浅紫色紫罗兰6枝", 176, 226],
        [9012338, "送朋友", "灿烂的笑容", "向日葵2枝，金枝玉叶玫瑰13枝", 259, 369],
        [9012154, "送朋友", "甜美公主", "白玫瑰22枝，粉佳人粉玫瑰14枝，粉色桔梗5枝", 378, 485],
        [9012339, "送朋友", "抱抱我/自然风抱桶花", "向日葵1枝，红玫瑰2枝，红色多头玫瑰2枝", 158, 198],
    ];
    var i = 0
    for (var elem of arr) {
        product_item[i].innerHTML += `
        <a href="/product/${elem[0]}.html?huaPid=birthday-f30${i++}" target="_blank">
            <div class="product-item-pic">
                <span class="product-item-pic-tag">${elem[1]}</span>
                <img src="../../newpic/${elem[0]}.jpg" />
            </div>
            <div class="product-item-info">
                <div class="product-item-info-title">
                    <span class="text-bold">${elem[2]}</span> · <span class="text-gray">${elem[3]}</span>
                </div>
                <div class="product-item-info-price">
                    <div class="product-item-info-price-left" product-id="${elem[0]}">
                        <span class="text-bold">￥${elem[4]}</span>&nbsp;<s class="text-gray">￥${elem[5]}</s>
                    </div>
                    <div class="product-item-info-price-right">
                        <span class="product-item-info-btn">购买</span>
                    </div>
                </div>
            </div>
        </a>
        `;
    }
})();
(() => {
    var Product_4 = document.querySelectorAll("#mainSection .product")[3];
    var product_item = Product_4.querySelectorAll(".product-item");
    var arr = [
        [5302015, "水果之恋(8寸)", "元祖鲜奶蛋糕，布丁水果夹层", 218, 218],
        [5010041, "陪伴左右", "2磅(8寸)水果蛋糕", 168, 198],
        [5602022, "全心全意(约2磅)", "鲜果蛋糕", 218, 216],
        [5302019, "Nice兔meet you！(8寸)", "元祖鲜奶蛋糕，布丁加水果夹层", 218, 218],
        [5013047, "热带风情", "3磅(10寸)巧克力+水果蛋糕", 228, 258],
        [5302066, "情有独钟(8寸)", "元祖鲜奶蛋糕", 218, 218],
        [5602016, "四重奏蛋糕(约2磅)", "方形/巧克力/榴莲/慕斯蛋糕", 228, 296],
        [5302078, "蟠桃献颂(8寸)", "元祖鲜奶蛋糕", 218, 218],
        [5301017, "甜蜜如心(6寸)", "元祖鲜奶蛋糕，布丁水果夹层", 158, 158],
        [5301014, "我的歌声里(6寸)", "元祖鲜奶蛋糕，布丁+水果夹层", 158, 158],
        [5301003, "春晖洒暖(6寸)", "元祖鲜奶蛋糕", 158, 158],
        [5301071, "清风有信(6寸)", "元祖慕斯蛋糕", 188, 188],
        [5303016, "田园晓美(10寸)", "元祖鲜奶蛋糕，布丁水果夹层", 288, 288],
        [5010063, "生日蛋糕B", "10寸(3磅)圆形鲜奶水果蛋糕", 197, 208]
    ];
    var i = 0
    for (var elem of arr) {
        product_item[i].innerHTML += `
        <a href="/product/${elem[0]}.html?huaPid=birthday-f40${i++}" target="_blank">
            <div class="product-item-pic">
                <img src="../../newpic/${elem[0]}.jpg" />
            </div>
            <div class="product-item-info">
                <div class="product-item-info-title">
                    <span class="text-bold">${elem[1]}</span> · <span class="text-gray">${elem[2]}</span>
                </div>
                <div class="product-item-info-price">
                    <div class="product-item-info-price-left" product-id="${elem[0]}">
                        <span class="text-bold">￥${elem[3]}</span>&nbsp;<s class="text-gray">￥${elem[4]}</s>
                    </div>
                    <div class="product-item-info-price-right">
                        <span class="product-item-info-btn">购买</span>
                    </div>
                </div>
            </div>
        </a>
        `;
    }
})();
(() => {
    var Product_5 = document.querySelectorAll("#mainSection .product")[4];
    var product_item = Product_5.querySelectorAll(".product-item");
    var arr = [
        [1061006, "999纯金箔玫瑰+陶瓷花瓶", "千足金箔玫瑰 最佳送女友送爱人礼物 结婚纪念礼物", 138, 256],
        [1060037, "一生所爱", "进口保鲜花，三色玫瑰系列，5年不凋谢", 218, 348],
        [1073186, "我如此爱你-口红款520", "专柜正品Dior#520口红＋进口永生玫瑰礼盒", 588, 788],
        [1060022, "斜口瓶花", "真空保鲜花，彩玫系列，5年不凋谢", 489, 688],
        [1073033, "一生一世", "厄瓜多尔进口永生红玫1朵，双色永生绣球", 198, 338],
        [1073094, "To温暖你心", "苔藓小兔+粉色永生玫瑰＋粉边紫心奥斯丁", 288, 448],
        [1077020, "猫王小王子蓝牙便携式音箱", "便携式蓝牙音箱（胡桃木）", 349, 449],
        [1073202, "爱如繁星", "白色满天星1把、进口粉色满天星适量、进口紫色满天星适量", 139, 209],
        [1065004, "宝石旋转木马/蓝", "音乐盒畅销款 送女友表白最佳礼物", 158, 262],
        [1077011, "woody书灯木质led折叠usb书本灯", "创意书灯", 198, 298],
        [1073135, "光阴的故事", "进口橘色永生玫瑰2枝，绿色奥斯丁玫瑰1枝", 298, 398],
        [1060045, "天使的爱", "荷兰工艺保鲜玫瑰，白/彩玫瑰共3朵，泰国进口", 218, 318],
        [1070064, "天使之恋化妆镜永生花礼盒", "化妆镜+永生玫瑰，送恋人妻子专属奢华系列礼盒", 368, 528],
        [1076067, "施华洛世奇悦动的心项链", "心跳锁骨链 专柜正品", 1269, 1290]
    ];
    var i = 0;
    for (var elem of arr) {
        product_item[i].innerHTML += `
        <a href="/product/${elem[0]}.html?huaPid=birthday-f50${i++}" target="_blank">
            <div class="product-item-pic">
                <img src="../../newpic/${elem[0]}.jpg" />
            </div>
            <div class="product-item-info">
                <div class="product-item-info-title">
                    <span class="text-bold">${elem[1]}</span> · <span class="text-gray">${elem[2]}</span>
                </div>
                <div class="product-item-info-price">
                    <div class="product-item-info-price-left" product-id="${elem[0]}">
                        <span class="text-bold">￥${elem[3]}</span>&nbsp;<s class="text-gray">￥${elem[4]}</s>
                    </div>
                    <div class="product-item-info-price-right">
                        <span class="product-item-info-btn">购买</span>
                    </div>
                </div>
            </div>
        </a>
        `;
    }
})();
(() => {
    var Product_6 = document.querySelectorAll("#mainSection .product")[5];
    var product_item = Product_6.querySelectorAll(".product-item");
    var arr = [
        [3010003, "德芙心语98克铁盒或109克礼盒", "德芙品牌巧克力", 68, 78],
        [3010005, "费列罗榛果威化糖果巧克力礼盒8粒心形装", "榛果巧克力", 68, 88],
        [1207009, "巧克巧蔻定制9粒装手工夹心巧克力", "手工夹心巧克力", 148, 168],
        [3010004, "费列罗巧克力300克", "意大利品牌巧克力", 138, 168],
        [3010006, "费列罗榛果威化糖果巧克力礼盒16粒", "榛果巧克力", 98, 118],
        [1204042, "Felchlin妃亭18粒装巧克力礼盒", "德国进口松露夹心巧克力", 348, 348]
    ];
    var i = 0;
    for (var elem of arr) {
        product_item[i].innerHTML += `
        <a href="/product/${elem[0]}.html?huaPid=birthday-f50${i++}" target="_blank">
            <div class="product-item-pic">
                <img src="../../newpic/${elem[0]}.jpg" />
            </div>
            <div class="product-item-info">
                <div class="product-item-info-title">
                    <span class="text-bold">${elem[1]}</span> · <span class="text-gray">${elem[2]}</span>
                </div>
                <div class="product-item-info-price">
                    <div class="product-item-info-price-left" product-id="${elem[0]}">
                        <span class="text-bold">￥${elem[3]}</span>&nbsp;<s class="text-gray">￥${elem[4]}</s>
                    </div>
                    <div class="product-item-info-price-right">
                        <span class="product-item-info-btn">购买</span>
                    </div>
                </div>
            </div>
        </a>
        `;
    }
})();


