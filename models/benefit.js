let mongoose = require("mongoose");

var objBenefitInfo = {
  organisationID: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "organisationsinfoSchemas",
  },
  positionID: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "postionsinfoSchemas",
  },
  bt_ar_name: {
    type: String,
    default: "",
  },
  bt_en_name: {
    type: String,
    default: "",
  },
  bt_housing_allowance_entitlement: {
    type: String,
    default: "",
  },
  bt_housing_allowance_multiplier: {
    type: String,
    default: "",
  },
  bt_transport_allowance_entitlement: {
    type: String,
    default: "",
  },
  bt_transport_allowance_multiplier: {
    type: String,
    default: "",
  },
  bt_living_allowance_entitlement: {
    type: String,
    default: "",
  },
  bt_living_allowance_multiplier: {
    type: String,
    default: "",
  },
  bt_annual_leave_days_total: {
    type: String,
    default: "",
  },
  bt_health_insurance_entitlement: {
    type: String,
    default: "",
  },
  bt_health_insurance_category: {
    type: String,
    default: "",
  },
  bt_parents_health_insurance_entitlement: {
    type: String,
    default: "",
  },
  bt_employee_ticket_entitlement: {
    type: String,
    default: "",
  },
  bt_employee_tickets_class_type: {
    type: String,
    default: "",
  },
  bt_dependents_tickets_entitlement: {
    type: String,
    default: "",
  },
  bt_dependents_tickets_class_type: {
    type: String,
    default: "",
  },
  bt_dependents_education_allowance_entitlement: {
    type: String,
    default: "",
  },
  bt_max_education_allowance_for_each_dependent: {
    type: String,
    default: "",
  },
  bt_max_total_of_allowed_dependents_for_education_allowance: {
    type: String,
    default: "",
  },
  bt_overtime_entitlement: {
    type: String,
    default: "",
  },
  bt_overtime_pay_multiplier: {
    type: String,
    default: "",
  },
  bt_overtime_pay_type: {
    type: String,
    default: "",
  },
  bt_yearly_bonus_entitlement: {
    type: String,
    default: "",
  },
  bt_yearly_bonus_pay_type: {
    type: String,
    default: "",
  },
  bt_status: {
    type: Boolean,
    default: "",
  },
};

let benefitinfoSchema = mongoose.Schema(objBenefitInfo);
var BenefitinfoSchemas = (module.exports = mongoose.model(
  "benefitinfoSchemas",
  benefitinfoSchema
));

module.exports.getBenefits = function (callback, limit) {
  BenefitinfoSchemas.find(callback).limit(limit);
};
