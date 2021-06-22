import styles from "./Badge.module.scss";

const Badge = ({
  children,
  color,
  absolute,
  left,
  right,
  top,
  bottom,
  noBorderTopRightRadius,
  noBorderBottomRightRadius,
  noBorderTopLeftRadius,
  noBorderBottomLeftRadius,
}) => {
  return (
    <div
      className={`${styles.badge} ${
        absolute && styles.badge_absolute
      } p-1 px-2 is-inline-block text-center`}
      style={{
        backgroundColor: `var(--${color})`,
        borderBottomLeftRadius: noBorderBottomLeftRadius && 0,
        borderTopLeftRadius: noBorderTopLeftRadius && 0,
        borderBottomRightRadius: noBorderBottomRightRadius && 0,
        borderTopRightRadius: noBorderTopRightRadius && 0,
        left,
        right,
        top,
        bottom,
      }}
    >
      {children}
    </div>
  );
};

export default Badge;
