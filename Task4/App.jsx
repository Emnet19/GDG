import React from 'react'
import { BrowserRouter as Router,Routes,Route,NavLink} from 'react-router-dom'
import Home from "./pages/Home"
import AboutUs from './pages/AboutUs'
import ContactUs from './pages/ContactUs'
import OrderSummary from './pages/OrderSummary'
import NotFound from './pages/NotFound'
import UserProfile from './pages/UserProfile'

function App(){
  return <>
  <Router>
  <div>
    
      <nav>
       <NavLink to ='/'>Home</NavLink>
       <NavLink to="/aboutUs">About Us</NavLink>
       <NavLink to={"/ContactUs"}>Contact Us</NavLink>
       <NavLink to={"/user/123"}>User Profile</NavLink>{/*example user id */}
    </nav> 
  
   <Routes>
      <Route path ='/' element={<Home/>}/>
      <Route path='/aboutus'element={<AboutUs/>}/> 
      <Route path ='/Contactus' element={<ContactUs/>}/>
      <Route path='order-summary' element={<OrderSummary/>}/>
      <Route path='/user/:id' element={<UserProfile/>}/>
      <Route path='*' element={<NotFound/>}/>
   </Routes>
 
  </div> 
  </Router>
</>
  
}
export default App
