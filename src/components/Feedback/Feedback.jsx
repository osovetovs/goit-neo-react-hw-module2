import css from "./Feedback.module.css";

const Feedback = ({ good = 0, neutral = 0, bad = 0 }) => {
    const calculatePositivePercentage = () => {
        const total = good + neutral + bad;
        return total === 0 ? 0 : ((good / total) * 100).toFixed(2);
    };

    return (
        <div className={css.feedback}>
            <ul className={css.list}>
                <li>Good: {good}</li>
                <li>Neutral: {neutral}</li>
                <li>Bad: {bad}</li>
            </ul>
            <div className={css.total}>Total: {good + neutral + bad}</div>
            <p>Positive: {calculatePositivePercentage()}%</p>
        </div>
    );
};

export default Feedback;
