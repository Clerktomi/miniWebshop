const vilagosTema = document.getElementById("vilagosTema");
const sotetTema = document.getElementById("sotetTema");

let temak = localStorage.getItem("tema");
if(temak){
    if(temak==="vilagos"){
            let temak = document.getElementsByClassName("cssFix");
            for (let i = 0; i < temak.length; i++) {
                temak[i].href = "style.css";
            }
        }
        else if(temak==="sotet"){
            let temaks = document.getElementsByClassName("cssFix");
            for (let i = 0; i < temaks.length; i++) {
                temaks[i].href = "style2.css";
            }
        }
}

vilagosTema.addEventListener("click",function(){
    if(vilagosTema.checked){
        localStorage.setItem("tema","vilagos");
        cssFix.href="style.css";
    }
});

sotetTema.addEventListener("click",function(){
    if(sotetTema.checked){
        localStorage.setItem("tema","sotet");
        cssFix.href="style2.css";
    }
});

setInterval(() => {
    let tema = localStorage.getItem("tema");
    if(tema){
        if(tema==="vilagos"){
            let temak = document.getElementsByClassName("cssFix");
            for (let i = 0; i < temak.length; i++) {
                temak[i].href = "style.css";
            }
        }
        else if(tema==="sotet"){
            let temak = document.getElementsByClassName("cssFix");
            for (let i = 0; i < temak.length; i++) {
                temak[i].href = "style2.css";
            }
        }
    }
}, 1000);