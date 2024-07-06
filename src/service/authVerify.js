import jwt from "jsonwebtoken";
import "dotenv/config";
import userModel from "../models/userModel.js";

const authVerify = (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return res.status(401).json({ error: "Please login to continue." });
  }

  let token = authHeader.split(" ")[1];

  jwt.verify(token, process.env.JWT_SECRET_KEY, (err, decoded) => {
    if (err) {
      return res.status(401).json({ error: "Please  continue." });
    } else {
      if (decoded.user_id !== null) {
        userModel
          .findById(decoded.user_id)
          .select("role")
          .then((user) => {
            if (user && user.role === decoded.role) {
              next();
            } else {
              return res.status(403).json({ error: "Unauthorized access." });
            }
          })
          .catch((error) => {
            return res.status(500).json({ error: "Internal server error." });
          });
      } else {
        return res.status(403).json({ error: "Unauthorized access." });
      }
    }
  });
};

export default authVerify;

// import jwt from "jsonwebtoken";
// import "dotenv/config";
// import userModel from "../models/userModel.js";

// const authVerify = (req, res, next) => {
//   const authHeader = req.headers.authorization;

//   if (!authHeader) {
//     return res.status(401).json({ error: "Please login to continue." });
//   }

//   let token = authHeader.split(" ")[1];

//   jwt.verify(token, process.env.JWT_SECRET_KEY, (err, decoded) => {
//     if (err) {
//       return res.status(401).json({ error: "Please login to continue." });
//     } else {
//       if (decoded.user_id == !null) {
//         const UserRole = userModel.findById(decoded.user_id).select("role");
//         if (UserRole === decoded.role) {
//           next();
//         }
//       } else {
//         return res.status(403).json({ error: "Unauthorized access." });
//       }
//     }
//   });
// };

// export default authVerify;
