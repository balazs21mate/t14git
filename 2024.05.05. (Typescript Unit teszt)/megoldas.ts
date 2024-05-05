/*A megoldásodat ebben a fájlban készítsd el, majd fordítsd le typeScript compiler segítségével*/

function KivalasztottBetuk(vizsgaltSzoveg: string, kivalasztottBetuk: string[]): number {
    let betukSzama: number = 0;

    for (const betu of vizsgaltSzoveg) {
        for (const kivalasztottBetu of kivalasztottBetuk) {
            if (betu == kivalasztottBetu) {
                betukSzama++;
            }
        }
    }

    return betukSzama;
}



function Szamtani(elsoErtek: number, masodikErtek: number, harmadikErtek: number): boolean {

    if (harmadikErtek - masodikErtek == masodikErtek - elsoErtek) {
        return true;
    } else {
        return false;
    }
}



function VizsgaJegy(osszPont: number): string {
    if (osszPont < 50 && osszPont >= 0) {
        return "Elégtelen";
    } else if (osszPont < 60 && osszPont > 49) {
        return "Elégséges";
    } else if (osszPont < 70 && osszPont > 59) {
        return "Közepes";
    } else if (osszPont < 80 && osszPont > 69) {
        return "Jó";
    } else if (osszPont <= 100 && osszPont > 79) {
        return "Jeles";
    }
    return "";
}