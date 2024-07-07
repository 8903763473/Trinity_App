import express from "express";
import Candidatecontroller from "../controller/Candidatecontroller.js";
import authVerify from "../middleware/authVerify.js";

const router = express.Router();

router.post("/signup", Candidatecontroller.signup);
router.post("/login", Candidatecontroller.login);
router.post("/profile", Candidatecontroller.profile);
router.post("/Updateprofile", Candidatecontroller.Updateprofile);

router.post("/questionUpload",Candidatecontroller.questionUpload);

router.get("/getquestion",Candidatecontroller.getquestion);
router.post("/submitAnswer",Candidatecontroller.submitAnswer)
router.get("/validate",Candidatecontroller.validate);

router.post("/faqs", authVerify, Candidatecontroller.faq);

export default router;
