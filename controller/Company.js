const config = require("../config/db");
const bcrypt = require("bcryptjs");
// const userinfoSchema = require("../models/userinfo.js");
const keys = require("../config/keys");
// const { db } = require("../models/userinfo.js");
const { json } = require("body-parser");
const Organisations = require("../models/organisations");
const Employees = require("../models/employees");
const Grades = require("../models/grades");
const Branches = require("../models/branches");
const Departments = require("../models/departments");
const Benefit = require("../models/benefit");
const Position = require("../models/position");

//! @api        /v1/api/organisations
//! @params     no
//! @comment    get the organisation data

exports.organisation = (req, res) => {
  const newOrg = {
    organisation_CR_Number: req.body.organisation_CR_Number
      ? req.body.organisation_CR_Number
      : "",
    organisation_type: req.body.organisation_type
      ? req.body.organisation_type
      : "",
    organisation_Ar_Name: req.body.organisation_Ar_Name
      ? req.body.organisation_Ar_Name
      : "",
    organisation_En_Name: req.body.organisation_En_Name
      ? req.body.organisation_En_Name
      : "",
    organisation_Brand_Name: req.body.organisation_Brand_Name
      ? req.body.organisation_Brand_Name
      : "",
    organisation_Short_En_Name: req.body.organisation_Short_En_Name
      ? req.body.organisation_Short_En_Name
      : "",
    organisation_Logo: req.body.organisation_Logo
      ? req.body.organisation_Logo
      : "",
    organisation_Work_Phone: req.body.organisation_Work_Phone
      ? req.body.organisation_Work_Phone
      : "",
    organisation_Mobile_No: req.body.organisation_Mobile_No
      ? req.body.organisation_Mobile_No
      : "",
    organisation_Fax_No: req.body.organisation_Fax_No
      ? req.body.organisation_Fax_No
      : "",
    organisation_Email: req.body.organisation_Email
      ? req.body.organisation_Email
      : "",
    organisation_Website: req.body.organisation_Website
      ? req.body.organisation_Website
      : "",
    organisation_City: req.body.organisation_City
      ? req.body.organisation_City
      : "",
    organisation_Country: req.body.organisation_Country
      ? req.body.organisation_Country
      : "",
    organisation_Address: req.body.organisation_Address
      ? req.body.organisation_Address
      : "",
    organisation_National_Address: req.body.organisation_National_Address
      ? req.body.organisation_National_Address
      : "",
    App_API_Version: req.body.App_API_Version ? req.body.App_API_Version : "",
    Membership_no: req.body.Membership_no ? req.body.Membership_no : "",
    Membership_registration_date: req.body.Membership_registration_date
      ? req.body.Membership_registration_date
      : "",
    Membership_expiry_date: req.body.Membership_expiry_date
      ? req.body.Membership_expiry_date
      : "",
    Membership_status: req.body.Membership_status
      ? req.body.Membership_status
      : "",
  };

  console.log(newOrg.organisation_CR_Number);

  new Organisations(newOrg)
    .save()
    .then((result) => res.json(result))
    .catch((err) => {
      res.status(400).json({ err: "issue" });
    });
};

