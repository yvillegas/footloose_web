import { Router } from "express";
import { validateJWT } from "../../middlewares/validate-jwt.js";
import {
  apilistProducto,
  listProductoColor,
  listProductoFiltro,
  listProductoMarca,
  listProductoModelo,
  listProductoTalla,
  showProductoId,
} from "../../controllers/productos.controller.js";

const router = Router();

router.get("/list1", [validateJWT], apilistProducto);
router.get("/list", [validateJWT], listProductoFiltro);
router.get("/list/modelo", [validateJWT], listProductoModelo);
router.get("/list/talla", [validateJWT], listProductoTalla);
router.get("/list/color", [validateJWT], listProductoColor);
router.get("/list/precio", [validateJWT], listProductoMarca);
router.get("/show/:idProducto", [validateJWT], showProductoId);

export default router;
