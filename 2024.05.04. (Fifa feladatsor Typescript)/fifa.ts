// 0. feladat tömb létrehozása

//1. érték: Csapat neve (nev)
//2. érték: Csapat helyezése (helyezes)
//3. érték: Csapat helyének változása (valtozas)
//4. érték: Csapat Pontszama (pont)

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

interface Csapat {
    nev: string;
    helyezes: number;
    valtozas: number;
    pont: number;
}


function CsapatAdat(vizsgaltTomb: string[]): Csapat[] {
    let csapatAdat: Csapat[] = [];

    for (const vizsgaltElem of vizsgaltTomb) {
        let csapat: Csapat = {
            nev: vizsgaltElem.split(";")[0],
            helyezes: Number(vizsgaltElem.split(";")[1]),
            valtozas: Number(vizsgaltElem.split(";")[2]),
            pont: Number(vizsgaltElem.split(";")[3])
        };

        csapatAdat.push(csapat);
    }

    return csapatAdat;
}

let fifaAdatok: Csapat[] = CsapatAdat(csapatAdat);

console.log("Csapatok listája:");
console.log(fifaAdatok);



// 1. feladat

function CsapatokSzamaKiir(vizsgaltTomb: Csapat[]): void {
    console.log("1. feladat");
    console.log(`A ranglistán szereplő csapatok száma: ${vizsgaltTomb.length}`);
}

CsapatokSzamaKiir(fifaAdatok);



// 2. feladat

function CsapatokOsszesPontszama(vizsgaltTomb: Csapat[]): number {
    let osszesPontszam: number = 0;

    for (const csapat of vizsgaltTomb) {
        osszesPontszam += csapat.pont;
    }

    return osszesPontszam;
}

function CsapatokAtlagPontszamaKiir(vizsgaltTomb: Csapat[]): void {
    console.log("2. feladat");
    console.log(`A csapatok átlagpontszáma: ${CsapatokOsszesPontszama(vizsgaltTomb) / vizsgaltTomb.length}`);
}

CsapatokAtlagPontszamaKiir(fifaAdatok);



// 3. feladat

function AtlagnalNagyobbPonttalRendelkezoCsapatokKiir(vizsgaltTomb: Csapat[]): void {
    let atlagPont: number = CsapatokOsszesPontszama(vizsgaltTomb) / vizsgaltTomb.length;

    let atlagnalNagyobbPonttalRendelkezoCsapatok: Csapat[] = [];

    for (const csapat of vizsgaltTomb) {
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

function LegtobbetJavitoCsapatKiir(vizsgaltTomb: Csapat[]): void {
    let maxIndex: number = 0;

    for (let i: number = 0; i < vizsgaltTomb.length; i++) {
        if (vizsgaltTomb[i].valtozas > vizsgaltTomb[maxIndex].valtozas) {
            maxIndex = i;
        }
    }

    console.log("4. feladat");
    console.log(`A legtöbbet javító csapat helyezése: ${vizsgaltTomb[maxIndex].helyezes}, neve: ${vizsgaltTomb[maxIndex].nev}, pontszáma: ${vizsgaltTomb[maxIndex].pont}`);
}

LegtobbetJavitoCsapatKiir(fifaAdatok);



// 5. feladat

function SzerepelEAzAdottCsapatKiir(vizsgaltTomb: Csapat[], vizsgaltCsapat: string): void {
    let szerepelE: boolean = false;

    for (const csapat of vizsgaltTomb) {
        if (csapat.nev.toLowerCase().includes(vizsgaltCsapat.toLowerCase())) {
            szerepelE = true;
        }
    }

    if (szerepelE) {
        console.log("5. feladat");
        console.log(`${vizsgaltCsapat} szerepel a Fifa ranglistáján!`);
    } else {
        console.log("5. feladat");
        console.log(`${vizsgaltCsapat} nem szerepel a Fifa ranglistáján!`);
    }
}


SzerepelEAzAdottCsapatKiir(fifaAdatok, "Magyarország");



// 6. feladat

function ValtozasokListaKeszites(vizsgaltTomb: Csapat[]): number[] {
    let valtozasokLista: number[] = [];

    for (const csapat of vizsgaltTomb) {
        let szerepelE: boolean = false;

        for (const valtozas of valtozasokLista) {
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

function ValtozasokSzamaListaKeszites(vizsgaltTomb: Csapat[]): number[] {
    let valtozasokLista: number[] = ValtozasokListaKeszites(vizsgaltTomb);
    let valtozasokSzamaLista: number[] = [];

    for (const valtozas of valtozasokLista) {
        let valtozasSzama = 0;

        for (const csapat of vizsgaltTomb) {
            if (csapat.valtozas == valtozas) {
                valtozasSzama++;
            }
        }

        valtozasokSzamaLista.push(valtozasSzama);
    }

    return valtozasokSzamaLista;
}


interface ValtozasInterface {
    valtozas: number;
    darab: number;
}


function ValtozasokStatisztikaKiir(vizsgaltTomb: Csapat[]): void {
    let valtozasokLista: number[] = ValtozasokListaKeszites(vizsgaltTomb);
    let valtozasokSzama: number[] = ValtozasokSzamaListaKeszites(vizsgaltTomb);

    let valtozasokObjectLista: ValtozasInterface[] = [];

    for (let i: number = 0; i < valtozasokLista.length; i++) {
        let valtozasObject: ValtozasInterface = {
            valtozas: valtozasokLista[i],
            darab: valtozasokSzama[i]
        }

        if (valtozasObject.darab > 1) {
            valtozasokObjectLista.push(valtozasObject);
        }
    }

    console.log("6. feladat");
    console.log("Statisztika:");
    console.log(valtozasokObjectLista);
}

ValtozasokStatisztikaKiir(fifaAdatok);