//import UserModel from "../models/user.model";
import bcrypt from "bcryptjs";
import { generateJWT } from "../helpers/jwt.js";
import pool from "../database.js";

// const createUser = async (req, res) => {
//   const { email, password } = req.body;

//   try {
//     const emailExists = await UserModel.findOne({ email });
//     if (emailExists) {
//       return res.status(400).json({
//         ok: false,
//         message: "Email is registered",
//       });
//     }

//     const user = new UserModel(req.body);

//     // Encrypt password
//     const salt = bcrypt.genSaltSync();
//     user.password = bcrypt.hashSync(password, salt);

//     // Generate Token
//     const token = await generateJWT(user.id);

//     await user.save();
//     return res.status(200).json({
//       ok: true,
//       token,
//       user,
//     });
//   } catch (error) {
//     res.status(500).json({
//       ok: false,
//       error,
//     });
//   }
// };

export const editUser = async (req, res) => {
  try {
    const salt = bcrypt.genSaltSync();
    const password = bcrypt.hashSync("123", salt);

    await pool.query("UPDATE users SET password = ? WHERE id = 3", [password]);
    return res.status(200).json({
      ok: true,
      token,
      user,
    });
  } catch (error) {
    res.status(500).json({
      ok: false,
      error,
    });
  }
};

export const loginUser = async (req, res) => {
  const { email, password } = req.body;
  console.log(email, password);
  try {
    //const userDB = await UserModel.findOne({ email });
    const [userDB] = await pool.query(
      "SELECT * FROM users WHERE email = ? LIMIT 1",
      [email]
    );
    console.log(userDB);
    if (!userDB) {
      return res.status(400).json({
        ok: false,
        message: "Email and/or password invalids",
      });
    }
    const validPassword = bcrypt.compareSync(password, userDB[0].password);

    if (!validPassword) {
      return res.status(400).json({
        ok: false,
        message: "Email and/or password invalids",
      });
    }

    console.log(userDB[0].id);
    const token = await generateJWT(userDB[0].id);
    req.session.loggedin = true;
    req.session.username = userDB[0];
    // Redirect to home page
    res.redirect("/ventas/list");
  } catch (error) {
    return res.status(500).json({
      ok: false,
      error,
    });
  }
};

export const renewToken = async (req, res) => {
  const uid = req.uid;
  const token = await generateJWT(uid);
  //const user = await UserModel.findById(uid);
  const [user] = await pool.query("SELECT * FROM users WHERE id = ?", [uid]);

  return res.status(200).json({
    ok: true,
    token,
    user,
  });
};
export const apiloginUser = async (req, res) => {
  const { email, password } = req.body;
  console.log(email, password);
  try {
    //const userDB = await UserModel.findOne({ email });
    const [userDB] = await pool.query(
      "SELECT * FROM users WHERE email = ? LIMIT 1",
      [email]
    );
    console.log(userDB);
    if (!userDB) {
      return res.status(400).json({
        ok: false,
        message: "Email and/or password invalids",
      });
    }
    const validPassword = bcrypt.compareSync(password, userDB[0].password);

    if (!validPassword) {
      return res.status(400).json({
        ok: false,
        message: "Email and/or password invalids",
      });
    }

    console.log(userDB[0].id);
    const token = await generateJWT(userDB[0].id);
    return res.status(200).json({
      ok: true,
      token,
      user: userDB[0],
    });
  } catch (error) {
    return res.status(500).json({
      ok: false,
      error,
    });
  }
};
