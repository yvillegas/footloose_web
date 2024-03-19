// app.post("/auth", async (request, response) => {
//   // Capture the input fields
//   let username = request.body.username;
//   let password = request.body.password;
//   // Ensure the input fields exists and are not empty
//   if (username && password) {
//     // Execute SQL query that'll select the account from the database based on the specified username and password
//     const [usuario] = await connection.query(
//       "SELECT * FROM users WHERE email = ? AND password = ?",
//       [username, password]
//     );
//     if (usuario.length > 0) {
//       // Authenticate the user
//       request.session.loggedin = true;
//       request.session.username = username;
//       // Redirect to home page
//       response.redirect("/ventas/list");
//     } else {
//       response.send("Usuario y/o Contraseña Incorrecta");
//     }
//     response.end();
//   } else {
//     response.send("Por favor ingresa Usuario y Contraseña!");
//     response.end();
//   }
// });

// app.get("/logout", async (request, response) => {
//   // Capture the input fields

//   request.session.loggedin = false;
//   request.session.username = "";
//   response.redirect("/");
// });

// // http://localhost:3000/home
// app.get("/home", function (request, response) {
//   // If the user is loggedin
//   if (request.session.loggedin) {
//     // Output username
//     response.send(
//       "Te has logueado satisfactoriamente:, " + request.session.username + "!"
//     );
//   } else {
//     // Not logged in
//     response.send("¡Inicia sesión para ver esta página!");
//   }
//   response.end();
// });

// app.use(function (req, res, next) {
//   if (req.session.loggedIn) {
//     res.locals.authenticated = true;
//     User.findById(req.session.loggedIn, function (err, doc) {
//       if (err) return next(err);
//       res.locals.me = doc;
//       next();
//     });
//   } else {
//     res.locals.authenticated = false;
//     next();
//   }
// });

import { Router } from "express";
import {
  loginUser,
  renewToken,
  editUser,
} from "../../controllers/auth.controller.js";

import { check } from "express-validator";
import { validateJWT } from "../../middlewares/validate-jwt.js";
import { validateParams } from "../../middlewares/validate-params.js";

const router = Router();

// router.post(
//   "/new",
//   [
//     check("name", "The name is required").not().isEmpty(),
//     check("email", "The email is required").isEmail(),
//     check("password", "The password is required").not().isEmpty(),
//     validateParams,
//   ],
//   createUser
// );

router.post("/edit", editUser);

router.post(
  "/",
  [
    check("email", "The email is required").isEmail(),
    check("password", "The password is required").not().isEmpty(),
    validateParams,
  ],
  loginUser
);

router.get("/renew", [validateJWT], renewToken);

router.get("/logout", async (request, response) => {
  // Capture the input fields

  request.session.loggedin = false;
  request.session.username = "";
  response.redirect("/");
});

export default router;
