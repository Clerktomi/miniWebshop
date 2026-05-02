const hozzaadGomb = document.getElementById("hozzaad");

const termekNeve = document.getElementById("nev");
const termekAra = document.getElementById("ar");
const termekLeirasa = document.getElementById("leiras");
const elerhetoTermekek = document.getElementById("elerhetoTermekek");
const adminTermekek = document.getElementById("adminTermekek");

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
                                <button class="btn btn-warning w-50">Módosít</button>
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
    let termekek = localStorage.getItem("termekek");
    if(termekek){
        termekek = JSON.parse(termekek);
        termekek.splice(i,1)
        localStorage.setItem("termekek",JSON.stringify(termekek));
        location.reload();
    }
}