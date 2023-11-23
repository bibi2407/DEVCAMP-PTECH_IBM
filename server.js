//dependecias del proyecto
const express = require('express')
const dotenv = require('dotenv')
const colors = require('colors')
//dependencia de conexion:
const conectarDB =require("./config/db")

//configurar dotenv
dotenv.config({
    path: "./config/.env"
})

//conectar a bd 
conectarDB()
//dependencias de rutas
const bootcampsRoutes = require('./routes/bootcampRoutes')
const coursesRoutes = require('./routes/coursesRoutes')
//express
const app = express()

//habilitar express para recibir el body en formato json
app.use(express.json())

//establecer rutas del proyecto
app.use('/api/v1/bootcamps' , 
        bootcampsRoutes )
app.use('/api/v1/courses' , 
        coursesRoutes )
//crear el servidor de aplicaciones 
//aplicaciones express
app.listen(process.env.PORT, 
    () => {
        console.log(`servidor express ejecutando ${process.env.PORT}`.bgCyan.yellow.underline)

})