import { Router } from "express";
import { validateJWT } from "../../middlewares/validate-jwt.js";
import { apilistColor } from "../../controllers/colores.controller.js";

const router = Router();

router.get("/list", [validateJWT], apilistColor);

export default router;
