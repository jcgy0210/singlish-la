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

export async function fetchVocabsById(ids: string[]) {
    try {
      const data = await sql<VocabList[]>`
        SELECT
          vocabList.vocab,
          vocabList.meaning,
          vocabList.example
        FROM vocabList
        WHERE vocabList.vocab_id IN (${sql.join(ids, sql`, `)});
        `; 
        const vocabs = data;
        return vocabs;
    } catch (error) {
      console.error('Database Error:', error);
      throw new Error('Failed to fetch vocabs.');
    }
  }
  // to fetch: const selectedVocabs = await fetchVocabsById(['1.1', '1.2', '1.3']);

