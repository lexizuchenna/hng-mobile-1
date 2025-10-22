import { questions } from "@/constants";

export function getRandomQuestions() {
  const shuffled = [...questions].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, 10);
}

export function initQuestionAndAnswers(questions: questionType[]) {
  return questions.map((question) => ({
    question: question.q,
    user_answer: "",
    correct_answer: question.options[question.correct],
    id: question.id,
    point: 0,
  }));
}

export function calculateScore(totalQ: number, correctAns: number) {
  return ((correctAns * 100) / totalQ).toFixed(2);
}

export function calculateGrade(score: string) {
  const percentage = parseInt(score);

  let grade = null;
  let remarks = null;

  if (percentage >= 70) {
    grade = "A";
  } else if (percentage >= 60 && percentage <= 69) {
    grade = "B";
  } else if (percentage >= 50 && percentage <= 59) {
    grade = "C";
  } else if (percentage >= 40 && percentage <= 49) {
    grade = "D";
  } else {
    grade = "F";
  }

  if (percentage >= 40) {
    remarks = "Congratulations, YOU PASSED!";
  } else {
    remarks = "Sorry, YOU FAILED!";
  }

  return {
    grade,
    remarks,
  };
}
