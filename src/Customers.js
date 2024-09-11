const pool = require("./config/db");

async function getCustomers() {
  const connection = await pool.getConnection();
  try {
    const [rows, _fields] = await connection.execute("SELECT * FROM customers");
    return rows;
  } catch (error) {
    throw error;
  } finally {
    connection.release();
  }
}

async function verifyId(id) {
  const connection = await pool.getConnection();
  try {
    const [myId] = await connection.execute(
      "SELECT * FROM customers where id = ?",
      [id]
    );
    return myId.length
  } catch (error) {
    throw error
  }
}

async function addCustomer(name, address, email, phone) {
  const connection = await pool.getConnection();
  try {
    const [results] = await connection.execute(
      "INSERT INTO customers(name, address, email, phone) VALUES (?, ?, ?, ?)",
      [name, address, email, phone]
    );
    return results.insertId;
  } catch (error) {
    throw error;
  } finally {
    connection.release();
  }
}

async function editCustomer(id, name, address, email, phone) {
  const connection = await pool.getConnection();
  try {
    const [results] = await connection.execute(
      "update customers set name = ?, address = ?, email = ?, phone = ? where id = ?",
      [name, address, email, phone, id]
    );
    return results.affectedRows;
  } catch (error) {
    throw error;
  } finally {
    connection.release();
  }
}

async function dropCustomer(id) {
  const connection = await pool.getConnection();
  try {
    const [results] = await connection.execute(
      "delete from customers where id = ?",
      [id]
    );
    return results.affectedRows;
  } catch (error) {
    throw error;
  } finally {
    connection.release();
  }
}

module.exports = {
  getCustomers,
  addCustomer,
  editCustomer,
  dropCustomer,
  verifyId,
};
