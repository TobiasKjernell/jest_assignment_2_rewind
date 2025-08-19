import type { Question } from "../App";

export const questionsSet: Question[] = [
    {
        id: "0",
        question: 'Best fruit in the world?',
        options: ['Strawberry', 'Avacado', 'Banana', 'Dragon Fruit'],
        correctIndex: 1
    },
    {
        id: "1",
        question: 'Which country has the best beer?',
        options: ['France', 'Italy', 'Spain', 'Germany'],
        correctIndex: 3
    },
    {
        id: "2",
        question: 'Is water healthy?',
        options: ['Yes', 'No'],
        correctIndex: 0
    },
    {
        id: "3",
        question: 'Is the color green, pink?',
        options: ['Yes', 'No'],
        correctIndex: 1
    }

]