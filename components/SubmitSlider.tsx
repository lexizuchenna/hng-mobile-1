import {
  Animated,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

import { COLORS, SIZES } from "@/constants";
import { useEffect, useRef, useState } from "react";

const BTNS = [
  { text: "Cancel", bg: COLORS.dark.secondaryText },
  { text: "Yes", bg: COLORS.light.accent },
];

export default function SubmitSlider({
  visible,
  onComplete,
  onCancel,
  headText,
  bodyText,
}: SubmitSliderProps) {
  const [show, setShow] = useState(visible);
  const translateYValue = useRef(new Animated.Value(250)).current;

  useEffect(() => {
    if (visible) {
      setShow(true);
      Animated.spring(translateYValue, {
        toValue: 0,
        useNativeDriver: true,
      }).start();
    } else {
      Animated.timing(translateYValue, {
        duration: 250,
        toValue: 250,
        useNativeDriver: true,
      }).start(() => {
        setShow(false);
      });
    }
  }, [visible]);

  if (!show) return null;

  return (
    <View style={styles.overlay}>
      <Animated.View
        style={[
          styles.card,
          {
            transform: [{ translateY: translateYValue }],
            backgroundColor: COLORS.dark.primaryBg,
          },
        ]}
      >
        <View style={styles.line}></View>
        <Text style={[styles.cardText, { color: COLORS.dark.primaryText }]}>
          {headText}
        </Text>
        <Text style={[styles.cardText, { color: COLORS.dark.primaryText }]}>
          {bodyText}
        </Text>
        <View style={styles.btnContainer}>
          {BTNS.map((b) => (
            <TouchableOpacity
              style={[getBtnStyles(b.bg), { alignItems: "center" }]}
              key={b.text}
              onPress={b.text === "Yes" ? onComplete : onCancel}
            >
              <Text
                style={{
                  fontFamily: "bold",
                  color:
                    b.text === "Cancel"
                      ? COLORS.dark.primaryBg
                      : COLORS.dark.primaryText,
                  fontSize: 18,
                }}
              >
                {b.text}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0, 0, 0, 0.6)",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 100,
  },

  card: {
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    width: SIZES.width,
    paddingVertical: 30,
    paddingHorizontal: 20,
    paddingTop: 10,
    position: "absolute",
    bottom: 0,
    alignItems: "center",
    zIndex: 150,
  },
  line: {
    width: 50,
    height: 4,
    backgroundColor: COLORS.light.accent,
    marginBottom: 20,
    borderRadius: 2,
    marginTop: 5,
  },
  cardText: {
    fontFamily: "semi-bold",
    fontSize: 18,
    marginBottom: 15,
    textAlign: "center",
  },
  btnContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 20,
    width: SIZES.width - 40,
  },
});

function getBtnStyles(bg: string) {
  return {
    backgroundColor: bg,
    paddingVertical: 15,
    borderRadius: 10,
    width: SIZES.width / 2 - 30,
  };
}
