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

let kosar = localStorage.getItem("kosar");

if(kosar){
    kosar = JSON.parse(kosar);
    for (let i = 0; i < kosar.length; i++) {
        let ujSor = `
            <tr>
                    <td>${kosar[i].nev}</td>
                    <td>${kosar[i].ar}</td>
                    <td>${kosar[i].db}</td>
                    <td>${kosar[i].ar*kosar[i].db}</td>
            </tr>
        `;     
        KosarTermekek.innerHTML += ujSor;   
    }
}