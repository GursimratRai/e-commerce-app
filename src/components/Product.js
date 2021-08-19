import React from "react";

import { Card, Avatar,Button , Rate ,Input , InputNumber} from "antd";

const { Meta } = Card;

const Product = (props) => {
  const { product , edit , handleEdit,handleCancel } = props;
  return (
    <div>
      <Card hoverable style={{ width: '80vw',marginTop: 10 }} actions={edit===product.id?[
            <Button onClick={handleCancel} type='secondary'>Cancel</Button>,        
            <Button type='primary'>Save</Button>,        
          ]:[
            <i onClick={()=> handleEdit(product.id)} className="fas fa-pencil-alt"></i>,
            <i className="fas fa-trash"></i>,
            <Button type='primary'>Add To Cart</Button>,        
          ]}>
        <Meta 
          avatar = {<Avatar src={product.image} style={{width:100 , height:100}} />}
          title = {edit===product.id?<Input defaultValue={product.title} /> : product.title}
          description = {edit===product.id?<span>Rs <InputNumber min={0} defaultValue={product.price} /></span>: <span>Rs {product.price}</span>}
        />
        { edit===product.id?<Rate defaultValue={product.rating}/>:<Rate disabled defaultValue={product.rating}/> }
      </Card>
    </div>
  );
};

export default Product;
