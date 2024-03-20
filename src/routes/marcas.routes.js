import { Router } from "express";
import {
  addMarca,
  deleteMarca,
  editMarca,
  listMarca,
  saveMarca,
  showMarca,
} from "../controllers/marcas.controller.js";

const router = Router();
var auth = function (req, res, next) {
  if (true) return next();
  else return res.redirect("/");
};

router.get("/marcas/add", auth, addMarca);

router.post("/marcas/add", auth, saveMarca);

router.get("/marcas/list", auth, listMarca);

router.get("/marcas/edit/:id", auth, showMarca);

router.post("/marcas/edit/:id", auth, editMarca);

router.get("/marcas/delete/:id", auth, deleteMarca);

export default router;
