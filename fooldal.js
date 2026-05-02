let termekekList = localStorage.getItem("termekek");

const TermekekDiv = document.getElementById("Termekek");

if(termekekList){
    termekekList = JSON.parse(termekekList);
    for (let i = 0; i < termekekList.length; i++) {
        let ujDoboz = `
        <div class="col-4">
            <div class="doboz p-2">
                <h2>${termekekList[i].nev}</h2>
                <hr>
                <h4>${termekekList[i].ar}Ft.</h4>
                <p>${termekekList[i].leiras}</p>
            </div>
        </div>
        `;
        TermekekDiv.innerHTML += ujDoboz;
        
    }

} else{
    termekekList = [];
}

setInterval(() => {
    location.reload();
}, 20000);