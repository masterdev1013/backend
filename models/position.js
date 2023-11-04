let mongoose = require("mongoose");

var objPositionsInfo = {
  organisationsID: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "organisationsinfoSchemas",
  },
  branchID: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "branchesinfoSchemas",
  },
  departmentID: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "departmentsinfoSchemas",
  },
  position_Ar_Name: {
    type: String,
    default: "",
  },
  position_En_Name: {
    type: String,
    default: "",
  },
  position_direct_manager: {
    type: String,
    default: "",
  },
  position_emploument_type: {
    type: String,
    default: "",
  },
  position_status: {
    type: Boolean,
    default: "",
  },
};

let positionsinfoSchema = mongoose.Schema(objPositionsInfo);
var PositionsinfoSchemas = (module.exports = mongoose.model(
  "postionsinfoSchemas",
  positionsinfoSchema
));

module.exports.getBenefits = function (callback, limit) {
  PositionsinfoSchemas.find(callback).limit(limit);
};
