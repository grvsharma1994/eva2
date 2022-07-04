import styles from "./Button.module.css";

function Button({ disabled,children }) {
  return (
    <button disabled={disabled} className={styles.button} data-testid="button">
      {children}
    </button>
  );
}

export default Button;
