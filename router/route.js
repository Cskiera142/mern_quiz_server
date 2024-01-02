import { Router } from "express";
const router = Router();

/** Questions Route */
router.get("/question", (req, res) => {
  res.json("questions api get request");
});
/** Quiz Route */
/** Results Route */

export default router;
