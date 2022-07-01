import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBarChart,faFlag,faArrowAltCircleDown } from '@fortawesome/free-regular-svg-icons';
import { FaBeer } from 'react-icons/fa';
import { FiChevronDown,FiUsers } from "react-icons/fi";
import { IoAnalytics,IoBriefcaseOutline,IoSettingsOutline } from "react-icons/io5";
import { AiOutlineShop,AiOutlineShoppingCart } from "react-icons/ai";
import { BiWallet } from "react-icons/bi";


const SideNav=()=>{
    return(
        <nav className="w-[300px] px-8 py-4 h-screen ">
            <h1 className="text-6xl font-bold mb-[50px]">RETRO </h1>
            
            <ul>
                <li className="flex px-6 py-1 hover:bg-[#edeffa] rounded-md mb-2 items-center">
                    <i><IoAnalytics /></i>
                    
                    <p className="ml-4">Dashboard</p>
                </li>
                
                <li className="flex px-6 py-1 rounded-md mb-2 hover:bg-[#edeffa] items-center">
                    <i><AiOutlineShop/></i>
                    
                    <p className="ml-4">Products</p>
                </li>
                
                <li className="flex px-6 py-1 rounded-md mb-2 hover:bg-[#edeffa] items-center">
                    <i><AiOutlineShoppingCart /></i>
                    
                    <p className="ml-4">Blog</p>
                </li>
                
                <li className="flex px-6 py-1 rounded-md mb-2 hover:bg-[#edeffa] items-center">
                    <i><BiWallet /></i>
                    
                    <p className="ml-4">Transactions</p>
                </li>
                
                <li className="flex px-6 py-1 rounded-md mb-2 hover:bg-[#edeffa] items-center">
                    <i><FiUsers /></i>
                    
                    <p className="ml-4">Users</p>
                </li>
                
                
                <li className="flex px-6 py-1 rounded-md mb-2 hover:bg-[#edeffa] items-center">
                    <i><FontAwesomeIcon icon={faBarChart} /></i>
                    
                    <p className="ml-4">Analysis</p>
                </li>
                
                <li className="flex justify-between px-6 py-1 rounded-md mb-2 items-center hover:bg-[#edeffa] items-center">
                    <div className="flex">
                    <i><FontAwesomeIcon icon={faFlag} /></i>
                    
                    <p className="ml-4">Reports</p>
                    </div>
                    
                    <i><FiChevronDown/> </i>
                </li>
                
                <li className="flex px-6 py-1  rounded-md mb-2 hover:bg-[#edeffa] items-center">
                    <i><IoBriefcaseOutline /></i>
                    
                    <p className="ml-4">Investment</p>
                </li>
                
                <li className="flex px-6 py-1 rounded-md mb-2 hover:bg-[#edeffa] items-center">
                    <i><IoSettingsOutline /></i>
                    
                    <p className="ml-4">Settings</p>
                </li>
            
            </ul>
        </nav>
    )
}

export default SideNav;