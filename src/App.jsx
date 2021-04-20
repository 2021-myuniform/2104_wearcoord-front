import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import './App.css';
import Imgswiper from "./components/ImgSwiper";
import Imgswiperpants from "./components/ImgSwiperPants";
import Page1 from "./components/Page1";

function App() {
  return (
    <BrowserRouter>
      <div>
        <h1>wearcoord test</h1>

        <div>
          <div className='mannequinImg'>
          <Route 
        path="/changeTops"
        component={Imgswiper}
        ></Route>
          <Route 
        path="/changePants"
        component={Imgswiperpants}
        ></Route>
          </div>
        </div>
      </div>

      <div>
        <Link
        to="/changeTops"
        >changetops</Link>
        <Link
        to="/changePants"
        >changepants</Link>
      </div>
    </BrowserRouter>
  );
}

export default App;