exports.up_organisation = (req, res) => {
  console.log(req.params.id);
  const newOrg = {
    organisation_CR_Number: req.body.organisation_CR_Number
      ? req.body.organisation_CR_Number
      : "",
    organisation_type: req.body.organisation_type
      ? req.body.organisation_type
      : "",
    organisation_Ar_Name: req.body.organisation_Ar_Name
      ? req.body.organisation_Ar_Name
      : "",
    organisation_En_Name: req.body.organisation_En_Name
      ? req.body.organisation_En_Name
      : "",
    organisation_Brand_Name: req.body.organisation_Brand_Name
      ? req.body.organisation_Brand_Name
      : "",
    organisation_Short_En_Name: req.body.organisation_Short_En_Name
      ? req.body.organisation_Short_En_Name
      : "",
    organisation_Logo: req.body.organisation_Logo
      ? req.body.organisation_Logo
      : "",
    organisation_Work_Phone: req.body.organisation_Work_Phone
      ? req.body.organisation_Work_Phone
      : "",
    organisation_Mobile_No: req.body.organisation_Mobile_No
      ? req.body.organisation_Mobile_No
      : "",
    organisation_Fax_No: req.body.organisation_Fax_No
      ? req.body.organisation_Fax_No
      : "",
    organisation_Email: req.body.organisation_Email
      ? req.body.organisation_Email
      : "",
    organisation_Website: req.body.organisation_Website
      ? req.body.organisation_Website
      : "",
    organisation_City: req.body.organisation_City
      ? req.body.organisation_City
      : "",
    organisation_Country: req.body.organisation_Country
      ? req.body.organisation_Country
      : "",
    organisation_Address: req.body.organisation_Address
      ? req.body.organisation_Address
      : "",
    organisation_National_Address: req.body.organisation_National_Address
      ? req.body.organisation_National_Address
      : "",
    App_API_Version: req.body.App_API_Version ? req.body.App_API_Version : "",
    Membership_no: req.body.Membership_no ? req.body.Membership_no : "",
    Membership_registration_date: req.body.Membership_registration_date
      ? req.body.Membership_registration_date
      : "",
    Membership_expiry_date: req.body.Membership_expiry_date
      ? req.body.Membership_expiry_date
      : "",
    Membership_status: req.body.Membership_status
      ? req.body.Membership_status
      : "",
  };
  Organisations.findOneAndUpdate(
    { _id: req.params.id },
    { $set: newOrg },
    { new: true }
  )
    .then((organisation) => {
      res.json(organisation);
    })
    .catch((err) => {
      res.status(400).json({ issue: "issue" });
    });
};

exports.getOrgansation = (req, res) => {
  if (req.body.id) {
    Organisations.findById({ _id: req.body.id }).then((result) => {
      res.json(result);
    });
  } else {
    Organisations.find({}).then((result) => {
      res.json(result);
    });
  }
};

//! @api        /v1/api/benefit
//! @params     no
//! @comment    get the benefit data

