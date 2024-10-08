import React, { useState } from 'react';
import {
  PieChart,
  Pie,
  Cell,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from 'recharts';
import { CiCalendar } from "react-icons/ci";
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

// Pie chart data
const pieData = [
  { name: '2 activities are incomplete in the last week.', value: 85 },
  { name: '2 activities are incomplete', value: 5 },
  { name: '2 activities are incomplete', value: 7 },
  { name: '2 activities are incomplete', value: 3 },
];

// Bar chart data with multiple groups for each day
const barData = [
  { name: 'Sunday', classXGroupA: 85, classXGroupB: 65, classYGroupA: 85 },
  { name: 'Monday', classXGroupA: 90, classXGroupB: 80, classYGroupA: 70 },
  { name: 'Tuesday', classXGroupA: 65, classXGroupB: 75, classYGroupA: 60 },
  { name: 'Wednesday', classXGroupA: 85, classXGroupB: 90, classYGroupA: 80 },
  { name: 'Thursday', classXGroupA: 95, classXGroupB: 85, classYGroupA: 75 },
];

// Define colors for each group in the bar chart
const BAR_COLORS = ['#C4D3C9', '#E7E8D1', '#EAC9C4'];
const COLORS = ['#98C8AB', '#BB5042', '#C97368', '#D18A80']; // Pie chart colors

const ActivityTracking = () => {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  return (
    <div className="flex flex-col lg:flex-row items-start gap-5 mb-4">
      {/* Pie Chart Section */}
      <div className="p-6 border-[1px] bg-white w-full lg:w-[45%] rounded-[8px]">
        <div className=' justify-between flex items-center'>
          <div><span className='text-[#465049] font-bold text-[20px]'>Today's Activity Tracking</span></div>
          <div>
            <span className=' text-[#A4A594] text-[14px]'>From 1 January to Today</span>
          </div>
        </div>
       
        <div className="my-4 flex justify-center">
          {/* Pie Chart */}
          <ResponsiveContainer width="100%" height={450}>
            <PieChart>
              <Pie
                data={pieData}
                cx="50%"
                cy="55%"
                innerRadius={60}
                outerRadius={140}
                dataKey="value"
                labelLine={false}
                label={({ cx, cy }) => (
                  <text
                    x={cx}
                    y={cy - 10}
                    textAnchor="middle"
                    dominantBaseline="middle"
                    className="text-center text-[31px] text-[#9e9e9b] font-bold"
                  >
                    85%
                    <tspan
                      x={cx}
                      dy="3em"
                      className="text-[12px] text-[#9e9e9b]"
                    >
                      Complete
                    </tspan>
                  </text>
                )}
              >
                {pieData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip
                contentStyle={{
                  backgroundColor: '#B9CBBE',
                  borderRadius: '8px',
                  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
                  padding: '10px',
                  border: 'none',
                  width: '220px',
                  margin: '20px',
                  position: 'relative',
                  textAlign: 'center',
                  textShadow: '#465049',
                }}
                formatter={(value, name) => [value, name]}
                cursor={false}
                wrapperStyle={{ 
                  pointerEvents: 'none',
                  overflow: 'visible',
                }}
                position={{ x: 140, y: 47 }}
                itemStyle={{
                  color: '#3E6259',
                  fontWeight: '500',
                }}
                separator=""
              />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Bar Chart Section */}
      <div className="p-6 bg-white h-[563px] rounded-[8px] w-full border-[1px]">
        <div className="flex justify-between items-center">
          <span className="text-[#465049] ml-[50px] text-[20px] font-semibold">Weekly Activity Tracking Progress</span>
          <div className="relative flex items-center gap-4">
            {/* Date Picker for Range */}
            <div className="relative">
            <DatePicker
  selected={startDate}
  onChange={(update) => {
    const [start, end] = update; // Destructure the update array
    setStartDate(start); // Set the start date
    setEndDate(end); // Set the end date
  }}
  selectsRange // Enable range selection
  startDate={startDate} // Current start date
  endDate={endDate} // Current end date
  className="appearance-none px-8 py-3 outline-none border bg-transparent border-slate-300 rounded-md text-gray-700 focus:border-[#BB5042] w-[220px] pr-[60px] h-[55px]"
  placeholderText="Select Date Range" // Placeholder text
  dateFormat="dd MMM" // Date format
/>

              <CiCalendar className="absolute w-7 h-7 text-[#BB5042] right-3 top-1/2 transform -translate-y-1/2 pointer-events-none" />
            </div>
          </div>
        </div>

        {/* Bar Chart */}
        <div className="my-4">
          <ResponsiveContainer width="100%" height={450}>
            <BarChart data={barData} margin={{ top: 20, right: 30, left: 20, bottom: 10 }}>
              <XAxis dataKey="name" tick={{ fontWeight: '600' }} />
              <YAxis  label={{ value: 'Percentage', angle: -90, position: 'insideLeft', offset: 10 }} />
              <Legend
  align="right"
  layout="vertical"
  verticalAlign="middle"
  iconType="rect" // Rectangle icons
  iconSize={20} // Size of the icons
  wrapperStyle={{
    paddingLeft: '10px',
    display: 'flex',
    flexDirection: 'column',
  }}
  contentStyle={{
    marginBottom: '200px', // Ensure proper spacing
  }}
  itemStyle={{
    marginBottom: '200px', // Minimum gap between each item
  }}
/>


              <Bar dataKey="classXGroupA" fill={BAR_COLORS[0]} barSize={30} />
              <Bar dataKey="classXGroupB" fill={BAR_COLORS[1]} barSize={30} />
              <Bar dataKey="classYGroupA" fill={BAR_COLORS[2]} barSize={30} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default ActivityTracking;
