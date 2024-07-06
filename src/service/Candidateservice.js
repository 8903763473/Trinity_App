import candidateModel from "../model/Candidatemodel.js";
import jwt from "jsonwebtoken";
import Faq from "../model/FAQ.js";

import bcrypt from "bcrypt";
import "dotenv/config";
import profileModel from "../model/candidate_profileModel.js";
const Candidateservice = {
  signup: async (data) => {
    try {
      const { username, email, password, role } = data;
      const hashedPassword = await bcrypt.hash(password, 10);
      console.log("hashedPassword", hashedPassword);
      const existingUser = await candidateModel.findOne({ email });

      if (existingUser) {
        throw { error: "User with this email already exists." };
      }

      const newCandidate = await candidateModel.create({
        username: username,
        email: email,
        password: hashedPassword,
        role: role,
      });

      console.log("New candidate created:", newCandidate);
      return newCandidate;
    } catch (error) {
      throw error;
    }
  },
  //   =================================

  login: async (data) => {
    try {
      const { email, password } = data;
      const candidate = await candidateModel.findOne({ email });

      if (!candidate) {
        throw { error: "Candidate not found" };
      }

      const isPasswordMatch = await bcrypt.compare(
        password,
        candidate.password
      );

      if (!isPasswordMatch) {
        throw { error: "Invalid password" };
      }

      const token = jwt.sign(
        { candidate_id: candidate._id },
        process.env.JWT_SECRET_KEY
      );

      return { token: token };
    } catch (error) {
      // console.error("Error during login:", error.message);
      throw error;
    }
  },

  // comparePassword: async (candidate_id, password) => {
  //   console.log(password);
  //   try {
  //     const storedPassword = await userModel.findById(candidate_id);
  //     if (!storedPassword) {
  //       return false;
  //     }
  //     const match = await bcrypt.compare(password, storedPassword.password);
  //     console.log(match);
  //     return match;
  //   } catch (error) {
  //     //   console.error("Error comparing passwords:", error.message);
  //     throw { error: "Error comparing passwords" };
  //   }
  // },

  // =========================================
  //   generateAuthToken: (candidate_id) => {
  //     const token = jwt.sign({ candidate_id }, process.env.JWT_SECRET_KEY);
  //     return token;
  //   },

  // ==================================
  profile: async (data) => {
    const {
      name,
      profile_img,
      skills,
      description,
      expirence,
      projects,
      resume,
    } = data;

    try {
      const profile = await profileModel.create({
        name,
        profile_img,
        skills,
        description,
        expirence,
        projects,
        resume,
      });

      return profile;
    } catch (error) {
      throw error;
    }
  },
  // =================================
  Updateprofile:async (data) => {
    const {
      candidateProfile_id,
      profile_img,
      skills,
      description,
      expirence,
      projects,
      resume,
    } = data;

    try {
      const Updateprofile = await profileModel.findOneAndUpdate(candidateProfile_id,{
     profile_img,
        skills,
        description,
        expirence,
        projects,
        resume,
      });
console.log("sucessfully updated")
      return Updateprofile;
    } catch (error) {
      throw error;
    }
  },
  // =========================================
  faq: async (data) => {
    const { question, answer } = data;

    try {
      const faq = await Faq.findOne({ question });
      if (faq) {
        throw { error: "already exist" };
      }
      const faqs = await Faq.create({
        question: question,
        answer: answer,
      });

      return faqs;
    } catch (error) {
      throw error;
    }
  },
};

export default Candidateservice;
