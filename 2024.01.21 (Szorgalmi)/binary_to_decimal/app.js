// Bináris szám hosszának bekérése
const binarisTombHossza = Number(prompt("Kérlek add meg a bináris számod hosszát!"))

let binarisTomb = [];

// binarisTomb feltöltése a megadott elemekkel az elejére beszúrva

for (let i = 0; i < binarisTombHossza; i++) {
    binarisTomb.unshift(Number(prompt("Kérlek add meg a bináris szám " + (i + 1) + ". elemét!")))
}

let binarisSzam = [];

// binarisSzam feltöltése a binarisTomb elemeivel az elejére beszúrva (Kiiratáshoz)

for (let i = 0; i < binarisTomb.length; i++) {
    binarisSzam.unshift(binarisTomb[i]);

}

let ellenorzes = false;

// Ellenőrizni, hogy a megadott szám bináris-e?

for (let i = 0; i < binarisTomb.length; i++) {
    if (binarisTomb[i] != 0 && binarisTomb[i] != 1) {
        ellenorzes = false;
        break;
    } else {
        ellenorzes = true;
    }
}

// Ha a megadott szám bináris belépünk az alábbi elágazás igaz ágába, ha viszont nem, akkor az else ág fut le

if (ellenorzes === true) {
    let reszEredmeny = [];

    // reszEredmeny feltöltése az egyesek helyén lévő kettes hatvánnyal

    for (let i = 0; i < binarisTomb.length; i++) {
        if (binarisTomb[i] === 1) {
            reszEredmeny.push(2 ** i);
        }
    }
    let decimalisSzam = 0;

    // reszEredmeny elemeinek összeadása

    for (let i = 0; i < reszEredmeny.length; i++) {
        decimalisSzam += reszEredmeny[i];
    }

    // Eredmény kiíratása

    document.write("A " + binarisSzam + " decimális értéke: " + decimalisSzam);
} else {

    // Hiba kiíratása

    document.write("A megadott szám " + binarisSzam + " nem bináris!");
}

// Ellenőrzéshez: https://www.convertworld.com/hu/szamrendszerek/kettes-szamrendszer.html