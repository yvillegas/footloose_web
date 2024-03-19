import { Router } from "express";
import { validateJWT } from "../../middlewares/validate-jwt.js";
import { addCarrito } from "../../controllers/detalleventas.controller.js";

const router = Router();

router.post("/add", [validateJWT], addCarrito);

export default router;
