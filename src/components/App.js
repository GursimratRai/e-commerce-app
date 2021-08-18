import React, { useEffect } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { fetchProducts } from "../actions/products";

import { Navbar, ProductList } from "./";

import { Layout } from "antd";

const { Header, Content } = Layout;

const App = (props) => {
  useEffect(() => {
    props.dispatch(fetchProducts());
  }, []);

  const {list} = props;
  console.log('props',props);
  return (
    <div>
      <Layout>
        <Header style={{ backgroundColor: "white", position: "fixed", zIndex: 1, width: "100%", }} >
          <Navbar />
        </Header>
        
        <Content className="site-layout" style={{ padding: "0 50px", height:'100%', marginTop: 64 }} >
          <div className="site-layout-background" style={{ padding: 24, minHeight: 380 }} >
            <ProductList products = {list} />
          </div>
        </Content>
      </Layout>
    </div>
  );
};

function mapStateToProps(state) {
  return {
    list: state.products.list,
  };
}

App.propTypes = {
  list: PropTypes.array.isRequired,
};

export default connect(mapStateToProps)(App);
