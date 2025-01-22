import { OrderModel } from "../models/orderModels.js";

const CreateUserOrder = async (req, res) => {
  const { reference, checkOutFormData, userCartSummary, cartItems } = req.body;

  if (!reference) {
    return res
      .status(400)
      .send({ message: "please provide transaction reference" });
  }
  if (!checkOutFormData) {
    res.status(400).send({ message: "please provide customer details" });
  }
  if (!userCartSummary) {
    res.status(400).send({ message: "please cart summary is required" });
  }
  if (!cartItems) {
    res.status(400).send({ message: "please provide customer cart items " });
  }
  try {
    const result = await OrderModel.create({
      transaction_reference: {
        transaction: reference.transaction,
        status: reference.status,
        message: reference.message,
        trxref: reference.trxref,
      },
      customer_delivery_info: checkOutFormData,
      user_cart_summary: userCartSummary,
      cartItems: cartItems,
    });

    res
      .status(201)
      .send({ data: result, message: "order created successfully" });
  } catch (error) {
    res.status(400).send({ error, message: "sorry an error occured" });
  }
};
export { CreateUserOrder };
