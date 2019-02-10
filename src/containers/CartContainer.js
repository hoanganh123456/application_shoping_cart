import React, { Component } from 'react';
// import Products from '../components/Products';
// import Product from '../components/Product';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class CartContainer extends Component {
  render() {
    let { cart } = this.props;
    console.log('hoanganh',cart);
    return (
      <div></div>
    );
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