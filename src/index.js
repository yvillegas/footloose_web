import express from "express";
import morgan from "morgan";
import { engine } from "express-handlebars";
import { join, dirname } from "path";
import { fileURLToPath } from "url";
import marcasRoutes from "./routes/marcas.routes.js";
import modelosRoutes from "./routes/modelos.routes.js";
import tallasRoutes from "./routes/tallas.routes.js";
import coloresRoutes from "./routes/colores.routes.js";
import productosRoutes from "./routes/productos.routes.js";
import ventasRoutes from "./routes/ventas.routes.js";
import detalleventasRoutes from "./routes/detalleventas.routes.js";
import apiauthRoutes from "./routes/api/auth.routes.js";
import authRoutes from "./routes/web/auth.routes.js";
import session from "express-session";
import "dotenv/config";
//Intialization
const app = express();
const __dirname = dirname(fileURLToPath(import.meta.url));

//Session
app.use(
  session({
    secret: "secret",
    resave: false,
    saveUninitialized: false,
  })
);

//Settings
app.set("Access-Control-Allow-Origin", "*");
app.set("Access-Control-Allow-Headers", "Content-Type");
app.set("port", process.env.PORT);
app.set("views", join(__dirname, "views"));
app.engine(
  ".hbs",
  engine({
    defaultLayout: "main",
    layoutsDir: join(app.get("views"), "layouts"),
    partialsDir: join(app.get("views"), "partials"),
    extname: ".hbs",
  })
);
app.set("view engine", ".hbs");

//Middlewares
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//Routes
app.get("/", (req, res) => {
  app.use(express.static(join(__dirname, "static")));
  res.sendFile(join(__dirname + "/views/auth/login.html"));
});
app.use(marcasRoutes);
app.use(modelosRoutes);
app.use(tallasRoutes);
app.use(coloresRoutes);
app.use(productosRoutes);
app.use(ventasRoutes);
app.use(detalleventasRoutes);
app.use("/api", apiauthRoutes);
app.use("/auth", authRoutes);

//Public files
app.use(express.static(join(__dirname, "public")));

//Run Server
app.listen(app.get("port"), () =>
  console.log("Server listening on port", app.get("port"))
);
