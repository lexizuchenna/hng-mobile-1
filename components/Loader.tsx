import { ActivityIndicator, StyleSheet, View } from "react-native";

import { COLORS } from "@/constants";

export default function Loader() {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: COLORS.dark.secondaryBg,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <ActivityIndicator size="large" color="white" />
    </View>
  );
}

const styles = StyleSheet.create({});
