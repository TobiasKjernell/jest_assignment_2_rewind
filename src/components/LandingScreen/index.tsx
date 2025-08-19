import styles from './landingScreen.module.css';

const LandingScreen = ({ onStart }: { onStart: () => void }) => {
    return (
        <div className={styles.flex}>
            <h2>Welcome to QuickQuiz</h2>
            <p>Short multiple-choice quiz to test your knowledge.</p>
            <button onClick={onStart}>Start-Quiz</button>
        </div>
    )
}

export default LandingScreen;