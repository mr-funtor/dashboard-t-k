

const Card=({title,amount})=>{
   return(
    <div className="h-[140px] bg-gradient-to-r from-[#2e8ee9] to-[#4b62d2] w-[280px] rounded-lg p-7">
        <div className="w-[50%] text-white h-full flex flex-col justify-between py-2">
            <p>{title}</p>
            <h2 className="text-3xl">$ {amount}</h2>
        </div>
     </div>
   ) 
}

export default Card