const body = document.body;
function generateTable(){
    const nTable = document.createElement("table");
    for(let i; i<3; i++){
        const nTr = document.createElement("tr");  
        for(let j = 0; j<5; j++){
            const nText = document.createTextNode("Naz");
            const nTd = document.createElement("td");
            nTd.appendChild(nText);
            nTr.appendChild(nTd);
        }
        nTr.appendChild(nTable);
        nTr.setAttribute("border","2");
    }
    body.appendChild(nTable);
}