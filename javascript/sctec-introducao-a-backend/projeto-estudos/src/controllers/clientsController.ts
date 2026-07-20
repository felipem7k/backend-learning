import type { Request, Response } from "express";
import clientsModel from "../models/clientsModel.js";
import type { IClients } from "../models/clients.js";

async function index(req: Request, res: Response) {
  const clients = await clientsModel.findAll();

  res.json(clients);
}

async function create(req: Request, res: Response) {
  res.render("create");
}

async function store(req: Request, res: Response) {
  const client = req.body as IClients;
  
  await clientsModel.create({
    ...client
  });

  res.redirect("/");
}

export default {
    index,
    create,
    store
};