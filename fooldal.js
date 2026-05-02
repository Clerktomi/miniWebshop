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
                <button class="btn btn-primary mt-auto" id="vasarlas${termekekList[i].i}">
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