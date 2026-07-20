import { Router } from "express";

const router = Router();

router.get("/", (req, res) => {
    res.send("<h1>Rota inicial</h1>");
});

router.get("/aboutus", (_, res) => {
    res.send("Sobre nós");
});

router.get("/contact", (_, res) => {
    res.send("(XX) XXXXXXXXX");
});

export default router;