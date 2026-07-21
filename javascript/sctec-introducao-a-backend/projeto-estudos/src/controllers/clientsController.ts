import type { Request, Response } from "express";
import clientsModel from "../models/clientsModel.js";
import type { IClients } from "../models/clients.js";
import type { Identifier } from "sequelize";

async function index(req: Request, res: Response) {
  const clients = await clientsModel.findAll();

  res.json(clients);
}

async function show(req: Request, res: Response) {
  const id = Number(req.params.id);
  const client = await clientsModel.findByPk(id);

  res.json(client);
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
    show,
    create,
    store
};