
import React from 'react';
import { useState } from 'react';

export default function Textform(props) {
  const [text, setText] = useState('Enter Text Here');  //state

  const convertUpperCase = (event) =>{
    let newText = text.toUpperCase();
    setText(newText);   
}

  const convertLowerCase = (event) =>{
  let newText = text.toLowerCase();
  setText(newText);   
}

  const clearText = (event) =>{
  setText("");   
}

  //event listener.
  const handleOnChnage = (event) =>{
      console.log("On Chnage event invoke text value- "+text);
      setText(event.target.value);   
  }   

  return (
    <>
    <div className="container">
        <h5>{props.heading}</h5>
        <div className="mb-3">
            <label htmlFor="textArea1" className="form-label"></label>
            <textarea className="form-control" value={text} onChange={handleOnChnage} id="textArea1" rows="8"></textarea>
        </div>
         {/* x axis margin 1 */}
        <button className="btn btn-primary mx-1" onClick={convertUpperCase}>Convert To UpperCase</button>
        <button className="btn btn-primary mx-1" onClick={convertLowerCase}>Convert To LowerCase</button>
        <button className="btn btn-primary mx-1" onClick={clearText}>Clear Text</button>
    </div>
    {/* y axis margin 2 */}
    <div className='container my-2'>  
      <h5>Your Text Summary</h5>
      <p>{text.split(" ").length} words and {text.length} characters.</p> 
      {/* lets assume 0.08 minutes will take to read 1 word in a text doc. */}
      <p>{parseInt(text.split(" ").length) * 0.08} minutes to read above text.</p>
    </div>
    </>
  )
}