exports.benefit = (req, res) => {
  const newBenefit = {
    organisationID: req.body.organisationID ? req.body.organisationID : "",
    positionID: req.body.positionID ? req.body.positionID : "",
    bt_ar_name: req.body.bt_ar_name ? req.body.bt_ar_name : "",
    bt_en_name: req.body.bt_en_name ? req.body.bt_en_name : "",
    bt_housing_allowance_entitlement: req.body.bt_housing_allowance_entitlement
      ? req.body.bt_housing_allowance_entitlement
      : "",
    bt_housing_allowance_multiplier: req.body.bt_housing_allowance_multiplier
      ? req.body.bt_housing_allowance_multiplier
      : "",
    bt_transport_allowance_entitlement: req.body
      .bt_transport_allowance_entitlement
      ? req.body.bt_transport_allowance_entitlement
      : "",
    bt_transport_allowance_multiplier: req.body
      .bt_transport_allowance_multiplier
      ? req.body.bt_transport_allowance_multiplier
      : "",
    bt_living_allowance_entitlement: req.body.bt_living_allowance_entitlement
      ? req.body.bt_living_allowance_entitlement
      : "",
    bt_living_allowance_multiplier: req.body.bt_living_allowance_multiplier
      ? req.body.bt_living_allowance_multiplier
      : "",
    bt_annual_leave_days_total: req.body.bt_annual_leave_days_total
      ? req.body.bt_annual_leave_days_total
      : "",
    bt_health_insurance_entitlement: req.body.bt_health_insurance_entitlement
      ? req.body.bt_health_insurance_entitlement
      : "",
    bt_health_insurance_category: req.body.bt_health_insurance_category
      ? req.body.bt_health_insurance_category
      : "",
    bt_parents_health_insurance_entitlement: req.body
      .bt_parents_health_insurance_entitlement
      ? req.body.bt_parents_health_insurance_entitlement
      : "",
    bt_employee_ticket_entitlement: req.body.bt_employee_ticket_entitlement
      ? req.body.bt_employee_ticket_entitlement
      : "",
    bt_employee_tickets_class_type: req.body.bt_employee_tickets_class_type
      ? req.body.bt_employee_tickets_class_type
      : "",
    bt_dependents_tickets_entitlement: req.body
      .bt_dependents_tickets_entitlement
      ? req.body.bt_dependents_tickets_entitlement
      : "",
    bt_dependents_tickets_class_type: req.body.bt_dependents_tickets_class_type
      ? req.body.bt_dependents_tickets_class_type
      : "",
    bt_dependents_education_allowance_entitlement: req.body
      .bt_dependents_education_allowance_entitlement
      ? req.body.bt_dependents_education_allowance_entitlement
      : "",
    bt_max_education_allowance_for_each_dependent: req.body
      .bt_max_education_allowance_for_each_dependent
      ? req.body.bt_max_education_allowance_for_each_dependent
      : "",
    bt_max_total_of_allowed_dependents_for_education_allowance: req.body
      .bt_max_total_of_allowed_dependents_for_education_allowance
      ? req.body.bt_max_total_of_allowed_dependents_for_education_allowance
      : "",
    bt_overtime_entitlement: req.body.bt_overtime_entitlement
      ? req.body.bt_overtime_entitlement
      : "",
    bt_overtime_pay_multiplier: req.body.bt_overtime_pay_multiplier
      ? req.body.bt_overtime_pay_multiplier
      : "",
    bt_overtime_pay_type: req.body.bt_overtime_pay_type
      ? req.body.bt_overtime_pay_type
      : "",
    bt_yearly_bonus_entitlement: req.body.bt_yearly_bonus_entitlement
      ? req.body.bt_yearly_bonus_entitlement
      : "",
    bt_yearly_bonus_pay_type: req.body.bt_yearly_bonus_pay_type
      ? req.body.bt_yearly_bonus_pay_type
      : "",
    bt_status: req.body.bt_status ? req.body.bt_status : true,
  };
  new Benefit(newBenefit)
    .save()
    .then((result) => res.json(result))
    .catch((err) => console.log(err));
};

