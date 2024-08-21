// import { Icon } from '@roninoss/icons';
import { Ionicons } from "@expo/vector-icons";
import { Pressable, View } from "react-native";
import Animated, {
  LayoutAnimationConfig,
  ZoomInRotate,
} from "react-native-reanimated";

import { cn } from "@/lib/cn";
import { useColorScheme } from "@/lib/useColorScheme";
import { Colors } from "@/constants/Colors";

export function ThemeToggle() {
  const { colorScheme, toggleColorScheme } = useColorScheme();
  return (
    <LayoutAnimationConfig skipEntering>
      <Animated.View
        className="items-center justify-center"
        key={`toggle-${colorScheme}`}
        entering={ZoomInRotate}
      >
        <Pressable onPress={toggleColorScheme} className="opacity-80">
          {colorScheme === "dark"
            ? ({ pressed }) => (
                <View className={cn("px-0.5", pressed && "opacity-50")}>
                  <Ionicons name="moon" size={24} color={Colors.light.tint} />
                </View>
              )
            : ({ pressed }) => (
                <View className={cn("px-0.5", pressed && "opacity-50")}>
                  <Ionicons name="sunny" size={24} color={Colors.dark.tint} />
                </View>
              )}
        </Pressable>
      </Animated.View>
    </LayoutAnimationConfig>
  );
}