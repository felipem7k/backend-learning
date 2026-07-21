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

  if (!Number.isInteger(id) || id <= 0) {
    res.sendStatus(404);
    return;
  }

  try {
    const client = await clientsModel.findByPk(id);
  
    res.json(client);
  } catch (error) {
    console.error(error);
    res.status(500).end();
  }
}

async function create(req: Request, res: Response) {
  res.render("create");
}

async function store(req: Request, res: Response) {
  const client = req.body as IClients;
  
  try {
    await clientsModel.create({
      ...client
    });
  
    res.redirect("/clients");
  } catch (error) {
    console.error(error);
    res.status(500).end();
  }
}

async function edit(req: Request, res: Response) {
   const id = Number(req.params.id);

  if (!Number.isInteger(id) || id <= 0) {
    res.sendStatus(404);
    return;
  }

  try {
    const client = await clientsModel.findByPk(id);

    res.render("edit", {
      client
    });
  } catch (error) {
    console.error(error);
    res.status(500).end();
  }
}

async function update(req: Request, res: Response) {
  try {
    await clientsModel.update(req.body as IClients, {
      where: {
        id: req.params.id
      }
    });

    res.redirect("/clients");
  } catch (error) {
    console.error(error);
    res.status(500).end();
  }
}

async function del(req: Request, res: Response) {
  try {
    await clientsModel.destroy({
      where: {
        id: req.params.id
      }
    });

    res.redirect("/clients");
  } catch (error) {
    console.error(error);
    res.status(500).end();
  }
}

export default {
    index,
    show,
    create,
    store,
    edit,
    update,
    del
};