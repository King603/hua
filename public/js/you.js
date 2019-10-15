var get_product=(arr,className,title)=>{
    var product=document.getElementsByClassName(className)[0];
    console.log(product)
    var i = 0;
    var str = `
    <div class="com-width">
        <div class="product-title">${title}</div>
        <a class="product-item full" href="/product/${arr[i][0]}.html?huaPid=shejishi-f10${i + 1}" target="_blank">
            <div class="product-item-pic"><img src="../img/you/${arr[i][0]}.jpg" /></div>
            <div class="product-item-info">
                <div class="product-item-info__hd">
                    <div class="product-info-left">
                        <p class="product-info-name">${arr[i][1]}</p>
                        <p class="product-info-tag">${arr[i][2]}</p>
                    </div>
                    <div class="product-info-right">
                        <p>RMB</p>
                        <div class="product-info-price" data-id="${arr[i][0]}">${arr[i][3]}</div>
                    </div>
                </div>
                <div class="product-item-info__desc">${arr[i][4]}</div>
            </div>
        </a>
        <div class="product-list">
    `;
    for (i = 1; i < arr.length; i++) {
        str += `
        <a class="product-item" href="/product/${arr[i][0]}.html?huaPid=shejishi-f10${i + 1}" target="_blank">
            <div class="product-item-pic"><img src="../img/you/${arr[i][0]}.jpg" /></div>
            <div class="product-item-info">
                <div class="product-item-info__hd">
                    <div class="product-info-left">
                        <p class="product-info-name">${arr[i][1]}</p>
                        <p class="product-info-tag">${arr[i][2]}</p>
                    </div>
                    <div class="product-info-right">
                        <p>RMB</p>
                        <div class="product-info-price" data-id="${arr[i][0]}">${arr[i][3]}</div>
                    </div>
                </div>
                <div class="product-item-info__desc">${arr[i][4]}</div>
            </div>
        </a>
        `;
    }
    str += "</div></div>";
    product.innerHTML = str;
}
(() => {
    var arr = [
        ["9012296", "情迷尼斯", "糖果玫瑰<span>76cm长形礼盒</span>", 599, "花材上选用的是稀有玫瑰品种A级玫瑰，每一朵的花型都要求完美，糖果玫瑰如其名，有着甜美的色彩和香味。为玫瑰定制了专属的礼盒，完美的细节彰显品质。"],
        ["9012300", "赤道花园", "红拂玫瑰<span>76cm长形礼盒</span>", 699, "采撷最娇艳的玫瑰，经设计师妙手点拨，将芬芳馥郁的气息融入，轻轻打开，芬芳扑面袭来，沉醉在那花香醉人的奇幻世界...如心脏般大小的玫瑰肆意绽放，为高端鲜花爱好者们营造出了一个静谧与舒适的氛围，赏心悦目！"],
        ["9012298", "天使之吻", "红袖玫瑰<span>76cm长形礼盒</span>", 699, "红袖玫瑰有着罕见的双层色彩，渐变的颜色让人迷恋。为玫瑰定制了专属的礼盒，完美的细节彰显品质。"],
        ["9012299", "瓦尔登湖畔", "小白兔玫瑰<span>76cm长形礼盒</span>", 699, "小白兔玫瑰如它的名字一般，透着可爱的气质。为玫瑰定制了专属的礼盒，完美的细节彰显品质。"],
        ["9012297", "邂逅西雅图", "新娘玫瑰<span>76cm长形礼盒</span>", 699, "新娘玫瑰有着偏成熟韵味的色彩，有着厚实的花瓣、笔直的枝条，毫不逊色于其他赤道玫瑰。为玫瑰定制了专属的礼盒，完美的细节彰显品质。"]
    ];
    get_product(arr,"black","高端花盒系列");
})();
(() => {
    var arr = [
        ["9012292", "From The Heart", "甜美可爱少女范", 599, "荔枝玫瑰不仅有着独特的旋涡状花型，还拥有着特别香甜的气味。搭配自由苏展的雪柳和橙色多头玫瑰显得郁郁葱葱充满生命力。"],
        ["9012322", "Sunflower", "青春系列之阳光活力", 499, "黄色，是三原色之一，属于暖色系，是所有颜色中最明亮的颜色。给人轻快、辉煌、透明、醒目，充满希望和活力的色彩印象。"],
        ["9012321", "爱的陪伴", "母爱系列之梦幻呵护", 569, "幽然的紫色，搭配着深深浅浅的粉，一股恬淡清幽的气息扑面而来。绣球花花瓣紧密，花型大而饱满，姹紫嫣红，宛如一个浪花，当它怒放的时候，一簇簇花开，一片片铺展，为你编织了一个浪漫梦幻的仲夏夜之梦"],
        ["9012320", "繁星", "母爱系列之温柔优雅", 569, "蓝色的小飞燕翩翩飞舞，轻盈美好。花语是：清静、轻盈、正义、自由。蓝色小飞燕的点缀，让整个作品的色彩层次一下子丰富起来了，也是整个作品的点睛之笔，如繁星点点。"],
        ["9012323", "火热的爱", "爱情系列之热情奔放", 520, "饱满圆润的花头，紧促的拥抱在一起，红玫瑰与多头红玫瑰的组合，大大小小的花苞们，像极了轻盈的泡泡，花瓣就像裙裾一样层层叠叠，正是我向往中的那片花海，红玫表达的爱简单直接而炙热，除了爱你还是爱你。此花束适合送给热恋中人。"],
        ["9012319", "清风徐来", "品味系列之儒雅精英", 569, "马蹄莲最美的部位是其长长的枝干部分，如芭蕾舞者脖颈的线条一般，娇嫩的花瓣向内弯曲，纯色线条勾勒出极致的空间几何美感，跳舞兰活泼玲珑又充满喜气的形态扑面而来，怎能不让人满心欢喜。"],
        ["9012291", "如初之光", "果断霸气御姐范", 599, "花材我选择了极具张力的灯台、现代感十足的红掌、冬季独有的蕙兰、黑马蹄、洋牡丹，不同质感的红色邻近色系花材搭配黑金色的包装，透露着特立独行的个性。"],
        ["9012295", "枫丹白露", "恬淡清新文艺范", 599, "马蹄莲最美的部位是其长长的枝干部分，如芭蕾舞者脖颈的线条一般，雪柳是冬季独有的花材，星星点点的小白花如飘落的雪花。"],
        ["9012293", "Flora Love", "优雅知性女神范", 699, "马鸢尾叶有着非常美的线条感，搭配白色郁金香与紫罗兰，充满优雅浪漫味道。除此之外荔枝玫瑰的独特花型及香甜的气味也让人着迷。"],
        ["9012294", "魔法潘多拉", "温婉端庄淑女范", 699, "浅蓝色是一个跟天空海洋相联系的自然色，给人安静平和感觉，市场少见的紫掌增添了尊贵感，白色的纸上印着常春藤的花纹，花束整体形态端庄优雅。"]
    ];
    get_product(arr,"white","主题花束系列");
})();
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
        ["", "首页"],
        ["flower/", "鲜花"],
        ["yongshenghua/", "永生花"],
        ["cake/", "蛋糕"],
        ["gifts/", "礼品"],
        ["gifts/chocolates/", "巧克力"],
        ["huayu/", "花语大全"],
        ["you/", "设计师臻选鲜花"],
        ["theme/chongyangjie/", "重阳节鲜花礼品"]
    ];
    _html("nav .nav", arr);
})();








