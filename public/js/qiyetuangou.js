(() => {
    var product_list=document.querySelector(".product-list");
    var arr = [
        ["9012331", "芳华·粉百合1枝，卡罗拉玫瑰2枝", "时间，会沉淀最真的情感；风雨，会考验最暖的陪伴！", 89,],
        ["9012330", "幸运100%--红色太阳花2枝，粉紫色康乃馨2枝，粉紫色多头泡泡玫瑰1枝", "火红的扶郎多么绚烂、多么生机勃勃，那是带给你的小幸运!", 89,],
        ["9012329", "浅浅的温柔--粉佳人玫瑰2枝，粉色康乃馨2枝", "阳光下的晴朗世界，那温柔的春风已苏醒！", 69,],
        ["9012328", "和煦的阳光--向日葵1枝，尤加利果2小枝", "温暖和煦的阳光，欢快的心情，还有最美丽的你。", 79,]
    ];
    for (var i = 0; i < arr.length; i++) {
        product_list.innerHTML += `
        <div class="product-item ">
            <a href="/product/${arr[i][0]}.html">
                <div class="product-item-pic">
                    <img src="../newpic/${arr[i][0]}.jpg" alt="">
                </div>
                <div class="product-item-info">
                    <div class="product-item-info-title">${arr[i][1]}</div>
                    <div class="product-item-info-desc">${arr[i][2]}</div>
                    <div class="product-item-info-ft">
                        <span class="product-item-info-price" data-id="${arr[i][0]}">${arr[i][3]}</span>
                        <span class="product-item-info-limit">五束起订</span>
                        <span class="addshopcar"><i class="iconfont iconfont-buy"></i></span>
                    </div>
                </div>
            </a>
        </div>
        `;
    }
})();
(() => {
    var advantage_list=document.querySelector(".advantage_list");
    var arr = [
        ["覆盖地域广", "门店覆盖全国2000+城市提供异地服务"],
        ["3小时送货上门", "订单保鲜产品提供3小时送货上门服务"],
        ["一站式采购", "花礼网提供多品类一站式采购方案"],
        ["强大的售后保障", "强大的服务后台为您的权益提供保障"]
    ];
    for (var i = 0; i < arr.length; i++) {
        advantage_list.innerHTML += `
        <div class="advantage_item">
            <div class="advantage_item_pic">
                <img src="../img/qiyetuangou/advantage_${i + 1}.png" alt="">
            </div>
            <div class="advantage_item_content">
                <div class="advantage_item_content_header">${arr[i][0]}</div>
                <div class="advantage_item_content_body">${arr[i][1]}</div>
            </div>
        </div>
        `;
    }
})();