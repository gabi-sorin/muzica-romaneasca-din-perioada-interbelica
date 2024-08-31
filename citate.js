const citate = [
    {
        cine: "tip1",
        citat: "al1"
    },
    {
        cine: "tip2",
        citat: "al2"
    },
    {
        cine: "tip3",
        citat: "al3"
    },
    {
        cine: "tip4",
        citat: "al4"
    },
    {
        cine: "tip5",
        citat: "al5"
    },
    {
        cine: "tip6",
        citat: "al6"
    },
    {
        cine: "tip7",
        citat: "al7"
    },
    {
        cine: "tip8",
        citat: "al8"
    },
    {
        cine: "tip9",
        citat: "al9"
    },
];
//de la cine, citatul propriuzis

document.addEventListener("DOMContentLoaded",function(){
    const area = document.getElementsByClassName("writable_space")[0];
    var p;
    p = document.createElement('p');
    p.setAttribute("class","citat_citat");
    let rand = Math.random() * citate.length; // returneaza [0,1)
    rand = Math.trunc(rand); // converteste in int
    p.textContent = '" ' + citate[rand].citat + ' "';
    area.appendChild(p);

    area.appendChild(document.createElement("br"));

    let p_ = document.createElement('p');
    p_.setAttribute("class","citat_persoana");
    p_.textContent = "- " + citate[rand].cine;
    area.appendChild(p_);


});