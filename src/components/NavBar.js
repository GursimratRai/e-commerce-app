import React from "react";
//antd components
import { Menu , Badge , Avatar} from "antd";
//link from react router dom
import {Link} from 'react-router-dom';

const Navbar = (props) => {

  //Number of items / products in the cart
  const { count} = props;

  return (
    <div>
      <div>
        <Menu theme="light" mode="horizontal" defaultSelectedKeys={["1"]}>
          {/* link for home / all products */}
          <Menu.Item key="1"><Link to="/" >Products</Link></Menu.Item>
          {/* link for adding new product  */}
          <Menu.Item key="2"><Link to="/add-product" >Add A Product</Link> </Menu.Item>
          {/* link for Cart and Icon with count  */}
          <Menu.Item key="3">  
            <Badge  size="small"  count={count}>
              <Link to ="/cart" >
                   <Avatar style={{color:'blue'}} size="large"><i className="fas fa-shopping-cart"></i></Avatar>
              </Link>
            </Badge>
          </Menu.Item>
        </Menu>
      </div>
    </div>
  );
}

export default Navbar;
