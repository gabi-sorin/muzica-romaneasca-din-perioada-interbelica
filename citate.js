const citate = [
    {
        cine: "Monseniorul Vladimir Ghika",
        citat: "Pe cei care nu-i poţi face să cunoască adevărul, învaţă-i cel puţin să nu-l dispreţuiască."
    },
    {
        cine: "Ion Antonescu",
        citat: "Prefer să mor în mocirlă într-o Românie Mare decât să mor în paradisul unei Românii mici."
    },
    {
        cine: "R. Wurmbrand",
        citat: "Pentru a judeca drept, nu asculta numai toate vocile, ci ascultă şi toate tăcerile."
    },
    {
        cine: "I. Bratianu",
        citat: "Adevarul învinge, indiferent de soarta celor care l-au servit."
    },
    {
        cine: "Mircea Eliade",
        citat: "Noi suntem, sau am fost, unul din puţinele neamuri europene care am experimentat contemplaţia în suferinţă."
    },
    {
        cine: "Valeriu Gafencu",
        citat: "Ce este omul? O fiinţă creată de Dumnezeu din nemărginita iubire a lui Dumnezeu, căreia i-au fost puse în faţă fericirea şi moartea, spre a alege."
    },
    {
        cine: "Mihai Viteazul",
        citat: "O viață avem români…și-o cinste! Deșteptați-vă că am dormit destul!"
    },
    {
        cine: "Ion Antonescu",
        citat: "Viaţa popoarelor este o veşnică şi încordată luptă; o luptă pentru drepturi şi pentru dreptate, o luptă pentru afirmare şi înălţare."
    },
    {
        cine: "Mihai Eminescu",
        citat: "Citește! Citind mereu, creierul tău va deveni un laborator de idei și imagini, din care vei întocmi înțelesul și filosofia vieții."
    },
    {
        cine: "Spiru Haret",
        citat: "Civilizația este fructul unei bătălii neîncetate și în orice bătălie înfrângerea e posibilă, la fel ca și victoria."
    },
    {
        cine: "Nicolae Titulescu",
        citat: "Soarta este scuza celor slabi si opera celor tari."
    },
    {
        cine: "testamentul lui Ion Mogoş",
        citat: "Noi vom muri, la fel ca toţi cei care azi luptă-n munţi. Moartea noastră însă va rămâne o mărturie că neamul acesta s-a opus tiraniei comuniste, că noi am iubit mai mult ca orice libertatea."
    },
    {
        cine: "Fănuş Neagu",
        citat: "Pentru mine, limba română e distanţa dintre inimă şi umbra ei, care se numeşte suflet."
    },
    {
        cine: "Grigore Vieru",
        citat: "Dacă visul unora a fost să ajungă în Cosmos, eu viața întreagă am visat să trec Prutul."
    },
    {
        cine: "Gheorghe Baritiu",
        citat: "Naționalitatea și limba sunt mai scumpe decât libertatea, căci libertatea pierdută se poate recâștiga, dar naționalitatea niciodată."
    },
    {
        cine: "Nicolae Iorga",
        citat: "Un popor care nu își cunoaște istoria este ca un copil care nu își cunoaște părinții."
    },
    {
        cine: "Ion Luca Caragiale",
        citat: "Istoria pentru noi trebuie să fie un izvor nesecat de poezie sănătoasă, un șir de icoane sfinte de unde să căpătăm totdeauna învățătura de adevăr și insuflare de virtute."
    },
    {
        cine: "Mihai Eminescu",
        citat: "Patriotismul nu este numai iubirea pământului în care te-ai născut ci, mai ales, iubirea trecutului, fără de care nu există iubire de țară."
    },
    {
        cine: "Iuliu Maniu",
        citat: "Jur în fața lui Dumnezeu, pe conștiință și onoare că îmi voi jertfi viața pentru triumful cauzei comune românești…!"
    },
    {
        cine: "Mihail Kogalniceanu",
        citat: "Puterea și fericirea unui stat se află în puterea și fericirea mulțimii, adică a nației."
    },
    {
        cine: "A. C. Cuza",
        citat: "Oamenii de geniu sunt făcliile luminoase care se aprind în calea omenirii: fără ei ne-am pierde în întuneric."
    },
    {
        cine: "Dan Puric",
        citat: "Tancurile sovietice ne-au ocupat ţara, comunismul a vrut să ne invadeze şi să ne mutileze sufletele."
    },
    {
        cine: "Emil Cioran",
        citat: "Nu locuim într-o ţară, locuim într-o limbă. Patria asta înseamnă şi nimic altceva."
    },
    {
        cine: "Lucian Blaga",
        citat: "Câteodată, datoria noastră în faţa unui adevărat mister nu e să-l lămurim, ci să-l adâncim aşa de mult, încât să-l prefacem într-un mister şi mai mare."
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
    p.textContent = '"' + citate[rand].citat + '"';
    citat_area.appendChild(p);


    let x = document.createElement('p');
    x.setAttribute("class","citat_persoana");
    x.textContent = "- " + citate[rand].cine;
    area.appendChild(x);


});