import {useState} from 'react';
import LineChart from './LineChart';
import {singleData} from '../data';
import { AiOutlinePlus } from "react-icons/ai";
import { MdArrowUpward } from "react-icons/md";
import { GoPrimitiveDot } from "react-icons/go";

const Overview=()=>{


    
    return(
    <section className="bg-white h-72 mt-4 rounded-lg mb-8">
        <header className="flex justify-between p-3">
            <h3 className="font-bold">Sales Overview</h3>
            <button className="w-44 h-8 bg-gradient-to-r from-[#2e8ee9] to-[#4b62d2] flex items-center justify-center rounded-md text-white"><i className="mr-2"><AiOutlinePlus/></i> Add Offer</button>
        </header>
        <hr/>
        <div className="p-4 flex justify-between">
            <div className="flex items-center">
                <h2 className="text-3xl font-bold mr-3">$80,630</h2>
                <i className="text-[#5bc9c6] bg-[#e5f6f5] p-1 rounded-full mr-3"><MdArrowUpward/></i>
                <p className="text-[#5bc9c6]">+6.7%</p>
            </div>
            
            <div className="flex w-80 flex justify-between">
                <p className="flex items-center"><i className="text-[#3d78de]"><GoPrimitiveDot/></i>Incomes</p>
                <p className="flex items-center"><i className="text-[#dd5099]"><GoPrimitiveDot/></i>Expenses</p>
                <select className="w-32 border-[1px] border-black rounded-md">
                    <option>Year</option>
                </select>
            </div>
                
        </div>
            
        <div className="h-[160px] px-3 relative">
            <LineChart className="bg-red-400" chartData={singleData}/>    
        </div>
    </section>
    )
}

export default Overview;