const express = require("express");
const router = express.Router();
const UserCtr = require("../controller/UserCtr");
const Company = require("../controller/Company");
const auth = require("../middleware/auth");

router.post("/register", UserCtr.signup);
router.post("/login", UserCtr.signin);

router.post("/organisations", auth, Company.organisation);
router.post("/organisations/:id", auth, Company.up_organisation);
router.get("/getorganisations", auth, Company.getOrgansation);

router.post("/benefit", auth, Company.benefit);
router.post("/benefit/:id", auth, Company.up_benefit);
router.get("/getbenefit", auth, Company.getBenefit);

router.post("/branches", auth, Company.branches);
router.post("/branches/:id", auth, Company.up_branches);
router.get("/getbranches", auth, Company.getBranch);

router.post("/departments", auth, Company.department);
router.post("/departments/:id", auth, Company.up_departments);
router.get("/getdepartments", auth, Company.getdepartment);

router.post("/employees", auth, Company.employees);
router.post("/employees/:id", auth, Company.up_employees);
router.get("/getemployees", auth, Company.getEmployee);

router.post("/grades", auth, Company.grades);
router.post("/grades/:id", auth, Company.up_grades);
router.get("/getgrades", auth, Company.getGrade);

router.post("/position", auth, Company.position);
router.post("/position/:id", auth, Company.up_position);
router.get("/getposition", auth, Company.getPosition);
// it works only the user is admin....
module.exports = router;
