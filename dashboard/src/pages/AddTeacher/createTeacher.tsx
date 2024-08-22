import React from 'react'
import { Form, Input, Select, Button, Upload, Card, Row, Col } from "antd";
import { UploadOutlined } from "@ant-design/icons";
function createTeacher() {
  return (
    <div>
      <Card style={{ maxWidth: 800, margin: "auto" }}>
        <h2 className=' text-center font-bold text-[22px] mb-5'>Add New Teacher</h2>
      <Form layout="vertical">
        <Row gutter={[16, 16]}>
          <Col span={12}>
            <Form.Item
              label="Designation"
              name="designation"
              rules={[{ required: true, message: "Please select a designation" }]}
            >
              <Select placeholder="Select Designation">
                <Select.Option value="Professor">Professor</Select.Option>
                <Select.Option value="Assistant Professor">
                  Assistant Professor
                </Select.Option>
                <Select.Option value="Lecturer">Lecturer</Select.Option>
                <Select.Option value="Teacher">Teacher</Select.Option>
              </Select>
            </Form.Item>
          </Col>

          <Col span={12}>
            <Form.Item
              label="Name"
              name="name"
              rules={[{ required: true, message: "Please enter the teacher's name" }]}
            >
              <Input placeholder="Enter Name" />
            </Form.Item>
          </Col>
        </Row>

        <Row gutter={[16, 16]}>
          <Col span={12}>
            <Form.Item
              label="Assigned Subject"
              name="subject"
              rules={[{ required: true, message: "Please select a subject" }]}
            >
              <Select placeholder="Select Subject">
                <Select.Option value="Mathematics">Mathematics</Select.Option>
                <Select.Option value="Science">Science</Select.Option>
                <Select.Option value="History">History</Select.Option>
                <Select.Option value="English">English</Select.Option>
              </Select>
            </Form.Item>
          </Col>

          <Col span={12}>
            <Form.Item
              label="Assigned Class"
              name="class"
              rules={[{ required: true, message: "Please select a class" }]}
            >
              <Select placeholder="Select Class">
                <Select.Option value="Class 1">Class 1</Select.Option>
                <Select.Option value="Class 2">Class 2</Select.Option>
                <Select.Option value="Class 3">Class 3</Select.Option>
                <Select.Option value="Class 4">Class 4</Select.Option>
              </Select>
            </Form.Item>
          </Col>
        </Row>

        <Row gutter={[16, 16]}>
          <Col span={12}>
            <Form.Item
              label="Address"
              name="address"
              rules={[{ required: true, message: "Please enter the address" }]}
            >
              <Input.TextArea placeholder="Enter Address" />
            </Form.Item>
          </Col>

          <Col span={12}>
            <Form.Item
              label="Email"
              name="email"
              rules={[{ required: true, message: "Please enter a valid email", type: "email" }]}
            >
              <Input placeholder="Enter Email" />
            </Form.Item>
          </Col>
        </Row>

        <Row gutter={[16, 16]}>
          <Col span={12}>
            <Form.Item
              label="Phone"
              name="phone"
              rules={[{ required: true, message: "Please enter a valid phone number" }]}
            >
              <Input placeholder="Enter Phone Number" />
            </Form.Item>
          </Col>

          <Col span={12}>
            <Form.Item
              label="NID Number"
              name="nid"
              rules={[{ required: true, message: "Please enter the NID number" }]}
            >
              <Input placeholder="Enter NID Number" />
            </Form.Item>
          </Col>
        </Row>

        <Row gutter={[16, 16]}>
          <Col span={12}>
            <Form.Item
              label="Education"
              name="education"
              rules={[{ required: true, message: "Please enter educational qualifications" }]}
            >
              <Input placeholder="Enter Education" />
            </Form.Item>
          </Col>

          <Col span={12}>
            <Form.Item
              label="Upload Image"
              name="image"
              rules={[{ required: true, message: "Please upload an image" }]}
            >
              <Upload
                listType="picture"
                beforeUpload={() => false} // Prevents automatic upload
              >
                <Button icon={<UploadOutlined />}>Click to Upload</Button>
              </Upload>
            </Form.Item>
          </Col>
        </Row>

        <Form.Item>
          <Button type="primary" block>
            Add Teacher
          </Button>
        </Form.Item>
      </Form>
      </Card>
    </div>
  )
}

export default createTeacher