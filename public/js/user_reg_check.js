var txtName=document.getElementsByName("uname")[0];
var txtPwd=document.getElementsByName("upwd")[0];
var txtEmail=document.getElementsByName("email")[0];
var txtPhone=document.getElementsByName("phone")[0];

txtName.onfocus=txtPwd.onfocus=txtEmail.onfocus=txtPhone.onfocus=function(){
    var txt=this;
    var div=txt.parentNode.nextElementSibling.children[0];
    div.className="";
}
txtName.onblur=function(){
    var reg=/^\w{1,10}$/;
    vail(this,reg);
}
function vail(txt,reg){
    var bool=reg.test(txt.value);
    var div=txt.parentNode.nextElementSibling.children[0];
    if(bool) div.className="vali_success";
    else div.className="vali_fail";
}
txtPwd.onblur=function(){
    var reg=/^\d{6}$/;
    vail(this,reg);
}
txtEmail.onblur=function(){
    var reg= /^([a-zA-Z]|[0-9])(\w|\-)+@[a-zA-Z0-9]+\.([a-zA-Z]{2,4})$/;
    vail(this,reg);
}
txtPhone.onblur=function(){
    var reg=/^1[3-9][0-9]{9}$/;
    vail(this,reg);
}