exports.up_benefit = (req, res) => {
  console.log(req.params.id);
  const newBenefit = {
    organisationID: req.body.organisationID ? req.body.organisationID : "",
    positionID: req.body.positionID ? req.body.positionID : "",
    bt_ar_name: req.body.bt_ar_name ? req.body.bt_ar_name : "",
    bt_en_name: req.body.bt_en_name ? req.body.bt_en_name : "",
    bt_housing_allowance_entitlement: req.body.bt_housing_allowance_entitlement
      ? req.body.bt_housing_allowance_entitlement
      : "",
    bt_housing_allowance_multiplier: req.body.bt_housing_allowance_multiplier
      ? req.body.bt_housing_allowance_multiplier
      : "",
    bt_transport_allowance_entitlement: req.body
      .bt_transport_allowance_entitlement
      ? req.body.bt_transport_allowance_entitlement
      : "",
    bt_transport_allowance_multiplier: req.body
      .bt_transport_allowance_multiplier
      ? req.body.bt_transport_allowance_multiplier
      : "",
    bt_living_allowance_entitlement: req.body.bt_living_allowance_entitlement
      ? req.body.bt_living_allowance_entitlement
      : "",
    bt_living_allowance_multiplier: req.body.bt_living_allowance_multiplier
      ? req.body.bt_living_allowance_multiplier
      : "",
    bt_annual_leave_days_total: req.body.bt_annual_leave_days_total
      ? req.body.bt_annual_leave_days_total
      : "",
    bt_health_insurance_entitlement: req.body.bt_health_insurance_entitlement
      ? req.body.bt_health_insurance_entitlement
      : "",
    bt_health_insurance_category: req.body.bt_health_insurance_category
      ? req.body.bt_health_insurance_category
      : "",
    bt_parents_health_insurance_entitlement: req.body
      .bt_parents_health_insurance_entitlement
      ? req.body.bt_parents_health_insurance_entitlement
      : "",
    bt_employee_ticket_entitlement: req.body.bt_employee_ticket_entitlement
      ? req.body.bt_employee_ticket_entitlement
      : "",
    bt_employee_tickets_class_type: req.body.bt_employee_tickets_class_type
      ? req.body.bt_employee_tickets_class_type
      : "",
    bt_dependents_tickets_entitlement: req.body
      .bt_dependents_tickets_entitlement
      ? req.body.bt_dependents_tickets_entitlement
      : "",
    bt_dependents_tickets_class_type: req.body.bt_dependents_tickets_class_type
      ? req.body.bt_dependents_tickets_class_type
      : "",
    bt_dependents_education_allowance_entitlement: req.body
      .bt_dependents_education_allowance_entitlement
      ? req.body.bt_dependents_education_allowance_entitlement
      : "",
    bt_max_education_allowance_for_each_dependent: req.body
      .bt_max_education_allowance_for_each_dependent
      ? req.body.bt_max_education_allowance_for_each_dependent
      : "",
    bt_max_total_of_allowed_dependents_for_education_allowance: req.body
      .bt_max_total_of_allowed_dependents_for_education_allowance
      ? req.body.bt_max_total_of_allowed_dependents_for_education_allowance
      : "",
    bt_overtime_entitlement: req.body.bt_overtime_entitlement
      ? req.body.bt_overtime_entitlement
      : "",
    bt_overtime_pay_multiplier: req.body.bt_overtime_pay_multiplier
      ? req.body.bt_overtime_pay_multiplier
      : "",
    bt_overtime_pay_type: req.body.bt_overtime_pay_type
      ? req.body.bt_overtime_pay_type
      : "",
    bt_yearly_bonus_entitlement: req.body.bt_yearly_bonus_entitlement
      ? req.body.bt_yearly_bonus_entitlement
      : "",
    bt_yearly_bonus_pay_type: req.body.bt_yearly_bonus_pay_type
      ? req.body.bt_yearly_bonus_pay_type
      : "",
    bt_status: req.body.bt_status ? req.body.bt_status : true,
  };
  Benefit.findOneAndUpdate(
    { _id: req.params.id },
    { $set: newBenefit },
    { new: true }
  ).then((benefit) => {
    res.json(benefit);
  });
};

exports.getBenefit = (req, res) => {
  Benefit.find()
    .populate("organisationID")
    .populate("positionID")
    .then((result) => res.json(result));
};

//! @api        /v1/api/branches
//! @params     no
//! @comment    get the branch data

exports.branches = (req, res) => {
  const newBran = {
    organisationID: req.body.organisationID ? req.body.organisationID : "",
    branch_Ar_Name: req.body.branch_Ar_Name ? req.body.branch_Ar_Name : "",
    branch_En_Name: req.body.branch_En_Name ? req.body.branch_En_Name : "",
    branch_location: req.body.branch_location ? req.body.branch_location : "",
    branch_is_MainBranch: req.body.branch_is_MainBranch
      ? req.body.branch_is_MainBranch
      : "",
    branch_status: req.body.branch_status ? req.body.branch_status : true,
  };

  new Branches(newBran)
    .save()
    .then((result) => res.json(result))
    .catch((err) => console.log(err));
};

