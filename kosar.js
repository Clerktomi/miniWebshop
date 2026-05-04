let cssFix = document.getElementById("cssFix");


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
                    <td>${Number(kosar[i].ar).toLocaleString('hu-HU')}Ft.</td>
                    <td>${kosar[i].db}</td>
                    <td>${(kosar[i].ar*kosar[i].db).toLocaleString('hu-HU')}Ft.</td>
                    <td class="p-2">
                            <button class="btn btn-danger" id="kosar${kosar[i].i}" onclick="KosarTorol(${i})">Törlés</button>
                    </td>
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

function KosarTorol(i){
    let kosar = localStorage.getItem("kosar");

    if(kosar){
        // alert(i)
        kosar = JSON.parse(kosar);
        kosar.splice(i,1);
        localStorage.setItem("kosar",JSON.stringify(kosar));
        location.reload();
    } else{
        kosar = [];
        localStorage.setItem("kosar",JSON.stringify(kosar));
        location.reload();
    }
}