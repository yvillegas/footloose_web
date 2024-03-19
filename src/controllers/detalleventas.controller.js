import pool from "../database.js";
import { transporter } from "../controllers/mail.controller.js";
import jwt from "jsonwebtoken";
import "dotenv/config";

export const addDetalleVenta = async (req, res) => {
  try {
    const { idVenta } = req.params;
    const [producto] = await pool.query("SELECT * FROM producto");
    res.render("detalleventa/add", { producto: producto, idVenta: idVenta });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const saveDetalleVenta = async (req, res) => {
  try {
    const { idVenta } = req.params;
    const { cantidadDetalle, precioDetalle, idProducto } = req.body;
    const newVenta = {
      cantidadDetalle,
      precioDetalle,
      idVenta,
      idProducto,
    };
    await pool.query("INSERT INTO detalleventa SET ?", [newVenta]);
    res.redirect("/detalleventas/updatePrice/" + idVenta);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const listDetalleVenta = async (req, res) => {
  try {
    const { idVenta } = req.params;
    const [result] = await pool.query(
      "SELECT v.*, p.idProducto, p.nombreProducto , v.cantidadDetalle * v.precioDetalle preciototal FROM detalleventa v, producto p WHERE v.idProducto=p.idProducto AND v.idVenta= ?",
      [idVenta]
    );
    const [venta] = await pool.query(
      'SELECT v.*, u.id, u.name  , date_format(fechaVenta, "%Y-%m-%d") as fecha_formateada FROM venta v, users u WHERE v.idUsuario=u.id AND idVenta = ?',
      [idVenta]
    );
    res.render("detalleventa/list", {
      detalleventa: result,
      idVenta: idVenta,
      venta: venta[0],
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const showDetalleVenta = async (req, res) => {
  try {
    const { id } = req.params;
    const [producto] = await pool.query("SELECT * FROM producto");
    const [detalle] = await pool.query(
      "SELECT v.*, p.idProducto, p.nombreProducto FROM detalleventa v, producto p WHERE v.idProducto=p.idProducto AND v.idDetalle= ?",
      [id]
    );
    const detalleEdit = detalle[0];
    res.render("detalleventa/edit", {
      detalle: detalleEdit,
      producto: producto,
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const editDetalleVenta = async (req, res) => {
  try {
    const { idVenta } = req.params;
    const { cantidadDetalle, precioDetalle, idProducto } = req.body;
    const { id } = req.params;
    const editDetalle = { cantidadDetalle, precioDetalle, idProducto };
    await pool.query("UPDATE detalleventa SET ? WHERE idDetalle = ?", [
      editDetalle,
      id,
    ]);
    res.redirect("/detalleventas/updatePrice/" + idVenta);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const deleteDetalleVenta = async (req, res) => {
  try {
    const { idVenta } = req.params;
    const { id } = req.params;
    await pool.query("DELETE FROM detalleventa WHERE idDetalle = ?", [id]);
    res.redirect("/detalleventas/updatePrice/" + idVenta);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const updatePriceVenta = async (req, res) => {
  try {
    const { idVenta } = req.params;
    const [ventas] = await pool.query(
      "SELECT * FROM detalleventa WHERE idVenta=?",
      [idVenta]
    );
    var totalVenta = 0;

    ventas.forEach((detalle) => {
      totalVenta += detalle.cantidadDetalle * detalle.precioDetalle;
    });

    const editVenta = { totalVenta };
    await pool.query("UPDATE venta SET ? WHERE idVenta = ?", [
      editVenta,
      idVenta,
    ]);
    res.redirect("/detalleventas/list/" + idVenta);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const addCarrito = async (req, res) => {
  try {
    const token = req.header("x-token");
    const { productos } = req.body;

    const { uid } = jwt.verify(token, process.env.JWT_KEY);
    const idUsuario = uid;

    const detalles = productos;
    const d =
      new Date().getFullYear() +
      "-" +
      ("0" + (new Date().getMonth() + 1)).slice(-2) +
      "-" +
      ("0" + new Date().getDate()).slice(-2);

    const [venta] = await pool.query(
      "INSERT INTO venta SET fechaVenta = ? , idUsuario = ? , totalVenta = ? ",
      [d, idUsuario, 0]
    );
    var totalVenta = 0;
    console.log("venta", venta.insertId);
    detalles.forEach(async (detalle) => {
      const newVenta = {
        cantidadDetalle: detalle["cantidad"],
        precioDetalle: detalle["precio"],
        idProducto: detalle["idProducto"],
        idVenta: venta.insertId,
      };
      totalVenta += detalle["cantidad"] * detalle["precio"];
      await pool.query("INSERT INTO detalleventa SET ?", [newVenta]);
    });

    const editVenta = { totalVenta };
    await pool.query("UPDATE venta SET ? WHERE idVenta = ?", [
      editVenta,
      venta.insertId,
    ]);

    console.log(idUsuario);
    const [usuario] = await pool.query(
      "SELECT email FROM users WHERE id = ? LIMIT 1",
      [idUsuario]
    );
    sendMail(usuario[0].email, detalles);
    return res.status(200).json({
      ok: true,
    });
  } catch (err) {
    console.log("error", err);
    res.status(500).json({ message: err.message });
  }
};

function sendMail(email, productos) {
  //quitar async

  try {
    const MailToClient = {
      from: process.env.SMTP_USER,
      to: `${email}`,
      subject: "Gracias por tu compra",
      text: `Su compra se realizo correctamente | Fecha: ${new Date()}`,
    };

    transporter.sendMail(MailToClient, (err, info) => {
      console.log("message: ", MailToClient);
      if (err) {
        console.error(err);
        return false;
      } else {
        console.log(info);
        return true;
      }
    });
  } catch (error) {
    console.error(error);
    return false;
  }
}

// <script type="module">
//   // Import the functions you need from the SDKs you need
//   import { initializeApp } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-app.js";
//   import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-analytics.js";
//   // TODO: Add SDKs for Firebase products that you want to use
//   // https://firebase.google.com/docs/web/setup#available-libraries

//   // Your web app's Firebase configuration
//   // For Firebase JS SDK v7.20.0 and later, measurementId is optional
//   const firebaseConfig = {
//     apiKey: "AIzaSyDjFWkOefafvzrFCGLFPiNW8Scw4U0Tas4",
//     authDomain: "footloseapp.firebaseapp.com",
//     projectId: "footloseapp",
//     storageBucket: "footloseapp.appspot.com",
//     messagingSenderId: "960315180661",
//     appId: "1:960315180661:web:4cc3706fd5e34471c49a3c",
//     measurementId: "G-2QGH1M9SP9"
//   };

//   // Initialize Firebase
//   const app = initializeApp(firebaseConfig);
//   const analytics = getAnalytics(app);
// </script>
