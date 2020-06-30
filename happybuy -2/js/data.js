
$(()=>{
$.ajax({
    type:"post",
    url: "./php/data.php",
    dataType: "json"
}).done(data=>{
    new tme(data);
})

class tme{
    constructor(data){
       this.data=data;
       this.Init();
       this.html=null;
    }
    Init(){
        this.Creat();

    }
    Creat(){
        let oul = document.querySelector(".Ul");
        let str="";
        (this.data).forEach(item => {
                   for(let i=0;i<JSON.parse(item.day).length;i++){ 
                str+=`
                    <li class="oli">
                    <strong class="s1">${JSON.parse(item.day)[i]}</strong>
                    <strong class="s2">${JSON.parse(item.chinese)[i]}</strong>
                    </li>
                `
                   }
                   
                });
                $(".Ul").html(str);              
                $(".oli").css({color: "#666",
                padding: "8px 0 0 0",
                cursor: "pointer",
                width: "80px",
               height: "40px",
               display: "block",
                float:"left",
                'text-align':"center"
            })
            $("strong").css({
                display: "block",
                "line-height": "20px",
                "font-size": "14px",
                width:"100%",
                height: "20px"
            })
            $(".Ul").css({
                width: "806px",
                height: "52px",
                position: "absolute",
                left: "16px",
                overflow: "hidden"
            })
            // console.log($(".Ul"))
    }
}
// // new tme;
});