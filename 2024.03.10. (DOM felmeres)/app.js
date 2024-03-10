// 1. feladat

let karakterInput = document.querySelector("#karakterszam_input");


function KarakterSzamlalo() {

    let karakterKiir = document.querySelector("#karakterszam_kiir");
    let karakterSzam = 0;

    for (const karakter of this.value) {
        karakterSzam++;
    }

    karakterKiir.innerHTML = "Karakterek száma: " + karakterSzam;
}

karakterInput.addEventListener('keyup', KarakterSzamlalo);




// 2. feladat

function Kirajzol() {
    let xKoordinata = Number(document.querySelector("#x_koordinata").value);
    let yKoordinata = Number(document.querySelector("#y_koordinata").value);

    let negyzet = document.querySelector("#negyzet");

    console.log(xKoordinata)
    console.log(yKoordinata)

    negyzet.style.width = `${xKoordinata}px`;
    negyzet.style.height = `${yKoordinata}px`;
    negyzet.style.border = "1px solid black";
}

let kirajzolGomb = document.querySelector("#kirajzol");

kirajzolGomb.addEventListener("click", Kirajzol);




// 3. feladat

let bujocskaGomb = document.querySelector("#bujocska");

function Bujocska() {
    let macska = document.querySelector("#macska");

    if (macska.classList.contains("macska_elrejt")) {
        macska.classList.remove("macska_elrejt");
        macska.classList.add("macska_mutat");
        bujocskaGomb.innerHTML = "Elrejt";
    } else {
        macska.classList.remove("macska_mutat");
        macska.classList.add("macska_elrejt");
        bujocskaGomb.innerHTML = "Mutat";
    }
}


bujocskaGomb.addEventListener("click", Bujocska);




// 4. feladat

function validEmail(vizsgalandoEmail) {
    let minta = /^[0-9a-z\.-]+@([0-9a-z-]+\.)+[a-z]{2,4}$/i;
    if (minta.test(vizsgalandoEmail))//==true val
    {
        return true;
    }
    else {
        return false;
    }
}

function Hibauzenet() {
    let email = document.querySelector("#email").value;
    let emailMegerosit = document.querySelector("#email_megerosites").value;

    let hibauzenet = document.querySelector("#hibauzenet");

    if (email != "") {
        if (emailMegerosit != "") {
            if (email == emailMegerosit) {
                if (validEmail(email) && validEmail(emailMegerosit)) {
                    hibauzenet.innerHTML = "Adatok rögzítése sikeres!";
                    hibauzenet.style.color = "green";
                } else {
                    hibauzenet.innerHTML = "Nem megfelelő az e-mail cím formátuma!";
                }
            } else {
                hibauzenet.innerHTML = "A két mező tartalma nem egyezik!";
            }
        } else {
            hibauzenet.innerHTML = "Nincs kitöltve az e-mail megerősítése mező!";
        }
    } else if (emailMegerosit == "") {
        hibauzenet.innerHTML = "Nincs kitöltve egyik mező sem!";
    } else {
        hibauzenet.innerHTML = "Nincs kitöltve az e-mail mező!";
    }
}

let ellenorzoGomb = document.querySelector("#ellenorzes");

ellenorzoGomb.addEventListener("click", Hibauzenet);