exports.up_branches = (req, res) => {
  console.log(req.params.id);
  const newBran = {
    organisationID: req.body.organisationID,
    branch_Ar_Name: req.body.branch_Ar_Name ? req.body.branch_Ar_Name : "",
    branch_En_Name: req.body.branch_En_Name ? req.body.branch_En_Name : "",
    branch_location: req.body.branch_location ? req.body.branch_location : "",
    branch_is_MainBranch: req.body.branch_is_MainBranch
      ? req.body.branch_is_MainBranch
      : "",
    branch_status: req.body.branch_status ? req.body.branch_status : true,
  };
  Branches.findOneAndUpdate(
    { _id: req.params.id },
    { $set: newBran },
    { new: true }
  ).then((branches) => {
    res.json(branches);
  });
};

//! @api        /v1/api/departments
//! @params     no
//! @comment    get the department data

exports.getBranch = (req, res) => {
  Branches.find()
    .populate("organisationID")
    .then((result) => res.json(result));
};

exports.department = (req, res) => {
  const newDepart = {
    organisationsID: req.body.organisationsID ? req.body.organisationsID : "",
    ParentID: req.body.ParentID ? req.body.ParentID : "",
    managerID: req.body.managerID ? req.body.managerID : "",
    departments_Ar_Name: req.body.departments_Ar_Name
      ? req.body.departments_Ar_Name
      : "",
    departments_En_Name: req.body.departments_En_Name
      ? req.body.departments_En_Name
      : "",
    department_units_total: req.body.department_units_total
      ? req.body.department_units_total
      : "",
    department_employees_total: req.body.department_employees_total
      ? req.body.department_employees_total
      : "",
    departments_status: req.body.departments_status
      ? req.body.departments_status
      : true,
  };
  new Departments(newDepart)
    .save()
    .then((result) => res.json(result))
    .catch((err) => console.log(err));
};

exports.up_departments = (req, res) => {
  console.log(req.params.id);
  const newDepart = {
    organisationsID: req.body.organisationID ? req.body.organisationID : "",
    ParentID: req.body.ParentID ? req.body.ParentID : "",
    managerID: req.body.managerID ? req.body.managerID : "",
    departments_Ar_Name: req.body.departments_Ar_Name
      ? req.body.departments_Ar_Name
      : "",
    departments_En_Name: req.body.departments_En_Name
      ? req.body.departments_En_Name
      : "",
    department_units_total: req.body.department_units_total
      ? req.body.department_units_total
      : "",
    department_employees_total: req.body.department_employees_total
      ? req.body.department_employees_total
      : "",
    departments_status: req.body.departments_status
      ? req.body.departments_status
      : "",
  };
  Departments.findOneAndUpdate(
    { _id: req.params.id },
    { $set: newDepart },
    { new: true }
  ).then((department) => {
    res.json(department);
  });
};

exports.getdepartment = (req, res) => {
  Departments.find()
    .populate("organisationsID")
    .populate("ParentID")
    .populate("managerID")
    .then((result) => res.json(result));
};

//! @api        /v1/api/employees
//! @params     no
//! @comment    get the employee data

