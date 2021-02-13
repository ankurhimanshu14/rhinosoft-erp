const router = require('express').Router();

const { registration: userRegistration, login: userLogin } = require('../admin');

router.post('/users/register',
    userRegistration.createUserTable,
    userRegistration.encryptPassword,
    userRegistration.fetchUserData,
    userRegistration.insertNewUser,
    userRegistration.response
);
router.post('/users/login',
    userLogin.getLoginDetails,
    userLogin.searchInMySQL,
    userLogin.comparePassword,
    userLogin.response
);

module.exports = router;