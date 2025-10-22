import { COLORS, SIZES } from "@/constants";
import { useMainContext } from "@/providers";
import { getRandomQuestions } from "@/utils";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

export default function Home() {
  const { reset } = useNavigation<NativeStackNavigationProp<any>>();
  const { setQuestions } = useMainContext();

  function handleSetQuestions() {
    reset({ index: 0, routes: [{ name: "test" }] });
    setQuestions(getRandomQuestions());
  }
  return (
    <SafeAreaProvider>
      <SafeAreaView
        style={{ flex: 1, backgroundColor: COLORS.dark.secondaryBg }}
      >
        <View
          style={[
            { backgroundColor: COLORS.dark.primaryBg },
            styles.textContainer,
          ]}
        >
          <Text
            style={{
              color: COLORS.dark.secondaryText,
              fontSize: 18,
              fontFamily: "semi-bold",
            }}
          >
            Hello there,
          </Text>
          <Text
            style={{
              color: COLORS.dark.primaryText,
              fontSize: 28,
              fontFamily: "bold",
              marginTop: 5,
            }}
          >
            Welcome to Lexiz Trivia Questions
          </Text>
        </View>
        <TouchableOpacity
          style={{
            width: SIZES.width - 40,
            position: "absolute",
            bottom: 30,
            backgroundColor: COLORS.light.primaryBg,
            marginHorizontal: 20,
            borderRadius: 7,
            paddingVertical: 12,
          }}
          onPress={handleSetQuestions}
        >
          <Text
            style={{
              fontFamily: "bold",
              fontSize: 20,
              color: COLORS.light.primaryText,
              textAlign: "center",
            }}
          >
            Start Test
          </Text>
        </TouchableOpacity>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  textContainer: {
    borderRadius: 5,
    marginHorizontal: 10,
    padding: 15,
    marginTop: 10,
  },
});
