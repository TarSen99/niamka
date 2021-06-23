import styles from '@/components/Button/Button.module.scss';

const Button = ({
  children,
  onClick = () => {},
  loading,
  expanded,
  color = 'orange',
}) => {
  const btnClasses = `${ styles.button } ${ loading && styles.button_loading } ${
    expanded && 'w-100'
  } fz-18 text-center px-5`;

  return (
    <button
      onClick={ onClick }
      style={ { backgroundColor: `var(--${ color })` } }
      className={ btnClasses }
    >
      {loading && <span className={ styles.loader }></span>}
      <span className={ styles.button__text }>{children}</span>
    </button>
  );
};

export default Button;
