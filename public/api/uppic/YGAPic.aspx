

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">

<html xmlns="http://www.w3.org/1999/xhtml" >
<head><title>
	上传图片
</title>
<style type="text/css">
.a-upload {
    height: 32px;
    line-height: 32px;
    position: relative;
    cursor: pointer;
    overflow: hidden;
    display: inline-block;
    *display: inline;
    *zoom: 1
}
.a-upload  input {
    position: absolute;
    font-size: 100px;
    right: 0;
    top: 0;
    opacity: 0;
    filter: alpha(opacity=0);
    cursor: pointer
}
</style>
</head>
<body style="background-color:Transparent">
    <form id="UpForm" enctype="multipart/form-data" action="YGAPic.aspx" method="post">
        <div class="a-upload"><input type="file" name="userpic" id="userpic" /><img src="https://img01.hua.com/zhuanti/yongganai/yga_13.jpg" width="201" height="32" /><input type="hidden" name="oper" id="oper" value="save" /></div>
    </form>
    
    <script type="text/javascript">
        var oInput = document.getElementById("userpic");
        oInput.onchange = function() {
            if (this.value.length > 2) {
                document.getElementById("UpForm").submit();
            }
        }
    </script>
</body>
</html>
