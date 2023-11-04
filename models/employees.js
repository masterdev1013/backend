let mongoose = require("mongoose");

var objEmployeesInfo = {
  organisationsID: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "organisationsinfoSchemas",
  },
  employee_Ar_Name: {
    type: String,
    default: "",
  },
  employee_En_Name: {
    type: String,
    default: "",
  },
  employee_personal_photo: {
    type: String,
    default: "",
  },
  employee_nationality: {
    type: String,
    default: "",
  },
  employee_religion: {
    type: String,
    default: "",
  },
  employee_gender: {
    type: String,
    default: "",
  },
  employee_birth_date: {
    type: String,
    default: "",
  },
  employee_birth_place: {
    type: String,
    default: "",
  },
  employee_marital_status: {
    type: String,
    default: "",
  },
  employee_dependents_total: {
    type: String,
    default: "",
  },
  employee_children_total: {
    type: String,
    default: "",
  },
  employee_qualification: {
    type: String,
    default: "",
  },
  employee_specialization: {
    type: String,
    default: "",
  },
  employee_Mobile_No: {
    type: String,
    default: "",
  },
  employee_Work_Tel_No: {
    type: String,
    default: "",
  },
  employee_Work_Ext_No: {
    type: String,
    default: "",
  },
  employee_Work_Email: {
    type: String,
    default: "",
  },
  employee_Contray: {
    type: String,
    default: "",
  },
  employee_City: {
    type: String,
    default: "",
  },
  employee_Area: {
    type: String,
    default: "",
  },
  employee_Address: {
    type: String,
    default: "",
  },
  employee_National_Address: {
    type: String,
    default: "",
  },
  employee_ID_Iqama_No: {
    type: String,
    default: "",
  },
  employee_ID_Iqama_Issue_Date: {
    type: String,
    default: "",
  },
  employee_ID_Iqama_Expiry_Date: {
    type: String,
    default: "",
  },
  employee_ID_Iqama_Place_of_Issue: {
    type: String,
    default: "",
  },
  employee_position_in_Iqama: {
    type: String,
    default: "",
  },
  employee_Passport_No: {
    type: String,
    default: "",
  },
  employee_Passport_Issue_Date: {
    type: String,
    default: "",
  },
  employee_Passport_Expiry_Date: {
    type: String,
    default: "",
  },
  employee_Passport_Place_of_Issue: {
    type: String,
    default: "",
  },
  employee_Visa_No: {
    type: String,
    default: "",
  },
  employee_Bank_Name: {
    type: String,
    default: "",
  },
  employee_Benficiary_Name: {
    type: String,
    default: "",
  },
  employee_Bank_Account_No: {
    type: String,
    default: "",
  },
  employee_Bank_IBAN: {
    type: String,
    default: "",
  },
  employee_emp: {
    type: String,
    default: "",
  },
};

let employeesinfoSchema = mongoose.Schema(objEmployeesInfo);
var EmployeesinfoSchemas = (module.exports = mongoose.model(
  "employeesinfoSchemas",
  employeesinfoSchema
));

module.exports.getBenefits = function (callback, limit) {
  EmployeesinfoSchemas.find(callback).limit(limit);
};
