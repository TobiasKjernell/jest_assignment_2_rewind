import { useState } from "react";
import LandingScreen from "./components/LandingScreen";
import QuestionCard from "./components/QuestionCard";
import ScoreBoard from "./components/ScoreBoard";
import ResultScreen from "./components/ResultScreen";


export type Question = {
  id: string,
  question: string,
  options: string[],
  correctIndex: number,
}


const sampleQuestion: Question = {
  id: 'q1',
  question: 'What is 2 + 2?',
  options: ['3', '4', '5'],
  correctIndex: 1,
};

const questionsSet: Question[] = [sampleQuestion, sampleQuestion, sampleQuestion, sampleQuestion, sampleQuestion]

export default function App() {
  const [gameIsRunning, setGameIsRunning] = useState<boolean>(false);
  const [step, setStep] = useState<number>(0);
  const [score, setScore] = useState<number>(0);

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

  return (
    <div className="flex flex-col items-center">
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
