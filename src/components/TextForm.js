import React,{useState} from 'react'


export default function TextForm(props) {

    const HandleUpClick =()=>{
        let newText = text.toUpperCase();
        setText(newText);
    }

    const HandleLowClick =()=>{
        let newText = text.toLowerCase();
        setText(newText);
    }

    const HandleUpChange = (event)=>{
        console.log("on Change");
        setText(event.target.value);
    }

    const [text, setText] = useState('');

  return (
    <>

    <div className='container my-2'>
        <h4>{props.heading}</h4>
    <div className="mb-3">
  <textarea className="form-control" value={text} onChange={HandleUpChange}  id="myBox" rows="7"></textarea>
</div>
<button className="btn btn-primary mx-2" onClick={HandleUpClick}> Convert to Uppercase</button>
<button className="btn btn-primary mx-2" onClick={HandleLowClick}> Convert to Lowercase</button>
</div>

<div className='container my-2'>
    <h2>Your Text Summary</h2>
    <p>{text.split(" ").length} words and {text.length} characters.</p>

    <h2> Preview</h2>
    <p>{text}</p>
    </div>
</>
  )
}
