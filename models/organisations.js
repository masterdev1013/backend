let mongoose = require("mongoose");

var objOrganisationsInfo = {
  organisation_type: {
    type: String,
    default: "",
  },
  organisation_Ar_Name: {
    type: String,
    default: "",
  },
  organisation_En_Name: {
    type: String,
    default: "",
  },
  organisation_Brand_Name: {
    type: String,
    default: "",
  },
  organisation_Short_En_Name: {
    type: String,
    default: "",
  },
  organisation_Logo: {
    type: String,
    default: "",
  },
  organisation_Work_Phone: {
    type: String,
    default: "",
  },
  organisation_Mobile_No: {
    type: String,
    default: "",
  },
  organisation_Fax_No: {
    type: String,
    default: "",
  },
  organisation_Email: {
    type: String,
    default: "",
  },
  organisation_Website: {
    type: String,
    default: "",
  },
  organisation_City: {
    type: String,
    default: "",
  },
  organisation_Country: {
    type: String,
    default: "",
  },
  organisation_Address: {
    type: String,
    default: "",
  },
  organisation_National_Address: {
    type: String,
    default: "",
  },
  App_API_Version: {
    type: String,
    default: "",
  },
  Membership_no: {
    type: String,
    default: "",
  },
  Membership_registration_date: {
    type: String,
    default: "",
  },
  Membership_expiry_date: {
    type: String,
    default: "",
  },
  Membership_status: {
    type: String,
    default: "",
  },
};

let organisationsinfoSchema = mongoose.Schema(objOrganisationsInfo);
var organisationsinfoSchemas = (module.exports = mongoose.model(
  "organisationsinfoSchemas",
  organisationsinfoSchema
));

module.exports.getBenefits = function (callback, limit) {
  organisationsinfoSchemas.find(callback).limit(limit);
};
