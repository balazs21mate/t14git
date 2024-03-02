// 0. Fifa Objectum lista létrehozása
const csapatAdat = [
    "Anglia;4;0;1662",
    "Argentína;10;0;1614",
    "Belgium;1;0;1752",
    "Brazília;3;-1;1719",
    "Chile;17;-3;1576",
    "Dánia;14;-1;1584",
    "Franciaország;2;1;1725",
    "Hollandia;13;3;1586",
    "Horvátország;8;-1;1625",
    "Kolumbia;9;-1;1622",
    "Mexikó;12;0;1603",
    "Németország;16;-1;1580",
    "Olaszország;15;1;1583",
    "Peru;19;0;1551",
    "Portugália;5;1;1643",
    "Spanyolország;7;2;1631",
    "Svájc;11;0;1604",
    "Svédország;18;0;1560",
    "Szenegál;20;0;1546",
    "Uruguay;6;-1;1639"
];


function FifaObjectumListaLétrehozasa(fifaLista) {
    let fifaObjectumLista = [];

    for (const csapat of fifaLista) {
        let fifaSplitLista = csapat.split(";");
        fifaObjectumLista.push({ "nev": fifaSplitLista[0], "helyezes": Number(fifaSplitLista[1]), "valtozas": Number(fifaSplitLista[2]), "pont": Number(fifaSplitLista[3]) });
    }

    return fifaObjectumLista;
}


let fifaObjectumLista = FifaObjectumListaLétrehozasa(csapatAdat);




// 0.1 Event listener létrehozása 
function EventListenerHozzaAdasa(id, kiirato) {
    document.querySelector(id).addEventListener("click", kiirato);
}




// 0.2 Csapatok mutatása táblázatban
function TablazatLetreHozasa(tablazat, csapatokListaja) {
    for (const csapat of csapatokListaja) {
        let adatSor = tablazat.insertRow(1);
        let csapatNev = adatSor.insertCell(0);
        let csapatHelyezes = adatSor.insertCell(1);
        let csapatValtozas = adatSor.insertCell(2);
        let csapatPontSzam = adatSor.insertCell(3);

        csapatNev.innerHTML = csapat.nev;
        csapatHelyezes.innerHTML = csapat.helyezes;
        csapatValtozas.innerHTML = csapat.valtozas;
        csapatPontSzam.innerHTML = csapat.pont;
    }
}


function TablazatTorlese(tablazat, csapatokListaja) {
    for (const csapat of csapatokListaja) {
        tablazat.deleteRow(1);
    }
}


function TablazatParameterekValtoztatasa(tablazat, csapatokListaja) {
    if (tablazat.classList.contains("eltuntet")) {
        tablazat.classList.remove("eltuntet");
        tablazat.classList.add("table");
        TablazatLetreHozasa(tablazat, csapatokListaja);
    } else {
        tablazat.classList.remove("table");
        tablazat.classList.add("eltuntet");
        TablazatTorlese(tablazat, csapatokListaja);
    }
}


function GombParameterekValtoztatasa() {
    let gomb = document.querySelector("#csapatok_mutatasa");

    if (gomb.value === "Csapatok mutatása") {
        gomb.value = "Csapatok elrejtése";
    } else {
        gomb.value = "Csapatok mutatása";
    }
}


function CsapatokKiirasaTablazatba() {
    let table = document.querySelector("#osszes_csapat_kiir");

    GombParameterekValtoztatasa();
    TablazatParameterekValtoztatasa(table, fifaObjectumLista);
}


EventListenerHozzaAdasa("#csapatok_mutatasa", CsapatokKiirasaTablazatba);




// 0.3 Kiir függvény létrehozása

function Kiir(id, szoveg) {
    let h3 = document.querySelector(id);

    h3TagDisplayValtoztatasa(h3);

    h3.innerHTML = szoveg;
}




// 1. Adja meg aktuálisan hány csapat szerepel a ranglistán

function CsapatokSzama(csapatokListaja) {
    return csapatokListaja.length;
}


