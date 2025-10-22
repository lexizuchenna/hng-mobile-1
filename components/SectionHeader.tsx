import { Text, View } from "react-native";

import { COLORS } from "@/constants";

export default function SectionHeader({
  span,
  text,
}: {
  text: string;
  span: string;
}) {
  return (
    <View
      style={{
        backgroundColor: COLORS.dark.primaryBg,
        borderRadius: 5,
        marginHorizontal: 10,
        padding: 15,
        marginVertical: 10,
      }}
    >
      <Text
        style={{
          color: COLORS.dark.secondaryText,
          fontSize: 28,
          fontFamily: "bold",
          marginTop: 5,
          textAlign: "center",
        }}
      >
        {text} <Text style={{ color: COLORS.light.accent }}>{span}</Text>
      </Text>
    </View>
  );
}
