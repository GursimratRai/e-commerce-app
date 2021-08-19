import React from "react";
import { Menu , Badge , Avatar} from "antd";

function Navbar(props) {
    const {changeMenu } = props;
  return (
    <div>
      <div>
        <Menu theme="light" mode="horizontal" defaultSelectedKeys={["1"]}>
          <Menu.Item onClick={() => changeMenu(1)} key="1">Products</Menu.Item>
          <Menu.Item onClick={() => changeMenu(2)} key="2">Add A Product</Menu.Item>
          <Menu.Item onClick={() => changeMenu(3)} key="3">  
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
