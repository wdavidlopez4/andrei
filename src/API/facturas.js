import { getConnection, querys, sql } from "../database";

export const getFacturas = async (req, res) => {
  try {
    const pool = await getConnection();
    const result = await pool.request().query(querys.getAllFacturas);
    res.json(result.recordset);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

export const createNewFacturas = async (req, res) => {
  const { name, description } = req.body;
  let { quantity } = req.body;

  // validating
  if (description == null || name == null) {
    return res.status(400).json({ msg: "Bad Request. Please fill all fields" });
  }

  if (quantity == null) quantity = 0;

  try {
    const pool = await getConnection();

    await pool
      .request()
      .input("name", sql.VarChar, name)
      .input("description", sql.Text, description)
      .query(querys.addNewProduct);

    res.json({ name, description, quantity });
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

export const getFacturasById = async (req, res) => {
  try {
    const pool = await getConnection();

    const result = await pool
      .request()
      .input("id", req.params.id)
      .query(querys.getProducById);
    return res.json(result.recordset[0]);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

export const deleteFacturasById = async (req, res) => {
  try {
    const pool = await getConnection();

    const result = await pool
      .request()
      .input("id", req.params.id)
      .query(querys.deleteProduct);

    if (result.rowsAffected[0] === 0) return res.sendStatus(404);

    return res.sendStatus(204);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

