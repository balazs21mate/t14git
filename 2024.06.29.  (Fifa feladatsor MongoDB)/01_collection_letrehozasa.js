const MongoClient = require("mongodb").MongoClient;
const url = "";

async function CollectionLetrehozasa() {
    try {
        const client = await MongoClient.connect(url);
        const db = client.db("T14");

        await db.createCollection("Fifa");
        console.log("A Fifa collection a T14 adatbázisban létrejött.")

        client.close();
    }
    catch (err) { console.log("hiba a művelet során: ", err) }
}

CollectionLetrehozasa();
