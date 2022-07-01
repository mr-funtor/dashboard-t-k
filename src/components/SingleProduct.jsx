import theImage from '../assets/images/handboy.png'

const SingleProduct=()=>{
   return(
    <article className="w-full flex h-[70px] justify-between items-center mb-5 ">
           <div className="flex h-full items-center">
            <div className="h-full w-[70px] bg-red-300 mr-4 rounded-md overflow-hidden">
               <img className="h-full w-full object-cover" src={theImage} alt="image of product" />
            </div>
             
               <div>
                <p className="font-bold">PSG Stadium 20/21</p>
                <p className="text-gray-500">3 Variants</p>
               </div>
           </div>
           
           <p className="font-bold"><span className="text-gray-500 font-medium">SKU:</span>8600844</p>
           <p>Jerseys</p>
           <p>12.11.2020</p>
           <p className="font-bold text-[#4ac7c2] px-4 py-1  bg-[#e5f6f5] rounded-full ">Published</p>
        
     </article>
   ) 
}

export default SingleProduct