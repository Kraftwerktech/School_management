import React from 'react';
import ReminderSection from './ReminderSection';
import AttendanceOverview from './AttendanceOverview';
import TodayRouting from './TodayRouting';
import ActivityTracking from './ActivityTracking';
import ExamRoutine from './ExamRoutine';

const Dashboard = () => {
  return (
    <div className="mx-auto w-full mt-5">
      <div className="mr-[47px]">
        <h1 className="text-[31px] font-semibold mb-4">Dashboard</h1>
        <ReminderSection />
        <AttendanceOverview />
        <TodayRouting />
        <ActivityTracking />
        <ExamRoutine />
      </div>
    </div>
  );
};

export default Dashboard;
