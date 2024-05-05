/*A megoldásodat ebben a fájlban készítsd el, majd fordítsd le typeScript compiler segítségével*/
function KivalasztottBetuk(vizsgaltSzoveg, kivalasztottBetuk) {
    var betukSzama = 0;
    for (var _i = 0, vizsgaltSzoveg_1 = vizsgaltSzoveg; _i < vizsgaltSzoveg_1.length; _i++) {
        var betu = vizsgaltSzoveg_1[_i];
        for (var _a = 0, kivalasztottBetuk_1 = kivalasztottBetuk; _a < kivalasztottBetuk_1.length; _a++) {
            var kivalasztottBetu = kivalasztottBetuk_1[_a];
            if (betu == kivalasztottBetu) {
                betukSzama++;
            }
        }
    }
    return betukSzama;
}
function Szamtani(elsoErtek, masodikErtek, harmadikErtek) {
    if (harmadikErtek - masodikErtek == masodikErtek - elsoErtek) {
        return true;
    }
    else {
        return false;
    }
}
function VizsgaJegy(osszPont) {
    if (osszPont < 50 && osszPont >= 0) {
        return "Elégtelen";
    }
    else if (osszPont < 60 && osszPont > 49) {
        return "Elégséges";
    }
    else if (osszPont < 70 && osszPont > 59) {
        return "Közepes";
    }
    else if (osszPont < 80 && osszPont > 69) {
        return "Jó";
    }
    else if (osszPont <= 100 && osszPont > 79) {
        return "Jeles";
    }
    return "";
}
