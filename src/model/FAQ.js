import mongoose from "../config/db.js";

const faqSchema = new mongoose.Schema(
  {
    question: { type: String },
    answer: { type: String },
  },
  { versionKey: false }
);

faqSchema.virtual("faq_id").get(function () {
  return this._id.toString();
});

const FAQmodel = mongoose.model("FAQ", faqSchema);

export default FAQmodel;
