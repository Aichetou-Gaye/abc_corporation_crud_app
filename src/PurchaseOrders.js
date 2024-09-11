const pool = require("./config/db");

async function getOrders() {
  const connection = await pool.getConnection();
  try {
    const [rows, _fields] = await connection.execute(
      "SELECT * FROM purchase_orders"
    );
    return rows;
  } catch (error) {
    throw error;
  } finally {
    connection.release();
  }
}
async function getOrder(id) {
  const connection = await pool.getConnection();
  try {
    const [rows, _fields] = await connection.execute(
      "SELECT p.customer_id, p.date, p.delivery_address, p.track_number, p.status, d.product_id, d.quantity, d.price FROM purchase_orders AS p, order_details AS d WHERE p.id = d.order_id AND p.id = ?",
      [id]
    );
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
      "SELECT * FROM purchase_orders where id = ?",
      [id]
    );
    return myId.length
  } catch (error) {
    throw error
  }
}

async function addOrder(order, orderDetails) {
  const connection = await pool.getConnection();
  try {
    const [results] = await connection.execute(
      "INSERT INTO purchase_orders(date, customer_id, delivery_address, track_number, status) VALUES (?, ?, ?, ?, ?)",
      [
        order.date,
        order.customer_id,
        order.delivery_address,
        order.track_number,
        order.status,
      ]
    );
    let newOrder = Object.assign({ id: results.insertId }, order);
    for (let item in orderDetails) {
      let detail = orderDetails[item]
      const [returned] = await connection.execute(
        "INSERT INTO order_details(order_id, product_id, quantity, price) VALUES (?, ?, ?, ?)",
        [newOrder.id, detail.product_id, detail.quantity, detail.price]
      );
    }
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

async function verifyDetailId(id) {
  const connection = await pool.getConnection();
  try {
    const [myId] = await connection.execute(
      "SELECT * FROM order_details where id = ?",
      [id]
    );
    return myId.length
  } catch (error) {
    throw error
  }
}

async function editOrderDetail(id, order_id, product_id, quantity, price) {
  const connection = await pool.getConnection();
  try {
    const [results] = await connection.execute(
      "update order_details set order_id = ?, product_id = ?, quantity = ?, price = ? where id = ?",
      [order_id, product_id, quantity, price, id]
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
  editOrderDetail,
  getOrder,
  verifyId,
  verifyDetailId,
};
