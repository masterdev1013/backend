let mongoose = require("mongoose");

var objGradesInfo = {
  organisationsID: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "organisationsinfoSchemas",
  },
  benefitCategoryID: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "benefitinfoSchemas",
  },
  grade_no: {
    type: String,
    default: "",
  },
  grade_yearly_raise: {
    type: String,
    default: "",
  },
  grade_status: {
    type: Boolean,
    default: "",
  },
};

let gradesinfoSchema = mongoose.Schema(objGradesInfo);
var GradesinfoSchemas = (module.exports = mongoose.model(
  "gradesinfoSchemas",
  gradesinfoSchema
));

module.exports.getBenefits = function (callback, limit) {
  GradesinfoSchemas.find(callback).limit(limit);
};
