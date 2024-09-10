const readline = require("readline-sync");

async function manage() {
  console.log("");
  console.log("Choose an option");
  console.log("1. Manage customers");
  console.log("2. Manage products");
  console.log("3. Manage orders");
  console.log("4. Manage payments");
  console.log("5. Exit");
  console.log("");

  const option = readline.questionInt("What do you want to manage : ");
  console.log("");
  console.log("");
  return option;
}
/**CUSTOMERS */
async function customer() {
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
  const name = readline.question("Enter the name : ");
  const address = readline.question("Enter the address : ");
  const email = readline.question("Enter the email address : ");
  const phone = readline.question("Enter the phone number : ");
  console.log("");

  return { name, address, email, phone };
}

/**PRODUCTS */
async function product() {
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
    const name = readline.question("Enter the name : ");
    const description = readline.question("Enter the description : ");
    const price = readline.question("Enter the price : ");
    const stock = readline.questionInt("Enter the product stock : ");
    const category = readline.question("Enter the category : ");
    const barcode = readline.question("Enter the barcode : ");
    const status = readline.question("Enter the status : ");
    console.log("");

    return { name, description, price, stock, category, barcode, status };
  } catch {
    console.error("Fill out correct values");
  }
}

/**ORDERS */
async function order() {
  console.log("Choose an option");
  console.log("1. List orders");
  console.log("2. Add a new order");
  console.log("3. Update order");
  console.log("4. Delete a order");
  console.log("5. Exit");
  console.log("");
  const choice = readline.questionInt("Your choice : ");
  console.log("");
  return choice;
}

async function askOrder() {
  const date = readline.question("Enter the date : ");
  const customer_id = readline.questionInt("Enter the customer id : ");
  const delivery_address = readline.question("Enter the delivery address : ");
  const track_number = readline.question("Enter the track number : ");
  const status = readline.question("Enter the status : ");
  console.log("");

  return { date, customer_id, delivery_address, track_number, status };
}

/**ORDER DETAILS */
async function askOrderDetail() {
  const product_id = readline.questionInt("Enter the product id : ");
  const quantity = readline.question("Enter the quantity: ");
  const price = readline.question("Enter the price : ");
  console.log("");

  return { product_id, quantity, price};
}

/**PAYMENTS */
async function payment() {
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
  const order_id = readline.questionInt("Enter the order id : ");
  const date = readline.question("Enter the date of payment : ");
  const amount = readline.question("Enter the amount : ");
  const payment_method = readline.question("Enter the method payment: ");
  console.log("");

  return { order_id, date, amount, payment_method };
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
};
