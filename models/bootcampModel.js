const { Router } = require('express')
const mongoose = require('mongoose')
const router = require('../routes/bootcampRoutes')

//Definir el schema
//Plano gral de todo bootcamp 

const bootcampSchema = new mongoose.Schema({
    name:{
        type: String,
        required: [true, "nombre requerido"],
        unique : [true, "nombre repetido" ], 
    },
    phone:{
        type: Number,
        required: [true, "telefono requerido"],
        max: [ 9999999999 , "telefono muy largo"],
    },
    address:{
        type: String,
        required: [true, "direccion requerido"],
        maxlength : [20, "direccion muy largo"],
        minlength : [10, "direccion muy corta"],
    },
    topics:{
        type: [String],
        enum: [ "AI" ,
                "Backend" ,
                "Frontend" ,
                "Devops"
            ]

    },
    createdAt: Date
})



//exportar el modelo
const bootcampModel = mongoose
                    .model("Bootcamp" ,
                     bootcampSchema)

module.exports = bootcampModel