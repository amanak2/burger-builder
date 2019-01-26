import React from "react";
import styles from "./Control.css";

const control = props => {
  return (
    <div className={styles.Control}>
      <div className={styles.Label}>{props.label}</div>
      <button
        onClick={props.remove}
        className={styles.Less}
        disabled={props.disabled}
      >
        Remove
      </button>
      <button onClick={props.added} className={styles.More}>
        Add
      </button>
    </div>
  );
};

export default control;
