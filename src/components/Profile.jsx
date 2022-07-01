import ProfilePicture from '../assets/images/handboy.png'

const Profile=()=>{
    return(
    <div className="flex">
        <div>
            <p className="font-bold">jamesbrown@example.com</p>    
            <p className="text-right text-gray-500">Admin</p>    
        </div>    

        <div className="h-12 w-12 rounded-full overflow-hidden ml-4">
            <img className="h-full w-full object-cover"src={ProfilePicture} alt="" />   
        </div>
    </div>
    )
}

export default Profile;