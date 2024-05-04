// 0. feladat tömb létrehozása
//1. érték: Csapat neve (nev)
//2. érték: Csapat helyezése (helyezes)
//3. érték: Csapat helyének változása (valtozas)
//4. érték: Csapat Pontszama (pont)
var csapatAdat = [
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
function CsapatAdat(vizsgaltTomb) {
    var csapatAdat = [];
    for (var _i = 0, vizsgaltTomb_1 = vizsgaltTomb; _i < vizsgaltTomb_1.length; _i++) {
        var vizsgaltElem = vizsgaltTomb_1[_i];
        var csapat = {
            nev: vizsgaltElem.split(";")[0],
            helyezes: Number(vizsgaltElem.split(";")[1]),
            valtozas: Number(vizsgaltElem.split(";")[2]),
            pont: Number(vizsgaltElem.split(";")[3])
        };
        csapatAdat.push(csapat);
    }
    return csapatAdat;
}
var fifaAdatok = CsapatAdat(csapatAdat);
console.log("Csapatok listája:");
console.log(fifaAdatok);
// 1. feladat
function CsapatokSzamaKiir(vizsgaltTomb) {
    console.log("1. feladat");
    console.log("A ranglist\u00E1n szerepl\u0151 csapatok sz\u00E1ma: ".concat(vizsgaltTomb.length));
}
CsapatokSzamaKiir(fifaAdatok);
// 2. feladat
function CsapatokOsszesPontszama(vizsgaltTomb) {
    var osszesPontszam = 0;
    for (var _i = 0, vizsgaltTomb_2 = vizsgaltTomb; _i < vizsgaltTomb_2.length; _i++) {
        var csapat = vizsgaltTomb_2[_i];
        osszesPontszam += csapat.pont;
    }
    return osszesPontszam;
}
function CsapatokAtlagPontszamaKiir(vizsgaltTomb) {
    console.log("2. feladat");
    console.log("A csapatok \u00E1tlagpontsz\u00E1ma: ".concat(CsapatokOsszesPontszama(vizsgaltTomb) / vizsgaltTomb.length));
}
CsapatokAtlagPontszamaKiir(fifaAdatok);
// 3. feladat
function AtlagnalNagyobbPonttalRendelkezoCsapatokKiir(vizsgaltTomb) {
    var atlagPont = CsapatokOsszesPontszama(vizsgaltTomb) / vizsgaltTomb.length;
    var atlagnalNagyobbPonttalRendelkezoCsapatok = [];
    for (var _i = 0, vizsgaltTomb_3 = vizsgaltTomb; _i < vizsgaltTomb_3.length; _i++) {
        var csapat = vizsgaltTomb_3[_i];
        if (csapat.pont > atlagPont) {
            atlagnalNagyobbPonttalRendelkezoCsapatok.push(csapat);
        }
    }
    console.log("3. feladat");
    console.log("Az átlagpontnál nagyobb pontszámmal rendelkező csapatok listája:");
    console.log(atlagnalNagyobbPonttalRendelkezoCsapatok);
}
AtlagnalNagyobbPonttalRendelkezoCsapatokKiir(fifaAdatok);
// 4. feladat
function LegtobbetJavitoCsapatKiir(vizsgaltTomb) {
    var maxIndex = 0;
    for (var i = 0; i < vizsgaltTomb.length; i++) {
        if (vizsgaltTomb[i].valtozas > vizsgaltTomb[maxIndex].valtozas) {
            maxIndex = i;
        }
    }
    console.log("4. feladat");
    console.log("A legt\u00F6bbet jav\u00EDt\u00F3 csapat helyez\u00E9se: ".concat(vizsgaltTomb[maxIndex].helyezes, ", neve: ").concat(vizsgaltTomb[maxIndex].nev, ", pontsz\u00E1ma: ").concat(vizsgaltTomb[maxIndex].pont));
}
LegtobbetJavitoCsapatKiir(fifaAdatok);
// 5. feladat
function SzerepelEAzAdottCsapatKiir(vizsgaltTomb, vizsgaltCsapat) {
    var szerepelE = false;
    for (var _i = 0, vizsgaltTomb_4 = vizsgaltTomb; _i < vizsgaltTomb_4.length; _i++) {
        var csapat = vizsgaltTomb_4[_i];
        if (csapat.nev.toLowerCase().includes(vizsgaltCsapat.toLowerCase())) {
            szerepelE = true;
        }
    }
    if (szerepelE) {
        console.log("5. feladat");
        console.log("".concat(vizsgaltCsapat, " szerepel a Fifa ranglist\u00E1j\u00E1n!"));
    }
    else {
        console.log("5. feladat");
        console.log("".concat(vizsgaltCsapat, " nem szerepel a Fifa ranglist\u00E1j\u00E1n!"));
    }
}
SzerepelEAzAdottCsapatKiir(fifaAdatok, "Magyarország");
// 6. feladat
function ValtozasokListaKeszites(vizsgaltTomb) {
    var valtozasokLista = [];
    for (var _i = 0, vizsgaltTomb_5 = vizsgaltTomb; _i < vizsgaltTomb_5.length; _i++) {
        var csapat = vizsgaltTomb_5[_i];
        var szerepelE = false;
        for (var _a = 0, valtozasokLista_1 = valtozasokLista; _a < valtozasokLista_1.length; _a++) {
            var valtozas = valtozasokLista_1[_a];
            if (csapat.valtozas == valtozas) {
                szerepelE = true;
            }
        }
        if (!szerepelE) {
            valtozasokLista.push(csapat.valtozas);
        }
    }
    return valtozasokLista;
}
function ValtozasokSzamaListaKeszites(vizsgaltTomb) {
    var valtozasokLista = ValtozasokListaKeszites(vizsgaltTomb);
    var valtozasokSzamaLista = [];
    for (var _i = 0, valtozasokLista_2 = valtozasokLista; _i < valtozasokLista_2.length; _i++) {
        var valtozas = valtozasokLista_2[_i];
        var valtozasSzama = 0;
        for (var _a = 0, vizsgaltTomb_6 = vizsgaltTomb; _a < vizsgaltTomb_6.length; _a++) {
            var csapat = vizsgaltTomb_6[_a];
            if (csapat.valtozas == valtozas) {
                valtozasSzama++;
            }
        }
        valtozasokSzamaLista.push(valtozasSzama);
    }
    return valtozasokSzamaLista;
}
function ValtozasokStatisztikaKiir(vizsgaltTomb) {
    var valtozasokLista = ValtozasokListaKeszites(vizsgaltTomb);
    var valtozasokSzama = ValtozasokSzamaListaKeszites(vizsgaltTomb);
    var valtozasokObjectLista = [];
    for (var i = 0; i < valtozasokLista.length; i++) {
        var valtozasObject = {
            valtozas: valtozasokLista[i],
            darab: valtozasokSzama[i]
        };
        if (valtozasObject.darab > 1) {
            valtozasokObjectLista.push(valtozasObject);
        }
    }
    console.log("6. feladat");
    console.log("Statisztika:");
    console.log(valtozasokObjectLista);
}
ValtozasokStatisztikaKiir(fifaAdatok);
