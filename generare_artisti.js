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

//<div class="letter-group">
//   <div class="letter">A</div>
//   <ul class="names">
//       <li>Alex</li>
//       <li>Andrew</li>
//       <li>Anna</li>
//       <li>12345678901234567890</li>
//   </ul>
// </div>


document.addEventListener("DOMContentLoaded", function () {

    let div = document.getElementsByClassName("container")[0];
    let ult_litera = "?"
    var ul;
    for(let i=0;i<nume_artisti.length;i++)
    {
        if(ult_litera===nume_artisti[i][0])
        {
            let li = document.createElement("li");
            li.textContent = nume_artisti[i];
            add_click_listener(li);
            ul.appendChild(li);
        }
        else
        {
            let new_group = document.createElement("div");
            new_group.setAttribute("class","letter-group");
            ult_litera = nume_artisti[i][0];
            ul = document.createElement("ul");
            ul.setAttribute("class","names");
            let litera = document.createElement("div");
            let h1 = document.createElement("div");
            h1.setAttribute("class","letter");
            h1.textContent = ult_litera;
            new_group.appendChild(h1);
            new_group.appendChild(ul);

            let li = document.createElement("li");
            li.textContent = nume_artisti[i];
            add_click_listener(li);
            ul.appendChild(li);
            div.appendChild(new_group);
        }
    }

});

function add_click_listener(obj){
    obj.addEventListener("click", function(){
        trimite_userul_la_fisierul_selectat(obj.textContent);
    })
}

function trimite_userul_la_fisierul_selectat(valoare_input){
    valoare_input = valoare_input.toLowerCase();
    window.location.href = "./artisti_toti/"+valoare_input+".html";
}