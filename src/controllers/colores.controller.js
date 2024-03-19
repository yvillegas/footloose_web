import pool from "../database.js";

export const addColor = async (req, res) => {
  res.render("color/add");
};

export const saveColor = async (req, res) => {
  try {
    const { nombreColor } = req.body;
    const newColor = {
      nombreColor,
    };
    await pool.query("INSERT INTO color SET ?", [newColor]);
    res.redirect("/colores/list");
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const listColor = async (req, res) => {
  try {
    const [result] = await pool.query("SELECT * FROM color");
    res.render("color/list", { color: result });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const showColor = async (req, res) => {
  try {
    const { id } = req.params;
    const [color] = await pool.query("SELECT * FROM color WHERE idColor = ?", [
      id,
    ]);
    const colorEdit = color[0];
    res.render("color/edit", { color: colorEdit });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const editColor = async (req, res) => {
  try {
    const { nombreColor } = req.body;
    const { id } = req.params;
    const editColor = { nombreColor };
    await pool.query("UPDATE color SET ? WHERE idColor = ?", [editColor, id]);
    res.redirect("/colores/list");
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const deleteColor = async (req, res) => {
  try {
    const { id } = req.params;
    await pool.query("DELETE FROM color WHERE idColor = ?", [id]);
    res.redirect("/colores/list");
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const apilistColor = async (req, res) => {
  try {
    const [result] = await pool.query("SELECT * FROM color");
    return res.status(200).json(result);
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      error,
    });
  }
};
