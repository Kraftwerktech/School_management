import { Layout, Card, Typography, Row, Col, Space } from "antd";
import { Bar, Pie, Histogram, Line } from "@ant-design/plots";
import { useState, useEffect } from "react";

const { Title, Text } = Typography;

export const Mainlayout = () => {
  const [totalTeachers, setTotalTeachers] = useState(0);
  const [totalStudents, setTotalStudents] = useState(0);
  const [monthlyReport, setMonthlyReport] = useState([]);
  const [weeklyReport, setWeeklyReport] = useState([]);
  const [teacherAttendance, setTeacherAttendance] = useState([]);
  const [teacherPerformance, setTeacherPerformance] = useState([]);
  const [studentPerformance, setStudentPerformance] = useState([]);

  useEffect(() => {
    // Mock data for demonstration
    setTotalTeachers(50);
    setTotalStudents(500);
    setMonthlyReport([
      { month: "January", students: 40 },
      { month: "February", students: 60 },
      { month: "March", students: 80 },
      // Add all 12 months
    ]);
    setWeeklyReport([
      { week: "Week 1", students: 10 },
      { week: "Week 2", students: 20 },
      { week: "Week 3", students: 30 },
    ]);
    setTeacherAttendance([
      { week: "Week 1", attendance: 90 },
      { week: "Week 2", attendance: 85 },
      { week: "Week 3", attendance: 88 },
    ]);
    setTeacherPerformance([
      { month: "January", performance: 75 },
      { month: "February", performance: 80 },
      { month: "March", performance: 85 },
      // Add all 12 months
    ]);
    setStudentPerformance([
      { month: "January", performance: 65 },
      { month: "February", performance: 70 },
      { month: "March", performance: 78 },
      // Add all 12 months
    ]);
  }, []);

  const barConfig = {
    data: monthlyReport,
    xField: 'students',
    yField: 'month',
    seriesField: 'month',
    color: '#34D399',
    barWidthRatio: 0.8,
    label: {
      position: 'middle',
      style: {
        fill: '#fff',
      },
    },
    barBackground: {
      style: {
        fill: '#F3F4F6',
      },
    },
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

  const histogramConfig = {
    data: monthlyReport,
    binField: 'students',
    binWidth: 20,
    color: '#3B82F6',
  };

  const lineConfig = {
    data: weeklyReport,
    xField: 'week',
    yField: 'students',
    color: '#10B981',
    smooth: true,
  };

  const attendanceConfig = {
    data: teacherAttendance,
    xField: 'attendance',
    yField: 'week',
    seriesField: 'week',
    color: '#6366F1',
    barWidthRatio: 0.8,
    label: {
      position: 'middle',
      style: {
        fill: '#fff',
      },
    },
    barBackground: {
      style: {
        fill: '#E5E7EB',
      },
    },
  };

  const performanceConfig = {
    data: teacherPerformance,
    xField: 'performance',
    yField: 'month',
    seriesField: 'month',
    color: '#EF4444',
    barWidthRatio: 0.8,
    label: {
      position: 'middle',
      style: {
        fill: '#fff',
      },
    },
    barBackground: {
      style: {
        fill: '#E5E7EB',
      },
    },
  };

  const studentPerformanceConfig = {
    data: studentPerformance,
    xField: 'performance',
    yField: 'month',
    seriesField: 'month',
    color: '#F59E0B',
    barWidthRatio: 0.8,
    label: {
      position: 'middle',
      style: {
        fill: '#fff',
      },
    },
    barBackground: {
      style: {
        fill: '#E5E7EB',
      },
    },
  };

  return (
    <Layout.Content className="p-6 bg-gray-100">
      <Space direction="vertical" size="large" className="w-full">
        <Row gutter={[16, 16]} className="mb-4">
          <Col span={6}>
            <Card className="shadow-md border border-gray-200">
              <Title level={4} className="text-gray-600">Total Teachers</Title>
              <Text className="text-2xl font-semibold text-green-500">{totalTeachers}</Text>
            </Card>
          </Col>
          <Col span={6}>
            <Card className="shadow-md border border-gray-200">
              <Title level={4} className="text-gray-600">Total Students</Title>
              <Text className="text-2xl font-semibold text-blue-500">{totalStudents}</Text>
            </Card>
          </Col>
          <Col span={6}>
            <Card className="shadow-md border border-gray-200">
              <Title level={4} className="text-gray-600">Total Staff</Title>
              <Text className="text-2xl font-semibold text-yellow-500">{totalTeachers}</Text>
            </Card>
          </Col>
          <Col span={6}>
            <Card className="shadow-md border border-gray-200">
              <Title level={4} className="text-gray-600">Total Administrators</Title>
              <Text className="text-2xl font-semibold text-red-500">{totalStudents}</Text>
            </Card>
          </Col>
        </Row>

        <Row gutter={[16, 16]} className="mb-4">
          <Col span={12}>
            <Card className="shadow-md border border-gray-200">
              <Title level={5} className="text-gray-600">Monthly Student Enrollment</Title>
              <Bar {...barConfig} />
            </Card>
          </Col>
          <Col span={12}>
            <Card className="shadow-md border border-gray-200">
              <Title level={5} className="text-gray-600">Weekly Student Enrollment</Title>
              <Line {...lineConfig} />
            </Card>
          </Col>
        </Row>

        <Row gutter={[16, 16]} className="mb-4">
          <Col span={12}>
            <Card className="shadow-md border border-gray-200">
              <Title level={5} className="text-gray-600">Teacher Attendance</Title>
              <Bar {...attendanceConfig} />
            </Card>
          </Col>
          <Col span={12}>
            <Card className="shadow-md border border-gray-200">
              <Title level={5} className="text-gray-600">Teacher Performance</Title>
              <Bar {...performanceConfig} />
            </Card>
          </Col>
        </Row>

        <Row gutter={[16, 16]} className="mb-4">
          <Col span={12}>
            <Card className="shadow-md border border-gray-200">
              <Title level={5} className="text-gray-600">Student Demographics</Title>
              <Pie {...pieConfig} />
            </Card>
          </Col>
          <Col span={12}>
            <Card className="shadow-md border border-gray-200">
              <Title level={5} className="text-gray-600">Student Performance</Title>
              <Bar {...studentPerformanceConfig} />
            </Card>
          </Col>
        </Row>
      </Space>
    </Layout.Content>
  );
};
