import React, { useContext } from "react";
import Backdrop from "../../../components/Meals/UI/Backdrop/Backdrop";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import classes from "./CartDetails.module.css";
import CartContext from "../../../store/cart-context";
import Meal from "../../Meals/Meal/Meal";

const CartDetails = () => {
  const ctx = useContext(CartContext);

  return (
    <Backdrop>
      <div className={classes.CartDetails} onClick={(e) => e.stopPropagation()}>
        <header className={classes.Header}>
          <h2 className={classes.Title}>cart detail</h2>
          <div className={classes.Clear}>
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
