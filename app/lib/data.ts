import { sql } from '@vercel/postgres';
import {
  VocabList,
  Achievements,
  Courses,
  Lesson,
  Quiz,
  Question,
} from './definitions';

// export const userCount = sql`SELECT COUNT(*) FROM users`

// export async function fetchVocabsById(id: string) {
//     try {
//       const data = await sql<VocabList>`
//         SELECT
//           vocabList.vocab,
//           vocabList.meaning,
//           vocabList.example
//         FROM vocabList
//         WHERE vocabList.vocab_id = ${id};
//         `; 
//         const vocabs = data;
//         return vocabs;
//     } catch (error) {
//       console.error('Database Error:', error);
//       throw new Error('Failed to fetch vocabs.');
//     }
//   }

export async function fetchVocabById(id: string) {
  try {
    const data = await sql<VocabList>`
      SELECT
        vocabList.vocab
      FROM vocabList
      WHERE vocabList.vocab_id = ${id};
      ;`
      const vocabs = data;
      return vocabs;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch vocabs.');
  }
}

export async function addVocabsToDict({ limit, offset }: { limit: number; offset: number }) {
  try {
    const data = await sql<VocabList>`
      SELECT
        vocabList.vocab,
        vocabList.meaning,
        vocabList.example
      FROM vocabList
      LIMIT ${limit}
      OFFSET ${offset};
    `;
    return data;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch vocabs.');
  }
}

export async function fetchCourseByID(id: string){
    try{
      const data = await sql<Courses> `
      SELECT
        courses.course_id,
        courses.title,
        courses.description
      FROM courses
      WHERE courses.course_id = ${id};`;
      return data;
    } catch (error) {
      console.error('Database Error:', error);
      throw new Error('Failed to fetch courses.');
    }
}

export async function fetchLessonByID(id: string){
    try{
      const data = await sql<Lesson> `
      SELECT
        lessons.title
      FROM lessons
      WHERE lessons.lesson_id = ${id};`;
      const lessons = data;
      return lessons;
    } catch (error) {
      console.error('Database Error:', error);
      throw new Error('Failed to fetch lessons.');
    }
}

export async function fetchQuizByID(id: string){
    try{
      const data = await sql<Quiz> `
      SELECT
        quiz.title
      FROM quizzes
      WHERE quizzes.quiz_id = ${id};`;
      const quizzes = data;
      return quizzes;
    } catch (error) {
      console.error('Database Error:', error);
      throw new Error('Failed to fetch quizzes.');
    }
}

export async function fetchQuestionTextByID(id: string){
    try{
      const data = await sql<Question> `
      SELECT
        questions.question_text
      FROM questions
      WHERE questions.question_id = ${id};`;
      const questions = data;
      return questions;
    } catch (error) {
      console.error('Database Error:', error);
      throw new Error('Failed to fetch questions.');
    }
}

export async function fetchOptionsByID(id: string){
  try{
    const data = await sql<Question> `
    SELECT
      questions.options
    FROM questions
    WHERE questions.question_id = ${id};`;
    const questions = data;
    return questions;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch questions.');
  }
}

export async function fetchCorrectAnswerByID(id: string){
  try{
    const data = await sql<Question> `
    SELECT
      questions.correct_answer
    FROM questions
    WHERE questions.question_id = ${id};`;
    const questions = data;
    return questions;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch questions.');
  }
}

export async function fetchAcheivementByID(id: string){
    try{
      const data = await sql<Achievements> `
      SELECT
        achievement.achievement,
        achievement.description,
        achievement.requirement,
        achievement.status
      FROM achievements
      WHERE achievements.id = ${id};`;
      const achievements = data;
      return achievements;
    } catch (error) {
      console.error('Database Error:', error);
      throw new Error('Failed to fetch achievements.');
    }
}
