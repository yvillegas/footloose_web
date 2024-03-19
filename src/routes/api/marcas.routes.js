import { Router } from "express";
import { validateJWT } from "../../middlewares/validate-jwt.js";
import { apilistMarca } from "../../controllers/marcas.controller.js";

const router = Router();

router.get("/list", [validateJWT], apilistMarca);

export default router;
