import { useEffect, useState } from "react";
import LandingScreen from "./components/LandingScreen";
import QuestionCard from "./components/QuestionCard";
import ScoreBoard from "./components/ScoreBoard";
import ResultScreen from "./components/ResultScreen";
import ThemeToggle from "./components/ThemeToggle";
import { questionsSet } from "./data/questions";


export type Question = {
  id: string,
  question: string,
  options: string[],
  correctIndex: number,
}

export default function App() {
  const [gameIsRunning, setGameIsRunning] = useState<boolean>(false);
  const [step, setStep] = useState<number>(0);
  const [score, setScore] = useState<number>(0);
  const [theme, setTheme] = useState<string>('light')

  const handleGameIsRunning = () => setGameIsRunning(!gameIsRunning);
  const handlePlayAgain = () => {
    setScore(0);
    setStep(0)
    setGameIsRunning(false);
  }
  const handleOnSubmit = (answerNum: number) => {
    if (questionsSet[step].correctIndex === answerNum) {
      setScore(score + 1);
    }
    setStep(step + 1);
  }

    useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  return (
    <div className="flex flex-col items-center">
      <ThemeToggle theme={theme} onToggle={() => setTheme((currentTheme) => currentTheme === 'light' ? 'dark' : 'light')} />
      {!gameIsRunning && <LandingScreen onStart={handleGameIsRunning} />}
      {questionsSet.length > step && gameIsRunning &&
        <>
          <ScoreBoard score={score} total={questionsSet.length} answered={step} />
          <QuestionCard question={questionsSet[step]} onSubmit={handleOnSubmit} />
        </>
      }
      {gameIsRunning && step >= questionsSet.length && (
        <ResultScreen score={score} total={questionsSet.length} onPlayAgain={handlePlayAgain} />
      )}
    </div>
  );
}
