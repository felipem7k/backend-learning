import express from "express";
import clientsRouter from "./routes/clients.js"; 
import { config } from "dotenv-safe";
import db from "./db.js";

const app = express();

config();

app.use(express.urlencoded({
    extended: true
}));
app.use(clientsRouter);
app.set("view engine", "pug");
app.set("views", "./src/views");

db.sync().then(() => {
    console.log(`Conectado com o banco: ${process.env.DB_NAME}`);
}).then(() => {
    app.listen(process.env.PORT, () => {
        console.log(`Ouvindo em http://localhost:${process.env.PORT}`);
    });
});
