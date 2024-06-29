const MongoClient = require("mongodb").MongoClient;
const url = "mongodb+srv://balazs21mate:eKEEvH91NLLjK0Bs@cluster0.nsw5uto.mongodb.net/";

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