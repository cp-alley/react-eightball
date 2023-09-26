import { useState } from "react";
import "./Eightball.css";


/** Display an eightball with a msg and color from a list.
 *
 * Props:
 * - answers (an array of answer objects)
 *        -> [{ msg: "It is certain.", color: "green" }, ...]
 *
 * State:
 * - msg: current message being displayed
 * - color: current color being displayed
 *
 * App -> Eightball
 *
 */
function Eightball( {answers} ) {

  const [color, setColor] = useState("black");
  const [msg, setMsg] = useState("Think of a question");

  function handleClick(evt) {

    const idx = Math.floor(Math.random() * answers.length);
    const newColor = answers[idx].color;
    const newMsg = answers[idx].msg;

    setColor(newColor);
    setMsg(newMsg);
  }

  return <div className="Eightball" onClick={handleClick} style={{backgroundColor: color}}>
    <p>{msg}</p>
  </div>
}


export default Eightball;