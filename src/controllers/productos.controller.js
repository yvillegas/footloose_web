import pool from "../database.js";
import admin from "../controllers/firebase.controller.js";

export const addProducto = async (req, res) => {
  try {
    const [marca] = await pool.query("SELECT * FROM marca");
    const [modelo] = await pool.query("SELECT * FROM modelo");
    const [talla] = await pool.query("SELECT * FROM talla");
    const [color] = await pool.query("SELECT * FROM color");
    res.render("producto/add", {
      marca: marca,
      modelo: modelo,
      talla: talla,
      color: color,
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const saveProducto = async (req, res) => {
  try {
    const {
      nombreProducto,
      precioProducto,
      idMarca,
      idModelo,
      idTalla,
      idColor,
    } = req.body;
    const imagenProducto = req.file.filename;
    const newProducto = {
      nombreProducto,
      imagenProducto,
      precioProducto,
      idMarca,
      idModelo,
      idTalla,
      idColor,
    };
    await pool.query("INSERT INTO producto SET ?", [newProducto]);
    res.redirect("/productos/list");
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const listProducto = async (req, res) => {
  try {
    const [result] = await pool.query(
      "SELECT * FROM producto p, marca m, modelo mo, talla t, color c WHERE p.idMarca=m.idMarca AND p.idModelo=mo.idModelo AND p.idTalla=t.idTalla AND p.idColor=c.idColor "
    );
    res.render("producto/list", { producto: result });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const showProducto = async (req, res) => {
  try {
    const { id } = req.params;
    const [marca] = await pool.query("SELECT * FROM marca");
    const [modelo] = await pool.query("SELECT * FROM modelo");
    const [talla] = await pool.query("SELECT * FROM talla");
    const [color] = await pool.query("SELECT * FROM color");
    const [producto] = await pool.query(
      "SELECT * FROM producto p, marca m, modelo mo, talla t, color c WHERE p.idMarca=m.idMarca AND p.idModelo=mo.idModelo AND p.idTalla=t.idTalla AND p.idColor=c.idColor AND idProducto = ?",
      [id]
    );
    const productoEdit = producto[0];
    res.render("producto/edit", {
      producto: productoEdit,
      marca: marca,
      modelo: modelo,
      talla: talla,
      color: color,
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const editProducto = async (req, res) => {
  try {
    const {
      nombreProducto,
      precioProducto,
      idMarca,
      idModelo,
      idTalla,
      idColor,
    } = req.body;
    const { id } = req.params;
    const editProducto = {
      nombreProducto,
      precioProducto,
      idMarca,
      idModelo,
      idTalla,
      idColor,
    };

    sendNotification(nombreProducto);

    await pool.query("UPDATE producto SET ? WHERE idProducto = ?", [
      editProducto,
      id,
    ]);
    res.redirect("/productos/list");
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const deleteProducto = async (req, res) => {
  try {
    const { id } = req.params;
    await pool.query("DELETE FROM producto WHERE idProducto = ?", [id]);
    res.redirect("/productos/list");
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const apilistProducto = async (req, res) => {
  try {
    const [result] = await pool.query(
      "SELECT * FROM producto p, marca m, modelo mo, talla t, color c WHERE p.idMarca=m.idMarca AND p.idModelo=mo.idModelo AND p.idTalla=t.idTalla AND p.idColor=c.idColor "
    );
    return res.status(200).json(result);
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      error,
    });
  }
};

export const listProductoFiltro = async (req, res) => {
  const idMarca = req.query.idMarca;
  const idModelo = req.query.idModelo;
  const idTalla = req.query.idTalla;
  const idColor = req.query.idColor;
  var result;

  var sql =
    "SELECT * FROM producto p, marca m, modelo mo, talla t, color c WHERE p.idMarca=m.idMarca AND p.idModelo=mo.idModelo AND p.idTalla=t.idTalla AND p.idColor=c.idColor";

  if (idMarca != undefined) {
    sql += " AND p.idMarca=" + idMarca;
  }
  if (idModelo != undefined) {
    sql += " AND p.idModelo=" + idModelo;
  }
  if (idTalla != undefined) {
    sql += " AND p.idTalla=" + idTalla;
  }
  if (idColor != undefined) {
    sql += " AND p.idColor=" + idColor;
  }

  try {
    const [result] = await pool.query(sql);
    return res.status(200).json(result);
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      error,
    });
  }
};

export const listProductoMarca = async (req, res) => {
  try {
    const { idMarca } = req.body;
    const [result] = await pool.query(
      "SELECT * FROM producto p, marca m, modelo mo, talla t, color c WHERE p.idMarca=m.idMarca AND p.idModelo=mo.idModelo AND p.idTalla=t.idTalla AND p.idColor=c.idColor AND p.idMarca=?",
      [idMarca]
    );
    return res.status(200).json(result);
  } catch (error) {
    return res.status(500).json({
      error,
    });
  }
};

export const listProductoColor = async (req, res) => {
  try {
    const { idColor } = req.body;
    const [result] = await pool.query(
      "SELECT * FROM producto p, marca m, modelo mo, talla t, color c WHERE p.idMarca=m.idMarca AND p.idModelo=mo.idModelo AND p.idTalla=t.idTalla AND p.idColor=c.idColor AND p.idColor=?",
      [idColor]
    );
    return res.status(200).json(result);
  } catch (error) {
    return res.status(500).json({
      error,
    });
  }
};

export const listProductoModelo = async (req, res) => {
  try {
    const { idModelo } = req.body;
    const [result] = await pool.query(
      "SELECT * FROM producto p, marca m, modelo mo, talla t, color c WHERE p.idMarca=m.idMarca AND p.idModelo=mo.idModelo AND p.idTalla=t.idTalla AND p.idColor=c.idColor AND p.idModelo=?",
      [idModelo]
    );
    return res.status(200).json(result);
  } catch (error) {
    return res.status(500).json({
      error,
    });
  }
};

export const listProductoTalla = async (req, res) => {
  try {
    const { idTalla } = req.body;
    const [result] = await pool.query(
      "SELECT * FROM producto p, marca m, modelo mo, talla t, color c WHERE p.idMarca=m.idMarca AND p.idModelo=mo.idModelo AND p.idTalla=t.idTalla AND p.idColor=c.idColor AND p.idTalla=?",
      [idTalla]
    );
    return res.status(200).json(result);
  } catch (error) {
    return res.status(500).json({
      error,
    });
  }
};

export const listProductoPrecio = async (req, res) => {
  try {
    const { precioIni } = req.body;
    const { precioFin } = req.body;
    const [result] = await pool.query(
      "SELECT * FROM producto p, marca m, modelo mo, talla t, color c WHERE p.idMarca=m.idMarca AND p.idModelo=mo.idModelo AND p.idTalla=t.idTalla AND p.idColor=c.idColor AND p.precioProducto >= ? AND p.precioProducto <= ?",
      [precioIni, precioFin]
    );
    return res.status(200).json(result);
  } catch (error) {
    return res.status(500).json({
      error,
    });
  }
};

export const showProductoId = async (req, res) => {
  try {
    const { idProducto } = req.params;
    const [result] = await pool.query(
      "SELECT * FROM producto p, marca m, modelo mo, talla t, color c WHERE p.idMarca=m.idMarca AND p.idModelo=mo.idModelo AND p.idTalla=t.idTalla AND p.idColor=c.idColor AND p.idProducto=?",
      [idProducto]
    );
    return res.status(200).json(result[0]);
  } catch (error) {
    return res.status(500).json({
      error,
    });
  }
};

function sendNotification(nombreProducto) {
  const message = {
    notification: {
      title: "FootloseApp",
      body: "El precio del producto " + nombreProducto + " se actualizó",
    },
    data: {
      extraInformation: "Información adicional",
    },
    topic: "price_updated",
  };

  admin
    .messaging()
    .send(message)
    .then((response) => {
      console.log("Mensaje enviado exitosamente:", response);
    })
    .catch((error) => {
      console.log("Error al enviar el mensaje:", error);
    });
}
