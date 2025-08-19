

export type Question = {
    id: string,
    question: string,
    options: string[],
    correctIndex: number,
}

export default function App() {
  const sampleQuestion: Question = {
  id: 'q1',
  question: 'What is 2 + 2?',
  options: ['3', '4', '5'],
  correctIndex: 1,
};
  return (
    <div className="flex flex-col items-center">
        <h1>Hello</h1>
    </div>
  );
}
