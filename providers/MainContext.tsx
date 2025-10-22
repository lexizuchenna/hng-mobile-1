import { createContext, ReactNode, useContext, useState } from "react";

import { getRandomQuestions } from "@/utils";

const Context = createContext<MainContextType | null>(null);

export function MainContext({ children }: { children: ReactNode }) {
  const [resultData, setResultData] = useState<ResultData | null>(null);
  const [questions, setQuestions] = useState<questionType[]>(
    getRandomQuestions()
  );

  const value = {
    questions,
    setQuestions,

    resultData,
    setResultData,
  };
  return <Context.Provider value={value}>{children}</Context.Provider>;
}

export const useMainContext = () => {
  const context = useContext(Context);

  if (!context) {
    throw new Error(
      "useMainContext must be used within a MainContext Provider"
    );
  }

  return context;
};
