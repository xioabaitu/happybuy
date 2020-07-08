$(()=>{$.ajax({
    type: "post",
    url: "./php/list.php",
    dataType: "json",
}).done(data=>{
    new list(data);
})


    class list{
        constructor(data){
            this.data = data;
            this.Init();
        }
        Init(){
            this.Creat();
            this.Ran();
            this.Tips();
            this.NUM();
        }
        Creat(){
            let str = "";
            this.data.forEach(item => {
                   str +=`<li class="shop" data-id="${item.id}">
                        <div class="pic"><img src="${item.src}"></div>
                        <p class="pj">${item.title1}</p>
                        <p class="js">${item.title2}</p>
                        <span class="jg">￥${item.price1}</span>
                   </li>`
            });
            $(".footer_cont").html(str);
            Array.from($(".shop")).forEach(itm=>{
                itm.onmousemove = function(){
                    itm.style.border ="3px solid red"
                }
                itm.onmouseleave = function(){
                    itm.style.border =""
                }
            })
            $(".buy").click(()=>{
                let aa=$(".sign").text();
                let abc = localStorage.getItem("user");
                    if(aa == String(abc)){
                       location.href="buy.html"
                    }else{
                        alert("请先登录");
                        location.href="login.html";
                    }   
            })
        }
        Ran(){
            let abc = parseInt((Math.random()));
                let abb = parseInt((Math.random()*10));
                    let stt="";
                    let add = this.data.slice(abc,abb);
                   add.forEach(item =>{
                            stt +=`<li class="shop">
                                 <div class="pic"><img src="${item.src}"></div>
                                 <p class="pj">${item.title1}</p>
                                 <p>${item.title2}</p>
                                 <span>￥${item.price1}<span>
                            <li>`;
                    })
            $(".tuijian_cont").html(stt);
        }
        Tips(){
           let oli = document.querySelector(".tishi").children;
            for(let i=0;i<oli.length;i++){
                if(i%2==0){
                    oli[i].style.color="red";
                }
            }
            
               
                      $(".help-bottom").click(()=>{
                        $(window).scrollTop(0);
                    })
                
            }
            NUM(){
                let aa=$(".sign").text();
                let abc = localStorage.getItem("user");
                    if(aa == String(abc)){
                        $.ajax({
                            type: "post",
                            url: "./php/num.php",
                            dataType: "json",
                        }).done(data=>{
                            let str=0;
                            for(let i=0;i<data.length;i++){
                                str += data[i].num*1;
                                $(".num").text(str);
                            }
                            // history.go(0)
                        })
                    }
            }
        }
})