import React, { useState,useEffect } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { fetchProducts } from "../actions/products";

import { Navbar, ProductList , AddProduct} from "./";

import { Layout } from "antd";

const { Header, Content } = Layout;

const App = (props) => {
  const [menu,setMenu] = useState(1);

  useEffect(() => {
    props.dispatch(fetchProducts());
  }, []);

  const changeMenu = (value) => {
    setMenu(value);
  }

  const {list , cart} = props;
  console.log('props',props);
  return (
    <div>
      <Layout>
        <Header style={{ backgroundColor: "white", position: "fixed", zIndex: 1, width: "100%", }} >
          <Navbar changeMenu={changeMenu} />
        </Header>
        
        <Content className="site-layout" style={{ padding: "0 50px", height:'100%', minHeight:'100vh', marginTop: 64 }} >
          <div className="site-layout-background" style={{padding: 24, minHeight: 380 ,height:'100%'}} >
            {menu === 1 && <ProductList products = {list} />}
            {menu === 2 && <AddProduct />}
            {menu === 3 && <ProductList products = {cart} />}

          </div>
        </Content>
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
