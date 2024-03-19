import pool from "../database.js";

export const addMarca = async (req, res) => {
  res.render("marca/add");
};

export const saveMarca = async (req, res) => {
  try {
    const { nombreMarca } = req.body;
    const newMarca = {
      nombreMarca,
    };
    await pool.query("INSERT INTO marca SET ?", [newMarca]);
    res.redirect("/marcas/list");
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const listMarca = async (req, res) => {
  try {
    const [result] = await pool.query("SELECT * FROM marca");
    res.render("marca/list", { marca: result });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const showMarca = async (req, res) => {
  try {
    const { id } = req.params;
    const [marca] = await pool.query("SELECT * FROM marca WHERE idMarca = ?", [
      id,
    ]);
    const marcaEdit = marca[0];
    res.render("marca/edit", { marca: marcaEdit });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const editMarca = async (req, res) => {
  try {
    const { nombreMarca } = req.body;
    const { id } = req.params;
    const editMarca = { nombreMarca };
    await pool.query("UPDATE marca SET ? WHERE idMarca = ?", [editMarca, id]);
    res.redirect("/marcas/list");
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const deleteMarca = async (req, res) => {
  try {
    const { id } = req.params;
    await pool.query("DELETE FROM marca WHERE idMarca = ?", [id]);
    res.redirect("/marcas/list");
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const apilistMarca = async (req, res) => {
  try {
    const [result] = await pool.query("SELECT * FROM marca");
    return res.status(200).json(result);
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      error,
    });
  }
};