function h3TagDisplayValtoztatasa(h3tag) {
    if (h3tag.classList.contains("eltuntet")) {
        h3tag.classList.remove("eltuntet");
        h3tag.classList.add("block");
    } else {
        h3tag.classList.remove("block");
        h3tag.classList.add("eltuntet");
    }
}


function CsapatokSzamaKiir() {
    let h3 = document.querySelector("#csapatok_szama_kiir");

    h3TagDisplayValtoztatasa(h3);

    h3.innerHTML = `A Fifa ranglistán szereplő csapatok száma: ${CsapatokSzama(fifaObjectumLista)} csapat.`;
}


EventListenerHozzaAdasa("#csapatok_szama", CsapatokSzamaKiir);




// 2. Írja ki mennyi a résztvevő csapatok átlagpontszáma

function AtlagPontszamSzamitas(csapatokListaja) {
    let pontSzamOsszesen = 0;

    for (const csapat of csapatokListaja) {
        pontSzamOsszesen += csapat.pont;
    }

    return Math.floor(pontSzamOsszesen / csapatokListaja.length);
}


function AtlagPontszamKiir() {
    let atlagPont = AtlagPontszamSzamitas(fifaObjectumLista);

    let h3 = document.querySelector("#atlag_kiir");

    h3TagDisplayValtoztatasa(h3);

    h3.innerHTML = `A Fifa ranglistán szereplő csapatok átlagpontszáma: ${atlagPont} pont.`;
}


EventListenerHozzaAdasa("#atlag", AtlagPontszamKiir);




// 3. Listázza ki azokat a csapatokat, akik az átlagnál több pontot értek el!
//Fejlesztési lehetőség: az eredményeket táblázatos formában jeleníti meg

function AtlagFelettiCsapatokLista(csapatokListaja) {
    let atlagFelettiCsapatokLista = [];

    for (const csapat of csapatokListaja) {
        if (csapat.pont > AtlagPontszamSzamitas(csapatokListaja)) {
            atlagFelettiCsapatokLista.push(csapat);
        }
    }

    return atlagFelettiCsapatokLista;
}


function AtlagFelettiCsapatokKiirasaTablazatba() {
    let table = document.querySelector("#atlag_feletti_csapatok_kiir");

    TablazatParameterekValtoztatasa(table, AtlagFelettiCsapatokLista(fifaObjectumLista));
}


EventListenerHozzaAdasa("#atlag_feletti_csapatok", AtlagFelettiCsapatokKiirasaTablazatba);




// 4. Írja ki a legtöbbet javító csapat adatait: Helyezés, CsapatNeve, Pontszáma

function LegtöbbetJavitoCsapat(csapatokListaja) {
    let valtozas = 0;
    let legtobbetJavitoCsapat = {};

    for (const csapat of csapatokListaja) {
        if (csapat.valtozas > valtozas) {
            valtozas = csapat.valtozas;
            legtobbetJavitoCsapat = csapat;
        }
    }

    return [legtobbetJavitoCsapat];
}

function LegtobbetJavitoCsapatKiirasaTablazatba() {
    let table = document.querySelector("#legtobbet_javito_kiir");

    TablazatParameterekValtoztatasa(table, LegtöbbetJavitoCsapat(fifaObjectumLista));
}


EventListenerHozzaAdasa("#legtobbet_javito", LegtobbetJavitoCsapatKiirasaTablazatba);




// 5. Határozza meg a adatok közöt megtalálható-e Magyarország csapata!
//Fejlesztési lehetőség: Bármely csapatot megnézni, szerepelt-e a listán

function SzerepelE(csapatNev, csapatokListaja) {
    for (const csapat of csapatokListaja) {
        if (csapatNev.toLowerCase() === csapat.nev.toLowerCase()) {
            return true;
        }
    }
}


