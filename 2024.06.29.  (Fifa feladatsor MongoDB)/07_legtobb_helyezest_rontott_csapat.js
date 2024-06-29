const MongoClient = require("mongodb").MongoClient;
const url = "mongodb+srv://balazs21mate:eKEEvH91NLLjK0Bs@cluster0.nsw5uto.mongodb.net/";

const fifaAdatok = require("./Fifa_adatok_letrehozasa");

function LegkisebbValtozas(adatokListaja) {
    let legkisebbValtozas = adatokListaja[0].Valtozas;

    for (const item of adatokListaja) {
        if (item.Valtozas < legkisebbValtozas) {
            legkisebbValtozas = item.Valtozas
        }
    }

    return legkisebbValtozas;
}

const legkisebbValtozas = LegkisebbValtozas(fifaAdatok);

async function LegtobbHelyezestRontottCsapat() {
    try {
        const client = await MongoClient.connect(url);
        const db = client.db("T14");
        const collection = db.collection("Fifa");

        const result = await collection.find({ Valtozas: legkisebbValtozas }, { projection: { _id: 0, Csapat: 1, Valtozas: 1 } }).toArray();

        console.log(result);

        client.close();
    } catch (error) {
        console.log("A művelet nem sikerült: ", error);
    }
}

LegtobbHelyezestRontottCsapat();