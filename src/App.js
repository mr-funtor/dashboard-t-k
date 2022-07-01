import {useState} from 'react';
import {UserData} from './data'

//components
import SideNav from './components/SideNav'
import Search from './components/Search'
import Profile from './components/Profile'
import Overview from './components/Overview'
import BarChart from './components/BarChart'
import Card from './components/Card'
import SellingBox from './components/SellingBox'

//icons

function App() {
    const [userData,setUserData]=useState({
        labels:UserData.map(data=>data.year),
        datasets:[{
            label:'users gain',
            data:UserData.map(data=>data.userGain)
        }]
    })
    
  return (
    <div className="flex">
      <SideNav />
      <div className="flex-1 bg-[#f4f8fc] h-screen rounded-tl-lg px-5 py-4">
      
          <section className="flex justify-between">
            <Search />
            <Profile />
          </section>
      
          <Overview />
          <Card title={'Daile Income'} amount={345} data={'ko'}/>
          
          <div className="mt-8">
            
          </div>
      
      </div>
    </div>
  );
}

export default App;

//<BarChart chartData={userData}/>