import { Layout, Card, Typography, Space, Row, Col } from "antd";
import { Pie, Bar } from "@ant-design/plots"; // Using Ant Design charts for simplicity
import { useState, useEffect } from "react";

const { Title, Text } = Typography;

export const Mainlayout = () => {
  const [totalTeachers, setTotalTeachers] = useState(0);
  const [totalStudents, setTotalStudents] = useState(0);
  const [monthlyReport, setMonthlyReport] = useState([]);
  const [weeklyReport, setWeeklyReport] = useState([]);

  useEffect(() => {
    // Mock data for demonstration
    setTotalTeachers(50);
    setTotalStudents(500);
    setMonthlyReport([
      { month: "January", students: 40 },
      { month: "February", students: 60 },
      { month: "March", students: 80 },
    ]);
    setWeeklyReport([
      { week: "Week 1", students: 10 },
      { week: "Week 2", students: 20 },
      { week: "Week 3", students: 30 },
    ]);
  }, []);

  const monthlyConfig = {
    data: monthlyReport,
    xField: 'month',
    yField: 'students',
    seriesField: 'month',
    color: ['#1979C9', '#D62A0D', '#FAA219'],
  };

  const weeklyConfig = {
    data: weeklyReport,
    xField: 'week',
    yField: 'students',
    seriesField: 'week',
    color: ['#1979C9', '#D62A0D', '#FAA219'],
  };

  const pieConfig = {
    appendPadding: 10,
    data: [
      { type: 'Male', value: 300 },
      { type: 'Female', value: 200 },
    ],
    angleField: 'value',
    colorField: 'type',
    radius: 0.75,
    label: {
      type: 'spider',
      labelHeight: 28,
      content: '{name}\n{percentage}',
    },
  };

  return (
    <Layout.Content style={{ padding: '20px' }}>
      <Space direction="vertical" size="large" style={{ width: "100%" }}>
        <Row gutter={[16, 16]}>
          <Col span={12}>
            <Card>
              <Title level={4}>Total Teachers</Title>
              <Text>{totalTeachers}</Text>
            </Card>
          </Col>
          <Col span={12}>
            <Card>
              <Title level={4}>Total Students</Title>
              <Text>{totalStudents}</Text>
            </Card>
          </Col>
        </Row>

        <Row gutter={[16, 16]}>
          <Col span={12}>
            <Card title="Monthly Student Enrollment">
              <Bar {...monthlyConfig} />
            </Card>
          </Col>
          <Col span={12}>
            <Card title="Weekly Student Enrollment">
              <Bar {...weeklyConfig} />
            </Card>
          </Col>
        </Row>

        <Row gutter={[16, 16]}>
          <Col span={24}>
            <Card title="Student Demographics">
              <Pie {...pieConfig} />
            </Card>
          </Col>
        </Row>

        <Row gutter={[16, 16]}>
          <Col span={24}>
            <Card>
              <Title level={4}>Overall School Performance</Title>
              <Text>Details about school performance can be added here...</Text>
            </Card>
          </Col>
        </Row>
      </Space>
    </Layout.Content>
  );
};
