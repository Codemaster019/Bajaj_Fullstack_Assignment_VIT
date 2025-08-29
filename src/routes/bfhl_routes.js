import { Router } from "express";
import { bfhlHandler } from "../Controller/bfhl_controller.js";

const router = Router();
router.post("/", bfhlHandler);

export default router;
