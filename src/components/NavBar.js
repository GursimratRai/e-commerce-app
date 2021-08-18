import React from "react";
import { Menu , Badge , Avatar} from "antd";

function Navbar(props) {
  return (
    <div>
      <div>
        <Menu theme="light" mode="horizontal" defaultSelectedKeys={["1"]}>
          <Menu.Item key="1">Products</Menu.Item>
          <Menu.Item key="2">Add A Product</Menu.Item>
          <Menu.Item key="3">  
            <Badge  size="small"  count={5}>
            <Avatar style={{color:'blue'}} size="large"><i className="fas fa-shopping-cart"></i></Avatar>
            </Badge>
          </Menu.Item>
        </Menu>
      </div>
    </div>
  );
}

export default Navbar;
