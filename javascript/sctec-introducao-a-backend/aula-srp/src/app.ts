import express from "express";
import clientsRouter from "./routes/clients.js"; 
const app = express();

app.use(clientsRouter);

app.listen(3000, () => {
    console.log("Ouvindo em http://localhost:3000");
});