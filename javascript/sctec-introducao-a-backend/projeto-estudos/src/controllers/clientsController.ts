import type { Request, Response } from "express";
import clientsModel from "../models/clientsModel.js";

async function index(req: Request, res: Response) {
  const clients = await clientsModel.findAll();

  res.json(clients);
}

async function create(req: Request, res: Response) {
  res.render("create");
}

export default {
    index,
    create
};