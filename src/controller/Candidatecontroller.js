import Candidateservice from "../service/Candidateservice.js";

const Candidatecontroller = {
  signup: async (req, res, next) => {
    const { username, email, password ,role} = req.body;

    try {
      const signup = await Candidateservice.signup(req.body);
      res.json({ msg: "successfully registered", signup });
    } catch (error) {
      error.message = error.error;
      error.statuscode = 400;
      console.log(error);
      next(error);
    }
  },
  //   ==========================================================================
  login: async (req, res, next) => {
    const { email, password } = req.body;
    try {
      const login = await Candidateservice.login(req.body);
      res.json(login);
    } catch (error) {
      error.message = error.error;
      console.log(error);
      error.statuscode = 500;
      next(error);
    }
  },
  // ==============================
  profile:async (req, res, next) => {
    const { name,profile_img,skills,description ,expirence ,projects,resume} = req.body;
    try {
      const profile = await Candidateservice.profile(req.body);
      res.json(profile);
    } catch (error) {
      error.message = error.error;
      console.log(error);
      error.statuscode = 500;
      next(error);
    }
  },
  // =====================================
  Updateprofile:async (req, res, next) => {
    const { profile_img,skills,description ,expirence ,projects,resume} = req.body;
    try {
      const Updateprofile = await Candidateservice.Updateprofile(req.body);
      res.json(Updateprofile);
    } catch (error) {
      error.message = error.error;
      console.log(error);
      error.statuscode = 500;
      next(error);
    }
  },

  // =====================================
  questionUpload:async (req, res, next) => {
    const { level,language,question,options ,answer} = req.body;
    try {
      const questionUpload = await Candidateservice.questionUpload(req.body);
      res.json(questionUpload);
    } catch (error) {
      error.message = error.error;
      console.log(error);
      error.statuscode = 500;
      next(error);
    }
  },

  getquestion:async (req, res, next) => {
    const { level,language } = req.body;
    try {
      const getquestion = await Candidateservice.getquestion(req.body);
      res.json(getquestion);
    } catch (error) {
      error.message = error.error;
      console.log(error);
      error.statuscode = 500;
      next(error);
    }
  },


  submitAnswer:async (req, res, next) => {
    const {candidate_id  , answers} = req.body;
    try {
      const submitAnswer = await Candidateservice.submitAnswer(req.body);
      res.json(submitAnswer);
    } catch (error) {
      error.message = error.error;
      console.log(error);
      error.statuscode = 500;
      next(error);
    }
  },


  validate:async (req, res, next) => {
    const { question_id, Answer} = req.body;
    try {
      const validate = await Candidateservice.validate(req.body);
      res.json(validate);
    } catch (error) {
      error.message = error.error;
      console.log(error);
      error.statuscode = 500;
      next(error);
    }
  },
  // ==============================
  faq: async (req, res, next) => {
    const { question, answer } = req.body;

    try {
      const faq = await Candidateservice.faq(req.body);
      res.json(faq);
    } catch (error) {
      error.message = error.error;
      error.statusCode = 500;
      next(error);
    }
  },
};
export default Candidatecontroller;
