import React from 'react';
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

// Pie chart data
const pieData = [
  { name: 'Completed', value: 85 },
  { name: 'Incomplete', value: 5 },
  { name: 'Progress', value: 7 },
  { name: 'Rejected', value: 3 },
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
  return (
    <div className="flex items-center gap-5 mb-4">
      {/* Pie Chart Section */}
      <div className="p-6 border-[1px] bg-white w-[30%] rounded-[8px] text-center">
        <p className="text-[#465049] text-[20px] font-semibold mb-4">Today's Activity Tracking</p>
        <div className="my-4 flex justify-center">
          {/* Pie Chart */}
          <ResponsiveContainer width="100%" height={290}>
            <PieChart>
              <Pie
                data={pieData}
                cx="50%"
                cy="50%"
                innerRadius={50}
                outerRadius={100}
                dataKey="value"
                labelLine={false}
                // Center the label and customize it
                label={({ cx, cy }) => (
                  <text
                    x={cx}
                    y={cy - 10} // Adjusting position for better alignment
                    textAnchor="middle"
                    dominantBaseline="middle"
                    className="text-center text-[30px] text-[#71716d] font-bold"
                  >
                    85%
                    <tspan
                      x={cx}
                      dy="2em"
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
              {/* Custom Tooltip */}
              <Tooltip
                contentStyle={{
                  backgroundColor: '#B9CBBE',
                  border: 'none',
                }}
                formatter={(value, name) => [value, name]}
                cursor={false}
                wrapperStyle={{ pointerEvents: 'none' }}
              />
            </PieChart>
          </ResponsiveContainer>
        </div>
        <p className="text-sm text-gray-500">85% of the activities are completed</p>
      </div>

      {/* Bar Chart Section */}
      <div className="p-6 bg-white h-[420px] rounded-[8px] w-[100%] border-[1px]">
        <p className="text-[#465049] text-[20px] font-semibold text-center mb-4">Weekly Activity Tracking Progress</p>
        <div className="my-4">
          <div></div>
          {/* Bar Chart */}
          <ResponsiveContainer width="96%" height={320}>
            <BarChart data={barData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
              <XAxis dataKey="name" />
              <YAxis />
              {/* Tooltip for bar chart */}
              <Tooltip
                contentStyle={{
                  backgroundColor: '#FFFF',
                }}
                formatter={(value, name) => [value, name]}
                cursor={false}
              />
              <Legend align="right" fontSize="20" layout="vertical" verticalAlign="middle" />
              <Bar
                dataKey="classXGroupA"
                fill={BAR_COLORS[0]}
                barSize={30}
                // Prevent color change on hover
                isAnimationActive={false} 
                // Tooltip will show without hover effect
                onMouseOver={() => {}}
              />
              <Bar
                dataKey="classXGroupB"
                fill={BAR_COLORS[1]}
                barSize={30}
                isAnimationActive={false} 
                onMouseOver={() => {}}
              />
              <Bar
                dataKey="classYGroupA"
                fill={BAR_COLORS[2]}
                barSize={30}
                isAnimationActive={false} 
                onMouseOver={() => {}}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default ActivityTracking;
