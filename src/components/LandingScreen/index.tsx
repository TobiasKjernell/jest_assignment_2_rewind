import styles from './landingScreen.module.css';

const LandingScreen = ({ onStart }: { onStart: () => void }) => {
    return (
        <div className={styles.flex}>
            <div className={styles.container}>
                <h2>Welcome to QuickQuiz</h2>
                <p>Short multiple-choice quiz to test your knowledge.</p>
                <button aria-label='start-quiz' className={styles.button} onClick={onStart}>Start Quiz</button>
            </div>
        </div>
    )
}

export default LandingScreen;