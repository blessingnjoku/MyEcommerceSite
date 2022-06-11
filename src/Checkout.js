import React from "react";
import "./Checkout.css";

function Checkout() {
  return (
    <div className="checkout">
      Checkout
      <div className="checkout-left">
        <img
          className="img-ad"
          src="https://unsplash.com/photos/eD1RNYzzUxc/download?ixid=MnwxMjA3fDB8MXxzZWFyY2h8Nnx8c2hvcHBpbmd8ZW58MHx8fHwxNjU0ODE3NTUy&force=true"
          alt="ad"
        />
        <div>
          <h2 className="checkout_title">your shopping Cart</h2>
        </div>
      </div>
    </div>
  );
}

export default Checkout;
