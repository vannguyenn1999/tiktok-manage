import { FC, useState } from "react";
import ReactApexChart from "react-apexcharts";
import { ApexOptions } from "apexcharts";

type ChartsPieProps = {
    title: string,
    data: number[],
    labels: string[]

}


const ChartsPie: FC<ChartsPieProps> = ({ title, data, labels }) => {
    const [state, setState] = useState<{
        series: number[];
        options: ApexOptions;
    }>({
        series: data,
        options: {
            chart: {
                width: 300,
                type: 'pie', // TypeScript now knows this is valid
            },
            title: {
                text: title
            },
            labels: labels,
            responsive: [
                {
                    breakpoint: 480,
                    options: {
                        chart: {
                            width: 200,
                        },
                        legend: {
                            position: 'bottom',
                        },
                    },
                },
            ],
        },
    });

    return (
        <div className='bg-white rounded-xl p-4'>
            <div id="chart">
                <ReactApexChart options={state.options} series={state.series} type="pie" width={300} />
            </div>
            <div id="html-dist"></div>
        </div>
    );
};

export default ChartsPie;