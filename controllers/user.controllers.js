const ctrlHome = {};
const { findById, findByIdAndUpdate, findByIdAndDelete } = require('../models/User');
const User = require('../models/User');

// Devuelve todos los usuarios de la colección
ctrlHome.rutaGet = async (req, res) => {
    
    const users = await User.find() // consulta para todos los documentos
    
    // Respuesta del servidor
    res.json(users);
}

// Controlador que almacena un nuevo usuario
ctrlHome.rutaPost = async (req, res) => {
    const alumno = req.body;
    const user = new User( alumno);
    await user.save() 

    res.json({msg: 'alumno creado correctamente'});
}

// Controlador que actualiza información de los usuarios
ctrlHome.rutaPut = async (req, res) => {
    
    const id = req.params.id;
    const alumno = req.body;
    const user = await User.findByIdAndUpdate(id,alumno,{ new: true })

    res.json({
        msg: 'alumno actualizado correctamente',
        user
    })
}
// Controlador para eliminar un usuario de la BD físicamente
ctrlHome.rutaDelete = async (req, res) => {
    const  id = req.params.id;
    
    try {
        // Ejecución normal del programa
        await User.findByIdAndDelete(id)

        res.json({
            msg: 'alumno eliminado correctamente'
        })
    } catch (error) {
        // Si ocurre un error 
        console.log('Error al eliminar alumno: ', error)
    }
}

module.exports = ctrlHome;