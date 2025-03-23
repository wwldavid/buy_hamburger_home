import React from "react";
import Backdrop from "../Backdrop/Backdrop";
import classes from "./Confirm.module.css";

const Confirm = (props) => {
  return (
    <Backdrop className={classes.ConfirmOuter}>
      <div className={classes.Confirm}>
        <p className={classes.ConfirmText}>{props.confirmText}</p>
        <div>
          <button
            onClick={(e) => {
              props.onCancel(e);
            }}
            className={classes.Cancel}
          >
            cancel
          </button>
          <button
            onClick={() => {
              props.onOk();
            }}
            className={classes.Ok}
          >
            confirm
          </button>
        </div>
      </div>
    </Backdrop>
  );
};

export default Confirm;
