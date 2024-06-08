import { View, StyleSheet, Text } from 'react-native';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';

export default function AccountScreen() {
  const colorScheme = useColorScheme();
  
  const textColor = colorScheme === 'dark' ? Colors.dark.text : Colors.light.text;

  return (
    <View style={styles.container}>
      <Text style={{ color: textColor }}>Account</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});