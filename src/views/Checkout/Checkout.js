import styles from './Checkout.module.scss'
import Header from '../../components/Header/Header.js';

const Checkout = () => {
    return (
      <div>
        <Header title="Checkout" color="orange"></Header>

        <div className='container'>
          <h1 className="fz-20 medium mt-2">
            Order from Best company
          </h1>
        </div>
      </div>
    )
}

export default Checkout;