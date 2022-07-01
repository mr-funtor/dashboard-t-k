import RadarChart from './RadarChart';
import {singleData2} from '../data'

const SellingBox=({data})=>{
   return(
    <div className="h-auto bg-white w-96 rounded-lg p-7">
        <h3>Top Selling Categories</h3>
           
        <div className="mt-3 h-64">
           <RadarChart chartData={singleData2}/>
        </div>
           
     </div>
   ) 
}

export default SellingBox;