const userEmailControllers = require('../controllers/userEmailController');

// router
const router = require('express').Router()

router.post('/addUserEmail', userEmailControllers.addUseremail)

router.get('/getAllEmails', userEmailControllers.getAllEmails)

router.get('/getAllUnReadEmails', userEmailControllers.getAllUnReadEmails)

router.get('/:id', userEmailControllers.getOneEmail)

router.delete('/:id', userEmailControllers.deleteUserEmail)  


module.exports = router

