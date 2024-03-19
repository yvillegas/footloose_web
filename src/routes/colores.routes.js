import { Router } from "express";
import {
  addColor,
  deleteColor,
  editColor,
  listColor,
  saveColor,
  showColor,
} from "../controllers/colores.controller.js";

const router = Router();
var auth = function (req, res, next) {
  console.log(req.session.loggedin);
  if (req.session.loggedin) return next();
  else return res.redirect("/");
};
router.get("/colores/add", auth, addColor);

router.post("/colores/add", auth, saveColor);

router.get("/colores/list", auth, listColor);

router.get("/colores/edit/:id", auth, showColor);

router.post("/colores/edit/:id", auth, editColor);

router.get("/colores/delete/:id", auth, deleteColor);
export default router;
