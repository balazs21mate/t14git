const MongoClient = require("mongodb").MongoClient;
const url = "";

async function ValtozatlanHelyezesuCsapatok() {
    try {
        const client = await MongoClient.connect(url);
        const db = client.db("T14");
        const collection = db.collection("Fifa");

        const result = await collection.find({ Valtozas: 0 }, { projection: { _id: 0, Csapat: 1 } }).toArray();

        console.log(result);

        client.close();

    } catch (error) {
        console.log("A művelet nem sikerült: ", error);
    }
}

ValtozatlanHelyezesuCsapatok();
