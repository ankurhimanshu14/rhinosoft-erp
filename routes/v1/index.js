const router = require('express').Router();

const { registration: userRegistration, login: userLogin } = require('../admin');
const { employeeRegistration } = require('../employees');
const { grnEntry } = require('../GRN');
const { cuttingProduction } = require('../cuttingProduction');
const { createPartMaster } = require('../engineering');
const { heatApprovals } = require('../laboratory');

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
    grnEntry.updateAvailableQty,
    grnEntry.response
);

router.post('/cuttingProduction/newCuttting',
    cuttingProduction.createCuttingRequisition,
    cuttingProduction.fetchCuttingDetails,
    cuttingProduction.insertnewCuttingPlan,
    cuttingProduction.updateTotalWeight,
    cuttingProduction.response
)

router.post('/engineering/newPart',
    createPartMaster.createPartMasterTable,
    createPartMaster.fetchPartDetails,
    createPartMaster.insertnewPart,
    createPartMaster.response
)

router.post('/laboratory/heatApprovals',
    heatApprovals.createApprovalTable,
    heatApprovals.insertNewSteel,
    heatApprovals.response
)

module.exports = router;