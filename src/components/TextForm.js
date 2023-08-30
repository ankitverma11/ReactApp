import React,{useState} from 'react'


export default function TextForm(props) {

    const HandleUpClick =()=>{
        let newText = text.toUpperCase();
        setText(newText);
    }

    const HandleUpChange = (event)=>{
        console.log("on Change");
        setText(event.target.value);
    }

    const [text, setText] = useState('Enter text here');

  return (
    <div>
        <h4>{props.heading}</h4>
    <div className="mb-3">
  <textarea className="form-control" value={text} onChange={HandleUpChange}  id="myBox" rows="7"></textarea>
</div>
<button className="btn btn-primary" onClick={HandleUpClick}> Convert to Uppercase</button>
</div>
  )
}
