const readline = require("readline-sync");
const cust = require("./Customers");
const prod = require("./Products");
const ord = require("./PurchaseOrders");
const pay = require("./Payments");

async function manage() {
  console.log("");
  console.log("Hey, welcome to the order management app");
  console.log("");
  console.log("1. Manage customers");
  console.log("2. Manage products");
  console.log("3. Manage orders");
  console.log("4. Manage payments");
  console.log("5. Exit");
  console.log("");

  const option = readline.questionInt("What do you want to manage : ");
  console.log("");
  return option;
}
/**CUSTOMERS */
async function customer() {
  console.log("");
  console.log("Choose an option");
  console.log("1. List customers");
  console.log("2. Add a new customer");
  console.log("3. Update customer");
  console.log("4. Delete a customer");
  console.log("5. Exit");
  console.log("");

  const choice = readline.questionInt("Your choice : ");
  console.log("");
  return choice;
}

async function askCustomer() {
  try {
    console.log("To add a new customer, fields here :");
    const name = readline.question("Enter the name : ");
    const address = readline.question("Enter the address : ");
    const email = readline.question("Enter the email address : ");
    const phone = readline.question("Enter the phone number : ");
    console.log("");
    if (!name || !address || !email || !phone) {
      throw new Error("Please, fill all columns");
    }
    return { name, address, email, phone };
  } catch (e) {
    console.log(e.message);
  }
}

async function askEditCustomer() {
  try {
    console.log("Complete here to modify customer data :");
    const id = readline.questionInt("Enter the id you want to update : ");
    const check = await cust.verifyId(id);
    if (check === 0) {
      throw new Error("The ID isn't exist in the database!");
    }
    const name = readline.question("Enter the name : ");
    const address = readline.question("Enter the address : ");
    const email = readline.question("Enter the email address : ");
    const phone = readline.question("Enter the phone number : ");
    console.log("");
    if (!name || !address || !email || !phone) {
      throw new Error("Please, fill all columns");
    }

    return { id, name, address, email, phone };
  } catch (e) {
    console.log(e.message);
  }
}

/**PRODUCTS */
async function product() {
  console.log("");
  console.log("Choose an option");
  console.log("1. List products");
  console.log("2. Add a new product");
  console.log("3. Update product");
  console.log("4. Delete a product");
  console.log("5. Exit");
  console.log("");

  const choice = readline.questionInt("Your choice : ");
  console.log("");
  return choice;
}

async function askProduct() {
  try {
    console.log("To add a new product, fields here :");

    const name = readline.question("Enter the name : ");
    const description = readline.question("Enter the description : ");
    const price = readline.question("Enter the price : ");
    const stock = readline.questionInt("Enter the product stock : ");
    const category = readline.question("Enter the category : ");
    const barcode = readline.question("Enter the barcode : ");
    const status = readline.question("Enter the status : ");
    console.log("");

    if (
      !name ||
      !description ||
      !price ||
      !stock ||
      !category ||
      !barcode ||
      !status
    ) {
      throw new Error("Please, fill all columns");
    }

    return { name, description, price, stock, category, barcode, status };
  } catch (e) {
    console.log(e.message);
  }
}

async function askEditProduct() {
  try {
    console.log("Complete here to modify product data :");
    const id = readline.questionInt("Enter the id you want to update : ");
    const check = await prod.verifyId(id);
    if (check === 0) {
      throw new Error("The ID isn't exist in the database!");
    }
    const name = readline.question("Enter the name : ");
    const description = readline.question("Enter the description : ");
    const price = readline.question("Enter the price : ");
    const stock = readline.questionInt("Enter the product stock : ");
    const category = readline.question("Enter the category : ");
    const barcode = readline.question("Enter the barcode : ");
    const status = readline.question("Enter the status : ");
    console.log("");
    if (!name || !description || !price || !stock || !category || !barcode || !status) {
      throw new Error("Please, fill all columns");
    }

    return { id, name, description, price, stock, category, barcode, status };
  } catch (e) {
    console.log(e.message);
  }
}

/**ORDERS */
async function order() {
  console.log("");
  console.log("Choose an option");
  console.log("1. List orders");
  console.log("2. Add a new order");
  console.log("3. Update order");
  console.log("4. Delete a order");
  console.log("5. Manage details");
  console.log("6. Show an order");
  console.log("7. Exit");
  console.log("");
  const choice = readline.questionInt("Your choice : ");
  console.log("");
  return choice;
}

