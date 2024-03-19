import pool from "../database.js";

export const addModelo = async (req, res) => {
  res.render("modelo/add");
};

export const saveModelo = async (req, res) => {
  try {
    const { nombreModelo } = req.body;
    const newModelo = {
      nombreModelo,
    };
    await pool.query("INSERT INTO modelo SET ?", [newModelo]);
    res.redirect("/modelos/list");
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const listModelo = async (req, res) => {
  try {
    const [result] = await pool.query("SELECT * FROM modelo");
    res.render("modelo/list", { modelo: result });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const showModelo = async (req, res) => {
  try {
    const { id } = req.params;
    const [modelo] = await pool.query(
      "SELECT * FROM modelo WHERE idModelo = ?",
      [id]
    );
    const modeloEdit = modelo[0];
    res.render("modelo/edit", { modelo: modeloEdit });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const editModelo = async (req, res) => {
  try {
    const { nombreModelo } = req.body;
    const { id } = req.params;
    const editModelo = { nombreModelo };
    await pool.query("UPDATE modelo SET ? WHERE idModelo = ?", [
      editModelo,
      id,
    ]);
    res.redirect("/modelos/list");
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const deleteModelo = async (req, res) => {
  try {
    const { id } = req.params;
    await pool.query("DELETE FROM modelo WHERE idModelo = ?", [id]);
    res.redirect("/modelos/list");
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const apilistModelo = async (req, res) => {
  try {
    const [result] = await pool.query("SELECT * FROM modelo");
    return res.status(200).json(result);
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      error,
    });
  }
};
