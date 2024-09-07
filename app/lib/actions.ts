'use server';

import { z } from 'zod';
import { sql } from '@vercel/postgres';
import bcrypt from 'bcrypt';
import { revalidatePath } from 'next/cache'; 
import { redirect } from 'next/navigation';
import { signIn } from '@/auth';
import { signOut } from '@/auth';
import { AuthError } from 'next-auth';

//Courses Actions
const CourseFormSchema = z.object({
    course_id: z.string(),
    title: z.string(),
    description: z.string(),
})

const CreateCourse = CourseFormSchema
const UpdateCourse = CourseFormSchema.omit({})
const DeleteCourse = CourseFormSchema.omit({})

export type CourseState = {
    errors?: {
        course_id?: string[];
        title?: string[];
        description?: string[];
    };
    message?: string | null;
}

export async function createCourse(prevState: CourseState, formData: FormData){
    const validatedFields = CreateCourse.safeParse({
        course_id: formData.get('course_id'),
        title: formData.get('title'),
        description: formData.get('description'),
    });

    if(!validatedFields.success){
        return {
            errors: validatedFields.error.flatten().fieldErrors,
            message: 'Missing Fields. Failed to Create Course.',
        };
    }
    
    const {course_id, title, description} = validatedFields.data;

    try {
        await sql`
        INSERT INTO courses (course_id, title, description)
        VALUES (${course_id}, ${title}, ${description})`
    } catch (error) {
        return {
          message: 'Database Error: Failed to Create Course.',
        };
      }
    revalidatePath('/admin/dashboard');
    redirect('/admin/dashboard');
}

export async function updateCourse(prevState: CourseState, formData: FormData){
    const validatedFields = UpdateCourse.safeParse({
        course_id: formData.get('course_id'),
        title: formData.get('title'),
        description: formData.get('description'),
    });

    if(!validatedFields.success){
        return {
            errors: validatedFields.error.flatten().fieldErrors,
            message: 'Missing Fields. Failed to Update Course.',
        };
    }
    
    const {course_id, title, description} = validatedFields.data;

    try {
        await sql`
        UPDATE courses
        SET title = ${title}, description = ${description}
        WHERE course_id = ${course_id}`
    } catch (error) {
        return {
          message: 'Database Error: Failed to Update Course.',
        };
      }
      revalidatePath('/admin/dashboard');
      redirect('/admin/dashboard');
}

export async function deleteCourse(prevState: CourseState, formData: FormData) {
      const validatedFields = DeleteCourse.safeParse({
        course_id: formData.get('course_id'),
      });
    if(!validatedFields.success){
      return {
          errors: validatedFields.error.flatten().fieldErrors,
          message: 'Missing Fields. Failed to Delete Course.',
      };
    }

    const {course_id} = validatedFields.data;

    try {
        await sql`DELETE FROM courses 
                  WHERE course_id = ${course_id}`;
        revalidatePath('/user/courses');
        redirect('/user/courses');
        return { message: 'Deleted Course.' };
      } catch (error) {
        revalidatePath('/user/courses');
        redirect('/user/courses');
        return {
          message: 'Database Error: Failed to Delete Course.',
        };
      }
      
}

// End of Courses Actions

// Vocab Actions
const VocabFormSchema = z.object({
    vocab_id: z.string(),
    vocab: z.string(),
    meaning: z.string(),
    example: z.string(),
})

export type VocabState = {
    errors?: {
        vocab_id?: string[];
        vocab?: string[];
        meaning?: string[];
        example?: string[];
    };
    message?: string | null;
}

const CreateVocab = VocabFormSchema.omit({});
const UpdateVocab = VocabFormSchema.omit({vocab_id: true});

export async function createVocab(prevState: VocabState, formData: FormData){
    const validatedFields = CreateVocab.safeParse({
        vocab_id: formData.get('vocab_id'),
        vocab: formData.get('vocab'),
        meaning: formData.get('meaning'),
        example: formData.get('example'),
    });

    if(!validatedFields.success){
        return {
            errors: validatedFields.error.flatten().fieldErrors,
            message: 'Missing Fields. Failed to Create Vocab.',
        };
    }
    
    const {vocab_id, vocab, meaning, example} = validatedFields.data;

    try {
        await sql`
        INSERT INTO vocabList (vocab_id, vocab, meaning, example)
        VALUES (${vocab_id}, ${vocab}, ${meaning}, ${example})`
    } catch (error) {
        return {
          message: 'Database Error: Failed to Create Vocab.',
        };
      }
    revalidatePath('/admin/dashboard');
    redirect('/admin/dashboard');
}

