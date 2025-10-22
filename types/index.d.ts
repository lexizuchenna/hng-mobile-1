export {};

declare global {
  type themeColors = {
    light: {
      primaryBg: string;
      secondaryBg: string;
      primaryText: string;
      secondaryText: string;
      accent: string;
    };

    dark: {
      primaryBg: string;
      secondaryBg: string;
      primaryText: string;
      secondaryText: string;
      accent: string;
    };
  };

  type SubmitSliderProps = {
    visible: boolean;
    onComplete: () => any;
    onCancel: () => any;
    headText: string | React.ReactNode;
    bodyText: string | React.ReactNode;
  };

  type QuestionAndAnswers = {
    question: string;
    user_answer: string;
    correct_answer: string;
    id: number;
    point: number;
  };

  type ResultData = {
    totalQuestions: number;
    correctAnswers: number;
    questionAndAnswers: QuestionAndAnswers[];
  };

  type MainContextType = {
    questions: questionType[];
    setQuestions: React.Dispatch<React.SetStateAction<questionType[]>>;

    resultData: ResultData | null;
    setResultData: React.Dispatch<React.SetStateAction<ResultData | null>>;
  };

  type RootStackParamList = {
    home: undefined;
    test: undefined;
    result: undefined;
  };

  type questionType = {
    q: string;
    id: number;
    options: {
      A: string;
      B: string;
      C: string;
      D: string;
    };
    correct: "A" | "B" | "C" | "D";
  };
}
