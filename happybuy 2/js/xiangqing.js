$(()=>{$.ajax({
        type: "post",
        url: "./php/list.php",
        dataType: "json",
    }).done(data=>{
        new lis(data);
    })

        class lis{
            constructor(data){
                this.data = data;
                this.pic=null;
                this.pj = null;
                this.js = null;
                this.jg = null;
                this.Id=null;
                this.Init();
            }
            Init(){
                this.Creat();
               this.Xuan();
               this.addEvent();
               this.Inpu();
               this.Save();
            }
            Creat(){
                let that = this;
                let str={};
                let abc = $(".footer_cont").children("li");

                Array.from(abc).forEach(item => { 
                            item.onclick = function(){

                               that.pj = this.querySelector(".pj").innerText;
                               that.js = this.querySelector(".js").innerText;
                              that.pic=this.querySelector(".pic img").src;
                              that.jg=this.querySelector(".jg").innerText;
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
            Xuan(){
                let aaa=localStorage.getItem("detailed");
                let abb = JSON.parse(aaa);
                if(abb.pic !== null){
                    let str = `
                    <div id="bgbox">
                        <div class="box_L">
                            <img src="${abb.pic}">
                            <span></span>
                        </div>
                        <div class="b_box">
                        <img src="${abb.pic}">
                        </div>
                        <div class="box_R">
                            <h2>${abb.js}</h2>
                            <h3>${abb.pj}</h3>
                            <div class="happy">
                                <em>快乐价</em>
                                <span>${abb.jg}</span>
                            </div>
                            <div class="yf">
                                <em>运费</em>
                                <span>包邮</span>
                            </div>
                            <div class="Color">
                                <em>颜色</em>
                                <span>默认</span>
                            </div>
                            <div class="Size">
                                <em>尺码</em>
                                <span>默认</span>
                            </div>
                            <div class="Num">
                                <em>数量</em>
                                <div class="Num_N">
                                <span class="jian">-</span><input type="text" id="shu"><span class="jia">+</span>
                                </div>
                            </div>
                            <div class="Btn">
                                <button>立即购买</button>
                                <button class="BTN">加入购物车</button>
                            </div>
                        </div>
                    <div>
                `;
                $("#shop").html(str);
                $(".CLea").click(()=>{
                    localStorage.removeItem("detailed");
                    localStorage.removeItem("num");
                })
                }
            }
            addEvent(){
                var that = this;
                    $(".box_L").mouseover(function(){
                        that.over();
                    })
                    $(".box_L").mouseout(function(){
                        that.out();
                    })
                    $(".box_L").mouseover(function(eve){
                        let e = eve || window.event;
                        that.move(e);
                    })
                }
                over(){
                    this.Sbox = document.querySelector(".box_L");
                    this.Simg = document.querySelector(".box_L img");
                    this.span = document.querySelector(".box_L span");
                    this.Bbox = document.querySelector(".b_box");
                    this.Bimg = document.querySelector(".b_box img");
                    this.span.style.display = "block";
                    this.Bbox.style.display = "block";
        
                    // span宽高比例：根据右侧大图和显示区域计算得来
                    var spanW = this.Bimg.offsetWidth / this.Bbox.offsetWidth;
                    var spanH = this.Bimg.offsetHeight / this.Bbox.offsetHeight;
                    // console.log(spanW,spanH)
                    // 根据宽高比例，设置span的真正宽高
                    this.span.style.width = this.Sbox.offsetWidth / spanW + "px";
                    this.span.style.height = this.Sbox.offsetHeight / spanH + "px";
                }
                out(){
                    this.span.style.display = "none";
                    this.Bbox.style.display = "none";
                }
                move(e){
                    var l = e.pageX - this.Sbox.offsetLeft - this.span.offsetWidth/2;
                    var t = e.pageY - 245 - this.span.offsetHeight/2;
                    if(l<0) l=0;    
                    if(t<0) t=0;  
                    if(l > this.Sbox.offsetWidth - this.span.offsetWidth){
                        l = this.Sbox.offsetWidth - this.span.offsetWidth;
                    }
                    if(t > this.Sbox.offsetHeight - this.span.offsetHeight){
                        t = this.Sbox.offsetHeight - this.span.offsetHeight;
                    }
                    this.span.style.left = l + "px";
                    this.span.style.top = t + "px";
                    var x = l / (this.Sbox.offsetWidth - this.span.offsetWidth);
                    var y = t / (this.Sbox.offsetHeight - this.span.offsetHeight);
                    this.Bimg.style.left = x * (this.Bbox.offsetWidth - this.Bimg.offsetWidth) + "px";
                    this.Bimg.style.top =  y * (this.Bbox.offsetHeight - this.Bimg.offsetHeight) + "px";
                }
                Inpu(){
                    let ab=1;
                    $("#shu").val(ab);
                    $(".jian").click(()=>{
                        if(ab<0){
                            ab=0;
                        }else{
                            $("#shu").val(ab--);
                    localStorage.setItem("num",$("#shu").val());

                        }
                    });
                    $(".jia").click(()=>{
                            $("#shu").val(ab++);
                            localStorage.setItem("num",$("#shu").val());
                        })
                        localStorage.setItem("num",$("#shu").val());
                }
                Save(){
                    $("#buy").click(()=>{
                        let aa=$(".sign").text();
                        let abc = localStorage.getItem("user");
                        if(aa == String(abc)){
                            location.href = "buy.html";
                        }else{
                            location.href= "login.html";
                            
                        }
                    })
                    $(".BTN").click(()=>{
                       let abd=JSON.parse(localStorage.getItem("detailed"));
                        let abf=localStorage.getItem("num");
                        let shopid = abd.Id;
                        let detailed = JSON.stringify(abd);
                        let data = {
                            detailed,
                            num:abf,
                            shopid
                        }
                        
                    let aa=$(".sign").text();
                    let abc = localStorage.getItem("user");
                        if(aa == String(abc)){
                            $.ajax({
                                url:"./php/save.php",
                                data,
                                dataType: "json",
                            }).done(data => {
                                if (data.status == "success") {
                                    alert("加入成功!");
                                    location.href = "happybuy.html";
                                }else {
                                    alert(data.msg);
                                }
                            })  
                        }else{
                            alert("加入失败，请先登录！")
                            location.href= "login.html";
                        }   
                        
                        
                        
                    })
                }
            }
})