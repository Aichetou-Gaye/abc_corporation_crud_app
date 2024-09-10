const pool = require("./config/db");

async function getOrders() {
  const connection = await pool.getConnection();
  try {
    const [rows, _fields] = await connection.execute("SELECT * FROM purchase_orders");
    return rows;
  } catch (error) {
    throw error;
  } finally {
    connection.release();
  }
}

// async function verifyId(id) {
//   const connection = await pool.getConnection();
//   try {
//     const myId = await connection.execute(
//       "SELECT id FROM purchase_orders where id = ?",
//       [id]
//     );
//     return myId
//   } catch (error) {
//     console.log(error.message)
//   }
// }

async function addOrder(
  date,
  customer_id,
  delivery_address,
  track_number,
  status
) {
  const connection = await pool.getConnection();
  try {
    const [results] = await connection.execute(
      "INSERT INTO purchase_orders(date, customer_id, delivery_address, track_number, status) VALUES (?, ?, ?, ?, ?)",
      [date, customer_id, delivery_address, track_number, status]
    );
    return results.insertId;
  } catch (error) {
    throw error;
  } finally {
    connection.release();
  }
}

async function editOrder(
  id,
  date,
  customer_id,
  delivery_address,
  track_number,
  status
) {
  const connection = await pool.getConnection();
  try {
    const [results] = await connection.execute(
      "update purchase_orders set date = ?, customer_id = ?, delivery_address = ?, track_number = ?, status = ? where id = ?",
      [date, customer_id, delivery_address, track_number, status, id]
    );
    return results.affectedRows;
  } catch (error) {
    throw error;
  } finally {
    connection.release();
  }
}

async function dropOrder(id) {
  const connection = await pool.getConnection();
  try {
    const [results] = await connection.execute(
      "delete from purchase_orders where id = ?",
      [id]
    );
    return results.affectedRows;
  } catch (error) {
    throw error;
  } finally {
    connection.release();
  }
}

async function getOrderDetails() {
  const connection = await pool.getConnection();
  try {
    const [rows, _fields] = await connection.execute("SELECT * FROM purchase_orders");
    return rows;
  } catch (error) {
    throw error;
  } finally {
    connection.release();
  }
}

async function addOrderDetail(
  product_id,
  quantity,
  price
) {
  const connection = await pool.getConnection();
  try {
    const [results] = await connection.execute(
      "INSERT INTO order_details(product_id, quantity, price) VALUES (?, ?, ?)",
      [product_id, quantity, price]
    );
    return results.insertId;
  } catch (error) {
    throw error;
  } finally {
    connection.release();
  }
}

async function editOrderDetail(
  id,
  product_id,
  quantity,
  price
) {
  const connection = await pool.getConnection();
  try {
    const [results] = await connection.execute(
      "update order_details set product_id = ?, quantity = ?, price = ? where id = ?",
      [product_id, quantity, price, id]
    );
    return results.affectedRows;
  } catch (error) {
    throw error;
  } finally {
    connection.release();
  }
}

async function dropOrderDetail(id) {
  const connection = await pool.getConnection();
  try {
    const [results] = await connection.execute(
      "delete from order_details where id = ?",
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
  getOrders,
  addOrder,
  editOrder,
  dropOrder,
  getOrderDetails,
  addOrderDetail,
  editOrderDetail,
  dropOrderDetail,
};
