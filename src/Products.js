const pool = require("./config/db");

async function getProducts() {
  const connection = await pool.getConnection();
  try {
    const [rows, _fields] = await connection.execute("SELECT * FROM products");
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
//       "SELECT id FROM products where id = ?",
//       [id]
//     );
//     return myId
//   } catch (error) {
//     console.log(error.message)
//   }
// }

async function addProduct(
  name,
  description,
  price,
  stock,
  category,
  barcode,
  status
) {
  const connection = await pool.getConnection();
  try {
    const [results] = await connection.execute(
      "INSERT INTO products(name, description, price, stock, category, barcode, status) VALUES (?, ?, ?, ?, ?, ?, ?)",
      [name, description, price, stock, category, barcode, status]
    );
    return results.insertId;
  } catch (error) {
    throw error;
  } finally {
    connection.release();
  }
}

async function editProduct(
  id,
  name,
  description,
  price,
  stock,
  category,
  barcode,
  status
) {
  const connection = await pool.getConnection();
  try {
    const [results] = await connection.execute(
      "update products set name = ?, description = ?, price = ?, stock = ?, category = ?, barcode = ?, status = ? where id = ?",
      [name, description, price, stock, category, barcode, status, id]
    );
    return results.affectedRows;
  } catch (error) {
    throw error;
  } finally {
    connection.release();
  }
}

async function dropProduct(id) {
  const connection = await pool.getConnection();
  try {
    const [results] = await connection.execute(
      "delete from products where id = ?",
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
  getProducts,
  addProduct,
  editProduct,
  dropProduct,
};
