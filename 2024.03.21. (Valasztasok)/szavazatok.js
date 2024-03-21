const szavazatok = [
    { korzet: 5, szavazat: 19, nev: "Ablak Antal", part: "-" },
    { korzet: 1, szavazat: 120, nev: " Alma Dalma", part: "GYEP" },
    { korzet: 7, szavazat: 162, nev: " Bab Zsuzsanna", part: "ZEP" },
    { korzet: 2, szavazat: 59, nev: "Barack Barna", part: "GYEP" },
    { korzet: 6, szavazat: 73, nev: "Birs Helga", part: "GYEP" },
    { korzet: 1, szavazat: 154, nev: " Bors Botond", part: "HEP" },
    { korzet: 5, szavazat: 188, nev: " Brokkoli Gyula", part: "ZEP" },
    { korzet: 6, szavazat: 29, nev: "Ceruza Zsombor", part: "-" },
    { korzet: 4, szavazat: 143, nev: " Fasirt Ferenc", part: "HEP" },
    { korzet: 8, szavazat: 157, nev: " Gomba Gitta", part: "TISZ" },
    { korzet: 3, szavazat: 13, nev: "Halmi Helga", part: "-" },
    { korzet: 2, szavazat: 66, nev: "Hold Ferenc", part: "-" },
    { korzet: 7, szavazat: 34, nev: "Hurka Herold", part: "HEP" },
    { korzet: 5, szavazat: 288, nev: " Joghurt Jakab", part: "TISZ" },
    { korzet: 4, szavazat: 77, nev: "Kajszi Kolos", part: "GYEP" },
    { korzet: 2, szavazat: 187, nev: " Kapor Karola", part: "ZEP" },
    { korzet: 6, szavazat: 13, nev: "Karfiol Ede", part: "ZEP" },
    { korzet: 6, szavazat: 187, nev: " Kefir Ilona", part: "TISZ" },
    { korzet: 7, szavazat: 130, nev: " Kupa Huba", part: "-" },
    { korzet: 8, szavazat: 98, nev: "Languszta Auguszta", part: "-" },
    { korzet: 1, szavazat: 34, nev: "Lila Lilla", part: "-" },
    { korzet: 1, szavazat: 56, nev: "Medve Rudolf", part: "-" },
    { korzet: 5, szavazat: 67, nev: "Meggy Csilla", part: "GYEP" },
    { korzet: 3, szavazat: 45, nev: "Moly Piroska", part: "-" },
    { korzet: 4, szavazat: 221, nev: " Monitor Tibor", part: "-" },
    { korzet: 8, szavazat: 288, nev: " Narancs Edmond", part: "GYEP" },
    { korzet: 2, szavazat: 220, nev: " Oldalas Olga", part: "HEP" },
    { korzet: 3, szavazat: 185, nev: " Pacal Kata", part: "HEP" },
    { korzet: 1, szavazat: 199, nev: " Petrezselyem Petra", part: "ZEP" },
    { korzet: 8, szavazat: 77, nev: "Pokol Vidor", part: "-" },
    { korzet: 8, szavazat: 67, nev: "Ragu Ida", part: "HEP" },
    { korzet: 3, szavazat: 156, nev: " Retek Etelka", part: "ZEP" },
    { korzet: 7, szavazat: 129, nev: " Sajt Hajnalka", part: "TISZ" },
    { korzet: 4, szavazat: 38, nev: "Simon Simon", part: "-" },
    { korzet: 3, szavazat: 87, nev: "Szilva Szilvia", part: "GYEP" },
    { korzet: 3, szavazat: 187, nev: " Tejes Attila", part: "TISZ" },
    { korzet: 2, szavazat: 65, nev: "Tejfel Edit", part: "TISZ" },
    { korzet: 4, szavazat: 39, nev: "Uborka Ubul", part: "ZEP" },
    { korzet: 6, szavazat: 288, nev: " Vadas Marcell", part: "HEP" },
    { korzet: 5, szavazat: 68, nev: "Vagdalt Edit", part: "HEP" },
];


function SzerepelE(keresendoAdat, megadottLista) {
    //SzerepelE függvény létrehozása. Visszatérési érték: Boolean
    for (const listaElem of megadottLista) {
        if (keresendoAdat === listaElem) {
            return true;
        }
    }

}


// 1.feladat

let kepviselokSzamaGomb = document.querySelector("#kepviselok_szama_gomb");


