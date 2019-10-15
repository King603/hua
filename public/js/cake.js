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
        ["tanbingweiwenxianhua", "探病慰问"],
        ["daoqianxianhua", "道歉鲜花"],
        ["zhufuqinghexianhua", "祝贺鲜花"],
        ["hunqingxianhua", "婚庆鲜花"],
        ["businessFlower", "商务鲜花"]
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
        ["greenplant/", "绿色植物"],
        ["potflower/", "盆栽花卉"]
    ];
    _html(".dropdown-menu>ul.list-inline:nth-child(8)", arr);
})();
(() => {
    var arr = [
        ["/", "首页"],
        ["/flower", "鲜花"],
        ["/yongshenghua", "永生花"],
        ["/cake", "蛋糕"],
        ["/gifts", "礼品"],
        ["/gifts/chocolates", "巧克力"],
        ["/huayu", "花语大全"],
        ["/you", "设计师臻选鲜花"],
        ["/theme/chongyangjie", "重阳节鲜花礼品"],
    ];
    _html("nav .nav", arr);
})();
(() => {
    var letter_list = document.getElementById("letter_list");
    var arr = [
        ["a", "A"],
        ["b", "B"],
        ["c", "C"],
        ["d", "D"],
        ["e", "E"],
        ["f", "F"],
        ["g", "G"],
        ["h", "H"],
        ["j", "J"],
        ["k", "K"],
        ["l", "L"],
        ["m", "M"],
        ["n", "N"],
        ["o", "O"],
        ["p", "P"],
        ["q", "Q"],
        ["r", "R"],
        ["s", "S"],
        ["t", "T"],
        ["w", "W"],
        ["x", "X"],
        ["y", "Y"],
        ["z", "Z"],
    ];
    for (var i = 0; i < arr.length; i++) {
        letter_list.innerHTML += `<a class="" href="javascript:;" name="${arr[i][0]}city">${arr[i][1]}</a>`
    }
})();
(() => {
    var arr = [
        ["华北、东北", [
            ["beijingdangao.html", "北京", "f_csb", "b"],
            ["tianjindangao.html", "天津", "f_csb", "t"],
            ["shijiazhuangdangao.html", "石家庄", "f_csb", "s"],
            ["tangshandangao.html", "唐山", "f_csb", "t"],
            ["?city=邯郸", "邯郸", "f_cs", "h"],
            ["?city=沧州", "沧州", "f_cs", "c"],
            ["?city=保定", "保定", "f_cs", "b"],
            ["?city=廊坊", "廊坊", "f_cs", "l"],
            ["?city=邢台", "邢台", "f_cs", "x"],
            ["?city=张家口", "张家口", "f_cs", "z"],
            ["?city=秦皇岛", "秦皇岛", "f_cs", "q"],
            ["?city=武安", "武安", "f_cs", "w"],
            ["huhehaotedangao.html", "呼和浩特", "f_csb", "h"],
            ["?city=鄂尔多斯", "鄂尔多斯", "f_cs", "e"],
            ["?city=包头", "包头", "f_cs", "b"],
            ["taiyuandangao.html", "太原", "f_csb", "t"],
            ["?city=大同", "大同", "f_cs", "d"],
            ["?city=阳泉", "阳泉", "f_cs", "y"],
            ["?city=晋城", "晋城", "f_cs", "j"],
            ["shenyangdangao.html", "沈阳", "f_csb", "s"],
            ["daliandangao.html", "大连", "f_csb", "d"],
            ["?city=鞍山", "鞍山", "f_cs", "a"],
            ["?city=本溪", "本溪", "f_cs", "b"],
            ["?city=盘锦", "盘锦", "f_cs", "p"],
            ["?city=锦州", "锦州", "f_cs", "j"],
            ["?city=抚顺", "抚顺", "f_cs", "f"],
            ["?city=丹东", "丹东", "f_cs", "d"],
            ["?city=辽阳", "辽阳", "f_cs", "l"],
            ["?city=朝阳", "朝阳", "f_cs", "c"],
            ["?city=铁岭", "铁岭", "f_cs", "t"],
            ["?city=阜新", "阜新", "f_cs", "f"],
            ["?city=葫芦岛", "葫芦岛", "f_cs", "h"],
            ["haerbindangao.html", "哈尔滨", "f_csb", "h"],
            ["?city=大庆", "大庆", "f_cs", "d"],
            ["?city=齐齐哈尔", "齐齐哈尔", "f_cs", "q"],
            ["?city=牡丹江", "牡丹江", "f_cs", "m"],
            ["?city=佳木斯", "佳木斯", "f_cs", "j"],
            ["changchundangao.html", "长春", "f_csb", "c"],
            ["?city=吉林", "吉林", "f_cs", "j"],
            ["?city=延吉", "延吉", "f_cs", "y"]
        ]],
        ["华东地区", [
            ["shanghaidangao.html", "上海", "f_csb", "s"],
            ["nanjingdangao.html", "南京", "f_csb", "n"],
            ["suzhoudangao.html", "苏州", "f_csb", "s"],
            ["wuxidangao.html", "无锡", "f_csb", "w"],
            ["?city=南通", "南通", "f_cs", "n"],
            ["?city=徐州", "徐州", "f_cs", "x"],
            ["?city=常州", "常州", "f_cs", "c"],
            ["?city=盐城", "盐城", "f_cs", "y"],
            ["?city=扬州", "扬州", "f_cs", "y"],
            ["?city=泰州", "泰州", "f_cs", "t"],
            ["?city=镇江", "镇江", "f_cs", "z"],
            ["?city=淮安", "淮安", "f_cs", "h"],
            ["?city=连云港", "连云港", "f_cs", "l"],
            ["?city=宿迁", "宿迁", "f_cs", "s"],
            ["?city=昆山", "昆山", "f_cs", "k"],
            ["?city=江阴", "江阴", "f_cs", "j"],
            ["hangzhoudangao.html", "杭州", "f_csb", "h"],
            ["ningbodangao.html", "宁波", "f_csb", "n"],
            ["wenzhoudangao.html", "温州", "f_csb", "w"],
            ["?city=绍兴", "绍兴", "f_cs", "s"],
            ["?city=台州", "台州", "f_cs", "t"],
            ["?city=嘉兴", "嘉兴", "f_cs", "j"],
            ["?city=金华", "金华", "f_cs", "j"],
            ["?city=湖州", "湖州", "f_cs", "h"],
            ["?city=舟山", "舟山", "f_cs", "z"],
            ["?city=丽水", "丽水", "f_cs", "l"],
            ["?city=衢州", "衢州", "f_cs", "c"],
            ["jinandangao.html", "济南", "f_csb", "j"],
            ["qingdaodangao.html", "青岛", "f_csb", "q"],
            ["yantaidangao.html", "烟台", "f_csb", "y"],
            ["?city=潍坊", "潍坊", "f_cs", "w"],
            ["?city=淄博", "淄博", "f_cs", "z"],
            ["?city=济宁", "济宁", "f_cs", "j"],
            ["?city=临沂", "临沂", "f_cs", "l"],
            ["?city=东营", "东营", "f_cs", "d"],
            ["?city=泰安", "泰安", "f_cs", "t"],
            ["?city=威海", "威海", "f_cs", "w"],
            ["?city=枣庄", "枣庄", "f_cs", "z"],
            ["?city=日照", "日照", "f_cs", "r"],
            ["?city=滨州", "滨州", "f_cs", "b"],
            ["?city=菏泽", "菏泽", "f_cs", "h"],
            ["fuzhoudangao.html", "福州", "f_csb", "f"],
            ["?city=厦门", "厦门", "f_cs", "x"],
            ["?city=泉州", "泉州", "f_cs", "q"],
            ["?city=莆田", "莆田", "f_cs", "p"],
            ["hefeidangao.html", "合肥", "f_csb", "h"],
            ["?city=芜湖", "芜湖", "f_cs", "w"],
            ["?city=滁州", "滁州", "f_cs", "c"],
            ["?city=黄山", "黄山", "f_cs", "h"],
            ["?city=铜陵", "铜陵", "f_cs", "t"],
            ["?city=马鞍山", "马鞍山", "f_cs", "m"],
            ["?city=蚌埠", "蚌埠", "f_cs", "b"],
            ["nanchangdangao.html", "南昌", "f_csb", "n"],
            ["?city=赣州", "赣州", "f_cs", "g"],
            ["?city=九江", "九江", "f_cs", "j"],
            ["?city=抚州", "抚州", "f_cs", "f"],
            ["?city=新余", "新余", "f_cs", "x"],
            ["?city=景德镇", "景德镇", "f_cs", "j"]
        ]],
        ["华南、华中", [
            ["guangzhoudangao.html", "广州", "f_csb", "g"],
            ["shenzhendangao.html", "深圳", "f_csb", "s"],
            ["?city=佛山", "佛山", "f_cs", "f"],
            ["?city=东莞", "东莞", "f_cs", "d"],
            ["?city=珠海", "珠海", "f_cs", "z"],
            ["?city=惠州", "惠州", "f_cs", "h"],
            ["?city=中山", "中山", "f_cs", "z"],
            ["?city=茂名", "茂名", "f_cs", "m"],
            ["?city=湛江", "湛江", "f_cs", "z"],
            ["?city=江门", "江门", "f_cs", "j"],
            ["?city=汕头", "汕头", "f_cs", "s"],
            ["nanningdangao.html", "南宁", "f_csb", "n"],
            ["?city=柳州", "柳州", "f_cs", "l"],
            ["?city=桂林", "桂林", "f_cs", "g"],
            ["?city=贵港", "贵港", "f_cs", "g"],
            ["?city=海口", "海口", "f_csb", "h"],
            ["?city=三亚", "三亚", "f_cs", "s"],
            ["wuhandangao.html", "武汉", "f_csb", "w"],
            ["?city=宜昌", "宜昌", "f_cs", "y"],
            ["?city=襄阳", "襄阳", "f_cs", "x"],
            ["?city=荆州", "荆州", "f_cs", "j"],
            ["?city=黄石", "黄石", "f_cs", "h"],
            ["?city=鄂州", "鄂州", "f_cs", "e"],
            ["?city=孝感", "孝感", "f_cs", "x"],
            ["?city=荆门", "荆门", "f_cs", "j"],
            ["?city=十堰", "十堰", "f_cs", "s"],
            ["?city=潜江", "潜江", "f_cs", "q"],
            ["?city=随州", "随州", "f_cs", "s"],
            ["?city=仙桃", "仙桃", "f_cs", "x"],
            ["zhengzhoudangao.html", "郑州", "f_csb", "z"],
            ["?city=洛阳", "洛阳", "f_cs", "l"],
            ["?city=许昌", "许昌", "f_cs", "x"],
            ["?city=焦作", "焦作", "f_cs", "j"],
            ["?city=安阳", "安阳", "f_cs", "a"],
            ["?city=信阳", "信阳", "f_cs", "x"],
            ["?city=驻马店", "驻马店", "f_cs", "z"],
            ["?city=平顶山", "平顶山", "f_cs", "p"],
            ["?city=开封", "开封", "f_cs", "k"],
            ["changshadangao.html", "长沙", "f_csb", "c"],
            ["?city=株洲", "株洲", "f_cs", "z"],
            ["?city=湘潭", "湘潭", "f_cs", "x"],
            ["?city=郴州", "郴州", "f_cs", "c"]
        ]],
        ["西南、西北", [
            ["chongqingdangao.html", "重庆", "f_csb", "c"],
            ["chengdudangao.html", "成都", "f_csb", "c"],
            ["?city=绵阳", "绵阳", "f_cs", "m"],
            ["?city=德阳", "德阳", "f_cs", "d"],
            ["?city=宜宾", "宜宾", "f_cs", "y"],
            ["?city=南充", "南充", "f_cs", "n"],
            ["?city=内江", "内江", "f_cs", "n"],
            ["?city=眉山", "眉山", "f_cs", "m"],
            ["?city=乐山", "乐山", "f_cs", "l"],
            ["?city=雅安", "雅安", "f_cs", "y"],
            ["?city=泸州", "泸州", "f_cs", "l"],
            ["?city=达州", "达州", "f_cs", "d"],
            ["?city=攀枝花", "攀枝花", "f_cs", "p"],
            ["?city=遂宁", "遂宁", "f_cs", "s"],
            ["?city=自贡", "自贡", "f_cs", "z"],
            ["?city=广安", "广安", "f_cs", "g"],
            ["?city=广元", "广元", "f_cs", "g"],
            ["?city=西昌", "西昌", "f_cs", "x"],
            ["?city=资阳", "资阳", "f_cs", "z"],
            ["?city=简阳", "简阳", "f_cs", "j"],
            ["?city=都江堰", "都江堰", "f_cs", "d"],
            ["?city=峨眉山", "峨眉山", "f_cs", "e"],
            ["kunmingdangao.html", "昆明", "f_csb", "k"],
            ["?city=曲靖", "曲靖", "f_cs", "q"],
            ["guiyangdangao.html", "贵阳", "f_csb", "g"],
            ["?city=遵义", "遵义", "f_cs", "z"],
            ["?city=安顺", "安顺", "f_cs", "a"],
            ["?city=六盘水", "六盘水", "f_cs", "l"],
            ["xiandangao.html", "西安", "f_csb", "x"],
            ["?city=榆林", "榆林", "f_cs", "y"],
            ["?city=咸阳", "咸阳", "f_cs", "x"],
            ["?city=宝鸡", "宝鸡", "f_cs", "b"],
            ["?city=汉中", "汉中", "f_cs", "h"],
            ["?city=延安", "延安", "f_cs", "yh"],
            ["lanzhoudangao.html", "兰州", "f_csb", "l"],
            ["?city=西宁", "西宁", "f_cs", "x"],
            ["?city=银川", "银川", "f_cs", "y"],
            ["?city=拉萨", "拉萨", "f_cs", "l"],
            ["wulumuqidangao.html", "乌鲁木齐", "f_csb", "w"]
        ]]
    ];
    var city_box = document.getElementById("city_box");
    var str = "";
    for (var i = 0; i < arr.length; i++) {
        str += `
        <!--${arr[i][0]}-->
        <div class="cs_zs">
            <div class="title_type2">${arr[i][0]}</div>
            <div class="xzcs_dt">
        `;
        for (var j = 0; j < arr[i][1].length; j++) {
            str += `
            <span>
                <a href="/cake/city/${arr[i][1][j][0]}" title="${arr[i][1][j][1]}蛋糕" class="${arr[i][1][j][2]}" name="${arr[i][1][j][3]}city">
                    ${arr[i][1][j][1]}
                </a>
            </span>`;
        }
        str += "</div></div>";
    }
    city_box.innerHTML = str;
})();
(() => {
    var grid_list = document.querySelectorAll(".wrapper .grid-wrapper");
    var arr = [
        [
            ["5302071", "清风有信(8寸)", "298", "元祖蛋糕/清风有信(8寸)-元祖慕斯蛋糕", "元祖授权销售"],
            ["5302066", "情有独钟(8寸)", "258", "元祖蛋糕/情有独钟(8寸)-元祖鲜奶蛋糕", "元祖授权销售"],
            ["5302064", "小圆香径鲜奶蛋糕（黄金燕麦）(8寸)", "258", "元祖蛋糕/小圆香径鲜奶蛋糕（黄金燕麦）(8寸)-元祖鲜奶蛋糕", "元祖授权销售"],
            ["5302063", "爱的种子(8寸)", "258", "元祖蛋糕/爱的种子(8寸)-元祖鲜奶蛋糕", "元祖授权销售"],
        ],
        [
            ["5221029", "桂圆冰淇淋(1磅)", "198", "21CAKE蛋糕/桂圆冰淇淋(1磅)-冰淇淋蛋糕", ""],
            ["5222025", "芒果奶油蛋糕(2磅)", "198", "21CAKE蛋糕/芒果奶油蛋糕(2磅)-乳脂奶油蛋糕", ""],
            ["5221004", "深艾尔(1磅)", "268", "21CAKE蛋糕/深艾尔(1磅)-慕斯蛋糕", ""],
            ["5221031", "爱尔兰咖啡(1磅)", "268", "21CAKE蛋糕/爱尔兰咖啡(1磅)-慕斯蛋糕", ""]
        ],
        [
            ["5902028", "草莓拿破仑蛋糕（5-8人食）", "336", "诺心蛋糕/草莓拿破仑蛋糕（5-8人食）-拿破仑蛋糕", ""],
            ["5901042", "雪域蓝莓芝士蛋糕（2-4人食）", "218", "诺心蛋糕/雪域蓝莓芝士蛋糕（2-4人食）-鲜果蛋糕", ""],
            ["5901026", "巧克力松露蛋糕（2-4人食）", "218", "诺心蛋糕/巧克力松露蛋糕（2-4人食）-巧克力蛋糕", ""],
            ["5901022", "粉色玫瑰森林蛋糕（2-4人食）", "218", "诺心蛋糕/粉色玫瑰森林蛋糕（2-4人食）-巧克力蛋糕", ""]
        ],
        [
            ["5172028", "经典奶香（2.2磅）", "298", "INCAKE蛋糕/经典奶香（2.2磅）-乳脂蛋糕", ""],
            ["5171007", "樱桃冻芝士（1.5磅）", "198", "INCAKE蛋糕/樱桃冻芝士（1.5磅）-芝士蛋糕", ""],
            ["5171041", "鲜果锦汇（1.5磅）", "198", "INCAKE蛋糕/鲜果锦汇（1.5磅）-鲜奶蛋糕", ""],
            ["5171040", "维也纳骑士（1.2磅）", "198", "INCAKE蛋糕/维也纳骑士（1.2磅）-巧克力蛋糕", ""]
        ],
        [
            ["5131020", "冻烤燃情芝士（1.2磅）", "198", "贝思客蛋糕/冻烤燃情芝士（1.2磅）-芝士蛋糕", ""],
            ["5131018", "白色红丝绒（1.2磅）", "198", "贝思客蛋糕/白色红丝绒（1.2磅）-奶油蛋糕", ""],
            ["5131016", "沃尔夫斯堡之春（1.2磅）", "198", "贝思客蛋糕/沃尔夫斯堡之春（1.2磅）-慕斯蛋糕", ""],
            ["5131015", "慕尼黑巧克力（1.2磅）", "198", "贝思客蛋糕/慕尼黑巧克力（1.2磅）-巧克力蛋糕", ""]
        ],
        [
            ["5181058", "小精灵（6寸）", "208", "BONCAKE蛋糕/小精灵（6寸）-", "优质原料 舌尖享受"],
            ["5181056", "小宝贝（6寸）", "188", "BONCAKE蛋糕/小宝贝（6寸）-奶油蛋糕", "ins风造型"],
            ["5181055", "小公举（6寸）", "218", "BONCAKE蛋糕/小公举（6寸）-奶油蛋糕", "超高颜值"],
            ["5181054", "西瓜瓜（6寸）", "288", "BONCAKE蛋糕/西瓜瓜（6寸）-西瓜造型", "夏日人气款"]
        ],
        [
            ["5141032", " 百香果慕斯（6寸）", "198", "Mcake蛋糕/ 百香果慕斯（6寸）-慕斯蛋糕", ""],
            ["5141031", " 蜜桃物语（6寸）", "198", "Mcake蛋糕/ 蜜桃物语（6寸）-慕斯蛋糕", ""],
            ["5142029", "黑森林拿破仑（8寸）", "298", "Mcake蛋糕/黑森林拿破仑（8寸）-巧克力蛋糕", ""],
            ["5142028", "小熊动物造型芝士味生日儿童生日宴会蛋糕（2磅）", "298", "Mcake蛋糕/小熊动物造型芝士味生日儿童生日宴会蛋糕（2磅）-芝士蛋糕", ""]
        ],
        [
            ["5501048", "熊孩子蛋糕（6寸）", "199", "窝夫小子蛋糕/熊孩子蛋糕（6寸）-奶油蛋糕", "请至少提前6小时订购"],
            ["5501047", "小熊很芒（6寸）", "159", "窝夫小子蛋糕/小熊很芒（6寸）-慕斯蛋糕", "请至少提前6小时订购"],
            ["5502046", "汪来了（8寸）", "329", "窝夫小子蛋糕/汪来了（8寸）-巧克力蛋糕", "请至少提前6小时订购"],
            ["5501045", "抹茶提拉米苏蛋糕（6寸）", "239", "窝夫小子蛋糕/抹茶提拉米苏蛋糕（6寸）-芝士蛋糕", "请至少提前6小时订购"]
        ],
        [

        ],
        [
            ["5602016", "四重奏蛋糕(约2磅)", "228", "幸福西饼蛋糕/四重奏蛋糕(约2磅)-方形/巧克力/榴莲/慕斯蛋糕", ""],
            ["5602015", "（新款）榴芒双拼(约2磅)", "218", "幸福西饼蛋糕/（新款）榴芒双拼(约2磅)-双拼蛋糕", ""],
            ["5602045", "浪漫果纷蛋糕(约2磅)", "218", "幸福西饼蛋糕/浪漫果纷蛋糕(约2磅)-水果蛋糕", ""],
            ["5602038", "雪顶榴心（幸福下午茶）(约1.5磅)", "119", "幸福西饼蛋糕/雪顶榴心（幸福下午茶）(约1.5磅)-榴莲蛋糕", ""]
        ],
        [
            ["5112030", "布朗尼 （1.5磅）", "189", "Vcake蛋糕/布朗尼 （1.5磅）-坚果巧克力口味", ""],
            ["5112029", "心意（1.5磅）", "239", "Vcake蛋糕/心意（1.5磅）-白巧克力+覆盆子口味", ""],
            ["5112026", "缤果雪慕（1.5磅）", "209", "Vcake蛋糕/缤果雪慕（1.5磅）-酸奶蛋糕", ""],
            ["5112024", "在一起（1.5磅）", "209", "Vcake蛋糕/在一起（1.5磅）-香草蛋糕", ""]
        ],
        [
            ["5219020", "木糖醇版-北海道双层", "198", "心之和蛋糕/木糖醇版-北海道双层-", ""],
            ["5219017", "草莓北海道双层（5寸)", "198", "心之和蛋糕/草莓北海道双层（5寸)-草莓蛋糕", "家庭分享装"],
            ["5219018", "樱花北海道双层（5寸)", "198", "心之和蛋糕/樱花北海道双层（5寸)-樱花马斯卡彭乳酪", "超高颜值 甜而不腻"],
            ["5211015", " 关山樱花 （1.8磅)", "488", "心之和蛋糕/ 关山樱花 （1.8磅)-重芝士蛋糕", ""]
        ],
        [
            ["5302127", "时尚爸爸（6寸）", "229", "cakeboss蛋糕/时尚爸爸（6寸）-时尚爸爸", "温馨守护"],
            ["5302124", "时尚女神（红包包）（7寸）", "299", "cakeboss蛋糕/时尚女神（红包包）（7寸）-时尚女神（红包包）", "清新不失优雅"],
            ["5302121", "粉红心羽（朗姆酒）（7寸）", "240", "cakeboss蛋糕/粉红心羽（朗姆酒）（7寸）-粉红心羽（朗姆酒）", "真心为你"],
            ["5301119", "祝寿款（爷爷）（6寸）", "399", "cakeboss蛋糕/祝寿款（爷爷）（6寸）-祝寿款（爷爷）", "为爱相随"]
        ],
        [
            ["5010041", "陪伴左右", "168", "蛋糕/陪伴左右-2磅(8寸)水果蛋糕", ""],
            ["5010040", "多彩生活", "169", "蛋糕/多彩生活-2磅(8寸)水果蛋糕", ""],
            ["5010042", "鲜果缤纷", "169", "蛋糕/鲜果缤纷-2磅(8寸)水果蛋糕", ""],
            ["5010025", "心之恋曲", "168", "蛋糕/心之恋曲-2磅(8寸)鲜奶水果蛋糕", ""],
            ["5010046", "水果盛宴", "169", "蛋糕/水果盛宴-2磅(8寸)水果蛋糕", ""],
            ["5010020", "蓝玫瑰鲜奶", "158", "蛋糕/蓝玫瑰鲜奶-8寸(2磅)心形鲜奶蛋糕", ""],
            ["5010044", "欢声乐语", "169", "蛋糕/欢声乐语-2磅(8寸)水果蛋糕", ""],
            ["5010045", "美好回忆", "169", "蛋糕/美好回忆-2磅(8寸)水果蛋糕", "特价"],
            ["5010034", "幸福时刻", "158", "蛋糕/幸福时刻-8寸(2磅)心形鲜奶蛋糕", ""],
            ["5010027", "我的心属于你", "168", "蛋糕/我的心属于你-8寸(2磅)鲜奶水果蛋糕", ""],
            ["5010043", "纯洁挚爱", "169", "蛋糕/纯洁挚爱-2磅(8寸)水果蛋糕", ""],
            ["5010031", "I LOVE YOU", "158", "蛋糕/I LOVE YOU-8寸(2磅)心形鲜奶蛋糕", ""]
        ],
    ];
    for (var i = 0; i < arr.length; i++) {
        var str = "<!-- 商品 -->";
        for (var j = 0; j < arr[i].length; j++) {
            str += `
            <div class="grid-item">
                <div class="grid-panel">
                    <div class="img-box">
                        <a href="/product/${arr[i][j][0]}.html" target="_blank" data-link="${arr[i][j][0]}"><img width="220" height="240" src="../newpic/${arr[i][j][0]}.jpg_220x240.jpg" alt="${arr[i][j][1]}"></a>
                    </div>
                    <div class="info-cont">
                        <div class="price">
                            <span class="price-sign">&yen;</span>
                            <span class="price-num" data-pp="${arr[i][j][0]}">${arr[i][j][2]}</span>
                        </div>
                        <div class="title">
                            <a href="/product/${arr[i][j][0]}.html" target="_blank" data-link="${arr[i][j][0]}">
                                <span class="product-title">${arr[i][j][3]}</span>
                                <span class="feature">${arr[i][j][4]}</span>
                            </a>
                        </div>
                        <div class="operate">
                            <a href="javascript:DoGuanZhu('${arr[i][j][0]}')" class="attention"><span class="ico ico-heart-d"></span>收藏</a>
                            <a href="/shopping/AddtoCart?product_code=${arr[i][j][0]}" class="add-cart" style="margin-left:-5px;"><span class="ico ico-cart-d"></span>加入购物车</a>
                        </div>
                    </div>
                </div>
            </div>
            `;
        }
        grid_list[i].innerHTML = str + "<!-- 商品 End -->";
    }
})();
(() => {
    var list=document.querySelectorAll(".navigation .item-list");
    var arr = [
        [
            ["/ganso/", "元祖蛋糕"],
            ["/21cake/", "廿一客蛋糕"],
            ["/lecake/", "诺心蛋糕"],
            ["/incake/", "INCAKE"],
            ["/beisike/", "贝思客蛋糕"],
            ["/boncake/", "BONCAKE"],
            ["/mcake/", "Mcake蛋糕"],
            ["/waffleboy/", "窝夫小子"],
            ["/micamika/", "米卡米卡"],
            ["/xfxb/", "幸福西饼"],
            ["/vcake/", "Vcake蛋糕"],
            ["/heartcheesecake/", "心之和蛋糕"],
            ["/cakeboss/", "CAKEBOSS"],
            ["/allcitycake/", "全国蛋糕"]
        ],
        [
            ["/xiannaidangao/", "鲜奶蛋糕"],
            ["/shuiguodangao/", "水果蛋糕"],
            ["/qiaokelidangao/", "巧克力蛋糕"],
            ["/musidangao/", "慕斯蛋糕"],
            ["/wutangdangao/", "无糖蛋糕"],
            ["/shengxiaodangao/", "生肖蛋糕"],
            ["/qinglvdangao/", "情人蛋糕"],
            ["/hunqingdangao/", "婚庆蛋糕"],
            ["/zhushoudangao/", "祝寿蛋糕"],
            ["/ertongdangao/", "儿童蛋糕"],
            ["/oushidangao/", "欧式蛋糕"],
            ["/jieqingdangao/", "节庆蛋糕"]
        ]
    ];
    for (var i = 0; i < arr.length; i++) {
        var str = "";
        for (var j = 0; j < arr[i].length; j++) {
            str += `<li><a href="/cake${arr[i][j][0]}">${arr[i][j][1]}</a></li>`
        }
        list[i].innerHTML = str;
    }
})();
(() => {
    var panel_list1=document.getElementsByClassName("panel-body")[0];
    var arr = [
        ["5010041", "陪伴左右", "2磅(8寸)水果蛋糕", "168"],
        ["5010040", "多彩生活", "2磅(8寸)水果蛋糕", "169"],
        ["5010042", "鲜果缤纷", "2磅(8寸)水果蛋糕", "169"],
        ["5010025", "心之恋曲", "2磅(8寸)鲜奶水果蛋糕", "168"],
        ["5010046", "水果盛宴", "2磅(8寸)水果蛋糕", "169"]
    ];
    var str = "<!-- 侧边商品 -->";
    for (var i = 0; i < arr.length; i++) {
        str += `
        <div class="side-item">
            <div class="img-box">
                <a href="/product/${arr[i][0]}.html" target="_blank" data-link="${arr[i][0]}"><img src="../newpic/${arr[i][0]}.jpg_220x240.jpg" width="180" height="196" alt="${arr[i][1]}"></a>
            </div>
            <div class="info-cont">
                <div class="title">
                    <a href="/product/${arr[i][0]}.html" class="product-title" data-link="${arr[i][0]}">
                        蛋糕/${arr[i][1]}-${arr[i][2]}
                    </a>
                </div>
                <div class="price">
                    <span class="price-sign">&yen;</span>
                    <span class="price-num" data-pp="${arr[i][0]}">${arr[i][3]}</span>
                </div>
            </div>
        </div>
        `;
    }
    panel_list1.innerHTML += str + "<!-- 侧边商品 End -->";
})();
(() => {
    var panel_list2=document.getElementsByClassName("panel-body")[1];
    var arr = [
        ["5302015", "313774*", "包装完美，蛋糕美味，快递员还非常有礼貌地祝福生日快乐??电话回访非常及时，特别好的体验！"],
        ["5010012", "139****4107", "态度和蔼，送货及时，非常感谢。"],
        ["5010020", "138****8997", "爱心蛋糕好吃"],
        ["5010041", "lanzhou*", "很好！非常满意！"],
        ["5302003", "zjj77*", "不错不错不错"]
    ];
    var str = "<!-- 侧边评价 -->";
    for (var i = 0; i < arr.length; i++) {
        str += `
        <div class="side-com">
            <div class="img-box">
                <a href="/product/${arr[i][0]}.html" target="_blank">
                    <img src="../newpic/${arr[i][0]}.jpg_80x87.jpg">
                </a>
            </div>
            <div class="com-cont">
                <h5>会员号：${arr[i][1]}</h5>
                <p><a href="/productpj/${arr[i][0]}.html" target="_blank">${arr[i][2]}</a></p>
            </div>
        </div>
        `;
    }
    panel_list2.innerHTML += str + "<!-- 侧边评价 End -->"
})();
(() => {
    var panel_list3=document.getElementsByClassName("panel-body")[2];
    var arr = [
        [
            ["4001", "蛋糕的分类,做法和保存"],
            ["4002", "蛋糕的起源"],
            ["4003", "九种蛋糕的做法"],
            ["4004", "美味蛋糕新做法"],
            ["4009", "烘焙食品"]
        ],
        [
            ["4005", "选择婚礼蛋糕有学问"],
            ["4006", "生活常识：巧切蛋糕"],
            ["4007", "微波炉蛋糕的做法"],
            ["4008", "风俗之结婚蛋糕"],
            ["4010", "诱人的圣诞节蛋糕"]
        ],
        [
            ["4011", "纽约芝士蛋糕的配方与制作"],
            ["4012", "蓝莓慕斯蛋糕的制作方法"],
            ["4013", "巧克力慕斯蛋糕的制作方法"],
            ["4014", "蛋糕的价值"],
            ["4015", "DIY蛋糕方法"]
        ]
    ];
    var str = "";
    for (var i = 0; i < arr.length; i++) {
        str += "<ul>";
        for (var j = 0; j < arr[i].length; j++) {
            str += `<li><a href="/huayu/${arr[i][j][0]}.htm" target="_blank">${arr[i][j][1]}</a></li>`
        }
        str += "</ul>";
    }
    panel_list3.innerHTML = str;
})();