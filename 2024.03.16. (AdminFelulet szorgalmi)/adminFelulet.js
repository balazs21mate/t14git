
//Aktiváló gomb
//aktivalo.addEventListener("click", mindenCheck);

function mindenCheck() {
    let elemLista = document.querySelectorAll(".allapot");
    for (let i = 0; i < elemLista.length; i++) {
        elemLista[i].checked = true;
    }
}

//Deaktiváló gomb
//deaktivalo.addEventListener("click", mindenUnCheck);

function mindenUnCheck() {
    let elemLista = document.querySelectorAll(".allapot");
    for (let i = 0; i < elemLista.length; i++) {
        elemLista[i].checked = false;
    }
}




//Szorgalmi: Próbáld meg egy gombra rakni a két funkciót check/uncheck, illetve megoldani, hogy megcserélje a kijelöléseket(megfordítja)

// Aktiváló-Deaktiváló gomb

aktivalo.addEventListener("click", AktivAllomanyKapcsolo);

function AktivAllomanyKapcsolo() {
    let elemLista = document.querySelectorAll(".allapot");
    for (const elem of elemLista) {
        if (elem.checked) {
            elem.checked = false;
            aktivalo.classList.add("btn-success");
            aktivalo.classList.remove("btn-danger");
            aktivalo.innerHTML = "Mindenkit aktivál";
        } else {
            elem.checked = true;
            aktivalo.classList.remove("btn-success");
            aktivalo.classList.add("btn-danger");
            aktivalo.innerHTML = "Mindenkit deaktivál";
        }
    }
}


//Táblázat sávozásának beállítása
//csikozasBe.addEventListener("click", savozasBe);

function savozasBe() {
    let kivalsztottTablazat = document.querySelector("table");
    kivalsztottTablazat.classList.add("table-striped");
}


//Táblázat sávozásának kikapcsolása
//csikozasKi.addEventListener("click", savozasKi);

function savozasKi() {
    let kivalsztottTablazat = document.querySelector("table");
    kivalsztottTablazat.classList.remove("table-striped");
}

//Szorgalmi: Próbáld meg egy gombra rakni a két funkciót sávozásbe/sávozáski

//Táblázat sávozásának be-kikapcsolása

csikozasBe.addEventListener("click", SavozasBeKi);

function SavozasBeKi() {
    let kivalsztottTablazat = document.querySelector("table");

    if (kivalsztottTablazat.classList.contains("table-striped")) {
        kivalsztottTablazat.classList.remove("table-striped");
        csikozasBe.classList.add("btn-success");
        csikozasBe.classList.remove("btn-danger");
        csikozasBe.innerHTML = "Táblázat sávozásának bekapcsolása";
    } else {
        kivalsztottTablazat.classList.add("table-striped");
        csikozasBe.classList.remove("btn-success");
        csikozasBe.classList.add("btn-danger");
        csikozasBe.innerHTML = "Táblázat sávozásának kikapcsolása";
    }
}

//Dark mode bekapcsolása
//darkMode.addEventListener("click", DarkMode);

function DarkMode() {
    let kivalsztottTablazat = document.querySelector("table");
    kivalsztottTablazat.classList.add("table-dark");
    kivalsztottTablazat.classList.remove("table-light");
}


//Ligh mode bekapcsolása
//lightMode.addEventListener("click", LightMode);

function LightMode() {
    let kivalsztottTablazat = document.querySelector("table");
    kivalsztottTablazat.classList.add("table-light");
    kivalsztottTablazat.classList.remove("table-dark");
}

//Szorgalmi: Próbáld meg egy gombra rakni a két funkciót darkMode/lightMode

lightMode.addEventListener("click", DarkLigthModeKapcsolo);

function DarkLigthModeKapcsolo() {
    let kivalsztottTablazat = document.querySelector("table");
    if (kivalsztottTablazat.classList.contains("table-dark")) {
        kivalsztottTablazat.classList.add("table-light");
        kivalsztottTablazat.classList.remove("table-dark");
        lightMode.classList.remove("btn-light");
        lightMode.classList.add("btn-dark");
        lightMode.innerHTML = "DarkMode bekapcsolása";
    } else {
        kivalsztottTablazat.classList.remove("table-light");
        kivalsztottTablazat.classList.add("table-dark");
        lightMode.classList.add("btn-light");
        lightMode.classList.remove("btn-dark");
        lightMode.innerHTML = "LightMode bekapcsolása";
    }
}



//Tesztsor beillesztése
tesztSor.addEventListener("click", TesztSorBeszuras);

function TesztSorBeszuras() {
    let kivalsztottTablazat = document.querySelector("table");
    let sor = kivalsztottTablazat.insertRow();//-1 paraméter is lehet az insertRow-ban...
    let vezetekNevCella = sor.insertCell(0);
    let keresztNevCella = sor.insertCell(1);
    let emailCella = sor.insertCell(2);
    let telefonCella = sor.insertCell(3);
    let beosztasCella = sor.insertCell(4);
    let aktivalCella = sor.insertCell(5);

    vezetekNevCella.innerHTML = "teszt";
    keresztNevCella.innerHTML = "teszt";
    emailCella.innerHTML = "teszt";
    telefonCella.innerHTML = "teszt";
    beosztasCella.innerHTML = "teszt";
    aktivalCella.innerHTML = "<input type=\"checkbox\" class=\"allapot\">";
}

