import { randomDataCharts } from "src/helper/func";
import ChartsPie from "../statistical/charts/ChartsPie";
import PostPopular from "src/components/dashboard/PostPopular";
import Contact from "src/components/dashboard/Contact";


const Dashboard = () => {
  return (
    <>
      <div className="grid grid-cols-2 gap-3 mb-10">

        <ChartsPie title="BÀI ĐĂNG TUẦN NÀY" data={randomDataCharts(3)} labels={["Thành công", "Đang chờ", "Lỗi"]} width={450} />

        <div className='bg-white dark:bg-gray-200 rounded-xl p-4'>
          <span className="text-gray-900 dark:text-white">
            Thông báo của tôi

          </span>
        </div>
      </div>

      <>
        <PostPopular />
      </>

      <>
        <Contact />
      </>

    </>
  );
};

export default Dashboard;
