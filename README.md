# SinglishLA! - Singlish Learning App

Welcome to the Singlish Learning App! This project is designed to help foreigners immerse themselves in Singaporean culture by learning Singlish, the colloquial English-based creole spoken in Singapore. The app provides insights into local customs, traditions, and linguistic nuances, equipping users with the skills to understand and use Singlish effectively.

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [License](#license)

## Features

- **Courses and Lessons**: Three courses, each containing three lessons, focused on different scenarios in Singapore, such as eating at a hawker centre, chatting with locals, and exploring attractions.
- **Quizzes**: Each lesson is followed by a quiz with three questions to reinforce learning.
- **Vocab dict**: The vocabs you learnt after lessons will be added into your personal dictionary in your profile.
- **Achievements**: Users earn badges for completing lessons and quizzes, fostering engagement and motivation.
- **User Authentication**: Secure login for users and admins with email and password.
- **Admin Management**: Admins can add new courses, lessons, quizzes, and vocabularies.
- **Responsive UI**: The app features an intuitive, user-friendly interface accessible to all users, including those who are not tech-savvy.

## Tech Stack

- **Frontend**: Next.js, React
- **Backend**: Next.js
- **Database**: Vercel Postgres
- **Authentication**: bcrypt for password hashing
- **Deployment**: Vercel
- **Package Manager**: pnpm

## Installation

To set up the project locally, follow these steps:

1. **Clone the repository**:
   ```bash
   git clone https://github.com/jcgy0210/singlish-la.git
   ```
   
2. **Navigate to the project directory**:
   ```bash
   cd singlish-learning-app
   ```

3. **Install dependencies using pnpm**:
   ```bash
   pnpm install
   ```

4. **Set up environment variables**:
   - Create a `.env` file in the root directory.
   - Add your PostgreSQL database credentials and other environment-specific variables.

   Example `.env` file:
   ```bash
   DATABASE_URL=your_postgres_database_url
   ```

5. **Seed the database**:
   ```bash
   pnpm run seed
   ```

6. **Run the development server**:
   ```bash
   pnpm run dev
   ```
   The app will be available at `http://localhost:3000`.

## Usage

- **User Interface**: Access the app in your browser at `http://localhost:3000`.
- **Admin Panel**: Log in as an admin to add or manage courses, lessons, quizzes, and vocabularies.
- **Learning Path**: Start with the first course and progress through the lessons, taking quizzes and earning achievements along the way.

## Project Structure

- `pages/`: Contains the Next.js pages for both users and admins.
- `components/`: Reusable React components used throughout the app.
- `lib/`: Placeholder data and utility functions.
- `styles/`: CSS and styling files.
- `public/`: Static assets like images and icons.

## License

This project is licensed under the MIT License. See the [LICENSE](MIT-LICENSE.txt) file for more details.

