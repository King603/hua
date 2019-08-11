//1.查找触发事件的元素
//查找thead中的input checkbox
var chbAll = document.querySelector("thead input");
//查找tbody下的左右input
var chbs = document.querySelectorAll("tbody input");
//2.绑定事件处理函数
//为全选按钮绑定单击事件
chbAll.onclick = function () {
    //3.查找要修改的元素
    //获得tbody下所有的input checkbox
    var chbs = document.querySelectorAll("tbody input");
    //4.修改元素
    for (var chb of chbs) {
        //把tbody中每个theckbox的checked属性都改成和全选按钮的checked的属性保持一致
        chb.checked = chbAll.checked;
    }
}
//2.绑定事件处理函数
//为全选按钮绑定单击事件
for (var chb of chbs) {
    //每遍历一个就绑定单击事件
    chb.onclick = function () {
        //3.查找要修改的元素
        //查找thead中唯一一个input
        var chbAll = document.querySelector("thead input");
        //4.修改元素
        //获取当前单击的chb
        var chb=this;
        //如果单击未被选定
        if(chb.checked==false){
            //全选一定不选中
            chbAll.checked=false;
        }else {
            //在tbody下找不到未选中的input
            if(document.querySelector("tbody input:not(:checked)")==null){
                //才修改全选按钮选中
                chbAll.checked=true;
            }
        }
    }
}