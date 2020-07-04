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
        }
        Creat(){
            let abc="";
            this.data.forEach(item => {
                abc +=`<div class="shpi">
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
        }
})