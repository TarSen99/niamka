import { CSSTransition } from 'react-transition-group';
import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';
import styles from './CheckoutButton.module.scss'
import Button from '@/components/Button/Button.js';
import { useEffect } from 'react';

const CheckoutButton = ()=> {
    const products = useSelector(state => state.productReducer.value)
    const [ inProp, setInProp ] = useState(false);
    
    useEffect(() => {
        if(products.length) {
            setInProp(true)
        } else {
            setInProp(false)
        }
    }, [ products.length ])

  const totalPrice = products.reduce((prev, curr) => {
    return prev + curr.price;
  }, 0);

    return (
      <CSSTransition in={ inProp } timeout={ 200 } classNames="product-btn">
        <div>
          {!!products.length && (
            <div className={ `${ styles.submit_products } fixed-center` }>
              <Button expanded>
                Checkout {products.length} item {totalPrice}hrn.
              </Button>
            </div>
          )}
        </div>
      </CSSTransition>
    )
}

export default CheckoutButton