import React, { useEffect, useRef } from "react";

import styles from "./DateInput.module.css";

const DateInput = ({ label, ...props }) => {
  const inputRef = useRef(null);
  const inputId = `${label.toLowerCase()}-input`;
  const hasErrors = !!props.errors;

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.setCustomValidity(props.errors ? props.errors : "");
    }
  }, [props.errors]);

  return (
    <div className={styles.inputContainer}>
      <label className={styles.inputLabel} htmlFor={inputId}>
        {label.toUpperCase()}
      </label>
      <input
        ref={inputRef}
        id={inputId}
        type="text"
        inputMode="numeric"
        pattern="\d*"
        className={styles.inputField}
        aria-invalid={hasErrors}
        {...props}
      />
      <p className={styles.error}>{props.errors}</p>
    </div>
  );
};

export default DateInput;
