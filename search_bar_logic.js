const nume_artisti = [
  "Alfred Alessandrescu",
  "Alla Baianova",
  "Constantin C. Nottara",
  "Cristian Vasile",
  "Dimitrie Cuclin",
  "Dorel Livianu",
  "Dumitru Kiriac Georgescu",
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
  "Nicu Stoenescu",
  "Petre Alexandru",
  "Petre Lescenco",
  "Rodica Bujor",
  "Sile Dinicu",
  "Theodor Rogalski",
  "Tiberiu Brediceanu",
  "Titi Botez",
  "Zavaidoc",
];
// Sa se adauge toate numele in ordine alfabetica!!!
var sugestii;
var numar_sugestii_adaugate = 0;

document.addEventListener("DOMContentLoaded", function () {
  const input = document.getElementById("searches-input");


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
          selectSuggestion(1);
          break;
        default:
          break;
      }
    }
  });
  document.addEventListener("keyup", function (event) {
    if (input && event.key != "Enter" && event.key != "ArrowDown" && event.key != "ArrowUp" ) {
      {
        select_size(1);
        cauta(input.value);
      }
    }
  });

  parent.document.addEventListener("click", function () {
    const activeElement = document.activeElement;
    if(activeElement.className!=="search-input")
      {
        curatare_lista();
        select_size(0);
      }
  });


  window.addEventListener('click',function(){
    const activeElement = document.activeElement;
    if (activeElement && activeElement.classList.contains("suggestions-li")) {
        selectSuggestion(0);
    }
  });

  let ul = document.getElementsByClassName("suggestions-wrap")[0];

  document.addEventListener("scroll",function(){

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
      trimite_userul_la_fisierul_selectat(inlocuieste_diacritice(li.textContent));
      curatare_lista();
  } else {
    const activeElement = document.activeElement;
    if (activeElement && activeElement.classList.contains("suggestions-li")) {
      trimite_userul_la_fisierul_selectat(inlocuieste_diacritice(activeElement.textContent));
      curatare_lista(); // Clear suggestions after selection
    }
  }
}

function trimite_userul_la_fisierul_selectat(valoare_input){
  valoare_input = valoare_input.toLowerCase();
  window.parent.location.href = "./artisti_toti/"+valoare_input+".html";
}

function cauta(searchterm) {
  const suggestionsWrap = document.getElementsByClassName('suggestions-wrap');
  if (suggestionsWrap) {
    suggestionsWrap.scrollTop = 0; //reseteaza scrollbar-ul
  }

  sugestii = [[], []];
  curatare_lista();
  numar_sugestii_adaugate = 0;
  for (let i = 0; i < nume_artisti.length; i++) {
    let rezultat = in_ce_lista_e_stringul(searchterm, nume_artisti[i]);
    if (rezultat === 0) sugestii[0].push(nume_artisti[i]);
    else if (rezultat === 1) sugestii[1].push(nume_artisti[i]);
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
      nume_nou.push('i');
    else if(nume[i] ==='ț')
      nume_nou.push('t');
    else if(nume[i] === 'ș')
      nume_nou.push('s');
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

function grow_iframe(input)
{
  select_size(1);
  cauta(input);
}

function select_size(nr){
  if(window.parent.document.URL.includes("/artisti.html"))
    window.parent.change(nr);
}