import { Router } from "express";
import {
  addDetalleVenta,
  deleteDetalleVenta,
  editDetalleVenta,
  listDetalleVenta,
  saveDetalleVenta,
  showDetalleVenta,
  updatePriceVenta,
} from "../controllers/detalleventas.controller.js";

const router = Router();
var auth = function (req, res, next) {
  if (req.session.loggedin) return next();
  else return res.redirect("/");
};
router.get("/detalleventas/add/:idVenta", auth, addDetalleVenta);

router.post("/detalleventas/add/:idVenta", auth, saveDetalleVenta);

router.get("/detalleventas/list/:idVenta", auth, listDetalleVenta);

router.get("/detalleventas/edit/:idVenta/:id", auth, showDetalleVenta);

router.post("/detalleventas/edit/:idVenta/:id", auth, editDetalleVenta);

router.get("/detalleventas/delete/:idVenta/:id", auth, deleteDetalleVenta);

router.get("/detalleventas/updatePrice/:idVenta", auth, updatePriceVenta);

export default router;
