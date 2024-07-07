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
    const { name,profile_img,skills,description ,expirence ,projects,resume} = req.body;
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
