import React from "react";
import CheckoutForm from "../components/checkout/CheckoutForm";

const Checkout = () => {
  return (
    <div className="px-4 max-w-[500px] mx-auto py-24 flex flex-col gap-4">
      <h1 className="text-4xl text-green-800">Complete your order</h1>
      <p className="text-lg font-light text-gray-500">
        please enter your details below to complete your order
      </p>

      <CheckoutForm />
    </div>
  );
};

export default Checkout;
