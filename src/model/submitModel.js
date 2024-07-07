import mongoose from "../config/db.js";
const submitSchema = new mongoose.Schema(
    {
        candidate_id: { type: String, ref: "candidate", },
        answers: [
            {
                questionId: mongoose.Schema.Types.ObjectId,
                chosenAnswer: String
            }
        ],

        timestamp: { type: Date, default: Date.now },
    },
    { versionKey: false }
);
submitSchema.virtual("submit_id").get(function () {
    return this._id.toString();
});
const submitModel = mongoose.model("submittedanswer", submitSchema);

export default submitModel;
