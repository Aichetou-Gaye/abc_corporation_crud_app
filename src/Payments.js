const pool = require("./config/db");

async function getPayments() {
  const connection = await pool.getConnection();
  try {
    const [rows, _fields] = await connection.execute("SELECT * FROM payments");
    return rows;
  } catch (error) {
    throw error;
  } finally {
    connection.release();
  }
}

async function addPayment(
  order_id,
  date,
  amount,
  payment_method
) {
  const connection = await pool.getConnection();
  try {
    const [results] = await connection.execute(
      "INSERT INTO payments(order_id, date, amount, payment_method) VALUES (?, ?, ?, ?)",
      [order_id, date, amount, payment_method]
    );
    return results.insertId;
  } catch (error) {
    throw error;
  } finally {
    connection.release();
  }
}

async function editPayment(
  id,
  order_id,
  date,
  amount,
  payment_method
) {
  const connection = await pool.getConnection();
  try {
    const [results] = await connection.execute(
      "update payments set order_id = ?, date = ?, amount = ?, payment_method = ? where id = ?",
      [order_id, date, amount, payment_method, id]
    );
    return results.affectedRows;
  } catch (error) {
    throw error;
  } finally {
    connection.release();
  }
}

async function dropPayment(id) {
  const connection = await pool.getConnection();
  try {
    const [results] = await connection.execute(
      "delete from payments where id = ?",
      [id]
    );
    return results.affectedRows;
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
      "SELECT * FROM payments where id = ?",
      [id]
    );
    return myId.length
  } catch (error) {
    throw error
  }
}

module.exports = {
  getPayments,
  addPayment,
  editPayment,
  dropPayment,
  verifyId,
};
