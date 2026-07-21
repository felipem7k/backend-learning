import type { Request, Response } from "express";
import usersModel from "../models/usersModel.js";
import type { IUsers } from "../models/users.js";

function login(req: Request, res: Response) {
  res.render("login");
}

async function checkLogin(req: Request, res: Response) {
  const body = req.body as IUsers;
  try {
    const user = await usersModel.findOne({
      where: {
        user: body.user,
        password: body.password
      }
    });

    if (!user) {
      res.redirect("/");
      console.log("Usuário não encontrado");
      return;
    }

    res.redirect("/clients");
  } catch (error) {
    console.error(error);
    res.status(500).end();
  }
}

export default {
    login,
    checkLogin
};