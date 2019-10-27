var _html = (element, arr) => {
  var ul = document.querySelector(element);
  for (var elem of arr) {
    ul.innerHTML += `<li><a target="_blank" href="${elem[0]}">${elem[1]}</a></li>`;
  }
}
(() => {
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
  _html(".dropdown-menu>ul.list-inline:nth-child(2)", arr);
})();
(() => {
  var arr = [
    ["/yongshenghua/yongshenghua_box.html", "经典花盒"],
    ["/yongshenghua/yongshenghua_large.html", "巨型玫瑰"],
    ["/yongshenghua/yongshenghua_lavender.html", "薰衣草"]
  ];
  _html(".dropdown-menu>ul.list-inline:nth-child(4)", arr);
})();
(() => {
  var arr = [
    ["/", "首页"],
    ["/flower/", "鲜花"],
    ["/yongshenghua/", "永生花"],
    ["/huayu/", "花语大全"]
  ];
  _html("nav .nav", arr);
})();
(() => {
  var arr = [
    ["font-size:16px;font-weight:bold;color: #494949;", "企业愿景", "font-size:12px;font-weight:normal", "COMPANY VISION", "font-size:16px;color: #494949;", "成为最受尊敬的鲜花礼品互联网平台", ""],
    ["font-size:16px;font-weight:bold", "企业使命", "font-size:12px;font-weight:normal", "COMPANY MISSION", "font-size:16px;", "提升国人幸福感", ""],
    ["font-size:16px;font-weight:bold", "企业价值观", "font-size:12px;font-weight:normal", "COMPANY VALUES", "font-size:16px;", "务实&nbsp;·&nbsp;进取&nbsp;·&nbsp;创新", "企业文化是企业的核心竞争力； 资源可以枯竭，文化可以使企业之树长青； 用优秀的文化整合团队。"]
  ];
  var culture = document.querySelectorAll(".container .article>div");
  for (var i = 0; i < arr.length; i++) {
    culture[i].innerHTML += `
    <p style="${arr[i][0]}">${arr[i][1]}&nbsp;<span style="${arr[i][2]}">${arr[i][3]}</span></p>
    <p style="${arr[i][4]}">${arr[i][5]}</p>
    <p>${arr[i][6]}</p>
    `;
  }
  console.log(culture.length);
  var div = culture[3].querySelectorAll("div");
  console.log(div.length);
  var div_arr = [
    ["务实",
      ["诚实正直，言行一致"],
      ["正确安排工作优先级，优化流程，以结果为导向"],
      ["重视细节，精益求精"],
      ["踏实专注，上班只做工作有关的事情"],
      ["勇于承认错误，敢于承担责任，并及时改正"]
    ],
    ["进取",
      ["尽职尽责，高效执行，今天的事情不推到明天"],
      ["重视协作，积极付出，勇于承担"],
      ["主动融入团队，有主人翁意识，正面积极影响团队"],
      ["学习型组织，每天都在进步 "]
    ],
    ["创新",
      ["开放心态，合理评估不同观点的价值"],
      ["以用户为中心，重视着眼于用户需求的微创新"],
      ["快速创新，在试错中不断完善产品和服务"],
      ["精心策划的创新，结果失败的也要鼓励"],
      ["好创意不问出处 "]
    ]
  ];
  
  for (var i = 0; i < div_arr.length; i++) {
    var str = "";
    str += `
    <h4><strong>${div_arr[i][0]}</strong></h4>
    <p>`;
    for (var j = 1; j < div_arr[i].length; j++) {
      str += `&middot;&nbsp;${div_arr[i][j]}<br>`;
    }
    div[i].innerHTML = str + "</p>"
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