kepviselokSzamaGomb.addEventListener("click", KepviselokSzama);


function KepviselokSzama() {
    //Képviselők számának megszámlálása és kiíratása
    let kepviselokSzamaKiir = document.querySelector("#kepviselok_szama_kiir");

    kepviselokSzamaKiir.innerHTML = `A helyhatósági választáson ${szavazatok.length} képviselőjelölt indult.`
}




// 2.feladat

let partKepviselokGomb = document.querySelector("#partkepviselok_gomb");


partKepviselokGomb.addEventListener("click", PartKepviselokSzamaKiir);



function PartKepviselokSzamol(valasztottPart) {
    //Pártképviselők/Függetlenek megszámlálása. Visszatérési érték: number
    let partKepviselokSzama = 0;

    for (const szavazat of szavazatok) {
        if (szavazat.part === valasztottPart) {
            partKepviselokSzama++;
        }
    }

    return partKepviselokSzama;
}



function PartKepviselokSzamaKiir() {
    //Képviselők számának kiírása 
    let valasztottPart = document.querySelector("#partok").value;
    let partKepviselokKiir = document.querySelector("#partkepviselok_kiir");


    if (valasztottPart === "-") {
        partKepviselokKiir.innerHTML = `Függetlenként ${PartKepviselokSzamol(valasztottPart)} képviselő indult a választáson.`
    } else {
        partKepviselokKiir.innerHTML = `A ${valasztottPart} ${PartKepviselokSzamol(valasztottPart)} képviselőt indított a választáson.`
    }
}




//3.feladat

let szavazatokGomb = document.querySelector("#szavazatok_gomb");

szavazatokGomb.addEventListener("click", SzavazatokSzamaKiir);



function NevValidalas(vezetekNev, keresztNev) {
    //Bekért nevek ellenőrzése, ha a mezők kivannak töltve a visszatérési érték: Boolean
    let vezetekNevSzerepel = vezetekNev.value != "" ? true : false;
    let keresztNevSzerepel = keresztNev.value != "" ? true : false;

    let vezetekNevHibaUzenet = document.querySelector("#vezNevHiba");
    let keresztNevHibaUzenet = document.querySelector("#kerNevHiba");

    if (vezetekNevSzerepel) {
        vezetekNev.style.border = "1px solid green";
        vezetekNevHibaUzenet.style.display = "none";
    } else {
        vezetekNev.style.border = "1px solid red";
        vezetekNevHibaUzenet.style.display = "block";
    }

    if (keresztNevSzerepel) {
        keresztNev.style.border = "1px solid green";
        keresztNevHibaUzenet.style.display = "none";
    } else {
        keresztNev.style.border = "1px solid red";
        keresztNevHibaUzenet.style.display = "block";
    }

    if (vezetekNevSzerepel && keresztNevSzerepel) {
        return true;
    }
}



function KepviseloNeveBekeres() {
    //A képviselő vezeték és kereszt nevének bekérése. Ha a validálás sikeres a visszatérési érték A képviselő teljes neve, string.
    let vezetekNev = document.querySelector("#vezNev");
    let keresztNev = document.querySelector("#kerNev");

    if (NevValidalas(vezetekNev, keresztNev)) {
        return vezetekNev.value + " " + keresztNev.value;
    }
}



function KepviseloSzerepelE(nev) {
    //A képviselő neve szerepel-e az adatbázisban. Visszatérési érték: Boolean
    for (const szavazat of szavazatok) {
        if (szavazat.nev.trim() == nev) {
            return true;
        }
    }
}



function SzavazatokSzamaKiir() {
    //Ha a SzerepelE függvény visszatérési értéke: TRUE, a szavazatok kiírása
    let szavazatokSzamaKiir = document.querySelector("#szavazatok_szama_kiir");
    let kepviseloTeljesNeve = KepviseloNeveBekeres();
    let szerepelE = KepviseloSzerepelE(kepviseloTeljesNeve);


    if (kepviseloTeljesNeve) {
        for (const szavazat of szavazatok) {

            if (szerepelE) {
                if (szavazat.nev.trim() == kepviseloTeljesNeve) {
                    szavazatokSzamaKiir.innerHTML = `${kepviseloTeljesNeve} ${szavazat.szavazat} szavazatot gyűjtött be.`;
                }
            } else {
                szavazatokSzamaKiir.innerHTML = "Ilyen nevű képviselőjelölt nem szerepel a nyilvántartásban!";
            }
        }
    }
}




//4.feladat

