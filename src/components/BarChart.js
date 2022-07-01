import { Bar } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";

function BarChart({ chartData }) {
    const options={
        responsive:true,
        maintainAspectRatio: false,
        scales:{
            y:{
                ticks:{
                   stepSize: 15 ,
                    display:false
                },
                grid:{
                    display:false,
                    drawBorder: false,
                },
                min:0,
            },
            x:{
                ticks:{
                   stepSize: 5 ,
                    display:false
                },
                grid:{
                    display:false,
                    drawBorder: false,
                },
                min:0,
            },
            yAxes:[{
                gridLines:{
                    drawBorder: false,
                    display:false
                }
            }],
            xAxes:[{
                gridLines:{
                    drawBorder: false,
                    display:false
                }
            }]
        },
        plugins:{
            legend:{
               display:false, 
            }
        }
    }
    
    
  return <Bar data={chartData} options={options}/>;
}

export default BarChart;