function CsapatSzereplese() {
    let csapatNev = document.querySelector("#csapat_neve").value;
    let szerepelE;

    if (csapatNev != "") {
        szerepelE = SzerepelE(csapatNev, fifaObjectumLista);
    } else {
        return "Üres mezőt adott meg!";
    }

    if (szerepelE) {
        return `${csapatNev} szerepel a Fifa ranglistáján!`;
    } else {
        return `${csapatNev} nem szerepel a Fifa ranglistáján!`;
    }
}


function CsapatSzerepleseKiir() {
    Kiir("#csapat_szereplese_kiir", CsapatSzereplese());
}


EventListenerHozzaAdasa("#csapat_szereplese", CsapatSzerepleseKiir);




/* 6. Készítsen  statisztikát  a  helyezések  változása  (Valtozas)  alapján  csoportosítva  a  csapatok 
számáról  a  minta  szerint!  Csak  azok  a  helyezésváltozások  jelenjenek  meg  a  képernyőn, 
amelyek esetében a csapatok száma több mint egy volt! A megjelenő csoportok sorrendje 
tetszőleges. 

Fejlesztési lehetőség: az eredményeket táblázatos formában jeleníti meg*/

function SzerepelEValtozas(ellenorzottLista, keresettAdat) {
    let szerepelE = false;

    for (const listaElem of ellenorzottLista) {
        if (keresettAdat === listaElem) {
            szerepelE = true;
        }
    }

    return szerepelE;
}


function ValtozasokSzamaStatisztika(csapatokAdatainakListaja) {
    let valtozasokSzamaLista = [];
    let valtozasokSzamaListaIn = [];
    let valtozasokSzamaObjectLista = [];

    // változások számát külön listába szedni
    for (const csapat of csapatokAdatainakListaja) {
        valtozasokSzamaLista.push(csapat.valtozas)
    }

    // változások számát külön listába szedni ismétlés nélkül
    for (const valtozas of valtozasokSzamaLista) {
        if (!SzerepelEValtozas(valtozasokSzamaListaIn, valtozas)) {
            valtozasokSzamaListaIn.push(valtozas);
        }
    }

    // valtozasokSzamaObjectLista feltöltése
    for (const valtozas of valtozasokSzamaListaIn) {
        valtozasokSzamaObjectLista.push({ "valtozas": valtozas, "darab": 0 })
    }

    // változások megszámlálása
    for (const valtozas of valtozasokSzamaLista) {
        for (const val of valtozasokSzamaObjectLista) {
            if (valtozas === val.valtozas) {
                val.darab++;
            }
        }
    }

    return valtozasokSzamaObjectLista;
}


function TablazatLetreHozasaValtozas(tablazat, valtozasokListaja) {
    for (const valtozas of valtozasokListaja) {
        if (valtozas.darab > 1) {
            let adatSor = tablazat.insertRow(1);
            let csapatValtozas = adatSor.insertCell(0);
            let valtozasDarab = adatSor.insertCell(1);

            csapatValtozas.innerHTML = valtozas.valtozas;
            valtozasDarab.innerHTML = valtozas.darab;
        }
    }
}


function TablazatTorleseValtozas(tablazat, valtozasokListaja) {

    for (const valtozas of valtozasokListaja) {
        if (valtozas.darab > 1) {
            tablazat.deleteRow(1);
        }
    }
}


function TablazatParameterekValtoztatasaValtozas(tablazat, csapatokListaja) {
    if (tablazat.classList.contains("eltuntet")) {
        tablazat.classList.remove("eltuntet");
        tablazat.classList.add("table");
        TablazatLetreHozasaValtozas(tablazat, csapatokListaja);
    } else {
        tablazat.classList.remove("table");
        tablazat.classList.add("eltuntet");
        TablazatTorleseValtozas(tablazat, csapatokListaja);
    }
}


function ValtozasokSzamaStatisztikaKiirasaTablazatba() {
    let table = document.querySelector("#helyezesek_valtozasa_kiir");

    TablazatParameterekValtoztatasaValtozas(table, ValtozasokSzamaStatisztika(fifaObjectumLista));
}


EventListenerHozzaAdasa("#helyezesek_valtozasa", ValtozasokSzamaStatisztikaKiirasaTablazatba);