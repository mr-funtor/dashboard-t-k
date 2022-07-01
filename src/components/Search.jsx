import { BiSearch} from "react-icons/bi";

const Search=()=>{
   return(
    <div className="bg-[#e8eef4] w-60 h-10 rounded-md flex items-center px-4 ">
        <input className="bg-transparent" type="search" placeholder="Search..."/>
           <i><BiSearch/></i>
     </div>
   ) 
}

export default Search