import "./App.css";
import ArrowLeft from "./ArrowLeft";
import ArrowRight from "./ArrowRight";

function App() {
  return (
    <div className="App">
      <h1 className="greeting-heading">Welcome to Hex-RGB Converter</h1>
      <div className="demo-color" />
      <div className="color-form">
        <input className="color-input hex-input" name="hex" />
        <div className="btn-actions">
          <button className="tohex-btn">
            <ArrowLeft height="24px" width="24px" />
          </button>
          <button className="tohex-btn">
            <ArrowLeft height="24px" width="24px" />
          </button>
          <button className="torgb-btn">
            <ArrowRight height="24px" width="24px" />
          </button>
        </div>
        <input className="color-input rgb-input" name="rgb"/>
      </div>
    </div>
  );
}

export default App;
