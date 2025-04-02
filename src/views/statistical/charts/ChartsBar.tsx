import ReactApexChart from "react-apexcharts";
import { FC, useState } from "react";
import { ApexOptions } from "apexcharts";

type ChartsBarProps = {
    data: number[],
    categories: string[],
    title: string
}

const ChartsBar: FC<ChartsBarProps> = ({ data, categories, title }) => {
    const [state,] = useState<{
        series: { data: number[] }[];
        options: ApexOptions;
    }>({
        series: [
            {
                data: data,
            },
        ],
        options: {
            chart: {
                type: "bar", // TypeScript now knows this is valid
                height: 300,
                toolbar: {
                    show: false, // Ẩn toolbar chứa nút tải xuống
                },
            },
            title: {
                text: title,
                align: 'left',
            },
            plotOptions: {
                bar: {
                    borderRadius: 4,
                    horizontal: true, // Removed invalid `borderRadiusApplication`
                },
            },
            dataLabels: {
                enabled: false,
            },
            xaxis: {
                categories: categories,
            },
            // colors: ["#288a38"],
        },
    });

    return (
        <div className='bg-white dark:bg-gray-200 rounded-xl p-4'>
            <div id="chart">
                <ReactApexChart
                    options={state.options}
                    series={state.series}
                    type="bar"
                    height={350}
                />
            </div>
            <div id="html-dist"></div>
        </div>
    );
};

export default ChartsBar;