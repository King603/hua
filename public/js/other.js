(() => {
  var cooperation_list = document.getElementsByClassName("cooperation_list")[0];
  var arr = [
    ["供应商", "花礼品类创意礼品供应商合作"],
    ["产品代销", "鲜花礼品代销、频道合作、CPS合作"],
    ["代金券", "促销激励客户用途、积分兑换用途等"],
    ["企业宣传", "宣传资源互换、活动合作促销"]
  ];
  var i = 1;
  for (var elem of arr) {
    cooperation_list.innerHTML += `
    <div class="cooperation_item">
      <div class="cooperation_item_pic">
          <img src="../img/qiyetuangou/business_cooperation${i++}.png" alt="">
      </div>
      <div class="cooperation_item_content">
          <div class="cooperation_item_content_header">${elem[0]}</div>
          <div class="cooperation_item_content_body">${elem[1]}</div>
      </div>
    </div>
    `;
  }
})();


