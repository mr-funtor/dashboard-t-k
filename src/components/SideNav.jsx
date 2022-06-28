import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBarChart } from '@fortawesome/free-regular-svg-icons'


const SideNav=()=>{
    return(
        <nav className="w-[300px] px-8 py-4 h-screen ">
            <h1 className="text-6xl font-bold mb-[50px]">RETRO </h1>
            
            <ul>
                <li className="flex px-6 py-1 bg-[#edeffa] rounded-md mb-2">
                    <i><FontAwesomeIcon icon={faBarChart} /></i>
                    
                    <p className="ml-4">Dashboard</p>
                </li>
                
                <li className="flex px-6 py-1 rounded-md mb-2">
                    <i><FontAwesomeIcon icon={faBarChart} /></i>
                    
                    <p className="ml-4">Products</p>
                </li>
                
                <li className="flex px-6 py-1 rounded-md mb-2">
                    <i><FontAwesomeIcon icon={faBarChart} /></i>
                    
                    <p className="ml-4">Blog</p>
                </li>
                
                <li className="flex px-6 py-1 rounded-md mb-2">
                    <i><FontAwesomeIcon icon={faBarChart} /></i>
                    
                    <p className="ml-4">Transactions</p>
                </li>
                
                <li className="flex px-6 py-1 rounded-md mb-2">
                    <i><FontAwesomeIcon icon={faBarChart} /></i>
                    
                    <p className="ml-4">Users</p>
                </li>
                
                
                <li className="flex px-6 py-1 rounded-md mb-2">
                    <i><FontAwesomeIcon icon={faBarChart} /></i>
                    
                    <p className="ml-4">Analysis</p>
                </li>
                
                <li className="flex justify-between px-6 py-1 rounded-md mb-2">
                    <div className="flex">
                    <i><FontAwesomeIcon icon={faBarChart} /></i>
                    
                    <p className="ml-4">Reports</p>
                    </div>
                    
                    <i><FontAwesomeIcon icon={faBarChart} /> </i>
                </li>
                
                <li className="flex px-6 py-1  rounded-md mb-2">
                    <i><FontAwesomeIcon icon={faBarChart} /></i>
                    
                    <p className="ml-4">Investment</p>
                </li>
                
                <li className="flex px-6 py-1 rounded-md mb-2">
                    <i><FontAwesomeIcon icon={faBarChart} /></i>
                    
                    <p className="ml-4">Settings</p>
                </li>
            
            </ul>
        </nav>
    )
}

export default SideNav;