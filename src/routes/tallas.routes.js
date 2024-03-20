import { Router } from "express";
import {
  addTalla,
  deleteTalla,
  editTalla,
  listTalla,
  saveTalla,
  showTalla,
} from "../controllers/tallas.controller.js";

const router = Router();

var auth = function (req, res, next) {
  if (true) return next();
  else return res.redirect("/");
};

router.get("/tallas/add", auth, addTalla);

router.post("/tallas/add", auth, saveTalla);

router.get("/tallas/list", auth, listTalla);

router.get("/tallas/edit/:id", auth, showTalla);

router.post("/tallas/edit/:id", auth, editTalla);

router.get("/tallas/delete/:id", auth, deleteTalla);

export default router;
