$(()=>{
    var imgCode;
    let captcha = new Captcha({
        lineWidth: 1, 
        lineNum: 2, 
        preGroundColor: [10, 80], 
        backGroundColor: [150, 250], 
        fontSize: 40, 
        fontFamily: ['Georgia', '微软雅黑', 'Helvetica', 'Arial'], //字体类型
        fontStyle: 'stroke', 
        content: '0123456789', 
        length: 4 
    });

    captcha.draw(document.querySelector('#captcha'), r => {
        imgCode = r;
        $("#imageCode").trigger("blur");
    });
    let phone = /^1[3-9]\d{9}$/;
    let password = /^[a-zA-Z0-9]{3,6}$/;
    $("#phone").blur(()=>{
        if(phone.test($("#phone").val())){
            $(".ph").text("√");
        }else{
            $(".ph").text("请输入11位的手机号");
        }
    })
    $("#pwd").change(()=>{
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
    $("#pdw").change(()=>{
        let ab=$("#pdw").val();
        let ac = $("#pwd").val();
        if(ac.length>0){
            if( ab === ac){
                $(".ag").text("√");
            }else{
                $(".ag").text("两次密码不一致");
            }
        }else{
            $(".ag").text("");           
        }
    })
    $("#verification").blur(()=>{
        if($("#verification").val().length>0){
            if( $("#verification").val() == imgCode){
                $(".yz").text("√");
            }else{
                alert("验证码错误");
                window.history.go(0);
            }
        }else{
            $(".yz").text("请输入验证码");           
        } 
    })
    $("#btn").click(()=>{
        if($("#ck").is(':checked')){
            let abc = $(".ph").text();
            let abb = $(".mi").text();
            let aaa = $(".ag").text();
            let abd = $(".yz").text();
            if(abc == abb && abc==aaa && abc==abd){
                let data = {
                    phone: $.trim($("#phone").val()),
                 password: md5($.trim($("#pwd").val())).slice(0,15)

                }
                $.ajax({
                    url:"./php/registor.php",
                    data,
                    dataType: "json",
                }).done(data => {
                    if (data.status == "success") {
                        alert("注册成功!");
                        location.href="login.html";
                    } else {
                        alert(data.msg);
                    console.log(2)

                    }
                })
            }
        }else{
            alert("请勾选条款")
        }
    })
})