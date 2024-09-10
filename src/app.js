const customer = require("./Customers");
const product = require("./Products");
const order = require("./PurchaseOrders");
const payment = require("./Payments");
const readline = require("readline-sync");
const ask = require("./questions");

async function main() {
  try {
    let option = await ask.manage();
    while (option !== 0) {
      switch (option) {
        case 1:
          let choice1 = await ask.customer();
          while (choice1 !== 0) {
            switch (choice1) {
              case 1:
                const result = await customer.getCustomers();
                console.table(result);
                break;
              case 2:
                const newCustomer = await ask.askCustomer();
                await customer.addCustomer(
                  newCustomer.name,
                  newCustomer.address,
                  newCustomer.email,
                  newCustomer.phone
                );
                console.log("Customer successfully added");
                break;
              case 3:
                const idEdit = readline.questionInt(
                  "Enter the id you want to update : "
                );
                const editCustomer = await ask.askCustomer();
                await customer.editCustomer(
                  idEdit,
                  editCustomer.name,
                  editCustomer.address,
                  editCustomer.email,
                  editCustomer.phone
                );
                console.log("Customer successfully updated");
                break;
              case 4:
                const idDrop = readline.questionInt(
                  "Enter the id you want to delete : "
                );
                await customer.dropCustomer(idDrop);
                console.log("Customer was deleted");
                break;
              case 5:
                process.exit();
              default:
                console.log("Invalid choice.");
                break;
            }
            choice1 = await ask.customer();
          }
          break;
        case 2:
          let choice2 = await ask.product();
          while (choice2 !== 0) {
            switch (choice2) {
              case 1:
                const result = await product.getProducts();
                console.table(result);
                break;
              case 2:
                const newProduct = await ask.askProduct();
                await product.addProduct(
                  newProduct.name,
                  newProduct.description,
                  newProduct.price,
                  newProduct.stock,
                  newProduct.category,
                  newProduct.barcode,
                  newProduct.status
                );
                console.log("Product successfully added");
                break;
              case 3:
                const idEdit = readline.questionInt(
                  "Enter the id you want to update : "
                );
                const editProduct = await ask.askProduct();
                await product.editProduct(
                  idEdit,
                  editProduct.name,
                  editProduct.description,
                  editProduct.price,
                  editProduct.stock,
                  editProduct.category,
                  editProduct.barcode,
                  editProduct.status
                );
                console.log("Product successfully updated");
                break;
              case 4:
                const idDrop = readline.questionInt(
                  "Enter the id you want to delete : "
                );
                await product.dropProduct(idDrop);
                console.log("Product was deleted");
                break;
              case 5:
                process.exit(0);
              default:
                console.log("Invalid choice.");
                break;
            }
            choice2 = await ask.product();
          }
          break;
        case 3:
          let choice3 = await ask.order();
          while (choice3 !== 0) {
            switch (choice3) {
              case 1:
                const result = await order.getOrders();
                console.table(result);
                break;
              case 2:
                const newOrder = await ask.askOrder();
                await order.addOrder(
                  newOrder.date,
                  newOrder.customer_id,
                  newOrder.delivery_address,
                  newOrder.track_number,
                  newOrder.status
                );
                console.log("Order successfully added");
                break;
              case 3:
                const idEdit = readline.questionInt(
                  "Enter the id you want to update : "
                );
                const editOrder = await ask.askOrder();
                await order.editOrder(
                  idEdit,
                  editOrder.date,
                  editOrder.customer_id,
                  editOrder.delivery_address,
                  editOrder.track_number,
                  editOrder.status
                );
                console.log("Order successfully updated");
                break;
              case 4:
                const idDrop = readline.questionInt(
                  "Enter the id you want to delete : "
                );
                await order.dropOrder(idDrop);
                console.log("Order was deleted");
                break;
              case 5:
                process.exit(0);
              default:
                console.log("Invalid choice.");
                break;
            }
            choice3 = await ask.order();
          }
          break;
        case 4:
          let choice4 = await ask.payment();
          while (choice4 !== 0) {
            switch (choice4) {
              case 1:
                const result = await payment.getPayments();
                console.table(result);
                break;
              case 2:
                const newPayment = await ask.askPayment();
                await payment.addPayment(
                  newPayment.order_id,
                  newPayment.date,
                  newPayment.amount,
                  newPayment.payment_method
                );
                console.log("Payment successfully added");
                break;
              case 3:
                const idEdit = readline.questionInt(
                  "Enter the id you want to update : "
                );
                const editPayment = await ask.askPayment();
                await payment.editPayment(
                  idEdit,
                  editPayment.order_id,
                  editPayment.date,
                  editPayment.amount,
                  editPayment.payment_method
                );
                console.log("Payment successfully updated");
                break;
              case 4:
                const idDrop = readline.questionInt(
                  "Enter the id you want to delete : "
                );
                await payment.dropPayment(idDrop);
                console.log("Payment was deleted");
                break;
              case 5:
                process.exit(0);
              default:
                console.log("Invalid choice.");
                break;
            }
            choice4 = await ask.payment();
          }
          break;
        case 5:
          process.exit(0);
        default:
          console.log("Please choose a valid option!");
          break;
      }
      option = await ask.manage();
    }
  } catch (error) {
    console.log(error.message);
  }
}

main();
