import Button from "../Button/Button";
import css from "./Options.module.css";

const Options = ({ onFeedback, onReset, isResetVisible }) => {
  return (
    <div className={css.options}>
      <Button onClick={() => onFeedback("good")}>Good</Button>
      <Button onClick={() => onFeedback("neutral")}>Neutral</Button>
      <Button onClick={() => onFeedback("bad")}>Bad</Button>
      {isResetVisible && <Button onClick={onReset}>Reset</Button>}
    </div>
  );
};

export default Options;
