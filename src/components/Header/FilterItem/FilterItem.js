import styles from "@/components/Header/FilterItem/FilterItem.module.scss";

const FilterItem = ({ title, Icon, tabIndex, active, handleClick = () => {} }) => {
  return (
    <button
      className={`${styles.filterItem} ${
        active && styles.filterItem_active
      } is-flex is-flex-direction-column is-align-items-center`}
      tabIndex={tabIndex}
      onClick={handleClick}
    >
      {Icon && (
        <span
          className={`${styles.filterItem__iconContainer} is-flex is-align-items-center is-justify-content-center`}
        >
          {<Icon />}
        </span>
      )}

      <span className="mt-2">{title}</span>
    </button>
  );
};

export default FilterItem;
