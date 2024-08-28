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
            ON CONFLICT (id) DO NOTHING;
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
  await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
  await client.sql`
    CREATE TABLE IF NOT EXISTS courses (
      course_id VARCHAR(10) PRIMARY KEY,
      title VARCHAR(255) NOT NULL,
      description TEXT NOT NULL,
      lessons JSONB
    );
  `;

  const insertedCourses = await Promise.all(
    courses.map(async (course) => {
      return client.sql`
        INSERT INTO courses (course_id, title, description, lessons)
        VALUES (${course.course_id}, ${course.title}, ${course.description}})
        ON CONFLICT (course_id) DO NOTHING;  // Use course_id instead of id
      `;
    }),
  );
  
  return insertedCourses;
}

async function seedLessons() {
  await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
  
  // Create the lessons table with appropriate data types
  await client.sql`
    CREATE TABLE IF NOT EXISTS lessons (
      lesson_id VARCHAR(10) PRIMARY KEY, -- Assuming lesson_id is a string
      course_id VARCHAR(10) NOT NULL, -- Assuming course_id is a string
      title VARCHAR(255) NOT NULL,
      vocabList JSONB, -- Store vocabList as JSONB
      quiz JSONB -- Store quiz as JSONB
    );
  `;

  const insertedLessons = await Promise.all(
    lessons.map(async (lesson) => {
      return client.sql`
        INSERT INTO lessons (lesson_id, course_id, title, vocabList, quiz)
        VALUES (
          ${lesson.lesson_id}, 
          ${lesson.course_id}, 
          ${lesson.title}, 
        )
        ON CONFLICT (lesson_id) DO NOTHING;  // Use lesson_id for conflict resolution
      `;
    }),
  );

  courses.forEach((course) => {
    const query = `
      INSERT INTO courses (course_id, title, description, lessons)
      VALUES (
        '${course.course_id}', 
        '${course.title}', 
        '${course.description}', 
      )
      ON CONFLICT (course_id) DO NOTHING;
    `;
    console.log("Generated SQL query:", query);
  });

  return insertedLessons;
}


export async function GET() {
    try {
      await client.sql`BEGIN`;
      //await seedUsers();
      //await seedAdmins();
       await seedCourses();
      //await seedLessons();

      await client.sql`COMMIT`;
  
      return Response.json({ message: 'Database seeded successfully' });
    } catch (error) {
      await client.sql`ROLLBACK`;
      return Response.json({ error }, { status: 500 });
    }
  }