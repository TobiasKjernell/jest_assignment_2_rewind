import { useEffect, useState } from "react";
import type { Question } from "../../App";

interface IQuestionCard {
    question: Question,
    onSubmit: (selected: number) => void
}

const QuestionCard = ({ question, onSubmit }: IQuestionCard) => {
    const [gotAnswer, setGotAnswer] = useState<number | null>(null);

    useEffect(() => {
        setGotAnswer(null);
    }, [question])

    return (
        <form onSubmit={(e) => {
            e.preventDefault();
            if (gotAnswer !== null)
                onSubmit(gotAnswer)
        }}>
            <h2>{question.question}</h2>
            <fieldset>
                {question.options && question.options.map((item, index) =>
                    <div key={index}>
                        <input key={index} name="question" type="radio" value={item} id={item} checked={gotAnswer === index} onChange={() => setGotAnswer(index)} />
                        <label htmlFor={item} aria-label={`answer-${index}`}>{item}</label>
                    </div>
                )}
            </fieldset>
            <button type="submit" disabled={gotAnswer === null}>Submit-answer</button>
        </form>
    )
}

export default QuestionCard;