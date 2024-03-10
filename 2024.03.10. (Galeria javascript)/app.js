//Galéria

// Képek beolvasása
let balOldaliKep = document.querySelector("#bal_kep");
let kozepsoKep = document.querySelector("#kozepso_kep");
let jobbOldaliKep = document.querySelector("#jobb_kep");

let nagyKep = document.querySelector("#nagy_kep");

//Gombok beolvasása
let jobbGomb = document.querySelector("#jobb");
let balGomb = document.querySelector("#bal");

//Inputok beolvasása
let forgatas = document.querySelector("#forgatas");
let atlathatosag = document.querySelector("#atlathatosag");
let elmosodas = document.querySelector("#elmosodas");

//Indexek létrehozása
let balOldaliKepIndex = 0;
let jobbOldaliKepIndex = 2;

let kozepsoKepIndex = 1;

//Galéria létrehozása

let kepekLista = ["https://cdn.pixabay.com/photo/2013/10/02/23/03/mountains-190055_1280.jpg", "https://cdn.pixabay.com/photo/2012/03/01/00/55/flowers-19830_1280.jpg", "https://cdn.pixabay.com/photo/2015/04/19/08/32/rose-729509_1280.jpg", "https://cdn.pixabay.com/photo/2017/12/15/13/51/polynesia-3021072_960_720.jpg", "https://cdn.pixabay.com/photo/2017/06/07/10/47/elephant-2380009_1280.jpg", "https://cdn.pixabay.com/photo/2015/04/19/08/32/marguerite-729510_1280.jpg"];


function KepekLetrehozasa() {

    balOldaliKep.src = kepekLista[balOldaliKepIndex];
    kozepsoKep.src = kepekLista[kozepsoKepIndex];
    jobbOldaliKep.src = kepekLista[jobbOldaliKepIndex];
}


window.addEventListener("load", KepekLetrehozasa)




//Képek léptetése balra

function EltolasBalra() {
    if (jobbOldaliKepIndex < kepekLista.length) {

        balOldaliKepIndex = kozepsoKepIndex;

        kozepsoKepIndex = jobbOldaliKepIndex;

        if (jobbOldaliKepIndex == kepekLista.length - 1) {
            jobbOldaliKepIndex = 0;
        } else {
            jobbOldaliKepIndex++;
        }
    }

    KepekLetrehozasa();
}


balGomb.addEventListener("click", EltolasBalra);




//Képek léptetése jobbra

function EltolasJobbra() {

    if (balOldaliKepIndex >= 0) {

        jobbOldaliKepIndex = kozepsoKepIndex;

        kozepsoKepIndex = balOldaliKepIndex;

        if (balOldaliKepIndex == 0) {
            balOldaliKepIndex = 5;
        } else {
            balOldaliKepIndex--;
        }
    }

    KepekLetrehozasa();
}

jobbGomb.addEventListener("click", EltolasJobbra);




//Szerkesztő megnyitása

let szerkeszto = document.querySelector("#szerkeszto")

function KepSzerkesztoMegnyitasa() {
    szerkeszto.style.display = "flex";
    nagyKep.src = this.src;


}

kozepsoKep.addEventListener("click", KepSzerkesztoMegnyitasa)




//Szerkesztő bezárása

let mentes = document.querySelector("#mentes")

function BeallitasokMentese() {
    kozepsoKep.style.transform = nagyKep.style.transform;
    kozepsoKep.style.filter = nagyKep.style.filter;
}

function BeallitasokAlaphelyzetbeAllitasa() {
    forgatas.value = 0;
    nagyKep.style.transform = `rotate(0deg)`;

    atlathatosag.value = 1;
    nagyKep.style.filter = `opacity(1)`

    elmosodas.value = 0;
    nagyKep.style.filter = `blur(0px)`
}

function KepSzerkesztoBezarasa() {

    BeallitasokMentese();

    BeallitasokAlaphelyzetbeAllitasa();

    szerkeszto.style.display = "none";
}

mentes.addEventListener("click", KepSzerkesztoBezarasa)



//Kép forgatása

function KepForgatasa() {

    nagyKep.style.transform = `rotate(${this.value}deg)`;
}

forgatas.addEventListener("change", KepForgatasa)




//Kép átláthatóság beállítása

function KepAtlathatosag() {
    nagyKep.style.filter = `opacity(${this.value})`
}

atlathatosag.addEventListener("change", KepAtlathatosag)



//Kép elmosódás beállítása

function KepElmosodas() {
    nagyKep.style.filter = `blur(${this.value}px)`
}

elmosodas.addEventListener("change", KepElmosodas)