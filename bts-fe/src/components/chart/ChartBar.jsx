import React, { useState } from 'react';
import { Chart } from 'chart.js/auto';
import { CategoryScale } from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { data } from "../../data";

Chart.register(CategoryScale);
function ChartBar() {
  const [chartData, setChartData] = useState({
    labels: data.dataChart.map((vdata) => vdata.weekday),
    datasets: [
      {
        label: "Doanh thu(VND)",
        data: data.dataChart.map((vdata) => vdata.userGain),
        backgroundColor: [
          "#CD853F",
          "#50AF95",
          "#f3ba2f",
          "#2a71d0",
          "#836FFF",
          "#00FFFF",
          "#8DEEEE"
        ],
        borderColor: "black",
        borderWidth: 2
      }]
  });
  return (
    <React.Fragment>
      <div className="chart-container">
        <Bar
          data={chartData}
          options={{
            plugins: {
              title: {
                display: true,
                text: "Doanh thu trong 1 tuần"
              },
              legend: {
                display: true
              }
            }
          }}
        />
      </div>
    </React.Fragment>

  )


}

export default ChartBar;
