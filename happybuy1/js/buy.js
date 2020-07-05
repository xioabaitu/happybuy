$(()=>{$.ajax({
    type: "post",
    url: "./php/buy.php",
    dataType: "json",
}).done(data=>{
    new shop(data);
})
    class shop{
        constructor(data){
            this.data = data;
            this.abf=0;
            this.num=0;
            this.Init();
        }
        Init(){
            this.Creat();
            this.Fun();
            this.Num();
        }
        Creat(){

            let aa=$(".sign").text();
            let abc = localStorage.getItem("user");
                if(aa == String(abc)){
                    $(".register").click(()=>{
                        history.go(0)
                    })
            let str = "";
           for(let i=0;i<this.data.length;i++){
               let abb=JSON.parse(this.data[i].shoppe);
            str += `
            <div class="cart_item" data-id="${this.data[i].shopid}">
                 <div class="cell p_checkbox">
                     <input type="checkbox" class="cb_s_goods">
                 </div>
                 <div class="cell p_goods">
                     <div class="goods_item">
                         <div class="p_img">
                             <a>
                                 <img src="${abb.pic}">
                             </a>
                         </div>
                         <div class="item_msg">
                             <div class="p_name">
                                 <a>${abb.pj}</a>
                             </div>
                             <div class="discount_info">
                                 ${abb.js}
                             </div>
                         </div>
                     </div>
                 </div>
                 <div class="cell p_price">
                     <p class="p_prices2">${abb.jg}</p>
                 </div>
                 <div class="cell p_quantity">
                    <div class="quantity_form">
                     <span class="a_decrease">-</span>
                         <input type="text" class="itxt" value="${this.data[i].num}">
                     <span class="a_add">+</span>
                     </div>
                 </div>
                 <div class="cell p_sum">
                     <strong>
                         <em class="item16190356_subtotal">￥${(abb.jg.slice(1)*1)*(this.data[i].num*1)}</em>
                     </strong>
                 </div>
                 <div class="cell p_ops">
                     <button class="del">删除</botton>
                 </div>
            </div>`
            $(".shop_count").html(str);
        }
    }else{
        alert("请先登录");
    }   
        }
        Fun(){
            let that=this;
            $(".a_decrease").mousemove(function(){
                $(this).css({
                    background:"red",
                    color:"white"
                });                   
            });
            $(".a_decrease").mouseleave(function(){
                $(this).css({
                    background:"#fff",
                    color:"#999"
                });                   
            });
            $(".a_add").mousemove(function(){
                $(this).css({
                    background:"red",
                    color:"white"
                });                   
            });
            $(".a_add").mouseleave(function(){
                $(this).css({
                    background:"#fff",
                    color:"#999"
                });                   
            });
            $(".a_decrease").click(function(){
                let abc = $(this).siblings("input").val();
                let abe = $(this).parents(".cart_item").find(".p_prices2").text().slice(1);
                 let abf = $(this).parents(".cart_item").find(".item16190356_subtotal");
                if(abc>0){
                    abc--;
                    $(this).siblings("input").val(abc);
                }else{
                    abc =0;
                    $(this).siblings("input").val(abc);
                }
                $(abf).text("￥"+abc*abe);

                fn();
            })
            $(".a_add").click(function(){ 
                let abc = $(this).siblings("input").val();
                let abe = $(this).parents(".cart_item").find(".p_prices2").text().slice(1)*1;
                 let abf = $(this).parents(".cart_item").find(".item16190356_subtotal");
                    abc++;
                $(this).siblings("input").val(abc);  
                $(abf).text("￥"+abc*abe);

                fn();
            })
            $(".del").mousedown(function(){
                console.log(this);
                $(this).css({
                    background:"red",
                    color:"white"
                });                   
            });
            $(".del").mouseup(function(){
                $(this).css({
                    background:"#fff",
                    color:"#000"
                });                   
            });
            $(".del").click(function(){
               let ad = $(this).parents(".cart_item").attr("data-id");
               let data={ad}
               $.ajax({
                type: "post",
                url: "./php/del.php",
                data
            }).done(data=>{
                    alert("删除成功");
                    history.go(0);
            })
            })
    }
        Num(){
            let that=this;
            $("#shop_cbox").click(()=>{
            if($("#shop_cbox").is(":checked")){
                $("#ck").prop("checked",true);
                $("#chec").prop("checked",true);
                $(".cb_s_goods").prop("checked",true);
                for(let i=0;i<$(".cb_s_goods").length;i++){
                    let abk =($(".cb_s_goods").eq(i).parents(".cart_item").find(".item16190356_subtotal").text().slice(1))*1;
                    that.abf = that.abf+abk; 
                        $(".Sum_pir").text(that.abf);
                        let abc =($(".itxt").eq(i).val()*1);
                that.num += abc;
                $(".NUM").text(that.num);
            }
            }else{
                $("#ck").prop("checked",false);
                $("#chec").prop("checked",false);
                $(".cb_s_goods").prop("checked",false); 
                that.abf=0;              
                $(".Sum_pir").text(that.abf);
                that.num=0;              
                $(".NUM").text(that.num);
            }
        })
        $("#chec").click(()=>{
            let abf=0;
            if($("#chec").is(":checked")){
                $("#ck").prop("checked",true);
                $("#shop_cbox").prop("checked",true);
                $(".cb_s_goods").prop("checked",true);
                for(let i=0;i<$(".cb_s_goods").length;i++){
                    let abk =($(".cb_s_goods").eq(i).parents(".cart_item").find(".item16190356_subtotal").text().slice(1))*1;
                    that.abf = that.abf+abk; 
                        $(".Sum_pir").text(that.abf);
                        let abc =($(".itxt").eq(i).val()*1);
                that.num += abc;
                $(".NUM").text(that.num);
                }
            }else{
                $("#ck").prop("checked",false);
                $("#shop_cbox").prop("checked",false);
                $(".cb_s_goods").prop("checked",false);
                that.abf=0;        
                $(".Sum_pir").text(that.abf);
                that.num=0;              
                $(".NUM").text(that.num);
            }
        })
        $("#ck").click(()=>{
        if($("#ck").is(":checked")){
            $("#chec").prop("checked",true);
            $("#shop_cbox").prop("checked",true);
            $(".cb_s_goods").prop("checked",true);  
            for(let i=0;i<$(".cb_s_goods").length;i++){
                let abk =($(".cb_s_goods").eq(i).parents(".cart_item").find(".item16190356_subtotal").text().slice(1))*1;
                that.abf = that.abf+abk; 
                $(".Sum_pir").text(that.abf);
                let abc =($(".itxt").eq(i).val()*1);
                that.num += abc;
                $(".NUM").text(that.num);
            }
        }else{
            $("#chec").prop("checked",false);
            $("#shop_cbox").prop("checked",false);
            $(".cb_s_goods").prop("checked",false);
            that.abf=0;              
            $(".Sum_pir").text(that.abf);
            that.num=0;              
                $(".NUM").text(that.num);
        }
    })
    
    $(".cb_s_goods").click(()=>{
        for(let i=0;i<$(".cb_s_goods").length;i++){
            if($(".cb_s_goods").eq(i).is(":checked")){
                $("#ck").prop("checked",true);
                $("#chec").prop("checked",true);
                $("#shop_cbox").prop("checked",true);   
            }else{
                $("#ck").prop("checked",false);
                $("#chec").prop("checked",false);
                $("#shop_cbox").prop("checked",false);
                break;
            }
            
        }
    })
    $(".cb_s_goods").click(function(){
        if($(this).is(":checked")){
            let abk =($(this).parents(".cart_item").find(".item16190356_subtotal").text().slice(1))*1;
            that.abf = that.abf+abk; 
            $(".Sum_pir").text(that.abf);
            let abc =($(this).parents(".cart_item").find(".itxt").val()*1);
            that.num = that.num+abc;
            $(".NUM").text(that.num);
        }
        if(!$(this).is(":checked")){
            let abk =($(this).parents(".cart_item").find(".item16190356_subtotal").text().slice(1))*1;
            that.abf = that.abf-abk; 
            $(".Sum_pir").text(that.abf);
            let abc =($(this).parents(".cart_item").find(".itxt").val()*1);
            that.num = that.num-abc;
            $(".NUM").text(that.num);
        }
        fn();
    })
    
     
        }
    }
})
function fn(){
    let num=0;
    let nnm=0
    Array.from( $(".cart_item")).forEach(item => {
        if($(item).find(".cb_s_goods").is(":checked")){
            let abk = $(item).find(".item16190356_subtotal").text().slice(1)*1;
            num +=abk;
            $(".Sum_pir").text(num);
            let abl = $(item).find(".itxt").val()*1;
            nnm +=abl;
            $(".NUM").text(nnm);
        }
    });
}