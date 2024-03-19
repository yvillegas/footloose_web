import { Router } from "express";
import { validateJWT } from "../../middlewares/validate-jwt.js";
import { apilistTalla } from "../../controllers/tallas.controller.js";

const router = Router();

router.get("/list", [validateJWT], apilistTalla);

export default router;
