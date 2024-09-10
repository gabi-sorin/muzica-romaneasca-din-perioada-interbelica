const nume_artisti1 = [
    "Alfred Alessandrescu",
    "Alla Baianova",
    "Constantin C. Nottara",
    "Cristian Vasile",
    "Dimitrie Cuclin",
    "Dorel Livianu",
    "Dumitru Kiriac",
    "Elena Zamora",
    "Filip Lazăr",
    "George Enescu",
    "George Sbârcea",
    "Gherase Dendrino",
    "Gică Petrescu",
    "Gion",
    "Grigoraș Dinicu",
    "Ioana Radu",
    "Ion Luican",
    "Ion Nonna Otescu",
    "Ion Vasilescu",
    "Ionel Fernic",
    "Jean Moscopol",
    "Manole Stroici",
    "Maria Tănase",
    "Mia Braia",
    "Nicolae Bretan",
    "Nicu Fănică",
    "Petre Alexandru",
    "Petre Leșcenco",
    "Rodica Bujor",
    "Sile Dinicu",
    "Theodor Rogalski",
    "Tiberiu Brediceanu",
    "Titi Botez",
    "Zavaidoc"
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
    if(nume === "Constantin C. Nottara")
        return "Nottara C. Constantin";
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
    var nume_fam = '';
    var i;
    for( i = 0 ; nume[i]!==' ' && i<nume.length; i++)
    {
        nume_fam += nume[i];
    }

    let restul_nume = '';
    for( i++ ; i < nume.length ; i++)
    {
        restul_nume += nume[i];
    }
    if(restul_nume !== '')
        restul_nume +=' ';

    for( let i = 0; i < nume_artisti1.length ; i++)
    {
        if(has_the_same_words(nume_artisti1[i],restul_nume+nume_fam))
            return nume_artisti1[i];
    }


}

function has_the_same_words(a,b){
    var word;
    word = "";
    for( let i = 0 ; i < a.length ; i++)
    {
        if(a[i]==' ')
        {
            if(cauta_cuvant_in_b(word,b) === false)
                return false;
            word = "";
        }
        else
        word += a[i];
    }
    if(cauta_cuvant_in_b(word,b) === false)
        return false;
    else
        return true;
}

function cauta_cuvant_in_b(cuvant,b){
    var i;
    var cuvant_nou;
    cuvant_nou = "";
    for( i = 0 ; i < b.length ; i++ )
    {
        if(b[i]===' ')
        {
            if(cuvant === cuvant_nou)
                return true;
            cuvant_nou = '';
        }
        else
        cuvant_nou += b[i];
    }
    if(cuvant === cuvant_nou)
        return true;
    else 
        return false;
}

function trimite_userul_la_fisierul_selectat(valoare_input){
    valoare_input = valoare_input.toLowerCase();
    window.location.href = "./artisti_toti/"+valoare_input+".html";
}