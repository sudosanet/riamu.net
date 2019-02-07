window.addEventListener("load",load,false);
function load(){
    const dom = document.getElementById("back_yamu");
    const res = window.innerHeight * window.innerWidth;
    //console.log(res);
    dom.style.width = Math.sqrt((window.innerHeight**2)+(window.innerWidth**2)*2*devicePixelRatio)+"px";
    dom.style.height = Math.sqrt((window.innerHeight**2)+(window.innerWidth**2)*2*devicePixelRatio)+"px";
    //const yamu = "やむ";
    //document.getElementById("back_yamu_text").textContent= yamu.repeat(res/100);
    document.getElementById("back_yamu_text").innerHTML=yamuTextGenerate(res);
    teleportB95();
}
function yamuTextGenerate(res){
    let text="";
    for(let i=0;i<(res/50);i++){
        if(Math.random()>0.995){
            if(Math.random()>0.7){
                text += "<span class='proverb'>オタク！ぼくをすこれ！よ！！</span>";
            }
            else {
                text += `<span class='proverb'>夢見りあむ${Math.random()>0.5 ? "19歳": "身長149cm"}でB95!?!?!?!?</span>`;
            }
        }
        else{
            text+="やむ";
        }
    }
    return text;
}

function teleportB95(){
    const dom = document.getElementById("b95");
    dom.style.top = Math.round(Math.random()*window.innerHeight)+"px";
    dom.style.left = Math.round(Math.random()*window.innerWidth)+"px";
}
setInterval(teleportB95, 3000);