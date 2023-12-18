import BarChartReport from "../../components/charts/barChart.jsx";

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
    <div className="w-screen mx-auto pb-8 flex flex-col gap-8 bg-[#F4F2EC] bg-[url('../../public/assets/background.svg')]">
      <div className="w-[1260px] h-fit p-4 my-6 mx-auto grid grid-cols-3 gap-4 shadow-2xl rounded-xl">
        <div className="h-80 col-start-1 col-span-2 rounded-lg p-4 text-[#0E3746]">
          <h1 className="w-[70%] text-3xl font-semibold ">
            Keep track of the health of your business
          </h1>
          <h3 className="mb-3 mt-1">
            Control and analyze your data in the most covenient way.
          </h3>
          <div className="text-xl mt-6 flex flex-row justify-between">
            <h2 className="text-xl font-medium">Overview</h2>
            <div className="flex flex-row gap-2">
              <div className="h-8 w-16 rounded-lg bg-blue-gray-100"></div>
              <div className="h-8 w-16 rounded-lg bg-blue-gray-100"></div>
              <div className="h-8 w-16 rounded-lg bg-blue-gray-100"></div>
            </div>
          </div>
          <div className="mt-4 flex flex-row justify-around gap-4">
            <div className="w-48 h-32 bg-white rounded-xl p-2 flex flex-col justify-between">
              <h3 className="text-sm">Total Sales</h3>
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
            <div className="w-48 h-32 bg-white rounded-xl p-2 flex flex-col justify-between">
              <h3 className="text-sm">Total Orders</h3>
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
            <div className="w-48 h-32 bg-white rounded-xl p-2 flex flex-col justify-between">
              <h3 className="text-sm">Visitors</h3>
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
        <div className="h-80 col-start-3 col-span-1 rounded-lg bg-white">
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
        </div>
        <div className="h-80 col-start-1 col-span-2 rounded-lg bg-white p-4">
          <h2 className="text-xl font-medium">Reports</h2>
          <div className="w-full">
            <BarChartReport />
          </div>
        </div>
        <div className="h-80 col-start-3 col-span-1 flex flex-col gap-2 rounded-lg bg-white p-4">
          <h2 className="text-xl font-medium">Trends</h2>
          <div className="h-20 w-full rounded-xl bg-blue-gray-100"></div>
          <div className="h-20 w-full rounded-xl bg-blue-gray-100"></div>
          <div className="h-20 w-full rounded-xl bg-blue-gray-100"></div>
        </div>
      </div>
    </div>
  );
};

export default StatisticReport;
