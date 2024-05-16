const fs = require('node:fs')

const crearCarpeta = (rutaYNombre)=>{
    fs.mkdir(rutaYNombre,{recursive:false}, (err)=>{
        if (err){
            console.log('carpeta con ese nombre existente')
        }
    })
}

crearCarpeta('./carpetaCreadaDesdeNode')
