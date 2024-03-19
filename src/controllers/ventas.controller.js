import pool from "../database.js";

export const addVenta = async (req, res) => {
  try {
    const [cliente] = await pool.query(
      'SELECT * FROM users WHERE user_type="cliente" '
    );
    res.render("venta/add", { cliente: cliente });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const saveVenta = async (req, res) => {
  try {
    const { fechaVenta, idUsuario } = req.body;
    const totalVenta = 0;
    const newVenta = {
      fechaVenta,
      idUsuario,
      totalVenta,
    };
    await pool.query("INSERT INTO venta SET ?", [newVenta]);
    res.redirect("/ventas/list");
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const listVenta = async (req, res) => {
  try {
    const [result] = await pool.query(
      'SELECT v.*, u.id, u.name , date_format(fechaVenta, "%d-%m-%Y") as fecha_formateada FROM venta v, users u WHERE v.idUsuario=u.id ORDER BY v.fechaVenta desc'
    );
    res.render("venta/list", { venta: result });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const showVenta = async (req, res) => {
  try {
    const { id } = req.params;
    const [cliente] = await pool.query(
      'SELECT * FROM users WHERE user_type="cliente" '
    );
    const [venta] = await pool.query(
      'SELECT v.*, u.id, u.name  , date_format(fechaVenta, "%Y-%m-%d") as fecha_formateada FROM venta v, users u WHERE v.idUsuario=u.id AND idVenta = ?',
      [id]
    );
    const ventaEdit = venta[0];
    res.render("venta/edit", { venta: ventaEdit, cliente: cliente });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const editVenta = async (req, res) => {
  try {
    const { fechaVenta, idUsuario } = req.body;
    const { id } = req.params;
    const editVenta = { fechaVenta, idUsuario };
    await pool.query("UPDATE venta SET ? WHERE idVenta = ?", [editVenta, id]);
    res.redirect("/ventas/list");
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const deleteVenta = async (req, res) => {
  try {
    const { id } = req.params;
    await pool.query("DELETE FROM detalleventa WHERE idVenta = ?", [id]);
    await pool.query("DELETE FROM venta WHERE idVenta = ?", [id]);
    res.redirect("/ventas/list");
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const listReporteVenta = async (req, res) => {
  try {
    const [result] = await pool.query(
      'SELECT v.*, u.id, u.name , date_format(fechaVenta, "%d-%m-%Y") as fecha_formateada FROM venta v, users u WHERE v.idUsuario=u.id '
    );
    res.render("reporte/list", { venta: result });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const dashboard = async (req, res) => {
  try {
    const fecha_hoy =
      new Date().getFullYear() +
      "-" +
      ("0" + (new Date().getMonth() + 1)).slice(-2) +
      "-" +
      ("0" + new Date().getDate()).slice(-2);

    const fecha_ini =
      new Date().getFullYear() +
      "-" +
      ("0" + (new Date().getMonth() + 1)).slice(-2) +
      "-" +
      "01".slice(-2);

    const fecha_fin =
      new Date().getFullYear() +
      "-" +
      ("0" + (new Date().getMonth() + 1)).slice(-2) +
      "-" +
      "31".slice(-2);

    console.log(fecha_ini, fecha_fin);

    const [result] = await pool.query(
      "SELECT p.nombreProducto , SUM(v.cantidadDetalle) AS cantidad FROM detalleventa v, producto p WHERE v.idProducto=p.idProducto GROUP BY v.idProducto ORDER BY cantidad desc LIMIT 5"
    );

    const [ventasdia] = await pool.query(
      "SELECT SUM(totalVenta) AS total FROM venta WHERE fechaVenta = ?",
      [fecha_hoy]
    );

    const [ventasmes] = await pool.query(
      "SELECT SUM(totalVenta) AS total FROM venta WHERE fechaVenta >= ? AND fechaVenta <= ?",
      [fecha_ini, fecha_fin]
    );

    var productos = [];
    var cantidades = [];
    result.map(function (obj) {
      productos.push(obj.nombreProducto);
      cantidades.push(obj.cantidad);
    });
    res.render("dashboard/list", {
      productos: productos,
      cantidades: cantidades,
      ventasdia: ventasdia[0],
      ventasmes: ventasmes[0],
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
