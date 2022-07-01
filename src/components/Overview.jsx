import {useState} from 'react'
import LineChart from './LineChart'
import {singleData} from '../data'

const Overview=()=>{


    
    return(
    <section className="bg-white h-72 mt-4 rounded-lg mb-8">
        <header className="flex justify-between p-3">
            <h3 className="font-bold">Sales Overview</h3>
            <button className="w-44 h-8 bg-gradient-to-r from-[#2e8ee9] to-[#4b62d2] flex items-center justify-center rounded-md text-white"><i className="mr-2">+</i> Add Offer</button>
        </header>
        <hr/>
        <div className="p-4 flex justify-between">
            <div>
                <h2 className="text-3xl font-bold">$80,630</h2>
            </div>
            
            <div className="flex bg-red-500 w-80 flex justify-between">
                <p><i>o</i>Incomes</p>
                <p><i>o</i>Expenses</p>
                <select className="w-28">
                    <option>Year</option>
                </select>
            </div>
                
        </div>
            
        <div className="h-[160px]  relative">
            <LineChart className="bg-red-400" chartData={singleData}/>    
        </div>
    </section>
    )
}

export default Overview;