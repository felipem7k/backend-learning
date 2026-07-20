import express from "express";
import clientsRouter from "./routes/clients.js"; 
const app = express();
import { config } from "dotenv-safe";

config();

app.set("view engine", "pug");
app.set("views", "./src/views");

app.use(clientsRouter);

app.listen(process.env.PORT, () => {
    console.log(`Ouvindo em http://localhost:${process.env.PORT}`);
});
