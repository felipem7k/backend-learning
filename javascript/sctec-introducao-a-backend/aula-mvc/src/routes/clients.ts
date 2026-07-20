import { Router } from "express";
import clientsController from "../controllers/clientsController.js";

const router = Router();

router.get("/", clientsController.index);

export default router;