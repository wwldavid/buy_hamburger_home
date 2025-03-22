import React from "react";
import classes from "./Counter.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";

const Counter = (props) => {
  const addButtonHandler = () => {
    props.onAdd(props.meal);
  };
  return (
    <div className={classes.counter}>
      {props.meal.amount && props.meal.amount !== 0 ? (
        <>
          <button className={classes.sub}>
            <FontAwesomeIcon icon={faMinus} />
          </button>
          <span className={classes.count}>{props.meal.amount}</span>
        </>
      ) : null}

      <button onClick={addButtonHandler} className={classes.add}>
        <FontAwesomeIcon icon={faPlus} />
      </button>
    </div>
  );
};
export default Counter;
