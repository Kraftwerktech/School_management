import { IResourceComponentsProps, useApiUrl, useCreate } from "@pankod/refine-core";
import { Form, Input, Select, Button, Upload, Card, Row, Col, message } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import { useForm } from "@pankod/refine-antd";
import { useState } from "react";

export const TeacherCreate: React.FC<IResourceComponentsProps> = () => {
    const [form] = useForm();
    const apiUrl = useApiUrl();
    const { mutate: create } = useCreate();
    const [fileList, setFileList] = useState([]);

    const handleUpload = ({ file }) => {
        setFileList([file]);
    };

    const onFinish = async (values: any) => {
        try {
            const formData = new FormData();
            formData.append('designation', values.designation);
            formData.append('name', values.name);
            formData.append('subjectName', values.subject);
            formData.append('assingclass', values.class);
            formData.append('address', values.address);
            formData.append('email', values.email);
            formData.append('phone', values.phone);
            formData.append('nid', values.nid);
            formData.append('education', values.education);
            formData.append('image', fileList[0]); // Handling file upload

            await create({
                resource: "teachers",
                values: formData,
                config: {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                    },
                },
                successNotification: () => {
                    message.success('Teacher added successfully!');
                },
                errorNotification: (error) => {
                    message.error(`Failed to add teacher! ${error.message}`);
                },
            });

            form.resetFields();
            setFileList([]);
        } catch (error) {
            message.error('An error occurred while adding the teacher.');
        }
    };

    return (
        <Card style={{ maxWidth: 800, margin: "auto" }}>
            <h2 className='text-center font-bold text-[22px] mb-5'>Add New Teacher</h2>
            <Form form={form} layout="vertical" onFinish={onFinish}>
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
                                onChange={handleUpload}
                            >
                                <Button icon={<UploadOutlined />}>Click to Upload</Button>
                            </Upload>
                        </Form.Item>
                    </Col>
                </Row>

                <Form.Item>
                    <Button type="primary" htmlType="submit" block>
                        Add Teacher
                    </Button>
                </Form.Item>
            </Form>
        </Card>
    );
};
