
-- This makes sure that foreign_key constraints are observed and that errors will be thrown for violations
PRAGMA foreign_keys=ON;

BEGIN TRANSACTION;

-- Create your tables with SQL commands here (watch out for slight syntactical differences with SQLite vs MySQL)

CREATE TABLE IF NOT EXISTS users (
    user_id INTEGER PRIMARY KEY AUTOINCREMENT,
    user_name TEXT NOT NULL,
    email_address TEXT NOT NULL
);

CREATE TABLE IF NOT EXISTS admins (
    admin_id INTEGER PRIMARY KEY AUTOINCREMENT,
    admin_user_name TEXT NOT NULL,
    email_address TEXT NOT NULL
);

CREATE TABLE IF NOT EXISTS courses (
    course_id INTEGER PRIMARY KEY AUTOINCREMENT,
    course_title TEXT NOT NULL,
    course_description TEXT NOT NULL,
    FOREIGN KEY(lesson_id) REFERENCES lessons(lesson_id) ON DELETE CASCADE
    -- FOREIGN KEY(quiz_id) REFERENCES quizes(quiz_id)
);

CREATE TABLE IF NOT EXISTS lessons (
    lesson_id INTEGER PRIMARY KEY AUTOINCREMENT,
    lesson_title TEXT NOT NULL,
    lesson_description TEXT NOT NULL
    -- FOREIGN KEY(course_id) REFERENCES courses(course_id),
    -- FOREIGN KEY(vocab_id) REFERENCES vocabs(vocab_id)
);

CREATE TABLE IF NOT EXISTS quizes (
    quiz_id INTEGER PRIMARY KEY AUTOINCREMENT,
    quiz_title TEXT NOT NULL
    -- FOREIGN KEY(course_id) REFERENCES courses(course_id),
    -- FOREIGN KEY(question_id) REFERENCES questions(questions_id)
);

CREATE TABLE IF NOT EXISTS questions (
    question_id INTEGER PRIMARY KEY AUTOINCREMENT,
    question_text TEXT NOT NULL,
    correct_answer TEXT NOT NULL
    -- FOREIGN KEY(options_id) REFERENCES options(option_id)
);



--  Original 
-- CREATE TABLE IF NOT EXISTS articles (
--     article_id INTEGER PRIMARY KEY AUTOINCREMENT,
--     blog_title TEXT NOT NULL,
--     author_name TEXT NOT NULL,
--     blog_sub TEXT NOT NULL,
--     blog_content TEXT NOT NULL,
--     status TEXT NOT NULL DEFAULT 'draft',
--     likes INTEGER DEFAULT 0,
--     dislikes INTEGER DEFAULT 0,
--     view_count INTEGER DEFAULT 0,
--     date_created DATETIME DEFAULT CURRENT_TIMESTAMP,
--     date_published DATETIME,
--     date_last_edited DATETIME
-- );

-- --  Original
-- CREATE TABLE IF NOT EXISTS author_settings (
--     author_id INTEGER PRIMARY KEY AUTOINCREMENT,
--     blog_title TEXT NOT NULL,
--     author_name TEXT NOT NULL,
--     blog_sub TEXT NOT NULL,
--     blog_content TEXT NOT NULL
-- );

-- --  Original
-- CREATE TABLE IF NOT EXISTS comments (
--     comment_id INTEGER PRIMARY KEY AUTOINCREMENT,
--     article_id INTEGER,
--     comment_name TEXT NOT NULL,
--     comment_text TEXT NOT NULL,
--     created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
--     FOREIGN KEY(article_id) REFERENCES articles(article_id) ON DELETE CASCADE
-- );

-- Insert default data (if necessary here)

-- Set up three users
INSERT INTO users ('user_name', 'email_address') VALUES ('Simon Star', 'simon@gmail.com');
INSERT INTO users ('user_name', 'email_address') VALUES ('Dianne Dean', 'dianne@yahoo.co.uk');
INSERT INTO users ('user_name', 'email_address') VALUES ('Harry Hilbert', 'harry@hotmail.com');

-- Give Simon two email addresses and Diane one, but Harry has none
INSERT INTO admins ('admin_id', 'admin_user_name', 'email_address') VALUES (1, 'Joash', 'joashchua24@gmail.com'); 
INSERT INTO admins ('admin_id', 'admin_user_name', 'email_address') VALUES (2, 'Joash1', 'joashchua25@gmail.com'); 
INSERT INTO admins ('admin_id', 'admin_user_name', 'email_address') VALUES (3, 'Joash2', 'joashchua26@gmail.com'); 

--  Original
-- INSERT INTO author_settings('blog_title', 'author_name', 'blog_sub', 'blog_content') VALUES('Default Title', 'Default Name', 'Default Sub', 'Default Content');

INSERT INTO courses ('course_id', 'course_title', 'course_description') VALUES (1, 'Course 1', 'This is course 1');

INSERT INTO lessons ('lesson_id', 'lesson_title', 'lesson_description') VALUES (1, 'Lesson 1', 'This is lesson 1');

COMMIT;
