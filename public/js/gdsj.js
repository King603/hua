var _html = (element, arr) => {
  var str = ""
  for (var elem of arr) {
    str += `<li><a href="${elem[0]}">${elem[1]}</a></li>`;
  }
  element.html(str);
}
(() => {
  var cate_list = $(".common .cate-list:nth-child(2)");
  var arr = [
    ["/aiqingxianhua/", "爱情鲜花"],
    ["/youqingxianhua/", "友情鲜花"],
    ["/theme/birthday/", "生日鲜花"],
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
  var cate_list = $(".common .cate-list:nth-child(4)");
  var arr = [
    ["/yongshenghua/yongshenghua_box.html", "经典花盒"],
    ["/yongshenghua/yongshenghua_large.html", "巨型玫瑰"],
    ["/yongshenghua/yongshenghua_lavender.html", "薰衣草"]
  ];
  _html(cate_list, arr);
})();
(() => {
  var nav = $(".nav");
  var arr = [
    ["/", "首页"],
    ["/flower/", "鲜花"],
    ["/yongshenghua/", "永生花"],
    ["/huayu/", "花语大全"]
  ];
  _html(nav, arr);
})();
(() => {
  var bd = $(".pull-left .bd");
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
  var str = "";
  for (var elem of arr) {
    str += `<li><a href="${elem[0]}"><span class="ico ico-about${i++}"></span>${elem[1]}</a></li>`;
  }
  bd.html(str);
})();
(() => {
  var gdsj = $(".center-list1");
  var str = "";
  var arr = [
    [19563, "花礼网用户故事 | 那些感动我们的，向来都是大爱", "2017-10-23"],
    [19560, "鲜花——见证跨越海峡的异地恋", "2017-10-23"],
    [19513, "你和恋人都是怎样确定关系的？", "2017-10-19"],
    [19129, "盘点花礼用户印象中最深刻的一次亲吻", "2017-09-19"],
    [17387, "希望你永远自由自在", "2016-09-19"],
    [16994, "爱你如初", "2016-08-22"],
    [16888, "我们一直在你身边", "2016-08-15"],
    [16838, "《38℃》", "2016-08-11"],
    [16781, "在最好的年华遇见你", "2016-08-08"],
    [16714, "我永远的小公举", "2016-08-03"],
    [16701, "相见恨晚，时间未晚。", "2016-08-02"],
    [16679, "你愿意成为我的爱侣吗？", "2016-08-01"],
    [16632, "愿此生做你身旁的一株木棉", "2016-07-28"],
    [16581, "珍惜人生，更加珍惜你", "2016-07-25"],
    [16541, "你是我童话里的，那一位公主。", "2016-07-21"],
    [16530, "未来的我，带你去纵横", "2016-07-20"],
    [16511, "爱你如初，永世不变", "2016-07-19"],
    [16509, "我爱你，小鲸鱼。", "2016-07-18"],
    [16478, "水静余波绕，语已多，情未了", "2016-07-15"],
    [16472, "遇见你是我今生最大的幸运", "2016-07-14"],
    [16078, "你的出现震撼我封锁7年的心", "2016-05-27"],
    [16045, "希望我们的爱像满天星", "2016-05-26"],
    [16003, "得成比目何辞死，愿作鸳鸯不羡仙", "2016-05-25"],
    [15962, "我会给上帝提个建议，给咱们再续下辈子", "2016-05-18"],
    [15859, "第一次见便有了守护一生的冲动", "2016-05-11"],
    [15828, "人未来，花先到！", "2016-05-10"],
    [15809, "我已长大，你们还未老!", "2016-05-09"],
    [15787, "爱情最好的状态：陪你虚度所有时光", "2016-05-06"],
    [15778, "今天是您18岁的第34个春夏之交", "2016-05-04"],
    [15676, "友情无价，你是我买不到的奢华！", "2016-04-26"],
    [15633, "谢谢你的蜂蜜和点心", "2016-04-22"],
    [15609, "我想带你在家的门口看阳光洒满天", "2016-04-21"],
    [15604, "你在我心中便是我的紫霞仙子", "2016-04-21"],
    [15597, "你是我的紫霞仙子", "2016-04-21"],
    [15569, "爱你情不自禁，句句为真言", "2016-04-20"],
    [15535, "我想和你虚度时光", "2016-04-19"],
    [15532, "你说你喜欢太阳花", "2016-04-19"],
    [15499, "让我们一脚板把烦恼送家去", "2016-04-18"],
    [15479, "调动你的脂肪和思想", "2016-04-15"],
    [15436, "从你呱呱落地，你已注定属于我", "2016-04-13"],
    [15412, "你的照片越看越好看", "2016-04-12"],
    [15395, "老公：这是道歉花哦", "2016-04-11"],
    [15371, "透过生活进入生命", "2016-04-08"],
    [15354, "遇到你后才发现我的心是满的", "2016-04-07"],
    [15337, "心动不是恋爱，心定才是", "2016-04-06"],
    [15326, "十年北漂，十年风雨", "2016-04-06"],
    [15314, "有个人在随时待命", "2016-04-05"],
    [15299, "协同大黑牛&宋仲基&鹿晗敬上", "2016-04-01"],
    [15280, "我不在的时候少露腰", "2016-03-31"],
    [15261, "你梦的晚上却是我心的白天", "2016-03-30"],
    [15244, "感谢你容忍这么不浪漫的我", "2016-03-29"],
    [15225, "遇到美丽风景就要好好看", "2016-03-28"],
    [15204, "你的第11位男朋友献上", "2016-03-25"],
    [15181, "我不会让你再多掉一滴眼泪", "2016-03-24"],
    [15146, "最不容置疑地站在你身边", "2016-03-22"],
    [15127, "我只想流浪在有你的方向", "2016-03-21"],
    [15109, "做我的女朋友吧！", "2016-03-18"],
    [15108, "怎么日子一久，你就停在了我心头？", "2016-03-18"],
    [15084, "悲伤从来都不会有答案", "2016-03-17"],
    [15064, "让你体验一把女生送花的感觉", "2016-03-16"],
    [15043, "好多事情我真不是说说而已", "2016-03-15"],
    [15029, "夏天的冰淇淋，冬天的大衣，和这世上的你", "2016-03-14"],
    [15009, "从未遇过如此明媚的女子", "2016-03-11"],
    [15008, "当把你拥入怀中总是融化了心", "2016-03-11"],
    [14988, "我愿意是荒林，勇敢地作战", "2016-03-10"],
    [14978, "我都会站在你看得见我的地方", "2016-03-10"],
    [14964, "日子不管好与坏，心情舒畅最重要！", "2016-03-09"],
    [14960, "女神经们给女神的祝福", "2016-03-09"],
    [14947, "怀孕后才知道妈妈的不容易", "2016-03-08"],
    [14936, "我愿化作星辰，陪伴宝宝每一个夜晚", "2016-03-07"],
    [14921, "对不起，让你爱上最不浪漫的人", "2016-03-04"],
    [14894, "要是偶尔打喷嚏，那就代表我想你", "2016-03-02"],
    [14889, "用一捧鲜花证明我不变的心！", "2016-03-02"],
    [14872, "即便不知如何哄，也会去想怎样宠", "2016-03-01"],
    [14871, "你就像一本书，请允许我细细地阅读", "2016-03-01"],
    [14855, "最浪漫的是和你一起慢慢变胖", "2016-02-29"],
    [14849, "幸福不是简单的相依", "2016-02-29"],
    [14811, "100天只是我们的起点", "2016-02-26"],
    [14786, "缘分天注定，恰好你未嫁，我未娶", "2016-02-25"],
    [14781, "我想没有比我更合适的了", "2016-02-25"],
    [14750, "你不会知道，我有多满足", "2016-02-24"],
    [14739, "凡走过必留下令人难忘的香气！", "2016-02-24"],
    [14718, "给你积攒着的爱", "2016-02-23"],
    [14681, "纸短情长，谢谢你这十年的陪伴！", "2016-02-22"],
    [14671, "如果美丽也是一种罪", "2016-02-22"],
    [14630, "如果美丽是一种罪， 你已经罪恶滔天 ！", "2016-02-18"],
    [14626, "原来爱只需一个moment", "2016-02-18"],
    [14601, "红玫瑰早已缀满了你的窗台！", "2016-02-17"],
    [14597, "做一杯清澈的白开水", "2016-02-17"],
    [14583, "上天把你交到我手上，就是对其它男性的不公平", "2016-02-16"],
    [14568, "对你的在乎偶尔堵车，但从未缺席", "2016-02-15"],
    [14557, "和你在一起，每天都是情人节！", "2016-02-15"],
    [14496, "看到这束伊人如梦，想到了美好的你！", "2016-02-04"],
    [14491, "你是一个坚强的战士！", "2016-02-03"],
    [14467, "愿你如栀子花沐浴在阳光里", "2016-02-02"],
    [14464, "2016年多多happy，少少angry，有更多的money，好好做我和儿子的honey", "2016-02-02"],
    [14425, "没有克服不了的困域，只有闯不过心魔！", "2016-02-01"],
    [14403, "你说你喜欢向日葵", "2016-01-29"],
    [14373, "愿你是最亮的星", "2016-01-29"],
    [14363, "我们因花草结缘", "2016-01-28"],
    [14330, "邀请你登上这只简陋但幸福的小船！", "2016-01-27"],
    [14319, "长这么大第一次给人订花", "2016-01-27"],
    [14305, "我的情人节里没有情人", "2016-01-26"],
    [14302, "所谓幸福，就是有一个深爱你的家", "2016-01-25"],
    [14298, "美好的花，送给花样年华的你", "2016-01-25"],
    [14273, "小熊有点像我，可以随时陪你", "2016-01-22"],
    [14266, "掐指一计，距相识略约十六载", "2016-01-21"],
    [14257, "所有花里满天星最特别", "2016-01-21"],
    [14232, "我想和你虚度时光", "2016-01-20"],
    [14222, "我的思念是无家可归的浪子", "2016-01-20"],
    [14206, "99枝红玫瑰，爱你天长地久", "2016-01-19"],
    [14200, "一辈子是长长的旅行", "2016-01-19"],
    [14181, "婚姻就是真实的生活", "2016-01-18"],
    [14172, "择一城终老，遇一人白首", "2016-01-18"],
    [14132, "你说你是刺猬，那么我就做海绵", "2016-01-14"],
    [14112, "想送你12朵玫瑰，代表你是我最珍贵", "2016-01-13"],
    [14094, "好想早点把你娶回家", "2016-01-13"],
    [14074, "我和孩子爸爸梦寐以求的事", "2016-01-12"],
    [14057, "不要挣扎啦，你就从了本爷吧！", "2016-01-11"],
    [14042, "漫天星星都是我注视你的眼睛", "2016-01-11"],
    [14031, "宁可孤单，也不违心。宁可抱憾，也不将就。", "2016-01-08"],
    [14030, "跟我走吧，刘小姐", "2016-01-08"],
    [14009, "亲爱的老公，我送你花", "2016-01-07"],
    [13991, "惟愿夫人心情好，相公今生立誓牍", "2016-01-07"],
    [13977, "写再多的字也无非是想告诉你——我爱你", "2016-01-06"],
    [13948, "你只要负责幸福就好", "2016-01-05"],
    [13939, "让你成为第二幸福的人", "2016-01-05"],
    [13931, "我对爱的定义", "2016-01-04"],
    [13921, "我很爱你，只是不善于表达", "2016-01-04"],
    [13906, "认真的看时间走完，幸福的走到终点", "2015-12-31"],
    [13898, "不需理由，没有前因，无关风月，只为真心", "2015-12-31"],
    [13886, "花香指引我找到你", "2015-12-30"],
    [13874, "5201314", "2015-12-29"],
    [13865, "我们还有很长的road要走", "2015-12-29"],
    [13861, "他会向你证明世间所谓的永恒是存在的", "2015-12-28"],
    [13853, "我们喜欢你小伙砸", "2015-12-28"],
    [13850, "You are my sunshine", "2015-12-25"],
    [13848, "整个世界都在我身上", "2015-12-25"],
    [13836, "Merry Christmas，不变的心", "2015-12-24"],
    [13835, "热恋时刻最任性", "2015-12-24"],
    [13827, "圣诞来临之际，我又老套的给你送花了", "2015-12-23"],
    [13820, "相信我再不会让你流泪", "2015-12-23"],
    [13817, "我们的爱如冬至日", "2015-12-22"],
    [13810, "我的心上人，所有的花朵都比不上你的发香", "2015-12-21"],
    [13796, "您是我心中永远的姹紫，永远18！", "2015-12-18"],
    [13785, "对你表白，那爱的火焰在内心燃烧！", "2015-12-17"],
    [13758, "爱的越真，心越清纯，情越质朴！", "2015-12-15"],
    [13755, "你不要太有气质了", "2015-12-15"],
    [13736, "如果有下一次送花会是求婚的时候", "2015-12-14"],
    [13731, "倘若我不再为谁而活", "2015-12-14"],
    [13712, "欠你那么多的幸福，这辈子慢慢还吧！", "2015-12-11"],
    [13704, "你的笑声改变我疲惫的心灵", "2015-12-11"],
    [13681, "一次就好，我带你去看天荒地老！", "2015-12-10"],
    [13671, "别老吃榴莲，给你点香的", "2015-12-10"],
    [13658, "7年了我一点都不痒", "2015-12-09"],
    [13653, "美好的花，送给花样年华的你", "2015-12-09"],
    [13631, "你是我心中落入凡间的天使", "2015-12-08"],
    [13626, "可不闻不问不见，却不能不思不想不念", "2015-12-08"],
    [13607, "不为别的，只因想起你的笑", "2015-12-07"],
    [13604, "那个，心情好点没？", "2015-12-07"],
    [13583, "禁闭2周了，能先把138和130从小黑屋放出来吗？", "2015-12-04"],
    [13575, "有花盒，不会让你太紧张", "2015-12-04"],
    [13552, "斯人若彩虹，遇上方知有", "2015-12-03"],
    [13551, "爱情的种子没有在寒冬中夭折", "2015-12-03"],
    [13528, "在别人眼里，你还只是我姐呢", "2015-12-02"],
    [13526, "为了美丽如你，逗比如我的猴子", "2015-12-02"],
    [13500, "抱着花拍张最开心的相片!", "2015-12-01"],
    [13496, "做个思想上的女流氓", "2015-12-01"],
    [13479, "我是一个兵，我给你的别人得不到！", "2015-11-30"],
    [13455, "这辈子第一次送男生鲜花", "2015-11-27"],
    [13442, "感恩节贺卡留言集锦，感动瞬间，感动你我", "2015-11-26"],
    [13416, "我的玫瑰花只送一个人", "2015-11-25"],
    [13406, "花木有价，卿本无价", "2015-11-24"],
    [13391, "最后一次和你有交集了", "2015-11-23"],
    [13387, "希望跟你过接下来的2万天", "2015-11-23"],
    [13372, "天津之眼上的红蜻蜓", "2015-11-20"],
    [13347, "七年不是浪漫爱情的结束，而是幸福生活的开始！", "2015-11-19"],
    [13344, "我的世界就是阴天，呼吸都不自然", "2015-11-19"],
    [13332, "你，那么热烈地开在我的生命里", "2015-11-18"],
    [13329, "我爱太阳、月亮还有你", "2015-11-18"],
    [13311, "终于学会送花了，孩儿他爸", "2015-11-17"],
    [13307, "盈盈今日天如水，恋恋当年水似天", "2015-11-17"],
    [13288, "你都在，我也在", "2015-11-16"],
    [13277, "远方的风景，不再是我的追求", "2015-11-13"],
    [13234, "11.11.11我把你娶回了家", "2015-11-11"],
    [13231, "常会走音惹你笑", "2015-11-11"],
    [13218, "疲惫不已的心，终于愿意停靠。", "2015-11-10"],
    [13216, "我们一起通过各种考验开心的走下去！", "2015-11-10"],
    [13215, "我们“满月”了", "2015-11-10"],
    [13199, "冬天听了会倍感温暖的话", "2015-11-09"],
    [13181, "冬天冷，我要让你沐浴在春天里", "2015-11-06"],
    [13178, "我的大男神，生日快乐！", "2015-11-06"],
    [13161, "愿我们的果实健康成长", "2015-11-05"],
    [13155, "愿忆经年时，坐看云起日落", "2015-11-05"],
    [13127, "拥有你20年是迄今最大的收获！", "2015-11-04"],
    [13126, "你有没有后悔？以为自己找了一只可爱的迷你猪", "2015-11-04"],
    [13125, "无关任何纪念日，只想说出我爱你", "2015-11-04"],
    [13084, "最好的感情，是共同成长", "2015-11-02"],
    [13083, "我用真心来配你", "2015-11-02"],
    [13070, "有你，才有我的世界", "2015-10-30"],
    [13068, "爱上星星上的一朵花", "2015-10-30"],
    [13030, "温暖整个冬季", "2015-10-29"],
    [13027, "你我北大校园初见", "2015-10-29"],
    [12975, "无招胜有招", "2015-10-28"],
    [12948, "美女身边从不缺少追求者", "2015-10-27"],
    [12927, "思念，是你送我的礼物", "2015-10-26"],
    [12907, "此生只愿专职爱你", "2015-10-26"],
    [12903, "别以为漂亮就可以拒绝我的邀请", "2015-10-26"],
    [12889, "倾尽21克的灵魂", "2015-10-23"],
    [12869, "萌化了，大个子叔叔我真的真的很爱你哟！", "2015-10-23"],
    [12857, "如何映衬你的美？", "2015-10-22"],
    [12834, "真正的朋友，虽不常联系，但不曾疏远", "2015-10-22"],
    [12824, "愿玫瑰火焰，将不开心统统烧掉", "2015-10-21"],
    [12817, "奶奶，告诉您一个小秘密", "2015-10-21"],
    [12810, "怕别人照顾不好你", "2015-10-20"],
    [12793, "总有太多来不及，爱也会打烊", "2015-10-20"],
    [12779, "我真不该那样对你", "2015-10-19"],
    [12778, "简单爱，十分爱", "2015-10-19"],
    [12767, "打今儿起正儿八经地追求你", "2015-10-16"],
    [12763, "所有女澡堂免费向你开放", "2015-10-15"],
    [12752, "没有小确幸，人生不过是沙漠", "2015-10-14"],
    [12736, "8年送花99束，神一样的花礼网客户", "2015-10-14"],
    [12734, "吴奇隆领证获赠hua.com花", "2015-10-14"],
    [12710, "一如我对你的心", "2015-10-10"],
    [12681, "没有你的天，不蓝", "2015-09-30"],
    [12679, "隔着半个地球给你送花", "2015-09-29"],
    [12655, "我是你的哈巴狗，汪汪汪", "2015-09-28"],
    [12631, "给你XXXL LOVE", "2015-09-25"],
    [12610, "给你老公炫一下我送的玫瑰花", "2015-09-23"],
    [12606, "再没人能走进我生命里", "2015-09-22"],
    [12588, "你又说我瞎买东西", "2015-09-18"],
    [12560, "不用苦苦地想你，也不必酸酸地恋你", "2015-09-11"],
    [12556, "老师的影响力是永恒的", "2015-09-10"],
    [12544, "祝你早日过上性福生活", "2015-09-09"],
    [12538, "5年前你与一个穷小子走到一起", "2015-09-08"],
    [12533, "迟到的鲜花，新的开始", "2015-09-07"],
    [12529, "节日之后必有忧郁", "2015-09-06"],
    [12525, "大活人是不能邮寄的", "2015-09-02"],
    [12521, "谢谢你，让我一夜长大", "2015-09-01"],
    [12517, "玫瑰有刺却依然让人奋不顾身", "2015-08-31"],
    [12513, "遇见你，用尽我一生的运气", "2015-08-28"],
    [12509, "老老实实做我的小女人就好", "2015-08-27"],
    [12505, "我们遭遇过一些撕心裂肺的疼", "2015-08-26"],
    [12501, "担心花瓶孤单，买花来陪它", "2015-08-25"],
    [12494, "世界那么大，我带你去走走", "2015-08-24"],
    [12490, "奴才罪该万死，重要的事情说三遍", "2015-08-21"],
    [12486, "我爱的是你，不是你的优点", "2015-08-14"],
    [12482, "不听老婆言，吃亏在眼前", "2015-08-13"],
    [12478, "你是我夜空中最亮的星", "2015-08-12"],
    [12470, "我从不轻易说爱，你是例外", "2015-08-10"],
    [12466, "结婚三年皮革婚", "2015-08-07"],
    [12462, "据说是男朋友送给你的", "2015-08-06"],
    [12457, "你的身影，在我心上曝光", "2015-08-05"],
    [12452, "还没闯出一片天", "2015-08-04"],
    [12447, "不说爱你，怕唐突你", "2015-08-03"],
    [12443, "对你说一载一载的生日快乐", "2015-07-31"],
    [12438, "老婆，我就像这只幸运的小猪", "2015-07-30"],
    [12437, "爱是成年人的勇敢", "2015-07-29"],
    [12433, "搭上幸福摩天轮，哪里都是美景", "2015-07-28"],
    [12428, "没你掌权，天气都要造反", "2015-07-27"],
    [12426, "幸福，可以一点一点攒起来", "2015-07-26"],
    [12421, "原谅我无力送你男票", "2015-07-24"],
    [12418, "要是送满999束花，你就嫁给我吧！", "2015-07-23"],
    [12415, "我欲搅乱银河水，为你洒落满天星", "2015-07-22"],
    [12411, "老婆，约么？", "2015-07-21"],
    [12406, "喝进去的水化为手心里的汗", "2015-07-20"],
    [12402, "一个你一个我，一生一世", "2015-07-19"],
    [12398, "这些年，我们都很拼", "2015-07-17"],
    [12395, "前台美女看过来", "2015-07-16"],
    [12392, "我是飞镖你是靶", "2015-07-15"],
    [12388, "饿瘦了揍你哈！", "2015-07-14"],
    [12381, "与你共度，每一个清晨和黄昏", "2015-07-12"],
    [12376, "十八岁给我一个姑娘", "2015-07-10"],
    [12373, "生快，快生", "2015-07-09"],
    [12370, "可能是最好的祝福语", "2015-07-08"],
    [12366, "你的身影已和我的生活融合", "2015-07-07"],
    [12363, "余生请多多指教", "2015-07-06"],
    [12359, "遇到你之前，世界是一片荒原", "2015-07-05"],
    [12354, "感动哭时浇浇花", "2015-07-03"],
    [12351, "小腊肉与小棉袄", "2015-07-02"],
    [12348, "祝你入职快乐", "2015-07-01"],
    [12345, "有你的每一秒都是浪漫的", "2015-06-30"],
    [12340, "第七年你把我娶回了家", "2015-06-29"],
    [12335, "一半沐浴阳光，一半洒落思念", "2015-06-28"],
    [12331, "原来我已无法爱上别人", "2015-06-26"],
    [12328, "如果你今天微笑99次", "2015-06-25"],
    [12325, "一句老婆，我想对你喊一辈子", "2015-06-24"],
    [12322, "不管你有多肥，你的身边一定有我", "2015-06-23"],
    [12319, "不说天长地久，不说海誓山盟", "2015-06-22"],
    [12309, "拉着你的手，迎着风走", "2015-06-19"],
    [12303, "晚上吃烤鱼去", "2015-06-17"],
    [12298, "带着坚定的爱情，来守护你的心", "2015-06-14"],
    [12293, "既然钟情玫瑰，就勇敢吐露真诚", "2015-06-12"],
    [12289, "只许胖，不许瘦", "2015-06-11"],
    [12283, "千斤的幸福压在你们身上", "2015-06-10"],
    [12282, "结婚是因为我很爱一个人", "2015-06-10"],
    [12279, "爱情像糖葫芦，婚姻像麻辣烫", "2015-06-08"],
    [12275, "遇见你，是我此生最大的幸福", "2015-06-07"],
    [12271, "你悄悄走进我心，再也没有出去", "2015-06-05"],
    [12268, "康乃馨的褶皱", "2015-06-04"]
  ];
  for (var elem of arr) {
    str += `<li><a href="/profile/${elem[0]}.html" target="_blank">${elem[1]}</a><span>${elem[2]}</span></li>`;
  }
  gdsj.html(str);
})();

