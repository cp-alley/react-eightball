import { useState } from "react";
import "./Eightball.css";

function Eightball() {
  const [color, setColor] = useState("black");
  const [msg, setMsg] = useState("Think of a question");
  return <div className="Eightball" style={{backgroundColor: `${color}`}}>
    <p>{msg}</p>
  </div>
}

export default Eightball;