exports.employees = (req, res) => {
  const newEmplo = {
    organisationsID: req.body.organisationsID,
    employee_Ar_Name: req.body.employee_Ar_Name
      ? req.body.employee_Ar_Name
      : "",
    employee_En_Name: req.body.employee_En_Name
      ? req.body.employee_En_Name
      : "",
    employee_personal_photo: req.body.employee_personal_photo
      ? req.body.employee_personal_photo
      : "",
    employee_nationality: req.body.employee_nationality
      ? req.body.employee_nationality
      : "",
    employee_religion: req.body.employee_religion
      ? req.body.employee_religion
      : "",
    employee_gender: req.body.employee_gender ? req.body.employee_gender : "",
    employee_birth_date: req.body.employee_birth_date
      ? req.body.employee_birth_date
      : "",
    employee_birth_place: req.body.employee_birth_place
      ? req.body.employee_birth_place
      : "",
    employee_marital_status: req.body.employee_marital_status
      ? req.body.employee_marital_status
      : "",
    employee_dependents_total: req.body.employee_dependents_total
      ? req.body.employee_dependents_total
      : "",
    employee_children_total: req.body.employee_children_total
      ? req.body.employee_children_total
      : "",
    employee_qualification: req.body.employee_qualification
      ? req.body.employee_qualification
      : "",
    employee_specialization: req.body.employee_specialization
      ? req.body.employee_specialization
      : "",
    employee_Mobile_No: req.body.employee_Mobile_No
      ? req.body.employee_Mobile_No
      : "",
    employee_Work_Tel_No: req.body.employee_Work_Tel_No
      ? req.body.employee_Work_Tel_No
      : "",
    employee_Work_Ext_No: req.body.employee_Work_Ext_No
      ? req.body.employee_Work_Ext_No
      : "",
    employee_Work_Email: req.body.employee_Work_Email
      ? req.body.employee_Work_Email
      : "",
    employee_Contray: req.body.employee_Contray
      ? req.body.employee_Contray
      : "",
    employee_City: req.body.employee_City ? req.body.employee_City : "",
    employee_Area: req.body.employee_Area ? req.body.employee_Area : "",
    employee_Address: req.body.employee_Address
      ? req.body.employee_Address
      : "",
    employee_National_Address: req.body.employee_National_Address
      ? req.body.employee_National_Address
      : "",
    employee_ID_Iqama_No: req.body.employee_ID_Iqama_No
      ? req.body.employee_ID_Iqama_No
      : "",
    employee_ID_Iqama_Issue_Date: req.body.employee_ID_Iqama_Issue_Date
      ? req.body.employee_ID_Iqama_Issue_Date
      : "",
    employee_ID_Iqama_Expiry_Date: req.body.employee_ID_Iqama_Expiry_Date
      ? req.body.employee_ID_Iqama_Expiry_Date
      : "",
    employee_ID_Iqama_Place_of_Issue: req.body.employee_ID_Iqama_Place_of_Issue
      ? req.body.employee_ID_Iqama_Place_of_Issue
      : "",
    employee_position_in_Iqama: req.body.employee_position_in_Iqama
      ? req.body.employee_position_in_Iqama
      : "",
    employee_Passport_No: req.body.employee_Passport_No
      ? req.body.employee_Passport_No
      : "",
    employee_Passport_Issue_Date: req.body.employee_Passport_Issue_Date
      ? req.body.employee_Passport_Issue_Date
      : "",
    employee_Passport_Expiry_Date: req.body.employee_Passport_Expiry_Date
      ? req.body.employee_Passport_Expiry_Date
      : "",
    employee_Passport_Place_of_Issue: req.body.employee_Passport_Place_of_Issue
      ? req.body.employee_Passport_Place_of_Issue
      : "",
    employee_Visa_No: req.body.employee_Visa_No
      ? req.body.employee_Visa_No
      : "",
    employee_Bank_Name: req.body.employee_Bank_Name
      ? req.body.employee_Bank_Name
      : "",
    employee_Benficiary_Name: req.body.employee_Benficiary_Name
      ? req.body.employee_Benficiary_Name
      : "",
    employee_Bank_Account_No: req.body.employee_Bank_Account_No
      ? req.body.employee_Bank_Account_No
      : "",
    employee_Bank_IBAN: req.body.employee_Bank_IBAN
      ? req.body.employee_Bank_IBAN
      : "",
    employee_emp: req.body.employee_emp ? req.body.employee_emp : "",
  };
  new Employees(newEmplo)
    .save()
    .then((result) => res.json(result))
    .catch((err) => res.status(400).json({ err: "issue" }));
};

