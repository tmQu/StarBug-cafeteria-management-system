import { PieChart } from "@mui/x-charts/PieChart";

const PieChartReport = () => {
  return (
    <div>
      <PieChart
        series={[
          {
            data: [
              { id: 0, value: 10, label: "Fail order" },
              { id: 1, value: 80, label: "Sucessfull" },
            ],
            innerRadius: 58,
            outerRadius: 100,
            paddingAngle: 5,
            cornerRadius: 5,
            startAngle: -90,
            endAngle: 180,
            cx: 130,
            cy: 150,
          },
        ]}
        width={390}
        height={300}
      />
      <div className="text-3xl font-semibold text-[#0E3746] relative left-20 -top-32">
        80%
      </div>
    </div>
  );
};

export default PieChartReport;
