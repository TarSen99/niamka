import styles from "./MenuIcon.module.scss";

const MenuIcon = () => {
  const className = `${styles["menu-icon"]}`;

  return (
    <button className={className}>
      <span></span>
      <span></span>
      <span></span>
    </button>
  );
};

export default MenuIcon;
