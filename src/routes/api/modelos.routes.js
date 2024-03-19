import { Router } from "express";
import { validateJWT } from "../../middlewares/validate-jwt.js";
import { apilistModelo } from "../../controllers/modelos.controller.js";

const router = Router();

router.get("/list", [validateJWT], apilistModelo);

export default router;
