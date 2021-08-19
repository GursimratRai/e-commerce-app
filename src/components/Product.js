import React from "react";

import { Card, Avatar,Button , Rate } from "antd";

const { Meta } = Card;

const Product = (props) => {
  const { product } = props;
  return (
    <div>
      <Card hoverable style={{ width: '80vw',marginTop: 10 }}  actions={[
            <i className="fas fa-pencil-alt"></i>,
            <i className="fas fa-trash"></i>,
            <Button type='primary'>Add To Cart</Button>,        
          ]}>
        <Meta 
          avatar={<Avatar src={product.image} style={{width:100 , height:100}} />}
          title={product.title}
          description={`Rs ${product.price}`}
        />
        <Rate allowHalf defaultValue={product.rating} />
      </Card>
    </div>
  );
};

export default Product;
