import express from "express";
import morgan from "morgan";
import cors from "cors";
import { config } from "dotenv";

const app = express();

/** middleware */
app.use(morgan("tiny"));
app.use(cors());
app.use(express.json());
config();
import router from "./router/route.js";

/** app port */
const PORT = process.env.PORT || 3500;

/** Routes */

app.use("/api", router); /**apis */

app.get("/", (req, res) => {
  try {
    res.json("Hello from the server");
  } catch (error) {
    res.json("error");
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