export async function updateVocab(vocab_id: string, prevState: VocabState, formData: FormData){
    const validatedFields = UpdateVocab.safeParse({
        vocab: formData.get('vocab'),
        meaning: formData.get('meaning'),
        example: formData.get('example'),
    });

    if(!validatedFields.success){
        return {
            errors: validatedFields.error.flatten().fieldErrors,
            message: 'Missing Fields. Failed to Update Vocab.',
        };
    }
    
    const {vocab, meaning, example} = validatedFields.data;

    try {
        await sql`
        UPDATE vocabList
        SET vocab = ${vocab}, meaning = ${meaning}, example = ${example}
        WHERE vocab_id = ${vocab_id}`
    } catch (error) {
        return {
          message: 'Database Error: Failed to Update Vocab.',
        };
      }
      revalidatePath('/admin/dashboard');
      redirect('/admin/dashboard');
}

export async function deleteVocab(vocab_id: string) {
    try {
        await sql`DELETE FROM vocabList WHERE vocab_id = ${vocab_id}`;
        revalidatePath('/admin/dashboard');
        return { message: 'Deleted Vocab.' };
      } catch (error) {
        return {
          message: 'Database Error: Failed to Delete Vocab.',
        };
      }
}
// End of Vocab Actions

// Question Actions
const QuestionFormSchema = z.object({
    question_id: z.string(),
    quiz_id: z.string(),
    question_text: z.string(),
    options: z.array(z.string()),
    correct_answer: z.string(),
})

export type QuestionState = {
    errors?: {
        question_id?: string[],
        quiz_id?: string[],
        question_text?: string[],
        options?: string[][],
        correct_answer?: string[],
    };
    message?: string | null;
}

const CreateQuestion = QuestionFormSchema.omit({});
const UpdateQuestion = QuestionFormSchema.omit({question_id: true, quiz_id: true});

export async function createQuestion(prevState: QuestionState, formData: FormData){
    const validatedFields = CreateQuestion.safeParse({
        question_id: formData.get('question_id'),
        quiz_id: formData.get('quiz_id'),
        question_text: formData.get('question_text'),
        options: formData.get('options'),
        correct_answer: formData.get('correct_answer')
    });

    if(!validatedFields.success){
        return {
            errors: validatedFields.error.flatten().fieldErrors,
            message: 'Missing Fields. Failed to Create Question.',
        };
    }
    
    const {question_id, quiz_id, question_text, options, correct_answer} = validatedFields.data;

    try {
        await sql`
        INSERT INTO questions (question_id, quiz_id, question_text, options, correct_answer)
        VALUES (${question_id}, ${quiz_id}, ${question_text}, ${JSON.stringify(options)}, ${correct_answer})`
    } catch (error) {
        return {
          message: 'Database Error: Failed to Create Question.',
        };
      }
      revalidatePath('/admin/dashboard');
      redirect('/admin/dashboard');
}

export async function updateQuestion(question_id: string, prevState: QuestionState, formData: FormData){
    const validatedFields = UpdateQuestion.safeParse({
        question_text: formData.get('question_text'),
        options: formData.get('options'),
        correct_answer: formData.get('correct_answer')
    });

    if(!validatedFields.success){
        return {
            errors: validatedFields.error.flatten().fieldErrors,
            message: 'Missing Fields. Failed to Update Question.',
        };
    }
    
    const {question_text, options, correct_answer} = validatedFields.data;

    try {
        await sql`
        UPDATE questions
        SET question_text = ${question_text}, options = ${JSON.stringify(options)}, correct_answer = ${correct_answer}
        WHERE question_id = ${question_id}`
    } catch (error) {
        return {
          message: 'Database Error: Failed to Update Question.',
        };
      }
      revalidatePath('/admin/dashboard');
      redirect('/admin/dashboard');
}

export async function deleteQuestion(question_id: string) {
    try {
        await sql`DELETE FROM questions WHERE question_id = ${question_id}`;
        revalidatePath('/admin/dashboard');
        return { message: 'Deleted Question.' };
      } catch (error) {
        return {
          message: 'Database Error: Failed to Delete Question.',
        };
      }
}
// End of Questions Actions

// Quiz Actions
const QuizFormSchema = z.object({
    quiz_id: z.string(),
    lesson_id: z.string(),
    title: z.string(),
    questions: z.array(QuestionFormSchema),
})

export type QuizState = {
    errors?: {
        quiz_id?: string[],
        lesson_id?: string[],
        title?: string[]
    };
    message?: string | null;
}

const CreateQuiz = QuizFormSchema.omit({});
const UpdateQuiz = QuizFormSchema.omit({});

