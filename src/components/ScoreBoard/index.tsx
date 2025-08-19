import styles from './scoreBoard.module.css';

interface IScoreBoard {
    score: number,
    answered: number,
    total: number;
}

const ScoreBoard = ({ score, answered, total }: IScoreBoard) => {
    return (
        <div role='status' className={styles.flex}>
            <span>Score: {score}</span>
            <span>Answered: {answered}/{total}</span>
        </div>
    )
}

export default ScoreBoard;