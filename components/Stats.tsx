import React from "react";
import { StyleSheet, Text, View } from "react-native";

import { COLORS } from "@/constants";
import { useMainContext } from "@/providers";
import { calculateGrade, calculateScore } from "@/utils";
import Loader from "./Loader";

export function StatView() {
  const { resultData } = useMainContext();

  if (!resultData) return <Loader />;

  const score = calculateScore(
    resultData.totalQuestions,
    resultData.correctAnswers
  );

  const { grade, remarks } = calculateGrade(score);

  const statsData = [
    { name: "Grade", value: grade },
    { name: "Total Questions", value: resultData.totalQuestions },
    { name: "Correct Answers", value: resultData.correctAnswers },
    { name: "Your Score", value: score },
    { name: "Passing Score", value: "40%" },
    { name: "", value: remarks },
  ];

  return (
    <React.Fragment>
      {statsData.map(({ value, name }) => (
        <View
          style={[
            { backgroundColor: COLORS.dark.primaryBg },
            styles.textContainer,
          ]}
          key={name}
        >
          <Text
            style={{
              color: COLORS.dark.primaryText,
              fontSize: 28,
              fontFamily: "bold",
              marginTop: 5,
            }}
          >
            {name === "" ? value : `${name}: ${value}`}
          </Text>
        </View>
      ))}
    </React.Fragment>
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
