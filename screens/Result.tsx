import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

import QANView from "@/components/QAN";
import ResultTab from "@/components/ResultTab";
import { StatView } from "@/components/Stats";
import { COLORS, SIZES } from "@/constants";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

export default function Result() {
  const { reset } = useNavigation<NativeStackNavigationProp<any>>();

  const [selectedTab, setSelectedTab] = useState<"stat" | "qan">("stat");

  function switchTab(tab: "stat" | "qan") {
    setSelectedTab(tab);
  }

  return (
    <SafeAreaProvider>
      <SafeAreaView
        style={{ flex: 1, backgroundColor: COLORS.dark.secondaryBg }}
      >
        <TouchableOpacity
          style={{
            width: SIZES.width - 40,
            marginTop: 20,
            backgroundColor: COLORS.light.primaryBg,
            marginHorizontal: 20,
            borderRadius: 7,
            paddingVertical: 12,
          }}
          onPress={() => reset({ index: 0, routes: [{ name: "home" }] })}
        >
          <Text
            style={{
              fontFamily: "bold",
              fontSize: 20,
              color: COLORS.light.primaryText,
              textAlign: "center",
            }}
          >
            Start All Over
          </Text>
        </TouchableOpacity>
        {selectedTab === "stat" ? <StatView /> : <QANView />}
        <ResultTab
          selectedTab={selectedTab}
          handlePress={(tab) => switchTab(tab)}
        />
      </SafeAreaView>
    </SafeAreaProvider>
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
  skillCard: {
    marginVertical: 8,
    marginHorizontal: 10,
    padding: 10,
    borderRadius: 8,
  },
});
