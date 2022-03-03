import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Weather from "./components/Weather";
// import News from "./components/News";
// import "./components/css/news.css"


import './App.css';
import news from "./components/news";
import News from "./components/news";

// import { NewsContentProvider } from "./NewsContent";
// import News from "./components/News";




function App() {
  
  return (
    <div className="body">
        <div className="box">
 
          <Weather />
      
         <hr style={
                    {border: "2px solid black"}
                }></hr>
         <h1 style={{alignItems:"center"}}>India's Latest News..</h1>
       <News/>
       
     
          
               
          
     </div>
  
     </div>
   
    
     );
}

export default App;
