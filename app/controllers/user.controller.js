const db = require("../models");
const User = db.user;

exports.uploadLogo = (req,res) => {
    return res.status(200).send({
        message:'Img Actualizado',
        filename: req.file.filename
    });
}
exports.create = (req, res) => {
    // const {sap,
    //     eco,
    //     claseUser,
    //     tipoCombustible,
    //     distribucion,
    //     centroEmplazamiento,
    //     estatusSap,
    //     estatusCutover,
    //     matricula,
    //     fabricante,
    //     anio,
    //     modelo,
    //     tiempoRenovacion,
    //     agencia,
    //     imagen,
    //     propietario,
    //     numSerie,
    //     palets,
    //     capacidadCarga,
    //     ubicacionTecnica,
    //     cluster,
    //     fecha_registro} = req.body;

    // return Vehiculo.create({
    //         sap : sap,
    //         eco : eco,
    //         claseVehiculo : claseVehiculo,
    //         tipoCombustible : tipoCombustible,
    //         distribucion : distribucion,
    //         centroEmplazamiento : centroEmplazamiento,
    //         estatusSap : estatusSap,
    //         estatusCutover : estatusCutover,
    //         matricula : matricula,
    //         fabricante : fabricante,
    //         anio : anio,
    //         modelo : modelo,
    //         tiempoRenovacion : tiempoRenovacion,
    //         agencia : agencia,
    //         imagen : imagen,
    //         propietario : propietario,
    //         numSerie : numSerie,
    //         palets : palets,
    //         capacidadCarga : capacidadCarga,
    //         ubicacionTecnica : ubicacionTecnica,
    //         cluster : cluster,
    //         fecha_registro : fecha_registro,
    // })
    // .then((vehiculo) => {
    //     console.log(">>Created Vehiculo"+ JSON.stringify(vehiculo, null, 4));
    //     res.status(200).send(vehiculo);
    //     return ;
    // })
    // .catch((err) => {
    //     res.status(500).send({
    //         message:
    //           err.message || "Some error occurred while creating the Vehicuo."
    //       });
    //     console.log(">>Error white creating Vehiculo:", err);
    //     return
    // });
  
};

