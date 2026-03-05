import { useState } from "react";
import StudentCard from "./components/StudentCard";

export default function App() {
  const students = [{ name: "Ayoub" }, { name: "Saed" }, { name: "Yousef" }];
  const [index, setIndex] = useState(0);

  function next() {
    setIndex((index + 1) % students.length);
  }

  function prev() {
    setIndex((index - 1 + students.length) % students.length);
  }

  return (
    <div className="container mt-4">
      <div
        className="carousel slide bg-dark rounded"
        style={{ minHeight: "260px" }}
      >
        <div className="carousel-inner">
          {students.map((s, i) => (
            <div
              key={i}
              className={i === index ? "carousel-item active" : "carousel-item"}
            >
              <div className="d-flex justify-content-center align-items-center py-4">
                <StudentCard student={s} />
              </div>
            </div>
          ))}
        </div>

        <button className="carousel-control-prev" type="button" onClick={prev}>
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        </button>

        <button className="carousel-control-next" type="button" onClick={next}>
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
        </button>
      </div>
    </div>
  );
}