import mongoose from "../config/db.js";
const candidateSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      allownul: false,
    },
    email: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      required: true,
    }, 
    timestamp: { type: Date, default: Date.now },
  },
  { versionKey: false }
);
candidateSchema.virtual("candidate_id").get(function () {
  return this._id.toString();
});
const candidateModel = mongoose.model("candidate", candidateSchema);

export default candidateModel;
