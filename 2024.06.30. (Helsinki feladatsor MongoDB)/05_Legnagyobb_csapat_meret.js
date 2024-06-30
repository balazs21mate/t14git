const MongoClient = require("mongodb").MongoClient;
const url = "mongodb+srv://balazs21mate:eKEEvH91NLLjK0Bs@cluster0.nsw5uto.mongodb.net/";

const HelsinkiAdatok = require("./00_Adatok_feldolgozasa");

function LegnagyobbCsapatMeretKereses(adatLista) {
    let csapatMeret = adatLista[0].CsapatMeret;

    for (const item of adatLista) {
        if (item.CsapatMeret > csapatMeret) {
            csapatMeret = item.CsapatMeret;
        }
    }

    return csapatMeret;
}

const legnagyobbCsapatMeret = LegnagyobbCsapatMeretKereses(HelsinkiAdatok);

async function LegnagyobbCsapatMeret() {
    try {
        const client = await MongoClient.connect(url);
        const db = client.db("T14");
        const collection = db.collection("Helsinki");

        const result = await collection.find({ CsapatMeret: legnagyobbCsapatMeret }).toArray();

        console.log(result);

        client.close();
    } catch (error) {
        console.log(error);
    }
}

LegnagyobbCsapatMeret();