import React from 'react';
import ReminderSection from './ReminderSection';
import AttendanceOverview from './AttendanceOverview';
import TodayRouting from './TodayRouting';
import ActivityTracking from './ActivityTracking';
import ExamRoutine from './ExamRoutine';

const Dashboard = () => {
  return (
    <div className=" w-full mx-auto mt-5">
      <h1 className="text-3xl font-semibold mb-4">Dashboard</h1>
      <ReminderSection />
      <AttendanceOverview />
      <TodayRouting />
      <ActivityTracking />
      <ExamRoutine />
    </div>
  );
};

export default Dashboard;
