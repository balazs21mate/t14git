// 0. Objectum lista készítése a megadott lista alapján

let FifaObjectLista = () => {
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
    let csapatAdatObjectLista = [];

    for (const csapat of csapatAdat) {
        let csapatAdatokTomb = csapat.split(";");
        csapatAdatObjectLista.push({ "nev": csapatAdatokTomb[0], "helyezes": Number(csapatAdatokTomb[1]), "valtozas": Number(csapatAdatokTomb[2]), "pont": Number(csapatAdatokTomb[3]) });
    }

    return csapatAdatObjectLista;
}

// 1. Adja meg aktuálisan hány csapat szerepel a ranglistán

function CsapatokSzama(csapatokAdatainakListaja) {
    document.write(`Aktuális csapat létszám: ${csapatokAdatainakListaja.length} csapat.<hr>`);
}

CsapatokSzama(FifaObjectLista());

// 2. Írja ki mennyi a résztvevő csapatok átlagpontszáma

function CsapatokOsszesPontSzama(csapatokAdatainakListaja) {
    let csapatokOsszesPontSzama = 0;

    for (const csapat of csapatokAdatainakListaja) {
        csapatokOsszesPontSzama += csapat.pont;
    }



    return csapatokOsszesPontSzama;
}

function CsapatokAtlagPontSzama(csapatokAdatainakListaja) {
    return CsapatokOsszesPontSzama(csapatokAdatainakListaja) / csapatokAdatainakListaja.length;
}

document.write(`A csapatok átlag pontszáma: ${CsapatokAtlagPontSzama(FifaObjectLista())} pont.<hr>`);

// 3. Listázza ki azokat a csapatokat, akik az átlagnál több pontot értek el!

function CsapatokAtlagFelettiPontSzammal(csapatokAdatainakListaja) {
    let csapatokAtlagFelettiPontSzammal = [];

    for (const csapat of csapatokAdatainakListaja) {
        if (csapat.pont > CsapatokAtlagPontSzama(FifaObjectLista())) {
            csapatokAtlagFelettiPontSzammal.push(csapat);
        }
    }

    return csapatokAtlagFelettiPontSzammal;
}

function CsapatokAtlagFelettiPontSzammalKiír(atlagFelettiCsapatok) {
    document.write("<table>");
    document.write("<tr><th>Csapat neve</th><th>Csapat pontszáma</th></tr>");

    for (const csapat of atlagFelettiCsapatok) {
        document.write(`<tr><td>${csapat.nev}</td><td>${csapat.pont}</td></tr>`)
    };
    document.write("</table>");
}

CsapatokAtlagFelettiPontSzammalKiír(CsapatokAtlagFelettiPontSzammal(FifaObjectLista()));

// 4. Írja ki a legtöbbet javító csapat adatait: Helyezés, CsapatNeve, Pontszáma

function LegtobbetJavitoCsapat(csapatokAdatainakListaja) {
    let legtobbetJavitoCsapatValtozas = 0;
    let LegtobbetJavitoCsapat = {};

    for (const csapat of csapatokAdatainakListaja) {
        if (csapat.valtozas > legtobbetJavitoCsapatValtozas) {
            legtobbetJavitoCsapatValtozas = csapat.valtozas;
            LegtobbetJavitoCsapat = csapat;
        }
    }

    return LegtobbetJavitoCsapat
}

function LegtobbetJavitoCsapatKiír(legtobbetJavitoCsapat) {
    document.write(`<hr>A legtöbbet javító csapat neve: ${legtobbetJavitoCsapat.nev}, helyezése: ${legtobbetJavitoCsapat.helyezes}, pontszáma: ${legtobbetJavitoCsapat.pont} pont.<hr>`);
}

LegtobbetJavitoCsapatKiír(LegtobbetJavitoCsapat(FifaObjectLista()));

// 5. Határozza meg a adatok közöt megtalálható-e Magyarország csapata!

function MegadottCsapatSzereplése(csapatokAdatainakListaja, keresendoCsapat) {
    let megadottCsapatSzereplése = false;

    for (const csapat of csapatokAdatainakListaja) {
        if (keresendoCsapat.toLowerCase() === csapat.nev.toLowerCase()) {
            megadottCsapatSzereplése = true;
        }
    }

    return megadottCsapatSzereplése;
}

function MegadottCsapatSzerepléseKiír(szerepelE) {
    if (szerepelE) {
        document.write("A megadott csapat szerepel a ligában.<hr>");
    } else {
        document.write("A megadott csapat nem szerepel a ligában.<hr>");
    }
}

MegadottCsapatSzerepléseKiír(MegadottCsapatSzereplése(FifaObjectLista(), "NémetoRszág"));

/* 6. Készítsen  statisztikát  a  helyezések  változása  (Valtozas)  alapján  csoportosítva  a  csapatok számáról  a  minta  szerint!  Csak  azok  a  helyezésváltozások  jelenjenek  meg  a  képernyőn, amelyek esetében a csapatok száma több mint egy volt! A megjelenő csoportok sorrendje tetszőleges.*/

function SzerepelE(ellenorzottLista, keresettAdat) {
    let szerepelE = false;

    for (const listaElem of ellenorzottLista) {
        if (keresettAdat === listaElem) {
            szerepelE = true;
        }
    }

    return szerepelE;
}

function ValtozasokSzamaKiír(valtozasok) {
    document.write("<table>");
    document.write("<tr><th>Csapatok</th><th>Helyezés változása</th></tr>");

    for (const csapat of valtozasok.csapatok) {
        for (const valtozas of valtozasok.valtozasok) {
            if (valtozas.darab > 1 && csapat.valtozas === valtozas.valtozas) {
                document.write(`<tr><td>${csapat.nev}</td><td>${csapat.valtozas}</td></tr>`)
            }
        }
    }

    document.write("</table>");
}

function ValtozasokSzama(csapatokAdatainakListaja) {
    let valtozasokSzamaLista = [];
    let valtozasokSzamaListaIn = [];
    let valtozasokSzamaObjectLista = [];

    // változások számát külön listába szedni
    for (const csapat of csapatokAdatainakListaja) {
        valtozasokSzamaLista.push(csapat.valtozas)
    }

    // változások számát külön listába szedni ismétlés nélkül
    for (const valtozas of valtozasokSzamaLista) {
        if (!SzerepelE(valtozasokSzamaListaIn, valtozas)) {
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

    // Olyan csapatok keresése és kiíratása ahol a változások darabszáma több mint 1
    ValtozasokSzamaKiír({ "valtozasok": valtozasokSzamaObjectLista, "csapatok": csapatokAdatainakListaja })
}

ValtozasokSzama(FifaObjectLista());