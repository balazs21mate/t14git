//Céges átlagéletkor feladat tesztje


//Vizsgált objektum:
const Dolgozok = [{
    nev: "Koaxk Ábel",
    kor: 23,
    fizetes: 400000,
    beosztas: "Rendszergazda"
},
{
    nev: "Zsíros B. Ödön",
    kor: 45,
    fizetes: 1200000,
    beosztas: "Ügyvezető Igazgató"
},
{
    nev: "Meg Győző",
    kor: 32,
    fizetes: 600000,
    beosztas: "Marketing Manager"
},
{
    nev: "Békés Csaba",
    kor: 63,
    fizetes: 180000,
    beosztas: "Takarító"
},
{
    nev: "Pofá Zoltán",
    kor: 25,
    fizetes: 300000,
    beosztas: "Biztonsági Őr"
},
{
    nev: "Fejet Lenke",
    kor: 22,
    fizetes: 220000,
    beosztas: "Irodai Titkár"
},
{
    nev: "Vak Cina",
    kor: 30,
    fizetes: 500000,
    beosztas: "Üzem Orvos"
}
];

function FuggvenyVisszajelzoSor(tesztNeve, adatBe, elvartEredmeny, fuggvenyhivas) {

    //Tábla elemek létrehozása
    var table = document.querySelector("#testTable");
    var adatSor = table.insertRow(table.rows.length);
    var tesztNeveMezo = adatSor.insertCell(0);
    var bemenetMezo = adatSor.insertCell(1);
    var elvartEredmenyMezo = adatSor.insertCell(2);
    var fuggvenyEredmenyMezo = adatSor.insertCell(3)
    var visszajelzesMezo = adatSor.insertCell(4)

    //Teszt paraméterek megadása és megjelenítése
    tesztNeveMezo.innerHTML = `${tesztNeve}`;
    bemenetMezo.innerHTML = `${adatBe}`;
    elvartEredmenyMezo.innerHTML = `${elvartEredmeny}`;
    fuggvenyEredmenyMezo.innerHTML = `${fuggvenyhivas}`
    if (elvartEredmeny == fuggvenyhivas) {
        visszajelzesMezo.innerHTML = `Success`;
    }
    else {
        visszajelzesMezo.innerHTML = `Fail`;
    }
}

//Hibás referencia érték esetén lefutó függvény
function HibasFuggvenyFuggvenyVisszajelzoSor(tesztNeve, adatBe, elvartEredmeny) {
    var table = document.querySelector("#testTable");
    var adatSor = table.insertRow(table.rows.length);
    var tesztNeveMezo = adatSor.insertCell(0);
    var bemenetMezo = adatSor.insertCell(1);
    var elvartEredmenyMezo = adatSor.insertCell(2);
    var fuggvenyEredmenyMezo = adatSor.insertCell(3)
    var visszajelzesMezo = adatSor.insertCell(4)

    tesztNeveMezo.innerHTML = `${tesztNeve}`;
    bemenetMezo.innerHTML = `${adatBe}`;
    elvartEredmenyMezo.innerHTML = `${elvartEredmeny}`;
    fuggvenyEredmenyMezo.innerHTML = "Fail";
    visszajelzesMezo.innerHTML = "Fail";
}







function Teszt01() {
    try {
        FuggvenyVisszajelzoSor("Kocka térfogat", 2, 8, KockaTerfogat(2));
    }
    catch {
        HibasFuggvenyFuggvenyVisszajelzoSor("Kocka térfogat", 2, 8);
    }
}
function Teszt02() {
    try {
        FuggvenyVisszajelzoSor("Kocka térfogat", 3, 27, KockaTerfogat(3));
    }
    catch {
        HibasFuggvenyFuggvenyVisszajelzoSor("Kocka térfogat", 3, 27);
    }
}
function Teszt03() {
    try {
        FuggvenyVisszajelzoSor("Kocka térfogat", 5, 125, KockaTerfogat(5));
    }
    catch {
        HibasFuggvenyFuggvenyVisszajelzoSor("Kocka térfogat", 5, 125);
    }
}



function Teszt04() {
    try {
        FuggvenyVisszajelzoSor("Szöveg visszafelé", "Szeretem a programozás", "sázomargorp a meterezS", SzovegVisszafele("Szeretem a programozás"));
    }
    catch {
        HibasFuggvenyFuggvenyVisszajelzoSor("Szöveg visszafelé", "Szeretem a programozás", "sázomargorp a meterezS");
    }
}
function Teszt05() {
    try {
        FuggvenyVisszajelzoSor("Szöveg visszafelé", "Géza kék az ég", "gé za kék azéG", SzovegVisszafele("Géza kék az ég"));
    }
    catch {
        HibasFuggvenyFuggvenyVisszajelzoSor("Szöveg visszafelé", "Géza kék az ég", "gé za kék azéG");
    }
}
function Teszt06() {
    try {
        FuggvenyVisszajelzoSor("Szöveg visszafelé", "Répa, retek, mogyoró", "óroygom ,keter ,apéR", SzovegVisszafele("Répa, retek, mogyoró"));
    }
    catch {
        HibasFuggvenyFuggvenyVisszajelzoSor("Szöveg visszafelé", "Répa, retek, mogyoró", "óroygom ,keter ,apéR");
    }
}


function Teszt07() {
    try {
        FuggvenyVisszajelzoSor("Cég átlagéletkor", "Objektum", 34, CegAtlagEletkor(Dolgozok));
    }
    catch {
        HibasFuggvenyFuggvenyVisszajelzoSor("Cég átlagéletkor", "Objektum", 34);
    }
}
function TesztFuttato() {
    Teszt01();
    Teszt02();
    Teszt03();
    Teszt04();
    Teszt05();
    Teszt06();
    Teszt07();
}
TesztFuttato();