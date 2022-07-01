import {useState} from 'react';
import {userData} from './data';

//components
import SideNav from './components/SideNav'
import Search from './components/Search'
import Profile from './components/Profile'
import Overview from './components/Overview'
import BarChart from './components/BarChart'
import Card from './components/Card'
import SellingBox from './components/SellingBox'
import SingleProduct from './components/SingleProduct'


//icons

function App() {
    
  return (
    <div className="flex">
      <SideNav />
      <div className="flex-1 bg-[#f4f8fc] h-auto rounded-tl-lg px-5 py-4">
      
          <section className="flex justify-between">
            <Search />
            <Profile />
          </section>
      
          <Overview />
          
          <div className="flex justify-between flex-wrap">
              
            
            {
                userData.map((data)=>{

                    return <Card data={data} />
                })      
            }
          </div>
          
          <div className="mt-8 flex gap-x-[20px] ">
            <SellingBox/>
              
              <div className="flex-1 bg-white h-auto p-7 rounded-lg">
            {
                userData.map((data)=>{

                    return <SingleProduct/>
                })      
            }
                
              </div>
          </div>
          
      
      </div>
    </div>
  );
}

export default App;

//<BarChart chartData={userData}/>