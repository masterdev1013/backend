let mongoose = require("mongoose");

var objDepartmentsInfo = {
  organisationsID: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "organisationsinfoSchemas",
  },
  ParentID: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "departmentsinfoSchemas",
  },
  managerID: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "employeesinfoSchemas",
  },
  departments_Ar_Name: {
    type: String,
    default: "",
  },
  departments_En_Name: {
    type: String,
    default: "",
  },
  department_units_total: {
    type: String,
    default: "",
  },
  department_employees_total: {
    type: String,
    default: "",
  },
  departments_status: {
    type: Boolean,
    default: true,
  },
};

let departmentsinfoSchema = mongoose.Schema(objDepartmentsInfo);
var DepartmentsinfoSchemas = (module.exports = mongoose.model(
  "departmentsinfoSchemas",
  departmentsinfoSchema
));

module.exports.getBenefits = function (callback, limit) {
  DepartmentsinfoSchemas.find(callback).limit(limit);
};
