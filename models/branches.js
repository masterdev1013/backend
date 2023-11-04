let mongoose = require("mongoose");

var objBranchesInfo = {
  organisationID: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "organisationsinfoSchemas",
  },
  branch_Ar_Name: {
    type: String,
    default: "",
  },
  branch_En_Name: {
    type: String,
    default: "",
  },
  branch_location: {
    type: String,
    default: "",
  },
  branch_is_MainBranch: {
    type: String,
    default: "",
  },
  branch_status: {
    type: Boolean,
    default: "",
  },
};

let branchesinfoSchema = mongoose.Schema(objBranchesInfo);
var BranchesinfoSchemas = (module.exports = mongoose.model(
  "branchesinfoSchemas",
  branchesinfoSchema
));

module.exports.getBenefits = function (callback, limit) {
  BranchesinfoSchemas.find(callback).limit(limit);
};
