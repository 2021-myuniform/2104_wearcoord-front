import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import './App.css';
import Allchange from "./components/Allchange";
import Imgswiper from "./components/ImgSwiper";
import Imgswiperpants from "./components/ImgSwiperPants";
import Mycoord from "./components/Mycoord";
import Page1 from "./components/Page1";
import Test from "./components/Test";

function App() {
  return (
    <BrowserRouter>
      <div>
        <h1>wearcoord test</h1>

        <div>
          <div className='mannequinImg'>
          <Route 
        exact path="/2104_wearcoord-front/"
        component={Mycoord}
        ></Route>
          <Route 
        path="/2104_wearcoord-front/changeTops"
        component={Imgswiper}
        ></Route>
          <Route 
        path="/2104_wearcoord-front/changePants"
        component={Imgswiperpants}
        ></Route>
          </div>
        </div>

        <div>
          <div className='mannequinImg'>
          <Route 
        path="/2104_wearcoord-front/allchange"
        component={Allchange}
        ></Route>
          </div>
        </div>
      </div>

      <div className="df">
        <Link
        to="/2104_wearcoord-front/"
        >my coord</Link>
        <Link
        to="/2104_wearcoord-front/changeTops"
        >changetops</Link>
        <Link
        to="/2104_wearcoord-front/changePants"
        >changepants</Link>
        <Link
        to="/2104_wearcoord-front/allchange"
        >allchange</Link>
        <Link
        to="/2104_wearcoord-front/test"
        >test</Link>
      </div>

      <Route 
        path="/2104_wearcoord-front/test"
        component={Test}
        ></Route>
    </BrowserRouter>
  );
}

export default App;
