(() => {
    var feature_list=document.getElementsByClassName("feature_list")[0];
    var arr = [
        ["送礼更有面", "礼品卡设计时尚美观且实用，不必担心送出去的礼物不是对方所需"],
        ["支付更健康 ", "随买随支付，免去了您转账的麻烦 "],
        ["定制礼品卡面值", "花礼网提供多品类一站式采购方案 "],
        ["多样礼品卡", "鲜花礼品卡分为实物卡、虚拟卡二种"]
    ];
    for (var i = 0; i < arr.length; i++) {
        feature_list.innerHTML += `
        <div class="feature_item">
            <div class="feature_item_pic">
                <img src="../img/qiyetuangou/card_feature${i + 1}.png" alt="">
            </div>
            <div class="feature_item_content">
                <div class="feature_item_content_header">${arr[i][0]}</div>
                <div class="feature_item_content_body">${arr[i][1]}</div>
            </div>
        </div>
        `;
    }
})();
var get_list = (arr, num, str="") => {
    var list = document.getElementsByClassName("card_list");
    console.log(list);
    for (var elem of arr) {
        list[num - 1].innerHTML += `
        <div class="card_item">
            <div class="card_item_pic">
                <img src="../img/qiyetuangou/${str}card_background.png" alt="">
                <span class="card_value">￥${elem[0]}</span>
            </div>
            <div class="card_item_info">
                <p class="card_item_info_desc">花礼网礼品卡${elem[0]}面值(实物卡)·快递包邮</p>
                <div class="card_item_info_ft">
                    <span class="card_item_info_price">￥${elem[0]}</span>
                    <div class="card_item_info_btn" onClick="DoBuy(${elem[1]})">购买</div>
                    <div class="card_item_info_num">
                        <a href="javascript:SetNum('Q_${elem[1]}','minus');" class="operation"><i class="iconfont iconfont-jian"></i></a>
                        <input class="num_ipt" name="Q_${elem[1]}" id="Q_${elem[1]}" value="1" type="text" onkeyup="(this.v=function(){this.value=this.value.replace(/[^0-9-]+/,'');}).call(this)" onblur="this.v();" />
                        <a href="javascript:SetNum('Q_${elem[1]}','add');" class="operation"><i class="iconfont iconfont-jia"></i></a>
                    </div>
                </div>
            </div>
        </div>
        `;
    }
}
(() => {
    var arr = [
        [100, 1074001],
        [200, 1074002],
        [300, 1074003],
        [500, 1074004],
        [800, 1074005],
        [1000, 1074006]
    ];
    get_list(arr, 1);
})();
(() => {
    var arr = [
        [100, 1074011],
        [200, 1074012],
        [300, 1074013],
        [500, 1074014],
        [800, 1074015],
        [1000, 1074016]
    ];
    get_list(arr, 2, "e_");
})();
(() => {

})();