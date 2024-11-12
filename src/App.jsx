import './App.css'
import Trackbar from './components/Trackbar/Trackbar'
import Main from './components/Main/Main'
import Footer from './components/Footer/Footer'
import React from "react";


function App() {
    return (
     <div className="wrapper">
      <div className="container">
       <Main/>
       <Trackbar/>
       <Footer/>
      </div>
    </div>
  )
}

export default App;
