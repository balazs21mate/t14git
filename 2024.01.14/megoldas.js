// Máté Balázs #Team 14
document.write("Máté Balázs <br> #Team 14<br><hr>");
document.write("Html: 90%<br>");
document.write("Css: 80%<br>");
document.write("Javascript: 80%<br><hr>");
// 2. feladat
const szam = Number(prompt("Kérem adjon meg egy számot!"));
const hatvanyozasMerteke = Number(prompt("Kérem adja meg a hatványozás mértékét!"));

document.write("A " + szam + " " + hatvanyozasMerteke + "-dik hatványa: " + szam ** hatvanyozasMerteke + ".<br><hr>");

//3. feladat

const min = Number(prompt("Kérem adja meg a minimum határt!"));
const max = Number(prompt("Kérem adja meg a maximum határt!"));

let parosSzam;

do {
    parosSzam = Math.floor(Math.random() * (max - min) + min);
} while (parosSzam % 2 == 1);

document.write("Az ön páros száma a: " + parosSzam + "<br><hr>");

//4. feladat

const eletKor = Number(prompt("Kérem adja meg életkorát! (1-120)"));

if (eletKor > 0 && eletKor < 6) {
    document.write("Az ön kora: Kisgyermekkor.");
} else if (eletKor < 12 && eletKor >= 6) {
    document.write("Az ön kora: Gyermekkor.");
} else if (eletKor < 16 && eletKor >= 12) {
    document.write("Az ön kora: Serdülőkor.");
} else if (eletKor < 20 && eletKor >= 16) {
    document.write("Az ön kora: Ifjúkor.");
} else if (eletKor < 30 && eletKor >= 20) {
    document.write("Az ön kora: Fiatal felnőtt kor.");
} else if (eletKor < 60 && eletKor >= 30) {
    document.write("Az ön kora: Felnőtt kor.");
} else if (eletKor < 120 && eletKor >= 60) {
    document.write("Az ön kora: Aggkor.");
} else {
    document.write("Hibás kor!!!");
}

//5. feladat

const osztandoSzam = Number(prompt("Kérem adja meg az osztandó számot!"));
const oszto = Number(prompt("Kérem adja meg az osztót!"));

if (osztandoSzam % oszto == 0) {
    document.write("<br><hr>A megadott szám osztható a megadott osztóval úgy, hogy a maradék nulla!<br><hr>");
} else {
    document.write("<br><hr>A megadott szám nem osztható a megadott osztóval úgy, hogy a maradék nulla!<br><hr>");
}

//6. feladat

for (let i = 1; i < 11; i++) {
    document.write(i ** 2 + ",");
}