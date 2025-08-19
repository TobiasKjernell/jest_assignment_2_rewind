import { useState, type FormEvent } from "react";
import type { Question } from "../../App";

interface IQuestionCard {
    question: Question,
    onSubmit: () => void
}

const QuestionCard = ({ question, onSubmit }: IQuestionCard) => {
    const [gotAnswer, setGotAnswer] = useState<boolean>(false);

    const handleOnSubmit = (e: FormEvent) => {
        e.preventDefault();
        onSubmit();
    }

    return (
        <form onSubmit={handleOnSubmit}>
            <h2>{question.question}</h2>
            <fieldset>
                {question.options && question.options.map((item, index) =>
                    <div key={index}>
                        <input key={index} name="question" type="radio" value={item} id={item} onClick={() => setGotAnswer(true)}  />
                        <label htmlFor={item}>{item}</label>
                    </div>
                )}
            </fieldset>
            <button disabled={!gotAnswer}>Submit-answer</button>
        </form>
    )
}

export default QuestionCard;