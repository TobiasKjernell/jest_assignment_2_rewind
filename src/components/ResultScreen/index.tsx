import styles from './resultScreen.module.css';

interface IResultScreen {
    score: number,
    total: number,
    onPlayAgain: () => void
}

const ResultScreen = ({ score, total, onPlayAgain }: IResultScreen) => {
    return (
        <div className={styles.resultCard}>
            <h2>Quiz complete!</h2>
            <p>Your score: <span className={styles.score}>{score}</span> / {total}</p>
            <button aria-label='play-again' onClick={onPlayAgain}>Play Again</button>
        </div>
    )
}

export default ResultScreen;