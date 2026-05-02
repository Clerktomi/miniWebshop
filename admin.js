const hozzaadGomb = document.getElementById("hozzaad");

const termekNeve = document.getElementById("nev");
const termekAra = document.getElementById("ar");
const termekLeirasa = document.getElementById("leiras");

let termekekList = localStorage.getItem("termekek");

const TermekekDiv = document.getElementById("Termekek");

hozzaadGomb.addEventListener("click",function(){
    let termekek = localStorage.getItem("termekek");
    if(termekek){
        termekek = JSON.parse(termekek);
        let ujTermek = {nev:termekNeve.value,ar:termekAra.value,leiras:termekLeirasa.value};
        termekek.push(ujTermek);
        localStorage.setItem("termekek",JSON.stringify(termekek));
    } else {
        termekek = [];
        let ujTermek = {nev:termekNeve.value,ar:termekAra.value,leiras:termekLeirasa.value};
        termekek.push(ujTermek);
        localStorage.setItem("termekek",JSON.stringify(termekek));
    }
});