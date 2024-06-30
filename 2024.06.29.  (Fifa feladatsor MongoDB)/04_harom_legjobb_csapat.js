const MongoClient = require("mongodb").MongoClient;
const url = "";

async function HaromLegjobbCsapat() {
    try {
        const client = await MongoClient.connect(url);
        const db = client.db("T14");
        const collection = db.collection("Fifa");

        const result = await collection.find().sort({ Helyezes: 1 }).limit(3).toArray();

        console.log(result);

        client.close();

    } catch (err) {
        console.log("A művelet nem sikerült: ", err);
    }
}

HaromLegjobbCsapat();
