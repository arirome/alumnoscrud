const router = require('express').Router();

const { 
    rutaGet, rutaPost, rutaPut, rutaDelete, deleteUser
 } = require('../controllers/user.controllers');

//  Ruta que devuelve todos los usuarios
router.get('/', rutaGet)

router.post('/', rutaPost)

// Actualizar usuarios
router.put('/:id', rutaPut)



router.delete('/:id', rutaDelete)

module.exports = router;
