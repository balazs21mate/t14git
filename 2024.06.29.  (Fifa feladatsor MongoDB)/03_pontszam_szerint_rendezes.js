const MongoClient = require("mongodb").MongoClient;
const url = "mongodb+srv://balazs21mate:eKEEvH91NLLjK0Bs@cluster0.nsw5uto.mongodb.net/";

async function PontszaSzerintiRendezes() {
    try {
        const client = await MongoClient.connect(url);
        const db = client.db("T14");
        const collection = db.collection("Fifa");

        const result = await collection.find({}, { projection: { _id: 0, Csapat: 1, Helyezes: 1 } }).sort({ Pontszam: -1 }).toArray();

        console.log(result);

        client.close();
    } catch (error) {
        console.log("A művelet nem sikerült: ", err);
    }
}

PontszaSzerintiRendezes();