const citate = [
    {
        cine: "tip1aaaaaaaaaaaaaaaaaaa",
        citat: "al1"
    },
    {
        cine: "tip2qqqqqqqqqqqqqqqqqqqqqq",
        citat: "al2"
    },
    {
        cine: "tip3qqqqqqqqqqqqqqqqqqqq",
        citat: "al3"
    },
    {
        cine: "tip4",
        citat: "al4aaaaaaaaa aaaaaaaaaaaaaa"
    },
    {
        cine: "tip5",
        citat: "al5aaaaaaaaa aaaaaaaaaaaa aaaaaaaaaaa aaaaaaaaaaaa aaaaaaaaaaa aaaaaaaaaaaa aaaaaaaaaaa"
    },
    {
        cine: "tip6",
        citat: "al6aaaaaaaaaa aaaaaaaaaaaa"
    },
    {
        cine: "tip7",
        citat: "al7aaaaaaaaaa aaaaaaaaaaaaaaa"
    },
    {
        cine: "tip8",
        citat: "al8aaaaaaaaaa aaaaaaaaaaaaaa"
    },
    {
        cine: "tip9",
        citat: "al9aaaaaaaaaaa aaaaaaaaaaaaaaa"
    },
];
//de la cine, citatul propriuzis

document.addEventListener("DOMContentLoaded",function(){
    const area = document.getElementsByClassName("citat_div")[0];
    const citat_area = document.getElementsByClassName('citat_container')[0];
    var p;
    p = document.createElement('p');
    p.setAttribute("class","citat_citat");
    let rand = Math.random() * citate.length; // returneaza [0,1)
    rand = Math.trunc(rand); // converteste in int
    p.textContent = '" ' + citate[rand].citat + ' "';
    citat_area.appendChild(p);

    area.appendChild(document.createElement("br"));

    let x = document.createElement('p');
    x.setAttribute("class","citat_persoana");
    x.textContent = "- " + citate[rand].cine;
    area.appendChild(x);


});