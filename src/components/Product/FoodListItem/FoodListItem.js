import styles from "@/components/Product/FoodListItem/FoodListItem.module.scss";
import Badge from "@/components/general/Badge/Badge.js";

const FoodListItem = ({ img, id, price }) => {
  return (
    <div className={`${styles.listItem} relative`}>
      <img src={img} alt="" className="" />
      <Badge color="red" absolute left="8px" top="8px">
        <span className="px-2">
        {price}hrn.
        </span>
      </Badge>
    </div>
  );
};

export default FoodListItem;
