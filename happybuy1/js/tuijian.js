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
            this.Btn();
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
            $(window).scroll(()=>{
                    if($(window).scrollTop()>=200){
                        $(".search_fixed").css({display:"block"})
                    }else{
                        $(".search_fixed").css({display:"none"})
                    }
                })
        }
        Btn(){
            let that = this;
            let str={};
            let abc = $(".sp-1_cont-3").children(".once");
            Array.from(abc).forEach(item => { 
                        item.onclick = function(){
                            console.log(this)
                           that.pj = this.querySelector(".once-2").innerText;
                           that.js = this.querySelector(".once-2").innerText;
                          that.pic=this.querySelector(".once-1 img").src;
                          that.jg=this.querySelector(".once-3").innerText;
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