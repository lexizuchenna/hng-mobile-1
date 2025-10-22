import { COLORS, SIZES } from "@/constants";
import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function ResultTab({
  handlePress,
  selectedTab,
}: {
  handlePress: (tab: "stat" | "qan") => void;
  selectedTab: "stat" | "qan";
}) {
  return (
    <View
      style={{
        backgroundColor: COLORS.light.secondaryText,
        width: SIZES.width,
        paddingHorizontal: 40,
        flexDirection: "row",
        justifyContent: "space-between",
        position: "absolute",
        bottom: 0,
        paddingVertical: 20,
        borderTopLeftRadius: 12,
        borderTopRightRadius: 12,
      }}
    >
      <TouchableOpacity
        style={styles.btn}
        onPress={() => handlePress("stat")}
        disabled={selectedTab === "stat"}
      >
        <Ionicons
          size={25}
          name="stats-chart"
          color={selectedTab === "stat" ? COLORS.light.accent : "white"}
        />
        <Text
          style={[
            styles.text,
            { color: selectedTab === "stat" ? COLORS.light.accent : "white" },
          ]}
        >
          Stats
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        disabled={selectedTab === "qan"}
        style={styles.btn}
        onPress={() => handlePress("qan")}
      >
        <Ionicons
          size={25}
          name="bookmark"
          color={selectedTab === "qan" ? COLORS.light.accent : "white"}
        />
        <Text
          style={[
            styles.text,
            { color: selectedTab === "qan" ? COLORS.light.accent : "white" },
          ]}
        >
          Questions/Answers
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  btn: {
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: "white",
    fontFamily: "bold",
    fontSize: 17,
  },
});
