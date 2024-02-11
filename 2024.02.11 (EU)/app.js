const EuropaiUnio = [{
    orszag: "Ausztria",
    csatlakozas: "1995.01.01"
},
{
    orszag: "Belgium",
    csatlakozas: "1958.01.01"
},
{
    orszag: "Bulgária",
    csatlakozas: "2007.01.01"
},
{
    orszag: "Ciprus",
    csatlakozas: "2004.05.01"
},
{
    orszag: "Csehország",
    csatlakozas: "2004.05.01"
},
{
    orszag: "Dánia",
    csatlakozas: "1973.01.01"
},
{
    orszag: "Egyesült Királyság",
    csatlakozas: "1973.01.01"
},
{
    orszag: "Észtország",
    csatlakozas: "2004.05.01"
},
{
    orszag: "Finnország",
    csatlakozas: "1995.01.01"
},
{
    orszag: "Franciaország",
    csatlakozas: "1958.01.01"
},
{
    orszag: "Görögország",
    csatlakozas: "1981.01.01"
},
{
    orszag: "Hollandia",
    csatlakozas: "1958.01.01"
},
{
    orszag: "Horvátország",
    csatlakozas: "2013.07.01"
},
{
    orszag: "Írország",
    csatlakozas: "1973.01.01"
},
{
    orszag: "Lengyelország",
    csatlakozas: "2004.05.01"
},
{
    orszag: "Lettország",
    csatlakozas: "2004.05.01"
},
{
    orszag: "Litvánia",
    csatlakozas: "2004.05.01"
},
{
    orszag: "Luxemburg",
    csatlakozas: "1958.01.01"
},
{
    orszag: "Magyarország",
    csatlakozas: "2004.05.01"
},
{
    orszag: "Málta",
    csatlakozas: "2004.05.01"
},
{
    orszag: "Németország",
    csatlakozas: "1958.01.01"
},
{
    orszag: "Olaszország",
    csatlakozas: "1958.01.01"
},
{
    orszag: "Portugália",
    csatlakozas: "1986.01.01"
},
{
    orszag: "Románia",
    csatlakozas: "2007.01.01"
},
{
    orszag: "Spanyolország",
    csatlakozas: "1986.01.01"
},
{
    orszag: "Svédország",
    csatlakozas: "1995.01.01"
},
{
    orszag: "Szlovákia",
    csatlakozas: "2004.05.01"
},
{
    orszag: "Szlovénia",
    csatlakozas: "2004.05.01"
}
]

// 1. Hány tagja van az EU-nak?

function EuTagokSzama(europaiOrszagokListaja) {
    console.log(`Az Európai Unió tagországainak száma: ${europaiOrszagokListaja.length} ország`);
}

EuTagokSzama(EuropaiUnio);

// 2. Hány ország csatlakozot 2007-ben...

function CsatlakozasListaLetrehozas(orszag) {
    return orszag.csatlakozas.split(".");
}

function CsatlakozasMegadottEvben(europaiOrszagokListaja, csatlakozasEve) {
    let csatlakozottOrszagokListaja = [];

    for (const orszag of europaiOrszagokListaja) {

        if (Number(CsatlakozasListaLetrehozas(orszag)[0]) === csatlakozasEve) {
            csatlakozottOrszagokListaja.push(orszag);
        }
    }

    console.log(`${csatlakozasEve}-ban/ben ${csatlakozottOrszagokListaja.length} ország csatlakozott az Európai Unióhoz.`);
}

CsatlakozasMegadottEvben(EuropaiUnio, 2007);

// 3. Csatlakozot-e Magyarország az európai unióhoz? Igen/Nem?

function MegadottOrszagSzereplése(europaiOrszagokListaja, keresendoOrszag) {
    let megadottOrszagSzereplése = false;

    for (const orszag of europaiOrszagokListaja) {
        if (keresendoOrszag.toLowerCase() === orszag.orszag.toLowerCase()) {
            megadottOrszagSzereplése = true;
        }
    }

    if (megadottOrszagSzereplése) {
        console.log("Igen");
    } else {
        console.log("Nem");
    }
}

MegadottOrszagSzereplése(EuropaiUnio, "MagyaroRszág");

