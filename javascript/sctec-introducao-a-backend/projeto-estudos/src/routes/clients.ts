import { Router } from "express";
import clientsController from "../controllers/clientsController.js";

const router = Router();

router.get("/", clientsController.index);

router.get("/create", clientsController.create);
router.post("/create", clientsController.store);

router.get("/edit/:id", clientsController.edit);
router.post("/edit/:id", clientsController.update);

router.get("/:id", clientsController.show);

export default router;