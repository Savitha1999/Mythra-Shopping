import React from "react";
import { BrowserRouter, Routes,Route } from "react-router-dom";

import Kids from "./kids";
import Mens from "./Mens";
import Womens from "./Womens";
import Home from "./Home";
import Beauty from "./Beauty";
import Signup from "./Signup";
import Nopage from './Nopage';
import Bag from './Bag';




export default function Main()
{
    return(
        <>

        <BrowserRouter>

        <Routes>

            <Route path="/myntra" element={<Home /> } />
            <Route path="/kids" element={<Kids />} />
            <Route path="/womens" element={<Womens />} />
            <Route path="/mens" element={<Mens />} />
            <Route path="/beauty" element={<Beauty />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="*" element={<Nopage />} />
            <Route path="/bag" element={<Bag />} />
            
           

        </Routes>
        </BrowserRouter>
        
        
        </>
    )
}

