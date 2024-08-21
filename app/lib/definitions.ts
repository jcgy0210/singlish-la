// This file contains type definitions for the data.
// It describes the shape of the data, and what data type each property should accept.

export type User = {
    id: string;
    name: string;
    email: string;
    password: string;
};

export type Admin = {
    id: string;
    name: string;
    email: string;
    password: string;
};

export type VocabList = {
    id: string;
    vocab: string;
    meaning: string;
    example: string;
    status: 'locked' | 'unlocked';
    // In TypeScript, this is called a string union type.
    // It means that the "status" property can only be one of the two strings: 'locked' or 'unlocked'.
};

export type Achievements = {
    id: string;
    title: string;
    descriptions: string;
    status: 'locked' | 'unlocked';
};

export type Courses = {
    course_id: string;
    title: string;
    description: string;
    lessons: Lesson[];
    quizzes: Quiz[];
};

export type Lesson = {
    lesson_id: string;
    course_id: string; // Foreign key to the course
    title: string;
    content: string;
    vocabList: VocabList[];
};

export type Quiz = {
    quiz_id: string;          
    course_id: string; // Foreign key to the course         
    title: string;           
    questions: Question[];    
};

export type Question = {
    question_id: string;      // Unique identifier for each question
    quiz_id: string;          // Foreign key to the quiz
    question_text: string;    // The text of the question
    options: string[];        // Array of possible answers
    correct_answer: string;   // The correct answer
};
