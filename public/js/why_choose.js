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
    for (var elem of arr) {
        xh.innerHTML += `<li><a target="_blank" href="/${elem[0]}/">${elem[1]}</a></li>`;
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
    for (var elem of arr) {
        ysh.innerHTML += `<li><a target="_blank" href="/yongshenghua/yongshenghua_${elem[0]}.html">${elem[1]}</a></li>`;
    }
})();
(() => {
    var arr = [
        ["ganso", "元祖"],
        ["holiland", "好利来"],
        ["croissants", "可颂坊"],
        ["waffleboy", "窝夫小子"],
        ["micamika", "米卡米卡"],
        ["yipinxuan", "一品轩"],
        ["xfxb", "幸福西饼"],
        ["mcake", "Mcake"],
        ["lecake", "诺心"],
        ["vcake", "Vcake"],
        ["allcitycake", "全国品牌"]
    ];
    for (var elem of arr) {
        cake.innerHTML += `<li><a target="_blank" href="/cake/${elem[0]}/">${elem[1]}</a></li>`;
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
    for (var elem of arr) {
        gifts.innerHTML += `<li><a target="_blank" href="/${elem[0]}">${elem[1]}</a></li>`;
    }
})();
(() => {
    var arr = [
        ["greenplant", "绿色植物"],
        ["potflower", "盆栽花卉"]
    ];
    for (var elem of arr) {
        Plant.innerHTML += `<li><a target="_blank" href="/Plant/${elem[0]}/">${elem[1]}</a></li>`;
    }
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
    for (var elem of arr) {
        nav.innerHTML += `<li><a href="/${elem[0]}">${elem[1]}</a></li>`;
    }
})();
(() => {
    var arr = [
        ["pp", "selected", "14年品牌"],
        ["xldy", "", "销量第一"],
        ["bwkh", "", "百万客户"],
        ["ychy", "", "原创花艺"],
        ["ddsp", "", "订单实拍"],
        ["djbz", "", "三小时送达"],
        ["sd", "", "底价保证"],
        ["tpcn", "", "退赔承诺"]
    ];
    for (var elem of arr) {
        guarantee_menu.innerHTML += `<li class="${elem[0]}_btn"><a href="javascript:;" tab="${elem[0]}_btn" class="${elem[1]}"><span class="corn" title="${elem[2]}"></span></a></li>`;
    }
})();
(() => {
    var arr = [
        ["15", "鲜花礼品行业龙头奖"],
        ["17", "2017年荣获世界电子商务大会最具影响力奖"],
        ["16", "高新技术企业"],
        ["13", "可信网站验证单位"],
        ["", "中国互联网电子商务鲜花礼品行业龙头企业"],
        ["01", "中国电子商务e价值榜‘金种子’奖 "],
        ["02", "中国花卉协会零售业分会单位会员"],
        ["03", "中国花卉协会单位会员"],
        ["04", "中国电子商务协会单位会员"],
        ["05", "2006年消费者最喜爱网站TOP100"],
        ["06", "2007年消费者最喜爱网站TOP100"],
        ["07", "中国电子商务2009年百佳品牌购物网站"],
        ["08", "2010中国网上诚信品牌100强"],
        ["09", "2011年度消费者最喜爱的网站TOP100"],
        ["10", "2012年度中国网上零售年会 最佳用户体验奖"],
        ["11", "中华人民共和国增值电信业务经营许可证（粤B2-20050744)"],
        ["12", "中国互联网电子商务诚信示范企业"]
    ];
    for (var elem of arr) {
        owl_carousel.innerHTML += `<div class="item"><img src="../pimg/why_ry${elem[0]}.jpg" height="400"width="520"><span>${elem[1]}</span></div>`;
    }
})();
(() => {
    var arr = [
        ["9012241", "135****4685", "2019-10-10 IP：117.136.29.2*", "非常不错的！"],
        ["9012243", "135****4685", "2019-10-10 IP：117.136.29.2*", "非常不错的！"],
        ["9012228", "135****4685", "2019-10-10 IP：117.136.29.2*", "非常不错的！"]
    ];
    var str = ""
    for (var elem of arr) {
        str += `
        <dl>
            <dt>
                <a href="../product/${elem[0]}.html"><img src="../newpic/${elem[0]}.jpg_80x87.jpg" width="58" height="63"></a>
                ${elem[1]}<br>
            </dt>
            <dd>
                <div class="hd">
                    <span class="pull-right">评价时间：${elem[2]}</span>
                    整体评分：
        `;
        for (var i = 0; i < 5; i++) str += '<img src="//img02.hua.com/pc/member/images/review_img/review_star_fen.gif" align="absmiddle">';
        str += `
                </div>
                <div class="bd">
                    <h6></h6>
                    <p class="text-justify">评价内容：${elem[3]}</p>
                </div>
            </dd>
        </dl>
        `;
    }
    ajaxComment.innerHTML = str;
})();
(() => {
    var arr = [
        ["http://www.cmbchina.com/Personal/Promotion/PrmotionInfo.aspx?guid=d0f82e6b-a86e-477d-8c6e-15a4a05cdb01", 13, "“招商银行”2015情人节活动"],
        ["http://mall.wanlitong.com/shop/hua/index.html", 14, "“中国平安”唯一指定鲜花类积分兑换服务商"],
        ["http://map.baidu.com", 15, "“百度地图”春运送爱到家活动合作"]
    ];
    for (var elem of arr) {
        mqxl_new.innerHTML += `
        <li>
            <a href="${elem[0]}" target="_blank">
                <img src="../pimg/why_${elem[1]}.jpg" alt="${elem[2]}">
                <p>${elem[2]}</p>
            </a>
        </li>
        `;
    }
})();
(() => {
    var arr = [
        [9012009, "忘情巴黎", "33枝玫瑰，石竹梅", 296],
        [9012011, "阳光海岸", "19枝香槟玫瑰", 219],
        [9012055, "不变的心", "戴安娜玫瑰66枝", 398],
        [9010917, "永恒的爱情", "红玫瑰99枝", 598]
    ];
    for (var elem of arr) {
        list_sales1.innerHTML += `
        <li>
            <div class="img-box">
                <a href="/product/${elem[0]}.html" target="_blank"><img src="../newpic/${elem[0]}.jpg" alt="${elem[1]}"></a>
            </div>
            <a href="/product/${elem[0]}.html" target="_blank">${elem[1]}-${elem[2]}<br><b>￥${elem[3]}</b></a>
        </li>
        `;
    }
})();
(() => {
    var arr = [
        ["9012289", "7400", "2018281493169482", "213376093", "三环与四环之间*****"],
        ["9010946", "7399", "2018281484389524", "213252084", "宝安区***"],
        ["9010948", "7398", "2018281475080439", "213135404", "北京***"],
        ["9010734", "7397", "2018281465684009", "213117597", "中***"],
        ["9012252", "7396", "2018281453065705", "212970445", "绣菊园"],
        ["9012038", "7395", "2018281443837650", "212945698", "沙溪***"],
        ["9012114", "7394", "2018281432989319", "212938119", "七里庄"],
        ["9012201", "7393", "20182811471867309", "212923086", "浙江省温州市鹿城*****"],
        ["9012189", "7392", "20182811444369960", "212856670", "古镇***"],
        ["9012190", "7391", "20182811425931962", "212695403", "古镇海洲"],
        ["9010765", "7390", "20182811401037449", "212490372", "光明北大街光明*****"],
        ["9012219", "7389", "2017102318184583116", "202654891", "东方路16号6*****"]
    ];
    for (var elem of arr) {
        OrderShowHtml.innerHTML += `
        <li>
            <div class="img-box">
                <a target="_blank" href="../xianhuashipai/detail/${elem[0]}.html?id=${elem[1]}#start">
                    <img src="../uploadshipai/${elem[2]}.jpg" width="159" height="168">
                </a>
            </div>
            订单号：${elem[3]}<br>地址：${elem[4]}
        </li>
        `;
    }
})();












