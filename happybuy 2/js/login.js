$(()=>{
    let phone = /^1[3-9]\d{9}$/;
    let password = /^[a-zA-Z0-9]{3,6}$/; 
    $("input").blur(()=>{
        if(phone.test($("#phone").val())){
            $(".ph").text("√");
        }else{
            $(".ph").text("请输入11位的手机号");
        }
        if(password.test($("#pwd").val())){
            $(".mi").text("√");
        }else{
            if($("#pwd").val().length==0){
            $(".mi").text("请输入密码");
            }else{
            $(".mi").text("密码格式不对");
        }
    }  
    })
    $("#btn").click(()=>{
        let phone = $.trim($("#phone").val());
        let password = $.trim($("#pwd").val());
        $.ajax({
            type: "post",
            url: "./php/login.php",
            dataType: "json",
            data: `phone=${phone}&password=${md5(password).slice(0,15)}`
        }).done(data => {
            if (data.status == "success") {
                alert(data.msg);
                location.href = "happybuy.html"
            } else {
                alert(data.msg);
            }
        })
    })
})