// 4. Volt-e májusban csatlakozás? Igen/Nem?
function HonapNevenekEllenorzese(honapNeve) {
    switch (honapNeve.toLowerCase()) {
        case "január":
            return 1;
        case "február":
            return 2;
        case "március":
            return 3;
        case "április":
            return 4;
        case "május":
            return 5;
        case "június":
            return 6;
        case "július":
            return 7;
        case "augusztus":
            return 8;
        case "szeptember":
            return 9;
        case "október":
            return 10;
        case "november":
            return 11;
        case "december":
            return 12;
        default:
            break;
    }
}

function CsatlakozasMegadottHonapban(europaiOrszagokListaja, csatlakozasHonapja) {
    let csatlakozasAdottHonapban = false;

    for (const orszag of europaiOrszagokListaja) {
        if (Number(CsatlakozasListaLetrehozas(orszag)[1]) === HonapNevenekEllenorzese(csatlakozasHonapja)) {
            csatlakozasAdottHonapban = true;
        }
    }

    if (csatlakozasAdottHonapban) {
        console.log("Igen");
    } else {
        console.log("Nem");
    }
}

CsatlakozasMegadottHonapban(EuropaiUnio, "Május");

// 5. Melyik ország csatlakozot utoljára?

function UtoljaraCsatlakozoOrszag(europaiOrszagokListaja) {
    let utolsoCsatlakozas = ["0000", "00", "00"];

    for (const orszag of europaiOrszagokListaja) {
        if (CsatlakozasListaLetrehozas(orszag)[0] > utolsoCsatlakozas[0]) {
            utolsoCsatlakozas[0] = CsatlakozasListaLetrehozas(orszag)[0];
        }
        if (CsatlakozasListaLetrehozas(orszag)[1] > utolsoCsatlakozas[1]) {
            utolsoCsatlakozas[1] = CsatlakozasListaLetrehozas(orszag)[1];
        }
        if (CsatlakozasListaLetrehozas(orszag)[2] > utolsoCsatlakozas[2]) {
            utolsoCsatlakozas[2] = CsatlakozasListaLetrehozas(orszag)[2];
        }
    }

    for (const orszag of europaiOrszagokListaja) {
        if (orszag.csatlakozas === utolsoCsatlakozas.join(".")) {
            console.log(orszag.orszag)
        }
    }
}

UtoljaraCsatlakozoOrszag(EuropaiUnio)

// 6. Ország Statisztika, melyik évben hány ország csatlakozot

function SzerepelE(vizsgaltLista, keresettAdat) {
    let szerepelE = false;

    for (const adat of vizsgaltLista) {
        if (adat === keresettAdat) {
            szerepelE = true;

        }
    }

    return szerepelE;
}

function OrszagokCsatlakozasanakSzamaEvSzerintKiír(evszamok) {
    for (const evSzam of evszamok) {
        console.log(`A(z) ${evSzam.evszam}-ban/ben ${evSzam.darab} számú ország csatlakozott az Európai Unióhoz.`)
    }
}

function OrszagokCsatlakozasanakSzamaEvSzerint(europaiOrszagokListaja) {
    let evSzamokLista = [];
    let evSzamokListaIn = [];
    let evSzamokObjectLista = [];


    // evSzamokLista feltőltése az Európai országok csatlakozási évével
    for (const orszag of europaiOrszagokListaja) {
        if (!SzerepelE(evSzamokListaIn, CsatlakozasListaLetrehozas(orszag)[0])) {
            evSzamokLista.push(CsatlakozasListaLetrehozas(orszag)[0]);
        }


    }

    // evSzamokListaIn feltőltése az Európai országok csatlakozási évével ismétlés nélkül
    for (const evSzam of evSzamokLista) {
        if (!SzerepelE(evSzamokListaIn, evSzam)) {
            evSzamokListaIn.push(evSzam)
        }
    }
    // Objektum lista létrehozása
    for (const evSzam of evSzamokListaIn) {
        evSzamokObjectLista.push({ "evszam": evSzam, "darab": 0 })
    }

    // Előforduló évszámok megszámlálása
    for (const evSzam of evSzamokLista) {
        for (const ev of evSzamokObjectLista) {
            if (evSzam === ev.evszam) {
                ev.darab++;
            }
        }

    }

    // Adott évben csatlakozott országok kiíratása
    OrszagokCsatlakozasanakSzamaEvSzerintKiír(evSzamokObjectLista);
}

OrszagokCsatlakozasanakSzamaEvSzerint(EuropaiUnio)