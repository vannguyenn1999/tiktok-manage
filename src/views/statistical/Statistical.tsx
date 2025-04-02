import { Label, Select } from "flowbite-react"
import ChartsBar from "./charts/ChartsBar"
import ChartsLine from "./charts/ChartsLine"
import ChartsPie from "./charts/ChartsPie"
import TableUser from "./TableUser"

const Statistical = () => {
  return (
    <>
      <div className="flex items-center justify-end mb-10 w-full bg-white p-3 rounded-xl">
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
        <ChartsLine title="Lượt xem trang" data={Array.from({ length: 10 }, () => Math.floor(Math.random() * 91) + 10)} height={200} />
        <ChartsLine title="Lượt xem" data={Array.from({ length: 10 }, () => Math.floor(Math.random() * 91) + 10)} height={200} />
        <ChartsLine title="Lượt thích" data={Array.from({ length: 10 }, () => Math.floor(Math.random() * 91) + 10)} height={200} />
        <ChartsLine title="Lượt chia sẻ" data={Array.from({ length: 10 }, () => Math.floor(Math.random() * 91) + 10)} height={200} />
        <ChartsLine title="Lượt bình luận" data={Array.from({ length: 10 }, () => Math.floor(Math.random() * 91) + 10)} height={200} />
        <ChartsPie title="Giới tính" data={Array.from({ length: 2 }, () => Math.floor(Math.random() * 91) + 2)} labels={["Nam", "Nữ"]} />
      </div>

      <div className="grid grid-cols-2 gap-4 mb-10">
        <ChartsBar data={Array.from({ length: 10 }, () => Math.floor(Math.random() * 91) + 10)} categories={[
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
      </div>

      <div className="bg-white p-3 rounded-xl">
        <TableUser />
      </div>
    </>
  )
}

export default Statistical