exports.up_employees = (req, res) => {
  console.log(req.params.id);
  const newEmplo = {
    employee_Ar_Name: req.body.employee_Ar_Name
      ? req.body.employee_Ar_Name
      : "",
    employee_En_Name: req.body.employee_En_Name
      ? req.body.employee_En_Name
      : "",
    employee_personal_photo: req.body.employee_personal_photo
      ? req.body.employee_personal_photo
      : "",
    employee_nationality: req.body.employee_nationality
      ? req.body.employee_nationality
      : "",
    employee_religion: req.body.employee_religion
      ? req.body.employee_religion
      : "",
    employee_gender: req.body.employee_gender ? req.body.employee_gender : "",
    employee_birth_date: req.body.employee_birth_date
      ? req.body.employee_birth_date
      : "",
    employee_birth_place: req.body.employee_birth_place
      ? req.body.employee_birth_place
      : "",
    employee_marital_status: req.body.employee_marital_status
      ? req.body.employee_marital_status
      : "",
    employee_dependents_total: req.body.employee_dependents_total
      ? req.body.employee_dependents_total
      : "",
    employee_children_total: req.body.employee_children_total
      ? req.body.employee_children_total
      : "",
    employee_qualification: req.body.employee_qualification
      ? req.body.employee_qualification
      : "",
    employee_specialization: req.body.employee_specialization
      ? req.body.employee_specialization
      : "",
    employee_Mobile_No: req.body.employee_Mobile_No
      ? req.body.employee_Mobile_No
      : "",
    employee_Work_Tel_No: req.body.employee_Work_Tel_No
      ? req.body.employee_Work_Tel_No
      : "",
    employee_Work_Ext_No: req.body.employee_Work_Ext_No
      ? req.body.employee_Work_Ext_No
      : "",
    employee_Work_Email: req.body.employee_Work_Email
      ? req.body.employee_Work_Email
      : "",
    employee_Contray: req.body.employee_Contray
      ? req.body.employee_Contray
      : "",
    employee_City: req.body.employee_City ? req.body.employee_City : "",
    employee_Area: req.body.employee_Area ? req.body.employee_Area : "",
    employee_Address: req.body.employee_Address
      ? req.body.employee_Address
      : "",
    employee_National_Address: req.body.employee_National_Address
      ? req.body.employee_National_Address
      : "",
    employee_ID_Iqama_No: req.body.employee_ID_Iqama_No
      ? req.body.employee_ID_Iqama_No
      : "",
    employee_ID_Iqama_Issue_Date: req.body.employee_ID_Iqama_Issue_Date
      ? req.body.employee_ID_Iqama_Issue_Date
      : "",
    employee_ID_Iqama_Expiry_Date: req.body.employee_ID_Iqama_Expiry_Date
      ? req.body.employee_ID_Iqama_Expiry_Date
      : "",
    employee_ID_Iqama_Place_of_Issue: req.body.employee_ID_Iqama_Place_of_Issue
      ? req.body.employee_ID_Iqama_Place_of_Issue
      : "",
    employee_position_in_Iqama: req.body.employee_position_in_Iqama
      ? req.body.employee_position_in_Iqama
      : "",
    employee_Passport_No: req.body.employee_Passport_No
      ? req.body.employee_Passport_No
      : "",
    employee_Passport_Issue_Date: req.body.employee_Passport_Issue_Date
      ? req.body.employee_Passport_Issue_Date
      : "",
    employee_Passport_Expiry_Date: req.body.employee_Passport_Expiry_Date
      ? req.body.employee_Passport_Expiry_Date
      : "",
    employee_Passport_Place_of_Issue: req.body.employee_Passport_Place_of_Issue
      ? req.body.employee_Passport_Place_of_Issue
      : "",
    employee_Visa_No: req.body.employee_Visa_No
      ? req.body.employee_Visa_No
      : "",
    employee_Bank_Name: req.body.employee_Bank_Name
      ? req.body.employee_Bank_Name
      : "",
    employee_Benficiary_Name: req.body.employee_Benficiary_Name
      ? req.body.employee_Benficiary_Name
      : "",
    employee_Bank_Account_No: req.body.employee_Bank_Account_No
      ? req.body.employee_Bank_Account_No
      : "",
    employee_Bank_IBAN: req.body.employee_Bank_IBAN
      ? req.body.employee_Bank_IBAN
      : "",
    employee_emp: req.body.employee_emp ? req.body.employee_emp : "",
  };
  Employees.findOneAndUpdate(
    { _id: req.params.id },
    { $set: newEmplo },
    { new: true }
  )
    .then((employees) => {
      res.json(employees);
    })
    .catch((err) => {
      res.status(400).json({ issue: "issue" });
    });
};

