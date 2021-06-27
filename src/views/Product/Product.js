import '@/assets/styles/_animations.scss';
import styles from '@/views/Product/Product.module.scss';
import Header from '../../components/Header/Header.js';
import Badge from '@/components/general/Badge/Badge.js';
import Button from '@/components/Button/Button.js';
import { GoLocation } from 'react-icons/go';
import ProductMapIcon from '@/components/Product/ProductMapIcon';
import GoogleMapReact from 'google-map-react';
import CompanyDetails from '@/components/CompanyDetails';
import img from '@/assets/images/product.jpg';
import FoodListItem from '@/components/Product/FoodListItem/FoodListItem.js';
import { useState } from 'react';
import Slider from 'react-slick';
import foodItem from '@/assets/images/foodItem.jpg';
import { useDispatch } from 'react-redux';
import { addProduct } from '@/slices/productSlice.js';

const MapPoint = () => {
  return (
    <span className="fz-24" style={ { color: 'var(--main-dark)' } }>
      <ProductMapIcon />
    </span>
  );
};

const settings = {
  className: 'slider variable-width',
  dots: false,
  infinite: true,
  centerMode: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  variableWidth: true,
  arrows: false,
};

const Product = () => {
  const dispatch = useDispatch();
  const [ isLoading, setLoading ] = useState(false);
  // const [ products, setProducts ] = useState([]);
  const [ inProp, setInProp ] = useState(false);

  const defaultMapProps = {
    center: {
      lat: 48.9214383,
      lng: 24.6957446,
    },
    zoom: 16,
  };

  const handleSubmitClick = () => {
    setInProp(true);
    dispatch(
      addProduct({
        name: 'Product',
        price: 50,
      })
    );
  };

  return (
    <div className={ styles.product }>
      <Header
        absolute
        right={
          <div className="is-flex is-flex-direction-column is-align-items-flex-end">
            <Badge color="orange">
              <span className="fz-14">Take 18:00 - 20:00</span>
            </Badge>

            <span className={ `${ styles.product__distance } fz-14 mt-2` }>
              <GoLocation /> 1.2km
            </span>
          </div>
        }
      ></Header>

      <div className={ styles.product__header }>
        <img src={ img } alt="" />
      </div>

      <div
        className={ `${ styles.product__content } container background-grey pb-0` }
      >
        <div className="title is-flex is-justify-content-space-between is-align-items-center mt-2">
          <h1 className="fz-24 medium">Tasty burger</h1>

          <span>
            <Badge color="orange">
              <span className="fz-14 mx-2">5 left</span>
            </Badge>
          </span>
        </div>

        <p className="mt-5 fz-14 body-color">
          This burger includes meet and someother stuff. Doesn’t metter...
        </p>

        <div className="mt-5">
          <Button loading={ isLoading } expanded onClick={ handleSubmitClick }>
            Order 50 hrn.
          </Button>
        </div>
      </div>

      <div className={ `${ styles.product__map }` }>
        <GoogleMapReact
          defaultCenter={ defaultMapProps.center }
          defaultZoom={ defaultMapProps.zoom }
        >
          <MapPoint
            lat={ 48.9214383 }
            lng={ 24.6957446 }
            text="My Marker"
          ></MapPoint>
        </GoogleMapReact>
      </div>

      <div>
        <div className="container" style={ { backgroundColor: 'var(--main)' } }>
          <div className="mt-5 relative pb-5">
            <CompanyDetails />
          </div>
        </div>
      </div>

      <div
        className={ `${ styles.bottom } pt-5` }
      >
        <Slider { ...settings }>
          <div style={ { width: '150px' } }>
            <FoodListItem img={ foodItem } price="50" />
          </div>
          <div style={ { width: '150px' } }>
            <FoodListItem img={ foodItem } price="50" />
          </div>
          <div style={ { width: '150px' } }>
            <FoodListItem img={ foodItem } price="50" />
          </div>
          <div style={ { width: '150px' } }>
            <FoodListItem img={ foodItem } price="50" />
          </div>
          <div style={ { width: '150px' } }>
            <FoodListItem img={ foodItem } price="50" />
          </div>
          <div style={ { width: '150px' } }>
            <FoodListItem img={ foodItem } price="50" />
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default Product;
