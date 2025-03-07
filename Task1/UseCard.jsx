import React from "react";
import './style.css'
const UserCard = ({ name, email, age, bgColor }) => {
  return (
    <div  
      className="user-card" style={{ backgroundColor: bgColor }}
    >
      <h2 >{name}</h2>
      <p >{email}</p>
      <p>Age: {age}</p>
    </div>
  );
};

export default UserCard;
