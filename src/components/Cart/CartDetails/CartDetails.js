import React, { useContext, useState } from "react";
import Backdrop from "../../../components/Meals/UI/Backdrop/Backdrop";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import classes from "./CartDetails.module.css";
import CartContext from "../../../store/cart-context";
import Meal from "../../Meals/Meal/Meal";
import Confirm from "../../../components/Meals/UI/Confirm/Confirm";

const CartDetails = () => {
  const ctx = useContext(CartContext);

  const [showConfirm, setShowConfirm] = useState(false);

  const showConfirmHandler = () => {
    setShowConfirm(true);
  };

  const cancelHandler = (e) => {
    e.stopPropagation();
    setShowConfirm(false);
  };

  const okHandler = () => {
    ctx.clearCart();
  };

  return (
    <Backdrop onClick={cancelHandler}>
      {showConfirm && (
        <Confirm
          onCancel={cancelHandler}
          onOk={okHandler}
          confirmText={"Confirm to clear cart?"}
        />
      )}
      <div className={classes.CartDetails} onClick={(e) => e.stopPropagation()}>
        <header className={classes.Header}>
          <h2 className={classes.Title}>cart detail</h2>
          <div onClick={showConfirmHandler} className={classes.Clear}>
            <FontAwesomeIcon icon={faTrash} />
            <span>clear cart</span>
          </div>
        </header>
        <div className={classes.MealList}>
          {ctx.items.map((item) => (
            <Meal noDesc key={item.id} meal={item} />
          ))}
        </div>
      </div>
    </Backdrop>
  );
};
export default CartDetails;
