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
                this.Init();
            }
            Init(){
                this.Creat();
               this.Xuan();
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
                console.log(abb.pic);
                
                let str = `
                
                    <div id="bgbox">
                        <div class="box_L">
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
                                <span>-</span><input type="next" ><span>+</span>
                                </div>
                            </div>
                            <div class="Btn">
                                <button>立即购买</button>
                                <button>加入购物车</button>
                            </div>
                        </div>
                    <div>
                `;
                $("#shop").html(str);
                $(".CLea").click(()=>{
                    localStorage.removeItem("detailed");
                })
            }
        }
})