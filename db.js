const dotenv = require("dotenv");
dotenv.config();
const mongodb = require("mongodb").MongoClient;

let port = process.env.PORT;

if(typeof(port) == 'undefined' || port == null || port == ""){
    port = 300;
}

mongodb.connect(process.env.CONNECTION_STRING, (error, client) => {
    module.exports = client;
    console.log("client: ", client);
    console.log("DB Connection Established Successfully!");
    const app = require("./app");
    app.listen(port);
    console.log("App listening to port: ", port);
});