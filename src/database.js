const mongoose = require("mongoose")

const dbName = "bit-shop"
const uri = `mongodb+srv://bitclases:compak*@bit-cluster.2njakta.mongodb.net/${dbName}?retryWrites=true&w=majority`

mongoose.connect(uri, {useNewUrlParser: true})
    .then((db) => console.log("Conexion a base de datos exitosa"))
    .catch((err) => console.log(err))

module.exports = mongoose