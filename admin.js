const hozzaadGomb = document.getElementById("hozzaad");

const termekNeve = document.getElementById("nev");
const termekAra = document.getElementById("ar");
const termekLeirasa = document.getElementById("leiras");
const elerhetoTermekek = document.getElementById("elerhetoTermekek");
const adminTermekek = document.getElementById("adminTermekek");
const TermekModosit = document.getElementById("TermekModosit");

let termekekList = localStorage.getItem("termekek");
const TermekekDiv = document.getElementById("Termekek");

hozzaadGomb.addEventListener("submit",function(even){
    even.preventDefault();
    let termekek = localStorage.getItem("termekek");
    if(termekek){
        termekek = JSON.parse(termekek);
        elerhetoTermekek.style.display = "block";
        let ujTermek = {nev:termekNeve.value,ar:termekAra.value,leiras:termekLeirasa.value,i:termekek.length};
        termekek.push(ujTermek);
        localStorage.setItem("termekek",JSON.stringify(termekek));
        location.reload();
    } else {
        termekek = [];
        elerhetoTermekek.style.display = "none";
        let ujTermek = {nev:termekNeve.value,ar:termekAra.value,leiras:termekLeirasa.value,i:termekek.length};
        termekek.push(ujTermek);
        localStorage.setItem("termekek",JSON.stringify(termekek));
        location.reload();
    }
});

let termekek = localStorage.getItem("termekek");
    if(termekek){
        termekek = JSON.parse(termekek);
        for (let i = 0; i < termekek.length; i++) {
            let ujTableSor = `
                <tr>
                    <td>${termekek[i].nev}</td>
                    <td>${termekek[i].ar}</td>
                    <td>${termekek[i].leiras}</td>
                    <td>
                        <div class="row p-2 g-2">
                            <div class="col-6">
                                <button class="btn btn-danger w-50" onclick="torolGomb('torol${termekek[i].i}', ${termekek[i].i})">törlés</button>
                            </div>
                            <div class="col-6">
                                <button class="btn btn-warning w-50" onclick="modositGomb('modosit${termekek[i].i}', ${termekek[i].i})" id="modosit${termekek[i].i}">Módosít</button>
                            </div>
                        </div>
                    </td>
                </tr>
            `;
            adminTermekek.innerHTML += ujTableSor;    
            
        }
        elerhetoTermekek.style.display = "block";
    } else {
        elerhetoTermekek.style.display = "none";
    }

function torolGomb(gombID,i){
    alert(i);
    let termekek = localStorage.getItem("termekek");
    if(termekek){
        termekek = JSON.parse(termekek);
        termekek.splice(i,1)

        let uj = []

        for (let i = 0; i < termekek.length; i++) {
            let ujTermek = {nev:termekek[i].nev,ar:termekek[i].ar,leiras:termekek[i].leiras,i:i};
            uj.push(ujTermek);
        }
        localStorage.setItem("termekek",JSON.stringify(uj));
        location.reload();
    } else{

    }
}

let alapModositGomb = "";
let alapModositI = 0;

function modositGomb(gombID,i){
    TermekModosit.style.display = "block";
    alapModositI = i;
    alapModositGomb = gombID;
}

    document.getElementById("modositkuld").addEventListener("submit",function(even){
        
        let ujNev = document.getElementById("Ujnev").value;
        let Ujar = document.getElementById("Ujar").value;
        let Ujleiras = document.getElementById("Ujleiras").value;

        let termekek = localStorage.getItem("termekek");
        if(termekek){
            termekek = JSON.parse(termekek);
            termekek[alapModositI].nev = ujNev;
            termekek[alapModositI].ar = Ujar;
            termekek[alapModositI].leiras = Ujleiras;
        }
        localStorage.setItem("termekek",JSON.stringify(termekek));
        location.reload();
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