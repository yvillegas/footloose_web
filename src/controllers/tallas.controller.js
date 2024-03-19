import pool from "../database.js";

export const addTalla = async (req, res) => {
  res.render("talla/add");
};

export const saveTalla = async (req, res) => {
  try {
    const { nombreTalla } = req.body;
    const newTalla = {
      nombreTalla,
    };
    await pool.query("INSERT INTO talla SET ?", [newTalla]);
    res.redirect("/tallas/list");
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const listTalla = async (req, res) => {
  try {
    const [result] = await pool.query("SELECT * FROM talla");
    res.render("talla/list", { talla: result });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const showTalla = async (req, res) => {
  try {
    const { id } = req.params;
    const [talla] = await pool.query("SELECT * FROM talla WHERE idTalla = ?", [
      id,
    ]);
    const tallaEdit = talla[0];
    res.render("talla/edit", { talla: tallaEdit });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const editTalla = async (req, res) => {
  try {
    const { nombreTalla } = req.body;
    const { id } = req.params;
    const editTalla = { nombreTalla };
    await pool.query("UPDATE talla SET ? WHERE idTalla = ?", [editTalla, id]);
    res.redirect("/tallas/list");
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const deleteTalla = async (req, res) => {
  try {
    const { id } = req.params;
    await pool.query("DELETE FROM talla WHERE idTalla = ?", [id]);
    res.redirect("/tallas/list");
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const apilistTalla = async (req, res) => {
  try {
    const [result] = await pool.query("SELECT * FROM talla");
    return res.status(200).json(result);
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      error,
    });
  }
};
