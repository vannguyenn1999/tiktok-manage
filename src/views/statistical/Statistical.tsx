import { Button, Select } from "flowbite-react"
import { Icon } from "@iconify/react";


import ChartsBar from "./charts/ChartsBar"
import ChartsLine from "./charts/ChartsLine"
import ChartsPie from "./charts/ChartsPie"
import TableUser from "./TableUser"
import ChartsColumn from "./charts/ChartsColumn"
import { randomDataCharts } from "src/helper/func"

const Statistical = () => {
  return (
    <>
      <div className="flex items-center justify-end mb-10 w-full bg-white dark:bg-gray-200 p-3 rounded-xl">
        <div className="max-w-md">
          <Select id="countries" required>
            <option>7 Ngày trước</option>
            <option>28 Ngày trước</option>
            <option>60 Ngày trước</option>
            <option>365 Ngày trước</option>
          </Select>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-3 mb-10">
        <ChartsLine title="Lượt xem trang" data={randomDataCharts(10)} height={200} />
        <ChartsLine title="Lượt xem" data={randomDataCharts(10)} height={200} />
        <ChartsLine title="Lượt thích" data={randomDataCharts(10)} height={200} />
        <ChartsLine title="Lượt chia sẻ" data={randomDataCharts(10)} height={200} />
        <ChartsLine title="Lượt bình luận" data={randomDataCharts(10)} height={200} />
        <ChartsPie title="Giới tính" data={randomDataCharts(2)} labels={["Nam", "Nữ"]} width={300} />
      </div>

      <div className="grid grid-cols-2 gap-4 mb-10">
        <ChartsBar data={randomDataCharts(10)} categories={[
          "South Korea",
          "Canada",
          "United Kingdom",
          "Netherlands",
          "Italy",
          "France",
          "Japan",
          "United States",
          "China",
          "Germany",
        ]} title="Quốc gia" />
        <ChartsBar data={Array.from({ length: 5 }, () => Math.floor(Math.random() * 5) + 5)} categories={[
          "18-24",
          "25-34",
          "35-44",
          "45-54",
          "55 +",
        ]} title="Độ tuổi" />

        <ChartsColumn title="Thời gian xem nhiều nhất" data={randomDataCharts(12)} categories={["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]} />
        <ChartsColumn title="Thời gian hoạt động nhiều nhất" data={randomDataCharts(12)} categories={["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]} />

      </div>

      <div>

      </div>
      <div className="bg-white dark:bg-gray-200 p-3 rounded-xl">
        <div className="flex items-start justify-end my-2">
          <Button> <Icon icon='solar:export-bold' height={18} /> Xuất dữ liệu</Button>
        </div>
        <TableUser />
      </div>
    </>
  )
}

export default Statistical