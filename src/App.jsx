import { useState } from "react";
import "./App.css";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

function App() {
  const [step, setStep] = useState(1);
  // let steps = 1;
  function handlePrevious(e) {
    if (step > 1) setStep((s) => scroll - 1);
  }

  function handleNext(e) {
    if (step < messages.length) setStep((s) => s + 1);
  }

  return (
    <main className="steps">
      <section className="numbers">
        <div className={`steps-1 ${step >= 1 ? "active" : ""}`}>1</div>
        <div className={`steps-1 ${step >= 2 ? "active" : ""}`}>2</div>
        <div className={`steps-1 ${step >= 3 ? "active" : ""}`}>3</div>
      </section>
      <p className="message">
        step{step}: {messages[step - 1]}
      </p>
      <div className="buttons">
        <button
          style={{ background: "#7950f2", color: "#fff" }}
          onClick={handlePrevious}
        >
          Previous
        </button>
        <button
          style={{ background: "#7950f2", color: "#fff " }}
          onClick={handleNext}
        >
          Next
        </button>
      </div>
    </main>
  );
}

export default App;

// <div class="steps">
//       <div class="numbers">
//         <div class="step-1">1</div>
//         <div class="step-2">2</div>
//         <div class="step-3">3</div>
//       </div>

//       <p class="message"></p>

//       <div class="buttons">
//         <button class="previous">Previous</button>
//         <button class="next">Next</button>
//       </div>
//     </div>
