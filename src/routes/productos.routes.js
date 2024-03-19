import { Router } from "express";
import {
  addProducto,
  deleteProducto,
  editProducto,
  listProducto,
  saveProducto,
  showProducto,
} from "../controllers/productos.controller.js";

import multer from "multer";

const upload = multer({ dest: "./src/public/img/" });

const router = Router();
var auth = function (req, res, next) {
  if (req.session.loggedin) return next();
  else return res.redirect("/");
};

router.get("/productos/add", auth, addProducto);

router.post("/productos/add", upload.single("files"), saveProducto);

router.get("/productos/list", auth, listProducto);

router.get("/productos/edit/:id", auth, showProducto);

router.post("/productos/edit/:id", auth, editProducto);

router.get("/productos/delete/:id", auth, deleteProducto);

export default router;
