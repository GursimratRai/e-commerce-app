import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
//for getting the params in the url of the page
import { useParams } from "react-router-dom";
//antd componets
import { Row, Col, Rate, Button } from "antd";
//actions
import { addToCart, removeFromCart } from "../actions/products";

const ProductDetail = (props) => {
  const { products, cart } = props;
  //id of the product in the url
  const { id } = useParams();
  const [product, setProduct] = useState({});

  //function for getting the details of the product from the list of products
  const getDetails = () => {
    let index = products.findIndex((item) => parseInt(item.id) === parseInt(id));

    if (index !== -1) {
      setProduct(products[index]);
    }
  };

  //function for adding the product in teh cart
  const handleAddToCart = (product) => {
    props.dispatch(addToCart(product));
  };

  //function for removing the product from the cart
  const handleRemoveFromCart = (product) => {
    props.dispatch(removeFromCart(product));
  };

  //function for checking whether the product is present in the cart or not
  const inCart = () => {
    let index = cart.findIndex((item) => item.title === product.title);
    if (index !== -1) {
      return true;
    }
    return false;
  };

  //loading the details of the product
  useEffect(getDetails, [id,products]);

  return (
    <div>
      <Row>
        <Col span={12}>
                                                                                {/* Title of the product */}
          <Row>
            <b>Title :</b>
            <span>{product.title}</span>
          </Row>
                                                                                 {/* Rating for the product */}
          <Row>
            <Rate disabled value={product.rating} />
          </Row>
                                                                                 {/* Price of the product  */}
          <Row>
            <b>Price : </b>
            <span>Rs {product.price}</span>
          </Row>
                                                                      {/* Button for add / remove product from the cart */}
          <Row>
            <Button
              onClick={
                inCart()
                  ? () => handleRemoveFromCart(product)
                  : () => handleAddToCart(product)
              }
              type={inCart() ? "danger" : "primary"}
            >
              {inCart() ? "Remove From Cart" : "Add To Cart"}
            </Button>
          </Row>

                                                                                       {/* Brand name */}
          <Row>
            <b>Brand :</b>
            <span>{product.brand}</span>
          </Row>

                                                                                        {/* Generation */}
          <Row>
            <b>Generation :</b>
            <span>{product.generation}</span>
          </Row>

                                                                                       {/* Display Size  */}
          <Row>
            <b>Display Size :</b>
            <span>{product["display-size"]}</span>
          </Row>

                                                                                      {/* Operating System */}
          <Row>
            <b>Operation System :</b>
            <span>{product["operating-system"]}</span>
          </Row>

                                                                                           {/* Category */}
          <Row>
            <b>Category :</b>
            <span>{product.category}</span>
          </Row>

                                                                                         {/* Description */}
          <Row>
            <b>Description :</b>
            <span>{product.description}</span>
          </Row>
        </Col>

                                                                                     {/* Image of the product */}
        <Col span={12}>
          <img
            src={product.image}
            alt="Product"
            style={{ width: "100%", height: "100%" }}
          />
        </Col>
      </Row>
    </div>
  );
};

export default connect()(ProductDetail);
