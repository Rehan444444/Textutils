import React, { useState } from 'react'

export default function Textform(props) {
  const handleupclick = () => {
    // console.log("Uppercase was clicked"+ text);
    let newText = text.toUpperCase();

    setText(newText)

  }
  const handlelowclick = () => {
    // console.log("Uppercase was clicked"+ text);
    let newText = text.toLowerCase();

    setText(newText)

  }
  const handleclearclick = () => {
    // console.log("Uppercase was clicked"+ text);
    let newText = ' ';

    setText(newText)

  }
  const handleuplowclick = () => {
    // console.log("Uppercase was clicked"+ text);
    let newText = text.charAt(0).toUpperCase()
      + text.slice(1);

    setText(newText)

  }



  const handleonchange = (event) => {
    // console.log("on change working");

    setText(event.target.value)
  }


  const [text, setText] = useState('Enter the text here');
  return (
    <>

      {/* <div className="mb-3" style={{color:props.mode==='dark'?'white':'black'}}>
  <label htmlFor="exampleFormControlInput1" className="form-label">Email address</label>
  <input type="email" className="form-control" style={{backgroundColor:props.mode==='dark'?'#4e3f68':'white',color:props.mode==='dark'?'white':'black'}}  id="exampleFormControlInput1" placeholder="name@example.com"/>
</div> */}
      <div className="container2" style={{ color: props.mode === 'dark' ? 'white' : 'black' }} >
        <h1>{props.heading}</h1>

        <div className="mb-3">
          {/* <label for="exampleFormControlTextarea1" className="form-label">{props.heading}</label> */}
          <textarea className="form-control" onChange={handleonchange} style={{ backgroundColor: props.mode === 'dark' ? 'rgb(26 38 80)' : 'white', color: props.mode === 'dark' ? 'white' : 'black' }} value={text} id="exampleFormControlTextarea1" rows="12" ></textarea>


          <button disabled={text.length===0} className="btn btn-primary my-3 my-2" onClick={handleupclick}>Convert to Uppercase</button>
          <button  disabled={text.length===0}  className="btn btn-danger mx-3 my-2" onClick={handlelowclick} >Convert to lowercase</button>
          <button  disabled={text.length===0}  className="btn btn-success " onClick={handleclearclick} >Clear Text</button>
          <button className="btn btn-secondary mx-3 my-2" onClick={handleuplowclick} >Convert to Upper+Lower</button>

        </div>
      </div>

      <div className="container" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
        <h1>Summary</h1>
        <p>{text.split(/\s+/).filter((element) => { return element.length !==0 }).length} Words an {text.length} Characters</p>
        <p>{0.008 * text.split(/\s+/).filter((element) => { return element.length !== 0 }).length}minutes required to read this paragragh</p>

        <h1>Preview</h1>
        <p>{text.length > 0 ? text : "Nothing to preview"}</p>

      </div>
    </>

  )
}
