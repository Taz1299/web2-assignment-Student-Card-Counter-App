import { useState } from "react";
import Counter from "./Counter";

export default function StudentCard({ student }) {
  const [count, setCount] = useState(0);

  function add() {
    setCount(count + 1);
  }

  return (
    <div className="card" style={{width:"18rem"}}>
      <div className="card-body">
        <h5 className="card-title">{student.name}</h5>
        <p>Count: {count}</p>
        <Counter click={add}/>
      </div>
    </div>
  );
}