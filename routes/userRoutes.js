const userController = require('../controllers/userController.js')
const router = require('express').Router()

router.post('/addUsers', userController.addUser)
router.get('/allUsers', userController.getAllUsers)
router.get('/OneUser/:id', userController.getUser)
router.put('/updateUser/:id', userController.updateUser)
router.delete('/deleteUser/:id', userController.deleteUser)

module.exports = router
