import React, { Component } from 'react';
// import Products from '../components/Products';
// import Product from '../components/Product';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Cart from '../components/Cart';
import * as Message from '../constants/Message';
import CartItem from '../components/CartItem';
import CartResult from '../components/CartResult';

class CartContainer extends Component {
  render() {
    let { cart } = this.props;
    return (
      <Cart>
        { this.showCartItem(cart) }
        { this.showTotalAmount(cart) }
      </Cart>
    );
  }

  showCartItem = (cart) => {
    let result = Message.MSG_CART_EMPTY;
    if (cart.length > 0) { 
      result = cart.map((item,index) => {
        return(
          <CartItem
            key= {index}
            item={item} 
          />
        );
      })
    }
    return result;
  }

  showTotalAmount = (cart) => {
    let result = null;
    if (cart.length > 0) {
      result = <CartResult cart={cart} />
    }
    return result;
  }
}
CartContainer.propTypes = {
    cart : PropTypes.arrayOf(
        PropTypes.shape({
            product : PropTypes.shape({
              id : PropTypes.number.isRequired,
              name: PropTypes.string.isRequired,
              image: PropTypes.string.isRequired,
              description: PropTypes.string.isRequired,
              price: PropTypes.number.isRequired,
              inventory: PropTypes.number.isRequired,
              rating: PropTypes.number.isRequired
            }).isRequired,
            quantity: PropTypes.number.isRequired
        })
    ).isRequired // bắt buộc phải có và là mảng
}
const mapStateToProps = state => {
  return {
    cart: state.cart
  }
}

export default connect(mapStateToProps,null) (CartContainer);