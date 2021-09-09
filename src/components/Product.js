import React, { useState } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
//actions
import { deleteProduct, addToCart, removeFromCart,
 updateProduct,
} from "../actions/products";
//antd components
import { Form, Card, Avatar, Button, Rate, Input, InputNumber } from "antd";

const { Meta } = Card;

const Product = (props) => {
  const { product, cart, edit, handleEdit, handleCancel } = props;
  //handling loading
  const [loading, setLoading] = useState(false);

  //function for handling delete functionality
  const handleDelete = (product) => {
    setLoading(true);
    props.dispatch(deleteProduct(product));
    setLoading(false);
  };

  //function for adding the product in the cart
  const handleAddToCart = (product) => {
    props.dispatch(addToCart(product));
  };

  //function for removing the product from the cart
  const handleRemoveFromCart = (product) => {
    props.dispatch(removeFromCart(product));
  };

  //function for handling update in the product
  const handleUpdateProduct = async (values) => {
    setLoading(true);
    await props.dispatch(updateProduct(values));
    setLoading(false);
  };

  //function for checking if the product is present in cart or not
  const inCart = () => {
    let index = cart.findIndex((item) => item.title === product.title);
    if (index !== -1) {
      return true;
    }
    return false;
  };

  //Card contains Form for editing / display the product
  return (
    <div>
      <Card
        hoverable
        style={{ width: "80vw", marginTop: 10 }}
        actions={
          edit === product.id
            ? [
                <Button onClick={handleCancel} type="secondary">
                  Cancel
                </Button>,
                <Button
                  loading={loading}
                  type="primary"
                  form={`update-form${product.id}`}
                  htmlType="submit"
                >
                  Save
                </Button>,
              ]
            : [
                <i
                  onClick={() => handleEdit(product.id)}
                  className="fas fa-pencil-alt"
                ></i>,
                <i
                  onClick={() => handleDelete(product)}
                  className="fas fa-trash"
                ></i>,
                <Button
                  onClick={
                    inCart()
                      ? () => handleRemoveFromCart(product)
                      : () => handleAddToCart(product)
                  }
                  type={inCart() ? "danger" : "primary"}
                >
                  {inCart() ? "Remove From Cart" : "Add To Cart"}
                </Button>,
              ]
        }
      >
        <Form
          initialValues={product}
          onFinish={handleUpdateProduct}
          id={`update-form${product.id}`}
        >
          <Form.Item hidden name="id"></Form.Item>

          <Meta
            avatar={
              <Avatar src={product.image} style={{ width: 100, height: 100 }} />
            }
            title={
              edit === product.id ? (
                <Form.Item
                  name="title"
                  style={{ margin: 0 }}
                  rules={[
                    { required: true, message: "Please input Product Name" },
                  ]}
                >
                  <Input placeholder={"Enter Product Name"} />
                </Form.Item>
              ) : (
                <Link to={`/e-commerce-app/product/${product.id}`}>{product.title}</Link>
              )
            }
            description={
              edit === product.id ? (
                <Form.Item
                  name="price"
                  rules={[
                    {
                      required: true,
                      message: "Please input Price",
                    },
                  ]}
                >
                  <InputNumber min={0} style={{ width: 200 }} />
                </Form.Item>
              ) : (
                <span>Rs {product.price}</span>
              )
            }
          />
          {edit === product.id ? (
            <Form.Item style={{ margin: 0 }} name="rating">
              <Rate style={{ backgroundColor: "white" }} />
            </Form.Item>
          ) : (
            <Rate disabled defaultValue={product.rating} />
          )}
        </Form>
      </Card>
    </div>
  );
};

//function which passes the state to component as props
function mapStateToProps(state) {
  return {
    cart: state.products.cart,
  };
}

//define type for the cart
Product.propTypes = {
  cart: PropTypes.array.isRequired,
};

//connecting the component to redux store
export default connect(mapStateToProps)(Product);
