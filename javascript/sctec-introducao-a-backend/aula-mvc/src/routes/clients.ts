import { Router } from "express";

const router = Router();

router.get("/", (req, res) => {
    res.render("index");
});

router.get("/aboutus", (_, res) => {
    res.send("Sobre nós");
});

router.get("/contact", (_, res) => {
    res.send("(XX) XXXXXXXXX");
});

export default router;