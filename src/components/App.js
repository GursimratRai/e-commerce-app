import React, {useEffect } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

//actions
import { fetchProducts } from "../actions/products";
//Custom Components
import { Navbar, ProductList , AddProduct , ProductDetail} from "./";
//antd components
import { Layout } from "antd";

const { Header, Content } = Layout;

const App = (props) => {

  const {dispatch}=props;
  //function for loading / pre-fetch all the products
  useEffect(() => {
    dispatch(fetchProducts());
  },[dispatch]);

  //list -> list of all products
  //cart -> products in the cart
  const {list , cart} = props;

  return (
    <div>
      <Layout>
        <Router>
        {/* NAV BAR */}
        <Header style={{ backgroundColor: "white", position: "fixed", zIndex: 1, width: "100%", }} >
          <Navbar count={cart.length} />
        </Header>
        
        {/* Container  */}
        <Content className="site-layout" style={{ padding: "0 50px", height:'100%', minHeight:'100vh', marginTop: 64 }} >
          <div className="site-layout-background" style={{padding: 24, minHeight: 380 ,height:'100%'}} >
              <Switch>
                {/* Home */}
                <Route exact path="/" component={() => <ProductList products={list} />} />
                {/* Add New Product */}
                <Route exact path="/add-product" component={() => <AddProduct />} />
                {/* Cart */}
                <Route exact path="/cart" component={() => <ProductList products={cart} />} />
                {/* Product Detail Page */}
                <Route path="/product/:id" component={() => <ProductDetail products={list} cart={cart} />} />
            </Switch>
          </div>
        </Content>
        </Router>
      </Layout>
    </div>
  );
};

function mapStateToProps(state) {
  return {
    list: state.products.list,
    cart:state.products.cart
  };
}

App.propTypes = {
  list : PropTypes.array.isRequired,
  cart : PropTypes.array.isRequired,
};

export default connect(mapStateToProps)(App);
