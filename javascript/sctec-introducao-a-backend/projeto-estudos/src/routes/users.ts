import { Router } from "express";
import usersController from "../controllers/usersController.js";

const router = Router();

router.get("/", usersController.login);
router.post("/", usersController.checkLogin);

export default router;