import React from 'react'
import { Route, Routes, useNavigate } from 'react-router-dom'
import { FirstCrousel } from './FirstCrousel'
import { New } from './pages/New'
import { SkinCare } from './pages/SkinCare'
import { TrendingNow } from './pages/TrendingNow'
import Main from "../components/NewHomeBody/Main"


export const Home = () => {
  const navigate= useNavigate()

 

  return (
    <div>
        <div className="firstSlider">
            <FirstCrousel/>
        </div>
    {/* /////////////  <=  after crousel part here (new, treding now and skincare) =>///////////////////////////////// */}
         <div>
         <br />
          <br />
           <h1 id="gottahaveit">GOTTA HAVE IT</h1>
           <div className="afterhaveit">
           <p onClick={() =>navigate("/")}>NEW</p>
           <p onClick={() =>navigate("/trendingnow")}>TRENDING NOW</p>
           <p onClick={() =>navigate("/skincare")}>SKINCARE</p>
           </div>

           <Routes>
             <Route path="/" element={<New/>}/>
             <Route path="/trendingnow" element={<TrendingNow/>}/>
             <Route path="/skincare" element={<SkinCare/>}/>
           </Routes>
     
          <br />
          <br />
          <br />
         </div>
        <Main />
        <br/>
        <br/>
        <br/>
        <br/>
    </div>
  )
}
