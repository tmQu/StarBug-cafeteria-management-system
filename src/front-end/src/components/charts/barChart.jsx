import * as React from "react";
import { BarChart } from "@mui/x-charts/BarChart";
import { axisClasses } from "@mui/x-charts";

const chartSetting = {
  yAxis: [
    {
      label: "Revenue (million)",
    },
  ],
  width: 800,
  height: 350,
  sx: {
    [`.${axisClasses.left} .${axisClasses.label}`]: {
      transform: "translate(-10px, 0)",
    },
  },
};
const dataset = [
  {
    tea: 59,
    milktea: 57,
    coffee: 86,
    cake: 21,
    month: "Jan",
  },
  {
    tea: 59,
    milktea: 57,
    coffee: 86,
    cake: 21,
    month: "Fev",
  },
  {
    tea: 59,
    milktea: 57,
    coffee: 86,
    cake: 21,
    month: "Mar",
  },
  {
    tea: 59,
    milktea: 57,
    coffee: 86,
    cake: 21,
    month: "Apr",
  },
  {
    tea: 59,
    milktea: 57,
    coffee: 86,
    cake: 21,
    month: "May",
  },
  {
    tea: 59,
    milktea: 57,
    coffee: 86,
    cake: 21,
    month: "June",
  },
  {
    tea: 59,
    milktea: 57,
    coffee: 86,
    cake: 21,
    month: "July",
  },
  {
    tea: 59,
    milktea: 57,
    coffee: 86,
    cake: 21,
    month: "Aug",
  },
  {
    tea: 59,
    milktea: 57,
    coffee: 86,
    cake: 21,
    month: "Sept",
  },
  {
    tea: 59,
    milktea: 57,
    coffee: 86,
    cake: 21,
    month: "Oct",
  },
  {
    tea: 59,
    milktea: 57,
    coffee: 86,
    cake: 21,
    month: "Nov",
  },
  {
    tea: 59,
    milktea: 57,
    coffee: 86,
    cake: 21,
    month: "Dec",
  },
];

const valueFormatter = (value) => `${value}mm`;

export default function BarChartReport() {
  return (
    <BarChart
      dataset={dataset}
      xAxis={[{ scaleType: "band", dataKey: "month" }]}
      series={[
        { dataKey: "tea", label: "Tea", valueFormatter },
        { dataKey: "milktea", label: "Milktea", valueFormatter },
        { dataKey: "coffee", label: "Coffee", valueFormatter },
        { dataKey: "cake", label: "Cake", valueFormatter },
      ]}
      {...chartSetting}
    />
  );
}
