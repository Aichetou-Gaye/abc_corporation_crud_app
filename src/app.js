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
          try {
            let choice1 = await ask.customer();
            while (choice1 !== 0) {
              switch (choice1) {
                case 1:
                  try {
                    const result = await customer.getCustomers();
                    console.log(result);
                  } catch (e) {
                    console.error(e.message);
                  }
                  break;
                case 2:
                  try {
                    const newCustomer = await ask.askCustomer();
                    await customer.addCustomer(
                      newCustomer.name,
                      newCustomer.address,
                      newCustomer.email,
                      newCustomer.phone
                    );
                    console.log("Customer successfully added");
                  } catch (e) {
                    console.error(e.sqlMessage);
                  }
                  break;
                case 3:
                  try {
                    let editCustomer = await ask.askEditCustomer();
                    let iC = 0;
                    while (editCustomer === undefined && iC < 2) {
                      iC++;
                      editCustomer = await ask.askEditCustomer();
                    }
                    if (editCustomer === undefined) {
                      throw new Error(
                        "Please, check the list to verify the correct ID"
                      );
                    } else {
                      await customer.editCustomer(
                        editCustomer.id,
                        editCustomer.name,
                        editCustomer.address,
                        editCustomer.email,
                        editCustomer.phone
                      );
                      console.log("Customer successfully updated");
                    }
                  } catch (e) {
                    console.error(e.message);
                  }
                  break;
                case 4:
                  try {
                    let idDrop = readline.questionInt(
                      "Enter the id you want to delete : "
                    );
                    let check = await customer.verifyId(idDrop);
                    let count = 0;
                    while (check === 0 && count < 2) {
                      count++;
                      console.log("This ID isn't exist in the database!");
                      console.log("");
                      idDrop = readline.questionInt(
                        "Enter the id you want to delete : "
                      );
                      check = await customer.verifyId(idDrop);
                    }
                    if (check === 0) {
                      throw new Error(
                        "Please, check the list to verify the correct ID"
                      );
                    } else {
                      await customer.dropCustomer(idDrop);
                      console.log("Customer was deleted");
                    }
                  } catch (e) {
                    console.error(e.message);
                  }
                  break;
                case 5:
                  await main();
                default:
                  console.log("Invalid choice.");
                  break;
              }
              choice1 = await ask.customer();
            }
          } catch (e) {
            console.error(e.message);
          }
          break;
        case 2:
          try {
            let choice2 = await ask.product();
            while (choice2 !== 0) {
              switch (choice2) {
                case 1:
                  try {
                    const result = await product.getProducts();
                    console.log(result);
                  } catch (e) {
                    console.error(e.message);
                  }
                  break;
                case 2:
                  try {
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
                  } catch (e) {
                    console.error(e.sqlMessage);
                  }
                  break;
                case 3:
                  try {
                    let editProduct = await ask.askEditProduct();
                    let iC = 0;
                    while (editProduct === undefined && iC < 2) {
                      iC++;
                      editProduct = await ask.askEditProduct();
                    }
                    if (editProduct === undefined) {
                      throw new Error(
                        "Please, check the list to verify the correct ID"
                      );
                    } else {
                      await product.editProduct(
                        editProduct.id,
                        editProduct.name,
                        editProduct.description,
                        editProduct.price,
                        editProduct.stock,
                        editProduct.category,
                        editProduct.barcode,
                        editProduct.status
                      );
                      console.log("Product successfully updated");
                    }
                  } catch (e) {
                    console.error(e.message);
                  }
                  break;
                case 4:
                  try {
                    let idDrop = readline.questionInt(
                      "Enter the id you want to delete : "
                    );
                    let check = await product.verifyId(idDrop);
                    let count = 0;
                    while (check === 0 && count < 2) {
                      count++;
                      console.log("This ID isn't exist in the database!");
                      console.log("");
                      idDrop = readline.questionInt(
                        "Enter the id you want to delete : "
                      );
                      check = await product.verifyId(idDrop);
                    }
                    if (check === 0) {
                      throw new Error(
                        "Please, check the list to verify the correct ID"
                      );
                    } else {
                      await product.dropProduct(idDrop);
                      console.log("Product was deleted");
                    }
                  } catch (e) {
                    console.error(e.message);
                  }
                  break;
                case 5:
                  await main();
                default:
                  console.log("Invalid choice.");
                  break;
              }
              choice2 = await ask.product();
            }
          } catch (e) {
            console.error(e.message);
          }
          break;
        case 3:
          try {
            let choice3 = await ask.order();
            while (choice3 !== 0) {
              switch (choice3) {
                case 1:
                  try {
                    const result = await order.getOrders();
                    console.log(result);
                  } catch (e) {
                    console.error(e.message);
                  }
                  break;
                case 2:
                  try {
                    let newOrder = await ask.askOrder();
                    if (newOrder !== undefined) {
                      const getTab = {
                        date: newOrder.date,
                        customer_id: newOrder.customer_id,
                        delivery_address: newOrder.delivery_address,
                        track_number: newOrder.track_number,
                        status: newOrder.status,
                      };
                      const check = await customer.verifyId(
                        newOrder.customer_id
                      );
                      if (check === 0) {
                        throw new Error(
                          "This customer id is not exists in the database"
                        );
                      }
                      let manageDetail = await ask.detail();
                      let tabDetail = [];

                      while (manageDetail === 21) {
                        try {
                          const newDetail = await ask.askOrderDetail();
                          let addDetail = {
                            product_id: newDetail.product_id,
                            quantity: newDetail.quantity,
                            price: newDetail.price,
                          };
                          const check = await product.verifyId(
                            newDetail.product_id
                          );
                          if (check === 0) {
                            throw new Error(
                              "Product id is not exists in database"
                            );
                          } else {
                            tabDetail.push(addDetail);
                          }
                          manageDetail = await ask.detail();
                        } catch (e) {
                          console.log(e.message);
                        }
                      }
                      if (manageDetail === 22) {
                        try {
                          if (tabDetail.length === 0) {
                            throw new Error("Order must have details");
                          } else {
                            await order.addOrder(getTab, tabDetail);
                            console.log("Order was successfully added");
                          }
                        } catch (e) {
                          console.error(e.message);
                        }
                      }
                    }
                  } catch (e) {
                    console.error(e.message);
                  }
                  break;
                case 3:
                  try {
                    let editOrder = await ask.askEditOrder();
                    if (editOrder !== undefined) {
                      const getTab = {
                        id: editOrder.id,
                        date: editOrder.date,
                        customer_id: editOrder.customer_id,
                        delivery_address: editOrder.delivery_address,
                        track_number: editOrder.track_number,
                        status: editOrder.status,
                      };
                      const check = await customer.verifyId(
                        editOrder.customer_id
                      );
                      if (check === 0) {
                        throw new Error(
                          "This customer id is not exists in the database"
                        );
                      }
                      let manageDetail = await ask.detail();
                      let tabDetail = [];
                      while (manageDetail === 21) {
                        try {
                          const newDetail = await ask.askEditOrderDetail();
                          let addDetail = {
                            product_id: newDetail.product_id,
                            quantity: newDetail.quantity,
                            price: newDetail.price,
                          };
                          const check = await product.verifyId(
                            newDetail.product_id
                          );
                          if (check === 0) {
                            throw new Error(
                              "Product id is not exists in database"
                            );
                          } else {
                            tabDetail.push(addDetail);
                          }
                          manageDetail = await ask.detail();
                        } catch (e) {
                          console.log(e.message);
                        }
                      }
                      if (manageDetail === 22) {
                        try {
                          if (tabDetail.length === 0) {
                            throw new Error("Order must have details");
                          } else {
                            await order.editOrder(getTab, tabDetail);
                            console.log("Order was successfully updated");
                          }
                        } catch (e) {
                          console.error(e.message);
                        }
                      }
                    }
                  } catch (e) {
                    console.error(e.message);
                  }
                  break;
                case 4:
                  try {
                    let idDrop = readline.questionInt(
                      "Enter the id you want to delete : "
                    );
                    let check = await order.verifyId(idDrop);
                    let count = 0;
                    while (check === 0 && count < 2) {
                      count++;
                      console.log("This ID isn't exist in the database!");
                      console.log("");
                      idDrop = readline.questionInt(
                        "Enter the id you want to delete : "
                      );
                      check = await order.verifyId(idDrop);
                    }
                    if (check === 0) {
                      throw new Error(
                        "Please, check the list to verify the correct ID"
                      );
                    } else {
                      await order.dropOrder(idDrop);
                      console.log("Order was deleted");
                    }
                  } catch (e) {
                    console.error(e.message);
                  }
                  break;
                case 5:
                  try {
                    const showId = readline.questionInt(
                      "Enter the id of the order, if you don't remember Please, check the list first : "
                    );
                    let check = await order.verifyId(showId);
                    if (check === 0) {
                      throw new Error("This ID isn't exist in the database!");
                    } else {
                      const resultDetail = await order.getOrder(showId);
                      console.log(resultDetail);
                    }
                  } catch (e) {
                    console.error(e.message);
                  }
                  break;
                case 6:
                  await main();
                default:
                  console.log("Invalid choice.");
                  break;
              }
              choice3 = await ask.order();
            }
          } catch (e) {
            console.error(e.message);
          }
          break;
        case 4:
          try {
            let choice4 = await ask.payment();
            while (choice4 !== 0) {
              switch (choice4) {
                case 1:
                  try {
                    const result = await payment.getPayments();
                    console.log(result);
                  } catch (e) {
                    console.error(e.message);
                  }
                  break;
                case 2:
                  try {
                    const newPayment = await ask.askPayment();
                    await payment.addPayment(
                      newPayment.order_id,
                      newPayment.date,
                      newPayment.amount,
                      newPayment.payment_method
                    );
                    console.log("Payment successfully added");
                  } catch (e) {
                    console.error(e.sqlMessage);
                  }
                  break;
                case 3:
                  try {
                    let editPayment = await ask.askEditPayment();
                    let iC = 0;
                    while (editPayment === undefined && iC < 2) {
                      iC++;
                      editPayment = await ask.askEditOrderDetail();
                    }
                    if (editPayment === undefined) {
                      throw new Error(
                        "Please, check the list to verify the correct ID"
                      );
                    } else {
                      await payment.editPayment(
                        editPayment.id,
                        editPayment.order_id,
                        editPayment.date,
                        editPayment.amount,
                        editPayment.payment_method
                      );
                      console.log("Payment successfully updated");
                    }
                  } catch (e) {
                    console.error(e.message);
                  }
                  break;
                case 4:
                  try {
                    let idDrop = readline.questionInt(
                      "Enter the id you want to delete : "
                    );
                    let check = await payment.verifyId(idDrop);
                    let count = 0;
                    while (check === 0 && count < 2) {
                      count++;
                      console.log("This ID isn't exist in the database!");
                      console.log("");
                      idDrop = readline.questionInt(
                        "Enter the id you want to delete : "
                      );
                      check = await payment.verifyId(idDrop);
                    }
                    if (check === 0) {
                      throw new Error(
                        "Please, check the list to verify the correct ID"
                      );
                    } else {
                      await payment.dropPayment(idDrop);
                      console.log("Payment was deleted");
                    }
                  } catch (e) {
                    console.error(e.message);
                  }
                  break;
                case 5:
                  await main();
                default:
                  console.log("Invalid choice.");
                  break;
              }
              choice4 = await ask.payment();
            }
          } catch (e) {
            console.error(e.message);
          }
          break;
        case 5:
          console.log("Bye");
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
