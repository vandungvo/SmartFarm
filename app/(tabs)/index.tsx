import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';
import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native';
import { MaterialIcons, FontAwesome5 } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function HomeScreen() {
  const colorScheme = useColorScheme();
  
  const textColor = colorScheme === 'dark' ? Colors.dark.text : Colors.light.text;

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.welcome}>Welcome, Dung Vo</Text>
        <View style={styles.iconContainer}>
          <MaterialIcons name="notifications-none" size={30} color="black" style={{marginRight: 10}}/>
          <FontAwesome5 name="user-circle" size={30} color="black" />
        </View>
      </View>

      <View style={styles.searchContainer}>
        <View style={styles.searchBox}>
          <Text style={styles.searchText}>Search...</Text>
        </View>
      </View>

      <Text style={styles.sectionTitle}>Humidity - Sensor</Text>
      <View style={styles.humidityContainer}>
        <View>
          <Text style={styles.humidityDetailText}>Current Humidity: 45%</Text>
          <Text style={styles.humidityDetailText}>Optimal Range: 40% - 60%</Text>
          <Text style={styles.humidityDetailText}>Last Updated: 5 mins ago</Text>
        </View>
      </View>

      <Text style={styles.sectionTitle}>Recent Tasks</Text>
      
      <View style={styles.taskContainer}>
        <View style={styles.taskHeader}>
          <Text style={styles.taskTitle}>Fertigation</Text>
          <Text style={styles.taskStatusOngoing}>Ongoing</Text>
        </View>
        <View style={styles.taskDetails}>
          <Text style={styles.taskDetailText}>Current Zone: I</Text>
          <Text style={styles.taskDetailText}>Remaining time: 20 mins</Text>
          <Text style={styles.taskDetailText}>Watered area: 250 / 500 liters</Text>
        </View>
      </View>

      <View style={styles.taskContainer}>
        <View style={styles.taskHeader}>
          <Text style={styles.taskTitle}>Fertilizer mixer</Text>
          <Text style={styles.taskStatusFinished}>Finished</Text>
        </View>
        <View style={styles.taskDetails}>
          <Text style={styles.taskDetailText}>Mixer types: I and II</Text>
          <Text style={styles.taskDetailText}>Total time: 20 mins</Text>
          <Text style={styles.taskDetailText}>Mixer volume: 250 liters</Text>
        </View>
      </View>

      <Text style={styles.sectionTitle}>Active Devices</Text>
      
      <View style={styles.devicesContainer}>
        <View style={styles.device}>
          <Image style={styles.deviceImage} source={require('C:/Users/Admin/OneDrive/Desktop/SmartFarming/assets/images/fertilizer-mixer.png')} />
          <Text>Type I</Text>
          <Text>(Actuator 1)</Text>
        </View>
        <View style={styles.device}>
          <Image style={styles.deviceImage} source={require('C:/Users/Admin/OneDrive/Desktop/SmartFarming/assets/images/area-selector.png')} />
          <Text>Zone II</Text>
          <Text>(Actuator 5)</Text>
        </View>
        <View style={styles.device}>
          <Image style={styles.deviceImage} source={require('C:/Users/Admin/OneDrive/Desktop/SmartFarming/assets/images/pump.png')} />
          <Text>Pump out</Text>
          <Text>(Actuator 8)</Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  welcome: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  iconContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  searchContainer: {
    marginTop: 20,
  },
  searchBox: {
    backgroundColor: '#f0f0f0',
    padding: 10,
    borderRadius: 10,
  },
  searchText: {
    color: '#aaa',
  },
  humidityContainer: {
    backgroundColor: '#f8f8f8',
    borderRadius: 10,
    padding: 15,
    marginBottom: 10,
  },
  humidityDetailText: {
    fontSize: 14,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  taskContainer: {
    backgroundColor: '#f8f8f8',
    borderRadius: 10,
    padding: 15,
    marginBottom: 10,
  },
  taskHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  taskTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  taskStatusOngoing: {
    color: 'green',
  },
  taskStatusFinished: {
    color: 'red',
  },
  taskDetails: {
    marginTop: 10,
  },
  taskDetailText: {
    fontSize: 14,
  },
  devicesContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 10,
  },
  device: {
    alignItems: 'center',
  },
  deviceImage: {
    width: 50,
    height: 50,
    marginBottom: 5,
  },
});
