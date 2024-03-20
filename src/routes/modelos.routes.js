import { Router } from "express";
import {
  addModelo,
  deleteModelo,
  editModelo,
  listModelo,
  saveModelo,
  showModelo,
} from "../controllers/modelos.controller.js";

const router = Router();

var auth = function (req, res, next) {
  if (true) return next();
  else return res.redirect("/");
};

router.get("/modelos/add", auth, addModelo);

router.post("/modelos/add", auth, saveModelo);

router.get("/modelos/list", auth, listModelo);

router.get("/modelos/edit/:id", auth, showModelo);

router.post("/modelos/edit/:id", auth, editModelo);

router.get("/modelos/delete/:id", auth, deleteModelo);
export default router;
