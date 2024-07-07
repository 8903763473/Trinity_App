import mongoose from "../config/db.js";
const questionSchema = new mongoose.Schema(
  {
    level: {
      type: String,
      required: true,
    },
    language: {
      type: String,
      required: true,
    },
    question: {
      type: String,
      required: true,
    },
options: {
      A: { type: String, required: true },
      B: { type: String, required: true },
      C: { type: String, required: true },
      D: { type: String, required: true }
    },
    answer: {
        type: String,
        required: true,
      }, 
    timestamp: { type: Date, default: Date.now },
  },
  { versionKey: false }
);
questionSchema.virtual("question_id").get(function () {
  return this._id.toString();
});
const questionModel = mongoose.model("question", questionSchema);

export default questionModel;