async function askOrder() {
  try {
    console.log("To add a new order, fields here :");
    const date = readline.question("Enter the date : ");
    const customer_id = readline.questionInt("Enter the customer id : ");
    const delivery_address = readline.question("Enter the delivery address : ");
    const track_number = readline.question("Enter the track number : ");
    const status = readline.question("Enter the status : ");
    console.log("Enter the details for this order :");
    console.log("");

    if (
      !date ||
      !customer_id ||
      !delivery_address ||
      !track_number ||
      !status
    ) {
      throw new Error("Please, fill all columns");
    }

    return { date, customer_id, delivery_address, track_number, status };
  } catch (e) {
    console.log(e.message);
  }
}

async function askEditOrder() {
  try {
    console.log("Complete here to modify order data :");
    const id = readline.questionInt("Enter the id you want to update : ");
    const check = await ord.verifyId(id);
    if (check === 0) {
      throw new Error("The ID isn't exist in the database!");
    }
    const date = readline.question("Enter the date : ");
    const customer_id = readline.questionInt("Enter the customer id : ");
    const delivery_address = readline.question("Enter the delivery address : ");
    const track_number = readline.question("Enter the track number : ");
    const status = readline.question("Enter the status : ");
    console.log("Also edit details for this order :");
    console.log("");

    if (
      !date ||
      !customer_id ||
      !delivery_address ||
      !track_number ||
      !status
    ) {
      throw new Error("Please, fill all columns");
    }

    return { id, date, customer_id, delivery_address, track_number, status };
  } catch (e) {
    console.log(e.message);
  }
}

/**ORDER DETAILS */
async function detail() {
  console.log("");
  console.log("Choose an option");
  console.log("21. Add new detail");
  console.log("22. Save");
  console.log("23. Exit");
  console.log("");
  const choice = readline.questionInt("Your choice : ");
  console.log("");
  return choice;
}

async function askOrderDetail() {
  try {
    console.log("To add a new detail, fields here :");
    const product_id = readline.questionInt("Enter the product id : ");
    const quantity = readline.question("Enter the quantity: ");
    const price = readline.question("Enter the price : ");
    console.log("");
    if (!product_id || !quantity || !price) {
      throw new Error("Please, fill all columns");
    }

    return { product_id, quantity, price };
  } catch (e) {
    console.log(e.message);
  }
}

async function askEditOrderDetail() {
  try {
    const product_id = readline.questionInt("Enter the product id : ");
    const quantity = readline.question("Enter the quantity: ");
    const price = readline.question("Enter the price : ");
    console.log("");
    if (!product_id || !quantity || !price) {
      throw new Error("Please, fill all columns");
    }
    return { product_id, quantity, price };
  } catch (e) {
    console.log(e.message);
  }
}

/**PAYMENTS */
async function payment() {
  console.log("");
  console.log("Choose an option");
  console.log("1. List payments");
  console.log("2. Add a new payment");
  console.log("3. Update payment");
  console.log("4. Delete a payment");
  console.log("5. Exit");
  console.log("");

  const choice = readline.questionInt("Your choice : ");
  console.log("");
  return choice;
}

async function askPayment() {
  try {
    console.log("To add a new payment, fields here :");
    const order_id = readline.questionInt("Enter the order id : ");
    const date = readline.question("Enter the date of payment : ");
    const amount = readline.question("Enter the amount : ");
    const payment_method = readline.question("Enter the method payment: ");
    console.log("");
    if (!order_id || !date || !amount || !payment_method) {
      throw new Error("Please, fill all columns");
    }

    return { order_id, date, amount, payment_method };
  } catch (e) {
    console.log(e.message);
  }
}

async function askEditPayment() {
  try {
    console.log("Complete here to modify customer data :");
    const id = readline.questionInt("Enter the id you want to update : ");
    const check = await pay.verifyId(id);
    if (check === 0) {
      throw new Error("The ID isn't exist in the database!");
    }
    const order_id = readline.questionInt("Enter the order id : ");
    const date = readline.question("Enter the date of payment : ");
    const amount = readline.question("Enter the amount : ");
    const payment_method = readline.question("Enter the method payment: ");
    console.log("");
    if (!order_id || !date || !amount || !payment_method) {
      throw new Error("Please, fill all columns");
    }

    return { id, order_id, date, amount, payment_method };
  } catch (e) {
    console.log(e.message);
  }
}

module.exports = {
  manage,
  customer,
  askCustomer,
  product,
  askProduct,
  order,
  askOrder,
  payment,
  askPayment,
  askOrderDetail,
  detail,
  askEditCustomer,
  askEditProduct,
  askEditOrder,
  askEditOrderDetail,
  askEditPayment,
};
