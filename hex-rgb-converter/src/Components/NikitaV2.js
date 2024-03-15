import Menu from "./Menu";

import "../styles/nikita.css";
import { useNikitaV2 } from "../hooks/useNikitaV2";

const NikitaV2 = () => {

  const {
    inputA,
    inputB,
    handleChangeA,
    handleChangeB,
    moveToLeft,
    moveToRight,
  } = useNikitaV2();
  return (
    <>
      <Menu />
      <div
        style={{
          height: "100px",
          width: "100%",
          backgroundColor: inputA || inputB,
        }}
      ></div>
      <div className="nikita-container">
        <input
          className="nikita-input"
          value={inputA}
          onChange={handleChangeA}
        />
        <div className="nikita-actions">
          <button onClick={moveToLeft} className="nikita-btn" type="button">
            Move to Left
          </button>
          <button onClick={moveToRight} className="nikita-btn" type="button">
            Move to Right
          </button>
        </div>
        <input
          className="nikita-input"
          value={inputB}
          onChange={handleChangeB}
        />
      </div>
    </>
  );
};

export default NikitaV2;
