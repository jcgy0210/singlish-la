import { sql } from '@vercel/postgres';
import {
  VocabList,
  Achievements,
  Courses,
  Lesson,
  Quiz,
  Question,
} from './definitions';

export async function fetchVocabsById(id: string) {
    try {
      const data = await sql<VocabList>`
        SELECT
          vocabs.id,
          vocabs.vocab,
          vocabs.meaning,
          vocabs.example
        FROM vocabs
        WHERE vocabs.id = ${id};
      `;
        const vocabs = data.rows;
        return vocabs;
    } catch (error) {
      console.error('Database Error:', error);
      throw new Error('Failed to fetch vocabs.');
    }
  }

  // lesson completed -> add those vocabs to user profile's vocab dictionary
  export async function vocabsAddToDict() {
    try{

    } catch (error) {
        console.error('Database Error:', error);
        throw new Error('Failed to fetch vocabs.');  
    }
  }
  