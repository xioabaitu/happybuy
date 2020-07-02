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
        }
        Creat(){
            let str = "";
            this.data.forEach(item => {
               for(let i=0;i<JSON.parse(item.src).length;i++){
                   str +=`<li class="shop" data-id="${i}">
                        <div class="pic"><img src="${JSON.parse(item.src)[i]}"></div>
                        <p class="pj">${JSON.parse(item.title_l)[i]}</p>
                        <p class="js">${JSON.parse(item.title)[i]}</p>
                        <span class="jg">${JSON.parse(item.price)[i]}</span>
                   </li>`
               }
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
        }
        Ran(){
            let abc = parseInt((Math.random()*10)+3);
                let abb = parseInt((Math.random()*3)+1);
                    let stt="";
                    this.data.forEach(item =>{
                        for(let i=abb;i<abc;i++){
                            stt +=`<li class="shop">
                                 <div class="pic"><img src="${JSON.parse(item.src)[i]}"></div>
                                 <p class="pj">${JSON.parse(item.title_l)[i]}</p>
                                 <p>${JSON.parse(item.title)[i]}</p>
                                 <span>${JSON.parse(item.price)[i]}<span>
                            <li>`
                        }
                        
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
           
            }
        }
})