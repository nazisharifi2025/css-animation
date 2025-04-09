const body = document.body;
function generateTable(){
    const nTable = document.createElement("table");
    for(let i = 0; i<3; i++){
        const nTr = document.createElement("tr");  
        for(let j = 0; j<5; j++){
            const nText = document.createTextNode("Naz");
            const nTd = document.createElement("td");
            nTd.appendChild(nText);
            nTr.appendChild(nTd);
        }
        nTable.appendChild(nTr);
        nTable.setAttribute("border","2");
        nTable.setAttribute("width","100%");
        nTable.setAttribute("height","200px")
    }
    body.appendChild(nTable);
}
function genenerateLink(){
    const newLink = document.createTextNode("BBC");
const newHref = document.createElement("a");
newHref.setAttribute("href","https://www.bbc.com");
newHref.appendChild(newLink);
body.appendChild(newHref);
}