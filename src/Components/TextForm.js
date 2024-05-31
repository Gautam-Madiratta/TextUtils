import React, { useState } from 'react';
import PropTypes from "prop-types"

export default function TextForm(props) {

   const handleOnUpperClick= () =>
   {    
       
        setText(text.toUpperCase());
   };

   const handleOnLowerClick= () =>
   {    
       
        setText(text.toLowerCase());
   };
   
    const handleOnChange= (event) =>{
        setText(event.target.value)
    };

    const handleTextInverse= () =>{
        let newText="";
        for(let i=text.length-1; i>=0 ; i--){
            newText += text[i];
        }
        setText(newText);
    }

    const handleCopy= () =>{
        var text= document.getElementById("exampleFormControlTextarea1")
        text.select();
        navigator.clipboard.writeText(text.value);
    }

    const clearText= () =>{
        setText("");
    }

    const removeExtraSpace = ()=>{
        let newText=text.split(/[  ]+/);
        setText(newText.join(" "));
    }

    const [text,setText]=useState("");
  
    return (
    <>
   
    <div className={`mb-3 text-${props.mode==="light"?"dark":"light"}`}>
        <label htmlFor="myBox" className="form-label">{props.textFormHeading}</label>
        <textarea className="form-control" placeholder="Enter Your Text Here" id="exampleFormControlTextarea1" value={text} onChange={handleOnChange}  rows="8" style={{ backgroundColor: props.mode==="light"? "white":"grey", color:props.mode==="light"? "black":"white"}}></textarea>
    </div>
    
    <button className="btn btn-primary" onClick={handleOnUpperClick}>Convert To Uppercase</button>  
    <button className="btn btn-primary mx-2" onClick={handleOnLowerClick}>Convert To Lowercase</button>     
    <button className="btn btn-primary mx-2" onClick={handleTextInverse}>Inverse The Letters</button>   
    <button className="btn btn-primary mx-2" onClick={clearText}>Clear Text</button> 
    <button className="btn btn-primary mx-2" onClick={handleCopy}>Copy Text</button> 
    <button className="btn btn-primary mx-2" onClick={removeExtraSpace}>Remove Extra Spaces</button> 
    
    
    <div className={`container my-3 text-${props.mode==="light"?"black":"light"}`}>
        <h1>Your Text Summary is here: </h1>
        <p>{text.split(" ").length} words and {text.length} characters</p>
        <p>It will take {0.008 * text.length} to read it</p>
        <h2>Preview:</h2>
        <p>{text.length<=0? "Enter Something in text box to preview" : text}</p>
    </div>
    </>
  )
}

TextForm.propTypes={
    title:PropTypes.string,
};
