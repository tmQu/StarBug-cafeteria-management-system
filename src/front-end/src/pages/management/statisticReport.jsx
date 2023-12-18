import BarChartReport from "../../components/charts/barChart.jsx";
import PieChartReport from "../../components/charts/pieChart.jsx";

const StatisticReport = () => {
  const totalSales = 456.456;
  const totalOrders = 345.345;
  const visitors = 234.234;

  const sucessfullOrder = 0;
  const unsucessfullOrder = 0;

  const top3Trends = [
    {
      image: "",
      name: "Macbook M2 Pro",
      trend: 15,
    },
    {
      image: "",
      name: "iPhone 14",
      trend: 7,
    },
    {
      image: "",
      name: "Camera Lens",
      trend: 2,
    },
  ];
  return (
    <div className="w-screen mx-auto flex flex-col gap-8 bg-[#F4F2EC] bg-[url('../../public/assets/background.svg')]">
      <div className="w-fit h-fit p-4 my-6 mx-auto grid grid-cols-3 gap-4 bg-[#F4F2EC] text-[#0E3746] shadow-2xl rounded-xl">
        <div className="h-80 col-start-1 col-span-2 rounded-lg">
          <div className="p-4 pb-0">
            <h1 className="w-[70%] text-3xl font-semibold ">
              Keep track of the health of your business
            </h1>
            <h3 className="mb-3 mt-1">
              Control and analyze your data in the most covenient way.
            </h3>
            <div className="text-xl mt-6 flex flex-row justify-between">
              <h2 className="text-xl font-medium">Overview</h2>
              <div className="flex flex-row gap-2">
                <div className="h-8 w-16 text-base pt-0.5 flex justify-center items-center rounded-lg bg-white border-[#E9EDF7] border">
                  Week
                </div>
                <div className="h-8 w-16 text-base pt-0.5 flex justify-center items-center rounded-lg bg-white border-[#E9EDF7] border">
                  Month
                </div>
                <div className="h-8 w-16 text-base pt-0.5 flex justify-center items-center rounded-lg bg-white border-[#E9EDF7] border">
                  Year
                </div>
              </div>
            </div>
          </div>
          <div className="w-full mt-4 flex flex-row justify-around gap-4">
            <div className="w-full h-32 bg-white border-[#E9EDF7] border rounded-xl p-3 flex flex-col justify-between">
              <div className="flex flex-row gap-1">
                <img
                  src="/assets/bill-icon.png"
                  alt="Bill"
                  className="h-4 w-4"
                ></img>
                <h3 className="text-sm">Total Sales</h3>
              </div>
              <div className="text-2xl text-center font-medium">
                ${totalSales}
              </div>
              <div className="text-sm text-[#4ACA61] flex flex-row">
                <img
                  src="/assets/uptrend-icon.png"
                  className="h-4 w-4 mr-1"
                  alt="Trend"
                ></img>
                <div className="flex flex-row">
                  <p>+12%</p>
                  <p className="text-[#0E3746] ml-1">on this month</p>
                </div>
              </div>
            </div>
            <div className="w-full h-32 bg-white border-[#E9EDF7] border rounded-xl p-3 flex flex-col justify-between">
              <div className="flex flex-row gap-1">
                <img
                  src="/assets/order-icon.png"
                  alt="Bill"
                  className="h-4 w-4"
                ></img>
                <h3 className="text-sm">Total Orders</h3>
              </div>
              <div className="text-2xl text-center font-medium">
                ${totalOrders}
              </div>
              <div className="text-sm text-[#4ACA61] flex flex-row">
                <img
                  src="/assets/uptrend-icon.png"
                  className="h-4 w-4 mr-1"
                  alt="Trend"
                ></img>
                <div className="flex flex-row">
                  <p>+12%</p>
                  <p className="text-[#0E3746] ml-1">on this month</p>
                </div>
              </div>
            </div>
            <div className="w-full h-32 bg-white border-[#E9EDF7] border rounded-xl p-3 flex flex-col justify-between">
              <div className="flex flex-row gap-1">
                <img
                  src="/assets/visitors-icon.png"
                  alt="Bill"
                  className="h-4 w-4"
                ></img>
                <h3 className="text-sm">Visitors</h3>
              </div>
              <div className="text-2xl text-center font-medium">
                ${visitors}
              </div>
              <div className="text-sm text-[#4ACA61] flex flex-row">
                <img
                  src="/assets/uptrend-icon.png"
                  className="h-4 w-4 mr-1"
                  alt="Trend"
                ></img>
                <div className="flex flex-row">
                  <p>+12%</p>
                  <p className="text-[#0E3746] ml-1">on this month</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="h-80 col-start-3 col-span-1 rounded-lg bg-white border-[#E9EDF7] border">
          <div className="w-full p-4 flex flex-row justify-between">
            <h2 className="text-xl font-medium">Analytics</h2>
            <button>
              <img
                className="w-4 h-4"
                alt="Menu Icon"
                src="/assets/dots-icon.png"
              ></img>
            </button>
          </div>
          <div className="w-full h-full">
            <PieChartReport />
          </div>
        </div>
        <div className="h-80 col-start-1 col-span-2 rounded-lg bg-white border-[#E9EDF7] border p-4">
          <h2 className="text-xl font-medium">Reports</h2>
          <div className="w-full">
            <BarChartReport />
          </div>
        </div>
        <div className="h-80 col-start-3 col-span-1 flex flex-col gap-2 rounded-lg bg-white border-[#E9EDF7] border p-4">
          <div className="w-full flex flex-row justify-between">
            <h2 className="text-xl font-medium">Trends</h2>
            <button>
              <img
                className="w-4 h-4"
                alt="Menu Icon"
                src="/assets/dots-icon.png"
              ></img>
            </button>
          </div>
          {top3Trends.map((item) => (
            <div className="h-20 w-full rounded-xl border p-4 flex flex-row justify-between items-center gap-3">
              <div className="flex flex-row gap-2 justify-start items-center">
                <img
                  src="/assets/bill-icon.png"
                  alt="Product 1"
                  className="h-10 w-10"
                ></img>
                <div className="text-lg">{item.name}</div>
              </div>
              <div className="flex flex-row gap-0.5">
                <img
                  src="/assets/uptrend-icon.png"
                  alt="Product 1"
                  className="h-3 w-3 mt-0.5"
                ></img>
                <div className="text-sm">{item.trend}$</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StatisticReport;