let szavazatokAranyaGomb = document.querySelector("#szavazatok_aranya_gomb");

szavazatokAranyaGomb.addEventListener("click", SzavazatokAranyaKiir);



function LeadottSzavazatokSzama() {
    //A leadott szavazatok megszámlálása. A visszatérési érték: number
    let leadottSzavazatokSzama = 0;

    for (const szavazat of szavazatok) {
        leadottSzavazatokSzama += szavazat.szavazat;
    }

    return leadottSzavazatokSzama;
}



function SzavazatokAranyanakSzamitasa() {
    //A szavazásra jogosultak és a tényleges szavazók arányának kiszámítása. A visszatérési érték: string
    const szavazasraJogosultakSzama = 12345;
    const tenylegesSzavazokSzama = LeadottSzavazatokSzama();

    const szavazatokAranya = (tenylegesSzavazokSzama / szavazasraJogosultakSzama) * 100;

    return `${Math.round(szavazatokAranya * 100) / 100}%`;
}



function SzavazatokAranyaKiir() {
    //A szavazatok arányának kiíratása
    let szavazatokAranyaKiir = document.querySelector("#szavazatok_aranya_kiir");

    szavazatokAranyaKiir.innerHTML = `A választáson ${LeadottSzavazatokSzama()} állampolgár, a jogosultak ${SzavazatokAranyanakSzamitasa()}-a vett részt.`
}




//5.feladat

let szavazatokMennyisegeGomb = document.querySelector("#szavazatok_mennyisege_gomb");

szavazatokMennyisegeGomb.addEventListener("click", SzavazatokMennyisegeKiir);



function PartokListaLetrehozasa() {
    //A választáson szereplő pártok listába szedése. Visszatérési érték: list
    let partok = [];

    for (const szavazat of szavazatok) {
        let szerepelE = SzerepelE(szavazat.part, partok)

        if (!szerepelE) {
            partok.push(szavazat.part);
        }
    }

    return partok
}



function PartokObjectListaLetrehozasa() {
    //A pártokból object lista készítése. Visszatérési érték: Object list
    let partok = PartokListaLetrehozasa();
    let partokObjectLista = [];

    for (const part of partok) {
        partokObjectLista.push({ "part": part, "szavazat": 0 })
    }

    return partokObjectLista;
}



function SzavazatokMennyisegeSzamolas() {
    //A pártokhoz tartozó szavazat növelése az pártokra szavazók számával. Visszatérési érték: Object list
    let partokObjectLista = PartokObjectListaLetrehozasa();

    for (const szavazat of szavazatok) {
        for (const part of partokObjectLista) {
            if (szavazat.part === part.part) {
                part.szavazat += szavazat.szavazat;
            }
        }
    }

    return partokObjectLista;
}



function SzavazatokMennyisegeKiir() {
    //Szavazatokhoz tartozó táblázat létrehozása és kiírása
    let table = document.querySelector("#szavazatok_mennyisege_tablazat");
    let partokObjectLista = SzavazatokMennyisegeSzamolas();

    table.classList.add("table");

    for (const part of partokObjectLista) {
        let ujsor = table.insertRow(-1);
        let partNeve = ujsor.insertCell(0);
        let szavazatokMennyisege = ujsor.insertCell(1);

        partNeve.innerHTML = part.part === "-" ? "Független" : part.part;
        szavazatokMennyisege.innerHTML = part.szavazat;
    }

    szavazatokMennyisegeGomb.removeEventListener("click", SzavazatokMennyisegeKiir);
}




//6.feladat

let legtobbSzavazatGomb = document.querySelector("#legtobb_szavazat_gomb");

legtobbSzavazatGomb.addEventListener("click", LegtobbSzavazatKiir);



function LegtobbSzavazat() {
    //A legnagyobb mennyiségű szavazat megkeresése.Visszatérési érték: list
    let legtobbSzavazat = 0;

    for (const szavazat of szavazatok) {
        if (szavazat.szavazat > legtobbSzavazat) {
            legtobbSzavazat = szavazat.szavazat
        }
    }

    return legtobbSzavazat
}



function LegtobbSzavazattalRendelkezoKepviselok() {
    //A legtöbb szavazattal rendelkező képviselők listába rendezése. Visszatérési érték: Object list
    let legtobbSzavazattalRendelkezoKepviselokListaja = [];
    let legtobbSzavazat = LegtobbSzavazat();

    for (const szavazat of szavazatok) {
        if (szavazat.szavazat === legtobbSzavazat) {
            legtobbSzavazattalRendelkezoKepviselokListaja.push(szavazat);
        }
    }

    return legtobbSzavazattalRendelkezoKepviselokListaja;
}



