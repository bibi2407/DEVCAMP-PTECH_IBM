const { Router } = require('express')
const mongoose = require('mongoose')
const router = require('../routes/coursesRoutes')

//Definir el schema
//Plano gral de todo bootcamp 

const coursesSchema = new mongoose.Schema({
    title:{
        type: String,
        required: [true, "titulo requerido"],
        maxlength : [30, "Maximo 30 carácteres"],
        minlength : [10, "Minimo 10 carácteres"], 
    },
    description:{
        type: String,
        required: [true, "telefono requerido"],
        minlength : [10, "Minimo 10 carácteres"],
    },
    weeks:{
        type: Number,
        required: [true, "Semanas requeridas"],
        max : [9, "El número maximo de semanas para un curso es 9"],
    },
    enroll_cost:{
        type: Number,
        required: [true, "enroll_cost requerido"],
    },
    minimum_skill:{
        type: [String],
        required: [true, "Semanas requeridas"],
        enum: [ "Beginner" ,
                "Intermediate" ,
                "Advanced" ,
                "Expert"
            ]

    }
})



//exportar el modelo
const coursesModel = mongoose.model("Courses" ,coursesSchema)

module.exports = coursesModel