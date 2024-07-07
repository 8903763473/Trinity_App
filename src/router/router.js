import express from "express";
import Candidatecontroller from "../controller/Candidatecontroller.js";
import authVerify from "../middleware/authVerify.js";

const router = express.Router();

router.post("/signup", Candidatecontroller.signup);
router.post("/login", Candidatecontroller.login);
router.post("/profile", Candidatecontroller.profile);
router.post("/Updateprofile", Candidatecontroller.Updateprofile);
router.post("/faqs", authVerify, Candidatecontroller.faq);

export default router;


const data = [{
    Angular: [{
        language: "angular",
        level: "fresher",
        questions: [{
                id: 1,
                question: "What is the output of the following code? print((not False) and True)",
                options: {
                    A: "True",
                    B: "False",
                    C: "None",
                    D: "Error"
                },
                answer: "A"
            },
            {
                id: 2,
                question: "Which directive is used to add form validation in Angular?",
                options: {
                    A: "ng-validate",
                    B: "ng-validation",
                    C: "ng-form-validate",
                    D: "ng-form-validation"
                },
                answer: "B"
            }
        ]
    }],
    [{
        language: "java",
        level: "fresher",
        questions: [{
            id: 1,
            question: "How do you pass data between sibling components in React?",
            options: {
                A: "You pass data between sibling components in React by lifting the state up to their common parent component and passing data via props.",
                B: "You pass data between sibling components in React by defining global CSS styles.",
                C: "You pass data between sibling components in React by creating a new component.",
                D: "You pass data between sibling components in React by using the useEffect hook."
            },
            answer: "A"
        }]
    }]
}];