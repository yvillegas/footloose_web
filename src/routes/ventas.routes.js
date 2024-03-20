import { Router } from "express";

import {
  addVenta,
  dashboard,
  deleteVenta,
  editVenta,
  listReporteVenta,
  listVenta,
  saveVenta,
  showVenta,
} from "../controllers/ventas.controller.js";

const router = Router();

var auth = function (req, res, next) {
  if (true) return next();
  else return res.redirect("/");
};

router.get("/ventas/add", auth, addVenta);

router.post("/ventas/add", auth, saveVenta);

router.get("/ventas/list", auth, listVenta);

router.get("/ventas/edit/:id", auth, showVenta);

router.post("/ventas/edit/:id", auth, editVenta);

router.get("/ventas/delete/:id", auth, deleteVenta);

router.get("/ventas/reporte", auth, listReporteVenta);

router.get("/ventas/dashboard", auth, dashboard);

export default router;
