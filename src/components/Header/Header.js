import styles from "./Header.module.scss";
import MenuIcon from "@/components/MenuIcon/MenuIcon";
import Input from "@/components/general/Input/Input.js";
import { FaSearch } from "react-icons/fa";
import { useState } from "react";

const DefaultLeft = () => {
  return <MenuIcon />;
};

const Header = ({ hasSearch, title, left, right, color, absolute }) => {
  const hasCenter = hasSearch || title;

  const headerClassName = `${styles.header} ${
    hasCenter && styles.header_hasCenter
  } ${
    absolute && styles.header_absolute
  } is-flex is-flex-direction-column is-align-items-center`;

  const headerTopSectionClass = `${styles.header__topSection} ${
    !hasCenter && "is-flex is-justify-content-space-between"
  } w-100 text-center`;
  const [search, setSearch] = useState("");

  const handleSearchInput = (v) => {
    setSearch(v);
  };

  return (
    <header
      className={headerClassName}
      style={{ backgroundColor: `var(--${color})` }}
    >
      <div className={headerTopSectionClass}>
        <div className={`${styles.header__topSectionLeft}`}>
          {left ? left : <DefaultLeft />}
        </div>

        <span className={`${styles.header__logo} center`}>{title}</span>

        <div className={`${styles.header__topSectionRight}`}>{right}</div>
      </div>

      {hasSearch && (
        <div className={`${styles["header__bottom-section"]}`}>
          <Input
            mainColorPlaceholder
            rounded
            center
            value={search}
            handleOnInput={handleSearchInput}
            placeholder={
              <span className={styles["header__search-placeholder"]}>
                <span className={styles.header__search_icon}>
                  <FaSearch />
                </span>
                <span>Search</span>
              </span>
            }
          />
        </div>
      )}
    </header>
  );
};

export default Header;
