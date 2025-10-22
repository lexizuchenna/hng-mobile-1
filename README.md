# Trivia App

An engaging and interactive mobile quiz application built with React Native and Expo, powered by TypeScript. Challenge your knowledge with a diverse set of questions across various categories and track your performance with detailed statistics.

---

## Features

- **Dynamic Question Engine**: Fetches a randomized set of 10 trivia questions for each test session, ensuring a fresh experience every time.
- **Intuitive User Interface**: A clean, modern, and responsive design for a seamless quiz-taking experience.
- **Real-time Progress Tracking**: Navigate easily between questions and review your selected answers.
- **Comprehensive Result Analysis**: View your score, grade, remarks, and a detailed breakdown of correct and incorrect answers.
- **Question & Answer Review**: Revisit each question with its correct answer and your chosen response after completing a test.
- **Adaptive Theme**: Supports automatic light/dark mode based on system preferences.

## Getting Started

Follow these steps to set up and run the Trivia App on your local development environment.

### Installation

First, clone the repository to your local machine:

```bash
git clone https://github.com/lexizuchenna/hng-mobile-1.git
cd hng-mobile-1
```

Next, install the required dependencies using npm or yarn:

```bash
npx expo install
# or
yarn install
```

### Environment Variables

This project leverages Expo for environment configuration, primarily handled within `app.json` for build-time settings. No runtime `.env` files are explicitly required for local development beyond the default Expo setup.

## Usage

To start the development server and run the app:

```bash
npm start
# or
yarn start
```

- **Run on Android**: Scan the QR code with the Expo Go app on your Android device, or press `a` in the terminal.
- **Run on iOS**: Scan the QR code with the Expo Go app on your iOS device, or press `i` in the terminal.

### Playing the Game:

1.  **Start Test**: From the home screen, tap "Start Test" to begin a new quiz session with 10 random questions.
2.  **Answer Questions**: For each question, select one of the provided options. You can navigate between questions using the "Previous" and "Next" buttons.
3.  **Review Answers**: Before submitting, ensure you've answered all questions. Your selected answer for the current question will be highlighted.
4.  **Submit Test**: Once you've answered all 10 questions (the "Next" button will change to "Submit" on the last question), tap "Submit". A confirmation dialog will appear.
5.  **View Results**: After submission, you'll be redirected to the results screen. Here, you can switch between "Stats" to see your score, grade, and remarks, and "Questions/Answers" to review each question and its correct answer.
6.  **Start All Over**: Tap "Start All Over" on the results screen to return to the home screen and begin a new quiz.

## Technologies Used

| Technology           | Description                                       | Version    |
| :------------------- | :------------------------------------------------ | :--------- |
| **TypeScript**       | Strongly typed superset of JavaScript             | `~5.9.2`   |
| **React Native**     | Framework for building native mobile apps         | `0.81.4`   |
| **Expo**             | Framework for universal React applications        | `~54.0.13` |
| **React Navigation** | Routing and navigation for React Native apps      | `~7.1.8`   |
| **ESLint**           | Pluggable JavaScript linter                       | `~9.25.0`  |
| **Google Fonts**     | Integrated Roboto fonts for consistent typography | `~0.4.1`   |

## Author

**Alexander**

- LinkedIn: [Your LinkedIn Profile](https://linkedin.com/in/lexizuchenna)
- Twitter: [Your Twitter Handle](https://twitter.com/lexiz_tech)

---

[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=flat&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![React Native](https://img.shields.io/badge/React_Native-20232A?style=flat&logo=react&logoColor=61DAFB)](https://reactnative.dev/)
[![Expo](https://img.shields.io/badge/Expo-1B1F23?style=flat&logo=expo&logoColor=white)](https://expo.dev/)
