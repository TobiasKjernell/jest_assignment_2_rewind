interface IResultScreen {
    score: number,
    total: number,
    onPlayAgain: () => void
}

const ResultScreen = ({ score, total, onPlayAgain }: IResultScreen) => {
    return (
        <div>
            <h2>Quiz complete!</h2>
            <p>Your score: {score} / {total}</p>
            <button onClick={onPlayAgain}>Play-again</button>
        </div>
    )
}

export default ResultScreen;