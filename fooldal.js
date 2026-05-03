let termekekList = localStorage.getItem("termekek");

const TermekekDiv = document.getElementById("Termekek");
const alertP = document.getElementById("alertP");

if(termekekList){
    termekekList = JSON.parse(termekekList);
    for (let i = 0; i < termekekList.length; i++) {
        let ujDoboz = `
        <div class="col-md-4 mb-4 d-flex">
            <div class="doboz p-3 d-flex flex-column w-100">
                    <h2>${termekekList[i].nev}</h2>
                    <hr>
                    <h4>${termekekList[i].ar} Ft</h4>
                    <p class="flex-grow-1">${termekekList[i].leiras}</p>
                    <button class="btn btn-primary mt-auto w-50" id="vasarlas${termekekList[i].i}" onclick="termekVasarol('vasarol${termekekList[i].i}', ${termekekList[i].i});KosarFrissit()">
                        Vásárlás
                    </button>
            </div>
        </div>
        `;
        TermekekDiv.innerHTML += ujDoboz;
    }

} else{
    termekekList = [];
}

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

function termekVasarol(id, i) {
    let kosar = localStorage.getItem("kosar");
    let termekek = localStorage.getItem("termekek");

    termekek = JSON.parse(termekek);
    kosar = kosar ? JSON.parse(kosar) : [];

    let szerepel = false;

    for (let y = 0; y < kosar.length; y++) {
        if (kosar[y].i === i) {
            kosar[y].db++;
            szerepel = true;
            break;
        }
    }

    if (!szerepel) {
        let ujtermek = {
            nev: termekek[i].nev,
            ar: Number(termekek[i].ar),
            db: 1,
            leiras: termekek[i].nev,
            i: i
        };

        kosar.push(ujtermek);
    }

    localStorage.setItem("kosar", JSON.stringify(kosar));
}

const TermekekSzama = document.getElementById("TermekekSzama");

    let kosar = localStorage.getItem("kosar");

    if(kosar){
        kosar = JSON.parse(kosar);
        TermekekSzama.textContent = kosar.length;
    }

function KosarFrissit(){
    const TermekekSzama = document.getElementById("TermekekSzama");

    let kosar = localStorage.getItem("kosar");
    let oDB = 0;
    if(kosar){
        kosar = JSON.parse(kosar);
        for (let i = 0; i < kosar.length; i++) {
            oDB+=kosar[i].db;
        }
    }
    TermekekSzama.textContent = oDB;
}

KosarFrissit();