exports.getEmployee = (req, res) => {
  Employees.find()
    .populate("organisationsID")
    .then((result) => {
      res.json(result);
    });
};

//! @api        /v1/api/grades
//! @params     no
//! @comment    get the grade data

exports.grades = (req, res) => {
  const newGrad = {
    organisationsID: req.body.organisationsID ? req.body.organisationsID : "",
    benefitCategoryID: req.body.benefitCategoryID
      ? req.body.benefitCategoryID
      : "",
    grade_no: req.body.grade_no ? req.body.grade_no : "",
    grade_yearly_raise: req.body.grade_yearly_raise
      ? req.body.grade_yearly_raise
      : "",
    grade_status: req.body.grade_status ? req.body.grade_status : true,
  };
  new Grades(newGrad)
    .save()
    .then((grade) => res.json(grade))
    .catch((err) => console.log(err));
};
exports.up_grades = (req, res) => {
  console.log(req.params.id);
  const newGrad = {
    grade_no: req.body.grade_no ? req.body.grade_no : "",
    grade_yearly_raise: req.body.grade_yearly_raise
      ? req.body.grade_yearly_raise
      : "",
    grade_status: req.body.grade_status ? req.body.grade_status : "",
  };
  Grades.findOneAndUpdate(
    { _id: req.params.id },
    { $set: newGrad },
    { new: true }
  ).then((grades) => {
    res.json(grades);
  });
};

exports.getGrade = (req, res) => {
  Grades.find()
    .populate("organisationsID")
    .populate("benefitCategoryID")
    .then((result) => res.json(result));
};

//! @api        /v1/api/position
//! @params     no
//! @comment    get the position data

exports.position = (req, res) => {
  const newInfo = {
    organisationsID: req.body.organisationsID ? req.body.organisationsID : "",
    branchID: req.body.branchID ? req.body.branchID : "",
    departmentID: req.body.departmentID ? req.body.departmentID : "",
    position_Ar_Name: req.body.position_Ar_Name
      ? req.body.position_Ar_Name
      : "",
    position_En_Name: req.body.position_En_Name
      ? req.body.position_En_Name
      : "",
    position_direct_manager: req.body.position_direct_manager
      ? req.body.position_direct_manager
      : "",
    position_emploument_type: req.body.position_emploument_type
      ? req.body.position_emploument_type
      : "",
    position_status: req.body.position_status ? req.body.position_status : true,
  };
  new Position(newInfo)
    .save()
    .then((result) => res.json(result))
    .catch((err) => console.log(err));
};

exports.up_position = (req, res) => {
  console.log(req.params.id);
  const newInfo = {
    positionID: req.body.positionID ? req.body.positionID : "",
    position_Ar_Name: req.body.position_Ar_Name
      ? req.body.position_Ar_Name
      : "",
    position_En_Name: req.body.position_En_Name
      ? req.body.position_En_Name
      : "",
    position_direct_manager: req.body.position_direct_manager
      ? req.body.position_direct_manager
      : "",
    position_emploument_type: req.body.position_emploument_type
      ? req.body.position_emploument_type
      : "",
    position_status: req.body.position_status ? req.body.position_status : true,
  };
  Position.findOneAndUpdate(
    { _id: req.params.id },
    { $set: newInfo },
    { new: true }
  ).then((position) => {
    res.json(position);
  });
};

exports.getPosition = (req, res) => {
  Position.find()
    .populate("organisationsID")
    .populate("branchID")
    .populate("departmentID")
    .then((result) => res.json(result));
};
