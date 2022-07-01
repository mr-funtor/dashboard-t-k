import BarChart from './BarChart';
import LineChart from './LineChart2';

const Card=({data})=>{
    const {properties,chartType,title,value}=data;
    
   return(
    <div className="h-[140px] flex text-black hover:text-white bg-white hover:bg-gradient-to-r from-[#2e8ee9] to-[#4b62d2] w-[280px] rounded-lg p-6 cursor-pointer">
        <div className="w-[50%]  h-full flex flex-col justify-between py-2">
            <p>{title}</p>
            <h2 className="text-3xl">$ {value}</h2>
        </div>
        
        <div className="w-[50%]">
           {chartType==='Bar' && <BarChart chartData={properties} />}
           {chartType==='Line' && <LineChart chartData={properties} />}
        </div>
        
     </div>
   ) 
}

export default Card