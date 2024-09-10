const nume_artisti = [
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
// Sa se adauge toate numele in ordine alfabetica!!!
var sugestii;
var numar_sugestii_adaugate = 0;

var artisti_sortati;
  artisti_sortati = [];

  function sort(lista_nume){
    let lista_sortata1 = [];
    var urmt_nume;
    for( let i = 0 ; i < lista_nume.length ; i++)
    {
        urmt_nume = '÷';
        for( let j = 0 ; j < lista_nume.length ; j++)
        {
            if(lista_sortata1.includes(lista_nume[j]) === false && compara(urmt_nume,lista_nume[j])===lista_nume[j]){
                urmt_nume = lista_nume[j];
            }
        }
        lista_sortata1.push(urmt_nume);
    }
    return lista_sortata1;
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
  const input = document.getElementById("searches-input");

  let lista_nume_corecte = [];
  for(let i = 0; i< nume_artisti.length; i++)
      {
        lista_nume_corecte.push(gaseste_nume_corect(nume_artisti[i]));
      }
  artisti_sortati = sort(lista_nume_corecte);

  document.addEventListener("keydown", function (event) {
    const activeElement = document.activeElement;
    if (
      (activeElement && activeElement.classList.contains("suggestions-li")) ||
      input
    ) {
      switch (event.key) {
        case "ArrowDown":
          event.preventDefault();
          navigateSuggestions(1);
          break;
        case "ArrowUp":
          event.preventDefault();
          navigateSuggestions(-1);
          break;
        case "Enter":
          event.preventDefault(); // foarte important, mi-am pierdut prea mult timp pentru o singura linie adaugata 
          if (activeElement.classList.contains("suggestions-li"))
            selectSuggestion(0);
          else
            selectSuggestion(1);
          break;
        default:
          break;
      }
    }
  });
  document.addEventListener("keyup", function (event) {
    let elemActiv = document.activeElement;
    if (input===elemActiv && event.key != "Enter" && event.key != "ArrowDown" && event.key != "ArrowUp" ) {
      {
        cauta(input.value);
      }
    }
  });


  window.addEventListener('click',function(){
    const activeElement = document.activeElement;
    if (activeElement && activeElement.classList.contains("suggestions-li")) {
        selectSuggestion(0);
    }
    else if(activeElement.className!=="search-input")
      {
        curatare_lista();
      }
  });


});

function navigateSuggestions(direction) {
  const items = document.getElementsByClassName("suggestions-li");
  const activeElement = document.activeElement;

  let index = -1;

  for (let i = 0; i < items.length; i++) {
    if (items[i] === activeElement) {
      index = i;
      break;
    }
  }

  if (index === -1) {
    if (direction === 1)
      //Down
      index = 0;
    else index = items.length - 1;
  } else {
    if (direction === 1) {
      // Down
      index = (index + 1) % items.length; // Wrap around to top if at the bottom
    } else if (direction === -1) {
      // Up
      index = (index - 1 + items.length) % items.length; // Wrap around to bottom if at the top
    }
  }

  // Set focus to the new index and ensure it's visible
  if (items[index]) {
    items[index].focus();
    items[index].scrollIntoView({
      behavior: "smooth",
      block: "nearest", // 'nearest' scrolls only as necessary
    });
  }
}

function selectSuggestion(numar) {
  const input = document.getElementById("searches-input");
  if (numar === 1) {
    var li = document.getElementsByClassName("suggestions-li")[0];
    if(li.textContent === undefined)
        return 0;
    else
      trimite_userul_la_fisierul_selectat(specificare_corecta_a_fisierului(li.textContent));
      curatare_lista();
  } else {
    const activeElement = document.activeElement;
    if (activeElement && activeElement.classList.contains("suggestions-li")) {
      trimite_userul_la_fisierul_selectat(specificare_corecta_a_fisierului(activeElement.textContent));
      curatare_lista(); // Clear suggestions after selection
    }
  }
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

  for( let i = 0; i < nume_artisti.length ; i++)
  {
      if(has_the_same_words(nume_artisti[i],restul_nume+nume_fam))
          return nume_artisti[i];
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
  if(valoare_input === undefined)
    return;
  valoare_input = valoare_input.toLowerCase();
  valoare_input = inlocuieste_diacritice(valoare_input);
  if(window.location.href.includes('/artisti_toti'))
    window.location.href = "./"+valoare_input+".html";
  else
    window.location.href = "./artisti_toti/"+valoare_input+".html";
}

function cauta(searchterm) {
  const suggestionsWrap = document.getElementsByClassName('suggestions-wrap');
  if (suggestionsWrap) {
    suggestionsWrap.scrollTop = 0; //reseteaza scrollbar-ul
  }

  sugestii = [[], []];
  curatare_lista();
  numar_sugestii_adaugate = 0;
  for (let i = 0; i < artisti_sortati.length; i++) {
    let rezultat = in_ce_lista_e_stringul(searchterm, artisti_sortati[i]);
    if (rezultat === 0) sugestii[0].push(artisti_sortati[i]);
    else if (rezultat === 1) sugestii[1].push(artisti_sortati[i]);
  }
  adauga_raspuns();
}

function in_ce_lista_e_stringul(nume1, nume2) {
  nume1 = nume1.toLowerCase();
  nume2 = nume2.toLowerCase();
  let j = 0
  let incepe_cu = true;
  for( let i = 0; i<nume2.length ; i++) //parcurge sugestia
  {
    if(j<nume1.length && (nume2[i] === nume1[j] || inlocuieste_diacritice(nume2[i]) === nume1[j]) )
      j++;
    else if(j<nume1.length)
      incepe_cu = false;
  }
  if(incepe_cu === true)
    return 0;
  else if(j === nume1.length)
    return 1;
  else return 2;

}

function adauga_raspuns() {
  var ul = document.getElementsByClassName("suggestions")[0];
  for (let i = 0; i < 2; i++) {
    for (let j = 0; j < sugestii[i].length; j++, numar_sugestii_adaugate++) {
      var li = document.createElement("li");
      li.setAttribute("class", "suggestions-li");
      li.tabIndex = 0; // Permite focus pe elementul <li>
      var butt = document.createElement("button");
      butt.setAttribute("class", "suggestions-button");
      var scris = document.createElement("a");
      scris.setAttribute("class", "suggestions-a");
      scris.textContent = sugestii[i][j];
      butt.appendChild(scris);
      li.appendChild(scris);
      ul.appendChild(li);
    }
  }
}

function inlocuieste_diacritice(nume){
  let nume_nou = '';
  for(let i = 0; i < nume.length ; i++)
  {
    if(nume[i] === 'ă' || nume[i] === 'â')
      nume_nou +=  'a';
    else if(nume[i] === 'î')
      nume_nou += 'i';
    else if(nume[i] ==='ț')
      nume_nou += 't';
    else if(nume[i] === 'ș')
      nume_nou += 's';
    else
      nume_nou += nume[i];
  }
  return nume_nou;
}

function curatare_lista() {
  var ul = document.getElementsByClassName("suggestions")[0];
  while (ul.firstChild) {
    ul.removeChild(ul.firstChild);
  }
}

