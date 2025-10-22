import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";

import { COLORS } from "@/constants";
import { useMainContext } from "@/providers";
import Loader from "./Loader";

export default function QANView() {
  const { resultData } = useMainContext();

  if (!resultData) return <Loader />;

  return (
    <View style={{ flex: 1 }}>
      <ScrollView style={{ flex: 1, marginBottom: 76 }}>
        {resultData.questionAndAnswers.map((question, i) => {
          const isCorrect = question.user_answer === question.correct_answer;
          return (
            <View
              style={[
                { backgroundColor: COLORS.dark.primaryBg },
                styles.textContainer,
              ]}
              key={i + 1}
            >
              <Text
                style={{
                  color: COLORS.light.accent,
                  fontSize: 25,
                  fontFamily: "semi-bold",
                }}
              >
                <Text style={{ color: COLORS.dark.accent }}>
                  {i + 1}
                  {": "}
                </Text>
                {question.question}
              </Text>
              <Text
                style={{
                  color: COLORS.dark.primaryText,
                  fontSize: 25,
                  fontFamily: "bold",
                  marginTop: 5,
                }}
              >
                Your Answer: {question.user_answer}{" "}
                <Ionicons
                  size={25}
                  name={isCorrect ? "checkmark-done" : "close-outline"}
                  color={isCorrect ? "green" : "red"}
                />
              </Text>
              <Text
                style={{
                  color: COLORS.dark.primaryText,
                  fontSize: 25,
                  fontFamily: "bold",
                  marginTop: 5,
                }}
              >
                Correct Answer: {question.correct_answer}
              </Text>
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  textContainer: {
    borderRadius: 5,
    marginHorizontal: 10,
    padding: 15,
    marginVertical: 10,
  },
  text: {
    fontSize: 20,
    fontFamily: "medium",
    lineHeight: 30,
  },
});
