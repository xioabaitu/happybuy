$(()=>{$.ajax({
    type: "post",
    url: "./php/buy.php",
    dataType: "json",
}).done(data=>{
    new shop(data);
})
    class shop{
        constructor(data){
            this.Init();
        }
        Init(){
            this.Creat();
        }
        Creat(){
            let str = "";
            this.data.forEach(item => {
                str = `
                   <div class="cart_item">
                        <div class="p_checkbox">
                            <input type="checkbox" id="cb_s_goods">
                        </div>
                        <div class="p_goods">
                            <div class="goods_item">
                                <div class="p_img">
                                    <a>
                                        <img src="">
                                    </a>
                                </div>
                                <div class="item_msg">
                                    <div class="p_name">
                                        <a>${}</a>
                                    </div>
                                    <div class="discount_info">
                                        ${}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="p_price">
                            <p class="p_prices2">${}</p>
                        </div>
                        <div class="p_quantity">
                            <span></span>
                                <input type="text">
                            <span></span>
                        </div>
                        <div class="p_sum">
                            <strong>
                                <em>${}</em>
                            </strong>
                        </div>
                        <div class="p_ops">
                            <span>删除</span>
                        </div>
                   </div>
                `
            });
        }
    }
})