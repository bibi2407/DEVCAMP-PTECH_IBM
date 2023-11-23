const express= require('express')
const coursesModel = require('../models/coursesModel')
const mongoose = require('mongoose')
const router = express.Router()

//definir rutas de courses
//con el ruteador
router.get('/', async (req , res) =>{
    //seleccionar todos los courses en la coleccion
    try {
      const courses = 
            await coursesModel.find()
        if(courses.lenght === 0){
            res.
                status(400).
                json({
                    success: false,
                    msg: "No hay cursos en la coleccion que mostrar"
            })
        }else{
            res.
                status(200).
                json({
                    success: true,
                    data: courses
            })
        }  
    } catch (error) {
        res.status(500).json({
            success: false,
            msg: error.message
        })
    }
     
})

//seleccionar courses por id
router.get('/:id', async (req , res) => {

    
    try {
         //recoger el parametro por id 
        coursesid = req.params.id
        //validar el id suministrado
        if(!mongoose.Types.ObjectId.isValid(coursesid)){
            res.status(400).json({
                succes: false,
                msg: "el id no es valido"
            })
        }else{
          //seleccionar el courses por id
            selected_courses = await coursesModel.findById(coursesid)

            if(selected_courses){
            //se encontro el courses
                res.status(200).json({
                    success: true,
                    results:  selected_courses
                })
            }else{
            //no se encotro el bootcamp
                res.status(400).json({
                    succes:false,
                    msg:`no se encontro el curso ${coursesid}`
                })
            }
        //enviar respuesta
          
        }
        
    }catch(error){
        res.status(500).json(
        {
            success: false,
            msg: error.message
        })
    }
   
})

//crear courses
router.post('/', async(req , res)=>{
   try {
     const newCourses = await coursesModel.create(req.body)
        res.status(201).json({
        success: true,
        results: newCourses
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            msg: error.message
            })
   }
       
   
    
})

router.put('/:id', async(req , res)=> {
    try {
        //recoger el parametro por id 
       coursesid = req.params.id
       //validar el id suministrado
       if(!mongoose.Types.ObjectId.isValid(coursesid)){
           res.status(400).json({
               succes: false,
               msg: "el id no es valido"
           })
       }else{
         //seleccionar el bootcamp por id
           selected_courses = await coursesModel.
                            findByIdAndUpdate(coursesid,
                                             req.body,
                                             {
                                                    new:true,
                                                    runValidators:true
                                             })

           if(selected_courses){
           //se encontro el courses
               res.status(200).json({
                   success: true,
                   results:  selected_courses
               })
           }else{
           //no se encotro el courses
               res.status(400).json({
                   succes:false,
                   msg:`no se encontro el courses ${coursesid}`
               })
           }
       //enviar respuesta
         
       }
       
   }catch(error){
       res.status(500).json(
       {
           success: false,
           msg: error.message
       })
   }
})
//Delete
router.delete("/:id", async(req, res)=>{
    try {
        //recoger el parametro por id 
       coursesid = req.params.id
       //validar el id suministrado
       if(!mongoose.Types.ObjectId.isValid(coursesid)){
           res.status(400).json({
               succes: false,
               msg: "el id no es valido"
           })
       }else{
         //seleccionar el bootcamp por id
           selected_courses = await coursesModel.
                            findByIdAndDelete(coursesid,
                                             req.body,
                                             {
                                                    new:true,
                                                    runValidators:true
                                             })

           if(selected_courses){
           //se encontro el courses
               res.status(200).json({
                   success: true,
                   results:  selected_courses
               })
           }else{
           //no se encotro el courses
               res.status(400).json({
                   succes:false,
                   msg:`no se encontro el courses ${coursesid}`
               })
           }
       //enviar respuesta
         
       }
       
   }catch(error){
       res.status(500).json(
       {
           success: false,
           msg: error.message
       })
   }
})

//exportar ruteador
module.exports = router