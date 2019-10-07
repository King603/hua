(() => {
    var arr = [
        ["www.chinaname.cn/", "中华取名网"],
        ["sz.fang.com/", "深圳房产网"],
        ["www.juanpi.com", "卷皮网"],
        ["www.wbiao.cn", "腕表"],
        ["www.bbhun.com", "宝贝婚团网"],
        ["www.yuanlin365.com/", "苗木"],
        ["www.zocai.com/", "佐卡伊珠宝网"],
        ["www.blove.com/", "钻石婚戒定制"],
        ["www.spider.com.cn/", "杂志"],
        ["www.iyijiao.com/", "中国青少年艺术教育网"],
        ["www.aiuw.com/", "装修网"],
        ["www.dog126.com/", "淘狗网"],
        ["www.liwuyou.com/", "礼无忧网"],
        ["www.goupuzi.com/", "宠物狗"],
        ["www.jiyouwang.com/", "机友网"],
        ["www.cocodiy.com/", "礼物网"],
        ["zx.meilele.com/", "装修"],
        ["www.ipo3.com/", "新三板"],
        ["www.huoming.com/", "商标注册"],
        ["www.loho88.com", "眼镜店"]
    ];
    var str = "";
    for (var i = 0; i < arr.length; i++) {
        str += `<a href="http://${arr[i][0]}/" target="_blank">${arr[i][1]}</a>`
    }
    yl.innerHTML = str;
})();
(() => {
    var arr = [
        ["default.htm", "服务声明"],
        ["faq.htm", "常见问题"],
        ["afterservice.htm", "售后服务"],
        ["send_shuoming.htm", "配送说明"],
        ["sendRange.htm", "配送范围"],
        ["ordercx/", "订单查询"],
        ["order_cancel.htm", "取消订单"],
        ["re_payment.htm", "补交货款"],
        ["private.htm", "隐私条款"],
        ["safe.htm", "安全条款"]
    ];
    var str = "";
    for (var i = 0; i < arr.length; i++) {
        str += `<li><a href="/help/${arr[i][0]}" target="_blank" rel="nofollow">${arr[i][1]}</a></li>`
    }
    fh_1.innerHTML = str;
})();
(() => {
    var arr = [
        ["shop_step.htm", "中国鲜花礼品网购物流程"],
        ["demo.htm", "中国鲜花礼品网订购演示"],
        ["sendRange.htm", "鲜花网能配送哪些城市？"],
        ["afterservice.htm", "鲜花售后服务是怎么样的？"],
        ["Orde_in_advance.htm", "我应该提前多久预订鲜花？"]
    ];
    var str = "";
    for (var i = 0; i < arr.length; i++) {
        str += `<li><a href="/help/${arr[i][0]}" target="_blank">${arr[i][1]}</a></li>`
    }
    fh_2.innerHTML = str;
})();
(() => {
    var arr = [
        ["http://sz.hua.com/", "深圳鲜花"],
        ["http://bj.hua.com/", "北京鲜花"],
        ["http://sh.hua.com/", "上海鲜花"],
        ["http://gz.hua.com/", "广州鲜花"],
        ["http://tj.hua.com/", "天津鲜花"],
        ["http://cq.hua.com/", "重庆鲜花"],
        ["http://cd.hua.com/", "成都鲜花"],
        ["http://xa.hua.com/", "西安鲜花"],
        ["http://wh.hua.com/", "武汉鲜花"],
        ["http://nj.hua.com/", "南京鲜花"],
        ["http://xm.hua.com/", "厦门鲜花"],
        ["/help/sendRange.htm", "更多城市"]
    ];
    var str = "";
    for (var i = 0; i < arr.length; i++) {
        str += `<li><a href="${arr[i][0]}" target="_blank" title="${arr[i][1]}">${arr[i][1]}</a></li>`
    }
    fh_3.innerHTML = str;
})();
(() => {
    var arr = [
        ["pp", "十四年品牌"],
        ["xldy", "销量领先"],
        ["bwkh_btn", "百万客户信赖"],
        ["ychy_btn", "时尚原创花艺"],
        ["ddsp_btn", "订单实拍"],
        ["djbz_btn", "低价保障"],
        ["sd_btn", "3小时配送"],
        ["tpcn_btn", "200%退赔承诺"]
    ];
    var str = "";
    for (var i = 0; i < arr.length; i++) {
        str += `<li><a href="/profile/why_choose_us.htm#${arr[i][0]}" target="_blank"><span class="ico ico-server-w${i+1}"></span>${arr[i][1]}</a></li>`
    }
    fs.innerHTML = str;
})();