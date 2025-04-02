import { ApexOptions } from "apexcharts";
import { FC, useState } from "react";
import ReactApexChart from "react-apexcharts";

type ChartsColumnProps = {
    title: string,
    data: number[],
    categories: string[]
}


const ChartsColumn: FC<ChartsColumnProps> = ({ title, data, categories }) => {
    const [state] = useState<{
        series: { name: string; data: number[] }[];
        options: ApexOptions;
    }>({

        series: [{
            name: 'Inflation',
            data: data
        }],
        options: {
            chart: {
                height: 350,
                type: 'bar',
                toolbar: {
                    show: false, // Ẩn toolbar chứa nút tải xuống
                },
            },
            plotOptions: {
                bar: {
                    borderRadius: 10,
                    dataLabels: {
                        position: 'top', // top, center, bottom
                    },
                }
            },
            dataLabels: {
                enabled: true,
                formatter: function (val) {
                    return val + "%";
                },
                offsetY: -20,
                style: {
                    fontSize: '12px',
                    colors: ["#304758"]
                }
            },

            xaxis: {
                categories: categories,

                position: 'top',
                axisBorder: {
                    show: false
                },
                axisTicks: {
                    show: false
                },
                crosshairs: {
                    fill: {
                        type: 'gradient',
                        gradient: {
                            colorFrom: '#D8E3F0',
                            colorTo: '#BED1E6',
                            stops: [0, 100],
                            opacityFrom: 0.4,
                            opacityTo: 0.5,
                        }
                    }
                },
                tooltip: {
                    enabled: true,
                }
            },
            yaxis: {
                axisBorder: {
                    show: false
                },
                axisTicks: {
                    show: false,
                },
                labels: {
                    show: false,
                    formatter: function (val) {
                        return val + "%";
                    }
                }

            },
            title: {
                text: title,
                floating: true,
                offsetY: 330,
                align: 'center',
                style: {
                    color: '#444'
                }
            }
        },


    });



    return (
        <div className='bg-white dark:bg-gray-200 rounded-xl p-4'>
            <div id="chart">
                <ReactApexChart options={state.options} series={state.series} type="bar" height={350} />
            </div>
            <div id="html-dist"></div>
        </div>
    );
}

export default ChartsColumn