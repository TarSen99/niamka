import React, { useRef } from "react";

import styles from "@/components/general/Input/Input.module.scss";

const handlePlaceholderClick = (ref) => {
  ref.current.focus();
};

const Input = ({
  type = "text",
  mainColorPlaceholder = false,
  rounded,
  placeholder,
  placeholderText = "",
  center = false,
  right = false,
  handleOnInput = () => {},
  value = '',
  ...rest
}) => {
  const inputRef = useRef();

  const classNameInput = `${styles.input__element} ${
    mainColorPlaceholder ? styles["input__element_main-color-placeholder"] : ""
  } ${rounded ? styles["input__element_rounded"] : ""} ${
    center ? styles["input__element_center"] : ""
  } ${right ? styles["input__element_right"] : ""}`;

  return (
    <span className={styles.input}>
      <input
        className={classNameInput}
        type={type}
        placeholder={placeholderText}
        onInput={(e) => handleOnInput(e.target.value)}
        value={value}
        {...rest}
        ref={inputRef}
      />
      {placeholder && !value && (
        <span
          onClick={() => handlePlaceholderClick(inputRef)}
          className={styles.input__placeholder}
        >
          {placeholder}
        </span>
      )}
    </span>
  );
};

export default Input;
