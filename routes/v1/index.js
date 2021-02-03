const router = require('express').Router();

const { registration: userRegistration } = require('../admin');

router.post('/users/register', userRegistration.getDataFromUser, userRegistration.saveDataToMySQL);

module.exports = router;