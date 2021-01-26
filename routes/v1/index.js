const router = require('express').Router();

const { registration: userRegistration } = require('../admin');

router.post('/users/registration', userRegistration.getDataFromUser, userRegistration.saveDataToMySQL, userRegistration.sendResponse);

module.exports = router;