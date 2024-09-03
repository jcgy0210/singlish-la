import bcrypt from 'bcrypt';
import { db } from '@vercel/postgres';
import { users,
  admins,
  vocabList,
  courses,
  lessons,
  quizzes,
  questions,
  achievements, } from '../lib/placeholder-data';

const client = await db.connect();

async function seedUsers() {
    await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
    await client.sql`
      CREATE TABLE IF NOT EXISTS users (
        id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        email TEXT NOT NULL UNIQUE,
        password TEXT NOT NULL
      );
    `;
    const insertedUsers = await Promise.all(
        users.map(async (user) => {
          const hashedPassword = await bcrypt.hash(user.password, 10);
          return client.sql`
            INSERT INTO users (id, name, email, password)
            VALUES (${user.id}, ${user.name}, ${user.email}, ${hashedPassword})
            ON CONFLICT (email) DO NOTHING;
          `;
        }),
      );
    
      return insertedUsers;
}

async function seedAdmins() {
    await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
    await client.sql`
      CREATE TABLE IF NOT EXISTS admins (
        id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        email TEXT NOT NULL UNIQUE,
        password TEXT NOT NULL
      );
    `;
    const insertedAdmins = await Promise.all(
        admins.map(async (admin) => {
          const hashedPassword = await bcrypt.hash(admin.password, 10);
          return client.sql`
            INSERT INTO admins (id, name, email, password)
            VALUES (${admin.id}, ${admin.name}, ${admin.email}, ${hashedPassword})
            ON CONFLICT (id) DO NOTHING;
          `;
        }),
      );
    
      return insertedAdmins;
}

async function seedCourses() {
  await client.sql`
    CREATE TABLE IF NOT EXISTS courses (
      course_id VARCHAR(10) PRIMARY KEY,
      title VARCHAR(255) NOT NULL,
      description TEXT NOT NULL
    );
  `;
  const insertedCourses = await Promise.all(
    courses.map(async (course) => {
      return client.sql`
        INSERT INTO courses (course_id, title, description)
        VALUES (${course.course_id}, ${course.title}, ${course.description})
        ON CONFLICT (course_id) DO NOTHING; 
      `;
    }),
  );
  
  return insertedCourses;
}

async function seedLessons() {  
  await client.sql`
    CREATE TABLE IF NOT EXISTS lessons (
      lesson_id VARCHAR(10) PRIMARY KEY, 
      course_id VARCHAR(10) REFERENCES courses(course_id) ON DELETE CASCADE, 
      title TEXT NOT NULL
    );
  `;
  const insertedLessons = await Promise.all(
    lessons.map(async (lesson) => {
      return client.sql`
        INSERT INTO lessons (lesson_id, course_id, title)
        VALUES (
          ${lesson.lesson_id}, 
          ${lesson.course_id}, 
          ${lesson.title}
        )
        ON CONFLICT (lesson_id) DO NOTHING;  
      `;
    }),
  );

  return insertedLessons;
} 

async function seedVocabs(){
    await client.sql`
        CREATE TABLE IF NOT EXISTS vocabList (
            vocab_id VARCHAR(10) PRIMARY KEY,
            lesson_id VARCHAR(10) REFERENCES lessons(lesson_id) ON DELETE CASCADE,
            vocab TEXT NOT NULL,
            meaning TEXT NOT NULL,
            example TEXT NOT NULL
        );
    `;
    const insertedVocabs = await Promise.all(
        vocabList.map(async (vocab) => {
            return client.sql`
                INSERT INTO vocabList (vocab_id, lesson_id, vocab, meaning, example)
                VALUES (
                    ${vocab.vocab_id}, ${vocab.lesson_id}, ${vocab.vocab}, ${vocab.meaning}, ${vocab.example}
                )
                ON CONFLICT (vocab_id) DO NOTHING;
            `;
        }),
    );

    return insertedVocabs;
}

async function seedQuizzes() {
    await client.sql`
        CREATE TABLE IF NOT EXISTS quizzes (
            quiz_id VARCHAR(10) PRIMARY KEY,
            lesson_id VARCHAR(10) REFERENCES lessons(lesson_id) ON DELETE CASCADE,
            title TEXT NOT NULL
        );
    `;
    const insertedQuizzes = await Promise.all(
        quizzes.map(async (quiz) => {
            return client.sql`
                INSERT INTO quizzes (quiz_id, lesson_id, title)
                VALUES (${quiz.quiz_id}, ${quiz.lesson_id}, ${quiz.title})
                ON CONFLICT (quiz_id) DO NOTHING;
            `;
        }),
    );
    
    return insertedQuizzes;
}

async function seedQuestions(){
    await client.sql`
        CREATE TABLE IF NOT EXISTS questions (
            question_id VARCHAR(10) PRIMARY KEY,
            quiz_id VARCHAR(10) REFERENCES quizzes(quiz_id) ON DELETE CASCADE,
            question_text TEXT NOT NULL,
            options JSONB,
            correct_answer TEXT NOT NULL
        );
    `;
    const insertedQuestions = await Promise.all(
        questions.map(async (question) => {
            return client.sql`
                INSERT INTO questions (question_id, quiz_id, question_text, options, correct_answer)
                VALUES (
                    ${question.question_id}, 
                    ${question.quiz_id}, 
                    ${question.question_text}, 
                    ${JSON.stringify(question.options)}, 
                    ${question.correct_answer}
                )
                ON CONFLICT (question_id) DO NOTHING;
            `;
        }),
    );

    return insertedQuestions;
}

async function seedAchievements(){
    await client.sql`
        CREATE TABLE IF NOT EXISTS achievements (
            id VARCHAR(10) PRIMARY KEY,
            achievement TEXT NOT NULL,
            description TEXT NOT NULL,
            requirement TEXT NOT NULL,
            status VARCHAR(10) CHECK (status IN ('locked', 'unlocked')) NOT NULL 
        );
    `;
    const insertedAchievements = await Promise.all(
        achievements.map(async (achievement) => {
            return client.sql`
                INSERT INTO achievements (id, achievement, description, requirement, status)
                VALUES (
                    ${achievement.id}, 
                    ${achievement.achievement}, 
                    ${achievement.description}, 
                    ${achievement.requirement}, 
                    ${achievement.status}
                )
                ON CONFLICT (id) DO NOTHING;
            `;
        }),
    );

    return insertedAchievements;
}

export async function GET() {
    try {
      await client.sql`BEGIN`;
      await seedUsers();
      await seedAdmins();
      await seedCourses();
      await seedLessons();
      await seedVocabs();
      await seedQuizzes();
      await seedQuestions();
      await seedAchievements();
      await client.sql`COMMIT`;
      
      return Response.json({ message: 'Database seeded successfully' });
    } catch (error) {
      await client.sql`ROLLBACK`;
      return Response.json({ error }, { status: 500 });
    }
  }