//ujElemFeltolto.addEventListener("click", ujElemHozzaad);

function ujElemHozzaad() {
    let kivalsztottTablazat = document.querySelector("table");
    let sor = kivalsztottTablazat.insertRow();//-1 paraméter is lehet az insertRow-ban...
    let vezetekNevCella = sor.insertCell(0);
    let keresztNevCella = sor.insertCell(1);
    let emailCella = sor.insertCell(2);
    let telefonCella = sor.insertCell(3);
    let beosztasCella = sor.insertCell(4);
    let aktivalCella = sor.insertCell(5);

    vezetekNevCella.innerHTML = document.querySelector("#vezNev").value;
    keresztNevCella.innerHTML = document.querySelector("#kerNev").value;
    emailCella.innerHTML = document.querySelector("#email").value;
    telefonCella.innerHTML = document.querySelector("#tel").value;
    beosztasCella.innerHTML = document.querySelector("#beosztas").value;
    aktivalCella.innerHTML = "<input type=\"checkbox\" class=\"allapot\">";
}

//Szorgalmi lehetőség: Validáció készítése, akár Regex segítségével.


function ValidacioVezetekNev() {
    let vezetekNev = document.querySelector("#vezNev");
    let uzenet = document.querySelector("#validacios_uzenet_vez");

    if (vezetekNev.value) {
        vezetekNev.style.border = "4px solid green";
        uzenet.innerHTML = "";
        return true;
    } else {
        vezetekNev.style.border = "4px solid red";
        uzenet.innerHTML = "Kérem töltse ki a mezőt!";
    }
}


function ValidacioKeresztNev() {
    let keresztNev = document.querySelector("#kerNev");
    let uzenet = document.querySelector("#validacios_uzenet_ker");

    if (keresztNev.value) {
        keresztNev.style.border = "4px solid green";
        uzenet.innerHTML = "";
        return true;
    } else {
        keresztNev.style.border = "4px solid red";
        uzenet.innerHTML = "Kérem töltse ki a mezőt!";
    }
}


function ValidacioEmail() {
    let email = document.querySelector("#email");
    let uzenet = document.querySelector("#validacios_uzenet_email");
    const regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

    if (email.value) {
        if (regex.test(email.value)) {
            email.style.border = "4px solid green";
            uzenet.innerHTML = "";
            return true;
        } else {
            email.style.border = "4px solid red";
            uzenet.innerHTML = "Nem megfelelő formátum!";
        }
    } else {
        email.style.border = "4px solid red";
        uzenet.innerHTML = "Kérem töltse ki a mezőt!";
    }
}

function ValidacioMobilSzam() {
    let mobilSzam = document.querySelector("#tel");
    let uzenet = document.querySelector("#validacios_uzenet_tel");
    const regex = /^\d{3}-\d{4}$/;

    if (mobilSzam.value) {
        if (regex.test(mobilSzam.value)) {
            mobilSzam.style.border = "4px solid green";
            uzenet.innerHTML = "";
            return true;
        } else {
            mobilSzam.style.border = "4px solid red";
            uzenet.innerHTML = "Nem megfelelő formátum!";
        }
    } else {
        mobilSzam.style.border = "4px solid red";
        uzenet.innerHTML = "Kérem töltse ki a mezőt!";
    }
}


function InputElemekAlaphelyzetbeAllitasa() {
    let mobilSzam = document.querySelector("#tel");
    let email = document.querySelector("#email");
    let keresztNev = document.querySelector("#kerNev");
    let vezetekNev = document.querySelector("#vezNev");
    let beosztas = document.querySelector("#alapertelmezett");

    vezetekNev.value = "";
    vezetekNev.style.border = "none";

    keresztNev.value = "";
    keresztNev.style.border = "none";

    email.value = "";
    email.style.border = "none";

    mobilSzam.value = "";
    mobilSzam.style.border = "none";

    beosztas.selected = true;
}


function SikeresFeltoltes() {
    let uzenet = document.querySelector("#sikeres_feltoltes");

    uzenet.style.display = "block";
    setTimeout(() => {
        uzenet.style.display = "none";
    }, 2000)
}



function Validacio() {
    let vezetekNev = ValidacioVezetekNev();
    let keresztNev = ValidacioKeresztNev();
    let email = ValidacioEmail();
    let mobilSzam = ValidacioMobilSzam();

    if (vezetekNev && keresztNev && email && mobilSzam) {
        ujElemHozzaad();
        InputElemekAlaphelyzetbeAllitasa();
        SikeresFeltoltes();
    }
}

document.querySelector("#ujElemFeltolto").addEventListener("click", Validacio);