!function (l) {
  function e(e) {
    for (var t, n, a = e[0], o = e[1], i = e[2], r = 0, c = []; r < a.length; r++)
      n = a[r], Object.prototype.hasOwnProperty.call(d, n) && d[n] && c.push(d[n][0]), d[n] = 0; for (t in o)
      Object.prototype.hasOwnProperty.call(o, t) && (l[t] = o[t]); for (p && p(e); c.length;)
      c.shift()(); return u.push.apply(u, i || []), s();
  } function s() {
    for (var e, t = 0; t < u.length; t++) {
      for (var n = u[t], a = !0, o = 1; o < n.length; o++) {
        var i = n[o];
        0 !== d[i] && (a = !1);
      }
      a && (u.splice(t--, 1), e = r(r.s = n[0]));
    } return e;
  } var n = {}, d = { 0: 0 }, u = []; function r(e) {
    if (n[e])
      return n[e].exports; var t = n[e] = { i: e, l: !1, exports: {} }; return l[e].call(t.exports, t, t.exports, r), t.l = !0, t.exports;
  } r.m = l, r.c = n, r.d = function (e, t, n) { r.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: n }); }, r.r = function (e) { "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(e, "__esModule", { value: !0 }); }, r.t = function (t, e) {
    if (1 & e && (t = r(t)), 8 & e)
      return t; if (4 & e && "object" == typeof t && t && t.__esModule)
      return t; var n = Object.create(null); if (r.r(n), Object.defineProperty(n, "default", { enumerable: !0, value: t }), 2 & e && "string" != typeof t)
      for (var a in t)
        r.d(n, a, function (e) { return t[e]; }.bind(null, a)); return n;
  }, r.n = function (e) { var t = e && e.__esModule ? function () { return e.default; } : function () { return e; }; return r.d(t, "a", t), t; }, r.o = function (e, t) { return Object.prototype.hasOwnProperty.call(e, t); }, r.p = "https://static.meiqia.com/widget/"; var t = window.webpackJsonp = window.webpackJsonp || [], a = t.push.bind(t); t.push = e, t = t.slice(); for (var o = 0; o < t.length; o++)
    e(t[o]); var p = a; u.push([478, 1]), s();
}({
  124: function (e, t, n) { e.exports = n.p + "static/photo-sending.png"; }, 181: function (e, t, n) { e.exports = n.p + "static/default-avatar.jpg"; }, 236: function (e, t, n) { e.exports = n.p + "static/photo-fail.png"; }, 450: function (e) { e.exports = JSON.parse('{"点击问题或回复数字查看答案":"Select the question or reply the number to get solve your problem.","给我们留言":"Leave us a message","分类":"Classification","姓名":"Name","手机":"Phone number","邮箱":"Email","微信":"WeChat","QQ":"QQ","联系人":"Contact","性别":"gender","年龄":"age","电话":"phone","微博":"Weibo","地址":"address","备注":"Remarks","留言内容":"Message","请输入":"Please enter","验证码":"Verification Code","点击更换":"Click Replace","提交":"Submit","留言成功":"Message sent successful","我们会尽快联系你":"We will contact you as soon as possible","关闭":"Close","再次留言":"Leave us a message again","发送":"Send","对方输入消息中...":"The other party enters the message...","连接中...":"Connecting...","对话已结束，您可以<1>开始新的对话</1>或<3>留言</3>":"Conversation has ended, do you wish to <1>continue</1>or to<3>leave a message</3>?","你被移出了黑名单":"You are removed from the blacklist","表情":"Emoji","发送图片":"Picture","发送文件":"File","评价":"Service evaluation","好评":"Satisfied","中评":"Normal","差评":"Dissatisfied","请填写评价内容（选填）":"Please fill in the  evaluation(selectivity)","你给出了":"You are given","下载":"Download","接下来由<1>{{name}}</1>为您服务":"Next by the <1>{{name}}</1> to serve you","客服软件由美洽提供":"Customer service software provided by the Meiqia","转人工":"Change Live Support","免费通话":"Free calls","欢迎使用完全免费的网页回呼与我们通话":"Welcome to the free web page call back to us","请输入你的电话号码":"Please enter your phone number","开始免费通话":"Start a free call","请保持电话畅通，客服人员即将致电":"Please keep the phone open, customer service is about to call","你将接到「010-52729285」的来电":"You will receive an 「010-52729285」 call","询前表单":"Inquiry","获取验证码失败":"Failed to get verification code","加载历史消息":"Load History messages","加载更多历史消息":"Loads more history messages","没有更多了":"No more","加载中...":"Loading...","排队失败，请刷新重试":"Queuing failed. Please refresh and try again","抱歉没能理解您的提问，可选择":"Sorry to fail to understand your question","留言":"message","评价失败，请稍后重试":"Evaluation failed. Please try again later","美洽客服消息":"Meiqia customer service news","管理员":"administrator","[推广消息]":"[Promotion message]","「发来了一个文件」":"「Sent a file」","「发来了一张图片」":"「Sent a picture」","新消息":"New message","粘贴图片失败，请用「图片按钮」上传图片":"Paste picture failed. Please use picture button to upload picture","排队等待中...":"Waiting","正在为您转接，请稍候..":"Please Wait, Turning to Live Support","小时":"Hours","分钟":"Minutes","秒":"Seconds","网络错误，请稍后重试":"Network error. Please try again later","请控制":"Please control","在1到100个字符":"in 1 to 100 characters","请填写必填字段":"required ","请选择":"please choose","请输入验证码":"enter verification code","加载询前表单失败，请稍后重试":"Failed to load pre-query form. Please try again later","连接已断开，请刷新页面":"Network connection error. Please refresh your page and try again.","很抱歉您对此回答不满意":"Dissatisfaction","提交失败，请稍候再试":"Failed to submit. Please try again later","请正确填写手机或带区号的座机号码":"Please fill in the correct mobile phone number","请正确填写验证码":"Please fill in the correct verification code","请选择分类":"please select a type","请正确填写姓名":"Please fill in the name correctly","请正确填写手机号":"Please fill in the mobile phone number correctly","请正确填写联系邮箱":"Please fill in the email correctly","请正确填写微信":"Please fill in the weChat correctly","请正确填写QQ":"Please fill in the QQ correctly","请至少填写一项联系方式":"Please fill in at least one contact information","请保持留言内容在 1～1024 字符内":"Please keep the message in 1 ~ 1024 characters","留言失败，请稍候再试":"Message failed. Please try again later","取消上传":"Cancel upload","上传失败":"Upload failed","上传成功":"Uploaded successfully","只能发送图片哦":"Can only send pictures","只能发送小于 50MB 的文件哦":"Can only send less than 50MB of documents","最多只能发送 2048 个字符哦":"Up to only 2048 characters can be sent","请选择评价等级":"Please select rating","最多只能发送 30 个字符哦":"Up to 30 characters can be sent","抱歉，客服系统暂时无法使用":"Sorry, Service unavailable","当前等待人数":"Number of visitors waiting","如果等不及，可以选择":"Don’t want to wait? Leave us a message.","上传中":"Uploading","已过期":"Expired","{{expireTime}}后过期":"Expires after {{expireTime}}","解决":"Solve","未解决":"Unsolve","提交中":"Submit","已反馈":"Feedback","服务连接中，请稍候…":"Service connecting, please wait...","请至少填写一项":"Please fill in at least one item","您已成功提交":"You have successfully submitted"}'); }, 451: function (e) { e.exports = JSON.parse('{"点击问题或回复数字查看答案":"點擊問題或回覆數字查看答案","给我们留言":"給我們留言","分类":"分類","姓名":"姓名","手机":"手機","邮箱":"郵箱","微信":"微信","QQ":"QQ","联系人":"聯繫人","性别":"性別","年龄":"年齡","电话":"電話","微博":"微博","地址":"地址","备注":"備註","留言内容":"留言內容","请输入":"請輸入","验证码":"驗證碼","点击更换":"點擊更換","提交":"提交","留言成功":"留言成功","我们会尽快联系你":"我們會盡快聯繫你","关闭":"關閉","再次留言":"再次留言","发送":"發送","对方输入消息中...":"對方輸入消息中...","连接中...":"連接中...","对话已结束，您可以<1>开始新的对话</1>或<3>留言</3>":"對話已結束，您可以<1>開始新的對話</1>或<3>留言</3>","你被移出了黑名单":"你被移出了黑名單","表情":"表情","发送图片":"發送圖片","发送文件":"發送文件","评价":"評價","好评":"好評","中评":"中評","差评":"差評","请填写评价内容（选填）":"請填寫評價內容（選填）","你给出了":"你給出了","下载":"下載","接下来由<1>{{name}}</1>为您服务":"接下來由<1>{{name}}</1>為您服務","客服软件由美洽提供":"客服系統由美洽提供","转人工":"轉人工","免费通话":"免費通話","欢迎使用完全免费的网页回呼与我们通话":"歡迎使用完全免費的網頁回呼與我們通話","请输入你的电话号码":"請輸入你的電話號碼","开始免费通话":"開始免費通話","请保持电话畅通，客服人员即将致电":"請保持電話暢通，客服人員即將致電","你将接到「010-52729285」的来电":"你將接到「010-52729285」的來電","询前表单":"詢前表單","获取验证码失败":"獲取驗證碼失敗","加载历史消息":"載入歷史消息","加载更多历史消息":"載入更多歷史消息","没有更多了":"沒有更多了","加载中...":"加載中...","排队失败，请刷新重试":"排隊失敗，請刷新重試","抱歉没能理解您的提问，可选择":"抱歉沒能理解您的提問，可選擇","留言":"留言","评价失败，请稍后重试":"評價失敗，請稍後重試","美洽客服消息":"美洽客服消息","管理员":"管理員","[推广消息]":"[推廣消息]","「发来了一个文件」":"「發來了一個文件」","「发来了一张图片」":"「發來了一張圖片」","新消息":"新消息","粘贴图片失败，请用「图片按钮」上传图片":"粘貼圖片失敗，請用「圖片按鈕」上傳圖片","排队等待中...":"排隊等待中...","正在为您转接，请稍候..":"正在為您轉接，請稍候..","小时":"小時","分钟":"分鐘","秒":"秒","网络错误，请稍后重试":"網絡錯誤，請稍後重試","请控制":"請控制","在1到100个字符":"在1到100個字符","请填写必填字段":"請填寫必填字段","请选择":"請選擇","请输入验证码":"請輸入驗證碼","加载询前表单失败，请稍后重试":"加載詢前表單失敗，請稍後重試","连接已断开，请刷新页面":"連接已斷開，請刷新頁面","很抱歉您对此回答不满意":"很抱歉您對此回答不滿意","提交失败，请稍候再试":"提交失敗，請稍候再試","请正确填写手机或带区号的座机号码":"請正確填寫手機或帶區號的座機號碼","请正确填写验证码":"請正確填寫驗證碼","请选择分类":"請選擇分類","请正确填写姓名":"請正確填寫姓名","请正确填写手机号":"請正確填寫手機號","请正确填写联系邮箱":"請正確填寫聯繫郵箱","请正确填写微信":"請正確填寫微信","请正确填写QQ":"請正確填寫QQ","请至少填写一项联系方式":"請至少填寫一項聯繫方式","请保持留言内容在 1～1024 字符内":"請保持留言內容在 1～1024 字符內","留言失败，请稍候再试":"留言失敗，請稍候再試","取消上传":"取消上傳","上传失败":"上傳失敗","上传成功":"上傳成功","只能发送图片哦":"只能發送圖片哦","只能发送小于 50MB 的文件哦":"只能發送小於 50MB 的文件哦","最多只能发送 2048 个字符哦":"最多隻能發送 2048 個字符哦","请选择评价等级":"請選擇評價等級","最多只能发送 30 个字符哦":"最多隻能發送 30 個字符哦","抱歉，客服系统暂时无法使用":"抱歉，客服系統暫時無法使用","当前等待人数":"當前等待人數","如果等不及，可以选择":"如果等不及，可以選擇","上传中":"上傳中","已过期":"已過期","{{expireTime}}后过期":"{{expireTime}}後過期","解决":"解决","未解决":"未解决","提交中":"提交中","已反馈":"已反饋","服务连接中，请稍候…":"服務連接中，請稍候..","请至少填写一项":"請至少填寫一項","您已成功提交":"您已成功提交"}'); }, 452: function (e) { e.exports = JSON.parse('{"点击问题或回复数字查看答案":"点击问题或回复数字查看答案","给我们留言":"给我们留言","分类":"分类","姓名":"姓名","手机":"手机","邮箱":"邮箱","微信":"微信","QQ":"QQ","联系人":"联系人","性别":"性别","年龄":"年龄","电话":"电话","微博":"微博","地址":"地址","备注":"备注","留言内容":"留言内容","请输入":"请输入","验证码":"验证码","点击更换":"点击更换","提交":"提交","留言成功":"留言成功","我们会尽快联系你":"我们会尽快联系你","关闭":"关闭","再次留言":"再次留言","发送":"发送","对方输入消息中...":"对方输入消息中...","连接中...":"连接中...","对话已结束，您可以<1>开始新的对话</1>或<3>留言</3>":"对话已结束，您可以<1>开始新的对话</1>或<3>留言</3>","你被移出了黑名单":"你被移出了黑名单","表情":"表情","发送图片":"发送图片","发送文件":"发送文件","评价":"评价","好评":"好评","中评":"中评","差评":"差评","请填写评价内容（选填）":"请填写评价内容（选填）","你给出了":"你给出了","下载":"下载","接下来由<1>{{name}}</1>为您服务":"接下来由<1>{{name}}</1>为您服务","客服软件由美洽提供":"客服软件由美洽提供","转人工":"转人工","免费通话":"免费通话","欢迎使用完全免费的网页回呼与我们通话":"欢迎使用完全免费的网页回呼与我们通话","请输入你的电话号码":"请输入你的电话号码","开始免费通话":"开始免费通话","请保持电话畅通，客服人员即将致电":"请保持电话畅通，客服人员即将致电","你将接到「010-52729285」的来电":"你将接到「010-52729285」的来电","询前表单":"询前表单","获取验证码失败":"获取验证码失败","加载历史消息":"加载历史消息","加载更多历史消息":"加载更多历史消息","没有更多了":"没有更多了","加载中...":"加载中...","排队失败，请刷新重试":"排队失败，请刷新重试","抱歉没能理解您的提问，可选择":"抱歉没能理解您的提问，可选择","留言":"留言","评价失败，请稍后重试":"评价失败，请稍后重试","美洽客服消息":"美洽客服消息","管理员":"管理员","[推广消息]":"[推广消息]","「发来了一个文件」":"「发来了一个文件」","「发来了一张图片」":"「发来了一张图片」","新消息":"新消息","粘贴图片失败，请用「图片按钮」上传图片":"粘贴图片失败，请用「图片按钮」上传图片","排队等待中...":"排队等待中...","正在为您转接，请稍候..":"正在为您转接，请稍候..","小时":"小时","分钟":"分钟","秒":"秒","网络错误，请稍后重试":"网络错误，请稍后重试","请控制":"请控制","在1到100个字符":"在1到100个字符","请填写必填字段":"请填写必填字段","请选择":"请选择","请输入验证码":"请输入验证码","加载询前表单失败，请稍后重试":"加载询前表单失败，请稍后重试","连接已断开，请刷新页面":"连接已断开，请刷新页面","很抱歉您对此回答不满意":"很抱歉您对此回答不满意","提交失败，请稍候再试":"提交失败，请稍候再试","请正确填写手机或带区号的座机号码":"请正确填写手机或带区号的座机号码","请正确填写验证码":"请正确填写验证码","请选择分类":"请选择分类","请正确填写姓名":"请正确填写姓名","请正确填写手机号":"请正确填写手机号","请正确填写联系邮箱":"请正确填写联系邮箱","请正确填写微信":"请正确填写微信","请正确填写QQ":"请正确填写QQ","请至少填写一项联系方式":"请至少填写一项联系方式","请保持留言内容在 1～1024 字符内":"请保持留言内容在 1～1024 字符内","留言失败，请稍候再试":"留言失败，请稍候再试","取消上传":"取消上传","上传失败":"上传失败","上传成功":"上传成功","只能发送图片哦":"只能发送图片哦","只能发送小于 50MB 的文件哦":"只能发送小于 50MB 的文件哦","最多只能发送 2048 个字符哦":"最多只能发送 2048 个字符哦","请选择评价等级":"请选择评价等级","最多只能发送 30 个字符哦":"最多只能发送 30 个字符哦","抱歉，客服系统暂时无法使用":"抱歉，客服系统暂时无法使用","当前等待人数":"当前等待人数","如果等不及，可以选择":"如果等不及，可以选择","上传中":"上传中","已过期":"已过期","{{expireTime}}后过期":"{{expireTime}}后过期","解决":"解决","未解决":"未解决","提交中":"提交中","已反馈":"已反馈","服务连接中，请稍候…":"服务连接中，请稍候…","请至少填写一项":"请至少填写一项","您已成功提交":"您已成功提交"}'); }, 459: function (e, t, n) { e.exports = n.p + "static/icon-desktop@2x.png"; }, 460: function (e, t, n) { e.exports = n.p + "static/icon-mobile@2x.png"; }, 461: function (e, t, n) { e.exports = n.p + "static/icon-mq-round@2x.png"; }, 466: function (e, t, n) { e.exports = n.p + "static/emoji@2x.png"; }, 468: function (e, t, n) { e.exports = n.p + "static/new-chat.ogg"; }, 469: function (e, t, n) { e.exports = n.p + "static/new-chat.mp3"; }, 470: function (e, t, n) { e.exports = n.p + "static/new-message.ogg"; }, 471: function (e, t, n) { e.exports = n.p + "static/new-message.mp3"; }, 472: function (e, t, n) { e.exports = n.p + "static/sent-message.ogg"; }, 473: function (e, t, n) { e.exports = n.p + "static/sent-message.mp3"; }, 474: function (e, t, n) { e.exports = n.p + "static/invite-bgi-2.png"; }, 475: function (e, t, n) { e.exports = n.p + "static/invite-bgi-3.png"; }, 476: function (e, t, n) { e.exports = n.p + "static/invite-bgi-4.png"; }, 478: function (e, t, n) { n(479), e.exports = n(799); }, 795: function (e, t, n) {
    var a = { "./af": 319, "./af.js": 319, "./ar": 320, "./ar-dz": 321, "./ar-dz.js": 321, "./ar-kw": 322, "./ar-kw.js": 322, "./ar-ly": 323, "./ar-ly.js": 323, "./ar-ma": 324, "./ar-ma.js": 324, "./ar-sa": 325, "./ar-sa.js": 325, "./ar-tn": 326, "./ar-tn.js": 326, "./ar.js": 320, "./az": 327, "./az.js": 327, "./be": 328, "./be.js": 328, "./bg": 329, "./bg.js": 329, "./bm": 330, "./bm.js": 330, "./bn": 331, "./bn.js": 331, "./bo": 332, "./bo.js": 332, "./br": 333, "./br.js": 333, "./bs": 334, "./bs.js": 334, "./ca": 335, "./ca.js": 335, "./cs": 336, "./cs.js": 336, "./cv": 337, "./cv.js": 337, "./cy": 338, "./cy.js": 338, "./da": 339, "./da.js": 339, "./de": 340, "./de-at": 341, "./de-at.js": 341, "./de-ch": 342, "./de-ch.js": 342, "./de.js": 340, "./dv": 343, "./dv.js": 343, "./el": 344, "./el.js": 344, "./en-SG": 345, "./en-SG.js": 345, "./en-au": 346, "./en-au.js": 346, "./en-ca": 347, "./en-ca.js": 347, "./en-gb": 348, "./en-gb.js": 348, "./en-ie": 349, "./en-ie.js": 349, "./en-il": 350, "./en-il.js": 350, "./en-nz": 351, "./en-nz.js": 351, "./eo": 352, "./eo.js": 352, "./es": 353, "./es-do": 354, "./es-do.js": 354, "./es-us": 355, "./es-us.js": 355, "./es.js": 353, "./et": 356, "./et.js": 356, "./eu": 357, "./eu.js": 357, "./fa": 358, "./fa.js": 358, "./fi": 359, "./fi.js": 359, "./fo": 360, "./fo.js": 360, "./fr": 361, "./fr-ca": 362, "./fr-ca.js": 362, "./fr-ch": 363, "./fr-ch.js": 363, "./fr.js": 361, "./fy": 364, "./fy.js": 364, "./ga": 365, "./ga.js": 365, "./gd": 366, "./gd.js": 366, "./gl": 367, "./gl.js": 367, "./gom-latn": 368, "./gom-latn.js": 368, "./gu": 369, "./gu.js": 369, "./he": 370, "./he.js": 370, "./hi": 371, "./hi.js": 371, "./hr": 372, "./hr.js": 372, "./hu": 373, "./hu.js": 373, "./hy-am": 374, "./hy-am.js": 374, "./id": 375, "./id.js": 375, "./is": 376, "./is.js": 376, "./it": 377, "./it-ch": 378, "./it-ch.js": 378, "./it.js": 377, "./ja": 379, "./ja.js": 379, "./jv": 380, "./jv.js": 380, "./ka": 381, "./ka.js": 381, "./kk": 382, "./kk.js": 382, "./km": 383, "./km.js": 383, "./kn": 384, "./kn.js": 384, "./ko": 385, "./ko.js": 385, "./ku": 386, "./ku.js": 386, "./ky": 387, "./ky.js": 387, "./lb": 388, "./lb.js": 388, "./lo": 389, "./lo.js": 389, "./lt": 390, "./lt.js": 390, "./lv": 391, "./lv.js": 391, "./me": 392, "./me.js": 392, "./mi": 393, "./mi.js": 393, "./mk": 394, "./mk.js": 394, "./ml": 395, "./ml.js": 395, "./mn": 396, "./mn.js": 396, "./mr": 397, "./mr.js": 397, "./ms": 398, "./ms-my": 399, "./ms-my.js": 399, "./ms.js": 398, "./mt": 400, "./mt.js": 400, "./my": 401, "./my.js": 401, "./nb": 402, "./nb.js": 402, "./ne": 403, "./ne.js": 403, "./nl": 404, "./nl-be": 405, "./nl-be.js": 405, "./nl.js": 404, "./nn": 406, "./nn.js": 406, "./pa-in": 407, "./pa-in.js": 407, "./pl": 408, "./pl.js": 408, "./pt": 409, "./pt-br": 410, "./pt-br.js": 410, "./pt.js": 409, "./ro": 411, "./ro.js": 411, "./ru": 412, "./ru.js": 412, "./sd": 413, "./sd.js": 413, "./se": 414, "./se.js": 414, "./si": 415, "./si.js": 415, "./sk": 416, "./sk.js": 416, "./sl": 417, "./sl.js": 417, "./sq": 418, "./sq.js": 418, "./sr": 419, "./sr-cyrl": 420, "./sr-cyrl.js": 420, "./sr.js": 419, "./ss": 421, "./ss.js": 421, "./sv": 422, "./sv.js": 422, "./sw": 423, "./sw.js": 423, "./ta": 424, "./ta.js": 424, "./te": 425, "./te.js": 425, "./tet": 426, "./tet.js": 426, "./tg": 427, "./tg.js": 427, "./th": 428, "./th.js": 428, "./tl-ph": 429, "./tl-ph.js": 429, "./tlh": 430, "./tlh.js": 430, "./tr": 431, "./tr.js": 431, "./tzl": 432, "./tzl.js": 432, "./tzm": 433, "./tzm-latn": 434, "./tzm-latn.js": 434, "./tzm.js": 433, "./ug-cn": 435, "./ug-cn.js": 435, "./uk": 436, "./uk.js": 436, "./ur": 437, "./ur.js": 437, "./uz": 438, "./uz-latn": 439, "./uz-latn.js": 439, "./uz.js": 438, "./vi": 440, "./vi.js": 440, "./x-pseudo": 441, "./x-pseudo.js": 441, "./yo": 442, "./yo.js": 442, "./zh-cn": 443, "./zh-cn.js": 443, "./zh-hk": 444, "./zh-hk.js": 444, "./zh-tw": 445, "./zh-tw.js": 445 }; function o(e) { var t = i(e); return n(t); } function i(e) {
      if (n.o(a, e))
        return a[e]; var t = new Error("Cannot find module '" + e + "'"); throw t.code = "MODULE_NOT_FOUND", t;
    } o.keys = function () { return Object.keys(a); }, o.resolve = i, (e.exports = o).id = 795;
  }, 799: function (e, t, n) {
    "use strict";
    n.r(t);
    var ue = n(0), pe = n.n(ue), a = n(84), o = n(6), d = n(1), R = n(13), me = n(8), i = { en: { translation: n(450) }, tw: { translation: n(451) }, cn: { translation: n(452) } };
    R.a.use(me.b).init({ lng: "cn", fallbackLng: "cn", resources: i, debug: !1, interpolation: { escapeValue: !1 }, react: { wait: !0 }, keySeparator: "::" });
    var r = function () {
      var e = window.parent.document, t = e.createElement("div"); if (t.id = "meiqia-container", e.getElementById("meiqia-container")) {
        var n = e.getElementById("meiqia-container");
        n.parentElement.removeChild(n), e.body.appendChild(t);
      }
      else
        e.body.appendChild(t); return t;
    }, c = n(143), l = n.n(c), s = n(107), u = n.n(s), p = n(802), m = n(803), L = n(15), g = { defaults: "https://new-api.meiqia.com", public: "https://static.meiqia.com/widget/", qcloud: "https://s3-qcloud.meiqia.com", socket: "https://camorope-client-a.meiqia.com/pusher" }, h = n(14), f = n.n(h), b = n(16), v = n.n(b), _ = n(9), w = n.n(_), y = n(10), x = n.n(y), k = n(7), E = n.n(k), I = n(11), C = n.n(I), T = n(75), Q = n.n(T), S = n(12), j = n.n(S);
    function N(t, e) {
      var n = C()(t); if (E.a) {
        var a = E()(t);
        e && (a = a.filter(function (e) { return x()(t, e).enumerable; })), n.push.apply(n, a);
      } return n;
    }
    function O(t) {
      for (var e = 1; e < arguments.length; e++) {
        var n = null != arguments[e] ? arguments[e] : {};
        e % 2 ? N(n, !0).forEach(function (e) { j()(t, e, n[e]); }) : w.a ? v()(t, w()(n)) : N(n).forEach(function (e) { f()(t, e, x()(n, e)); });
      } return t;
    }
    function M(e, a) { var o = O({}, e); return o.baseURL || (o.baseURL = g.defaults), new Q.a(function (t, n) { window.parent.meiqia.event.emit(a, { data: o, success: function (e) { t(JSON.parse(e)); }, error: function (e) { n(e); } }); }); }
    function he(e, t, n, a, o) { return !!o && fe({ url: "client/attrs_jsonp", method: "jsonp", callbackParamName: "jsonp_cb", jsonp: "jsonp_cb", params: { ent_id: e, track_id: t, visit_id: n, browser_id: a, attrs: u()(o) } }); }
    function z(e, t) { return e.className.match(new RegExp("(\\s|^)".concat(t, "(\\s|$)"))); }
    function D(e) {
      var t = window.parent.document.querySelector("iframe[name=chat]").contentWindow.document, n = t.getElementById(oe); e.target !== n ? setTimeout(function () {
        if (window.focus(), n.blur(), te.isUC()) {
          var e = document.createElement("input");
          e.type = "text", e.style.visible = "hidden", e.style.position = "absolute", e.style.right = "-999999px", n.parentNode.appendChild(e), e.focus(), e.remove();
        } t.removeEventListener("touchstart", D, !1), t.removeEventListener("touchend", D, !1);
      }, 200) : window.focus();
    }
    function B() { var e = window.parent.document.querySelector("iframe[name=chat]").contentWindow.document; e.addEventListener("touchstart", D, !1), e.addEventListener("touchend", D, !1); }
    function A() { var e = window.sessionStorage; e.removeItem("MEIQIA-SMART-GUIDE-ID"), e.removeItem("MEIQIA-SMART-GUIDE-COUNT"), e.removeItem("MEIQIA-SMART-GUIDE-TIMEOUT"), e.removeItem("MEIQIA-SMART-GUIDE-NEVER"); }
    function P(e, t) {
      var n = { id: e.id, agentId: e.sender_id, avatar: e.sender_avatar, frequency: e.push_rate, gap: e.gap_second }, a = ""; return a = te.isMobile() ? e.greetings_phone_content : e.greetings_pc_content, n.type = 1 === e.greetings_type ? "bubble" : "modal", n.html = function (e, t) {
        var n = e.keyword, a = document.title; return t.replace(/\{\{\s*replace\.(searchKeyWord|documentTitle)\s*(\|\s*'(.*?)'\s*)?\}\}/g, function () {
          switch (arguments.length <= 1 ? void 0 : arguments[1]) {
            case "searchKeyWord": return n || (arguments.length <= 3 ? void 0 : arguments[3]) || "";
            case "documentTitle": return a || (arguments.length <= 3 ? void 0 : arguments[3]) || "";
            default: return arguments.length <= 0 ? void 0 : arguments[0];
          }
        });
      }(t, a), n;
    }
    function q(e) {
      var t = e().get("smartGuide"), o = te.isMobile(), i = t.get("visitorInfo"), n = t.get("templates"), a = 0, r = 0; return (n = n.filter(function (e) { var t = function () { var e = new Date, t = e.getHours().toString().padStart(2, "0"), n = e.getMinutes().toString().padStart(2, "0"), a = e.getSeconds().toString().padStart(2, "0"); return "".concat(t, ":").concat(n, ":").concat(a); }(), n = e.push_begin_time, a = e.push_end_time; return !(t < n || a < t) && ((1 !== e.push_platform || !o) && (!(2 === e.push_platform && !o) && (2 !== e.push_visitor_type || !i.clue))); })).forEach(function (e) {
        var t = !0; 3 === e.push_visitor_type && (t = function (t, e, n) {
          function a(e) {
            switch (e) {
              case "source": return t.source_url;
              case "landing": return t.landing_url;
              case "visiting": return window.parent.document.location.href;
              case "returning": return 1 < t.visit_cnt ? "1" : "0";
              case "keyword": return t.keyword ? "1" : "0";
              default: return null;
            }
          } function o(e, t, n) {
            switch (t) {
              case 1: return e === n;
              case 2: return e !== n;
              case 7: return new RegExp(n).test(e);
              case 8: return !new RegExp(n).test(e);
              case 9: return new RegExp("^".concat(n)).test(e);
              case 10: return new RegExp("".concat(n, "$")).test(e);
              default: return !1;
            }
          } return n ? e.every(function (e) { return o(a(e.name), e.op, e.val); }) : e.some(function (e) { return o(a(e.name), e.op, e.val); });
        }(i, e.visitor_rules, 1 === e.work_rule)), t && e.created_at > r && (r = e.created_at, a = e.id);
      }), a || null;
    }
    var fe = function (e) { var a = O({}, e); return new Q.a(function (t, n) { a.baseURL || (a.baseURL = g.defaults), window.parent.meiqia.event.emit("request", { data: a, success: function (e) { t(JSON.parse(e)); }, error: function (e) { n(e); } }); }); }, F = Object(p.a)({ SET_ROUTER: function (e) { return e; }, SET_ROUTER_BUTTON_VISIBLE: function (e) { return e; }, SET_ROUTER_WIDGET_VISIBLE: function (e) { return e; }, SET_BUBBLE_VISIBLE: function (e) { return e; }, SET_INVITE_VISIBLE: function (e) { return e; }, SET_SMART_GUIDE_VISIBLE: function (e) { return e; } }), U = F.setRouter, W = F.setRouterButtonVisible, V = F.setRouterWidgetVisible, G = F.setBubbleVisible, H = F.setInviteVisible, Y = F.setSmartGuideVisible, $ = Object(m.a)({ SET_ROUTER: function (e, t) { return e.merge(t.payload); }, SET_ROUTER_BUTTON_VISIBLE: function (e, t) { return e.set("showButton", t.payload); }, SET_ROUTER_WIDGET_VISIBLE: function (e, t) { var n; return n = t.payload ? { showWidget: !0, showInvite: !1, showButton: !1, showCallback: !1, showBubble: !1, showSmartGuide: !1 } : { showWidget: !1 }, e.merge(n); }, SET_BUBBLE_VISIBLE: function (e, t) { return e.showWidget && t.payload ? e.set("showBubble", !1) : e.set("showBubble", t.payload); }, SET_INVITE_VISIBLE: function (e, t) { return e.set("showInvite", t.payload); }, SET_SMART_GUIDE_VISIBLE: function (e, t) { return e.get("showWidget") && t.payload ? e.set("showSmartGuide", !1) : e.set("showSmartGuide", t.payload); } }, Object(L.fromJS)({ showWidget: !1, widgetContent: "", buttonActived: "", showInvite: !1, showButton: !1, showCallback: !1, showBubble: !1, showSmartGuide: !1, alertVisible: !1, alertConfig: {} })), J = n(91), K = n.n(J), Z = n(18), X = n.n(Z), ee = (n(131), n(157), window), te = {
      isMobile: function () { var e = !1, t = (navigator.userAgent || navigator.vendor || ee.opera).toLowerCase(); return (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(t) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw-(n|u)|c55\/|capi|ccwa|cdm-|cell|chtm|cldc|cmd-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc-s|devi|dica|dmob|do(c|p)o|ds(12|-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(-|_)|g1 u|g560|gene|gf-5|g-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd-(m|p|t)|hei-|hi(pt|ta)|hp( i|ip)|hs-c|ht(c(-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i-(20|go|ma)|i230|iac( |-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|-[a-w])|libw|lynx|m1-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|-([1-8]|c))|phil|pire|pl(ay|uc)|pn-2|po(ck|rt|se)|prox|psio|pt-g|qa-a|qc(07|12|21|32|60|-[2-7]|i-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h-|oo|p-)|sdk\/|se(c(-|0|1)|47|mc|nd|ri)|sgh-|shar|sie(-|m)|sk-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h-|v-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl-|tdg-|tel(i|m)|tim-|t-mo|to(pl|sh)|ts(70|m-|m3|m5)|tx-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas-|your|zeto|zte-/i.test(t.substr(0, 4))) && (e = !0), e; }, isThisDevice: function (e) { return 0 <= (navigator.userAgent || navigator.vendor || ee.opera).toLowerCase().indexOf(e.toLowerCase()); }, isSafari: function () { var e = navigator.userAgent.toLowerCase(); return /safari/.test(e) && !/(chrome|crios|qqbrowser|baidu)/.test(e); }, isUC: function () { var e = navigator.userAgent.toLowerCase(); return /ucbrowser/.test(e); }, isIE: function (e) { var t = navigator.userAgent.toLowerCase(); return -1 !== t.indexOf("msie") && X()(t.split("msie")[1], 10) === e; }, iOSversion: function () {
        var e = (navigator.userAgent || navigator.vendor || ee.opera).toLowerCase(); if (/ip(hone|od|ad)/.test(e)) {
          var t = e.match(/os (\d+)_(\d+)_?(\d+)?/);
          return +[X()(t[1], 10), X()(t[2], 10), X()(t[3] || 0, 10)].join("");
        } return null;
      }, isWechatMiniprogram: function () { return navigator.userAgent.match(/miniprogram/i) || "miniprogram" === window.__wxjs_environment; }
    }, ne = (n(61), n(153), function (e, t) { var n = e; z(e, t) || (n.className += " ".concat(t)); }), ae = function (e, t) {
      var n = e; if (z(e, t)) {
        var a = new RegExp("(\\s|^)".concat(t, "(\\s|$)"));
        n.className = e.className.replace(a, "");
      }
    }, oe = "_MEIQIA_INPUT", ie = {
      wxScroll: function () { window.parent.scrollTo(); }, fixIOSBlur: function () {
        var t = window.parent.document.querySelector("iframe[name=chat]").contentWindow.document; -1 !== navigator.userAgent.toUpperCase().indexOf("IPHONE") && function () {
          var e = t.getElementById(oe); if (!e)
            throw new Error("objBlur()没有找到元素"); e.removeEventListener("focus", B, !1), e.addEventListener("focus", B, !1);
        }();
      }, fixedBody: function () {
        if (te.isMobile()) {
          var e = window.parent.document, t = e.body.scrollTop || e.documentElement.scrollTop;
          ne(e.body, "_MEIQIA_FIX_BODY"), e.body.style.cssText += "top:-".concat(t, "px;");
        }
      }, looseBody: function () {
        if (te.isMobile()) {
          var e = window.parent.document, t = e.body.style.top;
          ae(e.body, "_MEIQIA_FIX_BODY"), e.body.scrollTop = -X()(t, 10), e.documentElement.scrollTop = -X()(t, 10), e.body.style.top = "";
        }
      }, fixInput: function () { var e = window.parent.document, t = window.parent.screen.height, n = e.querySelector("iframe[name=chat]").contentWindow.document.getElementById(oe); return !te.isMobile() || te.isThisDevice("android") || (te.isUC() && ie.fixIOSBlur(), 1300 <= (te.iOSversion() || 0) || (te.isSafari() ? setTimeout(function () { 812 < t && window.parent.scrollTo(0, 330); }, 100) : te.isUC() ? setTimeout(function () { n.scrollIntoView(!0); }, 100) : setTimeout(function () { window.parent.scrollTo(0, 400); }, 100))), null; }
    }, ge = ie, re = n(36), ce = n.n(re), le = (n(32), n(261), n(88), n(270), 0), se = null, de = Object(p.a)({
      SET_SMART_GUIDE: function (e) { return e; }, MATCH_TEMPLATE: function (e, t) { var n = window.sessionStorage.getItem("MEIQIA-SMART-GUIDE-ID"), a = q(t); return n !== a && A(), a && (window.sessionStorage.setItem("MEIQIA-SMART-GUIDE-ID", a), e(_e(e, t, a))), { selectedTemplate: a, visitorInfo: { visiting_url: window.parent.location.href } }; }, GET_TEMPLATE_DETAIL: function (t, n, e) {
        var a = n(), o = a.get("config"), i = o.get("entId"), r = o.get("trackId"), c = a.getIn(["smartGuide", "visitorInfo"]); return function (e, t, n) { return fe({ url: "/mpush/widget/templates", method: "get", params: { template_id: n, ent_id: e, track_id: t } }); }(i, r, e).then(function (e) {
          if (e.data)
            t(be({ templateDetail: P(e.data.data, c) })), t(we(t, n, !0));
          else if (e.code)
            switch (e.code) {
              case 5: return A(), void (le < 2 && (le += 1, t(function (e, t) { return e(ve(e, t)); })));
              default: A();
            }
        }), null;
      }, TOGGLE_SMART_GUIDE: function (e, t, n) {
        var a = t(), o = a.get("router").get("showWidget"), i = a.get("smartGuide"), r = a.getIn(["message", "chatHasEnd"]), c = a.getIn(["queue", "inQueue"]), l = i.get("selectedTemplate"); return !1 === r || !l || o || c || !1 === i.get("enabled") ? (A(), clearInterval(se), e(Y(!1)), !1) : (n ? function (n, e) {
          var a = window.sessionStorage, t = e().get("smartGuide"), o = t.get("templateDetail"), i = t.get("refreshFlag"), r = o.frequency, c = o.gap; if (1 === r)
            !function () { var e = +a.getItem("MEIQIA-SMART-GUIDE-COUNT"), t = +a.getItem("MEIQIA-SMART-GUIDE-TIMEOUT"); e && t && 0 !== c ? (ce()() >= t && (t = ce()() + 1e3 * c, a.setItem("MEIQIA-SMART-GUIDE-TIMEOUT", t)), clearInterval(se), se = setInterval(function () { ce()() > t && (clearInterval(se), a.removeItem("MEIQIA-SMART-GUIDE-TIMEOUT"), a.setItem("MEIQIA-SMART-GUIDE-COUNT", 1 + e), n(Y(!0))); }, 1e3)) : (n(Y(!0)), a.setItem("MEIQIA-SMART-GUIDE-COUNT", 1)); }();
          else if (2 === r)
            i || (n(be({ refreshFlag: !0 })), n(Y(!0)));
          else {
            var l = a.getItem("MEIQIA-SMART-GUIDE-NEVER");
            n(Y(!l));
          }
        }(e, t) : function (e, t) { var n = window.sessionStorage, a = t().get("smartGuide"), o = a.get("templateDetail"), i = a.get("selectedTemplate"), r = o.frequency, c = o.gap; 1 === r && i ? n.setItem("MEIQIA-SMART-GUIDE-TIMEOUT", ce()() + 1e3 * c) : 3 === r && n.setItem("MEIQIA-SMART-GUIDE-NEVER", 1); e(Y(!1)), e(we(e, t, !0)); }(e, t), {});
      }
    }), be = de.setSmartGuide, ve = de.matchTemplate, _e = de.getTemplateDetail, we = de.toggleSmartGuide;
    function ye(e) { return window.parent.document.querySelector("#meiqia-container iframe[name=".concat(e, "]")); }
    function xe() {
      if (De && ze) {
        var e = ye(De);
        Pe(e, De), ze.addEventListener("mousedown", qe, !1), ze.addEventListener("mousemove", Re, !1), ze.addEventListener("mouseup", Le, !1), ze.addEventListener("click", Fe, !1), ze.style.display = "block";
      }
    }
    var ke = Object(m.a)({ SET_SMART_GUIDE: function (e, t) { return e.merge(t.payload); }, MATCH_TEMPLATE: function (e, t) { return e.mergeDeep(t.payload); }, GET_TEMPLATE_DETAIL: function (e, t) { return e.mergeDeep(t.payload); }, TOGGLE_SMART_GUIDE: function (e, t) { return e; } }, Object(L.Map)({ enabled: !1, visitorInfo: {}, templates: [], selectedTemplate: null, templateDetail: {}, refreshFlag: !1, templateActive: !1 })), Ee = "", Ie = function (e) {
      var t = window.parent.document, n = "width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no"; if ("init" === e) {
        var a = t.getElementsByName("viewport")[0], o = a && a.getAttribute("content");
        a && o && (Ee = -1 !== o.indexOf("width=device-width") && -1 !== o.indexOf("initial-scale=1.0") && -1 !== o.indexOf("minimum-scale=1.0") && -1 !== o.indexOf("maximum-scale=1.0") && -1 !== o.indexOf("user-scalable=no") ? "same" : o);
      }
      else if ("set" === e)
        if (Ee)
          "same" !== Ee && t.getElementsByName("viewport")[0].setAttribute("content", n);
        else {
          var i = t.createElement("meta");
          i.name = "viewport", i.content = n, t.getElementsByTagName("head")[0].appendChild(i);
        }
      else if ("remove" === e) {
        var r = t.getElementsByName("viewport")[0];
        r && (Ee ? "same" !== Ee && r.setAttribute("content", Ee) : r.parentElement.removeChild(t.getElementsByName("viewport")[0]));
      }
    }, Ce = null, Te = function () { return Ce; }, Se = n(179), je = n.n(Se), Ne = n(17), Oe = n.n(Ne), Me = null, ze = null, De = "", Be = !1, Ae = { x: 0, y: 0, px: 0, py: 0 }, Pe = function (e, t) { var n = "_meiqia_drag_handler_".concat(t); (ze = window.parent.document.getElementById(n)) && ze.parentNode.removeChild(ze), (ze = window.parent.document.createElement("div")).id = n; var a = window.parent.getComputedStyle(e); Oe()(ze.style, { position: a.position, "z-index": a.zIndex, top: a.top, left: "".concat(je()(a.left) + 130, "px"), width: "400px", height: "60px", cursor: "move", "user-select": "none", transform: a.transform }), e.parentNode.appendChild(ze); }, qe = function (e) { e.stopPropagation(), Me = ye(De), Ae.x = Me.offsetLeft, Ae.y = Me.offsetTop, Ae.px = Be ? e.touches[0].screenX : e.screenX, Ae.py = Be ? e.touches[0].screenY : e.screenY, Me && ze && (ze.style.width = "100%", ze.style.height = "100%", ze.style.top = 0, ze.style.bottom = 0, ze.style.left = 0, ze.style.right = 0, ze.style.transform = ""); }, Re = function (e) {
      if (e.preventDefault(), e.stopPropagation(), Me) {
        var t = Be ? e.touches[0].screenX : e.screenX, n = Be ? e.touches[0].screenY : e.screenY, a = Ae.x + (t - Ae.px), o = Ae.y + (n - Ae.py);
        Me.style.setProperty("left", "".concat(a, "px"), "important"), Me.style.setProperty("top", "".concat(o, "px"), "important");
      }
    }, Le = function (e) { e.stopPropagation(), Be || xe(), Me = Me && null; }, Fe = function (e) { var t = e.screenX, n = e.screenY; (3 < Math.abs(t - Ae.px) || 3 < Math.abs(n - Ae.py)) && e.stopPropagation(), Me && (Me = null, Oe()(Ae, { x: 0, y: 0, px: 0, py: 0 })); }, Ue = {
      register: function (e, t, n) {
        if (e && t)
          if (De = t, Be = n)
            e.addEventListener("touchstart", qe, !1), e.addEventListener("touchmove", Re, !1), e.addEventListener("touchend", Le, !1), e.addEventListener("click", Fe, !1);
          else {
            var a = ye(De);
            Pe(a, De), ze.addEventListener("mousedown", qe, !1), ze.addEventListener("mousemove", Re, !1), ze.addEventListener("mouseup", Le, !1), ze.addEventListener("click", Fe, !1);
          }
      }, unregister: function (e, t) { t ? (e.removeEventListener("touchstart", qe, !1), e.removeEventListener("touchmove", Re, !1), e.removeEventListener("touchend", Le, !1), e.removeEventListener("click", Fe, !1)) : ze && (ze.removeEventListener("mousedown", qe, !1), ze.removeEventListener("mousemove", Re, !1), ze.removeEventListener("mouseup", Le, !1), ze.removeEventListener("click", Fe, !1), ze.style.display = "none", ze = null); }, updatePosition: xe, resetPosition: function () { ze && (ze.style.display = "none"); }
    }, We = function (e, t, n) {
      try {
        var a = window.parent.localStorage;
        if ("get" === e)
          return a.getItem(t);
        "set" === e ? a.setItem(t, n) : "remove" === e && a.removeItem(t);
      }
      catch (e) {
        return null;
      } return null;
    }, Ve = function (e) {
      for (var t, n = window.parent.meiqia, a = arguments.length, o = new Array(1 < a ? a - 1 : 0), i = 1; i < a; i++)
        o[i - 1] = arguments[i]; (t = n.event).emit.apply(t, [e].concat(o));
    };
    var Ge = function (e, t) {
      var n = Te().getState().get("config"); try {
        var a = "unreadMsg-".concat(n.get("entId"), "-").concat(n.get("trackId"));
        if ("get" === e)
          return We("get", a);
        if ("set" === e) {
          var o = We("get", a);
          if (o) {
            try {
              o = JSON.parse(o);
            }
            catch (e) {
              o = [];
            }
            o = u()(function (e) {
              for (var t = 0; t < e.length; t += 1)
                for (var n = t + 1; n < e.length; n += 1)
                  e[t].id === e[n].id && e.splice(n -= 1, 1); return e;
            }(o.concat(t)));
          }
          else
            o = u()(t);
          We("set", a, o);
        }
        else
          "remove" === e && We("remove", a);
      }
      catch (e) {
        return null;
      } return null;
    }, He = (n(102), n(25)), Qe = n.n(He), Ye = n(38), $e = n.n(Ye);
    function Je(t, e) {
      var n = C()(t); if (E.a) {
        var a = E()(t);
        e && (a = a.filter(function (e) { return x()(t, e).enumerable; })), n.push.apply(n, a);
      } return n;
    }
    var Ke = Object(p.a)({ SET_MESSAGE: function (e) { return e; }, PUSH_QUEUE: function (e) { return e; }, SETIN_QUEUE: function (e, t) { return { index: e, value: t }; }, REPLACE_MSG: function (e, t) { return { id: e, msg: t }; }, DELETE_MSG: function (e) { return e; }, SET_MSG_DATA: function (e, t) { return { id: e, data: t }; }, PUSH_FAKE: function (e) { return e; }, SET_UNREAD: function (e) { return e; }, REMOVE_UNREAD: function (e) { return e; }, RING: function (e) { return e; }, TOGGLE_RING: function (e) { return e; }, SET_CONV_STATUS: function (e) { return e; }, SET_INVITE_FROM: function (e) { return e; }, SET_CONV_TYPE: function (e) { return e; }, SET_INPUTTING: function (e) { return e; }, SET_GREETING: function (e) { return e; } }), Ze = Ke.setMessage, Xe = Ke.pushQueue, et = (Ke.setinQueue, Ke.replaceMsg), tt = Ke.deleteMsg, nt = Ke.setMsgData, at = Ke.pushFake, ot = Ke.setUnread, it = Ke.removeUnread, rt = Ke.ring, ct = Ke.toggleRing, lt = Ke.setConvStatus, st = Ke.setInviteFrom, dt = Ke.setConvType, ut = Ke.setInputting, pt = Ke.setGreeting, mt = Object(m.a)({
      SET_MESSAGE: function (e, t) { return e.merge(t.payload); }, PUSH_QUEUE: function (e, t) { var n = $e()(t.payload) ? t.payload : [t.payload], a = [].concat(Qe()(e.get("queue")), Qe()(n)); return e.merge({ queue: a }); }, SETIN_QUEUE: function (e, t) { var n = e.get("queue"), a = t.payload, o = a.index, i = a.value; return n = [].concat(Qe()(n.slice(0, o)), [i], Qe()(n.slice(o))), e.merge({ queue: n }); }, REPLACE_MSG: function (e, t) { var n = e.get("queue"), a = t.payload, o = a.id, i = a.msg, r = n.findIndex(function (e) { return e.id === o; }); return -1 !== r && (n = [].concat(Qe()(n.slice(0, r)), [i], Qe()(n.slice(r + 1)))), e.merge({ queue: n }); }, DELETE_MSG: function (e, t) { var n = Qe()(e.get("queue")), a = t.payload, o = n.findIndex(function (e) { return e.id === a; }); return -1 !== o && n.splice(o, 1), e.merge({ queue: n }); }, SET_MSG_DATA: function (e, t) {
        var n = e.get("queue"), a = t.payload, o = a.id, i = a.data, r = n.findIndex(function (e) { return e.id === o; }); if (-1 !== r) {
          var c = function (t) {
            for (var e = 1; e < arguments.length; e++) {
              var n = null != arguments[e] ? arguments[e] : {};
              e % 2 ? Je(n, !0).forEach(function (e) { j()(t, e, n[e]); }) : w.a ? v()(t, w()(n)) : Je(n).forEach(function (e) { f()(t, e, x()(n, e)); });
            } return t;
          }({}, n[r], {}, i);
          n = [].concat(Qe()(n.slice(0, r)), [c], Qe()(n.slice(r + 1)));
        } return e.merge({ queue: n });
      }, PUSH_FAKE: function (e, t) { var n = $e()(t.payload) ? t.payload : [t.payload], a = [].concat(Qe()(e.get("fakeMsg")), Qe()(n)); return e.merge({ fakeMsg: a }); }, SET_UNREAD: function (e, t) { var n = e.get("unReadCount"), a = $e()(t.payload) ? t.payload : [t.payload], o = a[a.length - 1]; return Ve("getUnreadMsg", a), e.merge({ unReadMsg: o, unReadCount: n + a.length }); }, REMOVE_UNREAD: function (e) { return Ve("getUnreadMsg", "hasBeenRead"), e.merge({ unReadMsg: null, unReadCount: 0 }); }, RING: function (e, t) { return e.merge({ ringing: !0, ringType: t.payload }); }, TOGGLE_RING: function (e, t) { return e.merge({ ringEnabled: t.payload }); }, SET_CONV_STATUS: function (e, t) { return e.set("chatHasEnd", !t.payload); }, SET_INVITE_FROM: function (e, t) {
        var n = e; if ("auto" === e.get("inviteType")) {
          var a = "customer" === t.payload ? "sys_invite_cutomer_accept" : "sys_invite_sys_accept";
          return "auto" === t.payload && (n = n.set("convType", "autoInvite")), n.set("inviteFrom", a);
        } if ("manual" !== e.get("inviteType"))
          return n; var o = "customer" === t.payload ? "agent_invite_cutomer_accept" : "agent_invite_sys_accept"; return (n = n.set("convType", "manualInvite")).set("inviteFrom", o);
      }, SET_CONV_TYPE: function (e, t) { return e.set("convType", t.payload); }, SET_INPUTTING: function (e, t) { return e.set("inputting", t.payload); }, SET_GREETING: function (e, t) { var n = t.payload, a = n.greeting, o = n.assign, i = e.get("agentToken"), r = e.get("groupToken"), c = Qe()(e.get("fakeMsg")); return o.agentToken && i !== o.agentToken || o.groupToken && r !== o.groupToken || !e.get("scheduler") ? (a && "string" == typeof a && c.push({ id: Math.random(), from_type: "client", content_type: "text", content: a }), e.merge({ fakeMsg: c, greeting: a, schedulerMsg: !0, scheduler: !1 })) : e; }
    }, Object(L.Map)({ entWelcomeMessage: "", convId: "", convType: "", unableToServe: !1, scheduler: !1, isBot: !1, lastMsgDate: null, evaluationActive: !1, reserveToken: null, chatHasEnd: null, schedulerMsg: !1, visitorStatus: 0, enterpriseInfo: {}, schedulerAfterClientSendMsg: !1, noMsgFilter: !1, inputting: !1, inviteType: "", inviteFrom: "", ringEnabled: !0, ringing: !1, ringType: "", fileEnabled: !1, unReadMsg: null, unReadCount: 0, unReadPreview: !1, autoFit: [], autoFitSelected: -1, blacklist: !1, showHistoryBtn: !1, historyLoading: !1, msgLoadLimit: 10, historyArray: [], historyTimes: 0, agent: null, agentToken: null, groupToken: null, agentInfo: {}, agentInputing: !1, assign: {}, fakeMsg: [], surveyMsg: null, queue: [] }));
    function ht(e, t) { var n = 1 < arguments.length && void 0 !== t ? t : "chat", a = Te(); We("set", "MEIQIA_PANEL_VISIBILITY", e ? "visible" : "hidden"); var o = a.getState(), i = a.dispatch; e ? (ge.fixedBody(), te.isMobile() ? Ie("set") : setTimeout(function () { Ue.updatePosition(); }, 500), Ge("remove"), i(it()), i(U({ buttonActived: n })), i(V(!0)), Ve("getPanelVisibility", "visible")) : (o.getIn(["config", "withoutBtn"]) || i(U({ showButton: !0 })), ge.looseBody(), te.isMobile() ? Ie("remove") : Ue.resetPosition(), i(V(!1)), Ve("getPanelVisibility", "invisible"), i(function (e, t) { return we(e, t, !0); })); }
    var ft, gt, bt;
    function vt(e) { Te().dispatch(U({ widgetContent: e })); }
    function _t(e, t) {
      clearTimeout(ft), clearTimeout(gt), clearTimeout(bt); var n = t(), a = n.get("invite"), o = n.get("config"); if (e(H(!1)), function (e, t, n) { fe({ url: "/visit/".concat(e, "/").concat(t, "/reject"), method: "post", headers: { "content-type": "application/json" }, data: { browser_id: n } }); }(o.get("entId"), o.get("trackId"), o.get("browserId")), "auto" === n.getIn(["message", "inviteType"]) && "stop" === a.getIn(["auto", "reject", "type"]) ? window.sessionStorage.setItem("MEIQIA_AUTO_INVITE_REJECTED", "1") : window.sessionStorage.removeItem("MEIQIA_AUTO_INVITE_REJECTED"), "close" !== a.getIn(["auto", "status"])) {
        var i = a.getIn(["auto", "reject"]);
        if (i && "again" === i.get("type")) {
          var r = i.get("countdown");
          bt = setTimeout(function () { e(It(e, t, { inviteType: "auto" })); }, 1e3 * r);
        }
      }
    }
    function wt(e) { var t = e.data, n = e.headers; return fe({ url: "/client/tickets_v2", method: "post", headers: Oe()({ "content-type": "application/json" }, n), data: t }); }
    function yt(e, t, n, a) { return fe({ url: "/client/history_conversation", method: "get", params: { ent_id: e, track_id: t, page: n, limit: a } }); }
    var xt = Object(L.Map)({ inviteType: "" }), kt = Object(p.a)({
      SET_INVITE: function (e) { return e; }, AUTO_ACCEPT_INVITE: function (e, t, n) {
        var a = t(), o = a.getIn(["invite", "auto"]), i = a.getIn(["message", "convId"]), r = a.getIn(["config", "visitorStatus"]), c = a.getIn(["router", "showWidget"]); if (i || c || 4 === r || (e(H(!0)), e(Ze(n))), o) {
          var l = o.getIn(["accept", "status"]), s = o.getIn(["accept", "countdown"]);
          "open" !== l || i || c || (ft = setTimeout(function () { e(st("auto")), ht(!0, "invite"); }, 1e3 * s));
        } return n;
      }, MANUAL_ACCEPT_INVITE: function (e, t, n) {
        var a = t(), o = a.getIn(["invite", "manual"]), i = a.getIn(["message", "convId"]), r = a.getIn(["router", "showWidget"]); if (i || r || (e(H(!0)), e(Ze(n))), o) {
          var c = o.getIn(["accept", "status"]), l = o.getIn(["accept", "countdown"]);
          "open" !== c || i || r || (gt = setTimeout(function () { e(st("auto")), ht(!0, "invite"); }, 1e3 * l));
        } return n;
      }
    }), Et = kt.setInvite, It = kt.autoAcceptInvite, Ct = kt.manualAcceptInvite, Tt = Object(m.a)({ SET_INVITE: function (e, t) { var n = Object(L.fromJS)(t.payload); return e.merge(n); }, AUTO_ACCEPT_INVITE: function (e, t) { var n = Object(L.fromJS)(t.payload); return e.merge(n); }, MANUAL_ACCEPT_INVITE: function (e, t) { var n = Object(L.fromJS)(t.payload); return e.merge(n); } }, xt), St = function (e, t, n, a) { return fe({ url: "/client/timeline", method: "get", params: { ent_id: e, track_id: t, filter_type: n, dt: a } }); }, jt = n(145), Nt = n(453), Ot = n(454), Mt = n.n(Ot), zt = n(455), Dt = Object(L.Map)({ isInit: !1, trackId: "", docLocation: "", docTitle: "", docReferrer: "", entId: "", fallback: 3, metadata: null, clientId: "", disableBrandLink: !1, language: "zh", withoutBtn: !1, browserFamily: "", browserId: "", servability: !1, visitId: "", visitPageId: "", visitorStatus: "", visitorStatusAgentToken: "", standalone: !1, socket: !1, isReconnect: !1, stopReconnect: !1 }), Bt = Object(p.a)({ SET_CONFIG_DATA: function (e) { return e; } }).setConfigData, At = Object(m.a)({ SET_CONFIG_DATA: function (e, t) { return e.merge(t.payload); } }, Dt), Pt = Object(p.a)({ SET_THEME: function (e) { return e; }, SET_LIMIT_BUTTON: function (e) { return e; } }), qt = Pt.setTheme, Rt = Pt.setLimitButton, Lt = Object(m.a)({ SET_THEME: function (e, t) { return e.mergeDeep(t.payload); }, SET_LIMIT_BUTTON: function (e, t) { var n = t.payload || { mobile: { btn: { theme: "007aff", position: { horizontal: "20", type: "right", bottom: "20" }, text: { offline: "", online: "" }, type: "round" } }, desktop: { btn: { theme: "007aff", position: { horizontal: 60, type: "right", bottom: "80" }, text: { offline: "", online: "" }, type: "round" } } }; return n.isLimitButton = !0, n.mobile.btn.text.offline = n.mobile.btn.text.online, n.desktop.btn.text.offline = n.desktop.btn.text.online, e.mergeDeep(n); } }, Object(L.Map)({ device: "mobile", isLimitButton: !1 })), Ft = Object(p.a)({ SET_TICKET: function (e) { return e; } }).setTicket, Ut = Object(m.a)({ SET_TICKET: function (e, t) { return e.mergeDeep(t.payload); } }, Object(L.Map)({ showTicket: !1, captcha: "", category: "", contactRule: "", defaultTemplate: "", defaultTemplateContent: "", email: "", intro: "", name: "", permission: "", qq: "", tel: "", wechat: "" })), Wt = Object(p.a)({ SET_SURVEY: function (e) { return e; } }).setSurvey, Vt = Object(m.a)({ SET_SURVEY: function (e, t) { return e.merge(Object(L.fromJS)(t.payload)); } }, Object(L.fromJS)({ status: "open", categoryStatus: "close", showSurvey: !0 })), Gt = Object(p.a)({ SET_EVALUATION: function (e) { return e; } }).setEvaluation, Ht = Object(m.a)({ SET_EVALUATION: function (e, t) { return e.merge(Object(L.fromJS)(t.payload)); } }, Object(L.fromJS)({ agent_invitation: "close", agent_visible: "close", auto_invitation: "close", prompt_text: "" })), Qt = Object(p.a)({ SET_QUEUE: function (e) { return e; } }).setQueue, Yt = Object(m.a)({ SET_QUEUE: function (e, t) { return e.merge(Object(L.fromJS)(t.payload)); } }, Object(L.fromJS)({ inQueue: !1, intro: "", position: 0, status: "normal" })), $t = Object(p.a)({ SET_ROBOT: function (e) { return e; } }).setRobot, Jt = Object(m.a)({ SET_ROBOT: function (e, t) { return e.merge(t.payload); } }, Object(L.fromJS)({})), Kt = Object(zt.combineReducers)({ config: At, theme: Lt, router: $, ticket: Ut, survey: Vt, invite: Tt, evaluation: Ht, message: mt, queue: Yt, robot: Jt, smartGuide: ke }), Zt = [Mt.a, Nt.a], Xt = Object(jt.c)(Kt, jt.a.apply(void 0, Zt));
    Ce = Xt;
    var en = Xt, tn = function (e) { var t = en.getState(), n = en.dispatch, a = t.get("message"), o = {}; return e && (e.agentToken || e.groupToken) ? (o.agentToken = e.agentToken || null, o.groupToken = e.groupToken || null) : (o.agentToken = a.getIn(["assign", "agentToken"]) || null, o.groupToken = a.getIn(["assign", "groupToken"]) || null), n(Ze(o)), o; }, nn = (n(112), n(134), []), an = function (e) { return !(nn.indexOf(e) < 0) || (nn.push(e), nn = nn.slice(-200), !1); }, on = n(180), rn = n.n(on), cn = {}, ln = "", sn = null;
    function dn(e, t) { var n = e.text, a = e.entId; return sn && sn("cancel"), cn[n] ? t(Ze({ autoFit: cn[n].slice(0, 8) })) : function (e) { return fe(Oe()({ url: "/robot/auto_complete", method: "get" }, e)); }({ params: { text: n, ent_id: a }, cancelToken: new rn.a.CancelToken(function (e) { sn = e; }) }).then(function (e) { e && e.data && e.data.success && (cn[n] = e.data.data || [], t(Ze({ autoFit: e.data.data.slice(0, 8) || [] }))); }); }
    var un = { search: function (e) { var t = en.getState(), n = en.dispatch, a = t.getIn(["config", "entId"]), o = t.getIn(["message", "isBot"]); return ln !== e && (!!o && ("string" != typeof e ? un.remove() : e.length ? dn({ text: ln = e, entId: a }, n) : un.remove())); }, remove: function () { var e = en.dispatch; return sn && sn("cancel"), e(Ze({ autoFit: [], autoFitSelected: -1 })), ln = "", !1; }, select: function (e) { var t = en.getState(), n = en.dispatch, a = t.getIn(["message", "autoFit"]), o = t.getIn(["message", "autoFitSelected"]), i = 0; return 0 !== a.length && ("prev" === e ? i = o <= 0 ? a.length - 1 : o - 1 : "next" === e && (i = o >= a.length - 1 ? 0 : o + 1), n(Ze({ autoFitSelected: i })), (a[i].question || "").replace(/<em>|<\/em>/g, "")); } }, pn = un;
    function mn(t, e) {
      var n = C()(t); if (E.a) {
        var a = E()(t);
        e && (a = a.filter(function (e) { return x()(t, e).enumerable; })), n.push.apply(n, a);
      } return n;
    }
    function hn(e, t, n, a) {
      var o = 3 < arguments.length && void 0 !== a ? a : {}; (0, en.dispatch)(nt(e, function (t) {
        for (var e = 1; e < arguments.length; e++) {
          var n = null != arguments[e] ? arguments[e] : {};
          e % 2 ? mn(n, !0).forEach(function (e) { j()(t, e, n[e]); }) : w.a ? v()(t, w()(n)) : mn(n).forEach(function (e) { f()(t, e, x()(n, e)); });
        } return t;
      }({ status: t, created_on: n }, o)));
    }
    function fn(o) {
      var i = en.dispatch, e = en.getState().get("config"), t = { ent_id: e.get("entId"), track_id: e.get("trackId"), browser_id: e.get("browserId"), type: o.content_type, content: o.content }; "file" === o.content_type && (t.extra = o.extra), hn(o.id, "sending"), function (e, t) { return fe({ url: "/client/send_msg", method: "post", headers: { "content-type": "application/json" }, params: { ent_id: e }, data: t }); }(t.ent_id, t).then(function (e) {
        var t = e.data; if (t.success) {
          i(rt("sentMessage")), an("message".concat(t.msg.id));
          var n = t.sensitive_content, a = null;
          n && (a = { sensitive: n, content: n.replaced_content }), hn(o.id, "success", t.msg.created_on, a);
        }
        else
          "conversation not found" === t.message && i(lt(!1)), hn(o.id, "error");
      }, function () { hn(o.id, "error"); }).finally(function () { pn.remove(); });
    }
    function gn(t, e) {
      var n = C()(t); if (E.a) {
        var a = E()(t);
        e && (a = a.filter(function (e) { return x()(t, e).enumerable; })), n.push.apply(n, a);
      } return n;
    }
    function bn(t) {
      for (var e = 1; e < arguments.length; e++) {
        var n = null != arguments[e] ? arguments[e] : {};
        e % 2 ? gn(n, !0).forEach(function (e) { j()(t, e, n[e]); }) : w.a ? v()(t, w()(n)) : gn(n).forEach(function (e) { f()(t, e, x()(n, e)); });
      } return t;
    }
    function vn(e, t) {
      if (t.length)
        for (var n = 0; n < t.length; n += 1)
          "photo" !== t[n].content_type && "file" !== t[n].content_type ? e.push({ id: t[n].id, from_type: "client", content_type: "text", status: "sending", content: t[n].content, type: "text" }) : "photo" === t[n].content_type && e.push(bn({}, t[n], { type: "photo" })), fn(t[n]); return e;
    }
    function _n(e, t) {
      var n = 1 < arguments.length && void 0 !== t ? t : 300; window.requestAnimationFrame ? function (i, e) {
        var r = 1 < arguments.length && void 0 !== e ? e : 300, c = null; Tn && window.cancelAnimationFrame(Tn), Tn = window.parent.requestAnimationFrame(function e(t) {
          var n = Sn.scrollTop; if (r < t - (c = c || t))
            Tn = 0, Sn.scrollTop = i;
          else if (Tn) {
            var a = (t - c) / r;
            if (0 != a) {
              var o = (i - n) * a;
              Sn.scrollTop = n + o;
            }
            window.parent.requestAnimationFrame(e);
          }
        });
      }(e, n) : Sn.scrollTop = e;
    }
    function wn(e) {
      var o = 0 < arguments.length && void 0 !== e ? e : 100; setTimeout(function () {
        if (Sn) {
          var e = Sn, t = e.scrollHeight, n = void 0 === t ? 0 : t, a = e.clientHeight;
          _n(n - (void 0 === a ? 0 : a) + 100, o);
        }
      }, 100);
    }
    function yn(e) { jn.includes(e) || jn.push(e); }
    function xn(t) {
      if (jn.includes(t)) {
        var e = jn.findIndex(function (e) { return e === t; });
        jn.splice(e, 1), wn();
      }
    }
    var kn = n(30), En = n.n(kn), In = (n(81), n(45)), Cn = n.n(In), Tn = (n(133), 0), Sn = null, jn = [];
    function Nn(t, e) {
      var n = C()(t); if (E.a) {
        var a = E()(t);
        e && (a = a.filter(function (e) { return x()(t, e).enumerable; })), n.push.apply(n, a);
      } return n;
    }
    function On() {
      var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {}, l = e.firstTime, s = e.sendFake, d = e.keepPosition, t = en.getState(), u = en.dispatch, n = t.get("config"), a = t.get("message"), o = n.get("entId"), i = n.get("trackId"), p = a.get("msgLoadLimit"), m = Qe()(a.get("historyArray")); if (-1 !== zn.indexOf(o))
        return null; function h(e) {
          var t = en.getState().get("message"), n = Qe()(t.get("queue")), a = t.get("fakeMsg"), o = l ? 0 : t.get("historyTimes"), i = n[0] ? n[0].id : null, r = { queue: n }; if (m.length)
            if (l)
              r.showHistoryBtn = !0;
            else {
              var c = m.splice(0, p).map(function (e) {
                var t = function (t) {
                  for (var e = 1; e < arguments.length; e++) {
                    var n = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? Nn(n, !0).forEach(function (e) { j()(t, e, n[e]); }) : w.a ? v()(t, w()(n)) : Nn(n).forEach(function (e) { f()(t, e, x()(n, e)); });
                  } return t;
                }({}, e); return "hybrid" === t.content_type && (t.content = JSON.parse(t.content)), t;
              });
              r.queue = [].concat(Qe()(c.reverse()), Qe()(n));
            } l || (m.length || !e ? r.showHistoryBtn = !0 : r.showHistoryBtn = !1), s && (r.queue = vn(r.queue, a)), r.historyTimes = o + 1, r.historyArray = m, u(Ze(r)), d ? function (e) {
              if (Sn && e) {
                var t = window.parent.document.querySelector("iframe[name=chat]").contentDocument.getElementById(e);
                Sn.style["overflow-y"] = "hidden", Sn.scrollTop = t.offsetTop, setTimeout(function () { Sn.style["overflow-y"] = "auto"; }, 100);
              }
            }(i) : wn();
        } l && (Mn = 0, m = []); var r = function () {
          var t = Cn()(En.a.mark(function e(t) {
            var n, a, o, i, r, c, l, s, d = arguments; return En.a.wrap(function (e) {
              for (; ;)
                switch (e.prev = e.next) {
                  case 0:
                    for (t(Ze({ historyLoading: !0 })), n = {}, e.prev = 2, a = d.length, o = new Array(1 < a ? a - 1 : 0), i = 1; i < a; i++)
                      o[i - 1] = d[i];
                    return e.next = 6, yt.apply(void 0, o);
                  case 6:
                    n = e.sent, e.next = 12;
                    break;
                  case 9: e.prev = 9, e.t0 = e.catch(2), console.log(e.t0);
                  case 12: if (t(Ze({ historyLoading: !1 })), n.data)
                    if (r = n.data, (c = r.conversations).length) {
                      for (l = c.length - 1; 0 <= l; l -= 1)
                        for (s = c[l].messages.length - 1; 0 <= s; s -= 1)
                          c[l].messages[s]._renderType = "history", m.push(c[l].messages[s]);
                      c.length < 1 ? h(!0) : h();
                    }
                    else
                      h(!0);
                  case 14:
                  case "end": return e.stop();
                }
            }, e, null, [[2, 9]]);
          })); return function (e) { return t.apply(this, arguments); };
        }(); return m.length < p ? r(u, o, i, Mn += 1, 5) : h(), null;
    }
    var Mn = 0, zn = [62421], Dn = "hidden" in document, Bn = "Notification" in window, An = null;
    document.implementation && document.implementation.createHTMLDocument && (An = document.implementation.createHTMLDocument("sinker"));
    var Pn = { __instance: null, __timer: null, close: function (e) { var t = this; this.__timer && clearTimeout(this.__timer), this.__timer = setTimeout(function () { t.__instance && t.__instance.close && t.__instance.close(), t.__instance = null; }, e || 0); }, show: function (e) { var t = this, n = 0 < arguments.length && void 0 !== e ? e : {}; this.__instance = new window.Notification(n.title || R.a.t("美洽客服消息"), { body: n.body || "", icon: n.icon || "", tag: n.tag || "" }), this.__instance.onclick = function () { window.parent.focus(), t.close(), function () { var e = window.parent.document.querySelector("iframe[name=chat]").contentDocument.getElementById("_MEIQIA_INPUT"); e && e.focus && e.focus(); }(); }, this.close(8e3); } };
    function qn(e) {
      return "string" != typeof e ? "" : function (e) {
        if (!An || !e)
          return e; var t = An.documentElement; return t.innerHTML = (e || "").trim(), t.innerText || t.textContent || "";
      }(e.replace(/<img\sclass="emoji".+?alt=":(\w+):">/g, function (e, t) { return ":".concat(t, ":"); }).replace(/<br\/?>/g, " ")).replace(/^\s+|\s+$/g, "");
    }
    function Rn(e) {
      var t = e; if (t && "agent" === t.from_type) {
        var n = t.agent.nickname || t.agent.realname || R.a.t("管理员");
        if (t.content === R.a.t("[推广消息]"))
          return !1;
        "file" === t.content_type && (t.content = R.a.t("「发来了一个文件」")), "photo" === t.content_type && (t.content = R.a.t("「发来了一张图片」"));
        var a = qn(t.content);
        if (!a.length)
          return !1;
        !function (t) { Dn && (!Bn || document.hidden && ("granted" === window.Notification.permission ? Pn.show(t) : "denied" !== window.Notification.permission && window.Notification.requestPermission(function (e) { "granted" === e && Pn.show(t); }))); }({ title: R.a.t("新消息"), icon: t.agent.avatar, body: "".concat(n, ": ").concat(a), tag: n });
      } return null;
    }
    function Ln(e, t, g) {
      return function (e, t) { return fe({ url: "/scheduler", method: "post", headers: { "content-type": "application/json" }, params: { ent_id: e }, data: t }); }(e, t).then(function (e) {
        var t = e.data, n = en.getState(), a = n.get("message"), o = n.get("config"), i = n.get("smartGuide"), r = "open" === a.getIn(["enterpriseInfo", "prompt_status"]), c = a.get("chatHasEnd"), l = { reserveToken: t.reserve_token, queue: Qe()(a.get("queue")), fakeMsg: Qe()(a.get("fakeMsg")) }; if (t.success) {
          l.convId = t.conv.id, Ve("convClickCallback", "conv", l.convId), n.getIn(["config", "standalone"]) || Ve("startConversation"), t && t.agent && (l.agent = t.agent, l.isBot = "bot" === t.agent.privilege), l.convNewCreate = t.conv_new_create, l.agentInfo = { name: t.agent.nickname, avatar: t.agent.avatar, tel: t.agent.telephone, cellphone: t.agent.public_cellphone, email: t.agent.public_email, qq: t.agent.qq, weixin: t.agent.weixin, signature: t.agent.signature, isBot: "bot" === t.agent.privilege }, !te.isMobile() && l.convNewCreate && g(rt("newChat"));
          var s = t.messages;
          if (l.convNewCreate || l.isBot || (t.agent_welcome_message && s.unshift({ id: "".concat(ce()(), "_agent_welcome"), from_type: "agent", content_type: "text", created_on: t.conv.created_on, content: t.agent_welcome_message, type: "message", agent: { nickname: t.agent.nickname, avatar: t.agent.avatar } }), a.get("entWelcomeMessage") && s.unshift({ id: "".concat(ce()(), "_ent_welcome"), from_type: "agent", content_type: "text", created_on: t.conv.created_on, content: a.get("entWelcomeMessage"), type: "message", agent: { nickname: "", avatar: a.get("enterpriseInfo").avatar || t.agent.avatar || Wn.a } })), s.length) {
            for (var d = 0; d < s.length; d += 1)
              s[d]._renderType = "scheduler", "hybrid" === s[d].content_type && (s[d].content = JSON.parse(s[d].content)), an(s[d].action + s[d].id), s[d].created_on && (l.lastMsgDate = s[d].created_on);
            if (!r && c)
              ;
            else if (a.get("schedulerMsg")) {
              var u;
              if (0 === l.queue.length)
                (u = l.queue).push.apply(u, Qe()(s));
            }
            else
              l.queue = Qe()(s);
          }
          l.chatHasEnd = !1, a.get("surveyMsg") && (l.fakeMsg.push(a.get("surveyMsg")), l.surveyMsg = null), o.get("trackId") && On({ firstTime: !0 }), l.queue = vn(l.queue, l.fakeMsg), l.fakeMsg = [], l.unableToServe = !1, l.schedulerMsg = !1, l.evaluationActive = !1, l.noMsgFilter = !1;
          var p = i.get("selectedTemplate"), m = i.get("templateActive"), h = i.getIn(["templateDetail", "agentId"]), f = i.getIn(["templateDetail", "html"]);
          m && p && l.convNewCreate && function (e, t, n, a, o, i) { fe({ url: "/mpush/enter", method: "post", headers: { "content-type": "application/json" }, data: { ent_id: e, track_id: t, conv_id: n, template_id: a, agent_id: o, content: i } }); }(o.get("entId"), o.get("trackId"), l.convId, p, h, f), g(be({ templateActive: !1 })), "bot" === t.agent.privilege || te.isMobile() || Bn && window.Notification.requestPermission(), g(Qt({ inQueue: !1 })), g(Ze(l));
        }
        else
          "queueing" === t.result ? g(Qt({ inQueue: !0, position: t.position })) : (l.convId = null, l.agent = null, l.agentToken = null, l.groupToken = null, l.unableToServe = !0, g(Ze(l))); wn();
      });
    }
    function Fn(e) {
      if (Vn)
        return Q.a.resolve(); var t = en.dispatch, n = en.getState(), a = n.get("config"), o = n.get("message"), i = { sys_invite_sys_accept: 1, sys_invite_cutomer_accept: 1, agent_invite_sys_accept: 2, agent_invite_cutomer_accept: 2 }, r = o.get("inviteFrom"), c = o.get("agentToken") || null, l = o.get("groupToken") || null, s = { ent_id: a.get("entId"), track_id: a.get("trackId"), visit_id: a.get("visitId"), agent_token: c, group_token: c ? null : l, url: window.parent.document.location.href, title: window.parent.document.title, queueing: !0, from_type: 2 === i[r] ? "invitation" : null }; switch (a.get("fallback") && (s.fallback = a.get("fallback")), e && e.exclude_agent_tokens && (s.exclude_agent_tokens = e.exclude_agent_tokens), s.conv_create_type = r ? i[r] : 0, o.get("convType")) {
          case "click":
          case "newConv":
            s.conv_initiate_type = "client";
            break;
          case "autoInvite":
            s.conv_initiate_type = "sys_forced";
            break;
          case "manualInvite":
            s.conv_initiate_type = "sys_accepted";
            break;
          default: s.conv_initiate_type = null;
        } return e && e.unmatch_redirect && (s.conv_initiate_type = "bot_redirect_auto"), a.get("docReferrer") && (s.referrer_url = a.get("docReferrer")), t(Ze({ scheduling: Vn = !0, scheduler: !0, groupToken: l })), Ln(a.get("entId"), s, t).finally(function () { t(Ze({ scheduling: Vn = !1 })); });
    }
    var Un = n(181), Wn = n.n(Un), Vn = !1, Gn = function (n) { var a = en.dispatch, e = en.getState(), o = e.get("config"), i = e.get("message"), r = e.getIn(["queue", "inQueue"]), c = e.getIn(["survey", "showSurvey"]), l = i.get("visitorStatus"), s = i.get("entWelcomeMessage"); return new Q.a(function (e, t) { return c ? e() : i.get("schedulerAfterClientSendMsg") ? (a(Ze({ noMsgFilter: !0 })), 4 !== l && s && !r && (a(Xe({ id: 1 * new Date, from_type: "agent", content_type: "text", content: s, type: "message", agent: { nickname: "", avatar: i.getIn(["enterpriseInfo", "avatar"]) } })), a(Ze({ entWelcomeMessage: "" }))), e()) : !i.get("scheduler") && n ? e(Fn()) : i.get("scheduler") || i.get("convId") ? e() : o.get("servability") || 4 === l ? e(Fn()) : e(); }); }, Hn = (n(211), n(130), n(251), n(4)), Qn = n.n(Hn);
    n(253);
    function Yn(e) {
      for (var t = decodeURIComponent(e), n = String.fromCharCode(t.charCodeAt(0) - t.length), a = 1; a < t.length; a += 1)
        n += String.fromCharCode(t.charCodeAt(a) - n.charCodeAt(a - 1)); return n;
    }
    function $n() { return Kn.a.toUnicode(window.parent.document.location.hostname); }
    var Jn = n(456), Kn = n.n(Jn), Zn = function () {
      var a = Cn()(En.a.mark(function e(t, n, a) {
        var o, i, r, c, l, s, d, u, p, m, h, f; return En.a.wrap(function (e) {
          for (; ;)
            switch (e.prev = e.next) {
              case 0:
                if (o = n.widget_settings, i = n.domain_security_config, r = void 0 === i ? {} : i, c = !1, l = t.entId, s = t.standalone, d = $n(), u = r.status, p = r.urls, m = "open" === u && (!!(p && 0 < p.length) && p), !s && m && d && !m.some(function (e) { return d.endsWith(e.replace(/\/$/, "")); }))
                  return e.abrupt("return", !0);
                e.next = 8;
                break;
              case 8: return e.prev = 8, e.next = 11, fe({ url: "/static-files/40z3oz40z4lz17z4bz3mz48z4az42z3mz40z51z4l.js", baseURL: g.qcloud, method: "jsonp", callbackParamName: "jsonp_cb", jsonp: "blacklistJsonp", params: { v: "1" } });
              case 11:
                f = e.sent, h = f.data.findIndex(function (e) { return Yn(e) === "".concat(l); }), e.next = 18;
                break;
              case 15: e.prev = 15, e.t0 = e.catch(8), h = -1;
              case 18:
                if (-1 < h)
                  return e.next = 21, fe({ url: "/v1/throttle/web", method: "get", params: { api_name: "/visit/init", ent_id: l } });
                e.next = 23;
                break;
              case 21: e.sent.data.allowed || (c = !0);
              case 23: return c && (a(Rt(o)), a(W(!0))), e.abrupt("return", c);
              case 25:
              case "end": return e.stop();
            }
        }, e, null, [[8, 15]]);
      })); return function (e, t, n) { return a.apply(this, arguments); };
    }(), Xn = function () {
      var n = Cn()(En.a.mark(function e(t, n) {
        var a; return En.a.wrap(function (e) {
          for (; ;)
            switch (e.prev = e.next) {
              case 0:
                if (n)
                  return e.next = 3, fe({ url: "/visit/get_binding", method: "get", params: { dev_client_id: n, ent_id: t } });
                e.next = 4;
                break;
              case 3: a = e.sent;
              case 4: return e.abrupt("return", a);
              case 5:
              case "end": return e.stop();
            }
        }, e);
      })); return function (e, t) { return n.apply(this, arguments); };
    }();
    function ea(t, e) {
      var n = C()(t); if (E.a) {
        var a = E()(t);
        e && (a = a.filter(function (e) { return x()(t, e).enumerable; })), n.push.apply(n, a);
      } return n;
    }
    var ta = function (e, t, n, a) {
      var o = t.widget_settings, i = t.standalone_window_config, r = t.ticket_config, c = t.survey, l = "zh-tw" === e.language ? "tw" : e.language, s = { isInit: !0, entId: e.entId, trackId: n, language: l, standalone: e.standalone, docLocation: e.docLocation, docTitle: e.docTitle, docReferrer: e.docReferrer, fallback: e.fallback, metadata: e.metadata, clientId: e.clientId, disableBrandLink: e.disableBrandLink, getInviting: e.getInviting, withoutBtn: e.withoutBtn, browserFamily: t.browser_family, browserId: t.browser_id, servability: t.servability, visitId: t.visit_id, visitPageId: t.visit_page_id, visitorStatus: t.visitor_status, visitorStatusAgentToken: t.visitor_status_agent_token }; K.a.set("MEIQIA_TRACK_ID", n, { expires: 1 / 0 }), window.parent.meiqia.event.emit("setTrackId", n), window.parent.meiqia.event.emit("setVisitId", t.visit_id), We("set", "_MEIQIA_LANGUAGE", l || "zh"), Ve("standalone", te.isMobile() ? {} : t.standalone_window_config.background), a(Bt(s)), a(W(!0)), a(qt(function (t) {
        for (var e = 1; e < arguments.length; e++) {
          var n = null != arguments[e] ? arguments[e] : {};
          e % 2 ? ea(n, !0).forEach(function (e) { j()(t, e, n[e]); }) : w.a ? v()(t, w()(n)) : ea(n).forEach(function (e) { f()(t, e, x()(n, e)); });
        } return t;
      }({}, o, { standalone: i }))), a(Ft(r)), a(Wt(c));
    };
    function na(t, e) {
      var n = C()(t); if (E.a) {
        var a = E()(t);
        e && (a = a.filter(function (e) { return x()(t, e).enumerable; })), n.push.apply(n, a);
      } return n;
    }
    function aa(t) {
      for (var e = 1; e < arguments.length; e++) {
        var n = null != arguments[e] ? arguments[e] : {};
        e % 2 ? na(n, !0).forEach(function (e) { j()(t, e, n[e]); }) : w.a ? v()(t, w()(n)) : na(n).forEach(function (e) { f()(t, e, x()(n, e)); });
      } return t;
    }
    function oa(e, t, n, a) {
      if (n && !e.standalone && t.servability) {
        tn(e.assign || {}), a(Et(aa({}, n)));
        var o = n.auto, i = o.status, r = o.countdown;
        "open" !== i || window.sessionStorage.getItem("MEIQIA_AUTO_INVITE_REJECTED") || setTimeout(function () { a(function (e, t) { return a(It(e, t, { inviteType: "auto" })); }); }, 1e3 * r);
      }
    }
    function ia(e, t, n) {
      var a = K.a.get("MEIQIA_HAS_SUBMITTED_FORM"), o = !1, i = null, r = !1, c = !1, l = !1; if ("open" === e.status && t && (o = "open" === e.status, c = "open" === (i = t.data).form_def.menus.status, l = "open" === i.form_def.inputs.status, a)) {
        for (var s = i.form_def.inputs.fields, d = 0, u = 0; u < s.length; u += 1)
          s[u].ignore_returned_customer && (s[u].ignore = !0, d += 1);
        d === s.length && (l = !(r = !0)), "close" === i.form_def.menus.status && r && (o = !1);
      } return n(Wt({ showSurvey: o, form: i, categoryEnabled: c, userFormEnabled: l })), null;
    }
    function ra(e, t, n) {
      var a = e.ent_welcome_message, o = e.enterprise_info, i = e.queueing_settings, r = e.scheduler_after_client_send_msg, c = e.visitor_status, l = e.standalone_window_config, s = e.widget_settings, d = e.send_file_settings, u = void 0 === d ? {} : d, p = We("get", "MEIQIA_RING"), m = t.standalone ? l.ring : s.ring; n(Ze({ entWelcomeMessage: a, enterpriseInfo: o, queueingSettings: i, schedulerAfterClientSendMsg: r, visitorStatus: c, assign: t.assign || {}, unReadPreview: "open" === s[sa].btn.preview, ringEnabled: p ? "TRUE" === p : "open" === m, fileEnabled: "open" === u.widget_status })); var h = null; try {
        var f = Ge("get");
        h = JSON.parse(f), $e()(h) && 0 === h.length && (h = null);
      }
      catch (e) {
        h = null;
      } h && (n(ot(h)), t.withoutBtn || n(G(!0)));
    }
    var ca = function () {
      var i = Cn()(En.a.mark(function e(n, a, o, i, r) {
        var c, l, s, d, u, p; return En.a.wrap(function (e) {
          for (; ;)
            switch (e.prev = e.next) {
              case 0:
                if (c = n.invitation_config, a || !c) {
                  e.next = 12;
                  break;
                }
                if ("open" === c.facade_status)
                  return l = aa({}, o, { entId: r, target: te.isMobile() ? "mobile" : "pc", currentUrl: i }), e.next = 7, fe({ url: "facade/get_facade_result", method: "get", params: { enterprise_id: (t = l).entId, source_page: t.source_page || "", returning: t.returning, country: t.location, target: t.target, landing_page: t.landing_page || "", keyword: t.keyword || "", search_engine: t.search_engine || "", direct: t.direct, source_type: t.source_type || "", current_url: t.currentUrl || "", v: (new Date).getTime() } });
                e.next = 11;
                break;
              case 7: return s = e.sent, d = s.data, u = d.look_config, p = d.mech_config, c = aa({}, c, {}, u, {}, p), e.abrupt("return", c);
              case 11: return e.abrupt("return", c);
              case 12: return e.abrupt("return", null);
              case 13:
              case "end": return e.stop();
            } var t;
        }, e);
      })); return function (e, t, n, a, o) { return i.apply(this, arguments); };
    }(), la = function () {
      var n = Cn()(En.a.mark(function e(t, n) {
        var a; return En.a.wrap(function (e) {
          for (; ;)
            switch (e.prev = e.next) {
              case 0:
                if (a = null, t && "open" === t.status)
                  return e.next = 4, fe({ url: "/client/forms", method: "get", params: { ent_id: n } });
                e.next = 5;
                break;
              case 4: a = e.sent;
              case 5: return e.abrupt("return", a);
              case 6:
              case "end": return e.stop();
            }
        }, e);
      })); return function (e, t) { return n.apply(this, arguments); };
    }(), sa = te.isMobile() ? "mobile" : "desktop", da = (n(255), n(457)), ua = n.n(da);
    function pa(t, e) {
      var n = C()(t); if (E.a) {
        var a = E()(t);
        e && (a = a.filter(function (e) { return x()(t, e).enumerable; })), n.push.apply(n, a);
      } return n;
    }
    function ma(t) { var e = en.dispatch, n = en.getState().get("message"); ga || (ga = !0, e(Xe({ id: 1 * ce()(), from_type: "redirect_agent" })), wn(), setTimeout(function () { var e = { exclude_agent_tokens: [n.getIn(["agent", "token"])] }; t && (e.unmatch_redirect = !0), Fn(e).finally(function () { ga = !1; }); }, 1e3)); }
    var ha = { name: "姓名", contact: "联系人", gender: "性别", age: "年龄", tel: "电话", qq: "QQ", weixin: "微信", weibo: "微博", address: "地址", email: "邮箱", comment: "备注" }, fa = function (e, t) {
      var n = [{
        type: "client_card", body: t.body.content.map(function (e) {
          var t = e.name, n = function (t) {
            for (var e = 1; e < arguments.length; e++) {
              var n = null != arguments[e] ? arguments[e] : {};
              e % 2 ? pa(n, !0).forEach(function (e) { j()(t, e, n[e]); }) : w.a ? v()(t, w()(n)) : pa(n).forEach(function (e) { f()(t, e, x()(n, e)); });
            } return t;
          }({}, e); return ha[t] && (n.displayName = ha[t]), n;
        })
      }], a = { id: "card-".concat(t.id), agent: { nickname: t.agent_nickname, avatar: t.avatar }, from_type: "agent", content_type: "hybrid", card_type: t.body.event_type, content: n, created_on: t.created_on }; e(Xe(a)), wn();
    }, ga = !1, ba = function (e) { var t = en.getState(), n = en.dispatch, a = t.get("router"), o = t.getIn(["config", "withoutBtn"]); a.get("showWidget") || (n(ot(e)), o || a.get("showBubble") || n(G(!0)), Ge("set", e)); };
    function va(t, e) {
      var n = C()(t); if (E.a) {
        var a = E()(t);
        e && (a = a.filter(function (e) { return x()(t, e).enumerable; })), n.push.apply(n, a);
      } return n;
    }
    function _a(t) {
      for (var e = 1; e < arguments.length; e++) {
        var n = null != arguments[e] ? arguments[e] : {};
        e % 2 ? va(n, !0).forEach(function (e) { j()(t, e, n[e]); }) : w.a ? v()(t, w()(n)) : va(n).forEach(function (e) { f()(t, e, x()(n, e)); });
      } return t;
    }
    var wa = null, ya = function (e) {
      var t = en.getState(), n = t.get("config"), a = t.get("router"), o = en.dispatch; switch (e.action) {
        case "message":
          var i = [];
          /^(text|welcome|photo|file|bot|rich_text|hybrid)$/.test(e.content_type) && ("hybrid" === e.content_type ? i.push(_a({}, e, { content: JSON.parse(e.content), _renderType: "normal" })) : i.push(_a({}, e, { _renderType: "normal" })), "photo" === e.content_type && yn(e.id)), a.get("showWidget") ? o(rt("newMessage")) : o(rt("newChat")), function () { var e = Te().getState(), t = te.isMobile() ? "mobile" : "desktop", n = e.getIn(["config", "standalone"]), a = e.getIn(["message", "convId"]), o = e.getIn(["theme", t, "pop"]); a && !n && o && ht(!0); }(), ba([e]), Rn(e), "redirect" === e.sub_type && ma({ unmatch: !0 }), /queueing|manual_redirect/.test(e.sub_type) && i.push({ id: Math.random(), from_type: "redirect_btn" }), "reply" === e.sub_type && i.push({ id: Math.random(), from_type: "redirect_message_board" }), o(Xe(i)), e.created_on && o(Ze({ lastMsgDate: e.created_on })), wn();
          break;
        case "end_conv_timeout":
        case "end_conv_agent":
        case "end_conv_client":
          o(rt("newChat")), Ve("endConversation"), Ge("remove"), e.body.evaluation && o(Ze({ evaluationActive: !0 })), o(lt(!1)), o(function (e, t) { return e(ve(e, t)); });
          break;
        case "agent_visit_inviting":
          n.get("servability") && (n.get("getInviting") ? Ve("getInviting", e.body.token) : (tn({ agentToken: e.body.token }), o(function (e, t) { return o(Ct(e, t, { inviteType: "manual" })); }), o(rt("newChat"))));
          break;
        case "agent_redirect":
        case "timeout_redirect":
          var r = { id: 1 * new Date, from_type: "redirect", toNickname: e.body.to.nickname };
          o(Xe(r)), wn(), o(rt("newChat")), o(Ze({ isBot: !1, agent: e.body.to, agentToken: e.body.to.token, convId: e.body.conversation_id, agentInfo: { avatar: e.body.to.avatar, name: e.body.to.nickname, signature: e.body.to.signature, cellphone: e.body.to.public_cellphone, tel: e.body.to.telephone } }));
          break;
        case "agent_inputting":
          t.getIn(["config", "servability"]) && (clearTimeout(wa), o(Ze({ agentInputing: !0 })), wa = setTimeout(function () { o(Ze({ agentInputing: !1 })); }, 4e3));
          break;
        case "invite_evaluation":
          o(rt("newChat")), o(Ze({ evaluationActive: !0 }));
          break;
        case "visit_black_add":
          o(rt("newChat")), o(Ze({ blacklist: !0 }));
          break;
        case "visit_black_del":
          o(rt("newChat")), o(Ze({ blacklist: !1 }));
          break;
        case "init_conv":
          o(rt("newChat")), o(Qt({ inQueue: !1 })), o(Ze({ scheduler: !0, chatHasEnd: !1, convId: e.body.id, agentToken: e.body.agent.token, agent: e.body.agent, agentInfo: { avatar: e.body.agent.avatar, name: e.body.agent.nickname, signature: e.body.agent.signature, cellphone: e.body.agent.public_cellphone, tel: e.body.agent.telephone } })), Ve("startConversation"), On({ firstTime: !0, sendFake: !0 });
          break;
        case "agent_send_card":
          fa(o, e);
          break;
        case "client_reply_card": !function (e, t) { var n = C()(t.body.attrs).map(function (e) { return R.a.t(ha[e]) || e; }).join("、"), a = { id: "card-".concat(t.id), from_type: "system_msg", content_type: "client_reply_card", content: "".concat(R.a.t("您已成功提交"), " ").concat(n), created_on: t.created_on }; e(Xe(a)), wn(); }(o, e);
      }
    }, xa = n(182), ka = n.n(xa), Ea = function (e, t) { var n = en.dispatch, a = { content: e }, o = { alertVisible: !0, alertConfig: Oe()(a, ka()(t) ? { timeout: t } : t) }; n(U(o)); }, Ia = null, Ca = null, Ta = ["xhr-streaming", "xdr-streaming", "xhr-polling", "xdr-polling", "jsonp-polling"];
    function Sa(o, i, n, a, r) {
      function c() { clearTimeout(Ia), Ia = setTimeout(function () { t._close(1007, "Heartbeat timed out."); }, 6e4); } function l(e) { return new Date(e).getTime(); } var e = "".concat(g.socket, "?browser_id=").concat(a, "&ent_id=").concat(o, "&track_id=").concat(i, "&visit_id=").concat(n), t = new ua.a(e, null, { transports: Ta }); t.onheartbeat = function () { t.send("h"), c(); }, t.onopen = function () {
        var e = en.getState(), t = e.getIn(["config", "isReconnect"]), n = e.get("message"); if (t && n.get("scheduler") && !n.get("chatHasEnd")) {
          var a = 1e3 * Math.floor(4 * Math.random() + 2);
          clearTimeout(Ca), Ca = setTimeout(function () {
            n.get("lastMsgDate") && St(o, i, "after", n.get("lastMsgDate")).then(function (e) {
              if (e.data) {
                var t = e.data, n = t.events, a = t.messages, o = n.concat(a);
                if (o.length) {
                  o.sort(function (e, t) { return l(e.created_on) > l(t.created_on) ? 1 : l(e.created_on) < l(t.created_on) ? -1 : 0; });
                  for (var i = 0; i < o.length; i += 1)
                    an(o[i].action + o[i].id) || ya(o[i]);
                }
              }
            });
          }, a);
        } r(Bt({ socket: !0 })), c();
      }, t.onmessage = function (e) {
        try {
          var t = JSON.parse(e.data);
          an(t.action + t.id) || ya(t);
        }
        catch (e) {
          console.log(e);
        }
      }, t.onclose = function () { var e = en.getState().get("config"); r(Bt({ socket: !1, isReconnect: !0 })); var t = 1e3 * Math.floor(4 * Math.random() + 4); setTimeout(function () { e.get("stopReconnect") || Sa(o, i, n, a, r); }, t), setTimeout(function () { e.get("socket") || (r(Bt({ stopReconnect: !0 })), Ea(R.a.t("连接已断开，请刷新页面"))); }, 2e4); };
    }
    void 0 !== window.WebSocket && (Ta = ["websocket"]);
    function ja(e, t) {
      if (4 === e.visitor_status && e.servability) {
        var n = We("get", "MEIQIA_PANEL_VISIBILITY") || "visible";
        Fn(), "visible" === n && ht(!0, "chat");
      } te.isMobile() && Ie("init");
    }
    function Na(e) { var t, n = Object(ue.useState)(null), a = Qn()(n, 2), o = a[0], i = a[1], r = e.component, c = e.children, l = e.GlobalStyle, s = Object(ue.useRef)(null); return r && (t = pe.a.createElement(r, Pa()({ frameRef: s }, e))), Object(ue.useEffect)(function () { var e = setTimeout(function () { i(s.current); }, 0); return function () { clearTimeout(e); }; }, [o, t]), pe.a.createElement(pe.a.Fragment, null, pe.a.createElement(d.a, { target: window.parent.document.head }, t), o && o.contentWindow && pe.a.createElement(d.a, { target: o.contentWindow.document.head }, pe.a.createElement(pe.a.Fragment, null, l ? pe.a.createElement(l, null) : null, pe.a.createElement(qa.a, { node: o.contentWindow.document.body }, c)))); }
    var Oa = {}, Ma = function () {
      var a = Cn()(En.a.mark(function e(y, x, k) {
        var E, I, C, T, S, j, N, O, M, z, D, B, A, P, q, R, L, F, U, W, V, G, H; return En.a.wrap(function (e) {
          for (; ;)
            switch (e.prev = e.next) {
              case 0: return x && (Oa = x), I = (E = Oa).docLocation, C = E.entId, T = E.clientId, S = E.getInviting, j = E.docTitle, N = E.docReferrer, O = Oa.trackId, M = {}, e.prev = 4, e.next = 7, fe({ url: "/visit/get_base_config", method: "get", params: { ent_id: C } });
              case 7:
                z = e.sent, M = z.data, e.next = 14;
                break;
              case 11: e.prev = 11, e.t0 = e.catch(4), console.log(e.t0);
              case 14:
                if (k) {
                  e.next = 20;
                  break;
                }
                return e.next = 17, Zn(Oa, M, y);
              case 17:
                if (e.sent)
                  return e.abrupt("return", !1);
                e.next = 20;
                break;
              case 20: return e.next = 22, Xn(C, T);
              case 22: return (D = e.sent) && D.data && (O = D.data.track_id), e.next = 26, g = C, b = O, v = I, _ = j, w = N, fe({ url: "visit/init", method: "jsonp", callbackParamName: "jsonp_cb", jsonp: "jsonp".concat((new Date).getTime()), params: { ent_id: g, track_id: b || "", title: _, referrer_url: w, url: v } });
              case 26:
                if (B = e.sent, A = B.data, B && !1 !== A.success) {
                  e.next = 30;
                  break;
                }
                return e.abrupt("return", !1);
              case 30: return P = A.facade, q = A.track_id, R = A.visit_id, L = A.browser_id, F = A.service_evaluation_config, U = A.survey, q && (O = q), e.next = 34, Q.a.all([ca(A, S, P, I, C, y), la(U, C)]);
              case 34: return W = e.sent, V = Qn()(W, 2), G = V[0], H = V[1], ta(Oa, A, O, y), oa(Oa, A, G, y), ia(U, H, y), h = y, void 0, f = A.robot_settings, h($t(f)), y(Gt(F)), ra(A, Oa, y), u = y, void 0, p = (d = A).in_queue, m = d.queueing_settings, u(Qt({ inQueue: p, intro: m.intro })), Sa(C, O, R, L, y), ja(A), a = Oa, o = y, s = void 0, i = (n = A).in_queue, r = n.visitor_status, c = n.visitor_info, l = n.mpush_settings, s = { enabled: !0, visitorInfo: c, templates: l }, !a.standalone && l || (s.enabled = !1), 4 === r || i ? o(be(s)) : (o(be(s)), o(function (e, t) { return e(ve(e, t)); })), t = A, "function" == typeof Oa.getInviting && t.servability && 2 === t.visitor_status && Ve("getInviting", t.visitor_status_agent_token), Ve("allSet", t.servability), e.abrupt("return", null);
              case 50:
              case "end": return e.stop();
            } var t, n, a, o, i, r, c, l, s, d, u, p, m, h, f, g, b, v, _, w;
        }, e, null, [[4, 11]]);
      })); return function (e, t, n) { return a.apply(this, arguments); };
    }(), za = function (o, i) {
      function r(e) { a ? e() : n.push(e); } var e, t = window.parent.meiqia, n = [], a = !1; return t && (e = t.event, t.manualInit || Ma(o, t), e.on("init", function () { Ma(o, t); }), e.on("showPanel", function () { var a = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {}; r(function () { var e = a.agentToken, t = a.groupToken, n = a.greeting; o(dt("click")), o(pt({ greeting: n, assign: { agentToken: e, groupToken: t } })), tn({ agentToken: e, groupToken: t }), Ie("init"), Gn(!0).then(function () { ht(!0, "chat"); }); }); }), e.on("hidePanel", function () { r(function () { ht(!1); }); }), e.on("metadata", function (t) { r(function () { var e = i.getState().get("config"); e.get("entId") && he(e.get("entId"), e.get("trackId"), e.get("visitId"), e.get("browserId"), t); }); }), e.on("ticket", function (a, o) {
        r(function () {
          var e = a, t = i.getState().get("config"); if (!t.get("entId"))
            return !1; var n = { data: { enterprise_id: t.get("entId"), track_id: t.get("trackId"), visit_id: t.get("visitId"), channel: "widget", content: e.ticketContent } }; return delete e.ticketContent, he(t.get("entId"), t.get("trackId"), t.get("visitId"), t.get("browserId"), e), wt(n).then(function () { "function" == typeof o && o(!0); }, function () { "function" == typeof o && o(!1, "保存失败"); }), !0;
        });
      }), e.on("closeConversation", function (n) { r(function () { var e = i.getState().get("config"); (function (e) { return fe({ url: "/client/end_conversation", method: "post", headers: { "content-type": "application/json" }, data: { ent_id: e.entId, track_id: e.trackId } }); })({ entId: e.get("entId"), trackId: e.get("trackId") }).then(function (e) { var t = null; e.data.success || (t = e.data.message || "failed"), "function" == typeof n && setTimeout(function () { n(t); }, 500); }, function (e) { "function" == typeof n && setTimeout(function () { n(u()(e)); }, 500); }); }); }), e.on("reopenConversation", function (e) { r(function () { "object" === l()(e) && e && tn(e), o(Ze({ convType: "newConv", scheduler: !1 })), Gn(!0); }); }), e.on("rejectInvitation", function () { r(function () { t.getInviting && o(_t); }); }), e.on("allSet", function () { a = !0, n.forEach(function (e) { e && "function" == typeof e && e(); }); })), e;
    }, Da = n(46), Ba = n.n(Da), Aa = n(3), Pa = n.n(Aa), qa = n(804), Ra = d.d.iframe.withConfig({ displayName: "base-button__BaseFrame", componentId: "sc-10my82n-0" })(["border:none;margin:0;padding:0;overflow-x:visible;overflow-y:visible;overflow-wrap:normal;display:", " !important;position:fixed;z-index:9999999;text-align:center;box-sizing:border-box;"], function (e) { return e.visible ? "block" : "none"; }), La = pe.a.forwardRef(function (e, t) { var n = e.frameRef; return pe.a.createElement(Ra, Pa()({}, e, { name: "button", ref: n })); }), Fa = window.parent.document.body.clientWidth;
    var Ua = function (t) {
      var i = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : 0, e = Object(ue.useState)(null), n = Qn()(e, 2), a = n[0], r = n[1]; return Object(ue.useEffect)(function () {
        if (t) {
          var e = new Image;
          e.src = t, e.onload = function (e) { var t = e.target.width, n = e.target.height, a = t, o = n; Fa && .9 * Fa < t && (o = n * (a = .9 * Fa) / t), r({ width: "".concat(a + i, "px"), height: "".concat(o + i, "px") }); };
        }
      }, [t, i]), a;
    }, Wa = function (e) { var t = Object(ue.useState)(!1), n = Qn()(t, 2), a = n[0], o = n[1], i = e.get("servability"), r = e.get("visitorStatus"); return Object(ue.useEffect)(function () { o(!0 === i || 4 === r); }, [i, r]), a; }, Va = {}, Ga = function (e, t) { var n, a = window.parent.document, o = a.getElementById("_calculateTextWidth"); return Va[t] || (o ? n = o : ((n = a.createElement("span")).id = "_calculateTextWidth", n.style.visibility = "hidden", n.style.fontSize = e, n.style.fontFamily = a.body.style.fontFamily, n.style.display = "inline-block", n.style.position = "absolute", n.style.left = "-100%", n.style.top = "-100%", a.body.appendChild(n)), void 0 !== n.textContent ? n.textContent = t : n.innerText = t, Va[t] = X()(window.getComputedStyle(n).width || n.clientWidth, 10)), Va[t]; };
    function Ha(t, e) {
      var n = C()(t); if (E.a) {
        var a = E()(t);
        e && (a = a.filter(function (e) { return x()(t, e).enumerable; })), n.push.apply(n, a);
      } return n;
    }
    function Qa(t) {
      for (var e = 1; e < arguments.length; e++) {
        var n = null != arguments[e] ? arguments[e] : {};
        e % 2 ? Ha(n, !0).forEach(function (e) { j()(t, e, n[e]); }) : w.a ? v()(t, w()(n)) : Ha(n).forEach(function (e) { f()(t, e, x()(n, e)); });
      } return t;
    }
    function Ya(e, t, n) {
      var a = e.getIn(["".concat(t), "btn"]); if (a) {
        var o = a.text, i = void 0 === o ? {} : o, r = n ? i.online : i.offline, c = "picture" === a.type ? "transparent" : "#".concat(a.theme);
        return Qa({}, function (e, t, n) {
          var a = {}, o = (Ga("16px", n) || 270) + 80 + 30; switch (e) {
            case "bottom":
              a.width = "".concat(o, "px"), a.height = "".concat(70, "px");
              break;
            case "round":
              a.width = "".concat(92, "px"), a.height = "".concat(92, "px");
              break;
            case "aside":
              a.width = "".concat(70, "px"), a.height = "".concat(o, "px");
              break;
            case "picture":
              a.width = "0", a.height = "0";
              break;
            case "call": a.width = "".concat(92, "px"), a.height = "".concat(92, "px");
          } if ("mobile" === t)
            switch (e) {
              case "bottom": a.width = "100%", a.height = "".concat(80, "px");
            } return a;
        }(a.type, t, r), {}, function (e, t, n) {
          var a = e.type, o = e.horizontal, i = e.bottom, r = {}; switch (r.bottom = "bottom" === t ? "-".concat(15, "px") : "".concat(i - 15, "px"), a) {
            case "right":
              r.right = "".concat(o - 15, "px"), "aside" === t && (r.right = "-".concat(15, "px")), "bottom" === t && "mobile" === n && (r.right = "0");
              break;
            case "left": r.left = "".concat(o - 15, "px"), "aside" === t && (r.left = "-".concat(15, "px")), "bottom" === t && "mobile" === n && (r.left = "0");
          } return r;
        }(a.position, a.type, t), { bgColor: c });
      } return {};
    }
    function $a(e) { var t = e.theme, n = e.config, a = te.isMobile() ? "mobile" : "desktop", o = Ka(t, n, a), i = e.frameRef; return pe.a.createElement(Za, Pa()({}, o, e, { ref: i })); }
    function Ja(e) { return pe.a.createElement(no, e); }
    var Ka = function (t, e, n) {
      var a = Object(ue.useState)(null), o = Qn()(a, 2), i = o[0], r = o[1], c = Wa(e); Object(ue.useEffect)(function () { var e = Ya(t, n, c); r(e); }, [n, t, c]); var l = function (e, t, n) {
        var a = e.getIn(["".concat(t), "btn"]); if (a) {
          var o = a.picture;
          return "picture" !== a.type ? null : n ? o.online : o.offline;
        } return null;
      }(t, n, c), s = Ua(l, 30); return s ? Qa({}, i, {}, s) : i;
    }, Za = Object(d.d)(La).withConfig({ displayName: "chat-button__ChatButtonStyle", componentId: "sc-1j23u9p-0" })(["bottom:", ";height:", " !important;width:", " !important;background-color:transparent;", " ", ""], function (e) { return e.bottom; }, function (e) { return e.height || 0; }, function (e) { return e.width || 0; }, function (e) { return e.left ? "left: ".concat(e.left, ";") : ""; }, function (e) { return e.right ? "right: ".concat(e.right, ";") : ""; }), Xa = Object(o.b)(function (e) { return { theme: e.get("theme"), config: e.get("config") }; }, function (e) { return { dispatch: e }; })(function (e) { return pe.a.createElement($a, e); }), eo = (n(129), n(47)), to = n.n(eo), no = d.d.span.withConfig({ displayName: "base-icon__Container", componentId: "sc-1ajxhaa-0" })(["vertical-align:middle;padding-right:", ";height:", ';display:inline-block;background:url("', '") no-repeat;background-position:', " ", ";background-size:", ";"], function (e) { return e.width; }, function (e) { return e.height; }, function (e) { return e.image; }, function (e) { return e.position[0]; }, function (e) { return e.position[1]; }, function (e) { return e.bgSize; }), ao = n(459), oo = n.n(ao), io = n(460), ro = n.n(io), co = n(461), lo = n.n(co);
    function so(t, e) {
      var n = C()(t); if (E.a) {
        var a = E()(t);
        e && (a = a.filter(function (e) { return x()(t, e).enumerable; })), n.push.apply(n, a);
      } return n;
    }
    var uo = [{ type: "face", info: ["-23px", "-1px"] }, { type: "picture", info: ["-23px", "-23px"] }, { type: "file", info: ["-23px", "-441px"] }, { type: "good", info: ["-23px", "-45px"] }, { type: "hide-white", info: ["-23px", "-67px"] }, { type: "hide-black", info: ["-2px", "-67px"] }, { type: "sound-white", info: ["-23px", "-89px"] }, { type: "sound-black", info: ["-2px", "-89px"] }, { type: "silent-white", info: ["-23px", "-111px"] }, { type: "silent-black", info: ["-2px", "-111px"] }, { type: "close", info: ["-2px", "-133px"] }, { type: "email", info: ["-1px", "-155px"] }, { type: "phone", info: ["-1px", "-177px"] }, { type: "qq", info: ["-1px", "-199px"] }, { type: "tele", info: ["-1px", "-221px"] }, { type: "error", info: ["-2px", "-244px"] }, { type: "wechat", info: ["-1px", "-287px"] }, { type: "eva-good", info: ["-2px", "-310px"] }, { type: "eva-normal", info: ["-2px", "-354px"] }, { type: "eva-bad", info: ["-2px", "-398px"] }, { type: "support", info: ["-1px", "-265px"] }, { type: "cancel", info: ["-23px", "-507px"] }, { type: "file-icon", info: ["-1px", "-530px"] }, { type: "download", info: ["-1px", "-463px"] }, { type: "call", info: ["-1px", "-573px"] }], po = [{ type: "chat-button-1", info: ["0", "-3px"] }, { type: "chat-button-2", info: ["0", "-35px"] }, { type: "chat-button-3", info: ["0", "-67px"] }, { type: "chat-button-4", info: ["0", "-99px"] }, { type: "chat-button-5", info: ["0", "-131px"] }, { type: "chat-button-6", info: ["0", "-163px"] }, { type: "chat-button-7", info: ["0", "-227px"] }, { type: "chat-button-8", info: ["0px", "-259px"] }, { type: "chat-button-9", info: ["0px", "-291px"] }, { type: "chat-button-10", info: ["0px", "-323px"] }, { type: "chat-button-11", info: ["0px", "-355px"] }, { type: "chat-button-12", info: ["0px", "-387px"] }, { type: "call-button-1", info: ["-31px", "-3px"] }, { type: "call-button-2", info: ["-31px", "-35px"] }, { type: "call-button-3", info: ["-31px", "-67px"] }, { type: "call-button-4", info: ["-31px", "-99px"] }, { type: "call-button-5", info: ["-31px", "-131px"] }, { type: "call-button-6", info: ["-31px", "-163px"] }, { type: "call-button-7", info: ["-31px", "-227px"] }, { type: "call-button-8", info: ["-31px", "-259px"] }, { type: "call-button-9", info: ["-31px", "-291px"] }, { type: "call-button-10", info: ["-31px", "-323px"] }, { type: "call-button-11", info: ["-31px", "-355px"] }, { type: "call-button-12", info: ["-31px", "-387px"] }, { type: "call-callback", info: ["-31px", "-451px"] }], mo = [{ type: "mobile-page-back", info: ["-25px", "-436px"] }], ho = d.d.label.withConfig({ displayName: "icon__Span", componentId: "sc-5foskt-0" })(["display:inline-block;vertical-align:middle;"]), fo = function (t) {
      var e, n = t.children, a = t.handleClick, o = t.className, i = to()(t, ["children", "handleClick", "className"]), r = uo.find(function (e) { return e.type === t.type; }), c = mo.find(function (e) { return e.type === t.type; }), l = po.find(function (e) { return e.type === t.type; }); if (r && (e = pe.a.createElement(Ja, Pa()({}, i, { image: oo.a, position: r.info, bgSize: "44px auto" }))), c && (e = pe.a.createElement(Ja, Pa()({}, i, { image: ro.a, position: c.info, bgSize: "44px auto" }))), l) {
        var s = function (t) {
          for (var e = 1; e < arguments.length; e++) {
            var n = null != arguments[e] ? arguments[e] : {};
            e % 2 ? so(n, !0).forEach(function (e) { j()(t, e, n[e]); }) : w.a ? v()(t, w()(n)) : so(n).forEach(function (e) { f()(t, e, x()(n, e)); });
          } return t;
        }({}, i, { width: "32px", height: "32px" });
        e = pe.a.createElement(Ja, Pa()({}, s, { image: lo.a, position: l.info, bgSize: "64px auto" }));
      } return pe.a.createElement(ho, { onClick: a, className: o }, e, n || null);
    }, go = d.d.div.withConfig({ displayName: "frame-button-content__Wrapper", componentId: "sc-1td9tx7-0" })(["height:100%;width:100%;background-color:#", ";", ";", ";", ";text-align:center;cursor:pointer;label{cursor:pointer;}"], function (e) { return e.bgColor; }, function (e) { return e.borderRadius ? "border-radius: ".concat(e.borderRadius) : ""; }, function (e) { return e.boxShadow ? "box-shadow: ".concat(e.boxShadow) : ""; }, function (e) { return e.position ? e.position : "position: relative;"; }), bo = d.d.div.withConfig({ displayName: "frame-button-content__BottomLeft", componentId: "sc-1td9tx7-1" })(["float:left;width:40px;height:30px;border-right:1px solid rgba(0,0,0,0.08);padding-top:10px;"]), vo = d.d.div.withConfig({ displayName: "frame-button-content__ButtonRight", componentId: "sc-1td9tx7-2" })(["line-height:40px;font-size:16px;color:#fff;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;width:calc(100% - 41px);"]), _o = d.d.div.withConfig({ displayName: "frame-button-content__RoundWrapper", componentId: "sc-1td9tx7-3" })(["padding-top:19px;"]), wo = d.d.div.withConfig({ displayName: "frame-button-content__AsideTop", componentId: "sc-1td9tx7-4" })(["height:30px;width:40px;line-height:40px;padding-top:10px;border-bottom:1px solid rgba(0,0,0,0.08);"]), yo = Object(d.d)(vo).withConfig({ displayName: "frame-button-content__AsideBottom", componentId: "sc-1td9tx7-5" })(["float:none;color:#fff;writing-mode:tb-rl;height:calc(100% - 41px);width:40px;"]), xo = d.d.div.withConfig({ displayName: "frame-button-content__MobileBottomLeft", componentId: "sc-1td9tx7-6" })(["height:35px;padding-top:10px;color:#fff;> span{padding-left:10px;line-height:20px;}"]), ko = d.d.div.withConfig({ displayName: "frame-button-content__Picture", componentId: "sc-1td9tx7-7" })(["width:100%;height:100%;background:url(", ") no-repeat;background-size:cover;"], function (e) { return e.selectPicture; }), Eo = d.d.div.withConfig({ displayName: "frame-button-content__Unread", componentId: "sc-1td9tx7-8" })(["height:24px;min-width:24px;line-height:24px;border-radius:50%;font-size:14px;color:#fff;position:absolute;", " top:-8px;background:#f00;"], function (e) { return e.styles ? e.styles : "left: -8px;"; }), Io = Object(o.b)(function (e) { return { theme: e.get("theme"), config: e.get("config"), unReadCount: e.getIn(["message", "unReadCount"]) }; }, function (e) { return { dispatch: e }; })(function (e) {
      var t = e.theme, n = e.config, a = e.unReadCount, o = te.isMobile(), i = o ? "mobile" : "desktop", r = t.getIn(["".concat(i), "btn"]), c = function (e) {
        var t = {}; if (e) {
          var n = e.type;
          switch (t.bgColor = e.theme, t.boxShadow = "rgba(0, 0, 0, 0.16) 0 5px 14px", n) {
            case "round":
            case "call":
              t.borderRadius = "50%";
              break;
            case "picture":
              t.bgColor = "transparent", t.boxShadow = "";
              break;
            case "bottom": te.isMobile() && (t.position = "position:absolute;left:0;right:0;top:15px;");
          }
        } return t;
      }(r), l = Wa(n, t), s = t.get("isLimitButton"), d = r && "round" === r.type, u = Object(ue.useRef)(null); return Object(ue.useEffect)(function () { var e = u.current; return d && o && Ue.register(e, "button", o), function () { o && Ue.unregister(e, !0); }; }, [d, o]), pe.a.createElement(go, Pa()({}, c, { ref: u }), 0 < a && "picture" !== r.type ? pe.a.createElement(Eo, { styles: function (e) { var t = "left", n = "-10px"; return e.position && (t = "right" === e.position.type ? "left" : "right"), "bottom" === e.type && te.isMobile() && (n = "0"), "".concat(t, ": ").concat(n, ";"); }(r) }, a) : null, function (e, t, n, a) {
        var o; if (e) {
          var i = e.type, r = void 0 === i ? "" : i, c = e.text, l = void 0 === c ? {} : c, s = e.icon, d = void 0 === s ? {} : s, u = e.picture, p = void 0 === u ? {} : u, m = "", h = "", f = "";
          switch (n ? (m = l.online, h = "chat-button-".concat(d.online), f = p.online, "call" === r && (h = "chat-button-1")) : (m = l.offline, h = "call-button-".concat(d.offline), f = p.offline, "call" === r && (h = "call-button-1")), a && (h = "chat-button-1"), r) {
            case "bottom":
              o = [pe.a.createElement(bo, { key: "left" }, pe.a.createElement(fo, { type: h })), pe.a.createElement(vo, { key: "right" }, m)];
              break;
            case "round":
            case "call":
              o = pe.a.createElement(_o, null, pe.a.createElement(fo, { type: h }));
              break;
            case "aside":
              o = [pe.a.createElement(wo, { key: "top" }, pe.a.createElement(fo, { type: h })), pe.a.createElement(yo, { key: "bottom" }, m)];
              break;
            case "picture": o = pe.a.createElement(ko, { selectPicture: f });
          }
          if ("mobile" === t)
            switch (r) {
              case "bottom": o = pe.a.createElement(xo, null, pe.a.createElement(fo, { type: h }), pe.a.createElement("span", null, m));
            }
        } return o;
      }(r, i, l, s));
    });
    function Co() { var e = Ba()(["\n  html,body {\n    height:100%;\n    width:100%;\n    margin:0;\n    padding:0;\n  }\n  body {\n    box-sizing: border-box;\n    /* iframe padding */\n    padding: 15px;\n  }\n"]); return Co = function () { return e; }, e; }
    var To = Object(d.c)(Co()), So = d.d.div.withConfig({ displayName: "router-button__Wrapper", componentId: "sc-1xlmfkg-0" })(["width:100%;height:100%;"]), jo = Object(o.b)(function (e) { return { router: e.get("router"), config: e.get("config"), theme: e.get("theme") }; }, function (e) { return { dispatch: e }; })(function (e) {
      var t = e.router, n = e.config, a = e.dispatch, o = e.theme.get("isLimitButton"), i = function () {
        var e = Cn()(En.a.mark(function e() {
          return En.a.wrap(function (e) {
            for (; ;)
              switch (e.prev = e.next) {
                case 0:
                  if (a(dt("click")), o)
                    return e.next = 4, Ma(a, null, !0);
                  e.next = 4;
                  break;
                case 4: tn(), Gn().then(function () { ht(!0, "chat"); });
                case 6:
                case "end": return e.stop();
              }
          }, e);
        })); return function () { return e.apply(this, arguments); };
      }(); return pe.a.createElement(Na, { visible: t.get("showButton") && !n.get("withoutBtn"), component: Xa, GlobalStyle: To, iframeName: "button" }, pe.a.createElement(So, { onClick: i }, pe.a.createElement(Io, null)));
    }), No = te.isMobile() ? "mobile" : "desktop", Oo = d.d.iframe.attrs({ allowtransparency: "true" }).withConfig({ displayName: "frame-bubble__BubbleFrame", componentId: "ik1xl9-0" })(["width:300px !important;height:140px !important;border:none;margin:0;padding:0;overflow-x:visible;overflow-y:visible;overflow-wrap:normal;position:fixed;z-index:9999999;cursor:pointer;display:", " !important;", " ", " ", " ", ""], function (e) { return e.visible ? "block" : "none"; }, function (e) { return e.left ? "left: ".concat(e.left, "px;") : ""; }, function (e) { return e.right ? "right: ".concat(e.right, "px;") : ""; }, function (e) { return "bottom: ".concat(e.bottom, "px;"); }, function (e) { return e.transform ? "transform: ".concat(e.transform, ";") : ""; }), Mo = pe.a.forwardRef(function (e, t) {
      var n = e.theme, a = e.config, o = e.frameRef, i = function (e, t) {
        function n(e) { return X()(e, 10) || 0; } var a = {}, o = e.getIn([No, "btn", "type"]), i = e.getIn([No, "btn", "position", "type"]); if ("desktop" == No)
          switch (o) {
            case "bottom":
              a[i] = n(t[i]), a.bottom = n(t.bottom) + n(t.height);
              break;
            case "aside":
              a[i] = n(t[i]) + n(t.width), a.bottom = n(t.bottom) + .4 * n(t.height);
              break;
            case "picture":
            case "round":
            case "call": a[i] = n(t[i]) + n(t.width), a.bottom = n(t.bottom) + .5 * n(t.height), a.transform = "translateY(50%)";
          }
        else
          switch (o) {
            case "bottom":
              a[i] = n(t[i]), a.bottom = n(t.bottom) + n(t.height);
              break;
            case "aside":
              a[i] = n(t[i]) + n(t.width), a.bottom = n(t.bottom) + .4 * n(t.height);
              break;
            case "picture":
            case "round":
              a[i] = n(t[i]), a.bottom = n(t.bottom) + n(t.height);
              break;
            case "call": a[i] = n(t[i]), a.bottom = n(t.bottom) + 2 * n(t.height) - 20;
          } return a;
      }(n, Ka(n, a, No)), r = n.getIn([No, "btn", "type"]), c = n.getIn([No, "btn", "position", "type"]); return pe.a.createElement(Oo, Pa()({}, e, { "data-direction": c, "data-type": r }, i, { name: "bubble", ref: o }));
    }), zo = Object(o.b)(function (e) { return { theme: e.get("theme"), config: e.get("config") }; })(Mo), Do = (n(151), d.d.div.withConfig({ displayName: "msg-text__Text", componentId: "sc-1jl8p2c-0" })(["color:", ";white-space:normal;text-align:left;"], function (e) { return e.fontColor; })), Bo = pe.a.memo(function (e) { return pe.a.createElement(Do, { fontColor: e.fontColor, dangerouslySetInnerHTML: { __html: e.msg } }); }), Ao = (n(202), { BG_COLOR: "#fff", MSG_MARGIN: 10 }), Po = d.d.div.withConfig({ displayName: "msg-base__Wrapper", componentId: "kwi7by-0" })(["margin-bottom:20px;", ";&:after{content:' ';display:table;clear:both;}"], function (e) { return "left" === e.direction ? "padding-right: ".concat(e.msgMargin) : "padding-left: ".concat(e.msgMargin); }), qo = d.d.img.withConfig({ displayName: "msg-base__Avatar", componentId: "kwi7by-1" })(["width:36px;height:36px;margin-right:10px;margin-top:16px;vertical-align:top;float:", ";"], function (e) { return e.direction; }), Ro = d.d.div.withConfig({ displayName: "msg-base__InfoWrapper", componentId: "kwi7by-2" })(["float:", ";text-align:", ";max-width:calc(100% - 50px);"], function (e) { return e.direction; }, function (e) { return e.direction; }), Lo = d.d.div.withConfig({ displayName: "msg-base__Name", componentId: "kwi7by-3" })(["color:#b2b2b2;font-size:12px;margin-bottom:2px;"]), Fo = d.d.div.withConfig({ displayName: "msg-base__MsgWrapper", componentId: "kwi7by-4" })(["max-width:100%;position:relative;background-color:", ";border-radius:3px;border:1px solid #f0f0f0;", " ", ""], function (e) { return e.themeColor; }, function (e) { return "right" === e.direction ? "margin-left: 30px;" : ""; }, function (e) { return "float: ".concat(e.direction, ";"); }), Uo = d.d.div.withConfig({ displayName: "msg-base__MsgStatus", componentId: "kwi7by-5" })(["position:absolute;top:8px;left:-22px;width:15px;height:100%;"]), Wo = d.d.div.withConfig({ displayName: "msg-base__MsgBox", componentId: "kwi7by-6" })(["padding:", ";border-radius:3px;font-size:13px;word-break:break-word;.emoji{width:20px;height:20px;vertical-align:text-bottom;}"], function (e) { return e.padding ? e.padding : "10px 15px"; }), Vo = d.d.div.withConfig({ displayName: "msg-base__Arrow", componentId: "kwi7by-7" })(["position:absolute;top:13px;border-top:5px solid transparent;border-bottom:5px solid transparent;", " ", ""], function (e) { return "left" === e.direction ? "left: -6px;" : "right: -6px;"; }, function (e) { return "left" === e.direction ? "border-right: 6px solid #fff;" : "border-left: 6px solid ".concat(e.themeColor, ";"); }), Go = d.d.div.withConfig({ displayName: "msg-base__ArrowBg", componentId: "kwi7by-8" })(["position:absolute;top:12px;border-top:6px solid transparent;border-bottom:6px solid transparent;", " ", ""], function (e) { return "left" === e.direction ? "left: -7px;" : "right: -7px;"; }, function (e) { return "left" === e.direction ? "border-right: 7px solid #f0f0f0;" : "border-left: 7px solid #f0f0f0;"; }), Ho = d.d.div.withConfig({ displayName: "msg-base__Evaluation", componentId: "kwi7by-9" })(["width:100%;height:30px;min-width:150px;line-height:30px;position:relative;border-top:solid 1px #eee;"]), Qo = d.d.span.withConfig({ displayName: "msg-base__EvaSpan", componentId: "kwi7by-10" })(["width:", ";height:100%;display:inline-block;color:", ";cursor:pointer;font-size:13px;text-align:center;"], function (e) { return e.width; }, function (e) { return e.color; }), Yo = d.d.div.withConfig({ displayName: "msg-base__Split", componentId: "kwi7by-11" })(["position:absolute;left:50%;top:0;bottom:0;width:1px;background:#eee;"]);
    function $o(e) { var t = e.id, n = e.questionId, a = e.arrow, o = void 0 !== a && a, i = e.msgMargin, r = void 0 === i ? Ao.MSG_MARGIN : i, c = e.themeColor, l = void 0 === c ? Ao.BG_COLOR : c, s = e.className, d = e.padding, u = e.name, p = e.time, m = e.direction, h = e.avatar, f = e.evaluateStatus, g = e.handleFeedback, b = e.status, v = e.handleMsgClick, _ = { themeColor: l, direction: m }, w = Object(me.c)(), y = Qn()(w, 1)[0]; return pe.a.createElement(Po, Pa()({}, _, { msgMargin: r }), h ? pe.a.createElement(qo, Pa()({ src: h }, _)) : null, pe.a.createElement(Ro, Pa()({}, _, { className: s }), pe.a.createElement(Lo, null, u ? "".concat(u, " ") : null, p || null), pe.a.createElement(Fo, _, "error" === b ? pe.a.createElement(Uo, null, pe.a.createElement(fo, { type: "error", width: "18px", height: "18px" })) : null, pe.a.createElement(Wo, { padding: d, onClick: v }, o ? pe.a.createElement(Go, _) : null, o ? pe.a.createElement(Vo, _) : null, e.children), f ? pe.a.createElement(Ho, null, "waiting" === f ? pe.a.createElement(pe.a.Fragment, null, pe.a.createElement(Qo, { width: "50%", color: "#6088e6", onClick: function () { return g(t, n, 1); } }, y("解决")), pe.a.createElement(Qo, { width: "50%", color: "#6088e6", onClick: function () { return g(t, n, 0); } }, y("未解决")), pe.a.createElement(Yo, null)) : null, "finish" === f ? pe.a.createElement(Qo, { width: "100%", color: "#aaa" }, y("已反馈")) : null, "submit" === f ? pe.a.createElement(Qo, { width: "100%", color: "#aaa" }, y("提交中")) : null) : null))); }
    var Jo = d.d.div.withConfig({ displayName: "msg-menu__MenuWrapper", componentId: "sc-13vi9i2-0" })(["width:100%;display:inline-block;overflow:hidden;.textBefore{color:#aaa;}"]), Ko = d.d.div.withConfig({ displayName: "msg-menu__Item", componentId: "sc-13vi9i2-1" })(["margin:3px 0;"]), Zo = d.d.a.withConfig({ displayName: "msg-menu__Anchor", componentId: "sc-13vi9i2-2" })(["font-size:13px;color:#6088e6;text-decoration:none;"]), Xo = d.d.span.withConfig({ displayName: "msg-menu__Span", componentId: "sc-13vi9i2-3" })(["font-size:13px;color:#6088e6;cursor:pointer;"]), ei = d.d.p.withConfig({ displayName: "msg-menu__Tip", componentId: "sc-13vi9i2-4" })(["color:#aaa;margin-top:1em;font-size:13px;"]);
    function ti(e) { var t, n = e.textBefore, a = e.textAfter, o = e.menuTip, i = e.items, r = e.handleMenuClick, c = void 0 === r ? function () { } : r; return pe.a.createElement(Jo, null, n ? pe.a.createElement("p", { className: "textBefore" }, n) : null, (t = i, pe.a.createElement("div", null, t.map(function (e) { return e.link ? pe.a.createElement(Ko, { key: e.value }, pe.a.createElement(Zo, { target: "_blank", href: e.link }, e.text)) : pe.a.createElement(Ko, { key: e.value }, pe.a.createElement(Xo, { onClick: function () { return c(e.text.trim().replace(/^\d+\.\s+/, "")); } }, e.text)); }))), a ? pe.a.createElement("p", null, a) : null, o ? pe.a.createElement(ei, null, o) : null); }
    function ni(e) { var t = e.content, n = e.handleImagePreview; return pe.a.createElement(oi, { onClick: function (e) { "IMG" === e.target.nodeName && e.target.src && n(e.target.src); }, dangerouslySetInnerHTML: { __html: t } }); }
    function ai(e) { return te.isMobile() && te.isSafari() ? [[RegExp("^".concat(e, "$"), "gm"), '<a target="_parent" href="tel:$1">$1</a>'], [RegExp("^".concat(e, "(\\D)"), "gm"), '<a target="_parent" href="tel:$1">$1</a>$2'], [RegExp("(\\D)".concat(e, "$"), "gm"), '$1<a target="_parent" href="tel:$2">$2</a>'], [RegExp("(\\D)".concat(e, "(\\D)"), "gm"), '$1<a target="_parent" href="tel:$2">$2</a>$3']] : [[RegExp("^".concat(e, "$"), "gm"), '<a target="_blank" href="tel:$1">$1</a>'], [RegExp("^".concat(e, "(\\D)"), "gm"), '<a target="_blank" href="tel:$1">$1</a>$2'], [RegExp("(\\D)".concat(e, "$"), "gm"), '$1<a target="_blank" href="tel:$2">$2</a>'], [RegExp("(\\D)".concat(e, "(\\D)"), "gm"), '$1<a target="_blank" href="tel:$2">$2</a>$3']]; }
    var oi = d.d.div.withConfig({ displayName: "msg-rich__RichWrapper", componentId: "sc-11bxmta-0" })(["width:100%;display:inline-block;overflow:hidden;"]), ii = pe.a.memo(function (e) { var t = e.content, n = e.handleMenuClick, a = e.handleImagePreview, o = $e()(t) ? t : [t], i = Object(me.c)(), r = Qn()(i, 1)[0]; return pe.a.createElement("div", null, o.map(function (e, t) { return "string" == typeof e ? pe.a.createElement("div", { key: t }, pe.a.createElement(ni, { content: e, handleImagePreview: a })) : "object" === l()(e) && "menu" === e.type ? pe.a.createElement("div", { key: t }, pe.a.createElement(ti, { handleMenuClick: n, items: e.items, textBefore: e.textBefore, menuTip: r("点击问题或回复数字查看答案") })) : pe.a.createElement("div", { key: t }, pe.a.createElement(ni, { content: e })); })); }), ri = n(462), ci = n.n(ri), li = [];
    li = (li = (li = (li = li.concat(ai("([1]\\d{10})"))).concat(ai("([48]00\\d?-?\\d{3,4}-?\\d{3,4})"))).concat(ai("(0\\d{2,3}-?\\d{7,8})"))).concat(ai("(\\d{8})"));
    function si(e, t) {
      var n = document.createElement("div"); n.innerHTML = e; for (var a = 0, o = n.childNodes.length; a < o; a += 1) {
        var i = n.childNodes[a];
        if (3 === i.nodeType) {
          var r = document.createElement("em");
          r.appendChild(i.cloneNode(!0));
          var c = r.innerHTML;
          r.innerHTML = r.innerHTML.replace(t[0], t[1]), r.innerHTML !== c && n.replaceChild(r, i);
        }
      } return n.innerHTML.replace(/<em>/g, "").replace(/<\/em>/g, "").replace(/&nbsp;/, " ");
    }
    function di(e) { var t = e; return C()(li).forEach(function (e) { t = si(t, li[e]); }), t; }
    function ui(e) { return e.replace(/\n/g, "<br/>"); }
    function pi(t, e, n, a) { var o, i = "<img class='".concat(n, "' src='").concat(e, "/").concat(encodeURIComponent(t[1]), ".png' "), r = a.attributes; return C()(r).forEach(function (e) { o = r[e], i += "".concat(e, "='").concat(o.apply(a, t), "' "); }), "".concat(i, "/>"); }
    var mi = di, hi = ui, fi = { title: function (e, t, n) { return null != n ? "".concat(n, " (").concat(t, ")") : t; }, alt: function (e) { return e; } }, gi = /:([a-z0-9_+-]+)(?:\[((?:[^\]]|\][^:])*\]?)\])?:/g, bi = function (e, a, t) { var o = t, i = ["+1", "-1", "100", "1234", "8ball", "a", "ab", "abc", "abcd", "accept", "aerial_tramway", "airplane", "alarm_clock", "alien", "ambulance", "anchor", "angel", "anger", "angry", "anguished", "ant", "apple", "aquarius", "aries", "arrow_backward", "arrow_double_down", "arrow_double_up", "arrow_down", "arrow_down_small", "arrow_forward", "arrow_heading_down", "arrow_heading_up", "arrow_left", "arrow_lower_left", "arrow_lower_right", "arrow_right", "arrow_right_hook", "arrow_up", "arrow_up_down", "arrow_up_small", "arrow_upper_left", "arrow_upper_right", "arrows_clockwise", "arrows_counterclockwise", "art", "articulated_lorry", "astonished", "atm", "b", "baby", "baby_bottle", "baby_chick", "baby_symbol", "baggage_claim", "balloon", "ballot_box_with_check", "bamboo", "banana", "bangbang", "bank", "bar_chart", "barber", "baseball", "basketball", "bath", "bathtub", "battery", "bear", "bee", "beer", "beers", "beetle", "beginner", "bell", "bento", "bicyclist", "bike", "bikini", "bird", "birthday", "black_circle", "black_joker", "black_nib", "black_square", "black_square_button", "blossom", "blowfish", "blue_book", "blue_car", "blue_heart", "blush", "boar", "boat", "bomb", "book", "bookmark", "bookmark_tabs", "books", "boom", "boot", "bouquet", "bow", "bowling", "bowtie", "boy", "bread", "bride_with_veil", "bridge_at_night", "briefcase", "broken_heart", "bug", "bulb", "bullettrain_front", "bullettrain_side", "bus", "busstop", "bust_in_silhouette", "busts_in_silhouette", "cactus", "cake", "calendar", "calling", "camel", "camera", "cancer", "candy", "capital_abcd", "capricorn", "car", "card_index", "carousel_horse", "cat", "cat2", "cd", "chart", "chart_with_downwards_trend", "chart_with_upwards_trend", "checkered_flag", "cherries", "cherry_blossom", "chestnut", "chicken", "children_crossing", "chocolate_bar", "christmas_tree", "church", "cinema", "circus_tent", "city_sunrise", "city_sunset", "cl", "clap", "clapper", "clipboard", "clock1", "clock10", "clock1030", "clock11", "clock1130", "clock12", "clock1230", "clock130", "clock2", "clock230", "clock3", "clock330", "clock4", "clock430", "clock5", "clock530", "clock6", "clock630", "clock7", "clock730", "clock8", "clock830", "clock9", "clock930", "closed_book", "closed_lock_with_key", "closed_umbrella", "cloud", "clubs", "cn", "cocktail", "coffee", "cold_sweat", "collision", "computer", "confetti_ball", "confounded", "confused", "congratulations", "construction", "construction_worker", "convenience_store", "cookie", "cool", "cop", "copyright", "corn", "couple", "couple_with_heart", "couplekiss", "cow", "cow2", "credit_card", "crocodile", "crossed_flags", "crown", "cry", "crying_cat_face", "crystal_ball", "cupid", "curly_loop", "currency_exchange", "curry", "custard", "customs", "cyclone", "dancer", "dancers", "dango", "dart", "dash", "date", "de", "deciduous_tree", "department_store", "diamond_shape_with_a_dot_inside", "diamonds", "disappointed", "disappointed_relieved", "dizzy", "dizzy_face", "do_not_litter", "dog", "dog2", "dollar", "dolls", "dolphin", "donut", "door", "doughnut", "dragon", "dragon_face", "dress", "dromedary_camel", "droplet", "dvd", "e-mail", "ear", "ear_of_rice", "earth_africa", "earth_americas", "earth_asia", "egg", "eggplant", "eight", "eight_pointed_black_star", "eight_spoked_asterisk", "electric_plug", "elephant", "email", "end", "envelope", "es", "euro", "european_castle", "european_post_office", "evergreen_tree", "exclamation", "expressionless", "eyeglasses", "eyes", "facepunch", "factory", "fallen_leaf", "family", "fast_forward", "fax", "fearful", "feelsgood", "feet", "ferris_wheel", "file_folder", "finnadie", "fire", "fire_engine", "fireworks", "first_quarter_moon", "first_quarter_moon_with_face", "fish", "fish_cake", "fishing_pole_and_fish", "fist", "five", "flags", "flashlight", "floppy_disk", "flower_playing_cards", "flushed", "foggy", "football", "fork_and_knife", "fountain", "four", "four_leaf_clover", "fr", "free", "fried_shrimp", "fries", "frog", "frowning", "fu", "fuelpump", "full_moon", "full_moon_with_face", "game_die", "gb", "gem", "gemini", "ghost", "gift", "gift_heart", "girl", "globe_with_meridians", "goat", "goberserk", "godmode", "golf", "grapes", "green_apple", "green_book", "green_heart", "grey_exclamation", "grey_question", "grimacing", "grin", "grinning", "guardsman", "guitar", "gun", "haircut", "hamburger", "hammer", "hamster", "hand", "handbag", "hankey", "hash", "hatched_chick", "hatching_chick", "headphones", "hear_no_evil", "heart", "heart_decoration", "heart_eyes", "heart_eyes_cat", "heartbeat", "heartpulse", "hearts", "heavy_check_mark", "heavy_division_sign", "heavy_dollar_sign", "heavy_exclamation_mark", "heavy_minus_sign", "heavy_multiplication_x", "heavy_plus_sign", "helicopter", "herb", "hibiscus", "high_brightness", "high_heel", "hocho", "honey_pot", "honeybee", "horse", "horse_racing", "hospital", "hotel", "hotsprings", "hourglass", "hourglass_flowing_sand", "house", "house_with_garden", "hurtrealbad", "hushed", "ice_cream", "icecream", "id", "ideograph_advantage", "imp", "inbox_tray", "incoming_envelope", "information_desk_person", "information_source", "innocent", "interrobang", "iphone", "it", "izakaya_lantern", "jack_o_lantern", "japan", "japanese_castle", "japanese_goblin", "japanese_ogre", "jeans", "joy", "joy_cat", "jp", "key", "keycap_ten", "kimono", "kiss", "kissing", "kissing_cat", "kissing_closed_eyes", "kissing_face", "kissing_heart", "kissing_smiling_eyes", "koala", "koko", "kr", "large_blue_circle", "large_blue_diamond", "large_orange_diamond", "last_quarter_moon", "last_quarter_moon_with_face", "laughing", "leaves", "ledger", "left_luggage", "left_right_arrow", "leftwards_arrow_with_hook", "lemon", "leo", "leopard", "libra", "light_rail", "link", "lips", "lipstick", "lock", "lock_with_ink_pen", "lollipop", "loop", "loudspeaker", "love_hotel", "love_letter", "low_brightness", "m", "mag", "mag_right", "mahjong", "mailbox", "mailbox_closed", "mailbox_with_mail", "mailbox_with_no_mail", "man", "man_with_gua_pi_mao", "man_with_turban", "mans_shoe", "maple_leaf", "mask", "massage", "meat_on_bone", "mega", "melon", "memo", "mens", "metal", "metro", "microphone", "microscope", "milky_way", "minibus", "minidisc", "mobile_phone_off", "money_with_wings", "moneybag", "monkey", "monkey_face", "monorail", "moon", "mortar_board", "mount_fuji", "mountain_bicyclist", "mountain_cableway", "mountain_railway", "mouse", "mouse2", "movie_camera", "moyai", "muscle", "mushroom", "musical_keyboard", "musical_note", "musical_score", "mute", "nail_care", "name_badge", "neckbeard", "necktie", "negative_squared_cross_mark", "neutral_face", "new", "new_moon", "new_moon_with_face", "newspaper", "ng", "nine", "no_bell", "no_bicycles", "no_entry", "no_entry_sign", "no_good", "no_mobile_phones", "no_mouth", "no_pedestrians", "no_smoking", "non-potable_water", "nose", "notebook", "notebook_with_decorative_cover", "notes", "nut_and_bolt", "o", "o2", "ocean", "octocat", "octopus", "oden", "office", "ok", "ok_hand", "ok_woman", "older_man", "older_woman", "on", "oncoming_automobile", "oncoming_bus", "oncoming_police_car", "oncoming_taxi", "one", "open_file_folder", "open_hands", "open_mouth", "ophiuchus", "orange_book", "outbox_tray", "ox", "page_facing_up", "page_with_curl", "pager", "palm_tree", "panda_face", "paperclip", "parking", "part_alternation_mark", "partly_sunny", "passport_control", "paw_prints", "peach", "pear", "pencil", "pencil2", "penguin", "pensive", "performing_arts", "persevere", "person_frowning", "person_with_blond_hair", "person_with_pouting_face", "phone", "pig", "pig2", "pig_nose", "pill", "pineapple", "pisces", "pizza", "plus1", "point_down", "point_left", "point_right", "point_up", "point_up_2", "police_car", "poodle", "poop", "post_office", "postal_horn", "postbox", "potable_water", "pouch", "poultry_leg", "pound", "pouting_cat", "pray", "princess", "punch", "purple_heart", "purse", "pushpin", "put_litter_in_its_place", "question", "rabbit", "rabbit2", "racehorse", "radio", "radio_button", "rage", "rage1", "rage2", "rage3", "rage4", "railway_car", "rainbow", "raised_hand", "raised_hands", "raising_hand", "ram", "ramen", "rat", "recycle", "red_car", "red_circle", "registered", "relaxed", "relieved", "repeat", "repeat_one", "restroom", "revolving_hearts", "rewind", "ribbon", "rice", "rice_ball", "rice_cracker", "rice_scene", "ring", "rocket", "roller_coaster", "rooster", "rose", "rotating_light", "round_pushpin", "rowboat", "ru", "rugby_football", "runner", "running", "running_shirt_with_sash", "sa", "sagittarius", "sailboat", "sake", "sandal", "santa", "satellite", "satisfied", "saxophone", "school", "school_satchel", "scissors", "scorpius", "scream", "scream_cat", "scroll", "seat", "secret", "see_no_evil", "seedling", "seven", "shaved_ice", "sheep", "shell", "ship", "shipit", "shirt", "shit", "shoe", "shower", "signal_strength", "six", "six_pointed_star", "ski", "skull", "sleeping", "sleepy", "slot_machine", "small_blue_diamond", "small_orange_diamond", "small_red_triangle", "small_red_triangle_down", "smile", "smile_cat", "smiley", "smiley_cat", "smiling_imp", "smirk", "smirk_cat", "smoking", "snail", "snake", "snowboarder", "snowflake", "snowman", "sob", "soccer", "soon", "sos", "sound", "space_invader", "spades", "spaghetti", "sparkler", "sparkles", "sparkling_heart", "speak_no_evil", "speaker", "speech_balloon", "speedboat", "squirrel", "star", "star2", "stars", "station", "statue_of_liberty", "steam_locomotive", "stew", "straight_ruler", "strawberry", "stuck_out_tongue", "stuck_out_tongue_closed_eyes", "stuck_out_tongue_winking_eye", "sun_with_face", "sunflower", "sunglasses", "sunny", "sunrise", "sunrise_over_mountains", "surfer", "sushi", "suspect", "suspension_railway", "sweat", "sweat_drops", "sweat_smile", "sweet_potato", "swimmer", "symbols", "syringe", "tada", "tanabata_tree", "tangerine", "taurus", "taxi", "tea", "telephone", "telephone_receiver", "telescope", "tennis", "tent", "thought_balloon", "three", "thumbsdown", "thumbsup", "ticket", "tiger", "tiger2", "tired_face", "tm", "toilet", "tokyo_tower", "tomato", "tongue", "top", "tophat", "tractor", "traffic_light", "train", "train2", "tram", "triangular_flag_on_post", "triangular_ruler", "trident", "triumph", "trolleybus", "trollface", "trophy", "tropical_drink", "tropical_fish", "truck", "trumpet", "tshirt", "tulip", "turtle", "tv", "twisted_rightwards_arrows", "two", "two_hearts", "two_men_holding_hands", "two_women_holding_hands", "u5272", "u5408", "u55b6", "u6307", "u6708", "u6709", "u6e80", "u7121", "u7533", "u7981", "u7a7a", "uk", "umbrella", "unamused", "underage", "unlock", "up", "us", "v", "vertical_traffic_light", "vhs", "vibration_mode", "video_camera", "video_game", "violin", "virgo", "volcano", "vs", "walking", "waning_crescent_moon", "waning_gibbous_moon", "warning", "watch", "water_buffalo", "watermelon", "wave", "wavy_dash", "waxing_crescent_moon", "waxing_gibbous_moon", "wc", "weary", "wedding", "whale", "whale2", "wheelchair", "white_check_mark", "white_circle", "white_flower", "white_large_square", "white_square_button", "wind_chime", "wine_glass", "wink", "wolf", "woman", "womans_clothes", "womans_hat", "womens", "worried", "wrench", "x", "yellow_heart", "yen", "yum", "zap", "zero", "zzz"]; null == o && (o = {}), "function" == typeof o ? o = { parser: o } : (null == o.attributes && (o.attributes = fi), null == o.parser && (o.parser = pi)); var r = null != o.classes ? o.classes : "emoji"; return e.replace(gi, function (e, t, n) { return -1 === i.indexOf(t) ? e : o.parser([e, t, n], a, r, o); }); }, vi = function () {
      var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : "", t = function () {
        for (var e = arguments.length, n = new Array(e), t = 0; t < e; t++)
          n[t] = arguments[t]; return function (e) { var t = e; return n.forEach(function (e) { t = e(t); }), t; };
      }(function (e) { return ci()(e); }, function (e) { return mi(e); }, function (e) { return hi(e); }, function (e) { return bi(e, "".concat(g.public, "emoji")); }); return $e()(e) ? e.map(function (e) { return t(e); }) : t(e);
    };
    function _i(t, e) {
      var n = C()(t); if (E.a) {
        var a = E()(t);
        e && (a = a.filter(function (e) { return x()(t, e).enumerable; })), n.push.apply(n, a);
      } return n;
    }
    var wi = pe.a.memo(function (e) {
      var t = e.content.map(function (e) {
        var t = null; return "text" === e.type ? t = e.rich_text || vi(e.text) : "menu" !== e.type && "related" !== e.type || (t = {
          type: "menu", items: e.items.map(function (e) {
            return function (t) {
              for (var e = 1; e < arguments.length; e++) {
                var n = null != arguments[e] ? arguments[e] : {};
                e % 2 ? _i(n, !0).forEach(function (e) { j()(t, e, n[e]); }) : w.a ? v()(t, w()(n)) : _i(n).forEach(function (e) { f()(t, e, x()(n, e)); });
              } return t;
            }({}, e, { text: vi(e.text) });
          }), textBefore: e.text_before
        }), t;
      }); return pe.a.createElement(ii, Pa()({}, e, { content: t }));
    }), yi = d.d.a.withConfig({ displayName: "msg-pic__ImgWrapper", componentId: "ii1wvc-0" })(["width:auto;max-width:100%;cursor:pointer;"]), xi = d.d.img.withConfig({ displayName: "msg-pic__Img", componentId: "ii1wvc-1" })(["max-width:100%;max-height:", ";"], function (e) { return e.loadStatus ? "280px" : "30px"; });
    function ki(e) { var t = e.id, n = e.url, a = e.status, o = e.handleOnload, i = void 0 === o ? function () { } : o, r = e.handleImagePreview, c = {}, l = Object(ue.useState)(!0), s = Qn()(l, 2), d = s[0], u = s[1], p = Object(ue.useCallback)(i, []); return "error" === a || "sending" === a || te.isMobile() ? c.href = "javascript:void(0);" : (c.target = "_blank", c.href = n), pe.a.createElement(yi, c, pe.a.createElement(xi, { src: n, alt: "图片加载失败", loadStatus: d, onClick: function (e) { "IMG" === e.target.nodeName && e.target.src && r(e.target.src); }, onLoad: function () { return p(t); }, onError: function (e) { u(!1), p(t); } })); }
    var Ei = d.d.div.withConfig({ displayName: "msg-file__FileWrapper", componentId: "m3rns3-0" })(["width:100%;position:relative;padding-left:50px;box-sizing:border-box;background:#fff;&:after{content:' ';display:table;clear:both;}"]), Ii = d.d.div.withConfig({ displayName: "msg-file__FileIcon", componentId: "m3rns3-1" })(["position:absolute;left:0;top:0;bottom:0;"]), Ci = d.d.div.withConfig({ displayName: "msg-file__FileInfo", componentId: "m3rns3-2" })(["width:100%;min-width:130px;height:42px;"]), Ti = d.d.div.withConfig({ displayName: "msg-file__FileDiv", componentId: "m3rns3-3" })(["text-overflow:ellipsis;overflow:hidden;white-space:nowrap;font-size:12px;text-align:left;"]), Si = d.d.div.withConfig({ displayName: "msg-file__FileTitle", componentId: "m3rns3-4" })(["position:relative;box-sizing:border-box;text-align:left;.name{padding-right:56px;text-overflow:ellipsis;overflow:hidden;white-space:nowrap;font-size:12px;color:#333;}.size{position:absolute;top:0;right:0;font-size:12px;color:#777;}"]), ji = Object(d.d)(Ti).withConfig({ displayName: "msg-file__FileStatus", componentId: "m3rns3-5" })(["color:#777;margin-top:10px;"]), Ni = d.d.div.withConfig({ displayName: "msg-file__FileSpeed", componentId: "m3rns3-6" })(["width:70%;font-size:12px;color:#777;text-align:left;margin-top:3px;"]), Oi = d.d.div.withConfig({ displayName: "msg-file__Upload", componentId: "m3rns3-7" })(["position:absolute;z-index:10;top:26px;width:70%;padding-right:0;box-sizing:border-box;"]), Mi = d.d.div.withConfig({ displayName: "msg-file__UploadHolder", componentId: "m3rns3-8" })(["width:100%;height:3px;background:#f4f4f4;position:relative;"]), zi = d.d.div.withConfig({ displayName: "msg-file__UploadProgress", componentId: "m3rns3-9" })(["width:", "%;max-width:100%;height:3px;background:#4ca0ff;position:absolute;left:0;top:0;bottom:0;"], function (e) { return e.progress; }), Di = Object(d.d)(fo).withConfig({ displayName: "msg-file__UploadCancel", componentId: "m3rns3-10" })(["position:absolute;right:-18px;top:-9px;"]), Bi = Object(d.d)(fo).withConfig({ displayName: "msg-file__Download", componentId: "m3rns3-11" })(["cursor:pointer;position:absolute;right:0;bottom:0;vertical-align:middle;& > a{text-decoration:none;font-size:12px;color:#4ca0ff;display:inline-block;vertical-align:middle;}"]);
    function Ai(e) { var t = e.id, n = e.fileName, a = e.fileSize, o = e.fileStatus, i = e.fileUrl, r = e.status, c = e.progress, l = e.speed, s = e.cancelUpload, d = e.disableDownload, u = e.handleFileDownload, p = Object(me.c)(), m = Qn()(p, 1)[0]; return pe.a.createElement(Ei, null, pe.a.createElement(Ii, null, pe.a.createElement(fo, { width: "40px", height: "40px", type: "file-icon" })), pe.a.createElement(Ci, null, pe.a.createElement(Si, null, pe.a.createElement("div", { className: "name" }, n), pe.a.createElement("div", { className: "size" }, a)), "uploading" === r ? pe.a.createElement(Oi, null, pe.a.createElement(Mi, null, pe.a.createElement(zi, { progress: c }), pe.a.createElement(Di, { type: "cancel", width: "19px", height: "19px", onClick: function () { return s(t); } })), pe.a.createElement(Ni, null, "".concat(m("上传中"), " ").concat(l))) : pe.a.createElement(ji, null, o), "uploading" === r || "cancel" === r || d ? null : pe.a.createElement(Bi, { type: "download", width: "20px", height: "20px" }, pe.a.createElement("a", { href: i, rel: "noopener noreferrer", target: "_blank", onClick: function () { return u(t); } }, m("下载"))))); }
    var Pi = d.d.span.withConfig({ displayName: "msg-forward__Name", componentId: "jo8bzh-0" })(["color:#2ac8d1;padding:0 4px;"]);
    function qi(e) { var t = e.name; return pe.a.createElement("span", null, pe.a.createElement(me.a, null, "接下来由", pe.a.createElement(Pi, null, { name: t }), "为您服务")); }
    var Ri = d.d.span.withConfig({ displayName: "msg-evaluation__Assess", componentId: "bhk0uy-0" })(["color:", ";padding:0 4px;"], function (e) { return 2 === e.level ? "#00ce7d" : 1 === e.level ? "#ffb652" : "#ff5c5e"; });
    function Li(e) { var t = e.level, n = e.levelText, a = e.content, o = Object(me.c)(), i = Qn()(o, 1)[0]; return pe.a.createElement("div", null, pe.a.createElement("span", null, i("你给出了"), pe.a.createElement(Ri, { level: t }, n)), a ? pe.a.createElement("span", null, pe.a.createElement("br", null), a) : null); }
    var Fi = d.d.div.withConfig({ displayName: "msg-system__Container", componentId: "sc-1pwbj0o-0" })(["width:100%;color:#999;font-size:12px;text-align:center;margin-bottom:20px;"]), Ui = pe.a.memo(function (e) { return pe.a.createElement(Fi, null, e.children); }), Wi = d.d.span.withConfig({ displayName: "msg-link__Name", componentId: "sc-1a5zov3-0" })(["color:#6088e6;padding:0 4px;cursor:pointer;"]);
    function Vi(e) { var t = e.handleClick, n = e.children, a = e.prevContent, o = void 0 === a ? null : a, i = e.afterContent, r = void 0 === i ? null : i; return pe.a.createElement(Ui, null, o, pe.a.createElement(Wi, { onClick: t }, n), r); }
    var Gi = d.d.a.attrs({ href: "javascript:void(0)" }).withConfig({ displayName: "button__Anchor", componentId: "sc-1v9a63l-0" })(["width:", ";height:", ";line-height:", ";display:inline-block;vertical-align:middle;font-size:", ";border:0;outline:none;border-radius:3px;cursor:pointer;text-align:center;text-decoration:none;opacity:", ";color:", ";background:", ";&:hover{color:", ";background:", ";opacity:1;}"], function (e) { return e.width || "60px"; }, function (e) { return e.height || "30px"; }, function (e) { return e.height || "30px"; }, function (e) { return e.fontSize || "13px"; }, function (e) { return e.opacity || 1; }, function (e) { return e.disabled ? "#fff" : e.fontColor || "#000"; }, function (e) { return e.disabled ? "#aaa" : e.bgColor || "#fff"; }, function (e) { return e.disabled ? "#fff" : e.fontHoverColor || e.fontColor; }, function (e) { return e.disabled ? "#aaa" : e.bgHoverColor || e.bgColor; });
    function Hi(e) { var t = e.handleClick, n = e.data, a = (e.children, e.disabled), o = to()(e, ["handleClick", "data", "children", "disabled"]), i = Object(ue.useCallback)(function () { a || t(n); }, [t, n, a]); return pe.a.createElement(Gi, Pa()({}, o, { disabled: a, onClick: i }), e.children || null); }
    function Qi(e) {
      var t = e.name, i = e.multi, n = e.options, a = e.value, r = e.handleChange, o = $e()(a) ? a.join(", ") : a; return pe.a.createElement(Ki, null, pe.a.createElement(Zi, {
        name: t, multiple: i, value: a, onChange: function (e) {
          if (i) {
            for (var t = e.target.options, n = [], a = 0, o = t.length; a < o; a += 1)
              t[a].selected && n.push(t[a].value);
            r(n);
          }
          else
            r(e.target.value);
        }
      }, i ? null : pe.a.createElement("option", { disabled: !0, value: !0, selected: !0, style: { display: "none" } }), n.map(function (e) { return pe.a.createElement("option", { key: e.value, value: e.value }, e.label); })), pe.a.createElement(Xi, null, o));
    }
    function Yi(e) {
      function n(e) {
        var t = e.target, n = t.value, a = t.checked, o = Qe()(u); if (a)
          p(o.concat([n])), l(o.concat([n]));
        else {
          var i = o.findIndex(function (e) { return e === n; });
          o.splice(i, 1), p(o), l(o);
        }
      } var t, a, o = e.name, i = e.options, r = e.multi, c = e.value, l = e.handleChange, s = Object(ue.useState)([]), d = Qn()(s, 2), u = d[0], p = d[1]; return r ? (a = i, pe.a.createElement(er, null, a.map(function (e, t) { return pe.a.createElement("label", { key: t, className: "item" }, pe.a.createElement("input", { name: o, type: "checkbox", value: e.value, onChange: n }), e.label); }))) : (t = i, pe.a.createElement(tr, { name: o, value: c, onChange: function (e) { return l(e.target.value); } }, pe.a.createElement("option", { value: "" }, " "), t.map(function (e) { return pe.a.createElement("option", { key: e.value, value: e.value }, e.label); })));
    }
    function $i(e) { return te.isMobile() ? pe.a.createElement(Qi, e) : pe.a.createElement(Yi, e); }
    function Ji(e) { var t = e.value, n = e.handleChange; return pe.a.createElement(ar, null, pe.a.createElement(or, null, pe.a.createElement("input", { type: "datetime-local", onChange: function (e) { n(new Date(e.target.value.replace(/-/g, "/").replace("T", " "))); } })), pe.a.createElement(ir, null, t ? t.toLocaleString() : "")); }
    var Ki = d.d.div.withConfig({ displayName: "mobile-select__Container", componentId: "sc-6uf7qh-0" })(["width:100%;height:28px;position:relative;box-sizing:border-box;"]), Zi = d.d.select.withConfig({ displayName: "mobile-select__Select", componentId: "sc-6uf7qh-1" })(["opacity:0;width:100%;position:absolute;top:0;bottom:0;left:0;right:0;"]), Xi = d.d.div.withConfig({ displayName: "mobile-select__Mask", componentId: "sc-6uf7qh-2" })(["width:100%;height:28px;line-height:28px;border-radius:2px;padding:0 5px;box-sizing:border-box;color:#4a4a4a;background-color:#fff;box-shadow:inset 0px 1px 6px 0px rgba(0,0,0,0.1);border:1px solid rgba(199,199,199,1);"]), er = d.d.div.withConfig({ displayName: "pc-select__CheckboxContainer", componentId: "ylovj-0" })(["margin:0;.item{display:block;color:#333333;padding:5px 0;}"]), tr = d.d.select.withConfig({ displayName: "pc-select__Select", componentId: "ylovj-1" })(["height:28px;width:100%;display:block;outline:none;background:#fff;box-shadow:inset 0px 1px 6px 0px rgba(0,0,0,0.1);border:1px solid rgba(199,199,199,1);"]), nr = n(477), ar = d.d.div.withConfig({ displayName: "mobile-picker__Container", componentId: "qq62kn-0" })(["width:100%;height:28px;position:relative;box-sizing:border-box;"]), or = d.d.label.withConfig({ displayName: "mobile-picker__Label", componentId: "qq62kn-1" })(["opacity:0;position:absolute;top:0;bottom:0;left:0;right:0;"]), ir = d.d.div.withConfig({ displayName: "mobile-picker__Mask", componentId: "qq62kn-2" })(["width:100%;height:28px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;line-height:28px;border-radius:2px;padding:0 5px;box-sizing:border-box;color:#4a4a4a;background-color:#fff;box-shadow:inset 0px 1px 6px 0px rgba(0,0,0,0.1);border:1px solid rgba(199,199,199,1);"]), rr = n(55), cr = n.n(rr), lr = n(56), sr = n.n(lr), dr = n(57), ur = n.n(dr), pr = n(58), mr = n.n(pr), hr = n(43), fr = n.n(hr), gr = n(59), br = n.n(gr), vr = n(2), _r = n.n(vr), wr = function (e) {
      function n(e) { var t; return cr()(this, n), (t = ur()(this, mr()(n).call(this, e))).updateSelectedDate = t.updateSelectedDate.bind(fr()(t)), t; } return br()(n, e), sr()(n, [{ key: "render", value: function () { var e = this.renderFooter(), t = this.props.viewDate, n = t.localeData(), a = [pe.a.createElement("thead", { key: "th" }, [pe.a.createElement("tr", { key: "h" }, [pe.a.createElement("th", { key: "p", className: "rdtPrev", onClick: this.props.subtractTime(1, "months") }, pe.a.createElement("span", {}, "‹")), pe.a.createElement("th", { key: "s", className: "rdtSwitch", onClick: this.props.showView("months"), colSpan: 5, "data-value": this.props.viewDate.month() }, "".concat(n.months(t), " ").concat(t.year())), pe.a.createElement("th", { key: "n", className: "rdtNext", onClick: this.props.addTime(1, "months") }, pe.a.createElement("span", {}, "›"))]), pe.a.createElement("tr", { key: "d" }, this.getDaysOfWeek(n).map(function (e, t) { return pe.a.createElement("th", { key: e + t, className: "dow" }, e); }))]), pe.a.createElement("tbody", { key: "tb" }, this.renderDays())]; return e && a.push(e), pe.a.createElement("div", { className: "rdtDays" }, pe.a.createElement("table", {}, a)); } }, { key: "getDaysOfWeek", value: function (e) { var t = e._weekdaysMin, n = e.firstDayOfWeek(), a = [], o = 0; return t.forEach(function (e) { a[(7 + o - n) % 7] = e, o += 1; }), a; } }, {
        key: "renderDays", value: function () {
          var e, t, n, a, o = this.props.viewDate, i = this.props.selectedDate && this.props.selectedDate.clone(), r = o.clone().subtract(1, "months"), c = o.year(), l = o.month(), s = [], d = [], u = this.props.renderDay || this.renderDay, p = this.props.isValidDate || this.alwaysValidDate; r.date(r.daysInMonth()).startOf("week"); for (var m = r.clone().add(42, "d"); r.isBefore(m);)
            e = "rdtDay", a = r.clone(), r.year() === c && r.month() < l || r.year() < c ? e += " rdtOld" : (r.year() === c && r.month() > l || r.year() > c) && (e += " rdtNew"), i && r.isSame(i, "day") && (e += " rdtActive"), r.isSame(_r()(), "day") && (e += " rdtToday"), (t = !p(a, i)) && (e += " rdtDisabled"), n = { key: r.format("M_D"), "data-value": r.date(), className: e }, t || (n.onClick = this.updateSelectedDate), d.push(u(n, a, i)), 7 === d.length && (s.push(pe.a.createElement("tr", { key: r.format("M_D") }, d)), d = []), r.add(1, "d"); return s;
        }
      }, { key: "updateSelectedDate", value: function (e) { this.props.updateSelectedDate(e, !0); } }, { key: "renderDay", value: function (e, t) { return pe.a.createElement("td", e, t.date()); } }, {
        key: "renderFooter", value: function () {
          if (!this.props.timeFormat)
            return ""; var e = this.props.selectedDate || this.props.viewDate; return pe.a.createElement("tfoot", { key: "tf" }, pe.a.createElement("tr", {}, pe.a.createElement("td", { onClick: this.props.showView("time"), colSpan: 7, className: "rdtTimeToggle" }, e.format(this.props.timeFormat))));
        }
      }, { key: "alwaysValidDate", value: function () { return 1; } }]), n;
    }(pe.a.Component), yr = n(144), xr = n.n(yr);
    var kr = function (e) {
      function t() { return cr()(this, t), ur()(this, mr()(t).apply(this, arguments)); } return br()(t, e), sr()(t, [{ key: "render", value: function () { return pe.a.createElement("div", { className: "rdtMonths" }, [pe.a.createElement("table", { key: "a" }, pe.a.createElement("thead", {}, pe.a.createElement("tr", {}, [pe.a.createElement("th", { key: "prev", className: "rdtPrev", onClick: this.props.subtractTime(1, "years") }, pe.a.createElement("span", {}, "‹")), pe.a.createElement("th", { key: "year", className: "rdtSwitch", onClick: this.props.showView("years"), colSpan: 2, "data-value": this.props.viewDate.year() }, this.props.viewDate.year()), pe.a.createElement("th", { key: "next", className: "rdtNext", onClick: this.props.addTime(1, "years") }, pe.a.createElement("span", {}, "›"))]))), pe.a.createElement("table", { key: "months" }, pe.a.createElement("tbody", { key: "b" }, this.renderMonths()))]); } }, {
        key: "renderMonths", value: function () {
          for (var e, t, n, a, o, i = this.props.selectedDate, r = this.props.viewDate.month(), c = this.props.viewDate.year(), l = [], s = 0, d = [], u = (this.props.renderMonth || this.renderMonth).bind(this), p = this.props.isValidDate || this.alwaysValidDate; s < 12;)
            e = "rdtMonth", o = (n = this.props.viewDate.clone().set({ year: c, month: s, date: 1 })).endOf("month").format("D"), (a = void 0 === xr()({ length: o }, function (e, t) { return t + 1; }).find(function (e) { var t = n.clone().set("date", e); return p(t); })) && (e += " rdtDisabled"), i && s === i.month() && c === i.year() && (e += " rdtActive"), t = { key: s, "data-value": s, className: e }, a || (t.onClick = "months" === this.props.updateOn ? this.updateSelectedMonth : this.props.setDate("month")), d.push(u(t, s, c, i && i.clone())), 4 === d.length && (l.push(pe.a.createElement("tr", { key: "".concat(r, "_").concat(l.length) }, d)), d = []), s += 1; return l;
        }
      }, { key: "updateSelectedMonth", value: function (e) { this.props.updateSelectedDate(e); } }, { key: "renderMonth", value: function (e, t) { var n = this.props.viewDate, a = n.localeData().monthsShort(n.month(t)).substring(0, 3); return pe.a.createElement("td", e, function (e) { return e.charAt(0).toUpperCase() + e.slice(1); }(a)); } }, { key: "alwaysValidDate", value: function () { return 1; } }]), t;
    }(pe.a.Component), Er = function (e) {
      function t() { return cr()(this, t), ur()(this, mr()(t).apply(this, arguments)); } return br()(t, e), sr()(t, [{ key: "render", value: function () { var e = 10 * X()(this.props.viewDate.year() / 10, 10); return pe.a.createElement("div", { className: "rdtYears" }, [pe.a.createElement("table", { key: "a" }, pe.a.createElement("thead", {}, pe.a.createElement("tr", {}, [pe.a.createElement("th", { key: "prev", className: "rdtPrev", onClick: this.props.subtractTime(10, "years") }, pe.a.createElement("span", {}, "‹")), pe.a.createElement("th", { key: "year", className: "rdtSwitch", onClick: this.props.showView("years"), colSpan: 2 }, "".concat(e, "-").concat(9 + e)), pe.a.createElement("th", { key: "next", className: "rdtNext", onClick: this.props.addTime(10, "years") }, pe.a.createElement("span", {}, "›"))]))), pe.a.createElement("table", { key: "years" }, pe.a.createElement("tbody", {}, this.renderYears(e)))]); } }, {
        key: "renderYears", value: function (e) {
          var t, n, a, o, i, r = e, c = [], l = -1, s = [], d = this.props.renderYear || this.renderYear, u = this.props.selectedDate, p = this.props.isValidDate || this.alwaysValidDate; for (r -= 1; l < 11;)
            t = "rdtYear", i = (a = this.props.viewDate.clone().set({ year: r, month: 0, date: 1 })).endOf("year").format("DDD"), (o = void 0 === xr()({ length: i }, function (e, t) { return t + 1; }).find(function (e) { var t = a.clone().dayOfYear(e); return p(t); })) && (t += " rdtDisabled"), u && u.year() === r && (t += " rdtActive"), n = { key: r, "data-value": r, className: t }, o || (n.onClick = "years" === this.props.updateOn ? this.updateSelectedYear : this.props.setDate("year")), c.push(d(n, r, u && u.clone())), 4 === c.length && (s.push(pe.a.createElement("tr", { key: l }, c)), c = []), r += 1, l += 1; return s;
        }
      }, { key: "updateSelectedYear", value: function (e) { this.props.updateSelectedDate(e); } }, { key: "renderYear", value: function (e, t) { return pe.a.createElement("td", e, t); } }, { key: "alwaysValidDate", value: function () { return 1; } }]), t;
    }(pe.a.Component), Ir = function (e) {
      function n(e) { var t; return cr()(this, n), (t = ur()(this, mr()(n).call(this, e))).mouseUpListener = function (e) { return function () { clearTimeout(t.timer), clearInterval(t.increaseTimer), t.props.setTime(e, t.state[e]); }; }, t.padValues = { hours: 1, minutes: 2, seconds: 2, milliseconds: 3 }, t.state = t.calculateState(e), t; } return br()(n, e), sr()(n, [{ key: "calculateState", value: function (e) { var t = e.selectedDate || e.viewDate, n = e.timeFormat, a = []; -1 !== n.toLowerCase().indexOf("h") && (a.push("hours"), -1 !== n.indexOf("m") && (a.push("minutes"), -1 !== n.indexOf("s") && a.push("seconds"))); var o = t.format("H"), i = !1; return null !== this.state && -1 !== this.props.timeFormat.toLowerCase().indexOf(" a") && (i = -1 !== this.props.timeFormat.indexOf(" A") ? 12 <= o ? "PM" : "AM" : 12 <= o ? "pm" : "am"), { hours: o, minutes: t.format("mm"), seconds: t.format("ss"), milliseconds: t.format("SSS"), daypart: i, counters: a }; } }, {
        key: "renderCounter", value: function (e) {
          if ("daypart" === e)
            return ""; var t = this.state[e]; return "hours" === e && -1 !== this.props.timeFormat.toLowerCase().indexOf(" a") && 0 === (t = (t - 1) % 12 + 1) && (t = 12), pe.a.createElement("div", { key: e, className: "rdtCounter" }, [pe.a.createElement("span", { key: "up", className: "rdtBtn", onMouseDown: this.onStartClicking("increase", e), onMouseUp: this.mouseUpListener(e), onContextMenu: this.disableContextMenu }, "▲"), pe.a.createElement("div", { key: "c", className: "rdtCount" }, t), pe.a.createElement("span", { key: "do", className: "rdtBtn", onMouseDown: this.onStartClicking("decrease", e), onMouseUp: this.mouseUpListener(e), onContextMenu: this.disableContextMenu }, "▼")]);
        }
      }, { key: "renderDayPart", value: function () { return pe.a.createElement("div", { key: "dayPart", className: "rdtCounter" }, [pe.a.createElement("span", { key: "up", className: "rdtBtn", onMouseDown: this.onStartClicking("toggleDayPart", "hours"), onMouseUp: this.mouseUpListener("hours"), onContextMenu: this.disableContextMenu }, "▲"), pe.a.createElement("div", { key: this.state.daypart, className: "rdtCount" }, this.state.daypart), pe.a.createElement("span", { key: "do", className: "rdtBtn", onMouseDown: this.onStartClicking("toggleDayPart", "hours"), onMouseUp: this.mouseUpListener("hours"), onContextMenu: this.disableContextMenu }, "▼")]); } }, { key: "render", value: function () { var t = this, n = []; return this.state.counters.forEach(function (e) { n.length && n.push(pe.a.createElement("div", { key: "sep".concat(n.length), className: "rdtCounterSeparator" }, ":")), n.push(t.renderCounter(e)); }), !1 !== this.state.daypart && n.push(t.renderDayPart()), 3 === this.state.counters.length && -1 !== this.props.timeFormat.indexOf("S") && (n.push(pe.a.createElement("div", { className: "rdtCounterSeparator", key: "sep5" }, ":")), n.push(pe.a.createElement("div", { className: "rdtCounter rdtMilli", key: "m" }, pe.a.createElement("input", { value: this.state.milliseconds, type: "text", onChange: this.updateMilli })))), pe.a.createElement("div", { className: "rdtTime" }, pe.a.createElement("table", {}, [this.renderHeader(), pe.a.createElement("tbody", { key: "b" }, pe.a.createElement("tr", {}, pe.a.createElement("td", {}, pe.a.createElement("div", { className: "rdtCounters" }, n))))])); } }, { key: "componentWillMount", value: function () { var t = this; t.timeConstraints = { hours: { min: 0, max: 23, step: 1 }, minutes: { min: 0, max: 59, step: 1 }, seconds: { min: 0, max: 59, step: 1 }, milliseconds: { min: 0, max: 999, step: 1 } }, ["hours", "minutes", "seconds", "milliseconds"].forEach(function (e) { Oe()(t.timeConstraints[e], t.props.timeConstraints[e]); }), this.setState(this.calculateState(this.props)); } }, { key: "componentWillReceiveProps", value: function (e) { this.setState(this.calculateState(e)); } }, { key: "updateMilli", value: function (e) { var t = X()(e.target.value, 10); t === e.target.value && 0 <= t && t < 1e3 && (this.props.setTime("milliseconds", t), this.setState({ milliseconds: t })); } }, {
        key: "renderHeader", value: function () {
          if (!this.props.dateFormat)
            return null; var e = this.props.selectedDate || this.props.viewDate; return pe.a.createElement("thead", { key: "h" }, pe.a.createElement("tr", {}, pe.a.createElement("th", { className: "rdtSwitch", colSpan: 4, onClick: this.props.showView("days") }, e.format(this.props.dateFormat))));
        }
      }, { key: "onStartClicking", value: function (t, n) { var a = this; return function () { var e = {}; e[n] = a[t](n), a.setState(e), a.timer = setTimeout(function () { a.increaseTimer = setInterval(function () { e[n] = a[t](n), a.setState(e); }, 70); }, 500); }; } }, { key: "disableContextMenu", value: function (e) { return e.preventDefault(), !1; } }, { key: "toggleDayPart", value: function (e) { var t = X()(this.state[e], 10) + 12; return t > this.timeConstraints[e].max && (t = this.timeConstraints[e].min + (t - (this.timeConstraints[e].max + 1))), this.pad(e, t); } }, { key: "increase", value: function (e) { var t = X()(this.state[e], 10) + this.timeConstraints[e].step; return t > this.timeConstraints[e].max && (t = this.timeConstraints[e].min + (t - (this.timeConstraints[e].max + 1))), this.pad(e, t); } }, { key: "decrease", value: function (e) { var t = X()(this.state[e], 10) - this.timeConstraints[e].step; return t < this.timeConstraints[e].min && (t = this.timeConstraints[e].max + 1 - (this.timeConstraints[e].min - t)), this.pad(e, t); } }, {
        key: "pad", value: function (e, t) {
          for (var n = "".concat(t); n.length < this.padValues[e];)
            n = "0".concat(n); return n;
        }
      }]), n;
    }(pe.a.Component), Cr = function (e) {
      function i() {
        var e, t; cr()(this, i); for (var n = arguments.length, a = new Array(n), o = 0; o < n; o++)
          a[o] = arguments[o]; return (t = ur()(this, (e = mr()(i)).call.apply(e, [this].concat(a)))).viewComponents = { days: wr, months: kr, years: Er, time: Ir }, t;
      } return br()(i, e), sr()(i, [{ key: "render", value: function () { return pe.a.createElement(this.viewComponents[this.props.view], this.props.viewProps); } }]), i;
    }(pe.a.Component), Tr = "years", Sr = "months", jr = "days", Nr = "time", Or = d.d.div.withConfig({ displayName: "pc-datetime__Container", componentId: "sc-16sjxpc-0" })([".rdt{font-size:12px;position:relative;}.rdtPicker{display:none;position:absolute;width:180px;padding:4px;font-size:12px;margin-top:1px;z-index:99999 !important;background:#fff;box-shadow:0 7px 10px rgba(0,0,0,0.2);border:1px solid #f9f9f9;}.rdtOpen .rdtPicker{display:block;}.rdtStatic .rdtPicker{box-shadow:none;position:static;}.rdtPicker .rdtTimeToggle{text-align:center;}.rdtPicker table{font-size:12px;width:100%;margin:0;}.rdtPicker td,.rdtPicker th{text-align:center;height:20px;}.rdtPicker td{cursor:pointer;}.rdtPicker td.rdtDay:hover,.rdtPicker td.rdtHour:hover,.rdtPicker td.rdtMinute:hover,.rdtPicker td.rdtSecond:hover,.rdtPicker .rdtTimeToggle:hover{background:#eeeeee;cursor:pointer;}.rdtPicker td.rdtOld,.rdtPicker td.rdtNew{color:#999999;}.rdtPicker td.rdtToday{position:relative;}.rdtPicker td.rdtToday:before{content:'';display:inline-block;border-left:7px solid transparent;border-bottom:7px solid #428bca;border-top-color:rgba(0,0,0,0.2);position:absolute;bottom:4px;right:4px;}.rdtPicker td.rdtActive,.rdtPicker td.rdtActive:hover{background-color:#428bca;color:#fff;text-shadow:0 -1px 0 rgba(0,0,0,0.25);}.rdtPicker td.rdtActive.rdtToday:before{border-bottom-color:#fff;}.rdtPicker td.rdtDisabled,.rdtPicker td.rdtDisabled:hover{background:none;color:#999999;cursor:not-allowed;}.rdtPicker td span.rdtOld{color:#999999;}.rdtPicker td span.rdtDisabled,.rdtPicker td span.rdtDisabled:hover{background:none;color:#999999;cursor:not-allowed;}.rdtPicker th{border-bottom:1px solid #f9f9f9;}.rdtPicker .dow{width:14.2857%;border-bottom:none;cursor:default;}.rdtPicker th.rdtSwitch{width:100px;}.rdtPicker th.rdtNext,.rdtPicker th.rdtPrev{font-size:21px;vertical-align:top;}.rdtPrev span,.rdtNext span{display:block;-webkit-touch-callout:none;-webkit-user-select:none;-khtml-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;}.rdtPicker th.rdtDisabled,.rdtPicker th.rdtDisabled:hover{background:none;color:#999999;cursor:not-allowed;}.rdtPicker thead tr:first-child th{cursor:pointer;}.rdtPicker thead tr:first-child th:hover{background:#eeeeee;}.rdtPicker tfoot{border-top:1px solid #f9f9f9;}.rdtPicker button{border:none;background:none;cursor:pointer;}.rdtPicker button:hover{background-color:#eee;}.rdtPicker thead button{width:100%;height:100%;}td.rdtMonth,td.rdtYear{height:50px;width:25%;cursor:pointer;}td.rdtMonth:hover,td.rdtYear:hover{background:#eee;}.rdtCounters{display:inline-block;}.rdtCounters > div{float:left;}.rdtCounter{height:100px;}.rdtCounter{width:40px;}.rdtCounterSeparator{line-height:100px;}.rdtCounter .rdtBtn{height:40%;line-height:40px;cursor:pointer;display:block;-webkit-touch-callout:none;-webkit-user-select:none;-khtml-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;}.rdtCounter .rdtBtn:hover{background:#eee;}.rdtCounter .rdtCount{height:20%;font-size:1.2em;}.rdtMilli{vertical-align:middle;padding-left:8px;width:48px;}.rdtMilli input{width:100%;font-size:1.2em;margin-top:37px;}.rdtTime td{cursor:default;}"]), Mr = function (e) {
      function a(e) { var t; cr()(this, a), (t = ur()(this, mr()(a).call(this, e))).displayName = "DateTime", t.allowedSetTime = ["hours", "minutes", "seconds", "milliseconds"], t.componentProps = { fromProps: ["value", "isValidDate", "renderDay", "renderMonth", "renderYear", "timeConstraints"], fromState: ["viewDate", "selectedDate", "updateOn"], fromThis: ["setDate", "setTime", "showView", "addTime", "subtractTime", "updateSelectedDate", "localMoment", "handleClickOutside"] }, t.checkTZ(e); var n = t.getStateFromProps(e); return void 0 === n.open && (n.open = !e.input), n.currentView = e.dateFormat ? e.viewMode || n.updateOn || jr : Nr, t.state = n, t.openCalendar = t.openCalendar.bind(fr()(t)), t.onInputChange = t.onInputChange.bind(fr()(t)), t.updateSelectedDate = t.updateSelectedDate.bind(fr()(t)), t.showView = t.showView.bind(fr()(t)), t.addTime = t.addTime.bind(fr()(t)), t.subtractTime = t.subtractTime.bind(fr()(t)), t.setDate = t.setDate.bind(fr()(t)), t.setTime = t.setTime.bind(fr()(t)), t.localMoment = t.localMoment.bind(fr()(t)), t.handleClickOutside = t.handleClickOutside.bind(fr()(t)), t.handleGlobalClick = t.handleGlobalClick.bind(fr()(t)), t.frameDoc = window.parent.document.querySelector("iframe[name=chat]").contentWindow.document, t; } return br()(a, e), sr()(a, [{ key: "componentDidMount", value: function () { this.ref = pe.a.createRef(null), this.frameDoc.addEventListener("click", this.handleGlobalClick, !0); } }, { key: "componentWillUnmount", value: function () { this.frameDoc.removeEventListener("click", this.handleGlobalClick, !0); } }, { key: "handleGlobalClick", value: function (e) { this.ref.current.contains(e.target) || this.handleClickOutside(); } }, { key: "parseDate", value: function (e, t) { var n; return e && "string" == typeof e ? n = this.localMoment(e, t.datetime) : e && (n = this.localMoment(e)), n && !n.isValid() && (n = null), n; } }, { key: "getStateFromProps", value: function (e) { var t, n, a = this.getFormats(e), o = e.value || e.defaultValue, i = this.parseDate(o, a); t = this.parseDate(e.viewDate, a), t = i ? i.clone().startOf("month") : t ? t.clone().startOf("month") : this.localMoment().startOf("month"); var r = this.getUpdateOn(a); return n = i ? i.format(a.datetime) : o.isValid && !o.isValid() ? "" : o || "", { updateOn: r, inputFormat: a.datetime, viewDate: t, selectedDate: i, inputValue: n, open: e.open }; } }, { key: "getUpdateOn", value: function (e) { return e.date.match(/[lLD]/) ? jr : -1 !== e.date.indexOf("M") ? Sr : -1 !== e.date.indexOf("Y") ? Tr : jr; } }, { key: "getFormats", value: function (e) { var t = { date: e.dateFormat || "", time: e.timeFormat || "" }, n = this.localMoment(e.date, null, e).localeData(); return !0 === t.date ? t.date = n.longDateFormat("L") : this.getUpdateOn(t) !== jr && (t.time = ""), !0 === t.time && (t.time = n.longDateFormat("LT")), t.datetime = t.date && t.time ? "".concat(t.date, " ").concat(t.time) : t.date || t.time, t; } }, {
        key: "componentWillReceiveProps", value: function (e) {
          var t = this.getFormats(e), n = {}; if (e.value === this.props.value && t.datetime === this.getFormats(this.props).datetime || (n = this.getStateFromProps(e)), void 0 === n.open && (void 0 !== e.open ? n.open = e.open : this.props.closeOnSelect && this.state.currentView !== Nr ? n.open = !1 : n.open = this.state.open), e.viewMode !== this.props.viewMode && (n.currentView = e.viewMode), e.locale !== this.props.locale) {
            if (this.state.viewDate) {
              var a = this.state.viewDate.clone().locale(e.locale);
              n.viewDate = a;
            }
            if (this.state.selectedDate) {
              var o = this.state.selectedDate.clone().locale(e.locale);
              n.selectedDate = o, n.inputValue = o.format(t.datetime);
            }
          } e.utc === this.props.utc && e.displayTimeZone === this.props.displayTimeZone || (e.utc ? (this.state.viewDate && (n.viewDate = this.state.viewDate.clone().utc()), this.state.selectedDate && (n.selectedDate = this.state.selectedDate.clone().utc(), n.inputValue = n.selectedDate.format(t.datetime))) : e.displayTimeZone ? (this.state.viewDate && (n.viewDate = this.state.viewDate.clone().tz(e.displayTimeZone)), this.state.selectedDate && (n.selectedDate = this.state.selectedDate.clone().tz(e.displayTimeZone), n.inputValue = n.selectedDate.tz(e.displayTimeZone).format(t.datetime))) : (this.state.viewDate && (n.viewDate = this.state.viewDate.clone().local()), this.state.selectedDate && (n.selectedDate = this.state.selectedDate.clone().local(), n.inputValue = n.selectedDate.format(t.datetime)))), e.viewDate !== this.props.viewDate && (n.viewDate = _r()(e.viewDate)), this.checkTZ(e), this.setState(n);
        }
      }, { key: "onInputChange", value: function (e) { var t = this, n = null === e.target ? e : e.target.value, a = this.localMoment(n, this.state.inputFormat), o = { inputValue: n }; return a.isValid() && !this.props.value ? (o.selectedDate = a, o.viewDate = a.clone().startOf("month")) : o.selectedDate = null, this.setState(o, function () { return t.props.onChange(a.isValid() ? a : t.state.inputValue); }); } }, { key: "onInputKey", value: function (e) { 9 === e.which && this.props.closeOnTab && this.closeCalendar(); } }, { key: "showView", value: function (e) { var t = this; return function () { t.state.currentView !== e && t.props.onViewModeChange(e), t.setState({ currentView: e }); }; } }, { key: "setDate", value: function (t) { var n = this, a = { month: jr, year: Sr }; return function (e) { n.setState({ viewDate: n.state.viewDate.clone()[t](X()(e.target.getAttribute("data-value"), 10)).startOf(t), currentView: a[t] }), n.props.onViewModeChange(a[t]); }; } }, { key: "subtractTime", value: function (e, t, n) { var a = this; return function () { a.props.onNavigateBack(e, t), a.updateTime("subtract", e, t, n); }; } }, { key: "addTime", value: function (e, t, n) { var a = this; return function () { a.props.onNavigateForward(e, t), a.updateTime("add", e, t, n); }; } }, { key: "updateTime", value: function (e, t, n, a) { var o = {}, i = a ? "selectedDate" : "viewDate"; o[i] = this.state[i].clone()[e](t, n), this.setState(o); } }, {
        key: "setTime", value: function (e, t) {
          var n, a = this.allowedSetTime.indexOf(e) + 1, o = this.state, i = (o.selectedDate || o.viewDate).clone(); for (i[e](t); a < this.allowedSetTime.length; a += 1)
            i[n = this.allowedSetTime[a]](i[n]()); this.props.value || this.setState({ selectedDate: i, inputValue: i.format(o.inputFormat) }), this.props.onChange(i);
        }
      }, {
        key: "updateSelectedDate", value: function (e, t) {
          var n, a = e.currentTarget, o = 0, i = this.state, r = i.viewDate, c = i.inputFormat, l = this.state.selectedDate || r; if (-1 !== a.className.indexOf("rdtDay") ? (-1 !== a.className.indexOf("rdtNew") ? o = 1 : -1 !== a.className.indexOf("rdtOld") && (o = -1), n = r.clone().month(r.month() + o).date(X()(a.getAttribute("data-value"), 10))) : -1 !== a.className.indexOf("rdtMonth") ? n = r.clone().month(X()(a.getAttribute("data-value"), 10)).date(l.date()) : -1 !== a.className.indexOf("rdtYear") && (n = r.clone().month(l.month()).date(l.date()).year(X()(a.getAttribute("data-value"), 10))), n.hours(l.hours()).minutes(l.minutes()).seconds(l.seconds()).milliseconds(l.milliseconds()), this.props.value)
            this.props.closeOnSelect && t && this.closeCalendar();
          else {
            var s = !(this.props.closeOnSelect && t);
            s || this.props.onBlur(n), this.setState({ selectedDate: n, viewDate: n.clone().startOf("month"), inputValue: n.format(c), open: s });
          } this.props.onChange(n);
        }
      }, { key: "openCalendar", value: function (e) { var t = this; this.state.open || this.setState({ open: !0 }, function () { t.props.onFocus(e); }); } }, { key: "closeCalendar", value: function () { var e = this; this.setState({ open: !1 }, function () { e.props.onBlur(e.state.selectedDate || e.state.inputValue); }); } }, { key: "handleClickOutside", value: function () { var e = this; this.props.input && this.state.open && void 0 === this.props.open && !this.props.disableCloseOnClickOutside && this.setState({ open: !1 }, function () { e.props.onBlur(e.state.selectedDate || e.state.inputValue); }); } }, { key: "localMoment", value: function (e, t, n) { var a = n || this.props, o = null; return o = a.utc ? _r.a.utc(e, t, a.strictParsing) : a.displayTimeZone ? _r.a.tz(e, t, a.displayTimeZone) : _r()(e, t, a.strictParsing), a.locale && o.locale(a.locale), o; } }, { key: "checkTZ", value: function (e) { var t = console; !e.displayTimeZone || this.tzWarning || _r.a.tz || (this.tzWarning = !0, t && t.error('react-datetime: displayTimeZone prop with value "'.concat(e.displayTimeZone, '" is used but moment.js timezone is not loaded.'))); } }, { key: "getComponentProps", value: function () { var t = this, e = this.getFormats(this.props), n = { dateFormat: e.date, timeFormat: e.time }; return this.componentProps.fromProps.forEach(function (e) { n[e] = t.props[e]; }), this.componentProps.fromState.forEach(function (e) { n[e] = t.state[e]; }), this.componentProps.fromThis.forEach(function (e) { n[e] = t[e]; }), n; } }, {
        key: "overrideEvent", value: function (n, a) {
          if (this.overridenEvents || (this.overridenEvents = {}), !this.overridenEvents[n]) {
            var o = this;
            this.overridenEvents[n] = function (e) { var t; o.props.inputProps && o.props.inputProps[n] && (t = o.props.inputProps[n](e)), !1 !== t && a(e); };
          } return this.overridenEvents[n];
        }
      }, {
        key: "render", value: function () {
          var e = "rdt".concat(this.props.className ? $e()(this.props.className) ? " ".concat(this.props.className.join(" ")) : " ".concat(this.props.className) : ""), t = []; if (this.props.input) {
            var n = Oe()({ type: "text", className: "form-control", value: this.state.inputValue }, this.props.inputProps, { onClick: this.overrideEvent("onClick", this.openCalendar), onFocus: this.overrideEvent("onFocus", this.openCalendar), onChange: this.overrideEvent("onChange", this.onInputChange), onKeyDown: this.overrideEvent("onKeyDown", this.onInputKey) });
            t = this.props.renderInput ? [pe.a.createElement("div", { key: "i" }, this.props.renderInput(n, this.openCalendar, this.closeCalendar))] : [pe.a.createElement("input", Oe()({ key: "i" }, n))];
          }
          else
            e += " rdtStatic"; return (this.props.open || void 0 === this.props.open && this.state.open) && (e += " rdtOpen"), pe.a.createElement(Or, { ref: this.ref }, pe.a.createElement("div", { className: e }, t.concat(pe.a.createElement("div", { key: "dt", className: "rdtPicker" }, pe.a.createElement(Cr, { view: this.state.currentView, viewProps: this.getComponentProps() })))));
        }
      }]), a;
    }(pe.a.Component);
    Mr.defaultProps = { className: "", defaultValue: "", inputProps: {}, input: !0, onFocus: function () { }, onBlur: function () { }, onChange: function () { }, onViewModeChange: function () { }, onNavigateBack: function () { }, onNavigateForward: function () { }, timeFormat: !0, timeConstraints: {}, dateFormat: !0, strictParsing: !0, closeOnSelect: !1, closeOnTab: !0, utc: !1 }, Mr.moment = _r.a;
    function zr(e) { var t = We("get", "_MEIQIA_LANGUAGE") || "zh-cn", n = e.handleChange; return pe.a.createElement("div", null, pe.a.createElement(Mr, { locale: Br[t], onChange: function (e) { n(new Date(e)); }, inputProps: { readOnly: "readonly" } })); }
    function Dr(e) { return te.isMobile() ? pe.a.createElement(Ji, e) : pe.a.createElement(zr, e); }
    var Br = { zh: "zh-CN", tw: "zh-TW", en: "en" };
    function Ar(e) {
      var t = function (e) {
        if (e && 0 < e.indexOf("T")) {
          var t = e.split("T")[0].split("-"), n = e.split("T")[1].split(":"), a = new Date(+t[0], +t[1], +t[2], +n[0], +n[1], +n[2]);
          return a.setMinutes(a.getMinutes() - a.getTimezoneOffset()), a;
        } return new Date;
      }(e), n = 0 === t.getHours() ? "12" : 12 < t.getHours() ? t.getHours() - 12 : t.getHours(); n = n < 10 ? "0".concat(n) : n; var a = (t.getMinutes() < 10 ? "0" : "") + t.getMinutes(), o = t.getHours() < 12 ? "AM" : "PM"; return "".concat(n, ":").concat(a).concat(o);
    }
    function Pr(e) { return e < 10 ? "0".concat(e) : e; }
    function qr(e) { var t = e; return t.getUTCFullYear || (t = new Date(t)), "".concat(t.getUTCFullYear(), "-").concat(Pr(t.getUTCMonth() + 1), "-").concat(Pr(t.getUTCDate()), "T").concat(Pr(t.getUTCHours()), ":").concat(Pr(t.getUTCMinutes()), ":").concat(Pr(t.getUTCSeconds()), ".").concat((t.getUTCMilliseconds() / 1e6).toFixed(6).slice(2)); }
    var Rr = function (e) { var t = ce()(), n = new Date(e).getTime() - t; return !(!ka()(n) || n < 0) && (3600 <= (n /= 1e3) ? X()(Math.round(n / 3600), 10) + R.a.t("小时") : 60 <= n ? X()(n / 60, 10) + R.a.t("分钟") : n + R.a.t("秒")); };
    function Lr(t, e) {
      var n = C()(t); if (E.a) {
        var a = E()(t);
        e && (a = a.filter(function (e) { return x()(t, e).enumerable; })), n.push.apply(n, a);
      } return n;
    }
    function Fr(e) { var t = e.themeColor, n = e.content, a = e.handleImgOnload, o = e.cardSize; return pe.a.createElement(Jr, { themeColor: t, cardSize: o }, pe.a.createElement("a", { target: "_blank", rel: "noopener noreferrer", href: n[0].body.target_url }, pe.a.createElement("img", { alt: "", src: n[0].body.pic_url, onLoad: a }))); }
    function Ur(e, t, n) { var a = en.dispatch; a(nt(e, { _evaluateStatus: t })), n && n.length && (a(Xe(n)), wn()); }
    function Wr(e, t) { var n = en.dispatch; t ? n(et(t, e)) : (n(Xe(e)), wn()); }
    function Vr(e) {
      var t = en.getState().getIn(["config", "entId"]), n = e.target.files[0]; if (5e7 < n.size)
        Ea(R.a.t("只能发送小于 50MB 的文件哦"), 5e3);
      else {
        var c = Math.random(), l = { id: c, from_type: "client", content_type: "file", status: "sending", file: n, _fileStatus: "uploading", _speed: Xr(0), extra: { filename: n.name, size: n.size, type: n.type } };
        e.target.value = "", Wr(l), function (e, t) { return fe({ url: "/upload/policies", method: "post", headers: { "content-type": "application/json" }, data: t, params: { ent_id: e } }); }(t, { filename: n.name }).then(function (i) {
          if (i.data) {
            var r = ce()(), e = { url: i.data.policy.url, method: "post", data: { msg: l, fields: i.data.policy.fields }, cancelToken: new rn.a.CancelToken(function (e) { l._cancelToken = e; }), onUploadProgress: function (e) { var t = e.position || e.loaded, n = e.totalSize || e.total, a = (ce()() - r) / 1e3, o = Xr(a ? t / a : 0); l._fileStatus = "uploading", l._progress = 100 * t / n, l._speed = "".concat(o, "/s"), Wr(l, c); } };
            M(e, "uploadFile").then(function () { var e = en.getState(), t = en.dispatch, n = e.get("message"), a = Qe()(n.get("fakeMsg")), o = {}; l._fileStatus = "success", l.content = i.data.policy.fields.key, l.extra.expire_at = qr((new Date).setDate((new Date).getDate() + 1)), n.get("schedulerAfterClientSendMsg") && !n.get("scheduler") ? (Fn(), a.push(l), o.fakeMsg = a, o.schedulerMsg = !0, o.schedulerAfterClientSendMsg = !1, t(Ze(o))) : n.get("chatHasEnd") ? (Fn(), a.push(l), o.fakeMsg = a, o.schedulerMsg = !0, t(Ze(o))) : (Wr(l, c), fn(l)); }, function (e) { e && "cancel" === e.message ? console.log(e) : (l._fileStatus = "fail", Wr(l, c)); });
          }
        });
      }
    }
    function Gr(e, t) { var n = en.dispatch; t ? n(et(t, e)) : (n(Xe(e)), wn()), yn(e.id); }
    function Hr(e) { var a = e, t = en.getState(), o = en.dispatch, i = t.get("message"), n = i.get("convId"), r = i.get("agentToken"), c = t.get("config"), l = c.get("entId"), s = c.get("trackId"); Gr(a), function (e, t, n, a, o) { var i = { url: "/upload?ent_id=".concat(e), method: "post", data: { msg: o, entId: e, trackId: t, convId: n, agentToken: a } }; return M(i, "uploadImage"); }(l, s, n, r, a).then(function (e) { var t = {}, n = Qe()(i.get("fakeMsg")); e.data && e.data.success ? (a.media_url = e.data.photo_url, a.content = e.data.photo_key, delete a.status, delete a.file, i.get("schedulerAfterClientSendMsg") && !i.get("scheduler") ? (Fn(), n.push(a), t.fakeMsg = n, t.schedulerMsg = !0, t.schedulerAfterClientSendMsg = !1, o(Ze(t))) : i.get("chatHasEnd") ? (Fn(), n.push(a), t.fakeMsg = n, t.schedulerMsg = !0, o(Ze(t))) : (Gr(a, a.id), fn(a))) : (a.media_url = oc.a, a.status = "error", Gr(a, a.id)); }, function () { a.media_url = oc.a, a.status = "error", Gr(a, a.id); }); }
    var Qr = d.d.div.withConfig({ displayName: "client-card__Wrapper", componentId: "sc-1kln586-0" })(["max-width:280px;box-sizing:border-box;background:#fff;padding:10px;box-shadow:0px 2px 9px 0px rgba(0,0,0,0.21);border-top:solid 2px ", ";"], function (e) { return e.themeColor; }), Yr = d.d.div.withConfig({ displayName: "client-card__Form", componentId: "sc-1kln586-1" })(["color:rgb(179,179,179);font-size:14px;text-align:left;margin-bottom:10px;.field{padding:0 0 10px;}label{display:inline-block;padding:10px 0 5px;}input[type='text']{width:100%;height:28px;border-radius:2px;padding:0 5px;color:#4a4a4a;background-color:#fff;box-shadow:inset 0px 1px 6px 0px rgba(0,0,0,0.1);border:1px solid rgba(199,199,199,1);}.error-field{color:#ff7474;font-size:12px;padding:6px 0;}"]), $r = Object(nr.a)({
      mapPropsToValues: function () { return {}; }, validate: function (t) { var n = {}, a = !1; return C()(t).forEach(function (e) { t[e] && (a = !0), "tel" === e && (/^[\d-]{10,18}$/.test(t[e].trim()) || (n[e] = R.a.t("请正确填写手机或带区号的座机号码"))), "qq" === e && (/^[1-9][\d]{4,10}$/.test(t[e].trim()) || (n[e] = R.a.t("请正确填写QQ"))); }), a || (n.global = R.a.t("请至少填写一项")), n; }, handleSubmit: function (e, t) {
        var n = t.props, a = n.id, o = n.cardType, i = n.data, r = n.handleCardSubmit, c = function (t) {
          for (var e = 1; e < arguments.length; e++) {
            var n = null != arguments[e] ? arguments[e] : {};
            e % 2 ? Lr(n, !0).forEach(function (e) { j()(t, e, n[e]); }) : w.a ? v()(t, w()(n)) : Lr(n).forEach(function (e) { f()(t, e, x()(n, e)); });
          } return t;
        }({}, e), l = {}; i.forEach(function (e) { l[e.name] = e.type; }), C()(c).forEach(function (e) { c[e] ? "datetime" === l[e] && (c[e] = qr(c[e])) : delete c[e]; }), r(a, o, c);
      }
    })(function (e) {
      var t = e.themeColor, n = e.fontColor, a = e.data, o = e.values, i = e.errors, r = e.handleChange, c = e.isSubmitting, l = e.handleSubmit, s = e.setFieldValue, d = Object(me.c)(), u = Qn()(d, 1)[0]; return pe.a.createElement(Qr, { themeColor: t }, pe.a.createElement(Yr, null, a.map(function (e) {
        return function (e, t, n, a, o) {
          function i(t) { return function (e) { o(t, e); }; } var r = null, c = ""; switch (e.type) {
            case "text":
            case "string":
              c = R.a.t("请输入"), r = pe.a.createElement("input", { type: "text", focus: "true", name: e.name, onChange: a });
              break;
            case "radio":
            case "checkbox":
              var l = "checkbox" === e.type, s = e.meta_data.map(function (e) { return { label: e.name, value: e.value }; });
              c = R.a.t("请选择"), r = pe.a.createElement($i, { name: e.name, multi: l, options: s, value: t[e.name], handleChange: i(e.name) });
              break;
            case "datetime": c = R.a.t("请选择"), r = pe.a.createElement(Dr, { name: e.name, value: t[e.name], handleChange: i(e.name) });
          } return pe.a.createElement(pe.a.Fragment, { key: e.id }, pe.a.createElement("label", null, "".concat(c, " "), R.a.t(e.displayName) || e.name), r, n[e.name] ? pe.a.createElement("p", { className: "error-field" }, n[e.name]) : null);
        }(e, o, i, r, s);
      }), i.global ? pe.a.createElement("p", { className: "error-field" }, i.global) : null), pe.a.createElement("div", null, pe.a.createElement(Hi, { bgColor: t, fontColor: n, disabled: c, handleClick: l }, u("发送"))));
    }), Jr = d.d.div.withConfig({ displayName: "photo-card__Wrapper", componentId: "sc-3bw2yv-0" })(["box-sizing:border-box;background:#fff;padding:10px 10px 10px 10px;box-shadow:0px 2px 9px 0px rgba(0,0,0,0.21);border-top:solid 2px ", ";img{width:", "px;max-width:", "px;}"], function (e) { return e.themeColor; }, function (e) { return e.cardSize || 300; }, function (e) { return e.cardSize || 300; }), Kr = pe.a.memo(function (e) {
      var t = e.id, n = e.avatar, a = e.arrow, o = e.name, i = e.content, r = e.themeColor, c = e.fontColor, l = e.msgType, s = e.cardSize, d = e.handleCardSubmit, u = e.handleMenuClick, p = e.scrollToBottom, m = {}, h = { themeColor: r, fontColor: c }, f = Object(ue.useCallback)(function () { "normal" !== l && "scheduler" !== l || p(); }, [p, l]); switch ("mobile" === te.isMobile() ? (m.avatar = n, m.arrow = a) : m.name = o, i[0].type) {
        case "client_card": return pe.a.createElement($r, Pa()({}, h, m, { id: t, cardSize: s, handleCardSubmit: d, data: i[0].body }));
        case "photo_card": return pe.a.createElement(Fr, Pa()({}, h, m, { id: t, cardSize: s, content: i, handleImgOnload: f }));
        default:
          var g = i;
          return "list" === i[0].type && (g = i[0].body), g = i.map(function (e) {
            switch (e.type) {
              case "text":
              case "txt":
              case "rich_text": return e.body;
              case "choices": return { type: "menu", items: e.body.choices.map(function (e) { return { value: e, text: e }; }) };
              default: return "";
            }
          }), pe.a.createElement(ii, { content: g, handleMenuClick: u });
      }
    }), Zr = function (n, e, a) {
      var t = en.getState(), o = t.get("config"), i = t.get("message"), r = o.get("entId"), c = o.get("trackId"), l = i.get("convId"); Ur(n, "submit"), function (e, t, n, a, o) { return fe({ url: "/knowledge/questions/".concat(a, "/evaluate"), method: "post", headers: { "content-type": "application/json" }, data: { ent_id: e, track_id: t, conv_id: n, useful: o } }); }(r, c, l, e, a).then(function (e) { var t = []; e.data && t.push({ id: Math.random(), from_type: "bot", agent: { nickname: "" }, content_type: "text", content: e.data.message }), 0 === a && t.push({ id: 1 * ce()(), from_type: "redirect_btn" }), Ur(n, "finish", t); }, function (e) {
        var t = {}; try {
          t = e.response.data || {};
        }
        catch (e) {
          console.log(e);
        } setTimeout(function () { Ea(t.message || R.a.t("提交失败，请稍候再试"), 2e3); }, 1e3), Ur(n, "waiting");
      });
    }, Xr = function (e, t) {
      if (!e)
        return "0 B"; var n = t + 1 || 2, a = Math.floor(Math.log(e) / Math.log(1e3)); return "".concat(je()((e / Math.pow(1e3, a)).toFixed(n)), " ").concat(["B", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"][a]);
    }, ec = function (t) { var e = en.getState(), n = en.dispatch, a = e.get("config"), o = e.get("message"), i = o.get("queue"), r = i.findIndex(function (e) { return e.id === t; }), c = i[r]._cancelToken; c && c("cancel"), n(nt(t, { _fileStatus: "cancel" })), function (e) { fe({ url: "/client/cancel_upload", method: "post", headers: { "content-type": "application/json" }, data: e }); }({ ent_id: a.get("entId"), track_id: a.get("trackId"), browser_id: a.get("browserId"), conversation_id: o.get("convId") || void 0, type: i[r].extra.type, size: i[r].extra.size, filename: i[r].extra.filename }); }, tc = n(124), nc = n.n(tc), ac = n(236), oc = n.n(ac);
    function ic(t, e) {
      var n = C()(t); if (E.a) {
        var a = E()(t);
        e && (a = a.filter(function (e) { return x()(t, e).enumerable; })), n.push.apply(n, a);
      } return n;
    }
    function rc(e) {
      var t = e.config, n = e.extra, a = e.children, o = function (e) { return "file" === e.content_type && ["width: calc(100% - 30px);", "max-width: calc(100% - 30px);"]; }(t), i = t.id, r = null, c = Object(ue.useCallback)(function () { cc(i); }, [i]); switch (t.from_type) {
        case "bot":
        case "agent":
        case "client":
          r = pe.a.createElement(lc, Pa()({ styles: o }, n, { handleMsgClick: c }), a);
          break;
        case "redirect":
        case "evaluation":
        case "blacklist":
          r = pe.a.createElement(Ui, null, a);
          break;
        default: r = a;
      } return r;
    }
    var cc = function (t) {
      var e = en.getState(), n = en.dispatch, a = e.getIn(["message", "queue"]).find(function (e) { return e.id === t; }); if (a && "client" === a.from_type && "error" === a.status) {
        var o = function (t) {
          for (var e = 1; e < arguments.length; e++) {
            var n = null != arguments[e] ? arguments[e] : {};
            e % 2 ? ic(n, !0).forEach(function (e) { j()(t, e, n[e]); }) : w.a ? v()(t, w()(n)) : ic(n).forEach(function (e) { f()(t, e, x()(n, e)); });
          } return t;
        }({}, a, { id: Math.random() });
        "text" === a.content_type ? (n(Xe(o)), fn(o)) : "photo" === a.content_type && (o.status = "sending", o.media_url = nc.a, Hr(o));
      }
    }, lc = Object(d.d)($o).withConfig({ displayName: "msg-wrapper__Base", componentId: "sc-19mnsx8-0" })(["", ""], function (e) { return e.styles ? e.styles.join("") : ""; }), sc = te.isMobile() ? "mobile" : "desktop", dc = d.d.div.withConfig({ displayName: "msg-window__Container", componentId: "sc-1y5k7uj-0" })(["width:100%;height:100%;padding:14px;box-sizing:border-box;overflow-y:auto;position:relative;", ""], function (e) { return e.history ? "padding-top: 40px;" : ""; }), uc = d.d.div.withConfig({ displayName: "msg-window__MsgContainer", componentId: "sc-1y5k7uj-1" })(["width:100%;position:relative;"]), pc = d.d.div.withConfig({ displayName: "msg-window__HistoryBtn", componentId: "sc-1y5k7uj-2" })(["position:absolute;top:10px;left:0;right:0;width:100%;height:20px;line-height:20px;text-align:center;font-size:12px;color:#777;cursor:pointer;"]), mc = d.d.div.withConfig({ displayName: "msg-window__Sensitive", componentId: "sc-1y5k7uj-3" })(["position:absolute;text-align:right;font-size:12px;color:#b2b2b2;right:0;bottom:-16px;"]);
    function hc(e, t) {
      var n = null, a = t.styles, o = t.handleRedirect, i = t.handleRedirectTicket, r = { id: e.id, direction: "client" === e.from_type ? "right" : "left", status: e.status, time: Ar(e.created_on) }; switch ("evaluate" === e.sub_type && "normal" === e._renderType && (r.evaluateStatus = e._evaluateStatus || "waiting", r.questionId = e.question_id, r.handleFeedback = Zr), e.from_type) {
        case "bot":
          "mobile" === sc ? (r.avatar = e.agent.avatar, r.arrow = !0) : r.name = e.agent.nickname, n = function (e, t, n) {
            var a = null, o = n.styles, i = n.handleImgOnload, r = n.handleImagePreview, c = n.scrollToBottom, l = n.handleMenuClick, s = n.cardSize; switch (e.content_type) {
              case "welcome":
                a = pe.a.createElement(Bo, Pa()({}, t, { msg: vi(e.content) }));
                break;
              case "text":
              case "bot":
                e.content_robot && e.content_robot.length ? a = pe.a.createElement(wi, Pa()({}, t, { handleMenuClick: n.handleMenuClick, content: e.content_robot, handleImagePreview: r })) : e.content && (a = pe.a.createElement(Bo, Pa()({}, t, { msg: vi(e.content) })));
                break;
              case "rich_text":
                a = pe.a.createElement(ii, Pa()({}, t, { content: e.extra.content, handleImagePreview: r }));
                break;
              case "photo":
                Oe()(t, { themeColor: "transparent", padding: "0" }), a = pe.a.createElement(ki, Pa()({}, t, { url: e.media_url, handleOnload: i, handleImagePreview: r }));
                break;
              case "hybrid":
                var d = { themeColor: o.panel.themeColor, fontColor: o.panel.fontColor }, u = { handleMenuClick: l, scrollToBottom: c, msgType: e._renderType, cardSize: s };
                a = pe.a.createElement(Kr, Pa()({}, t, d, u, { content: e.content }));
                break;
              default: a = null;
            } return a;
          }(e, r, t);
          break;
        case "agent":
          "mobile" === sc ? (r.avatar = e.agent.avatar, r.arrow = !0) : r.name = e.agent.nickname, n = function (e, t, n) {
            var a = null, o = n.styles, i = n.handleImgOnload, r = n.handleImagePreview, c = n.scrollToBottom, l = n.handleCardSubmit, s = n.handleFileDownload, d = n.cardSize; switch (e.content_type) {
              case "welcome":
              case "text":
                a = pe.a.createElement(Bo, Pa()({}, t, { msg: vi(e.content) }));
                break;
              case "rich_text":
                a = pe.a.createElement(ii, Pa()({}, t, { content: e.extra.content, handleImagePreview: r }));
                break;
              case "photo":
                Oe()(t, { themeColor: "transparent", padding: "0" }), a = pe.a.createElement(ki, Pa()({}, t, { url: e.media_url, handleOnload: i, handleImagePreview: r }));
                break;
              case "file":
                var u = Rr(e.extra.expire_at), p = "";
                Oe()(t, { themeColor: "#fff" }), p = u ? R.a.t("{{expireTime}}后过期", { expireTime: u }) : R.a.t("已过期");
                var m = { fileName: e.extra.filename, fileSize: e.extra.convert_size, fileStatus: p, status: e.extra.cancel ? "cancel" : "", hasExpired: !u, fileUrl: e.media_url, handleFileDownload: s };
                a = pe.a.createElement(Ai, Pa()({}, t, m));
                break;
              case "hybrid":
                var h = { themeColor: o.panel.themeColor, fontColor: o.panel.fontColor }, f = { handleCardSubmit: l, scrollToBottom: c, msgType: e._renderType, cardSize: d };
                ["client_card", "photo_card"].includes(e.content[0].type) && Oe()(t, { themeColor: "transparent", padding: "0" }), a = pe.a.createElement(Kr, Pa()({}, t, h, f, { content: e.content }));
                break;
              default: a = null;
            } return a;
          }(e, r, t);
          break;
        case "client":
          r.themeColor = a.panel.themeColor, r.fontColor = a.panel.fontColor, "mobile" === sc && (r.arrow = !0), n = function (e, t, n) {
            var a = null, o = n.handleImgOnload, i = n.handleImagePreview; switch (e.content_type) {
              case "text":
                a = pe.a.createElement(Bo, Pa()({}, t, { msg: vi(e.content) }));
                break;
              case "photo":
                Oe()(t, { themeColor: "transparent", padding: "0" }), a = pe.a.createElement(ki, Pa()({}, t, { url: e.media_url, status: e.status, handleOnload: o, handleImagePreview: i }));
                break;
              case "file":
                var r = Rr(e.extra.expire_at), c = "";
                switch (Oe()(t, { themeColor: "#fff" }), e._fileStatus) {
                  case "uploading":
                    c = R.a.t("上传中");
                    break;
                  case "fail":
                    c = R.a.t("上传失败");
                    break;
                  case "success":
                    c = R.a.t("上传成功");
                    break;
                  case "cancel":
                    c = R.a.t("取消上传");
                    break;
                  default: c = r ? R.a.t("{{expireTime}}后过期", { expireTime: r }) : R.a.t("已过期");
                }
                var l = { id: e.id, fileName: e.extra.filename, fileSize: Xr(e.extra.size, 0), fileStatus: c, status: e.extra.cancel ? "cancel" : e._fileStatus, hasExpired: !r, progress: e._progress, speed: e._speed, cancelUpload: ec, disableDownload: !0 };
                a = pe.a.createElement(Ai, Pa()({}, t, l));
                break;
              default: a = null;
            } return a;
          }(e, r, t);
          break;
        case "redirect":
          n = pe.a.createElement(qi, { name: e.toNickname });
          break;
        case "evaluation":
          var c = { level: e.level, levelText: e.levelText, content: e.content };
          n = pe.a.createElement(Li, c);
          break;
        case "blacklist":
          n = pe.a.createElement("span", null, R.a.t("你被移出了黑名单"));
          break;
        case "redirect_agent":
          n = pe.a.createElement(Ui, null, R.a.t("正在为您转接，请稍候.."));
          break;
        case "redirect_btn":
          n = pe.a.createElement(Vi, { handleClick: o }, R.a.t("转人工"));
          break;
        case "redirect_message_board":
          n = pe.a.createElement(Vi, { handleClick: i, prevContent: R.a.t("抱歉没能理解您的提问，可选择") }, R.a.t("留言"));
          break;
        case "system_msg":
          n = pe.a.createElement(Ui, null, e.content);
          break;
        default: n = null;
      } return { base: r, component: n };
    }
    var fc = Object(o.b)(function (e) { return { showHistoryBtn: e.getIn(["message", "showHistoryBtn"]), historyTimes: e.getIn(["message", "historyTimes"]), historyLoading: e.getIn(["message", "historyLoading"]) }; }, function (e) { return { dispatch: e }; })(function (c) {
      var e = c.showHistoryBtn, t = c.historyTimes, n = c.historyLoading, a = c.msgs, o = void 0 === a ? [] : a, i = Object(me.c)(), r = Qn()(i, 1)[0], l = r(0 < t ? "加载更多历史消息" : "加载历史消息"); n && (l = r("加载中...")); var s = o.map(function (e) {
        var t = hc(e, c), n = t.base, a = t.component; if ("hybrid" === e.content_type && "mini_program_card" === e.content[0].type)
          return null; var o = e.sensitive, i = e.extra && e.extra.contains_sensitive_words || !1, r = (e.from_type, o || i); return pe.a.createElement(uc, { key: e.id, id: e.id }, pe.a.createElement(rc, { config: e, extra: n }, a), pe.a.createElement(mc, null, r ? "!消息包含不规范用语" : ""));
      }), d = Object(ue.useRef)(null); return Object(ue.useEffect)(function () { !function (e) { Sn = e; }(d.current); }, [d]), Object(ue.useEffect)(function () { wn(); }, []), pe.a.createElement(dc, { history: e, ref: d }, e ? pe.a.createElement(pc, { onClick: function () { return On({ keepPosition: !0 }); } }, pe.a.createElement("span", null, l)) : null, s);
    }), gc = te.isMobile() ? "mobile" : "desktop", bc = d.d.div.withConfig({ displayName: "frame-bubble-content__Wrapper", componentId: "lbgrtb-0" })(["width:100%;height:100%;color:#000;padding:10px;border-radius:5px;box-sizing:border-box;position:relative;.close{", " position:absolute;right:0;top:0;z-index:100;font-size:18px;width:30px;height:30px;line-height:30px;text-align:center;background:#fff;color:#999;cursor:pointer;}&:hover .close{display:block;}"], function (e) { return "mobile" === e.device ? "" : "display: none;"; }), vc = d.d.div.withConfig({ displayName: "frame-bubble-content__Header", componentId: "lbgrtb-1" })(["height:30px;display:flex;flex-direction:row;img{width:26px;height:26px;vertical-align:middle;}span{font-size:16px;line-height:26px;vertical-align:middle;padding-left:10px;overflow:hidden;white-space:nowrap;text-overflow:ellipsis;}"]), _c = d.d.div.withConfig({ displayName: "frame-bubble-content__Content", componentId: "lbgrtb-2" })(["font-size:14px;height:auto;max-height:60px;overflow:auto;"]), wc = Object(o.b)(function (e) { return { theme: e.get("theme"), unReadMsg: e.getIn(["message", "unReadMsg"]) }; }, function (e) { return { dispatch: e }; })(function (e) {
      var t = e.unReadMsg, n = e.theme, a = e.dispatch; if (t) {
        var o = t.agent, i = o.avatar, r = o.nickname, c = hc(t, { styles: n.get(gc) }).component;
        return pe.a.createElement(bc, Pa()({}, e, { device: gc }), pe.a.createElement("div", { className: "close", onClick: function (e) { e.stopPropagation(), a(G(!1)); } }, "✕"), pe.a.createElement(vc, null, pe.a.createElement("img", { alt: "Meiqia", src: i }), pe.a.createElement("span", null, r)), pe.a.createElement(_c, null, c));
      } return pe.a.createElement(bc, e);
    }), yc = te.isMobile() ? "mobile" : "desktop", xc = d.d.div.withConfig({ displayName: "bubble-arrow__Arrow", componentId: "sc-3uxf0p-0" })(["width:0;height:0;position:absolute;z-index:10;border:8px solid transparent;", " ", " ", " ", " ", " ", " ", " ", ""], function (e) { return e.left ? "left: ".concat(e.left, ";") : ""; }, function (e) { return e.right ? "right: ".concat(e.right, ";") : ""; }, function (e) { return e.top ? "top: ".concat(e.top, ";") : ""; }, function (e) { return e.bottom ? "bottom: ".concat(e.bottom, ";") : ""; }, function (e) { return e.transform ? "transform: ".concat(e.transform, ";") : ""; }, function (e) { return e["border-left"] ? "border-left: ".concat(e["border-left"], ";") : ""; }, function (e) { return e["border-right"] ? "border-right: ".concat(e["border-right"], ";") : ""; }, function (e) { return e["border-top"] ? "border-top: ".concat(e["border-top"], ";") : ""; }), kc = Object(o.b)(function (e) { return { theme: e.get("theme") }; })(function (e) {
      var t = e.theme, n = function (e, t) {
        var n, a, o = {}, i = "left" === t ? "right" : "left"; if ("desktop" == yc)
          switch (e) {
            case "bottom":
              Oe()(o, j()({ bottom: "0", "border-top": "9px solid #fff" }, t, "40px"));
              break;
            default: Oe()(o, (n = {}, j()(n, t, "0"), j()(n, "border-".concat(i), "9px solid #fff"), j()(n, "top", "50%"), j()(n, "transform", "translateY(-50%)"), n));
          }
        else
          switch (e) {
            case "bottom":
              Oe()(o, j()({ bottom: "0", "border-top": "9px solid #fff" }, t, "40px"));
              break;
            case "aside": Oe()(o, (a = {}, j()(a, t, "0"), j()(a, "border-".concat(i), "9px solid #fff"), j()(a, "top", "50%"), j()(a, "transform", "translateY(-50%)"), a));
          } return o;
      }(t.getIn([yc, "btn", "type"]), t.getIn([yc, "btn", "position", "type"])); return pe.a.createElement(xc, n);
    });
    function Ec() { var e = Ba()(["\n    html,body {\n        height:100%;\n        width:100%;\n        margin:0;\n        padding:0;\n    }\n    body {\n        padding: 16px;\n        box-sizing: border-box;\n    }\n"]); return Ec = function () { return e; }, e; }
    var Ic = Object(d.c)(Ec()), Cc = d.d.div.withConfig({ displayName: "router-bubble__Wrapper", componentId: "k6dy4k-0" })(["width:100%;height:100%;overflow:hidden;border-radius:5px;background:#fff;border:solid 1px #f7f7f7;box-shadow:0 0 14px 0 rgba(0,0,0,0.16);"]), Tc = Object(o.b)(function (e) { return { router: e.get("router"), msg: e.get("message") }; }, null)(function (e) { var t = e.msg, n = e.router; return pe.a.createElement(Na, { visible: t.get("unReadPreview") && n.get("showBubble"), component: zo, GlobalStyle: Ic, iframeName: "bubble" }, pe.a.createElement(kc, null), pe.a.createElement(Cc, { onClick: function () { ht(!0, "chat"), wn(); } }, pe.a.createElement(wc, null))); }), Sc = te.isMobile();
    function jc(e) {
      switch (e) {
        case "desktop.mondeo":
        case "desktop.fusion": return "standard";
        case "desktop.fiesta":
        case "desktop.focus": return "mini";
        case "desktop.edge": return "edge";
        case "desktop.customer": return "custom";
        case "mobile.fiesta":
        case "mobile.mustang": return "full";
        case "mobile.kuga": return "half";
        default: return "standard";
      }
    }
    function Nc(e, t) {
      var n = Sc ? "mobile" : "desktop"; if (t) {
        var a = e.getIn(["standalone", n]);
        return a ? { device: n, panel: { type: jc("".concat(n, ".").concat(a.type)), themeColor: "#".concat(a.theme[0]), fontColor: a.theme[1], profileBgColor: "#".concat(a.theme[2]) } } : null;
      } var o = e.getIn([n, "panel"]), i = e.getIn([n, "btn"]); return o && i ? { device: n, panel: { type: jc("".concat(n, ".").concat(o.type)), position: o.position, themeColor: "#".concat(o.theme[0]), fontColor: o.theme[1], profileBgColor: "#".concat(o.theme[2]) }, btn: { type: function (e) { return e; }(i.type), position: i.position, themeColor: "#".concat(i.theme) } } : null;
    }
    function Oc(e, t) { var n = e; C()(t).forEach(function (e) { n.style[e] = t[e]; }); }
    function Mc(e) { var t = window.parent.document.querySelector("iframe[name=chat]").contentWindow.document.getElementById("_MEIQIA_IMAGE_PREVIEW_"); t && (t.style.display = "none"); }
    function zc() { var e = window.parent.document.querySelector("iframe[name=chat]").contentWindow.document, t = e.getElementById("_MEIQIA_IMAGE_PREVIEW_"); return t || function (e) { var t = document.createElement("div"), n = document.createElement("div"), a = document.createElement("img"); return t.id = "_MEIQIA_IMAGE_PREVIEW_", Oc(t, { display: "none" }), Oc(n, { position: "absolute", textAlign: "center", top: 0, bottom: 0, right: 0, left: 0, zIndex: 5, width: "100%", height: "auto", minHeight: "100%", backgroundColor: "rgba(0, 0, 0, 1)", fontSize: 0, overflow: "auto" }), Oc(a, { width: "100%", height: "auto" }), n.appendChild(a), t.appendChild(n), e.body.appendChild(t), t; }(e); }
    function Dc(e) {
      if (te.isMobile()) {
        var t = zc();
        !function (e) { e.removeEventListener("click", Mc), e.addEventListener("click", Mc); }(t);
        try {
          t.getElementsByTagName("img")[0].src = e, t.style.display = "block";
        }
        catch (e) {
          console.log(e);
        }
      }
    }
    var Bc = d.d.iframe.withConfig({ displayName: "frame-chat__FrameMain", componentId: "jge1pb-0" })(["border:none;margin:0;padding:0;overflow-x:visible;overflow-y:visible;overflow-wrap:normal;box-shadow:rgba(0,0,0,0.16) 0 5px 40px;border-radius:8px;position:fixed;z-index:9999999;", ""], function (e) { return e.styles ? e.styles.join("") : ""; }), Ac = d.d.iframe.withConfig({ displayName: "frame-chat__FrameMobile", componentId: "jge1pb-1" })(["border:none;margin:0;position:fixed;z-index:9999999;top:0;bottom:0;left:0;right:0;height:100% !important;overflow:hidden;box-sizing:border-box;", ""], function (e) { return e.styles ? e.styles.join("") : ""; }), Pc = pe.a.forwardRef(function (e, t) {
      var n, a = e.frameRef, o = e.customTheme, i = e.visible, r = e.theme, c = e.standalone, l = Nc(o, c), s = te.isMobile(); return n = c ? function (e) {
        var t = ["top: 50%;", "left: 50%;", "transform: translateX(-50%) translateY(-50%);"]; if (!e)
          return ["display: none !important;"]; if (t.push(["display: block !important;"]), te.isMobile()) {
            var n = window.parent.document.body.clientWidth;
            t.push("width: ".concat(n, "px !important;"));
          }
        else
          switch (e.type) {
            case "standard":
            case "custom":
              t.push.apply(t, ["width: 688px;", "height: 540px;", "min-height:250px;", "max-height:700px;"]);
              break;
            case "mini": t.push.apply(t, ["width: 500px;", "height: 540px;"]);
          } return t;
      }(l ? l.panel : r.panel) : function (e, t) {
        var n = []; if (!e)
          return ["display: none !important;"]; if (n.push(["display: block !important;"]), te.isMobile()) {
            var a = window.parent.document.body.clientWidth;
            switch (n.push("width: ".concat(a, "px !important; max-width: 100% !important;")), t.type) {
              case "half": n.push("padding-top: 60px;");
            }
          }
        else {
          var o = t.position, i = o.type, r = o.bottom, c = o.horizontal;
          switch (t.type) {
            case "standard":
            case "custom":
              n.push.apply(n, ["width: 688px !important;", "height: 540px !important;", "min-height:250px;", "max-height:700px;"]), "center" === i ? n.push.apply(n, ["top: 50%;", "left: 50%;", "transform: translateX(-50%) translateY(-50%);"]) : n.push.apply(n, ["bottom: ".concat(r, "px;"), "".concat(i, ": ").concat(c, "px;")]);
              break;
            case "edge":
              n.push.apply(n, ["width: 320px !important;", "height: 100% !important;", "top:0;", "bottom: 0;", "".concat(i, ":0;")]);
              break;
            case "mini": n.push.apply(n, ["width: 320px !important;", "height: 480px !important;", "bottom: 0;", "".concat(i, ": ").concat(c, "px;")]);
          }
        } return n;
      }(i, l ? l.panel : r.panel), s ? pe.a.createElement(Ac, { name: "chat", frameborder: "0", scrolling: "no", styles: n, ref: a }) : pe.a.createElement(Bc, { name: "chat", frameborder: "0", scrolling: "no", styles: n, ref: a });
    }), qc = Object(d.e)(Object(o.b)(function (e) { return { standalone: e.getIn(["config", "standalone"]), customTheme: e.get("theme") }; }, function (e) { return { dispatch: e }; })(Pc));
    function Rc(e) { return pe.a.createElement(Hi, Oe()({}, e, { width: "auto", height: "auto" })); }
    var Lc = d.d.div.withConfig({ displayName: "title-bar__Header", componentId: "sc-1tx1lhu-0" })(["width:100%;height:60px;padding:10px 10px;display:flex;justify-content:center;align-items:center;font-size:14px;box-sizing:border-box;color:", ";background:", ";"], function (e) { return e.fontColor; }, function (e) { return e.themeColor; }), Fc = d.d.div.withConfig({ displayName: "title-bar__HeaderLeft", componentId: "sc-1tx1lhu-1" })(["height:40px;flex:10 1 auto;overflow:hidden;position:relative;", " .avatar{", "}"], function (e) { return e.hasAvatar ? "padding-left: 46px;" : ""; }, function (e) { return e.hasAvatar ? "\n                    position: absolute;\n                    left: 0;\n                    top: 0;\n                    height: 40px;\n                    border-radius: 50%;\n                " : "display: none;"; }), Uc = d.d.div.withConfig({ displayName: "title-bar__HeaderRight", componentId: "sc-1tx1lhu-2" })(["flex:1 1 auto;text-align:right;white-space:nowrap;padding:10px 0 10px 10px;"]), Wc = d.d.div.withConfig({ displayName: "title-bar__LeftWrap", componentId: "sc-1tx1lhu-3" })(["width:100%;display:inline-block;vertical-align:middle;.name{font-size:14px;}.signature{font-size:12px;}.name,.signature{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;width:100%;}.title{font-size:14px;line-height:40px;}"]), Vc = Object(d.d)(fo).withConfig({ displayName: "title-bar__IconBtn", componentId: "sc-1tx1lhu-4" })(["vertical-align:middle;margin-left:5px;cursor:pointer;opacity:0.8;&:hover{opacity:1;}"]), Gc = function () { window.parent.history.back(); };
    function Hc(e) { var t = e.avatar, n = e.name, a = e.tel, o = e.signature, i = e.showBack, r = e.connecting, c = e.ringEnabled, l = e.closeEnabled, s = e.closeText, d = e.showSwitch, u = e.themeColor, p = e.fontColor, m = e.handleClose, h = e.handleRedirect, f = e.handleRing, g = te.isMobile(), b = void 0 !== c && !g, v = g && a, _ = Object(me.c)(), w = Qn()(_, 1)[0], y = Object(ue.useCallback)(function () { f(!c); }, [f, c]); return pe.a.createElement(Lc, { themeColor: u, fontColor: p }, i ? pe.a.createElement(Vc, { type: "mobile-page-back", width: "24px", height: "30px", handleClick: Gc }) : null, pe.a.createElement(Fc, { hasAvatar: t }, r ? pe.a.createElement(Wc, null, pe.a.createElement("div", { className: "title" }, w("连接中..."))) : pe.a.createElement(pe.a.Fragment, null, t ? pe.a.createElement("img", { className: "avatar", alt: "#", src: t }) : pe.a.createElement("span", { className: "avatar" }), pe.a.createElement(Wc, null, n ? pe.a.createElement("div", { className: o ? "name" : "title" }, n) : null, o ? pe.a.createElement("div", { className: "signature" }, o) : null))), pe.a.createElement(Uc, null, d ? pe.a.createElement(Rc, { fontColor: p, bgColor: "transparent", opacity: .8, handleClick: h }, pe.a.createElement("span", null, w("转人工"))) : null, b ? pe.a.createElement(Vc, { type: c ? "sound-white" : "silent-white", width: "20px", height: "20px", handleClick: y }) : null, v ? pe.a.createElement("a", { href: "tel:".concat(a) }, pe.a.createElement(Vc, { type: "call", width: "20px", height: "20px" })) : null, l ? pe.a.createElement(Vc, { type: "hide-white", width: "20px", height: "20px", handleClick: m }, s) : null)); }
    var Qc = d.d.div.withConfig({ displayName: "user-info__Container", componentId: "sc-8wgbg-0" })([""]), Yc = d.d.img.withConfig({ displayName: "user-info__Avatar", componentId: "sc-8wgbg-1" })(["width:100%;height:auto;"]), $c = d.d.div.withConfig({ displayName: "user-info__Name", componentId: "sc-8wgbg-2" })(["padding:14px 0 14px 10px;word-break:break-all;font-size:15px;color:#646464;"]), Jc = d.d.div.withConfig({ displayName: "user-info__Item", componentId: "sc-8wgbg-3" })(["width:100%;line-height:22px;font-size:12px;word-break:break-all;padding:6px 0;.info{color:#abaaac;display:inline-block;vertical-align:middle;padding-left:10px;}"]);
    function Kc(e) { var t = e.name, n = e.avatar, a = e.tel, o = e.cellphone, i = e.email, r = e.qq, c = e.weixin; return pe.a.createElement(Qc, null, pe.a.createElement(Yc, { src: n }), pe.a.createElement($c, null, t || ""), a ? pe.a.createElement(Jc, null, pe.a.createElement(fo, { type: "tele", width: "20px", height: "20px" }), pe.a.createElement("span", { className: "info" }, a)) : null, o ? pe.a.createElement(Jc, null, pe.a.createElement(fo, { type: "phone", width: "20px", height: "20px" }), pe.a.createElement("span", { className: "info" }, o)) : null, i ? pe.a.createElement(Jc, null, pe.a.createElement(fo, { type: "email", width: "20px", height: "20px" }), pe.a.createElement("span", { className: "info" }, i)) : null, r ? pe.a.createElement(Jc, null, pe.a.createElement(fo, { type: "qq", width: "20px", height: "20px" }), pe.a.createElement("span", { className: "info" }, r)) : null, c ? pe.a.createElement(Jc, null, pe.a.createElement(fo, { type: "wechat", width: "20px", height: "20px" }), pe.a.createElement("span", { className: "info" }, c)) : null); }
    var Zc = d.d.a.withConfig({ displayName: "support__Container", componentId: "lrhi0c-0" })(["display:flex;flex-wrap:nowrap;align-items:center;justify-content:center;width:100%;height:30px;line-height:30px;text-align:center;font-size:12px;color:#b7bac2;background-color:#f4f4f4;border-top:#ededed;text-decoration:none;"]), Xc = d.d.span.withConfig({ displayName: "support__Text", componentId: "lrhi0c-1" })(["display:inline-block;vertical-align:middle;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;"]);
    function el(e) { var t = Object(me.c)(), n = (0, Qn()(t, 1)[0])("客服软件由美洽提供"); return pe.a.createElement(Zc, { target: "_blank", href: e.link }, pe.a.createElement(fo, { type: "support", width: "20px", height: "20px" }), pe.a.createElement(Xc, { title: n }, n)); }
    var tl = d.d.div.withConfig({ displayName: "side-panel__Container", componentId: "sc-1tvj7eq-0" })(["width:100%;height:100%;position:relative;box-sizing:border-box;", ";"], function (e) { return e.bgColor ? "background:".concat(e.bgColor, ";") : ""; }), nl = d.d.div.withConfig({ displayName: "side-panel__Content", componentId: "sc-1tvj7eq-1" })(["width:100%;height:100%;padding:10px;overflow-x:hidden;overflow-y:auto;box-sizing:border-box;padding-bottom:", ";"], function (e) { return e.showSupport ? "30px" : 0; }), al = d.d.div.withConfig({ displayName: "side-panel__Custom", componentId: "sc-1tvj7eq-2" })(["ul,ol{list-style:none;padding:5px 0;}"]), ol = d.d.div.withConfig({ displayName: "side-panel__Support", componentId: "sc-1tvj7eq-3" })(["position:absolute;left:0;right:0;bottom:0;width:100%;height:30px;"]);
    function il(e) { var t = e.showSupport, n = e.supportLink, a = e.bgColor, o = e.userInfo, i = e.custom, r = e.showAvatar, c = void 0 === r || r; return pe.a.createElement(tl, { bgColor: a }, pe.a.createElement(nl, { showSupport: t }, c ? pe.a.createElement(Kc, o) : null, i ? pe.a.createElement(al, { dangerouslySetInnerHTML: { __html: i } }) : null), t ? pe.a.createElement(ol, null, pe.a.createElement(el, { link: n })) : null); }
    var rl = 30, cl = d.d.div.withConfig({ displayName: "action-tooltip__Container", componentId: "sc-12tnxr9-0" })(["position:relative;height:", "px;padding:5px 10px 5px 14px;box-sizing:border-box;display:flex;flex-direction:row;&:after{content:' ';display:table;clear:both;}"], function (e) { return e.tHeight; }), ll = d.d.div.withConfig({ displayName: "action-tooltip__BtnsWrap", componentId: "sc-12tnxr9-1" })(["display:flex;align-items:center;flex-grow:0;flex-wrap:nowrap;height:100%;"]), sl = d.d.div.withConfig({ displayName: "action-tooltip__Btns", componentId: "sc-12tnxr9-2" })(["height:20px;display:flex;flex-wrap:nowrap;"]), dl = d.d.div.withConfig({ displayName: "action-tooltip__Custom", componentId: "sc-12tnxr9-3" })(["flex-grow:1;width:100%;text-align:right;"]), ul = Object(d.d)(fo).withConfig({ displayName: "action-tooltip__IconBtn", componentId: "sc-12tnxr9-4" })(["vertical-align:middle;margin-right:6px;cursor:pointer;opacity:0.8;&:hover{opacity:1;}"]), pl = d.d.span.withConfig({ displayName: "action-tooltip__InputSpan", componentId: "sc-12tnxr9-5" })(["visibility:hidden;position:absolute;"]);
    function ml(e) { var t = e.height, n = void 0 === t ? rl : t, a = e.toggleEmojiPanel, o = e.showEvaluation, i = e.className, r = e.showEva, c = e.showFile, l = e.sendImage, s = e.uploadFile, d = e.clickImage, u = e.clickFile, p = Object(me.c)(), m = Qn()(p, 1)[0]; return pe.a.createElement(cl, { tHeight: n, className: i }, pe.a.createElement(ll, null, pe.a.createElement(sl, null, pe.a.createElement(ul, { title: m("表情"), type: "face", width: "20px", height: "20px", handleClick: a }), pe.a.createElement(ul, { title: m("发送图片"), type: "picture", width: "20px", height: "20px" }, pe.a.createElement(pl, null, pe.a.createElement("input", { id: "photoFile", type: "file", accept: "image/*", onClick: d, onChange: l }))), c ? pe.a.createElement(ul, { title: m("发送文件"), type: "file", width: "20px", height: "20px" }, pe.a.createElement(pl, null, pe.a.createElement("input", { id: "uploadFile", type: "file", onClick: u, onChange: s }))) : null, r ? pe.a.createElement(ul, { title: m("评价"), type: "good", width: "20px", height: "20px", handleClick: o }) : null)), pe.a.createElement(dl, null, e.children)); }
    var hl, fl, gl, bl, vl = n(466), _l = n.n(vl), wl = ["smile", "laughing", "blush", "heart_eyes", "smirk", "flushed", "grin", "kissing_smiling_eyes", "wink", "kissing_closed_eyes", "stuck_out_tongue_winking_eye", "sleeping", "worried", "sweat_smile", "cold_sweat", "joy", "sob", "angry", "mask", "scream", "sunglasses", "thumbsup", "clap", "ok_hand"], yl = d.d.label.withConfig({ displayName: "emoji-panel__Span", componentId: "sc-6f4l8l-0" })(["display:inline-block;vertical-align:middle;max-height:200px;overflow-y:auto;"]), xl = d.d.span.withConfig({ displayName: "emoji-panel__IconWrap", componentId: "sc-6f4l8l-1" })(["display:inline-block;vertical-align:middle;margin:10px;cursor:pointer;"]), kl = pe.a.forwardRef(function (e, t) { var n = e.children, a = e.handleClick, o = e.className, i = wl.map(function (e, t) { var n = ["0", "".concat(-25 * t, "px")]; return pe.a.createElement(xl, { key: e, onClick: function () { return a(e); } }, pe.a.createElement(Ja, { width: "25px", height: "25px", image: _l.a, position: n, bgSize: "25px auto" })); }); return pe.a.createElement(yl, { className: o, ref: t }, i, n || null); }), El = (hl = function (e) { var t = en.getState(), n = en.dispatch, a = t.get("message"), o = 1 * new Date, i = a.get("schedulerAfterClientSendMsg"), r = { id: o, from_type: "client", content_type: "text", status: "sending", content: e, type: "text" }, c = { id: o, content_type: "text", content: e }; a.get("convId") ? a.get("chatHasEnd") ? (Fn(), n(at(c)), n(Ze({ schedulerMsg: !0 }))) : (n(Xe(r)), fn(r)) : (i && !a.get("scheduler") && (Fn(), n(Ze({ schedulerAfterClientSendMsg: !1, schedulerMsg: !0, queue: [] }))), n(at(c))), wn(); }, fl = 300, gl = !0, function () {
      for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
        t[n] = arguments[n]; var a = gl && !bl; clearTimeout(bl), bl = setTimeout(function () { bl = null, gl || hl.apply(void 0, t); }, fl), a && hl.apply(void 0, t);
    });
    n(263);
    function Il(t, e) {
      var n = C()(t); if (E.a) {
        var a = E()(t);
        e && (a = a.filter(function (e) { return x()(t, e).enumerable; })), n.push.apply(n, a);
      } return n;
    }
    function Cl(e, t) {
      var n = en.getState().get("config"); try {
        var a = "unsentMsg-".concat(n.get("entId"), "-").concat(n.get("trackId"));
        if ("get" === e)
          return We("get", a);
        if ("set" === e)
          return We("set", a, t), !0;
        if ("remove" === e)
          return We("remove", a), !0;
      }
      catch (e) {
        return !1;
      } return !1;
    }
    var Tl = d.d.div.withConfig({ displayName: "action-textarea__Container", componentId: "m7qpvj-0" })(["height:100%;width:100%;box-sizing:border-box;"]), Sl = d.d.textarea.withConfig({ displayName: "action-textarea__Textarea", componentId: "m7qpvj-1" })(["display:block;width:100%;height:100%;resize:none;padding:8px 10px;outline:0;background:#fff;border:none;font-size:13px;line-height:", ";"], function (e) { return e.lineHeight || "15px"; }), jl = d.d.input.withConfig({ displayName: "action-textarea__Input", componentId: "m7qpvj-2" })(["display:block;width:100%;height:100%;padding:8px 10px;outline:0;background:#fff;border:none;font-size:13px;line-height:", ";"], function (e) { return e.lineHeight || "15px"; }), Nl = pe.a.forwardRef(function (e, t) {
      var n = e.value, a = e.handleKeyDown, o = e.handleInput, i = e.handleKeyUp, r = e.handleFocus, c = e.handleBlur, l = e.handlePaste, s = to()(e, ["value", "handleKeyDown", "handleInput", "handleKeyUp", "handleFocus", "handleBlur", "handlePaste"]), d = Object(me.c)(), u = Qn()(d, 1)[0], p = te.isMobile(), m = function (t) {
        for (var e = 1; e < arguments.length; e++) {
          var n = null != arguments[e] ? arguments[e] : {};
          e % 2 ? Il(n, !0).forEach(function (e) { j()(t, e, n[e]); }) : w.a ? v()(t, w()(n)) : Il(n).forEach(function (e) { f()(t, e, x()(n, e)); });
        } return t;
      }({}, s, { ref: t, value: n, placeholder: u("请输入"), onClick: o, onChange: o, onKeyUp: i, onKeyDown: a, onFocus: r, onBlur: c, onPaste: l }); return pe.a.createElement(Tl, null, p ? pe.a.createElement("form", { action: "javascript:void(0);" }, pe.a.createElement(jl, Pa()({}, m, { type: "text", autoComplete: "off" }))) : pe.a.createElement(Sl, m));
    }), Ol = function (e) {
      if (e.clipboardData.items)
        for (var t = e.clipboardData.items, n = 0, a = t.length; n < a; n += 1)
          if (t[n].type.match(/^image\//)) {
            var o = t[n].getAsFile(), i = { id: Math.random(), from_type: "client", content_type: "photo", status: "sending", media_url: nc.a, file: o };
            Hr(i);
          }
    }, Ml = !1, zl = "", Dl = function t(e) {
      var n = en.getState(), a = n.get("config"), o = a.get("entId"), i = a.get("trackId"), r = n.getIn(["message", "agent"]), c = n.getIn(["message", "chatHasEnd"]), l = n.getIn(["message", "scheduler"]); if (zl = e, !Ml && l && !c && r) {
        var s = { ent_id: o, agent_id: r ? r.id : null, track_id: i, content: e };
        Ml = !0, function (e) { return fe({ url: "/client/inputting", method: "post", headers: { "content-type": "application/json" }, data: e }); }(s).then(function (e) { setTimeout(function () { Ml = !1, s.content !== zl && t(zl); }, 3e3); }, function () { setTimeout(function () { Ml = !1; }, 3e3); });
      }
    }, Bl = te.isMobile() ? "mobile" : "desktop", Al = d.d.div.withConfig({ displayName: "chat-textarea__Container", componentId: "catw5r-0" })(["width:100%;height:100%;position:relative;"]), Pl = d.d.div.withConfig({ displayName: "chat-textarea__AutoFit", componentId: "catw5r-1" })(["position:absolute;top:0;width:100%;z-index:300;box-sizing:border-box;padding:10px 13px 5px 10px;transform:translateY(-100%);ul{background:#fff;box-shadow:0 0 12px 1px rgba(0,0,0,0.2);}li{list-style:none;color:#888;border-top:solid 1px #eee;& > a{display:block;padding:10px;em{color:#6088e6;}}&:hover,&.selected{color:#fff;cursor:pointer;background:", ";& > a em{color:#fff;}}}"], function (e) { return "#".concat(e.themeColor); }), ql = Object(o.b)(function (e) { return { autoFit: e.getIn(["message", "autoFit"]), autoFitSelected: e.getIn(["message", "autoFitSelected"]), themeColor: e.getIn(["theme", Bl, "panel", "theme"]) }; }, function (e) { return { dispatch: e }; })(function (t) { var e, n, a = t.autoFit, o = t.autoFitSelected, i = t.sendMsg, r = t.setPos, c = t.setContent, l = t.content, s = t.lineHeight, d = t.themeColor, u = t.inputRef, p = (e = a, n = o, pe.a.createElement("ul", null, e.map(function (e, t) { return pe.a.createElement("li", { key: e.question_id, className: n === t ? "selected" : "" }, pe.a.createElement("a", { onClick: function () { return function (e) { i(e.replace(/<em>|<\/em>/g, "")); }(e.question); }, dangerouslySetInnerHTML: { __html: e.question } })); }))); return pe.a.createElement(Al, null, a && 0 < a.length ? pe.a.createElement(Pl, { themeColor: d && d[0] }, p) : null, pe.a.createElement(Nl, { id: "_MEIQIA_INPUT", value: l, handleInput: function (e) { var t = e.target.value, n = e.target.selectionStart, a = e.target.selectionEnd; c(t), r({ start: n, end: a }); }, handleKeyDown: function (e) { 13 === e.keyCode && (e.preventDefault(), i()); var t = ""; 38 === e.keyCode ? t = pn.select("prev") : 40 === e.keyCode && (t = pn.select("next")), t && c(t); }, handleKeyUp: function (e) { var t = e.target.value.trim(); 2048 < t.length && (c(t.substr(0, 2048)), Ea("最多只能发送 2048 个字符哦", 3e3)), Dl(t); var n = e.which || e.keyCode; 38 !== n && 40 !== n && pn.search(t); }, handleFocus: function (e) { "hoist" === ge.fixInput() && t.dispatch(ut(!0)); }, handleBlur: function (e) { ge.wxScroll(), setTimeout(function () { t.dispatch(ut(!1)), pn.remove(); }, 100); }, handlePaste: function (e) { Ol(e); }, lineHeight: s, ref: u })); }), Rl = d.d.div.withConfig({ displayName: "action-box__Container", componentId: "sc-13hjnnn-0" })(["height:100%;width:100%;border-top:1px solid #ededed;position:relative;padding-bottom:40px;box-sizing:border-box;"]), Ll = d.d.div.withConfig({ displayName: "action-box__FinishTip", componentId: "sc-13hjnnn-1" })(["width:100%;height:100%;position:absolute;z-index:2;left:0;right:0;top:0;bottom:0;text-align:center;background:#fff;display:table;span{display:table-cell;vertical-align:middle;word-break:break-word;padding:0 20px;}"]), Fl = d.d.div.withConfig({ displayName: "action-box__EmojiPanelWrap", componentId: "sc-13hjnnn-2" })(["position:absolute;top:-", "px;background:#fff;border-top:1px solid #ddd;z-index:2;left:1px;right:1px;box-sizing:border-box;visibility:", ";"], function (e) { return e.emojiHeight + 2; }, function (e) { return e.visible ? "visible" : "hidden"; }), Ul = d.d.a.withConfig({ displayName: "action-box__Link", componentId: "sc-13hjnnn-3" })(["color:#4ca0ff;padding:0 5px;cursor:pointer;"]), Wl = Object(o.b)(function (e) { return { socket: e.getIn(["config", "socket"]) }; }, function (e) { return { dispatch: e }; })(function (e) { function n(e) { T(e), e ? Cl("set", e) : Cl("remove"); } function t(e) { var t = e ? e.trim() : C.trim(); t && !m && (a || Ea("服务连接中，请稍候…", 3e3), El(t), n(""), pn.remove(), O({ start: 0, end: 0 })); } var a = e.socket, o = e.themeColor, i = e.fontColor, r = e.finish, c = e.showEvaluation, l = e.showEva, s = e.sendImage, d = e.fileEnabled, u = e.uploadFile, p = e.checkSocket, m = e.blacklist, h = e.newConversation, f = e.toMessageBoard, g = Object(ue.useState)(0), b = Qn()(g, 2), v = b[0], _ = b[1], w = Object(ue.useState)(!1), y = Qn()(w, 2), x = y[0], k = y[1], E = Object(ue.useState)(function () { return Cl("get") || ""; }), I = Qn()(E, 2), C = I[0], T = I[1], S = Object(ue.useState)({ start: 0, end: 0 }), j = Qn()(S, 2), N = j[0], O = j[1], M = Object(ue.useRef)(null), z = Object(ue.useRef)(null), D = Object(me.c)(), B = Qn()(D, 1)[0], A = Object(ue.useCallback)(function () { return k(!x); }, [k, x]); return Object(ue.useEffect)(function () { _(M.current.offsetHeight); }, []), pe.a.createElement(Rl, null, pe.a.createElement(ql, { sendMsg: t, setPos: O, setContent: n, content: C, inputRef: z }), pe.a.createElement(ml, { height: 40, clickImage: p, clickFile: p, sendImage: s, uploadFile: u, showEva: l, showFile: d, toggleEmojiPanel: A, showEvaluation: c }, pe.a.createElement(Hi, { bgColor: o, fontColor: i, handleClick: function () { return t(); } }, pe.a.createElement("span", null, B("发送")))), pe.a.createElement(Fl, { emojiHeight: v, visible: x }, pe.a.createElement(kl, { ref: M, handleClick: function (e) { var t = e.length + 2; k(!1), n("".concat(C.slice(0, N.start), ":").concat(e, ":").concat(C.slice(N.end))), O({ start: N.start + t, end: N.start + t }), setTimeout(function () { var e = z.current.value; z.current.focus(), z.current.selectionStart = N.start + t, z.current.selectionEnd = N.start + t, 2048 < e.length && (n(e.substr(0, 2048)), Ea("最多只能发送 2048 个字符哦", 3e3)); }, 0); } })), r ? pe.a.createElement(Ll, null, pe.a.createElement("span", null, pe.a.createElement(me.a, null, "对话已结束，您可以", pe.a.createElement(Ul, { onClick: h }, "开始新的对话"), "或", pe.a.createElement(Ul, { onClick: f }, "留言")))) : null, m ? pe.a.createElement(Ll, null, pe.a.createElement("span", null, B("抱歉，客服系统暂时无法使用"))) : null); });
    function Vl(e) { return pe.a.createElement(Hi, Oe()({}, e, { width: "100%" })); }
    var Gl = d.d.div.withConfig({ displayName: "evaluation__Container", componentId: "sc-4mk0t7-0" })(["position:relative;width:100%;height:100%;"]), Hl = d.d.div.withConfig({ displayName: "evaluation__CloseBtn", componentId: "sc-4mk0t7-1" })(["position:absolute;right:10px;top:10px;width:20px;height:20px;"]), Ql = d.d.div.withConfig({ displayName: "evaluation__Header", componentId: "sc-4mk0t7-2" })(["padding:10px 30px 0;box-sizing:border-box;width:100%;text-align:center;font-size:14px;color:#666;"]), Yl = d.d.div.withConfig({ displayName: "evaluation__Btns", componentId: "sc-4mk0t7-3" })(["text-align:center;margin-top:10px;"]), $l = d.d.div.withConfig({ displayName: "evaluation__Btn", componentId: "sc-4mk0t7-4" })(["display:inline-block;width:60px;height:70px;margin:0 5px;border:1px solid #fff;cursor:pointer;color:#666;padding-top:10px;&:hover,&.selected{color:", ";background-color:#f0f0f0;border-color:#f0f0f0;border-radius:3px;}p{padding-top:5px;}"], function (e) { return e.color; }), Jl = d.d.div.withConfig({ displayName: "evaluation__Content", componentId: "sc-4mk0t7-5" })(["padding:10px 20px 15px;"]), Kl = d.d.textarea.withConfig({ displayName: "evaluation__Textarea", componentId: "sc-4mk0t7-6" })(["width:100%;height:60px;padding:10px;box-sizing:border-box;overflow-y:auto;resize:none;outline:none;border:1px solid #ededed;"]), Zl = Object(d.d)(Vl).withConfig({ displayName: "evaluation__Submit", componentId: "sc-4mk0t7-7" })(["margin-top:10px;"]), Xl = Object(d.d)(fo).withConfig({ displayName: "evaluation__Icon", componentId: "sc-4mk0t7-8" })(["cursor:pointer;"]), es = { height: "35px", fontColor: "#fff", bgColor: "#007aff" };
    function ts(e) { var t = e.handleClose, n = e.handleSubmit, a = e.promptText, o = void 0 === a ? "" : a, i = e.themeColor, r = e.fontColor, c = Object(ue.useState)(""), l = Qn()(c, 2), s = l[0], d = l[1], u = Object(ue.useState)(null), p = Qn()(u, 2), m = p[0], h = p[1], f = Object(me.c)(), g = Qn()(f, 1)[0]; return pe.a.createElement(Gl, null, pe.a.createElement(Hl, null, pe.a.createElement(Xl, { handleClick: t, type: "close", width: "20px", height: "20px" })), pe.a.createElement(Ql, null, o), pe.a.createElement(Yl, null, pe.a.createElement($l, { color: "#00ce7d", onClick: function () { return h(2); }, className: 2 === m ? "selected" : "" }, pe.a.createElement(Xl, { type: "eva-good", width: "40px", height: "40px" }), pe.a.createElement("p", null, g("好评"))), pe.a.createElement($l, { color: "#ffb652", onClick: function () { return h(1); }, className: 1 === m ? "selected" : "" }, pe.a.createElement(Xl, { type: "eva-normal", width: "40px", height: "40px" }), pe.a.createElement("p", null, g("中评"))), pe.a.createElement($l, { color: "#ff5c5e", onClick: function () { return h(0); }, className: 0 === m ? "selected" : "" }, pe.a.createElement(Xl, { type: "eva-bad", width: "40px", height: "40px" }), pe.a.createElement("p", null, g("差评")))), pe.a.createElement(Jl, null, pe.a.createElement(Kl, { placeholder: g("请填写评价内容（选填）"), value: s, onBlur: ge.wxScroll, onChange: function (e) { return d(e.target.value); } }), pe.a.createElement(Zl, Pa()({}, es, { handleClick: function () { [0, 1, 2].includes(m) ? 30 < s.length ? Ea("最多只能发送 30 个字符哦", 3e3) : n({ level: m, content: s.trim() }) : Ea("请选择评价等级", 3e3); }, bgColor: i, fontColor: r }), pe.a.createElement("span", null, g("提交"))))); }
    var ns = d.d.div.withConfig({ displayName: "evaluation__Mask", componentId: "sc-17nztew-0" })(["width:100%;height:100%;background:rgba(0,0,0,0.35);"]), as = d.d.div.withConfig({ displayName: "evaluation__EvaPanel", componentId: "sc-17nztew-1" })(["position:absolute;background:#fff;min-height:254px;max-height:300px;z-index:600;", " ", ""], function (e) { return "fixed" === e.width ? "width:320px;" : "width:100%;"; }, function (e) { return "center" === e.position ? "top:50%;left:50%;margin:-125px 0 0 -160px;" : "top:0;"; });
    var os = Object(o.b)(function (e) { return { message: e.get("message") }; }, function (e) { return { dispatch: e }; })(function (o) {
      var e = o.closeEvaluation, t = to()(o, ["closeEvaluation"]), n = Object(me.c)(), i = Qn()(n, 1)[0]; return pe.a.createElement(ns, null, pe.a.createElement(as, o, pe.a.createElement(ts, Pa()({}, t, {
        handleClose: e, handleSubmit: function (a) {
          (function (e, t) { return fe({ url: "/conversation/".concat(e, "/evaluation"), method: "post", headers: { "content-type": "application/json" }, data: t }); })(o.message.get("convId"), a).then(function (e) {
            if (e.data.success) {
              var t = i("好评");
              0 === a.level ? t = i("差评") : 1 === a.level && (t = i("中评"));
              var n = { id: 1 * new Date, from_type: "evaluation", level: a.level, levelText: t, content: a.content };
              o.dispatch(Xe(n)), wn();
            }
            else
              Ea("评价失败，请稍后重试", 2e3);
          }, function () { Ea("评价失败，请稍后重试", 2e3); }).finally(function () { e(); });
        }
      }))));
    });
    function is(e, t) { return Oe()({ themeColor: e.themeColor, fontColor: e.fontColor }, t); }
    var rs = { getTitleBar: function (e) { return is(e, {}); }, getMsgText: function (e) { return is(e, {}); }, getActionBox: function (e) { return is(e, {}); }, getEvaluation: function (e) { return is(e, {}); } };
    function cs(n, e) { var a = {}; return e.forEach(function (e) { var t = rs["get".concat(e)]; rs["get".concat(e)] && (a[e] = t(n)); }), a; }
    var ls = d.d.div.withConfig({ displayName: "chat-desktop-standard__Base", componentId: "sc-1a5eik6-0" })(["width:100%;height:100%;box-sizing:border-box;"]), ss = Object(d.d)(ls).withConfig({ displayName: "chat-desktop-standard__MainContainer", componentId: "sc-1a5eik6-1" })(["overflow:hidden;padding-top:60px;position:relative;background:#fcfcfc;"]), ds = Object(d.d)(ls).withConfig({ displayName: "chat-desktop-standard__Container", componentId: "sc-1a5eik6-2" })(["position:relative;background:#fcfcfc;padding-right:200px;"]), us = d.d.div.withConfig({ displayName: "chat-desktop-standard__EvaPanel", componentId: "sc-1a5eik6-3" })(["position:absolute;z-index:100;left:0;right:0;bottom:0;top:0;"]), ps = d.d.div.withConfig({ displayName: "chat-desktop-standard__TitleWrap", componentId: "sc-1a5eik6-4" })(["position:absolute;top:0;width:100%;"]), ms = Object(d.d)(ls).withConfig({ displayName: "chat-desktop-standard__MainPanel", componentId: "sc-1a5eik6-5" })(["padding-bottom:100px;position:relative;"]), hs = d.d.div.withConfig({ displayName: "chat-desktop-standard__SidePanelWrap", componentId: "sc-1a5eik6-6" })(["width:200px;position:absolute;right:0;top:0;bottom:0;border-left:1px solid #e8e8e8;"]), fs = Object(d.d)(ls).withConfig({ displayName: "chat-desktop-standard__MsgWindowWrap", componentId: "sc-1a5eik6-7" })([""]), gs = d.d.div.withConfig({ displayName: "chat-desktop-standard__InputWrap", componentId: "sc-1a5eik6-8" })(["width:100%;height:100px;background:#fcfcfc;position:absolute;bottom:0;"]);
    function bs(e) { var t = e.titleBar, n = e.evaluation, a = n.enable, o = n.promptText, i = n.setEvaluation, r = e.msgWindow, c = e.agentInfo, l = e.actionTooltip, s = cs(e.styles.panel, ["TitleBar", "ActionBox", "Evaluation"]), d = Object(ue.useCallback)(function () { i(!1); }, [i]), u = Object(ue.useCallback)(function () { i(!0); }, [i]); return Object(ue.useEffect)(function () { Ue.updatePosition(); }, []), pe.a.createElement(ss, null, pe.a.createElement(ps, null, pe.a.createElement(Hc, Pa()({}, s.TitleBar, c, t, { avatar: "" }))), pe.a.createElement(ds, null, a ? pe.a.createElement(us, null, pe.a.createElement(os, Pa()({}, s.Evaluation, { position: "center", width: "fixed", promptText: o, closeEvaluation: d }))) : null, pe.a.createElement(ms, null, pe.a.createElement(fs, null, pe.a.createElement(fc, Pa()({ styles: e.styles }, r))), pe.a.createElement(gs, null, pe.a.createElement(Wl, Pa()({}, s.ActionBox, l, { showEvaluation: u })))), pe.a.createElement(hs, null, pe.a.createElement(il, Pa()({ userInfo: c }, e.support))))); }
    var vs = d.d.div.withConfig({ displayName: "chat-desktop-mini__Base", componentId: "sc-1mdwt15-0" })(["width:100%;height:100%;box-sizing:border-box;"]), _s = Object(d.d)(vs).withConfig({ displayName: "chat-desktop-mini__MainContainer", componentId: "sc-1mdwt15-1" })(["position:relative;background:#fcfcfc;box-sizing:border-box;overflow:hidden;padding-top:60px;"]), ws = Object(d.d)(vs).withConfig({ displayName: "chat-desktop-mini__Container", componentId: "sc-1mdwt15-2" })(["position:relative;background:#fcfcfc;padding-bottom:", "px;"], function (e) { return e.showSupport ? 130 : 100; }), ys = d.d.div.withConfig({ displayName: "chat-desktop-mini__EvaPanel", componentId: "sc-1mdwt15-3" })(["position:absolute;z-index:100;left:0;right:0;bottom:0;top:0;"]), xs = d.d.div.withConfig({ displayName: "chat-desktop-mini__TitleWrap", componentId: "sc-1mdwt15-4" })(["position:absolute;top:0;width:100%;"]), ks = Object(d.d)(vs).withConfig({ displayName: "chat-desktop-mini__MsgWindowWrap", componentId: "sc-1mdwt15-5" })([""]), Es = d.d.div.withConfig({ displayName: "chat-desktop-mini__InputWrap", componentId: "sc-1mdwt15-6" })(["width:100%;height:100px;background:#fcfcfc;"]), Is = d.d.div.withConfig({ displayName: "chat-desktop-mini__Support", componentId: "sc-1mdwt15-7" })(["width:100%;height:30px;"]);
    function Cs(e) { var t = e.standalone, n = e.titleBar, a = e.evaluation, o = a.enable, i = a.promptText, r = a.setEvaluation, c = e.msgWindow, l = e.agentInfo, s = e.actionTooltip, d = cs(e.styles.panel, ["TitleBar", "ActionBox", "Evaluation"]), u = Object(ue.useCallback)(function () { r(!1); }, [r]), p = Object(ue.useCallback)(function () { r(!0); }, [r]); return pe.a.createElement(_s, null, pe.a.createElement(xs, null, pe.a.createElement(Hc, Pa()({}, d.TitleBar, l, n))), pe.a.createElement(ws, { showSupport: e.support.showSupport, standalone: t }, o ? pe.a.createElement(ys, null, pe.a.createElement(os, Pa()({}, d.Evaluation, { position: "top", width: "auto", promptText: i, closeEvaluation: u }))) : null, pe.a.createElement(ks, null, pe.a.createElement(fc, Pa()({ styles: e.styles }, c))), pe.a.createElement(Es, null, pe.a.createElement(Wl, Pa()({}, d.ActionBox, s, { showEvaluation: p }))), e.support.showSupport ? pe.a.createElement(Is, null, pe.a.createElement(el, { link: e.support.supportLink })) : null)); }
    var Ts = d.d.div.withConfig({ displayName: "chat-desktop-edge__Base", componentId: "sc-1otnyex-0" })(["width:100%;height:100%;box-sizing:border-box;"]), Ss = Object(d.d)(Ts).withConfig({ displayName: "chat-desktop-edge__MainContainer", componentId: "sc-1otnyex-1" })(["box-sizing:border-box;overflow:hidden;padding-top:60px;position:relative;background:#fcfcfc;"]), js = Object(d.d)(Ts).withConfig({ displayName: "chat-desktop-edge__Container", componentId: "sc-1otnyex-2" })(["position:relative;background:#fcfcfc;padding-bottom:", "px;"], function (e) { return e.showSupport ? 130 : 100; }), Ns = d.d.div.withConfig({ displayName: "chat-desktop-edge__EvaPanel", componentId: "sc-1otnyex-3" })(["position:absolute;z-index:100;left:0;right:0;bottom:0;top:0;"]), Os = d.d.div.withConfig({ displayName: "chat-desktop-edge__TitleWrap", componentId: "sc-1otnyex-4" })(["position:absolute;top:0;width:100%;"]), Ms = Object(d.d)(Ts).withConfig({ displayName: "chat-desktop-edge__MsgWindowWrap", componentId: "sc-1otnyex-5" })([""]), zs = d.d.div.withConfig({ displayName: "chat-desktop-edge__BottomWrap", componentId: "sc-1otnyex-6" })(["width:100%;position:absolute;left:0;right:0;bottom:0;"]), Ds = d.d.div.withConfig({ displayName: "chat-desktop-edge__InputWrap", componentId: "sc-1otnyex-7" })(["width:100%;height:100px;background:#fcfcfc;"]), Bs = d.d.div.withConfig({ displayName: "chat-desktop-edge__Support", componentId: "sc-1otnyex-8" })(["width:100%;height:30px;"]);
    function As(e) { var t = e.titleBar, n = e.evaluation, a = n.enable, o = n.promptText, i = n.setEvaluation, r = e.msgWindow, c = e.agentInfo, l = e.actionTooltip, s = cs(e.styles.panel, ["TitleBar", "ActionBox", "Evaluation"]), d = Object(ue.useCallback)(function () { i(!1); }, [i]), u = Object(ue.useCallback)(function () { i(!0); }, [i]); return pe.a.createElement(Ss, null, pe.a.createElement(Os, null, pe.a.createElement(Hc, Pa()({}, s.TitleBar, c, t))), pe.a.createElement(js, { showSupport: e.support.showSupport }, a ? pe.a.createElement(Ns, null, pe.a.createElement(os, Pa()({}, s.Evaluation, { position: "center", width: "auto", promptText: o, closeEvaluation: d }))) : null, pe.a.createElement(Ms, null, pe.a.createElement(fc, Pa()({ styles: e.styles }, r))), pe.a.createElement(zs, null, pe.a.createElement(Ds, null, pe.a.createElement(Wl, Pa()({}, s.ActionBox, l, { showEvaluation: u }))), e.support.showSupport ? pe.a.createElement(Bs, null, pe.a.createElement(el, { link: e.support.supportLink })) : null))); }
    var Ps = d.d.div.withConfig({ displayName: "chat-desktop-custom__Base", componentId: "sc-1ayd97u-0" })(["width:100%;height:100%;box-sizing:border-box;"]), qs = Object(d.d)(Ps).withConfig({ displayName: "chat-desktop-custom__MainContainer", componentId: "sc-1ayd97u-1" })(["overflow:hidden;padding-top:60px;position:relative;background:#fcfcfc;"]), Rs = Object(d.d)(Ps).withConfig({ displayName: "chat-desktop-custom__Container", componentId: "sc-1ayd97u-2" })(["position:relative;background:#fcfcfc;padding-right:200px;"]), Ls = d.d.div.withConfig({ displayName: "chat-desktop-custom__EvaPanel", componentId: "sc-1ayd97u-3" })(["position:absolute;z-index:100;left:0;right:0;bottom:0;top:0;"]), Fs = d.d.div.withConfig({ displayName: "chat-desktop-custom__TitleWrap", componentId: "sc-1ayd97u-4" })(["position:absolute;top:0;width:100%;"]), Us = Object(d.d)(Ps).withConfig({ displayName: "chat-desktop-custom__MainPanel", componentId: "sc-1ayd97u-5" })(["padding-bottom:100px;position:relative;"]), Ws = d.d.div.withConfig({ displayName: "chat-desktop-custom__SidePanelWrap", componentId: "sc-1ayd97u-6" })(["width:200px;position:absolute;right:0;top:0;bottom:0;border-left:1px solid #e8e8e8;"]), Vs = Object(d.d)(Ps).withConfig({ displayName: "chat-desktop-custom__MsgWindowWrap", componentId: "sc-1ayd97u-7" })([""]), Gs = d.d.div.withConfig({ displayName: "chat-desktop-custom__InputWrap", componentId: "sc-1ayd97u-8" })(["width:100%;height:100px;background:#fcfcfc;position:absolute;bottom:0;"]);
    function Hs(e) { var t = e.titleBar, n = e.evaluation, a = n.enable, o = n.promptText, i = n.setEvaluation, r = e.msgWindow, c = e.agentInfo, l = e.actionTooltip, s = cs(e.styles.panel, ["TitleBar", "ActionBox", "Evaluation"]), d = e.panel, u = d.customer_content, p = d.customer_photo_type, m = Object(ue.useCallback)(function () { i(!1); }, [i]), h = Object(ue.useCallback)(function () { i(!0); }, [i]); return Object(ue.useEffect)(function () { Ue.updatePosition(); }, []), pe.a.createElement(qs, null, pe.a.createElement(Fs, null, pe.a.createElement(Hc, Pa()({}, s.TitleBar, c, t, { avatar: "small" === p ? c.avatar : "" }))), pe.a.createElement(Rs, null, a ? pe.a.createElement(Ls, null, pe.a.createElement(os, Pa()({}, s.Evaluation, { position: "center", width: "fixed", promptText: o, closeEvaluation: m }))) : null, pe.a.createElement(Us, null, pe.a.createElement(Vs, null, pe.a.createElement(fc, Pa()({ styles: e.styles }, r))), pe.a.createElement(Gs, null, pe.a.createElement(Wl, Pa()({}, s.ActionBox, l, { showEvaluation: h })))), pe.a.createElement(Ws, null, pe.a.createElement(il, Pa()({ userInfo: { avatar: c.avatar, name: c.name }, showAvatar: "big" === p, custom: u, bgColor: e.styles.panel.profileBgColor }, e.support))))); }
    var Qs = d.d.div.withConfig({ displayName: "action-box-mobile__Container", componentId: "erl9tf-0" })(["height:100%;width:100%;border-top:1px solid #ededed;position:relative;box-sizing:border-box;"]), Ys = d.d.div.withConfig({ displayName: "action-box-mobile__FinishTip", componentId: "erl9tf-1" })(["width:100%;height:100%;position:absolute;z-index:2;left:0;right:0;top:0;bottom:0;text-align:center;background:#fff;display:table;span{display:table-cell;vertical-align:middle;word-break:break-word;padding:0 20px;}"]), $s = d.d.div.withConfig({ displayName: "action-box-mobile__TooltipWrap", componentId: "erl9tf-2" })(["width:100%;height:100%;padding-right:40px;box-sizing:border-box;position:relative;"]), Js = d.d.div.withConfig({ displayName: "action-box-mobile__ButtonWrap", componentId: "erl9tf-3" })(["display:inline-block;height:40px;width:40px;line-height:40px;text-align:center;position:absolute;right:0;top:0;bottom:0;"]), Ks = d.d.div.withConfig({ displayName: "action-box-mobile__TextareaWrap", componentId: "erl9tf-4" })(["width:100%;height:100%;"]), Zs = d.d.div.withConfig({ displayName: "action-box-mobile__EmojiPanelWrap", componentId: "erl9tf-5" })(["position:absolute;top:-", "px;background:#fff;border-top:1px solid #ddd;z-index:2;left:1px;right:1px;box-sizing:border-box;visibility:", ";"], function (e) { return e.emojiHeight + 2; }, function (e) { return e.visible ? "visible" : "hidden"; }), Xs = d.d.a.withConfig({ displayName: "action-box-mobile__Link", componentId: "erl9tf-6" })(["color:#4ca0ff;padding:0 5px;cursor:pointer;"]), ed = Object(o.b)(function (e) { return { socket: e.getIn(["config", "socket"]) }; }, function (e) { return { dispatch: e }; })(function (e) { function n(e) { C(e), e ? Cl("set", e) : Cl("remove"); } function t(e) { var t = e ? e.trim() : I.trim(); t && !p && (a || Ea("服务连接中，请稍候…", 3e3), El(t), n(""), pn.remove(), N({ start: 0, end: 0 })); } var a = e.socket, o = e.themeColor, i = e.finish, r = e.showEvaluation, c = e.showEva, l = e.sendImage, s = e.fileEnabled, d = e.uploadFile, u = e.checkSocket, p = e.blacklist, m = e.newConversation, h = e.toMessageBoard, f = Object(ue.useState)(0), g = Qn()(f, 2), b = g[0], v = g[1], _ = Object(ue.useState)(!1), w = Qn()(_, 2), y = w[0], x = w[1], k = Object(ue.useState)(""), E = Qn()(k, 2), I = E[0], C = E[1], T = Object(ue.useState)({ start: 0, end: 0 }), S = Qn()(T, 2), j = S[0], N = S[1], O = Object(ue.useRef)(null), M = Object(ue.useRef)(null), z = Object(me.c)(), D = Qn()(z, 1)[0], B = Object(ue.useCallback)(function () { return x(!y); }, [x, y]); return Object(ue.useEffect)(function () { v(O.current.offsetHeight); }, []), pe.a.createElement(Qs, null, pe.a.createElement(ml, { height: 50, clickImage: u, clickFile: u, sendImage: l, uploadFile: d, showEva: c, showFile: s, toggleEmojiPanel: B, showEvaluation: r }, pe.a.createElement($s, null, pe.a.createElement(Ks, null, pe.a.createElement(ql, { lineHeight: "20px", sendMsg: t, setPos: N, setContent: n, content: I, inputRef: M })), pe.a.createElement(Js, null, pe.a.createElement(Rc, { fontColor: o, fontSize: "14px", handleClick: function () { return t(); } }, pe.a.createElement("span", null, D("发送")))))), pe.a.createElement(Zs, { emojiHeight: b, visible: y }, pe.a.createElement(kl, { ref: O, handleClick: function (e) { var t = e.length + 2; x(!1), n("".concat(I.slice(0, j.start), ":").concat(e, ":").concat(I.slice(j.end))), N({ start: j.start + t, end: j.start + t }), M.current.focus(), setTimeout(function () { var e = M.current.value; M.current.selectionStart = j.start + t, M.current.selectionEnd = j.start + t, 2048 < e.length && (n(e.substr(0, 2048)), Cl("set", I), Ea("最多只能发送 2048 个字符哦", 3e3)); }, 0); } })), i ? pe.a.createElement(Ys, null, pe.a.createElement("span", null, pe.a.createElement(me.a, null, "对话已结束，您可以", pe.a.createElement(Xs, { onClick: m }, "开始新的对话"), "或", pe.a.createElement(Xs, { onClick: h }, "留言")))) : null, p ? pe.a.createElement(Ys, null, pe.a.createElement("span", null, D("抱歉，客服系统暂时无法使用"))) : null); }), td = d.d.div.withConfig({ displayName: "chat-mobile-half__Container", componentId: "sc-1uz9xds-0" })(["height:100%;width:100%;position:relative;background:#fcfcfc;"]), nd = d.d.div.withConfig({ displayName: "chat-mobile-half__EvaPanel", componentId: "sc-1uz9xds-1" })(["position:absolute;z-index:100;left:0;right:0;bottom:0;top:0;"]), ad = Object(d.d)(td).withConfig({ displayName: "chat-mobile-half__MainContainer", componentId: "sc-1uz9xds-2" })(["box-sizing:border-box;overflow:hidden;padding-top:60px;"]), od = d.d.div.withConfig({ displayName: "chat-mobile-half__TitleWrap", componentId: "sc-1uz9xds-3" })(["position:absolute;top:0;width:100%;"]), id = d.d.div.withConfig({ displayName: "chat-mobile-half__MsgWindowWrap", componentId: "sc-1uz9xds-4" })(["width:100%;height:100%;box-sizing:border-box;padding-bottom:", "px;"], function (e) { var t = e.inputting ? 30 : 0; return (e.styles.brand ? 80 : 50) + t; }), rd = d.d.div.withConfig({ displayName: "chat-mobile-half__BottomWrap", componentId: "sc-1uz9xds-5" })(["width:100%;position:absolute;left:0;right:0;bottom:", ";"], function (e) { return e.inputting ? "30px" : 0; }), cd = d.d.div.withConfig({ displayName: "chat-mobile-half__InputWrap", componentId: "sc-1uz9xds-6" })(["width:100%;height:50px;background:#fcfcfc;"]), ld = d.d.div.withConfig({ displayName: "chat-mobile-half__Support", componentId: "sc-1uz9xds-7" })(["width:100%;height:30px;"]);
    function sd(e) { var t = e.inputting, n = e.titleBar, a = e.evaluation, o = a.enable, i = a.promptText, r = a.setEvaluation, c = e.msgWindow, l = e.agentInfo, s = e.actionTooltip, d = cs(e.styles.panel, ["TitleBar", "ActionBox", "Evaluation"]), u = Object(ue.useCallback)(function () { r(!1); }, [r]), p = Object(ue.useCallback)(function () { r(!0); }, [r]), m = l.cellphone || l.tel; return pe.a.createElement(ad, null, pe.a.createElement(od, null, pe.a.createElement(Hc, Pa()({}, d.TitleBar, n, { name: l.name, tel: m, signature: l.signature }))), pe.a.createElement(td, null, o ? pe.a.createElement(nd, null, pe.a.createElement(os, Pa()({}, d.Evaluation, { position: "top", width: "auto", promptText: i, closeEvaluation: u }))) : null, pe.a.createElement(id, { styles: e.styles, inputting: t }, pe.a.createElement(fc, Pa()({ styles: e.styles }, c))), pe.a.createElement(rd, { inputting: t }, pe.a.createElement(cd, null, pe.a.createElement(ed, Pa()({}, s, d.ActionBox, { showEvaluation: p }))), e.styles.brand ? pe.a.createElement(ld, null, pe.a.createElement(el, { link: e.support.supportLink })) : null))); }
    var dd = d.d.div.withConfig({ displayName: "chat-mobile-full__Container", componentId: "vt8krw-0" })(["height:100%;width:100%;position:relative;background:#fcfcfc;"]), ud = d.d.div.withConfig({ displayName: "chat-mobile-full__EvaPanel", componentId: "vt8krw-1" })(["position:absolute;z-index:100;left:0;right:0;bottom:0;top:0;"]), pd = Object(d.d)(dd).withConfig({ displayName: "chat-mobile-full__MainContainer", componentId: "vt8krw-2" })(["box-sizing:border-box;overflow:hidden;padding-top:60px;"]), md = d.d.div.withConfig({ displayName: "chat-mobile-full__TitleWrap", componentId: "vt8krw-3" })(["position:absolute;top:0;width:100%;"]), hd = d.d.div.withConfig({ displayName: "chat-mobile-full__MsgWindowWrap", componentId: "vt8krw-4" })(["width:100%;height:100%;box-sizing:border-box;padding-bottom:", "px;"], function (e) { var t = e.inputting ? 30 : 0; return (e.styles.brand ? 80 : 50) + t; }), fd = d.d.div.withConfig({ displayName: "chat-mobile-full__BottomWrap", componentId: "vt8krw-5" })(["width:100%;position:absolute;left:0;right:0;bottom:", ";"], function (e) { return e.inputting ? "30px" : 0; }), gd = d.d.div.withConfig({ displayName: "chat-mobile-full__InputWrap", componentId: "vt8krw-6" })(["width:100%;height:50px;background:#fcfcfc;"]), bd = d.d.div.withConfig({ displayName: "chat-mobile-full__Support", componentId: "vt8krw-7" })(["width:100%;height:30px;"]);
    function vd(e) { var t = e.inputting, n = e.titleBar, a = e.evaluation, o = a.enable, i = a.promptText, r = a.setEvaluation, c = e.msgWindow, l = e.agentInfo, s = e.actionTooltip, d = cs(e.styles.panel, ["TitleBar", "ActionBox", "Evaluation"]), u = Object(ue.useCallback)(function () { r(!1); }, [r]), p = Object(ue.useCallback)(function () { r(!0); }, [r]), m = l.cellphone || l.tel; return pe.a.createElement(pd, null, pe.a.createElement(md, null, pe.a.createElement(Hc, Pa()({}, d.TitleBar, n, { name: l.name, tel: m, signature: l.signature }))), pe.a.createElement(dd, null, o ? pe.a.createElement(ud, null, pe.a.createElement(os, Pa()({}, d.Evaluation, { position: "top", width: "auto", promptText: i, closeEvaluation: u }))) : null, pe.a.createElement(hd, { styles: e.styles, inputting: t }, pe.a.createElement(fc, Pa()({ styles: e.styles }, c))), pe.a.createElement(fd, { inputting: t }, pe.a.createElement(gd, null, pe.a.createElement(ed, Pa()({}, s, d.ActionBox, { showEvaluation: p }))), e.styles.brand ? pe.a.createElement(bd, null, pe.a.createElement(el, { link: e.support.supportLink })) : null))); }
    var _d = function (t, n, e) { return function (e, t, n, a, o) { var i = 3 < arguments.length && void 0 !== a ? a : "client_card", r = 4 < arguments.length ? o : void 0; return fe({ url: "/client/".concat(t, "/reply_card"), method: "post", data: { visit_id: e, conv_id: n, card_type: i, attrs: r } }); }(e.visitId, e.trackId, e.convId, e.cardType, e.data).then(function (e) { e.data.success && n(tt(t)); }); };
    var wd = Object(d.e)(Object(o.b)(function (e) { return { convId: e.getIn(["message", "convId"]), queue: e.getIn(["message", "queue"]), scheduling: e.getIn(["message", "scheduling"]), noMsgFilter: e.getIn(["message", "noMsgFilter"]), enterpriseInfo: e.getIn(["message", "enterpriseInfo"]), agentInfo: e.getIn(["message", "agentInfo"]), agentInputing: e.getIn(["message", "agentInputing"]), inputting: e.getIn(["message", "inputting"]), blacklist: e.getIn(["message", "blacklist"]), chatHasEnd: e.getIn(["message", "chatHasEnd"]), evaluationActive: e.getIn(["message", "evaluationActive"]), ringEnabled: e.getIn(["message", "ringEnabled"]), fileEnabled: e.getIn(["message", "fileEnabled"]), chatEndStatus: "open" === e.getIn(["message", "enterpriseInfo", "prompt_status"]), entId: e.getIn(["config", "entId"]), visitId: e.getIn(["config", "visitId"]), trackId: e.getIn(["config", "trackId"]), socket: e.getIn(["config", "socket"]), standalone: e.getIn(["config", "standalone"]), disableBrandLink: e.getIn(["config", "disableBrandLink"]), showSwitch: e.getIn(["robot", "show_switch"]), custom: e.get("theme"), evaConfig: e.get("evaluation") }; }, function (e) { return { dispatch: e }; })(function (a) {
      var o = a.convId, e = a.queue, t = a.scheduling, n = a.noMsgFilter, i = a.enterpriseInfo, r = a.agentInfo, c = a.agentInputing, l = a.inputting, s = a.blacklist, d = a.chatHasEnd, u = a.evaluationActive, p = a.ringEnabled, m = a.fileEnabled, h = a.chatEndStatus, f = a.entId, g = a.visitId, b = a.trackId, v = a.socket, _ = a.standalone, w = a.disableBrandLink, y = a.showSwitch, x = a.theme, k = a.custom, E = _ ? a.custom.getIn(["standalone", "desktop"]) : a.custom.getIn(["desktop", "panel"]), I = Object(ue.useMemo)(function () { return Object(L.mergeDeep)({}, x, Nc(k, _)); }, [x, k, _]), C = Object(ue.useMemo)(function () { return e; }, [e]), T = Object(ue.useState)({}), S = Qn()(T, 2), j = S[0], N = S[1], O = Object(me.c)(), M = Qn()(O, 1)[0], z = Object(ue.useCallback)(function (e, t, n) { return _d(e, a.dispatch, { convId: o, visitId: g, trackId: b, cardType: t, data: n }); }, [o, a.dispatch, b, g]), D = Object(ue.useCallback)(function (e) { El(e); }, []), B = Object(ue.useCallback)(function (e) { !function (e) { fe({ url: "/client/file_downloaded", method: "POST", headers: { "content-type": "application/json" }, data: e }); }({ ent_id: f, track_id: b, conversation_id: o, msg_id: e }); }, [o, f, b]), A = c ? "".concat(M("对方输入消息中...")) : "", P = _ ? "close" === k.getIn(["standalone", "removeBrand"]) : "close" === k.get("removeBrand"), q = {
        standalone: _, styles: I, inputting: l, support: { showSupport: "overseas" !== i.location && P, supportLink: w ? "javascript:void(0);" : "".concat("http://static.meiqia.com/dist/standalone.html?eid=89239&utm_source=widget-badge&utm_term=").concat(f) }, evaluation: { enable: !1, setEvaluation: function (e) { a.dispatch(Ze({ evaluationActive: e })); }, promptText: a.evaConfig.get("prompt_text") }, agentInfo: n ? { name: i.public_nickname, avatar: i.avatar || Wn.a, signature: i.public_signature, tel: i.public_telephone, cellphone: i.public_cellphone, email: i.public_email, qq: i.public_qq, weixin: i.public_weixin } : {}, actionTooltip: {
          fileEnabled: m, checkSocket: function (e) { v || (e.preventDefault(), Ea(M("服务连接中，请稍候…"), 5e3)); }, sendImage: function (e) {
            e.target.value && function (e) {
              var t = e.target.value.split("."); if (t = t[t.length - 1].toLowerCase(), ["png", "jpg", "jpeg", "gif"].includes(t)) {
                var n = { id: Math.random(), from_type: "client", content_type: "photo", status: "sending", media_url: nc.a, file: e.target.files[0] };
                e.target.value = "", Hr(n);
              }
              else
                Ea("".concat(R.a.t("只能发送图片哦"), "（png/jpg/jpeg/gif）"), 5e3);
            }(e);
          }, uploadFile: function (e) { e.target.value && Vr(e); }, newConversation: function () { a.dispatch(dt("newConv")), Fn(); }, toMessageBoard: function () { a.dispatch(Ft({ showTicket: !0 })); }
        }, msgWindow: {
          msgs: [], handleRedirect: ma, handleImgOnload: xn, handleRedirectTicket: function () { a.dispatch(Ft({ showTicket: !0 })); }, scrollToBottom: wn, handleImagePreview: Dc, handleMenuClick: D, handleCardSubmit: z, handleFileDownload: B, cardSize: function (e) {
            switch (e) {
              case "desktop.standard": return 240;
              case "desktop.mini":
              case "desktop.edge": return 150;
              case "desktop.custom": return 240;
              default: return 200;
            }
          }(a.type)
        }, titleBar: { connecting: t, showBack: te.isMobile() && !!_, showSwitch: y, ringEnabled: p, closeEnabled: !_, closeText: te.isMobile() ? M("关闭") : null, handleClose: function () { ht(!1); }, handleRing: function (e) { a.dispatch(ct(!!e)), We("set", "MEIQIA_RING", e ? "TRUE" : "FALSE"); }, handleRedirect: ma }
      }; return Object(ue.useEffect)(function () { var e = { evaluation: { enable: u }, msgWindow: { msgs: C }, actionTooltip: { blacklist: s, finish: d && h, showEva: !r.isBot }, titleBar: { showSwitch: y && (!r || r.isBot) } }; r.name && (e.agentInfo = { name: "".concat(A || r.name), avatar: r.avatar, signature: r.signature, artificial: r.isBot, tel: r.tel, cellphone: r.cellphone, email: r.email, qq: r.qq, weixin: r.weixin }), N(e); }, [u, C, r, A, s, d, h, y]), function (e) {
        var t = Object(L.mergeDeep)({}, q, j); switch (e) {
          case "desktop.standard": return pe.a.createElement(bs, t);
          case "desktop.mini": return pe.a.createElement(Cs, t);
          case "desktop.edge": return pe.a.createElement(As, t);
          case "desktop.custom": return pe.a.createElement(Hs, Pa()({ panel: E }, t));
          case "mobile.full": return pe.a.createElement(vd, t);
          case "mobile.half": return pe.a.createElement(sd, t);
          default: return pe.a.createElement(bs, t);
        }
      }(a.type);
    })), yd = d.d.div.withConfig({ displayName: "captcha__Container", componentId: "sc-1vo1t5l-0" })(["width:", ";height:", ";"], function (e) { return e.width; }, function (e) { return e.height; }), xd = d.d.img.withConfig({ displayName: "captcha__Img", componentId: "sc-1vo1t5l-1" })(["display:inline-block;width:100%;height:100%;"]);
    function kd(e) { var t = e.imgUrl, n = e.className, a = e.handleClick, o = to()(e, ["imgUrl", "className", "handleClick"]); return pe.a.createElement(yd, Pa()({}, o, { className: n, onClick: a }), pe.a.createElement(xd, { src: t })); }
    function Ed() { return fe({ url: "/captchas?v=".concat(ce()()), method: "post" }).then(function (e) { return e; }, function () { Ea("获取验证码失败", 3e3); }); }
    function Id(e) { var t = e.handleToken, n = e.refreshToken, a = to()(e, ["handleToken", "refreshToken"]), o = Object(ue.useState)(""), i = Qn()(o, 2), r = i[0], c = i[1], l = Object(ue.useCallback)(function () { Ed().then(function (e) { c(g.defaults + e.data.captcha_image_url), t && t(e.data.captcha_token); }); }, [t]); return Object(ue.useEffect)(function () { Ed().then(function (e) { c(g.defaults + e.data.captcha_image_url), t && t(e.data.captcha_token); }); }, [t, n]), pe.a.createElement(kd, Pa()({ width: "80px", height: "40px" }, a, { imgUrl: r, handleClick: l })); }
    var Cd = n(467), Td = n.n(Cd), Sd = function (e) { return /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(e); }, jd = function (e) { return !(Td()(+e) || e.length < 6); }, Nd = function (e) { return /^\d+$/.test(e); }, Od = function (e) { return /^(0[1-9]\d[1-9]\d{7}|0[1-9]\d{2}[1-9]\d{6,7}|1\d{10})$/.test(e); }, Md = d.d.div.withConfig({ displayName: "callback__Container", componentId: "sc-10w0clj-0" })(["width:100%;height:100%;box-sizing:border-box;position:relative;background:#fff;overflow-y:auto;padding:0 20px;"]), zd = Object(d.d)(Md).withConfig({ displayName: "callback__MainContainer", componentId: "sc-10w0clj-1" })(["overflow:hidden;padding:0;padding-top:60px;"]), Dd = d.d.div.withConfig({ displayName: "callback__TitleWrap", componentId: "sc-10w0clj-2" })(["position:absolute;top:0;left:0;right:0;width:100%;"]), Bd = d.d.p.withConfig({ displayName: "callback__P", componentId: "sc-10w0clj-3" })(["margin:30px 0 10px;font-size:13px;color:#555;text-align:center;"]), Ad = d.d.div.withConfig({ displayName: "callback__InputWrap", componentId: "sc-10w0clj-4" })(["margin:24px 0;border-bottom:1px solid #555;input{width:100%;height:auto;padding:12px;border:0;color:#000;background-color:#fff;font-size:14px;letter-spacing:16px;}input::placeholder{letter-spacing:normal;}"]), Pd = Object(d.d)(Ad).withConfig({ displayName: "callback__CaptchaWrap", componentId: "sc-10w0clj-5" })(["box-sizing:border-box;padding-right:70px;position:relative;"]), qd = d.d.div.withConfig({ displayName: "callback__CaptchaBox", componentId: "sc-10w0clj-6" })(["width:70px;height:100%;position:absolute;right:0;top:0;bottom:0;"]), Rd = d.d.div.withConfig({ displayName: "callback__Btn", componentId: "sc-10w0clj-7" })(["margin-top:20px;text-align:center;a{width:60px;height:60px;display:inline-block;border-radius:30px;position:relative;background:#c8c8c8;cursor:pointer;&.active{background:", ";}}.text{margin-top:16px;font-size:13px;color:#007aff;}"], function (e) { return e.themeColor; }), Ld = Object(d.d)(Rd).withConfig({ displayName: "callback__SuccessBtn", componentId: "sc-10w0clj-8" })(["margin-top:100px;a{background:", ";margin-bottom:20px;cursor:default;}label{cursor:default;}p{margin:0 0 8px;text-align:center;font-size:12px;color:#999;}"], function (e) { return e.themeColor; }), Fd = Object(d.d)(fo).withConfig({ displayName: "callback__Icon", componentId: "sc-10w0clj-9" })(["position:absolute;top:50%;left:50%;cursor:pointer;margin:-10px 0 0 -10px;"]);
    var Ud = Object(d.e)(Object(o.b)(function (e) { return { customTheme: e.get("theme"), config: e.get("config"), ticket: e.get("ticket") }; }, function (e) { return { dispatch: e }; })(function (e) { var t = Nc(e.customTheme, e.config.get("standalone")), n = t && t.panel || e.customTheme, a = Object(ue.useState)(""), o = Qn()(a, 2), i = o[0], r = o[1], c = Object(ue.useState)("open" === e.ticket.get("captcha")), l = Qn()(c, 2), s = l[0], d = (l[1], Object(ue.useState)("")), u = Qn()(d, 2), p = u[0], m = u[1], h = Object(ue.useState)(""), f = Qn()(h, 2), g = (f[0], f[1]), b = Object(ue.useState)(!1), v = Qn()(b, 2), _ = v[0], w = v[1], y = Object(ue.useState)(!1), x = Qn()(y, 2), k = x[0], E = (x[1], Object(me.c)()), I = Qn()(E, 1)[0], C = { name: I("免费通话"), fontColor: n.fontColor, themeColor: n.themeColor, closeEnabled: !e.config.get("standalone"), handleClose: function () { ht(!1); } }; return Object(ue.useEffect)(function () { var e = !0; (!Od(i) || s && p) && (e = !1), w(!!e); }, [i, s, p]), pe.a.createElement(zd, null, pe.a.createElement(Dd, null, pe.a.createElement(Hc, C)), k ? pe.a.createElement(Md, null, pe.a.createElement(Ld, { themeColor: n.themeColor }, pe.a.createElement("a", { href: "javascript:void(0);" }, pe.a.createElement(Fd, { type: "call", width: "20px", height: "20px" })), pe.a.createElement("p", null, I("请保持电话畅通，客服人员即将致电")), pe.a.createElement("p", null, I("你将接到「010-52729285」的来电")))) : pe.a.createElement(Md, null, pe.a.createElement(Bd, null, I("欢迎使用完全免费的网页回呼与我们通话")), pe.a.createElement(Ad, null, pe.a.createElement("input", { type: "tel", value: i, placeholder: I("请输入你的电话号码"), onChange: function (e) { return r(e.target.value); } })), s ? pe.a.createElement(Pd, null, pe.a.createElement("input", { type: "text", value: p, placeholder: I("验证码"), onChange: function (e) { return m(e.target.value); } }), pe.a.createElement(qd, null, pe.a.createElement(Id, { width: "80px", height: "40px", refreshToken: s, handleToken: g }))) : null, pe.a.createElement(Rd, { themeColor: n.themeColor }, pe.a.createElement("a", { href: "javascript:void(0);", className: _ ? "active" : "", onClick: function () { } }, pe.a.createElement(Fd, { type: "call", width: "20px", height: "20px" })), pe.a.createElement("div", { className: "text" }, I("开始免费通话"))))); })), Wd = d.d.div.withConfig({ displayName: "category__Container", componentId: "qhan5i-0" })(["width:100%;height:100%;overflow-y:auto;"]), Vd = d.d.div.withConfig({ displayName: "category__Title", componentId: "qhan5i-1" })(["padding:16px;font-size:12px;color:#666;word-break:break-all;"]), Gd = d.d.ul.withConfig({ displayName: "category__List", componentId: "qhan5i-2" })(["list-style:none;background:#fff;li{padding:14px;margin:0;box-shadow:0 -1px 0 0 rgba(0,0,0,0.04);}"]);
    function Hd(e) { var t = e.title, n = e.assignments, a = e.handleCategory; return pe.a.createElement(Wd, null, pe.a.createElement(Vd, null, t), pe.a.createElement(Gd, null, n.map(function (e, t) { return pe.a.createElement("li", { key: e.target + t }, pe.a.createElement(Rc, { fontColor: "#6088e6", data: e, handleClick: a }, pe.a.createElement("span", null, e.description))); }))); }
    function Qd(t, e) {
      var n = C()(t); if (E.a) {
        var a = E()(t);
        e && (a = a.filter(function (e) { return x()(t, e).enumerable; })), n.push.apply(n, a);
      } return n;
    }
    function Yd(t) {
      for (var e = 1; e < arguments.length; e++) {
        var n = null != arguments[e] ? arguments[e] : {};
        e % 2 ? Qd(n, !0).forEach(function (e) { j()(t, e, n[e]); }) : w.a ? v()(t, w()(n)) : Qd(n).forEach(function (e) { f()(t, e, x()(n, e)); });
      } return t;
    }
    var $d = d.d.div.withConfig({ displayName: "user-form__Container", componentId: "sc-163y00h-0" })(["width:100%;height:100%;overflow-y:auto;"]), Jd = d.d.div.withConfig({ displayName: "user-form__Title", componentId: "sc-163y00h-1" })(["padding:16px;font-size:12px;color:#666;word-break:break-all;"]), Kd = d.d.ul.withConfig({ displayName: "user-form__List", componentId: "sc-163y00h-2" })(["list-style:none;li{margin-bottom:16px;}.name{padding:0 0 6px 16px;color:#444;font-size:12px;span{padding:0 3px;color:#ff5c5e;}}"]), Zd = d.d.input.withConfig({ displayName: "user-form__Input", componentId: "sc-163y00h-3" })(["width:100%;height:auto;padding:12px;border:none;"]), Xd = d.d.div.withConfig({ displayName: "user-form__CaptchaWrap", componentId: "sc-163y00h-4" })(["width:100%;padding-right:80px;margin-bottom:16px;box-sizing:border-box;position:relative;"]), eu = Object(d.d)(Id).withConfig({ displayName: "user-form__CaptchaImg", componentId: "sc-163y00h-5" })(["position:absolute;right:0;top:0;bottom:0;"]), tu = d.d.div.withConfig({ displayName: "user-form__BtnWrap", componentId: "sc-163y00h-6" })(["padding:0 20px 20px;"]), nu = d.d.label.withConfig({ displayName: "user-form__InputItem", componentId: "sc-163y00h-7" })(["display:block;box-sizing:border-box;width:100%;height:auto;padding:12px;background:#fff;box-shadow:0 -1px 0 0 rgba(0,0,0,0.04);cursor:pointer;input{margin-right:10px;}"]);
    function au(e) {
      function n(e) {
        var t = e.target, n = t.type, a = t.checked, o = t.name, i = t.value, r = Yd({}, p); if ("radio" === n && a)
          r[o] = i;
        else if ("checkbox" === n)
          if (r[o] = r[o] || [], a)
            r[o].push(i);
          else {
            var c = r[o].findIndex(function (e) { return e === i; });
            r[o].splice(c, 1);
          } m(r);
      } var t = e.title, a = e.captcha, o = e.fields, i = e.handleUserForm, r = e.fontColor, c = e.bgColor, l = Object(me.c)(), s = Qn()(l, 1)[0], d = Object(ue.useState)({}), u = Qn()(d, 2), p = u[0], m = u[1], h = Object(ue.useState)(""), f = Qn()(h, 2), g = f[0], b = f[1], v = Object(ue.useState)(""), _ = Qn()(v, 2), w = _[0], y = _[1], x = Object(ue.useCallback)(function () { return i(p, { captchaToken: g, captchaValue: w }); }, [i, p, g, w]); function k(t) {
        switch (t.type) {
          case "text": return pe.a.createElement(Zd, { type: "text", placeholder: s("请输入"), name: t.field_name, onBlur: ge.wxScroll, onChange: function (e) { return function (e, t) { var n = Yd({}, p); n[e] = t, m(n); }(t.field_name, e.target.value); } });
          case "single_choice": return pe.a.createElement("div", null, t.choices.map(function (e) { return pe.a.createElement(nu, { key: e }, pe.a.createElement("input", { type: "radio", name: t.field_name, value: e, onChange: n }), e); }));
          case "multiple_choice": return pe.a.createElement("div", null, t.choices.map(function (e) { return pe.a.createElement(nu, { key: e }, pe.a.createElement("input", { type: "checkbox", name: t.field_name, value: e, onChange: n }), e); }));
          default: return pe.a.createElement("div", null);
        }
      } return pe.a.createElement($d, null, pe.a.createElement(Jd, null, t), pe.a.createElement(Kd, null, o.map(function (e) { return pe.a.createElement("li", { key: e.field_name }, pe.a.createElement("div", { className: "name" }, e.display_name, !e.optional && pe.a.createElement("span", null, "*")), k(e)); }), a ? pe.a.createElement("li", { key: "captcha" }, pe.a.createElement("div", { className: "name" }, s("验证码"), pe.a.createElement("span", null, "*")), pe.a.createElement(Xd, null, pe.a.createElement(Zd, { type: "text", name: "captcha", autoComplete: "false", value: w || "", onBlur: ge.wxScroll, onChange: function (e) { return y(e.target.value); } }), pe.a.createElement(eu, { width: "80px", height: "40px", refreshToken: a, handleToken: b }))) : null), pe.a.createElement(tu, null, pe.a.createElement(Vl, { height: "40px", bgColor: c, fontColor: r, handleClick: x }, pe.a.createElement("span", null, s("提交")))));
    }
    var ou = d.d.div.withConfig({ displayName: "pre-form__Container", componentId: "sc-1abxvm2-0" })(["width:100%;height:100%;box-sizing:border-box;position:relative;background:#f2f3f5;"]), iu = Object(d.d)(ou).withConfig({ displayName: "pre-form__MainContainer", componentId: "sc-1abxvm2-1" })(["overflow:hidden;padding-top:60px;"]), ru = d.d.div.withConfig({ displayName: "pre-form__TitleWrap", componentId: "sc-1abxvm2-2" })(["position:absolute;top:0;width:100%;"]);
    var cu = Object(d.e)(Object(o.b)(function (e) { return { customTheme: e.get("theme"), config: e.get("config"), captchaStatus: e.getIn(["survey", "form", "form_def", "captcha"]), formDef: e.getIn(["survey", "form", "form_def"]), categoryEnabled: e.getIn(["survey", "categoryEnabled"]), userFormEnabled: e.getIn(["survey", "userFormEnabled"]) }; }, function (e) { return { dispatch: e }; })(function (e) {
      var l = e.config, t = e.theme, n = e.customTheme, a = e.captchaStatus, o = e.formDef, i = e.categoryEnabled, r = e.userFormEnabled, c = e.dispatch, s = Object(L.merge)({}, t, Nc(n, l.get("standalone"))), d = Object(me.c)(), u = Qn()(d, 1)[0], p = u("询前表单"), m = { assignments: [] }, h = { fields: [] }; i || r || c(Wt({ showSurvey: !1 })); var f = Object(ue.useState)(a), g = Qn()(f, 2), b = g[0], v = g[1], _ = Object(ue.useState)(i ? "category" : "user"), w = Qn()(_, 2), y = w[0], x = w[1]; o && (m = o.get("menus").toJS(), (h = o.get("inputs").toJS()).fields = h.fields.filter(function (e) { return !e.ignore; })); var k = { name: p, showBack: te.isMobile() && !!l.get("standalone"), fontColor: s.panel.fontColor, themeColor: s.panel.themeColor, closeEnabled: !l.get("standalone"), closeText: te.isMobile() ? u("关闭") : null, handleClose: function () { ht(!1); } }; return Object(ue.useEffect)(function () { Ue.updatePosition(); }, []), pe.a.createElement(iu, null, pe.a.createElement(ru, null, pe.a.createElement(Hc, k)), pe.a.createElement(ou, null, "category" === y ? pe.a.createElement(Hd, Pa()({}, m, { handleCategory: function (e) { var t = {}, n = {}; "agent" === e.target_kind ? t.agentToken = e.target : "group" === e.target_kind && (t.groupToken = e.target, t.agentToken = null), n.surveyMsg = { id: 1 * new Date, content_type: "text", content: e.description }, tn(t), c(Ze(n)), r ? x("user") : c(Wt({ showSurvey: !1 })); } })) : pe.a.createElement(au, Pa()({}, h, {
        captcha: b, fontColor: s.panel.fontColor, bgColor: s.panel.themeColor, handleUserForm: function (e, t) {
          !function (e) {
            for (var t = 0, n = h.fields.length; t < n; t += 1) {
              var a = h.fields[t];
              if (!a.ignore) {
                var o = a.field_name, i = a.display_name, r = e[o], c = "";
                switch (c = "en" === l.get("language") ? o : i, a.type) {
                  case "text":
                    if (r) {
                      if (0 === r.length || 100 < r.length)
                        return Ea("".concat(u("请控制"), "「").concat(c, "」").concat(u("在1到100个字符")), 3e3), !1;
                    }
                    else if (!a.optional)
                      return Ea("".concat(u("请填写必填字段"), "「").concat(c, "」"), 3e3), !1;
                    break;
                  case "single_choice":
                  case "multiple_choice": if (!(a.optional || r && 0 !== r.length))
                    return Ea("".concat(u("请选择"), "「").concat(c, "」"), 3e3), !1;
                }
              }
            } return !0;
          }(e) || (!a || t.captchaValue ? function (e, t) { return fe({ url: "/client/forms", method: "post", headers: Oe()({ "content-type": "application/json" }, t), data: e }); }({ ent_id: l.get("entId"), track_id: l.get("trackId"), data: e }, { "Captcha-Value": t.captchaValue, "Captcha-Token": t.captchaToken }).then(function (e) { K.a.set("MEIQIA_HAS_SUBMITTED_FORM", "TRUE", { expires: 1 / 0 }), c(Wt({ showSurvey: !1 })); }, function (t) {
            var e = {}; try {
              e = t.response.data || {};
            }
            catch (e) {
              console.log(t);
            } Ea(e.message || u("提交失败，请稍候再试"), 3e3), e.captcha_needed && v(Math.random());
          }) : Ea(u("请输入验证码"), 3e3));
        }
      }))));
    })), lu = d.d.input.withConfig({ displayName: "user-input__Input", componentId: "sc-18asqqn-0" })(["width:100%;height:auto;padding:12px;border:none;"]), su = d.d.li.withConfig({ displayName: "user-input__Li", componentId: "sc-18asqqn-1" })(["margin-bottom:16px;.name{padding:0 0 6px 16px;color:#444;font-size:12px;span{padding:0 3px;color:#ff5c5e;}}"]);
    function du(e) { var t = e.title, n = e.field, a = e.value, o = e.handler, i = e.rule, r = Object(me.c)(), c = Qn()(r, 1)[0]; return pe.a.createElement(su, null, pe.a.createElement("div", { className: "name" }, t, "multi" === i ? pe.a.createElement("span", null, "*") : null), pe.a.createElement(lu, { type: "text", placeholder: c("请输入"), name: n, value: a, onBlur: ge.wxScroll, onChange: function (e) { return o(e.target.value); } })); }
    var uu = d.d.div.withConfig({ displayName: "category__Container", componentId: "sc-1qze3l4-0" })(["width:100%;"]), pu = d.d.label.withConfig({ displayName: "category__InputItem", componentId: "sc-1qze3l4-1" })(["display:block;box-sizing:border-box;width:100%;height:auto;padding:12px;background:#fff;box-shadow:0 -1px 0 0 rgba(0,0,0,0.04);cursor:pointer;input{margin-right:10px;}"]);
    function mu(e) { var t = e.category, n = e.handleChange; return pe.a.createElement(uu, null, e.list.map(function (e) { return pe.a.createElement(pu, { key: e.id }, pe.a.createElement("input", { type: "radio", name: "category", value: e.id, checked: t === e.id, onChange: function () { return n(e.id); } }), e.name); })); }
    var hu = d.d.div.withConfig({ displayName: "message-form__Container", componentId: "we4f09-0" })(["width:100%;height:100%;box-sizing:border-box;position:relative;"]), fu = d.d.div.withConfig({ displayName: "message-form__Title", componentId: "we4f09-1" })(["padding:16px;font-size:12px;color:#666;word-break:break-all;"]), gu = d.d.ul.withConfig({ displayName: "message-form__List", componentId: "we4f09-2" })(["list-style:none;li{margin-bottom:16px;}.name{padding:0 0 6px 16px;color:#444;font-size:12px;span{padding:0 3px;color:#ff5c5e;}}"]), bu = d.d.input.withConfig({ displayName: "message-form__Input", componentId: "we4f09-3" })(["width:100%;height:auto;padding:12px;border:none;"]), vu = d.d.textarea.withConfig({ displayName: "message-form__Textarea", componentId: "we4f09-4" })(["display:block;width:100%;height:90px;padding:12px 16px;overflow-x:hidden;overflow-y:auto;resize:none;outline:0;background-color:#fff;border:none;word-break:break-all;font-size:12px;-webkit-appearance:none;"]), _u = d.d.div.withConfig({ displayName: "message-form__CaptchaWrap", componentId: "we4f09-5" })(["width:100%;padding-right:80px;margin-bottom:16px;box-sizing:border-box;position:relative;"]), wu = Object(d.d)(Id).withConfig({ displayName: "message-form__CaptchaImg", componentId: "we4f09-6" })(["position:absolute;right:0;top:0;bottom:0;"]), yu = d.d.div.withConfig({ displayName: "message-form__BtnWrap", componentId: "we4f09-7" })(["padding:0 20px 20px;"]);
    var xu = Object(d.e)(Object(o.b)(function (e) { return { config: e.get("config"), customTheme: e.get("theme"), msgData: e.get("message"), ticket: e.get("ticket") }; }, function (e) { return { dispatch: e }; })(function (o) {
      var i = o.config, e = o.ticket, r = o.msgData, t = Nc(o.customTheme, i.get("standalone")), n = t && t.panel || o.customTheme, a = "open" === e.get("defaultTemplate") ? e.get("defaultTemplateContent") : "", c = e.get("contactRule"), l = "open" === e.get("category"), s = "open" === e.get("name"), d = "open" === e.get("tel"), u = "open" === e.get("email"), p = "open" === e.get("wechat"), m = "open" === e.get("qq"), h = "open" === e.get("captcha"), f = Object(me.c)(), g = Qn()(f, 1)[0], b = Object(ue.useState)([]), v = Qn()(b, 2), _ = v[0], w = v[1], y = Object(ue.useState)(null), x = Qn()(y, 2), k = x[0], E = x[1], I = Object(ue.useState)(""), C = Qn()(I, 2), T = C[0], S = C[1], j = Object(ue.useState)(""), N = Qn()(j, 2), O = N[0], M = N[1], z = Object(ue.useState)(""), D = Qn()(z, 2), B = D[0], A = D[1], P = Object(ue.useState)(""), q = Qn()(P, 2), R = q[0], L = q[1], F = Object(ue.useState)(""), U = Qn()(F, 2), W = U[0], V = U[1], G = Object(ue.useState)(a), H = Qn()(G, 2), Q = H[0], Y = H[1], $ = Object(ue.useState)(h), J = Qn()($, 2), K = J[0], Z = J[1], X = Object(ue.useState)(""), ee = Qn()(X, 2), te = ee[0], ne = ee[1], ae = Object(ue.useState)(""), oe = Qn()(ae, 2), ie = oe[0], re = oe[1], ce = Object(ue.useState)(!1), le = Qn()(ce, 2), se = le[0], de = le[1]; return Object(ue.useEffect)(function () { "open" === e.get("category") && function (e) { return fe({ url: "/client/tickets_v2/categories", method: "get", params: { enterprise_id: e } }); }(i.get("entId")).then(function (e) { w(e.data.categories); }); }, [i, e]), pe.a.createElement(hu, null, pe.a.createElement(fu, null, e.get("intro")), l ? pe.a.createElement(gu, null, pe.a.createElement("li", null, pe.a.createElement("div", { className: "name" }, g("分类"), pe.a.createElement("span", null, "*")), pe.a.createElement(mu, { list: _, category: k, handleChange: function (e) { return E(e); } }))) : null, pe.a.createElement(gu, null, s ? pe.a.createElement(du, { title: g("姓名"), field: "name", value: T, handler: S, rule: c }) : null, d ? pe.a.createElement(du, { title: g("手机"), field: "tel", value: O, handler: M, rule: c }) : null, u ? pe.a.createElement(du, { title: g("邮箱"), field: "email", value: B, handler: A, rule: c }) : null, p ? pe.a.createElement(du, { title: g("微信"), field: "wechat", value: R, handler: L, rule: c }) : null, m ? pe.a.createElement(du, { title: g("QQ"), field: "qq", value: W, handler: V, rule: c }) : null, pe.a.createElement("li", null, pe.a.createElement("div", { className: "name" }, g("留言内容"), pe.a.createElement("span", null, "*")), pe.a.createElement(vu, { placeholder: g("请输入"), name: "content", value: Q, onBlur: ge.wxScroll, onChange: function (e) { return Y(e.target.value); } })), h ? pe.a.createElement("li", { key: "captcha" }, pe.a.createElement("div", { className: "name" }, g("验证码"), pe.a.createElement("span", null, "*")), pe.a.createElement(_u, null, pe.a.createElement(bu, { type: "text", name: "captcha", value: ie, onBlur: ge.wxScroll, onChange: function (e) { return re(e.target.value); } }), pe.a.createElement(wu, { width: "80px", height: "40px", refreshToken: K, handleToken: ne }))) : null), pe.a.createElement(yu, null, pe.a.createElement(Vl, {
        height: "40px", bgColor: n.themeColor, fontColor: n.fontColor, handleClick: function () {
          var e = {}, t = { enterprise_id: i.get("entId"), track_id: i.get("trackId"), visit_id: i.get("visitId"), channel: "widget" }; if (l && 0 < _.length) {
            if (!k)
              return Ea(g("请选择分类"), 2e3), !1;
            t.category_id = k;
          } if (s && T) {
            if (!(T.length <= 50))
              return Ea(g("请正确填写姓名"), 2e3), !1;
            e.name = T;
          } if (d && O) {
            if (!jd(O))
              return Ea(g("请正确填写手机号"), 2e3), !1;
            e.tel = O;
          } if (u && B) {
            if (!Sd(B))
              return Ea(g("请正确填写联系邮箱"), 2e3), !1;
            e.email = B;
          } if (p && R) {
            if (!(R.length <= 50))
              return Ea(g("请正确填写微信"), 2e3), !1;
            e.weixin = R;
          } if (m && W) {
            if (!Nd(W))
              return Ea(g("请正确填写QQ"), 2e3), !1;
            e.qq = W;
          } if ("single" === c) {
            if (!(e.name || e.tel || e.email || e.weixin || e.qq))
              return Ea(g("请至少填写一项联系方式"), 2e3), !1;
          }
          else if ("multi" === c) {
            if (s && !e.name)
              return Ea(g("请正确填写姓名"), 2e3), !1;
            if (d && !e.tel)
              return Ea(g("请正确填写手机号"), 2e3), !1;
            if (u && !e.email)
              return Ea(g("请正确填写联系邮箱"), 2e3), !1;
            if (p && !e.weixin)
              return Ea(g("请正确填写微信"), 2e3), !1;
            if (m && !e.qq)
              return Ea(g("请正确填写QQ"), 2e3), !1;
          } he(i.get("entId"), i.get("trackId"), i.get("visitId"), i.get("browserId"), e); var n = Q.trim(); if (n.length < 1 || 1024 < n.length)
            return Ea(g("请保持留言内容在 1～1024 字符内"), 2e3), !1; t.content = Q; var a = { "content-type": "application/json" }; if (h) {
              if (!ie)
                return Ea(g("请输入验证码"), 2e3), !1;
              Oe()(a, { "Captcha-Needed": "true", "Captcha-Value": ie, "Captcha-Token": te });
            } return de(!0), se || (t.client_info = e, -1 < [75507, 42961, 72508, 16, 14986].indexOf(i.get("entId")) && (t.agent_token = r.get("agentToken") || ""), t.reserve_token = r.get("reserveToken"), wt({ data: t, headers: a }).then(function (e) { de(!1), o.afterSubmit(); }, function (e) {
              var t = {}; try {
                t = e.response.data || {};
              }
              catch (e) {
                console.log(e);
              } Ea(t.message || g("留言失败，请稍候再试"), 3e3), de(!1), t.captcha_needed && Z(Math.random());
            })), null;
        }
      }, pe.a.createElement("span", null, g("提交")))));
    })), ku = d.d.div.withConfig({ displayName: "message-success__Container", componentId: "sc-1b3erm3-0" })(["width:100%;height:100%;background:#fff;overflow:hidden;"]), Eu = d.d.div.withConfig({ displayName: "message-success__BtnWrap", componentId: "sc-1b3erm3-1" })(["width:150px;margin:0 auto;"]), Iu = d.d.h2.withConfig({ displayName: "message-success__H2", componentId: "sc-1b3erm3-2" })(["text-align:center;"]), Cu = d.d.p.withConfig({ displayName: "message-success__P", componentId: "sc-1b3erm3-3" })(["font-size:14px;margin:20px 0;text-align:center;"]), Tu = Object(d.d)(Rc).withConfig({ displayName: "message-success__AnchorButton", componentId: "sc-1b3erm3-4" })(["text-decoration:underline;"]), Su = Object(o.b)(null, function (e) { return { dispatch: e }; })(function (e) { var t = e.dispatch, n = Object(me.c)(), a = Qn()(n, 1)[0], o = Object(ue.useCallback)(function () { t(Ft({ showTicket: !1 })), ht(!1); }, [t]); return pe.a.createElement(ku, null, pe.a.createElement(Iu, null, a("留言成功")), pe.a.createElement(Cu, null, a("我们会尽快联系你")), pe.a.createElement(Eu, null, pe.a.createElement(Vl, { bgColor: e.themeColor, fontColor: e.fontColor, handleClick: o }, pe.a.createElement("span", null, a("关闭")))), pe.a.createElement(Cu, null, pe.a.createElement(Tu, { handleClick: e.showForm }, pe.a.createElement("span", null, a("再次留言"))))); }), ju = d.d.div.withConfig({ displayName: "message-board__Container", componentId: "yp1ztc-0" })(["width:100%;height:100%;box-sizing:border-box;position:relative;background:#f2f3f5;overflow-y:auto;"]), Nu = Object(d.d)(ju).withConfig({ displayName: "message-board__MainContainer", componentId: "yp1ztc-1" })(["overflow:hidden;padding-top:60px;"]), Ou = d.d.div.withConfig({ displayName: "message-board__TitleWrap", componentId: "yp1ztc-2" })(["position:absolute;top:0;width:100%;"]);
    function Mu(o, i) { clearTimeout(Du), function (e, t) { return fe({ url: "/client/queue/position", method: "get", params: { ent_id: e, track_id: t } }); }(o, i).then(function (e) { var t = e.data, n = en.getState(), a = en.dispatch; n.get("message").get("convId") ? clearTimeout(Du) : !1 === t.in_queue ? a(Qt({ inQueue: !1, status: "fail" })) : (t.position && a(Qt({ position: t.position })), Du = setTimeout(function () { Mu(o, i); }, 15e3)); }); }
    var zu = Object(d.e)(Object(o.b)(function (e) { return { standalone: e.getIn(["config", "standalone"]), customTheme: e.get("theme") }; }, function (e) { return { dispatch: e }; })(function (e) { var t = Nc(e.customTheme, e.standalone), n = t && t.panel || e.customTheme, a = Object(ue.useState)(!0), o = Qn()(a, 2), i = o[0], r = o[1], c = Object(me.c)(), l = Qn()(c, 1)[0], s = { name: l("给我们留言"), showBack: te.isMobile() && !!e.standalone, fontColor: n.fontColor, themeColor: n.themeColor, closeEnabled: !e.standalone, closeText: te.isMobile() ? l("关闭") : null, handleClose: function () { ht(!1); } }, d = Object(ue.useCallback)(function () { return r(!1); }, [r]), u = Object(ue.useCallback)(function () { return r(!0); }, [r]); return Object(ue.useEffect)(function () { Ue.updatePosition(); }, []), pe.a.createElement(Nu, null, pe.a.createElement(Ou, null, pe.a.createElement(Hc, s)), pe.a.createElement(ju, null, i ? pe.a.createElement(xu, { afterSubmit: d }) : pe.a.createElement(Su, { themeColor: n.themeColor, fontColor: n.fontColor, showForm: u }))); })), Du = null;
    function Bu(t, e) {
      var n = C()(t); if (E.a) {
        var a = E()(t);
        e && (a = a.filter(function (e) { return x()(t, e).enumerable; })), n.push.apply(n, a);
      } return n;
    }
    function Au(e) { function t() { r && (p(!1), l && l()); } var n = e.className, a = e.content, o = e.visible, i = e.closeOnClick, r = void 0 === i || i, c = e.timeout, l = e.onClose, s = Object(ue.useState)(!1), d = Qn()(s, 2), u = d[0], p = d[1]; return Object(ue.useEffect)(function () { c && setTimeout(function () { p(!1), l && l(); }, c); }, [c, l]), Object(ue.useEffect)(function () { p(o); }, [o, a]), u && a ? pe.a.createElement(pe.a.Fragment, null, pe.a.createElement(Gu, { onClick: t }), pe.a.createElement(Vu, { onClick: t, className: n }, a)) : null; }
    var Pu = d.d.div.withConfig({ displayName: "queue__Container", componentId: "q5cskn-0" })(["width:100%;height:100%;box-sizing:border-box;position:relative;"]), qu = Object(d.d)(Pu).withConfig({ displayName: "queue__MainContainer", componentId: "q5cskn-1" })(["overflow:hidden;padding-top:60px;background:#fff;"]), Ru = d.d.div.withConfig({ displayName: "queue__TitleWrap", componentId: "q5cskn-2" })(["position:absolute;top:0;width:100%;"]), Lu = d.d.div.withConfig({ displayName: "queue__Intro", componentId: "q5cskn-3" })(["line-height:22px;color:#666;padding:20px 20px 30px;"]), Fu = d.d.div.withConfig({ displayName: "queue__Position", componentId: "q5cskn-4" })(["position:relative;width:100%;height:160px;background-color:#fefefe;box-shadow:inset 0 -1px 0 0 rgba(0,0,0,0.04),inset 0 1px 0 0 rgba(0,0,0,0.04);text-align:center;color:", ";@keyframes jump{0%{transform:translateY(0);text-shadow:0 30px 36px;}100%{transform:translateY(-6px);text-shadow:0 40px 40px;}}.text{padding-top:32px;padding-bottom:10px;}.pos{position:absolute;top:48px;left:50%;width:40px;margin-left:-20px;font-size:48px;text-shadow:0 30px 36px;animation:jump 0.3s ease-in-out infinite alternate;}"], function (e) { return e.themeColor ? e.themeColor : "#000"; }), Uu = d.d.div.withConfig({ displayName: "queue__Message", componentId: "q5cskn-5" })(["color:#666;margin-top:30px;text-align:center;padding:0 26px;.text{padding:20px 0;}a{width:268px;}"]), Wu = Object(d.e)(Object(o.b)(function (e) { return { standalone: e.getIn(["config", "standalone"]), entId: e.getIn(["config", "entId"]), trackId: e.getIn(["config", "trackId"]), customTheme: e.get("theme"), queue: e.get("queue") }; }, function (e) { return { dispatch: e }; })(function (e) {
      var t = e.customTheme, n = e.queue, a = e.standalone, o = e.entId, i = e.trackId, r = Object(me.c)(), c = Qn()(r, 1)[0], l = function (t) {
        for (var e = 1; e < arguments.length; e++) {
          var n = null != arguments[e] ? arguments[e] : {};
          e % 2 ? Bu(n, !0).forEach(function (e) { j()(t, e, n[e]); }) : w.a ? v()(t, w()(n)) : Bu(n).forEach(function (e) { f()(t, e, x()(n, e)); });
        } return t;
      }({}, e.theme), s = Object(L.merge)({}, l, Nc(t, a)), d = n.get("intro"), u = n.get("status"), p = n.get("position"), m = { name: c("排队等待中..."), showBack: te.isMobile() && !!a, fontColor: s.panel.fontColor, themeColor: s.panel.themeColor, closeEnabled: !a, closeText: te.isMobile() ? c("关闭") : null, handleClose: function () { ht(!1); } }; return Object(ue.useEffect)(function () { Ue.updatePosition(); }, []), Object(ue.useEffect)(function () { return Mu(o, i), function () { clearTimeout(Du); }; }, [o, i]), pe.a.createElement(qu, null, pe.a.createElement(Ru, null, pe.a.createElement(Hc, m)), "normal" === u ? pe.a.createElement(Pu, null, pe.a.createElement(Lu, null, d), pe.a.createElement(Fu, { themeColor: s.panel.themeColor }, pe.a.createElement("div", { className: "text" }, c("当前等待人数")), pe.a.createElement("div", { className: "pos" }, p)), pe.a.createElement(Uu, null, pe.a.createElement("div", { className: "text" }, c("如果等不及，可以选择")), pe.a.createElement(Vl, { height: "35px", bgColor: s.panel.themeColor, fontColor: "#fff", handleClick: function () { e.dispatch(Ft({ showTicket: !0 })); } }, pe.a.createElement("span", null, c("给我们留言"))))) : pe.a.createElement(Pu, null, pe.a.createElement(Uu, null, c("排队失败，请刷新重试"))));
    })), Vu = d.d.div.withConfig({ displayName: "bubble__Container", componentId: "hpi5ch-0" })(["position:absolute;left:50%;top:50%;z-index:999;max-width:80%;background:rgba(20,20,20,0.3);transform:translateX(-50%) translateY(-50%);padding:10px;border-radius:5px;color:#fff;background:rgba(0,0,0,0.5);"]), Gu = d.d.div.withConfig({ displayName: "bubble__Mask", componentId: "hpi5ch-1" })(["position:absolute;top:0;bottom:0;left:0;right:0;opacity:0;background:rgba(255,255,255,0);"]), Hu = d.d.div.withConfig({ displayName: "frame-chat-content__Content", componentId: "smb4c1-0" })(["width:100%;height:100%;position:relative;"]);
    var Qu = Object(d.e)(Object(o.b)(function (e) { return { standalone: e.getIn(["config", "standalone"]), customTheme: e.get("theme"), widgetContent: e.getIn(["router", "widgetContent"]), alertVisible: e.getIn(["router", "alertVisible"]), alertConfig: e.getIn(["router", "alertConfig"]) }; }, function (e) { return { dispatch: e }; })(function (e) {
      var t = e.standalone, n = e.widgetContent, a = e.alertVisible, o = e.alertConfig, i = Nc(e.customTheme, t), r = te.isMobile() ? "mobile" : "desktop", c = i && i.panel.type || e.theme.panel.type, l = "".concat(r, ".").concat(c), s = !t && ("desktop.standard" === l || "desktop.custom" === l); return Object(ue.useEffect)(function () { return s && Ue.register(!0, "chat", !1), function () { Ue.unregister(!0, !1); }; }, [l, s]), pe.a.createElement(Hu, null, function () {
        switch (n) {
          case "chatBox": return pe.a.createElement(wd, { type: l });
          case "preForm": return pe.a.createElement(cu, null);
          case "messageBoard": return pe.a.createElement(zu, null);
          case "callback": return pe.a.createElement(Ud, null);
          case "queue": return pe.a.createElement(Wu, null);
          default: return null;
        }
      }(), pe.a.createElement(Au, Pa()({ visible: a }, o, { onClose: function () { e.dispatch(U({ alertVisible: !1, alertConfig: { content: "" } })); } })));
    })), Yu = n(468), $u = n.n(Yu), Ju = n(469), Ku = n.n(Ju), Zu = n(470), Xu = n.n(Zu), ep = n(471), tp = n.n(ep), np = n(472), ap = n.n(np), op = n(473), ip = n.n(op), rp = d.d.div.withConfig({ displayName: "audio__AudioContainer", componentId: "kbmlz9-0" })(["display:none;"]), cp = Object(o.b)(function (e) { return { message: e.get("message") }; }, function (e) { return { dispatch: e }; })(function (e) {
      var t = e.message, n = e.dispatch, a = t.get("ringing"), o = t.get("ringType"), i = t.get("ringEnabled"), r = te.isMobile(), c = Object(ue.useRef)(null), l = Object(ue.useRef)(null), s = Object(ue.useRef)(null); return Object(ue.useEffect)(function () {
        if (i && a && o && !r)
          try {
            switch (o) {
              case "newChat":
                c.current.play().then(function () { }, function () { console.log("Sound not allow"); });
                break;
              case "newMessage":
                l.current.play().then(function () { }, function () { console.log("Sound not allow"); });
                break;
              case "sentMessage": s.current.play().then(function () { }, function () { console.log("Sound not allow"); });
            }
          }
          catch (e) {
            console.log(e);
          } n(Ze({ ringing: !1, ringType: "" }));
      }, [n, i, a, o, r]), pe.a.createElement(rp, null, pe.a.createElement("audio", { ref: c, preload: "preload" }, pe.a.createElement("track", { kind: "captions" }), pe.a.createElement("source", { src: $u.a, type: "audio/ogg" }), pe.a.createElement("source", { src: Ku.a, type: "audio/mpeg" })), pe.a.createElement("audio", { ref: l, preload: "preload" }, pe.a.createElement("track", { kind: "captions" }), pe.a.createElement("source", { src: Xu.a, type: "audio/ogg" }), pe.a.createElement("source", { src: tp.a, type: "audio/mpeg" })), pe.a.createElement("audio", { ref: s, preload: "preload" }, pe.a.createElement("track", { kind: "captions" }), pe.a.createElement("source", { src: ap.a, type: "audio/ogg" }), pe.a.createElement("source", { src: ip.a, type: "audio/mpeg" })));
    });
    function lp() { var e = Ba()(["\n    html,body {\n        width: 100%;\n        height: 100%;\n        overflow: hidden;\n        font-size: 13px;\n        font-family: 'Helvetica Neue',Helvetica,Arial,'Hiragino Sans GB','Microsoft YaHei',sans-serif;\n    }\n    html, body, div, span, ul, ol, li, p, label {\n        margin:0;\n        padding:0;\n    }\n    body {\n        transform: translateY(0px);\n        zoom: 1;\n    }\n    input {\n        outline: none;\n    }\n"]); return lp = function () { return e; }, e; }
    var sp = Object(d.c)(lp()), dp = Object(o.b)(function (e) { return { showWidget: e.getIn(["router", "showWidget"]), buttonActived: e.getIn(["router", "buttonActived"]), servability: e.getIn(["config", "servability"]), visitorStatus: e.getIn(["config", "visitorStatus"]), showSurvey: e.getIn(["survey", "showSurvey"]), scheduler: e.getIn(["message", "scheduler"]), convId: e.getIn(["message", "convId"]), unableToServe: e.getIn(["message", "unableToServe"]), showTicket: e.getIn(["ticket", "showTicket"]), inQueue: e.getIn(["queue", "inQueue"]) }; }, null)(function (e) { var t = e.showWidget, n = e.buttonActived, a = e.servability, o = e.visitorStatus, i = e.showSurvey, r = e.scheduler, c = e.convId, l = e.unableToServe, s = e.showTicket, d = e.inQueue; return Object(ue.useEffect)(function () { t && ("chat" === n || "invite" === n || "smart-guide" === n ? 4 === o ? vt("chatBox") : a ? i && 4 !== o ? vt("preForm") : (r || c || Gn(), l || s ? vt("messageBoard") : d ? (Ve("convClickCallback", "queue"), vt("queue")) : vt("chatBox")) : (Ve("convClickCallback", "ticket"), vt("messageBoard")) : "callback" === n && vt("callback")); }, [t, n, i, a, r, c, l, s, d, o]), pe.a.createElement(Na, { component: qc, GlobalStyle: sp, visible: t }, pe.a.createElement(Qu, null), pe.a.createElement(cp, null)); }), up = d.d.iframe.withConfig({ displayName: "base-invite__BaseFrame", componentId: "hnth0k-0" })(["border:none;padding:0;overflow-x:visible;overflow-y:visible;overflow-wrap:normal;position:fixed;z-index:9999999;cursor:pointer;text-align:center;display:", " !important;"], function (e) { return e.visible ? "block" : "none"; }), pp = pe.a.forwardRef(function (e, t) { var n = e.frameRef; return pe.a.createElement(up, Pa()({}, e, { name: "invite", ref: n })); });
    function mp(t, e) {
      var n = C()(t); if (E.a) {
        var a = E()(t);
        e && (a = a.filter(function (e) { return x()(t, e).enumerable; })), n.push.apply(n, a);
      } return n;
    }
    function hp(t) {
      for (var e = 1; e < arguments.length; e++) {
        var n = null != arguments[e] ? arguments[e] : {};
        e % 2 ? mp(n, !0).forEach(function (e) { j()(t, e, n[e]); }) : w.a ? v()(t, w()(n)) : mp(n).forEach(function (e) { f()(t, e, x()(n, e)); });
      } return t;
    }
    function fp(e) {
      var t = e.invite, n = e.theme, a = e.config, o = te.isMobile() ? "mobile" : "desktop", i = function (e, t, n) {
        var a = {}, o = t.get("mobile"), i = t.get("desktop"); if (o || i) {
          var r = "mobile" === n ? o : i, c = r.get("position"), l = r.get("type");
          switch (l) {
            case 1:
              var s = X()(e.bottom, 10) + X()(e.height, 10) + 8;
              a = { width: "340px", height: "150px", left: e.left, right: e.right, bottom: "".concat(s, "px"), boxShadow: "0 0 14px 0 rgba(0, 0, 0, 0.16)" };
              break;
            case 2:
              a = { width: "280px", height: "260px" };
              break;
            case 3:
            case 4:
              a = { width: "330px", height: "150px" };
              break;
            case 5:
              a = { picSrc: "".concat(r.get("src")) };
              break;
            case 6: a = { width: "".concat(r.getIn(["bgi", "width"]) + 20, "px"), height: "".concat(r.getIn(["bgi", "height"]) + 20, "px") };
          }
          if (1 !== l) {
            var d = 1;
            if (c && (d = c.get("type")), "mobile" === n)
              switch (d) {
                case 1:
                  a = hp({}, a, { left: "50%", top: "50%", transform: "translate(-50%,-50%)" });
                  break;
                case 2:
                  a = hp({}, a, { left: "50%", transform: "translateX(-50%)", top: "".concat(c.get("value"), "px") });
                  break;
                case 3: a = hp({}, a, { left: "50%", transform: "translateX(-50%)", bottom: "".concat(c.get("value"), "px") });
              }
            else
              switch (d) {
                case 1:
                  a = hp({}, a, { left: "50%", top: "50%", transform: "translate(-50%,-50%)" });
                  break;
                case 2:
                  a = hp({}, a, { left: "".concat(c.get("side"), "px"), bottom: "".concat(c.get("bottom"), "px") });
                  break;
                case 3: a = hp({}, a, { right: "".concat(c.get("side"), "px"), bottom: "".concat(c.get("bottom"), "px") });
              }
          }
        } return hp({}, a);
      }(Ka(n, a, o), t, o), r = Ua(i.picSrc); r && (i = hp({}, i, {}, r)); var c = e.frameRef; return pe.a.createElement(gp, Pa()({}, e, i, { ref: c }));
    }
    var gp = Object(d.d)(pp).withConfig({ displayName: "invite__InviteStyle", componentId: "sc-1646giz-0" })(["height:", " !important;width:", " !important;max-width:90%;top:", ";left:", ";right:", ";bottom:", ";transform:", ";"], function (e) { return e.height; }, function (e) { return e.width; }, function (e) { return e.top; }, function (e) { return e.left; }, function (e) { return e.right; }, function (e) { return e.bottom; }, function (e) { return e.transform; }), bp = Object(o.b)(function (e) { return { config: e.get("config"), invite: e.get("invite"), theme: e.get("theme") }; }, function (e) { return { dispatch: e }; })(function (e) { return pe.a.createElement(fp, e); }), vp = n(474), _p = n.n(vp), wp = n(475), yp = n.n(wp), xp = n(476), kp = n.n(xp), Ep = d.d.div.withConfig({ displayName: "frame-invite-content__FrameInviteContentBoxStyle", componentId: "sc-1g53vrw-0" })(["height:100%;width:100%;background:", ";padding:", ";background-size:", ";transform:", ";"], function (e) { return e.background; }, function (e) { return e.padding; }, function (e) { return e.backgroundSize; }, function (e) { return e.transform; }), Ip = d.d.div.withConfig({ displayName: "frame-invite-content__FrameInviteContentStyle", componentId: "sc-1g53vrw-1" })(["height:", ";width:", ";margin:", ";padding:", ";box-shadow:", ";border-radius:", ";background:", ";font-size:13px;overflow:hidden;position:relative;.content{width:100%;height:100%;box-sizing:border-box;overflow:hidden;line-height:", ";}"], function (e) { return e.height; }, function (e) { return e.width; }, function (e) { return e.margin; }, function (e) { return e.padding; }, function (e) { return e.boxShadow; }, function (e) { return e.borderRadius; }, function (e) { return e.background; }, function (e) { return e.lineHeight; }), Cp = d.d.div.withConfig({ displayName: "frame-invite-content__CloseWrapper", componentId: "sc-1g53vrw-2" })(["position:absolute;right:3px;top:3px;z-index:10;font-size:14px;width:30px;height:30px;text-align:center;line-height:30px;background:#fff;border-radius:50%;color:#999;cursor:pointer;box-shadow:0 0 3px 0 rgba(0,0,0,0.15);"]), Tp = d.d.div.withConfig({ displayName: "frame-invite-content__ActionButton", componentId: "sc-1g53vrw-3" })(["position:absolute;height:", "px;width:", "px;left:", "px;top:", "px;cursor:pointer;"], function (e) { return e.height; }, function (e) { return e.width; }, function (e) { return e.left; }, function (e) { return e.top; }), Sp = d.d.a.withConfig({ displayName: "frame-invite-content__ActionLink", componentId: "sc-1g53vrw-4" })(["position:absolute;height:", "px;width:", "px;left:", "px;top:", "px;cursor:pointer;"], function (e) { return e.height; }, function (e) { return e.width; }, function (e) { return e.left; }, function (e) { return e.top; }), jp = Object(o.b)(function (e) { return { config: e.get("config"), invite: e.get("invite") }; }, function (e) { return { dispatch: e }; })(function (e) {
      function m() { n(_t); } function h() { n(st("customer")), ht(!0, "invite"); } var t = e.invite, n = e.dispatch, a = function (e, t) {
        var n = {}, a = {}, o = "", i = "", r = 1, c = e.get("mobile"), l = e.get("desktop"); if (c || l) {
          var s = "mobile" === t ? c : l;
          switch (r = s.get("type"), o = s.get("text"), r) {
            case 1:
              n = { transform: "translate(20px,20px)" }, a = { width: "260px", height: "44px", boxShadow: "0 0 14px 0 rgba(0, 0, 0, 0.16)", borderRadius: "4px", padding: "50px 20px", background: "#fff", lineHeight: "22px" };
              break;
            case 2:
              n = { background: "url(".concat(_p.a, ") no-repeat center") }, a = { width: "156px", height: "68px", padding: "58px 62px 0", lineHeight: "23px" };
              break;
            case 3:
              n = { background: "url(".concat(yp.a, ") no-repeat center"), backgroundSize: "320px" }, a = { width: "175px", height: "44px", padding: "50px 0 0 110px", lineHeight: "22px" };
              break;
            case 4:
              n = { background: "url(".concat(kp.a, ") no-repeat center"), backgroundSize: "320px" }, a = { width: "170px", height: "44px", padding: "46px 0 0 40px", lineHeight: "22px" };
              break;
            case 5:
              o = "", n = { background: "url(".concat(s.get("src"), ") no-repeat center"), backgroundSize: "100%" };
              break;
            case 6: i = s.get("actions"), o = "", n = { background: "url(".concat(s.getIn(["bgi", "src"]), ") no-repeat center"), backgroundSize: "".concat(s.getIn(["bgi", "width"]), "px ").concat(s.getIn(["bgi", "height"]), "px") }, a = { width: "100%", height: "100%" };
          }
        } return { contentBoxStyle: n, contentStyle: a, content: o, actions: i, type: r };
      }(t, te.isMobile() ? "mobile" : "desktop"), o = a.contentBoxStyle, i = a.contentStyle, r = a.content, c = a.actions, l = a.type; return pe.a.createElement("div", null, 6 !== l ? pe.a.createElement(Cp, { onClick: m }, "✕") : null, pe.a.createElement(Ep, Pa()({}, o, { onClick: 6 !== l ? h : function () { } }), pe.a.createElement(Ip, i, pe.a.createElement("div", { className: "content" }, r), function (e) {
        var p = []; e && e.toJS().forEach(function (e, t) {
          var n = e.height, a = e.width, o = e.type, i = e.linkType, r = e.position, c = e.href, l = { height: n, width: a, left: r.left, top: r.top }, s = ""; switch (o) {
            case 1:
              s = pe.a.createElement(Tp, Pa()({}, l, { onClick: h, key: "".concat(o).concat(t) }));
              break;
            case 2:
              s = pe.a.createElement(Tp, Pa()({}, l, { onClick: m, key: "".concat(o).concat(t) }));
              break;
            case 3:
              var d = "", u = "";
              1 === i && (d = c, u = "_blank"), 2 === i && (d = "mailto:".concat(c)), 3 === i && (d = "tel:".concat(c)), s = pe.a.createElement(Sp, Pa()({}, l, { key: "".concat(o).concat(t), href: d, target: u }));
              break;
            default: s = pe.a.createElement(Tp, Pa()({}, l, { onClick: h, key: "".concat(o).concat(t) }));
          } p.push(s);
        }); return p;
      }(c))));
    });
    function Np() { var e = Ba()(["\n    html,body {\n        height:100%;\n        width:100%;\n        margin:0;\n        padding:0;\n    }\n"]); return Np = function () { return e; }, e; }
    var Op = Object(d.c)(Np()), Mp = d.d.div.withConfig({ displayName: "router-invite__Wrapper", componentId: "sc-1m23l53-0" })(["width:100%;height:100%;overflow:hidden;"]), zp = Object(o.b)(function (e) { return { router: e.get("router") }; }, function (e) { return { dispatch: e }; })(function (e) { var t = e.router; return pe.a.createElement(Na, { visible: t.get("showInvite"), component: bp, GlobalStyle: Op, iframeName: "invite" }, pe.a.createElement(Mp, null, pe.a.createElement(jp, null))); }), Dp = d.d.iframe.withConfig({ displayName: "frame-call__CallFrame", componentId: "sc-1wagxvg-0" })(["border:none;margin:0;padding:0;overflow-x:visible;overflow-y:visible;overflow-wrap:normal;position:fixed;z-index:9999999;cursor:pointer;text-align:center;width:62px !important;height:62px !important;border-radius:50%;box-shadow:rgba(0,0,0,0.16) 0 5px 20px;left:", "px;right:", "px;background-color:", ";bottom:", "px;display:", " !important;"], function (e) { return X()(e.left, 10) + 15; }, function (e) { return X()(e.right, 10) + 15; }, function (e) { return "".concat(e.bgColor); }, function (e) { return X()(e.bottom, 10) + 90; }, function (e) { return "call" === e.type && e.visible ? "block" : "none"; }), Bp = pe.a.forwardRef(function (e, t) { var n = e.theme, a = e.frameRef, o = e.config, i = te.isMobile() ? "mobile" : "desktop", r = Ka(n, o, i), c = n.getIn(["".concat(i), "btn"]), l = ""; return c && (l = c.type), pe.a.createElement(Dp, Pa()({}, e, r, { type: l, name: "call", ref: a })); }), Ap = Object(o.b)(function (e) { return { theme: e.get("theme"), config: e.get("config") }; })(Bp), Pp = Object(o.b)(function (e) { return { theme: e.get("theme") }; })(function (e) { var t = e.theme, n = te.isMobile() ? "mobile" : "desktop", a = t.getIn(["".concat(n), "btn"]); return pe.a.createElement(go, { bgColor: a && a.theme }, pe.a.createElement(_o, null, pe.a.createElement(fo, { type: "call-callback" }))); });
    function qp() { var e = Ba()(["\n  html,body {\n    height:100%;\n    width:100%;\n    margin:0;\n    padding:0;\n  }\n"]); return qp = function () { return e; }, e; }
    var Rp = Object(d.c)(qp()), Lp = d.d.div.withConfig({ displayName: "router-call-botton__Wrapper", componentId: "dkoslj-0" })(["width:100%;height:100%;overflow:hidden;"]), Fp = Object(o.b)(function (e) { return { router: e.get("router"), config: e.get("config") }; }, null)(function (e) { var t = e.router, n = e.config; return pe.a.createElement(Na, { visible: t.get("showButton") && !n.get("withoutBtn"), component: Ap, GlobalStyle: Rp, iframeName: "call" }, pe.a.createElement(Lp, { onClick: function () { ht(!0, "callback"); } }, pe.a.createElement(Pp, null))); }), Up = te.isMobile() ? "mobile" : "desktop", Wp = d.d.iframe.withConfig({ displayName: "frame-smart-guide__Frame", componentId: "ys136d-0" })(["border:none;width:325px !important;margin:0;padding:0;overflow:hidden;overflow-wrap:normal;display:block;position:fixed;z-index:9999999;background:transparent;", ""], function (e) { return e.styles ? e.styles.join("") : ""; }), Vp = pe.a.forwardRef(function (e, t) {
      var n = e.frameRef, a = e.customTheme, o = e.config, i = function (e, t) {
        function n(e) { return X()(e, 10) || 0; } var a = e.customTheme, o = e.withoutBtn, i = e.visible, r = [], c = a.getIn([Up, "btn", "type"]), l = a.getIn([Up, "btn", "position", "type"]); if (!1 === i ? r.push("visibility: hidden !important;z-index:-1000 !important;") : r.push("visibility: visible !important;z-index:1000 !important;"), o)
          r.push.apply(r, ["right: 20px;", "bottom: 20px;"]);
        else if ("mobile" == Up) {
          var s = 20 + n("bottom" === t.type ? 0 : n(t.bottom)) + n(t.height) + ("call" === c ? n(t.height) + 20 : 0);
          r.push.apply(r, ["".concat(l || "right", ": 0;"), "bottom: ".concat(s, "px;")]);
        }
        else {
          var d = 20 + n("bottom" === t.type ? 0 : n(t.bottom)) + n(t.height) + ("call" === c ? n(t.height) + 20 : 0), u = "aside" === c ? "-".concat(15) : n(t[l]);
          r.push.apply(r, ["".concat(l || "right", ": ").concat(u, "px;"), "bottom: ".concat(d, "px;")]);
        } return r;
      }(e, Ka(a, o, Up) || {}); return pe.a.createElement(Wp, { name: "smart-guide", frameborder: "0", scrolling: "no", allowtransparency: "true", ref: n, styles: i });
    }), Gp = Object(d.e)(Object(o.b)(function (e) { return { withoutBtn: e.getIn(["config", "withoutBtn"]), standalone: e.getIn(["config", "standalone"]), customTheme: e.get("theme"), config: e.get("config") }; }, function (e) { return { dispatch: e }; })(Vp)), Hp = te.isMobile() ? "mobile" : "desktop", Qp = d.d.div.withConfig({ displayName: "frame-smart-guide-content__Container", componentId: "sc-1nq7zh4-0" })(["width:100%;height:100%;box-sizing:border-box;padding:20px;background:transparent;position:relative;", ""], function (e) { return "left" === e.type ? "padding-right: 45px;" : "padding-left: 45px;"; }), Yp = d.d.div.withConfig({ displayName: "frame-smart-guide-content__Inner", componentId: "sc-1nq7zh4-1" })(["width:100%;height:100%;box-sizing:border-box;word-break:break-word;padding:15px;background:#fafafa;border-radius:8px;overflow:visible;position:relative;box-shadow:0 4px 8px 2px rgba(0,0,0,0.08);.close{", " position:absolute;right:-14px;top:-16px;z-index:100;font-size:14px;width:30px;height:30px;line-height:30px;text-align:center;background:#fff;border-radius:50%;color:#999;cursor:pointer;box-shadow:2px 2px 5px 1px rgba(0,0,0,0.1);}&:hover .close{display:block;}"], function (e) { return e.mobile ? "" : "display: none;"; }), $p = d.d.div.withConfig({ displayName: "frame-smart-guide-content__Avatar", componentId: "sc-1nq7zh4-2" })(["position:absolute;bottom:20px;", " width:36px;height:36px;border-radius:18px;overflow:hidden;box-shadow:0 4px 8px 2px rgba(0,0,0,0.08);img{width:100%;height:100%;}"], function (e) { return "left" === e.type ? "right: 0;" : "left: 0;"; }), Jp = d.d.div.withConfig({ displayName: "frame-smart-guide-content__RichText", componentId: "sc-1nq7zh4-3" })(["width:100%;", ""], function (e) { return e.styles ? e.styles.join("") : ""; }), Kp = Object(o.b)(function (e) { return { detail: e.getIn(["smartGuide", "templateDetail"]), posType: e.getIn(["theme", Hp, "btn", "position", "type"]) }; }, function (e) { return { dispatch: e }; })(function (e) {
      var t = e.detail, n = e.dispatch, a = e.posType, o = t.avatar, i = t.html, r = (t.type, te.isMobile()), c = Object(ue.useRef)(null), l = Object(ue.useState)(null), s = Qn()(l, 2), d = s[0], u = s[1]; return Object(ue.useEffect)(function () {
        var e = c.current; if (e && e.scrollHeight) {
          var t = window.parent.document.querySelector("iframe[name=smart-guide]"), n = e.scrollHeight;
          300 < n ? (u(["overflow: auto;", "height: ".concat(300, "px;"), "max-height: ".concat(300, "px;")]), t.style.setProperty("height", "".concat(375, "px"), "important")) : (u(["height: ".concat(n)]), t.style.setProperty("height", "".concat(n + 75, "px"), "important"));
        }
      }, [i]), pe.a.createElement(Qp, { type: a }, pe.a.createElement($p, { type: a }, pe.a.createElement("img", { alt: "avatar", src: o })), pe.a.createElement(Yp, { mobile: r, onClick: function (e) { e.stopPropagation(), tn(), n(function (e, t) { return we(e, t, !1); }), n(be({ templateActive: !0 })), ht(!0, "smart-guide"); } }, pe.a.createElement("div", { className: "close", onClick: function (e) { e.stopPropagation(), n(function (e, t) { return we(e, t, !1); }); } }, "✕"), pe.a.createElement(Jp, { styles: d, className: "rich-text", ref: c, dangerouslySetInnerHTML: { __html: i } })));
    });
    function Zp() { var e = Ba()(["\n    html,body {\n        height:100%;\n        width:100%;\n        margin:0;\n        padding:0;\n    }\n"]); return Zp = function () { return e; }, e; }
    var Xp = Object(d.c)(Zp()), em = d.d.div.withConfig({ displayName: "router-smart-guide__Wrapper", componentId: "ab8bk7-0" })(["width:100%;height:100%;overflow:hidden;"]), tm = Object(o.b)(function (e) { return { router: e.get("router") }; }, null)(function (e) { var t = e.router; return pe.a.createElement(Na, { visible: t.get("showSmartGuide"), component: Gp, GlobalStyle: Xp, iframeName: "smart-guide" }, pe.a.createElement(em, null, pe.a.createElement(Kp, null))); });
    function nm() { var e = Ba()(["\n    ._MEIQIA_FIX_BODY {\n        width:100% !important;\n        height:100% !important;\n        position:fixed !important;\n        overflow: visible !important;\n        zoom: 1 !important;\n    }\n"]); return nm = function () { return e; }, e; }
    var am = Object(d.c)(nm());
    var om = Object(o.b)(function (e) { return { config: e.get("config") }; }, function (e) { return { dispatch: e }; })(function (e) { var t = e.config, n = t.get("language"), a = Object(me.c)(), o = Qn()(a, 2), i = (o[0], o[1]); Object(ue.useEffect)(function () { i.changeLanguage(n); }, [i, n]); t.get("isInit"); return pe.a.createElement(pe.a.Fragment, null, pe.a.createElement(d.a, { target: window.parent.document.head }, pe.a.createElement(am, null)), pe.a.createElement(dp, null), pe.a.createElement(jo, null), pe.a.createElement(Tc, null), pe.a.createElement(zp, null), pe.a.createElement(Fp, null), pe.a.createElement(tm, null)); }), im = { main: "mediumseagreen", device: "desktop", panel: { type: "standard", position: { type: "right", bottom: "30", horizontal: "30" }, themeColor: "#cc8238", fontColor: "#fff", profileBgColor: "#fff" }, btn: { type: "round", position: { type: "right", bottom: "30", horizontal: "30" }, themeColor: "#007aff" } }, rm = pe.a.createElement(d.b, { theme: im }, pe.a.createElement(o.a, { store: en }, pe.a.createElement(om, null)));
    za(en.dispatch, en);
    var cm = r();
    a.render(rm, cm);
    n(798);
  }
});