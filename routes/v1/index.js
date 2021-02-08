const router = require('express').Router();

const { registration: userRegistration, login: userLogin } = require('../admin');

router.post('/users/register', userRegistration.encryptPassword, userRegistration.getDataFromUser, userRegistration.saveDataToMySQL);
router.post('/users/login', userLogin.fetchLoginDetails, userLogin.searchInMySQL, userLogin.verifyUser);

module.exports = router;