export async function createQuiz(prevState: QuizState, formData: FormData){
    const validatedFields = CreateQuiz.safeParse({
        quiz_id: formData.get('quiz_id'),
        lesson_id: formData.get('lesson_id'),
        title: formData.get('title')
    });

    if(!validatedFields.success){
        return {
            errors: validatedFields.error.flatten().fieldErrors,
            message: 'Missing Fields. Failed to Create Quiz.',
        };
    }
    
    const {quiz_id, lesson_id, title} = validatedFields.data;

    try {
        await sql`
        INSERT INTO quizzes (quiz_id, lesson_id, title)
        VALUES (${quiz_id}, ${lesson_id}, ${title})`
    } catch (error) {
        return {
          message: 'Database Error: Failed to Create Quiz.',
        };
      }
      revalidatePath('/admin/dashboard');
      redirect('/admin/dashboard');
}

export async function updateQuiz(prevState: QuizState, formData: FormData){
    const validatedFields = UpdateQuiz.safeParse({
        quiz_id: formData.get('quiz_id'),
        lesson_id: formData.get('lesson_id'),
        title: formData.get('title')
    });

    if(!validatedFields.success){
        return {
            errors: validatedFields.error.flatten().fieldErrors,
            message: 'Missing Fields. Failed to Update Quiz.',
        };
    }
    
    const {quiz_id, lesson_id, title} = validatedFields.data;


    try {
        await sql`
        UPDATE quizzes
        SET title = ${title}}
        WHERE quiz_id = ${quiz_id}`
    } catch (error) {
        return {
          message: 'Database Error: Failed to Update Quiz.',
        };
      }
      revalidatePath('/admin/dashboard');
      redirect('/admin/dashboard');
}

export async function deleteQuiz(prevState: QuizState, formData: FormData) {
      const validatedFields = UpdateQuiz.safeParse({
        quiz_id: formData.get('quiz_id'),
    });

    if(!validatedFields.success){
        return {
            errors: validatedFields.error.flatten().fieldErrors,
            message: 'Missing Fields. Failed to Delete Quiz.',
        };
    }

    const {quiz_id} = validatedFields.data;
    try {
        await sql`DELETE FROM quizzes WHERE question_id = ${quiz_id}`;
        revalidatePath('/admin/dashboard');
        return { message: 'Deleted Quiz.' };
      } catch (error) {
        return {
          message: 'Database Error: Failed to Delete Quiz.',
        };
      }
}
// End of Quiz Actions

//Lessons Actions

const LessonFormSchema = z.object({
    lesson_id: z.string(),
    course_id: z.string(),
    title: z.string(),
    content: z.string(),
    vocabList: z.array(VocabFormSchema),
    quiz: z.array(QuizFormSchema),
})

export type LessonState = {
    errors?: {
        lesson_id?: string[];
        course_id?: string[];
        title?: string[];
        content?: string[];
        vocabList?: string[][];
        quiz?: string[][];
    };
    message?: string | null;
}

const CreateLesson = LessonFormSchema.omit({});
const UpdateLesson = LessonFormSchema.omit({lesson_id: true, course_id: true});

export async function createLesson(prevState: LessonState, formData: FormData){
    const validatedFields = CreateLesson.safeParse({
        lesson_id: formData.get('lesson_id'),
        course_id: formData.get('course_id'),
        title: formData.get('title'),
        vocabList: formData.get('vocabList'),
        quiz: formData.get('quiz'),
    });

    if(!validatedFields.success){
        return {
            errors: validatedFields.error.flatten().fieldErrors,
            message: 'Missing Fields. Failed to Create Lessons.',
        };
    }
    
    const {lesson_id, course_id, title, vocabList,  quiz} = validatedFields.data;

    try {
        await sql`
        INSERT INTO lessons (lesson_id, course_id, title, vocabList, quiz)
        VALUES (${lesson_id}, ${course_id}, ${title}, ${JSON.stringify(vocabList)}, ${JSON.stringify(quiz)})`
    } catch (error) {
        return {
          message: 'Database Error: Failed to Create Lesson.',
        };
      }
    //revalidatePath('/dashboard/invoices');
    //redirect('/dashboard/invoices');
}

export async function updateLesson(lesson_id: string, prevState: LessonState, formData: FormData){
    const validatedFields = UpdateLesson.safeParse({
        title: formData.get('title'),
        vocabList: formData.get('vocabList'),
        quiz: formData.get('quiz'),
    });

    if(!validatedFields.success){
        return {
            errors: validatedFields.error.flatten().fieldErrors,
            message: 'Missing Fields. Failed to Update Lesson.',
        };
    }
    
    const {title, vocabList, quiz} = validatedFields.data;

    try {
        await sql`
        UPDATE lessons
        SET title = ${title}, vocabList = ${JSON.stringify(vocabList)}, quiz = ${JSON.stringify(quiz)}
        WHERE lesson_id = ${lesson_id}`
    } catch (error) {
        return {
          message: 'Database Error: Failed to Update Lesson.',
        };
      }
    //revalidatePath('/dashboard/invoices');
    //redirect('/dashboard/invoices');
}

