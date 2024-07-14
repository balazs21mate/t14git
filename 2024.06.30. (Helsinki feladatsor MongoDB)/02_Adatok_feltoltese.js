const MongoClient = require("mongodb").MongoClient;
const url = "";

const HelsinkiAdatok = require("./00_Adatok_feldolgozasa");

async function AdatokFeltoltese() {
    try {
        const client = await MongoClient.connect(url);
        const db = client.db("T14");
        const collection = db.collection("Helsinki");

        await collection.insertMany(HelsinkiAdatok);

        console.log("Adatok feltöltve!");

        client.close();
    } catch (error) {
        console.log(error);
    }
}

AdatokFeltoltese();
