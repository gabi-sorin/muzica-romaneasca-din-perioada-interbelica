const nume_artisti1 = [
    "Alfred Alessandrescu",
    "Alla Baianova",
    "C. Constantin Nottara",
    "Cristian Vasile",
    "Dimitrie Cuclin",
    "Dorel Livianu",
    "Dumitru Kiriac",
    "Elena Zamora",
    "Filip Lazar",
    "George Enescu",
    "George Sbarcea",
    "Gherase Dendrino",
    "Gica Petrescu",
    "Gion",
    "Grigoras Dinicu",
    "Ioana Radu",
    "Ion Luican",
    "Ion Nonna Otescu",
    "Ion Vasilescu",
    "Ionel Fernic",
    "Jean Moscopol",
    "Manole Stroici",
    "Maria Tanase",
    "Mia Braia",
    "Nicolae Bretan",
    "Nicu Fanica",
    "Petre Alexandru",
    "Petre Lescenco",
    "Rodica Bujor",
    "Sile Dinicu",
    "Theodor Rogalski",
    "Tiberiu Brediceanu",
    "Titi Botez",
    "Zavaidoc",
  ];

  var artisti_sortati;
  artisti_sortati = [];

  function sort(lista_nume){
    let lista_sortata = [];
    var urmt_nume;
    for( let i = 0 ; i < lista_nume.length ; i++)
    {
        urmt_nume = '÷';
        for( let j = 0 ; j < lista_nume.length ; j++)
        {
            if(lista_sortata.includes(lista_nume[j]) === false && compara(urmt_nume,lista_nume[j])===lista_nume[j]){
                urmt_nume = lista_nume[j];
            }
        }
        lista_sortata.push(urmt_nume);
    }
    return lista_sortata;
  }

  function compara(a,b){
    let min = a.length;
    if(b.length < a.length)
        min = b.length;
    for(let i = 0; i < min ; i++)
    {
        if(a[i]<b[i])
            return a;
        else if(b[i]<a[i])
            return b;
    }
    if(a.length>b.length)
        return b;
    else 
        return a;
  }

  function gaseste_nume_corect(nume){
    let nume_familie_posibil = '';
    let restul_numelui = '';
    for( let i = 0; i < nume.length ; i++ )
    {
        if(nume[i]===' ')
        {
            restul_numelui +=' ' + nume_familie_posibil;
            nume_familie_posibil = '';
        }
        else
        nume_familie_posibil += nume[i];
    }
    return nume_familie_posibil + restul_numelui;
  }

document.addEventListener("DOMContentLoaded", function () {

    let lista_nume_corecte = [];
    for(let i = 0; i< nume_artisti1.length; i++)
        {
          lista_nume_corecte.push(gaseste_nume_corect(nume_artisti1[i]));
        }
    artisti_sortati = sort(lista_nume_corecte);


    let div = document.getElementsByClassName("container")[0];
    let ult_litera = "?"
    var ul;
    for(let i=0;i<artisti_sortati.length;i++)
    {
        if(ult_litera===artisti_sortati[i][0])
        {
            let li = document.createElement("li");
            li.textContent = artisti_sortati[i];
            li.setAttribute("class","names_li");
            add_click_listener(li);
            ul.appendChild(li);
        }
        else
        {
            let new_group = document.createElement("div");
            new_group.setAttribute("class","letter-group");
            ult_litera = artisti_sortati[i][0];
            ul = document.createElement("ul");
            ul.setAttribute("class","names");
            let litera = document.createElement("div");
            let h1 = document.createElement("div");
            h1.setAttribute("class","letter");
            h1.textContent = ult_litera;
            new_group.appendChild(h1);
            new_group.appendChild(ul);

            let li = document.createElement("li");
            li.textContent = artisti_sortati[i];
            li.setAttribute("class","names_li");
            add_click_listener(li);
            ul.appendChild(li);
            div.appendChild(new_group);
        }
    }

});

function add_click_listener(obj){
    obj.addEventListener("click", function(){
        trimite_userul_la_fisierul_selectat(specificare_corecta_a_fisierului(obj.textContent));
    })
}

function specificare_corecta_a_fisierului(nume){
    var nume_fam = [];
    for( let i = 0 ; nume[i]!==' ' && i<nume.length ; i++)
    {
        nume_fam += nume[i];
    }
    // daca e nevoie, adg si restul numelui

    for( let i = 0; i < nume_artisti1.length ; i++)
    {
        if(nume_artisti1[i].includes(nume_fam) === true)
            return nume_artisti1[i];
    }


}

function trimite_userul_la_fisierul_selectat(valoare_input){
    valoare_input = valoare_input.toLowerCase();
    window.location.href = "./artisti_toti/"+valoare_input+".html";
}