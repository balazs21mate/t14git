const MongoClient = require("mongodb").MongoClient;
const url = "";

const FifaAdatokListaja = require("./Fifa_adatok_letrehozasa");


async function AdatFeltoltes() {
    try {
        const client = await MongoClient.connect(url);
        const db = client.db("T14");
        const collection = db.collection("Fifa");

        await collection.insertMany(FifaAdatokListaja);

        console.log("A feltöltés sikeres!");
        client.close();
    } catch (error) {
        console.log("A művelet nem sikerült: ", error);
    }
}

AdatFeltoltes();
