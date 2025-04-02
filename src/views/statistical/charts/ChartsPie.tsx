import { FC, useState } from "react";
import ReactApexChart from "react-apexcharts";
import { ApexOptions } from "apexcharts";
import { Link, useLocation } from "react-router";
import { Icon } from "@iconify/react";

type ChartsPieProps = {
    title: string,
    data: number[],
    labels: string[],
    width: number

}


const ChartsPie: FC<ChartsPieProps> = ({ title, data, labels, width }) => {
    const location = useLocation()
    const pathname = location.pathname;

    const [state] = useState<{
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
        <div className='bg-white dark:bg-gray-200 rounded-xl p-4'>
            <div id="chart">
                <ReactApexChart options={state.options} series={state.series} type="pie" width={width} />
            </div>
            <div id="html-dist"></div>
            {
                pathname !== '/statistical' && (
                    <Link to={'/statistical'}>
                        <div className="flex items-center">
                            <Icon icon='solar:chart-2-bold' height={18} className="me-2" />
                            <span className="text-gray-900 dark:text-white">
                                Xem thống kê chi tiết
                            </span>
                        </div>
                    </Link>
                )
            }

        </div>
    );
};

export default ChartsPie;