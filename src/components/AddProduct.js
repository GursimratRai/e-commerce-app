import React from "react";
import { Form, Input, Button, Row, Col, InputNumber, Rate } from "antd";

const AddProduct = (props) => {
  const onFinish = (values) => {};
  const onFinishFailed = (error) => {};

  return (
    <div style={{ backgroundColor: "white", padding: 20 }}>
      <Form
        name="basic"
        // labelCol={{ span: 8 }}
        // wrapperCol={{ span: 16 }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
      >
        <Row>
          <Col span={24}>
            <Form.Item
              label="Product Name"
              name="title"
              rules={[{ required: true, message: "Please input Product Name" }]}
            >
              <Input placeholder={"Enter Product Name"} />
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={48}>
          <Col span={12}>
            <Form.Item
              label="Brand"
              name="brand"
              rules={[{ required: true, message: "Please input Brand Name" }]}
            >
              <Input placeholder={"Enter Brand Name"} />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              label="Generation"
              name="generation"
              rules={[{ required: true, message: "Please input Generation" }]}
            >
              <Input placeholder={"Enter Generation"} />
            </Form.Item>
          </Col>
        </Row>

        <Row gutter={48}>
          <Col span={12}>
            <Form.Item
              label="Display Size"
              name="display-size"
              rules={[
                { required: true, message: "Please input Size of the display" },
              ]}
            >
              <Input placeholder={"Enter Display Dimensions"} />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              label="Operating System"
              name="operating-system"
              rules={[
                {
                  required: true,
                  message: "Please input Operating System Name",
                },
              ]}
            >
              <Input placeholder={"Enter Operating System Name"} />
            </Form.Item>
          </Col>
        </Row>

        <Row gutter={48}>
          <Col span={8}>
            <Form.Item label="Price">
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
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item
              label="Category"
              name="category"
              rules={[
                {
                  required: true,
                  message: "Please input Category",
                },
              ]}
            >
              <Input placeholder={"Enter Category"} />
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item name="rating" label="Rate">
              <Rate defaultValue={0} style={{ backgroundColor: "white" }} />
            </Form.Item>
          </Col>
        </Row>

        <Row>
          <Col span={24}>
            <Form.Item
              label="Image"
              name="image"
              rules={[{ required: true, message: "Please enter Image Url" }]}
            >
              <Input placeholder={"Enter Image Url"} />
            </Form.Item>
          </Col>
        </Row>

        <Row>
          <Col span={24}>
            <Form.Item
              label="Description"
              name="description"
              rules={[{ required: true, message: "Please enter Description" }]}
            >
              <Input placeholder={"Enter Description"} />
            </Form.Item>
          </Col>
        </Row>

        <Form.Item wrapperCol={{ offset: 22, span: 16 }}>
          <Button type="primary" htmlType="submit">
            Add
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default AddProduct;
