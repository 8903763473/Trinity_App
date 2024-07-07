import express, { json } from "express";
import cors from "cors";
import http from "http";
import "dotenv/config";
import router from "./src/router/router.js";
import errorHandling from "./src/errorHandling.js";

const app = express();

app.use(cors());
app.use(express.json({ limit: "10mb" }));

app.use("/api/Candidate", router);
app.use(errorHandling);

const server = http.createServer(app);
server.listen(process.env.APP_PORT, () => {
  console.log(`Server is running on ${process.env.APP_PORT} ...`);
});
