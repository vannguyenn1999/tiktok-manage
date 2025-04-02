import ReactApexChart from 'react-apexcharts';
import { FC, useState } from 'react';
import { ApexOptions } from 'apexcharts';

type ChartsProps = {
    title: string,
    data: number[],
    height: number
}

const ChartsLine: FC<ChartsProps> = ({ title, data, height }) => {
    const [state, setState] = useState<{
        series: { name: string; data: number[] }[];
        options: ApexOptions;
    }>({
        series: [
            {
                name: "",
                // data: [10, 41, 35, 51, 49, 62, 69, 91, 190],
                data: data
            },
        ],
        options: {
            chart: {
                height: 300,
                type: 'line', // TypeScript now knows this is valid
                zoom: {
                    enabled: false,
                },
                toolbar: {
                    show: false, // Ẩn toolbar chứa nút tải xuống
                },
            },
            dataLabels: {
                enabled: false,
            },
            stroke: {
                curve: 'straight',
            },
            title: {
                text: title,
                align: 'left',
            },
            grid: {
                row: {
                    colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
                    opacity: 0.5,
                },
            },
            xaxis: {
                // categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
                labels: { show: false }, // Ẩn nhãn trục X
                axisBorder: { show: false }, // Ẩn đường biên trục X
                axisTicks: { show: false }, // Ẩn vạch đánh dấu trên trục X
            },
            yaxis: {
                labels: { show: false }, // Ẩn nhãn trục Y
                axisBorder: { show: false }, // Ẩn đường biên trục Y
                axisTicks: { show: false }, // Ẩn vạch đánh dấu trên trục Y
            },
            // colors: ["#288a38"],
        },
    });

    return (
        <div className='bg-white rounded-xl p-4'>
            <div id="chart">
                {/* width="50%" */}
                <ReactApexChart options={state.options} series={state.series} type="line" height={height} />
            </div>
            <div id="html-dist"></div>
        </div>
    );
};

export default ChartsLine;