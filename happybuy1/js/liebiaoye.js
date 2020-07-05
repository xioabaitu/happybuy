$(()=>{
    $.ajax({
        type: "post",
        url: "./php/liebiao.php",
        dataType: "json",
    }).done(data=>{
        new xu(data);
    })
    class xu{
        constructor(data){
            this.data=data;
            this.Init();
        }
        Init(){
            this.Creat();
            this.Fun();
        }
        Creat(){
            let abc="";
            console.log(this.data)
            this.data.forEach(item => {
                abc +=`<div class="shpi" data_id=${item.id}>
                        <img src="${item.src}">
                        <span>${item.price1}</span>
                        <p>${item.title}</p>
                    </div>`
            });
            $(".tou").html(abc);
            $(".shpi").mousemove(function(){
                    $(this).css({
                        border:"2px solid red",
                    })
                
                })
                $(".shpi").mouseout(function(){
                    $(this).css({
                        border:"none",
                    })
                
                })
            }
            Fun(){
                let that = this;
                let str={};
                let abc = $(".tou").children(".shpi");
                Array.from(abc).forEach(item => { 
                            item.onclick = function(){
                               that.pj = this.querySelector(".shpi p").innerText;
                               that.js = this.querySelector(".shpi p").innerText;
                              that.pic=this.querySelector(".shpi img").src;
                              that.jg=this.querySelector(".shpi span").innerText;
                              that.Id = $(this).attr("data-id");
                              str.Id = that.Id;
                              str.pj = that.pj;
                              str.js = that.js;
                              str.pic = that.pic;
                              str.jg = that.jg;
                              localStorage.setItem("detailed",JSON.stringify(str));
                            location.href="./detailed.html";
                        }
                    });
            }
        }
})