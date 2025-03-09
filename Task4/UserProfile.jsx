import React from 'react'
import {useParams, useNavigate} from 'react-router-dom'

function UserProfile(){
    const {id}=useParams(); 
    const navigate=useNavigate()

 return(
    <div>
        <h2>User Profile</h2>
        <p>Welcome, User{id}</p>
        {/* programmatic navigation button */}
    <button onClick={()=>navigate("/")}>Go Back to Home</button>
    </div>
 )
}
export default UserProfile
