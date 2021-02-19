const router = require('express').Router();

const { registration: userRegistration, login: userLogin } = require('../admin');
const { employeeRegistration } = require('../employees');
const { grnEntry } = require('../GRN');


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

router.post('/employees/register',
    employeeRegistration.createEmployeeTable,
    employeeRegistration.fetchEmployeeData,
    employeeRegistration.insertNewEmployee,
    employeeRegistration.response
);

router.post('/store/grnEntry',
    grnEntry.createGRNEntryTable,
    grnEntry.fetchGRNDetails,
    grnEntry.insertnewGRN,
    grnEntry.repsonse
);

module.exports = router;