import styles from './FoodItem.module.scss';
import Badge from '@/components/general/Badge/Badge.js';
import { GoLocation } from 'react-icons/go';
import { useHistory } from 'react-router-dom';

const FoodItem = ({ image, title, id }) => {
  const history = useHistory();

  function handleFoodItemClick() {
    history.push(`/product/${ id }`);
  }

  return (
    <div onClick={ handleFoodItemClick } className={ `${ styles.foodItem } is-flex` }>
      <div className={ styles.foodItem__img }>
        <img src={ image } alt={ title } />

        <Badge color="orange" absolute left="8px" top="8px">
          Take 18:00 - 20:00
        </Badge>

        <Badge
          color="red"
          absolute
          right="0"
          bottom="0"
          noBorderBottomLeftRadius
          noBorderTopRightRadius
          noBorderBottomRightRadius
        >
          <span className="px-2">-50%</span>
        </Badge>
      </div>

      <div className={ `${ styles.foodItem__content } p-3 pl-5` }>
        <div className="is-flex is-align-items-center is-justify-content-space-between">
          <h2 className={ `${ styles.foodItem__title } fz-18` }>title</h2>

          <span className={ `${ styles.foodItem__distance } fz-12` }>
            {' '}
            <GoLocation /> 1.2km
          </span>
        </div>
        <p className={ `${ styles.foodItem__company } fz-12` }>Company name</p>

        <div className="mt-2">
          <Badge color="dark">
            <span className="line-through mr-1">100</span> <span>50 hrn.</span>
          </Badge>

          <span className="ml-2">
            <Badge color="orange">5 left</Badge>
          </span>
        </div>

        <p className={ `${ styles.foodItem__description } fz-12 mt-3` }>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Totam
          adipisci blanditiis voluptates nihil! Error
        </p>
      </div>
    </div>
  );
};

export default FoodItem;
