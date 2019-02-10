import React, { Component } from 'react';
import Header from './components/Header';
import ProductsContainer from './containers/ProductsContainer';
import Message from './components/Message';
import Cart from './components/Cart';
import Footer from './components/Footer';
import CartContainer from './containers/CartContainer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div>
          {/* Header */}
          <Header />
          <main id="mainContainer">
            <div className="container">
              {/* Products */}
              <ProductsContainer />
              {/* Message */}
              <Message />
              {/* Cart */}
              <Cart />
              <CartContainer />
            </div>
          </main>
          {/* Footer */}
          <Footer />
        </div>
      </div>
    );
  }
}

export default App;
