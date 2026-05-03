let cssFix = document.getElementById("cssFix");

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

const KosarTermekek = document.getElementById("KosarTermekek");
const oszfizP = document.getElementById("osszFiz");
const kosarAlert = document.getElementById("kosarAlert");
const MainTable = document.getElementById("MainTable");

let kosar = localStorage.getItem("kosar");

if(kosar){
    kosar = JSON.parse(kosar);
    let oszfizet = 0;
    kosarAlert.textContent="";
    for (let i = 0; i < kosar.length; i++) {
        let ujSor = `
            <tr>
                    <td>${kosar[i].nev}</td>
                    <td>${kosar[i].ar}</td>
                    <td>${kosar[i].db}</td>
                    <td>${(kosar[i].ar*kosar[i].db).toLocaleString('hu-HU')}Ft.</td>
            </tr>
        `;     
        oszfizet+=kosar[i].ar*kosar[i].db;
        KosarTermekek.innerHTML += ujSor;   
    }
    oszfizP.innerHTML = "Fizetendő összesen:  " + `<span class="bold">${oszfizet.toLocaleString('hu-HU')}Ft.</span>`;
    MainTable.style.display = "block";
} else{
    kosarAlert.textContent = "Jelenleg üres a kosara";
    MainTable.style.display = "none";
}