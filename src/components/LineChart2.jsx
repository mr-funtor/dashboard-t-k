import { Line } from "react-chartjs-2";
import { Bar} from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";

function LineChart({ chartData }) {
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
                }
            }],
            xAxes:[{
                gridLines:{
                    drawBorder: false,
                }
            }]
        },
        plugins:{
            legend:{
               display:false, 
            }
        },
        
    }
   
    
  return <Line data={chartData} options={options}/>;
}

export default LineChart;