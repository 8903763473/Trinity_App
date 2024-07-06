import mongoose from "../config/db.js";
const profileSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    profile_img: {
      type: String,
      allownul: false,
    },
    skills: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    expirence: {
      type: String,
      required: true,
    },
    projects: {
      type: String,
      required: true,
    },
    resume: {
      type: String,
      required: true,
    },
    timestamp: { type: Date, default: Date.now },
  },
  { versionKey: false }
);
profileSchema.virtual("candidateProfile_id").get(function () {
  return this._id.toString();
});
const profileModel = mongoose.model("candidate_Profile", profileSchema);

export default profileModel;
