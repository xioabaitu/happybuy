$(()=>{
    $.ajax({
        type: "post",
        url: "./php/tuijian.php",
        dataType: "json",
    }).done(data=>{
        new xuan(data);
    })
    class xuan{
        constructor(data){
            this.data = data;
            this.Init();
        }
        Init(){
            this.Creat();
            this.Fun();
        }
        Creat(){
            let str= "";
            this.data.forEach(item => {
                str +=`
                    <li class="once">
                        <div class="once-1">
                            <img src="${item.src}">
                        </div>
                        <p class="once-2">${item.title}</p>
                        <span class="once-3">${item.price}</span>
                        <span class="once-4">
                            <button>立即订购</button>
                        </span>
                    </li>`
                    $(".sp-1_cont-1").html(str);
                    $(".sp-1_cont-3").html(str);
            });
        }
        Fun(){
                let bt = document.querySelector(".l");
                let bg = document.querySelector(".r");
                let bte = document.querySelector(".sp-1_cont-1");
                 if( bte.style.left<=0){
                            bte.style.left=0;
                        }
                bt.onclick = function(){
                    bte.style.left = bte.offsetLeft -1380+ "px";
                       
            }
                bg.onclick = function(){
                bte.style.left = bte.offsetLeft +1380+ "px";
            }
        }
    }
})