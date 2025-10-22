import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import React, { useEffect, useState } from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

import Loader from "@/components/Loader";
import SectionHeader from "@/components/SectionHeader";
import SubmitSlider from "@/components/SubmitSlider";
import { COLORS, SIZES } from "@/constants";
import { useMainContext } from "@/providers";
import { initQuestionAndAnswers } from "@/utils";

export default function Test() {
  const [ready, setReady] = useState(false);
  const { questions, setResultData } = useMainContext();
  const { reset } = useNavigation<NativeStackNavigationProp<any>>();

  const [questionIndex, setQuestionIndex] = useState<number>(0);
  const [currentQuestion, setCurrentQuestion] = useState<questionType>(
    questions[questionIndex]
  );
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [isSubmit, setIsSubmit] = useState<boolean>(false);

  const [questionAndAnswers, setQuestionAndAnswers] = useState<
    QuestionAndAnswers[]
  >(initQuestionAndAnswers(questions));

  let pointPerQuestion = 8;

  function handleAnswerPress(value: string) {
    setSelectedAnswer(value);
    const correctAnswer = currentQuestion.options[currentQuestion.correct];

    const point = correctAnswer === value ? pointPerQuestion : 0;

    setQuestionAndAnswers((prev) => {
      const arr = [...prev];

      const index = arr.findIndex((q) => q.id === currentQuestion.id);

      arr[index].point = point;
      arr[index].user_answer = value;

      return arr;
    });
  }

  const isPrevDisabled = questionIndex === 0;
  const isNextDisabled = questionIndex === 9;

  function handleNext() {
    const nextIndex = questionIndex + 1;
    setQuestionIndex((prev) => prev + 1);

    const current = questionAndAnswers.findIndex(
      (q) => q.id === currentQuestion.id
    );

    setSelectedAnswer(questionAndAnswers[current + 1].user_answer);
    setCurrentQuestion(questions[nextIndex]);
  }

  function handlePrev() {
    const prevIndex = questionIndex - 1;
    setQuestionIndex((prev) => prev - 1);

    const current = questionAndAnswers.findIndex(
      (q) => q.id === currentQuestion.id
    );

    setSelectedAnswer(questionAndAnswers[current - 1].user_answer);
    setCurrentQuestion(questions[prevIndex]);
  }

  function handleSubmit() {
    const totalPoints = questionAndAnswers.reduce(
      (acc, { point }) => point + acc,
      0
    );

    setResultData({
      questionAndAnswers,
      totalQuestions: questions.length,
      correctAnswers: totalPoints / pointPerQuestion,
    });

    reset({ index: 0, routes: [{ name: "result" }] });
  }

  function cancelSubmit() {
    setIsSubmit(() => false);
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      setReady((prev) => !prev);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <React.Fragment>
      <SafeAreaProvider>
        <SafeAreaView
          style={{ flex: 1, backgroundColor: COLORS.dark.secondaryBg }}
        >
          <SectionHeader text="Question" span={`${questionIndex + 1}`} />
          {!ready ? (
            <Loader />
          ) : (
            <React.Fragment>
              <View style={{ flex: 1 }}>
                <ScrollView style={{ flex: 1, marginBottom: 84 }}>
                  <Text style={[styles.text, { color: COLORS.light.accent }]}>
                    {currentQuestion.q}
                  </Text>

                  {Object.entries(currentQuestion.options).map(
                    ([key, value], i) => (
                      <TouchableOpacity
                        key={i + 1 * 2}
                        onPress={() => handleAnswerPress(value)}
                      >
                        <Text style={styles.text}>
                          <Text style={{ color: COLORS.light.accent }}>
                            {key}:{" "}
                          </Text>
                          {value}
                        </Text>
                        {selectedAnswer === value && (
                          <Ionicons
                            name="checkmark"
                            size={22}
                            color="green"
                            style={styles.checkmark}
                          />
                        )}
                      </TouchableOpacity>
                    )
                  )}
                </ScrollView>
              </View>
              <View
                style={{
                  position: "absolute",
                  bottom: 30,
                  gap: 10,
                  flexDirection: "row",
                  marginHorizontal: 20,
                }}
              >
                <TouchableOpacity
                  disabled={isPrevDisabled}
                  style={[styles.btn, { opacity: isPrevDisabled ? 0.5 : 1 }]}
                  onPress={handlePrev}
                >
                  <Ionicons size={22} name="chevron-back" />
                  <Text style={styles.btnText}>Previous</Text>
                </TouchableOpacity>
                {!isNextDisabled ? (
                  <TouchableOpacity
                    style={[styles.btn, { opacity: isNextDisabled ? 0.5 : 1 }]}
                    onPress={handleNext}
                    disabled={isNextDisabled}
                  >
                    <Text style={styles.btnText}>Next</Text>
                    <Ionicons size={22} name="chevron-forward" />
                  </TouchableOpacity>
                ) : (
                  <TouchableOpacity
                    style={[
                      styles.btn,
                      { backgroundColor: COLORS.light.accent },
                    ]}
                    onPress={() => setIsSubmit(() => true)}
                  >
                    <Text style={[styles.btnText, { color: "white" }]}>
                      Submit
                    </Text>
                    <Ionicons
                      size={22}
                      name="checkmark-done"
                      color={"#ffffff"}
                    />
                  </TouchableOpacity>
                )}
              </View>
            </React.Fragment>
          )}
        </SafeAreaView>
      </SafeAreaProvider>
      <SubmitSlider
        visible={isSubmit}
        onCancel={cancelSubmit}
        onComplete={handleSubmit}
        headText="Confirm Submission"
        bodyText="Are you sure you want to submit"
      />
    </React.Fragment>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    marginVertical: 8,
    marginHorizontal: 10,
    padding: 10,
    borderRadius: 8,
    fontFamily: "medium",
    lineHeight: 30,
    color: COLORS.dark.primaryBg,
    backgroundColor: COLORS.dark.primaryText,
  },
  btn: {
    width: SIZES.width / 1.85 - 40,
    backgroundColor: COLORS.light.primaryBg,
    borderRadius: 7,
    paddingVertical: 12,
    flexDirection: "row",
    gap: 30,
    paddingHorizontal: 10,
  },
  btnText: {
    fontFamily: "bold",
    fontSize: 20,
    color: COLORS.light.primaryText,
    textAlign: "center",
    flex: 1,
  },
  checkmark: { position: "absolute", right: 30, top: 20 },
});
