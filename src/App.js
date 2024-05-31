import { useState } from 'react';
import './App.css';
// import About from './Components/About';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import Alert from './Components/Alert';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {

const [mode , setMode]=useState("light")

const [switchText , setSwitchText]=useState("Enable Dark Mode")

const [alert, setAlert]=useState(null);

const showAlert = (type,message) => {
      setAlert({
        alertType: type,
        message: message,
      })
      setTimeout(()=>{setAlert(null);},(1500))
}


const toggleMode = () =>{
  if(mode==="light"){
    setMode("dark")
    setSwitchText("Enable Light Mode")
    document.body.style.backgroundColor="#2f2a2a";
    showAlert("success","Enabled Light Mode")
    // setInterval(()=>{document.title="Bhidduu"},2000)
    // setInterval(()=>{document.title="Jhakas";},1500)
  }
  else{
    setMode("light")
    setSwitchText("Enable Dark Mode")
    document.body.style.backgroundColor="white";
    showAlert("success","Enabled Dark Mode")
  }
}


  return (
   <>
    {/* <Router> */}

      <Navbar title="TextUtils" about="About" mode ={mode} toggleMode={toggleMode} switchText={switchText}/> 
      <Alert alertDetails={alert}/>
      
      <div className="container my-3">
      
      {/* <Routes>   
          <Route path="/" element={}/>
          <Route path="/about" element={<About/>}/>
      </Routes> */}

      <TextForm textFormHeading="Enter the text below: " mode ={mode}/>
        
      </div>

    {/* </Router> */}

    
   </>
  );
}

export default App;
