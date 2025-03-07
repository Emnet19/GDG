import React from "react";
import './App.css'
import UseCard from "./UseCard";
const App = () => {
  return (
    <div style={{ display: "flex", gap: "20px", justifyContent: "center", marginTop: "50px" }}> 
      <UseCard name="John Doe" email="john@example.com" age={28} bgColor="#FFDDC1" />
      <UseCard   name="Jane Smith" email="jane@example.com" age={25} bgColor="#C1E1FF" />
      <UseCard name="Alex Brown" email="alex@example.com" age={30} bgColor="#C1FFC1" />
    </div>
  );
};

export default App;
