const mongoose = require('mongoose')

//funcion para conexion a db
const conectarDB = async() => {
    //crear el objeto de conexion
    const conn = await mongoose.connect(
        'mongodb://127.0.0.1:27017/DEVCAMP-PTECH'
    )
    console.log("mongodb conectado".bgGreen.blue)

}


 module.exports = conectarDB