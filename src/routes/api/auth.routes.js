import { Router } from "express";
import {
  apiloginUser,
  renewToken,
  editUser,
} from "../../controllers/auth.controller.js";

import { check } from "express-validator";
import { validateJWT } from "../../middlewares/validate-jwt.js";
import { validateParams } from "../../middlewares/validate-params.js";
import productosRoutes from "./productos.routes.js";
import modelosRoutes from "./modelos.routes.js";
import tallasRoutes from "./tallas.routes.js";
import coloresRoutes from "./colores.routes.js";
import marcasRoutes from "./marcas.routes.js";
import carritoRoutes from "./carrito.routes.js";

const router = Router();

router.post("/edit", editUser);

router.post(
  "/auth",
  [
    check("email", "The email is required").isEmail(),
    check("password", "The password is required").not().isEmpty(),
    validateParams,
  ],
  apiloginUser
);

router.get("/renew", [validateJWT], renewToken);

router.use("/producto", productosRoutes);
router.use("/modelo", modelosRoutes);
router.use("/talla", tallasRoutes);
router.use("/color", coloresRoutes);
router.use("/marca", marcasRoutes);
router.use("/carrito", carritoRoutes);

export default router;
