window.addEventListener("load", load, false);
function load() {
    const dom = document.getElementById("back_yamu");
    const res = window.innerHeight * window.innerWidth;
    //console.log(res);
    dom.style.width = Math.sqrt((window.innerHeight ** 2) + (window.innerWidth ** 2) * 2 * devicePixelRatio) + "px";
    dom.style.height = Math.sqrt((window.innerHeight ** 2) + (window.innerWidth ** 2) * 2 * devicePixelRatio) + "px";
    //const yamu = "やむ";
    //document.getElementById("back_yamu_text").textContent= yamu.repeat(res/100);
    document.getElementById("back_yamu_text").innerHTML = yamuTextGenerate(res);
    teleportB95();
}
function yamuTextGenerate(res) {
    let text = "";
    for (let i = 0; i < (res / 50); i++) {
        if (Math.random() > 0.995) {
            if (Math.random() > 0.7) {
                text += "<span class='proverb'>オタク！ぼくをすこれ！よ！！</span>";
            }
            else {
                text += `<span class='proverb'>夢見りあむ${Math.random() > 0.5 ? "19歳" : "身長149cm"}でB95!?!?!?!?</span>`;
            }
        }
        else {
            text += "やむ";
        }
    }
    return text;
}
let nextNumber = 0;
function teleportB95() {
    const dom = document.getElementById("b95");
    //dom.style.top = Math.round(Math.random() * window.innerHeight) + "px";
    //dom.style.left = Math.round(Math.random() * window.innerWidth) + "px";

    //B95の方向は４パターンある。上下左右。しかし直前の状態ではないものになるため実質的に飛ぶ方向は３つである
    const availableNumbers = [...Array(4).keys()].filter(m => m != nextNumber);
    nextNumber = availableNumbers[Math.round(Math.random() * (availableNumbers.length-1))];
    let top, left;
    switch (nextNumber) {
        case 0:
            top = -20;
            left = Math.round(Math.random() * (window.innerWidth-139));
            break;
        case 1:
            top = window.innerHeight-76;
            left = Math.round(Math.random() * (window.innerWidth-139));
            break;
        case 2:
            top = Math.round(Math.random() * window.innerHeight)-76;
            left = 0;
            break;
        case 3:
            top = Math.round(Math.random() * window.innerHeight)-76;
            left = window.innerWidth-139;
            break;
    }
    //console.log(top+","+left+","+nextNumber+","+availableNumbers);
    dom.style.top = top+"px";
    dom.style.left = left+"px";
}
setInterval(teleportB95, 1500);