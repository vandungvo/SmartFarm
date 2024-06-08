import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, Platform } from 'react-native';
import DateTimePicker, { DateTimePickerEvent } from '@react-native-community/datetimepicker';
import { Picker } from '@react-native-picker/picker';

type Fertilizer = {
  type: string;
  volume?: number;
};

type VolumeLevel = {
  type: string;
  percentage: number;
  volume: number;
};

export default function FertigationScreen() {
  const initialFertilizers: Fertilizer[] = [
    { type: 'Volume' },
  ];

  const volumeLevels: VolumeLevel[] = [
    { type: 'Mixed Fertilizer', percentage: 20, volume: 25 },
    { type: 'Water', percentage: 70, volume: 70 },
  ];

  const [fertilizers, setFertilizers] = useState<Fertilizer[]>(initialFertilizers);
  const [zone, setZone] = useState<string>('I'); // Default Zone is 'I'
  const [type, setType] = useState<string>('Water'); // Default Type is 'Water'
  const [volume, setVolume] = useState<string>(''); // State for Volume input
  const [date, setDate] = useState<Date>(new Date());
  const [showDatePicker, setShowDatePicker] = useState<boolean>(false);
  const [showTimePicker, setShowTimePicker] = useState<boolean>(false);

  const handleVolumeChange = (text: string) => {
    setVolume(text);
  };

  const onDateChange = (event: DateTimePickerEvent, selectedDate?: Date) => {
    const currentDate = selectedDate || date;
    setShowDatePicker(Platform.OS === 'ios');
    setDate(currentDate);
  };

  const onTimeChange = (event: DateTimePickerEvent, selectedTime?: Date) => {
    const currentTime = selectedTime || date;
    setShowTimePicker(Platform.OS === 'ios');
    setDate(currentTime);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.myHeaders}>Volume Level</Text>
        <Text style={styles.totalVolume}>Total - 50 ml</Text>
      </View>
      <View style={styles.volumeContainer}>
        {volumeLevels.map((item, index) => (
          <View key={index} style={styles.volumeLevel}>
            <Text style={{ color: 'red', fontWeight: 'bold', marginBottom: 5 }}>{item.percentage}%</Text>
            <View style={styles.barContainer}>
              <View style={[styles.volumeBar, { height: `${item.percentage}%` }]}>
                <Text style={styles.volumeText}>{item.volume} ml</Text>
              </View>
            </View>
            <Text>{item.type}</Text>
          </View>
        ))}
      </View>

      <View style={styles.createMixer}>
        <Text style={styles.myHeaders}>Create Fertigation</Text>
        <View style={styles.fertilizerDetails}>
          <View style={styles.fertilizerItem}>
            <Text>Zone</Text>
            <Picker
              selectedValue={zone}
              style={{ height: 20, width: 100 }}
              onValueChange={(itemValue) => setZone(itemValue)}>
              <Picker.Item label="I" value="I" />
              <Picker.Item label="II" value="II" />
              <Picker.Item label="III" value="III" />
            </Picker>
          </View>
          <View style={styles.fertilizerItem}>
            <Text>Type</Text>
            <Picker
              selectedValue={type}
              style={{ width: 200, fontSize: 10 }}
              itemStyle= {{ fontSize: 6 }}
              onValueChange={(itemValue) => setType(itemValue)}>
              <Picker.Item label="Water" value="Water" />
              <Picker.Item label="Mixed Fertilizer" value="Mixed Fertilizer" />
            </Picker>
          </View>
          <View style={styles.fertilizerItem}>
            <Text>Volume</Text>
            <View style={styles.inputContainer}>
              <TextInput
                style={styles.volumeInput}
                keyboardType="numeric"
                value={volume}
                onChangeText={handleVolumeChange}
              />
              <Text>ml</Text>
            </View>
          </View>
          <View style={styles.fertilizerItem}>
            <Text>Schedule</Text>
            <TouchableOpacity onPress={() => setShowDatePicker(true)}>
              <TextInput
                style={styles.scheduleInput}
                value={date.toLocaleDateString()}
                editable={false}
              />
            </TouchableOpacity>
            {showDatePicker && (
              <DateTimePicker
                value={date}
                mode="date"
                display="default"
                onChange={onDateChange}
              />
            )}
            <TouchableOpacity onPress={() => setShowTimePicker(true)}>
              <TextInput
                style={styles.scheduleInput}
                value={date.toLocaleTimeString()}
                editable={false}
              />
            </TouchableOpacity>
            {showTimePicker && (
              <DateTimePicker
                value={date}
                mode="time"
                display="default"
                onChange={onTimeChange}
              />
            )}
          </View>
          <TouchableOpacity style={styles.startButton}>
            <Text style={styles.startButtonText}>START</Text>
          </TouchableOpacity>
        </View>
      </View>

      <Text style={styles.myHeaders}>Ongoing Fertigation</Text>
      <View style={styles.ongoingMixer}>
        <View style={styles.taskHeader}>
          <Text style={styles.taskTitle}>Fertigation</Text>
          <Text style={styles.taskStatusOngoing}>Ongoing</Text>
        </View>
        <Text>Mixer types: I and II</Text>
        <Text>Remaining time: 10 mins</Text>
        <Text>Mixer volume: 250 liters</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  myHeaders: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  volumeContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'flex-end',
    marginBottom: 20,
  },
  volumeLevel: {
    alignItems: 'center',
  },
  barContainer: {
    width: 70,
    height: 100,
    justifyContent: 'flex-end',
    marginBottom: 5,
    borderWidth: 0.5,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  volumeBar: {
    width: '100%',
    backgroundColor: '#4A90E2',
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  volumeText: {
    color: '#fff',
    fontSize: 12,
  },
  totalVolume: {
    textAlign: 'right',
    color: 'green',
    fontWeight: 'bold',
  },
  createMixer: {
    marginBottom: 20,
  },
  fertilizerDetails: {
    backgroundColor: '#f0f0f0',
    padding: 20,
    marginBottom: 10,
    borderRadius: 10,
  },
  fertilizerItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 5,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  volumeInput: {
    width: 40,
    height: 25,
    borderColor: '#ccc',
    borderWidth: 1,
    textAlign: 'center',
    marginRight: 8,
    borderRadius: 5,
  },
  scheduleInput: {
    width: 90,
    height: 25,
    borderColor: '#ccc',
    borderWidth: 1,
    textAlign: 'center',
    margin: 5,
    borderRadius: 5,
  },
  startButton: {
    marginTop: 10,
    backgroundColor: '#4A90E2',
    padding: 10,
    alignItems: 'center',
    borderRadius: 10,
  },
  startButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  ongoingMixer: {
    padding: 10,
    backgroundColor: '#e0e0e0',
    borderRadius: 10,
  },
  taskHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 5,
  },
  taskTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  taskStatusOngoing: {
    color: 'green',
  },
});