function LegtobbSzavazatKiir() {
    //A legtöbb szavazattal rendelkező képviselők kiíratása listában
    let legtobbSzavazatLista = document.querySelector("#legtobb_szavazat_lista");

    let legtobbSzavazattalRendelkezoKepviselokListaja = LegtobbSzavazattalRendelkezoKepviselok();

    for (const kepviselo of legtobbSzavazattalRendelkezoKepviselokListaja) {
        let li = document.createElement("li");
        li.innerHTML = `Neve: ${kepviselo.nev.trim()}, pártja: ${kepviselo.part}, szavazat: ${kepviselo.szavazat}db.`;
        li.classList.add("list-group-item");
        legtobbSzavazatLista.appendChild(li);
    }

    legtobbSzavazatGomb.removeEventListener("click", LegtobbSzavazatKiir);
}




//7.feladat

let nyertesekGomb = document.querySelector("#nyertesek_gomb");

nyertesekGomb.addEventListener("click", NyertesekKiir);


function KorzetekListabaSzedese() {
    //Szavazó körzetek listába szedése. Visszatérési érték: list
    let korzetekListaja = [];

    for (const szavazat of szavazatok) {
        if (!SzerepelE(szavazat.korzet, korzetekListaja)) {
            korzetekListaja.push(szavazat.korzet);
        }
    }

    return korzetekListaja.sort();
}


function LegtobbSzavazatAKorzetben() {
    //Legtöbb szavazat kiszűrése körzetenként. Visszatérési érték:Object list;
    let korzetek = KorzetekListabaSzedese();
    let legtobbSzavazatAKorzetbenLista = [];

    for (const korzet of korzetek) {
        let legtobbSzavazatObjektum = { "korzet": korzet, "legtobbSzavazat": 0 };

        for (const szavazat of szavazatok) {
            //Körzetek egyezésének vizsgálata
            if (szavazat.korzet === korzet) {
                //Szavazatok számlálása körzetek szerint
                if (szavazat.szavazat > legtobbSzavazatObjektum.legtobbSzavazat) {
                    legtobbSzavazatObjektum.legtobbSzavazat = szavazat.szavazat;
                } else {
                    //Ha a legtobbSzavazatObjektum nem szerepel a legtobbSzavazatAKorzetbenLista-ban, akkor feltöltjük vele
                    if (!SzerepelE(legtobbSzavazatObjektum, legtobbSzavazatAKorzetbenLista)) {
                        legtobbSzavazatAKorzetbenLista.push(legtobbSzavazatObjektum);
                    }
                }
            }
        }


    }

    return legtobbSzavazatAKorzetbenLista;
}


function NyertesKepviselok() {
    //A Körzetenkénti legtöbb szavazatot összevetve a szavazatokkal, kiszűrjük a nyertes képviselőket. Visszatérési érték: Object list
    let legtobbSzavazatokListaja = LegtobbSzavazatAKorzetben();
    let nyertesKepviselokListaja = [];

    for (const legtobbSzavazat of legtobbSzavazatokListaja) {
        for (const szavazat of szavazatok) {
            if (legtobbSzavazat.korzet == szavazat.korzet && legtobbSzavazat.legtobbSzavazat == szavazat.szavazat) {
                nyertesKepviselokListaja.push(szavazat);
            }
        }
    }

    return nyertesKepviselokListaja;
}

function NyertesekKiir() {
    //Nyertesek táblázat létrehozása és megjelenítése
    let nyertesKepviselok = NyertesKepviselok();
    let table = document.querySelector("#nyertesek_tablazat");

    for (const nyertes of nyertesKepviselok) {
        let ujSor = table.insertRow(-1);

        let korzet = ujSor.insertCell(0);
        let nev = ujSor.insertCell(1);
        let part = ujSor.insertCell(2);
        let szavazat = ujSor.insertCell(3);

        korzet.innerHTML = nyertes.korzet;
        nev.innerHTML = nyertes.nev;
        part.innerHTML = nyertes.part === "-" ? "Független" : nyertes.part;
        szavazat.innerHTML = nyertes.szavazat;
    }

    table.classList.add("table");

    nyertesekGomb.removeEventListener("click", NyertesekKiir);
}