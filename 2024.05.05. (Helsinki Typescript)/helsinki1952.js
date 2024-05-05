var helsinki = [
    "1 1 atletika kalapacsvetes",
    "1 1 uszas 400m_gyorsuszas",
    "1 1 birkozas kotott_fogas_legsuly",
    "1 1 torna talajtorna",
    "1 1 torna felemas_korlat",
    "1 1 vivas kardvivas_egyeni",
    "1 1 okolvivas nagyvaltosuly",
    "1 1 uszas 200m_melluszas",
    "1 1 birkozas kotott_fogas_valtosuly",
    "1 1 uszas 100m_gyorsuszas",
    "1 1 sportloveszet onmukodo_sportpisztoly",
    "1 15 labdarugas ferfi_csapat",
    "1 3 ottusa ferfi_csapat",
    "1 6 vivas kardvivas_csapat",
    "1 5 uszas 4x100m_gyorsuszo_valto",
    "1 13 vizilabda ferfi_csapat",
    "2 1 ottusa ottusa_egyeni",
    "2 1 vivas torvivas_egyeni",
    "2 1 vivas kardvivas_egyeni",
    "2 1 sportloveszet onmukodo_sportpisztoly",
    "2 1 uszas 400m_gyorsuszas",
    "2 1 uszas 200m_melluszas",
    "2 1 kajakkenu kenu_egyes_10000m",
    "2 1 kajakkenu kajak_egyes_1000m",
    "2 1 birkozas kotott_fogas_pehelysuly",
    "2 8 torna noi_osszetett_csapat",
    "3 1 sportloveszet sportpisztoly",
    "3 1 vivas kardvivas_egyeni",
    "3 1 atletika tavolugras",
    "3 1 birkozas szabad_fogas_kozepsuly",
    "3 1 torna felemas_korlat",
    "3 1 torna osszetett_egyeni",
    "3 1 torna gerenda",
    "3 1 torna talajtorna",
    "3 1 atletika kalapacsvetes",
    "3 1 atletika 50km_gyaloglas",
    "3 1 ottusa ottusa_egyeni",
    "3 1 uszas 100m_gyorsuszas",
    "3 4 atletika 4x100m_valtofutas",
    "3 2 kajakkenu kenu_kettes_10000m",
    "3 8 torna keziszer_csapat",
    "3 6 vivas torvivas_csapat",
    "4 1 torna gerenda",
    "4 1 uszas 200m_mell",
    "4 1 birkozas kotottfogas_felnehezsuly",
    "4 1 torna talaj",
    "4 1 birkozas kotottfogas_kozepsuly",
    "4 1 birkozas kotottfogas_konnyusuly",
    "5 1 okolvivas pehelysuly",
    "5 1 okolvivas konnyusuly",
    "5 1 uszas 100m_gyors",
    "5 1 atletika diszkoszvetes",
    "5 1 vivas parbajtor_egyeni",
    "5 2 kajak-kenu kenu_kettes_1000m",
    "5 2 kerekparozas ketuleses_verseny",
    "5 4 uszas 4x200m_gyorsvalto",
    "5 5 vivas parbajtor_csapat",
    "6 1 birkozas kotottfogas_legsuly",
    "6 1 kajak-kenu kajak_egyes_500m",
    "6 1 torna osszetett_egyeni",
    "6 1 kerekparozas repuloverseny",
    "6 1 uszas 400m_gyors",
    "6 1 torna felemaskorlat",
    "6 8 torna osszetett_csapat"
];
function HelsinkiAdat(helsinkiLista) {
    var helsinkiAdatLista = [];
    for (var _i = 0, helsinkiLista_1 = helsinkiLista; _i < helsinkiLista_1.length; _i++) {
        var elem = helsinkiLista_1[_i];
        var helsinkiAdatObject = {
            helyezes: Number(elem.split(" ")[0]),
            sportolokSzama: Number(elem.split(" ")[1]),
            sportagNeve: elem.split(" ")[2],
            versenyszamNeve: elem.split(" ")[3],
        };
        helsinkiAdatLista.push(helsinkiAdatObject);
    }
    return helsinkiAdatLista;
}
var helsinkiAdat = HelsinkiAdat(helsinki);
//3. feladat
function PontszerzoHelyekSzamaKiir(vizsgaltTomb) {
    document.write("3. feladat:<br>Pontszerz\u0151 helyez\u00E9sek sz\u00E1ma: ".concat(vizsgaltTomb.length, "<br>"));
}
PontszerzoHelyekSzamaKiir(helsinkiAdat);
function MegszerzettErmekStatisztika(vizsgaltTomb) {
    var megszerzettErmekStatisztika = {
        arany: 0,
        ezust: 0,
        bronz: 0,
    };
    for (var _i = 0, vizsgaltTomb_1 = vizsgaltTomb; _i < vizsgaltTomb_1.length; _i++) {
        var elem = vizsgaltTomb_1[_i];
        if (elem.helyezes == 1) {
            megszerzettErmekStatisztika.arany++;
        }
        else if (elem.helyezes == 2) {
            megszerzettErmekStatisztika.ezust++;
        }
        else if (elem.helyezes == 3) {
            megszerzettErmekStatisztika.bronz++;
        }
    }
    return megszerzettErmekStatisztika;
}
function MegszerzettErmekStatisztikaKiir(vizsgaltObject) {
    document.write("4. feladat<br>Arany: ".concat(vizsgaltObject.arany, "<br>Ez\u00FCst: ").concat(vizsgaltObject.ezust, "<br>Bronz: ").concat(vizsgaltObject.bronz, "<br>\u00D6sszesen: ").concat(vizsgaltObject.arany + vizsgaltObject.ezust + vizsgaltObject.bronz, "<br>"));
}
MegszerzettErmekStatisztikaKiir(MegszerzettErmekStatisztika(helsinkiAdat));
//5. feladat
function OlimpiaiPontok(vizsgaltTomb) {
    var osszesOlimpiaiPont = 0;
    for (var _i = 0, vizsgaltTomb_2 = vizsgaltTomb; _i < vizsgaltTomb_2.length; _i++) {
        var elem = vizsgaltTomb_2[_i];
        if (elem.helyezes == 1) {
            osszesOlimpiaiPont += 7;
        }
        else if (elem.helyezes == 2) {
            osszesOlimpiaiPont += 5;
        }
        else if (elem.helyezes == 3) {
            osszesOlimpiaiPont += 4;
        }
        else if (elem.helyezes == 4) {
            osszesOlimpiaiPont += 3;
        }
        else if (elem.helyezes == 5) {
            osszesOlimpiaiPont += 2;
        }
        else if (elem.helyezes == 6) {
            osszesOlimpiaiPont += 1;
        }
    }
    return osszesOlimpiaiPont;
}
function OlimpiaiPontokKiir(olimpiaiPontok) {
    document.write("5. feladat<br>Olimpiai pontok sz\u00E1ma: ".concat(olimpiaiPontok, "<br>"));
}
OlimpiaiPontokKiir(OlimpiaiPontok(helsinkiAdat));
//6. feladat
function UszasTornaErmekSzamlalo(vizsgaltTomb) {
    var uszasErmekSzama = 0;
    var tornaErmekSzama = 0;
    for (var _i = 0, vizsgaltTomb_3 = vizsgaltTomb; _i < vizsgaltTomb_3.length; _i++) {
        var elem = vizsgaltTomb_3[_i];
        if (elem.sportagNeve == "uszas" && elem.helyezes < 4) {
            uszasErmekSzama++;
        }
        else if (elem.sportagNeve == "torna" && elem.helyezes < 4) {
            tornaErmekSzama++;
        }
    }
    if (uszasErmekSzama > tornaErmekSzama) {
        return "Úszás sportágban szereztek több érmet";
    }
    else if (uszasErmekSzama < tornaErmekSzama) {
        return "Torna sportágban szereztek több érmet";
    }
    else {
        return "Egyenlő volt az érmek száma";
    }
}
function UszasTornaErmekEredmenyKiir(eredmeny) {
    document.write("6. feladat<br>".concat(eredmeny, "<br>"));
}
UszasTornaErmekEredmenyKiir(UszasTornaErmekSzamlalo(helsinkiAdat));
function OlimpiaiPontokSzamol(helyezes) {
    if (helyezes == 1) {
        return 7;
    }
    else if (helyezes == 2) {
        return 5;
    }
    else if (helyezes == 3) {
        return 4;
    }
    else if (helyezes == 4) {
        return 3;
    }
    else if (helyezes == 5) {
        return 2;
    }
    else if (helyezes == 6) {
        return 1;
    }
    return 0;
}
function HelsinkiAdat2(vizsgaltObject) {
    var helsinkiAdatLista = [];
    for (var _i = 0, vizsgaltObject_1 = vizsgaltObject; _i < vizsgaltObject_1.length; _i++) {
        var elem = vizsgaltObject_1[_i];
        var helsinkiAdatObject = {
            helyezes: elem.helyezes,
            sportolokSzama: elem.sportolokSzama,
            megszerzettOlimpiaiPont: 0,
            sportagNeve: elem.sportagNeve,
            versenyszamNeve: elem.versenyszamNeve,
        };
        if (helsinkiAdatObject.sportagNeve == "kajakkenu") {
            helsinkiAdatObject.sportagNeve = "kajak-kenu";
        }
        helsinkiAdatObject.megszerzettOlimpiaiPont = OlimpiaiPontokSzamol(helsinkiAdatObject.helyezes);
        helsinkiAdatLista.push(helsinkiAdatObject);
    }
    return helsinkiAdatLista;
}
var helsinki2 = HelsinkiAdat2(helsinkiAdat);
//8. feladat
function LegtobbSportolo(vizsgaltTomb) {
    var legtobbSportoloIndex = 0;
    for (var i = 0; i < vizsgaltTomb.length; i++) {
        if (vizsgaltTomb[i].sportolokSzama > vizsgaltTomb[legtobbSportoloIndex].sportolokSzama) {
            legtobbSportoloIndex = i;
        }
    }
    return vizsgaltTomb[legtobbSportoloIndex];
}
function LegtobbSportoloKiir(vizsgaltObject) {
    document.write("8. feladat<br>Helyez\u00E9s: ".concat(vizsgaltObject.helyezes, "<br>Sport\u00E1g: ").concat(vizsgaltObject.sportagNeve, "<br>Versenysz\u00E1m: ").concat(vizsgaltObject.versenyszamNeve, "<br>Sportol\u00F3k sz\u00E1ma: ").concat(vizsgaltObject.sportolokSzama));
}
LegtobbSportoloKiir(LegtobbSportolo(helsinki2));
