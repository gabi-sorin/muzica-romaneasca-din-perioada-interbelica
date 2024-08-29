const nume_artisti = [
    "Alia Baianova",
    "Cristian Vasile",
    "Dorel Livianu",
    "Elena Zamora",
    "Elly Roman",
    "George Enescu",
    "George Sbarcea",
    "Gherase Dendrino",
    "Gica Petrescu",
    "Gion",
    "Ioana Radu",
    "Ion Luican",
    "Ion Vasilescu",
    "Ionel Fernic",
    "Jean Moscopol",
    "Manole Stroici",
    "Maria Tanase",
    "Mia Braia",
    "Nicu Stoenescu",
    "Petre Alexandru",
    "Rodica Bujor",
    "Titi Botez",
    "Zavaidoc",
  ];

addEventListener("DOMContentLoaded", function () {

    let div = document.getElementsByClassName("partea_cu_artisti")[0];
    let ult_litera = "?"
    var ul;
    for(let i=0;i<nume_artisti.length;i++)
    {
        let x = nume_artisti[i][0];
        if(ult_litera===nume_artisti[i][0])
        {
            let li = document.createElement("li");
            li.setAttribute("class","artisti_li");
            li.textContent = nume_artisti[i];
            ul.appendChild(li);
        }
        else
        {
            ult_litera = nume_artisti[i][0];
            ul = document.createElement("ul");
            ul.setAttribute("class","artisti_ul");
            let h1 = document.createElement("h1");
            h1.setAttribute("class","artisti_h1");
            h1.textContent = nume_artisti[i][0];
            div.appendChild(h1);
            div.appendChild(ul);

            let li = document.createElement("li");
            li.setAttribute("class","artisti_li");
            li.textContent = nume_artisti[i];
            li.addEventListener("click", function(){
                trimite_userul_la_fisierul_selectat(li.textContent);
            })
            ul.appendChild(li);
        }
    }

});

function trimite_userul_la_fisierul_selectat(valoare_input){
    valoare_input = valoare_input.toLowerCase();
    window.location.href = "./artisti/"+valoare_input+".html";
}