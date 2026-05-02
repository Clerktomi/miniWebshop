const vilagosTema = document.getElementById("vilagosTema");
const sotetTema = document.getElementById("sotetTema");

localStorage.setItem("tema","vilagos");

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
