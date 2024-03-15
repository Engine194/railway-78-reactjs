import "../styles/nikita.css";
import { useNikita } from "../hooks/useNikita";

const Nikita = () => {
  const {
    inputA,
    inputB,
    handleChangeA,
    handleChangeB,
    moveToLeft,
    moveToRight,
    increaseCount,
    decreaseCount,
    increaseCountEithAmount,
  } = useNikita()
  return (
    <div className="nikita-container">
      <input className="nikita-input" type="number" value={inputA} onChange={handleChangeA} />
      <div className="nikita-actions">
        <button onClick={moveToLeft} className="nikita-btn" type="button">
          Move to Left
        </button>
        <button onClick={moveToRight} className="nikita-btn" type="button">
          Move to Right
        </button>
        <button onClick={increaseCount}>Increment</button>
        <button onClick={decreaseCount}>Decrement</button>
        <button onClick={increaseCountEithAmount}>Increment by amount</button>
      </div>
      <input className="nikita-input" value={inputB} onChange={handleChangeB} />
    </div>
  );
};

export default Nikita;
