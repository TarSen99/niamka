import Header from "../../components/Header/Header.js";
import FilterItem from "@/components/Header/FilterItem/FilterItem.js";
import FoodItem from "@/components/FoodItem/FoodItem.js";
import foodItemImg from '@/assets/images/foodItem.jpg'
import styles from "@/views/Home/Home.module.scss";
import { useState } from "react";
import { BiRocket, BiMoney, BiStar } from "react-icons/bi";

const FILTER_ITEMS = [
  {
    title: "By distance",
    value: 0,
    Icon: BiRocket,
  },
  {
    title: "By price",
    value: 0,
    Icon: BiMoney,
  },
  {
    title: "By rating",
    value: 0,
    Icon: BiStar,
  },
];

const FoodItems = [1, 2, 3];

const Home = () => {
  const [filterItems] = useState(FILTER_ITEMS);
  const [selectedFilter, setSelectedFilter] = useState(0);

  return (
    <div>
      <Header hasSearch title="niamka" color="orange" />

      <ul
        className={`${styles.filters} is-flex is-justify-content-center mt-5`}
      >
        {FILTER_ITEMS.map((item, index) => (
          <li key={index} className={`${index < filterItems.length && "mr-4"}`}>
            <FilterItem
              handleClick={() => setSelectedFilter(index)}
              tabIndex={index + 1}
              active={selectedFilter === index}
              {...item}
            ></FilterItem>
          </li>
        ))}
      </ul>

      <div className="container">
        {FoodItems.map((item, index) => {
          return (
            <div key={index} className="mb-2">
              <FoodItem title="test" image={foodItemImg} id={index} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Home;