export async function deleteLesson(lesson_id: string) {
    try {
        await sql`DELETE FROM lesson WHERE lesson_id = ${lesson_id}`;
        //revalidatePath('/dashboard/invoices');
        return { message: 'Deleted Lesson.' };
      } catch (error) {
        return {
          message: 'Database Error: Failed to Delete Lesson.',
        };
      }
}

// End of Lessons Actions

// Achievement Actions

const AchievementFormSchema = z.object({
    id: z.string(),
    achievement: z.string(),
    description: z.string(),
    requirement: z.string(),
    status: z.enum(['locked', 'unlocked'],  {invalid_type_error: 'Please select an achievement status'}) 
})

export type AchievementState = {
    errors?: {
        id?: string[];
        achievement?: string[];
        description?: string[];
        requirement?: string[];
        status?: string[];
    };
    message?: string | null;
}

const CreateAchievement = AchievementFormSchema.omit({});
const UpdateAchievement = AchievementFormSchema.omit({id: true});

export async function createAchievement(prevState: AchievementState, formData: FormData){
    const validatedFields = CreateAchievement.safeParse({
        id: formData.get('id'),
        achievement: formData.get('achievement'),
        description: formData.get('title'),
        requirement: formData.get('requirement'),
        status: formData.get('status'),
    });

    if(!validatedFields.success){
        return {
            errors: validatedFields.error.flatten().fieldErrors,
            message: 'Missing Fields. Failed to Create Achievement.',
        };
    }
    
    const {id, achievement, description, requirement, status} = validatedFields.data;

    try {
        await sql`
        INSERT INTO achievements (id, achievement, description, requirement, status)
        VALUES (${id}, ${achievement}, ${description}, ${requirement}, ${status})`
    } catch (error) {
        return {
          message: 'Database Error: Failed to Create Achievement.',
        };
      }
    //revalidatePath('/dashboard/invoices');
    //redirect('/dashboard/invoices');
}

export async function updateAchievement(id: string, prevState: AchievementState, formData: FormData){
    const validatedFields = UpdateAchievement.safeParse({
        achievement: formData.get('achievement'),
        description: formData.get('title'),
        requirement: formData.get('requirement'),
        status: formData.get('status'),
    });

    if(!validatedFields.success){
        return {
            errors: validatedFields.error.flatten().fieldErrors,
            message: 'Missing Fields. Failed to Update Achievement.',
        };
    }
    
    const {achievement, description, requirement, status} = validatedFields.data;

    try {
        await sql`
        UPDATE achievements
        SET achievement = ${achievement}, description = ${description}, requirement = ${requirement}, status = ${status}
        WHERE id = ${id}`
    } catch (error) {
        return {
          message: 'Database Error: Failed to Update Lesson.',
        };
      }
    //revalidatePath('/dashboard/invoices');
    //redirect('/dashboard/invoices');
}

export async function deleteAchievement(id: string) {
    try {
        await sql`DELETE FROM achievements WHERE id = ${id}`;
        //revalidatePath('/dashboard/invoices');
        return { message: 'Deleted Achievement.' };
      } catch (error) {
        return {
          message: 'Database Error: Failed to Delete Achievement.',
        };
      }
}

// Connect the auth logic with your login form: 
export async function authenticate(
  prevState: string | undefined,
  formData: FormData,
) {
  try {
    await signIn('credentials', formData);
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case 'CredentialsSignin':
          return 'Invalid credentials.';
        default:
          return 'Something went wrong.';
      }
    }
    throw error;
  }
}

export async function signOutAction() {
  'use server'; 
  await signOut(); 
}

// Sign up
// Define the schema for user registration
const UserFormSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email address"),
  password: z.string().min(6, "Password must be at least 6 characters long"),
});

// Create user schemas
const CreateUser = UserFormSchema;

// Type for user registration state
export type UserState = {
  errors?: {
    name?: string[];
    email?: string[];
    password?: string[];
  };
  message?: string | null;
};

// Async function to register a new user
export async function register(formData: FormData) {
  const validatedFields = CreateUser.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    password: formData.get("password"),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: "Missing fields. Failed to register.",
    };
  }

  const { name, email, password } = validatedFields.data;
  const hashedPassword = await bcrypt.hash(password, 10);

  try {
    await sql`
      INSERT INTO users (name, email, password)
      VALUES (${name}, ${email}, ${hashedPassword})`; 
  } catch (error) {
    console.error("Database Error:", error);
    return {
      message: "Database Error: Failed to register user.",
    };
  }

  return {
    message: "User registered successfully.",
  };
}
