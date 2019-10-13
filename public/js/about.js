var _html = (element, arr) => {
    for (var elem of arr) {
        element.innerHTML += `<li><a href="${elem[0]}">${elem[1]}</a></li>`;
    }
}
(() => {
    var cate_list = document.querySelectorAll(".common .cate-list")[0];
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
    _html(cate_list, arr);
})();
(() => {
    var cate_list = document.querySelectorAll(".common .cate-list")[1];
    var arr = [
        ["/yongshenghua/yongshenghua_box.html", "经典花盒"],
        ["/yongshenghua/yongshenghua_large.html", "巨型玫瑰"],
        ["/yongshenghua/yongshenghua_lavender.html", "薰衣草"]
    ];
    _html(cate_list, arr);
})();
(() => {
    var nav = document.querySelector(".nav");
    var arr = [
        ["/", "首页"],
        ["/flower/", "鲜花"],
        ["/yongshenghua/", "永生花"],
        ["/huayu/", "花语大全"]
    ];
    _html(nav, arr);
})();
(() => {
    var swiper_wrapper = document.querySelector(".award>.swiper-container>.swiper-wrapper");
    var arr = [
        ["01", 'style="opacity:1;"', 2018, "荣获电子商务协会颁发“最具品牌价值”奖"],
        ["02", "", 2017, "荣获电子商务协会颁发“最具影响力”奖"],
        ["03", "", 2017, "授权成为“中国电子商务行业联盟副理事长单位”"],
        ["04", "", 2016, "荣获电子商务协会颁发“鲜花礼品行业龙头”奖"],
        ["05", "", 2016, "认证成为“高新技术企业”"],
        ["06", "", 2015, "荣获电子商务协会颁发“鲜花礼品行业龙头”奖"],
        ["07", "", 2015, "授予成为“可信网站单位”"],
        ["08", "", 2013, "荣获电子商务协会颁发“鲜花礼品行业龙头”奖"],
        ["09", "", 2013, "认证成为“中国电子商务诚信示范企业”"],
        ["10", "", 2012, "荣获中国电子商务颁发的“金种子”奖"],
        ["11", "", 2012, "荣获中国网上零售年会“最佳用户体验”奖"],
        ["12", "", 2011, "荣获中国网上零售年会“最喜爱网站TOP100”"],
        ["13", "", 2010, "荣获中国网上零售年会“诚信品牌100强”"],
        ["14", "", 2009, "荣获中国电子商务颁发的“百佳购物网站”"],
        ["15", "", 2007, "荣获电子商务世界杂志“最喜爱网站TOP100”"],
        ["16", "", 2007, "认证成为“中国花卉协会会员”"],
        ["17", "", 2007, "认证成为“中国花卉协会会员”"],
        ["18", "", 2006, "荣获电子商务世界杂志“最喜爱网站TOP100”"],
        ["19", "", 2005, "认证成为“中国电子商务协会会员”"],
        ["20", "", 2005, "获得“增值电商业务经营许可证”"]
    ];
    for (var elem of arr) {
        swiper_wrapper.innerHTML += `
        <div data-index="${elem[0]}" class="swiper-slide">
            <img src="../pimg/aboutus/medal${elem[0]}.png" alt="">
            <div data-index="${elem[0]}" class="slide-title" ${elem[1]}>
                <p class="award-year"><span class="year">${elem[2]}</span>th</p>
                <p class="award-name">${elem[3]}</p>
            </div>
        </div>
        `;
    }
})();
(() => {
    var bd = document.querySelector(".pull-left .bd");
    var arr = [
        ["news.htm", "公司动态"],
        ["media.html", "媒体报道"],
        ["culture.htm", "企业文化"],
        ["/productpj/", "客户体验"],
        ["gdsj.html", "感动瞬间"],
        ["/XianHuaShiPai/", "订单实拍秀"],
        ["why_choose_us.htm", "为什么选择我们"],
        ["contact.htm", "联系我们"]
    ];
    var i = 1;
    for (var elem of arr) {
        bd.innerHTML += `<li><a href="${elem[0]}"><span class="ico ico-about${i}"></span>${elem[1]}</a></li>`;
        i++;
    }
})();
(()=>{
    var swiper_wrapper = document.querySelector(".company .swiper-wrapper");
    for(var i=1;i<8;i++){
        swiper_wrapper.innerHTML+=`<div class="swiper-slide"><img src="../pimg/aboutus/company_pic0${i}.png" alt=""></div>`;
    }
    console.log(swiper_wrapper)
})();