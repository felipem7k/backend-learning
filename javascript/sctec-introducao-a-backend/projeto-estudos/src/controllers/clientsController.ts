import type { Request, Response } from "express";

function index(req: Request, res: Response) {
  res.render("index");
}

export default {
    index
};