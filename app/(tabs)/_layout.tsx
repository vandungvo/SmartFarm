import { Tabs } from 'expo-router';
import React from 'react';
import { TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';
import { TabBarIcon } from '@/components/navigation/TabBarIcon';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={({ route, navigation }: { route: any; navigation: any }) => ({
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        headerShown: route.name !== 'index' ? true : false,
        headerTitleAlign: 'center',
        headerStyle: {
          height: 80,
        },
        headerTitleStyle: {
          fontSize: 18,
        },
        headerLeft: route.name !== 'index' ? () => (
          <TouchableOpacity onPress={() => navigation.goBack()} style={{ marginLeft: 20 }}>
            <Entypo name="arrow-left" size={25} color={Colors[colorScheme ?? 'light'].text} />
          </TouchableOpacity>
        ) : undefined,
      })}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color, focused }: { color: string; focused: boolean }) => (
            <TabBarIcon name={focused ? 'home' : 'home-outline'} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="fertilizer"
        options={{
          title: 'Fertilizer mixer',
          tabBarIcon: ({ color, focused }: { color: string; focused: boolean }) => (
            <MaterialIcons name='compost' size={30} color={color} style={{ marginBottom: -3 }}/>
          ),
        }}
      />      
      <Tabs.Screen
        name="fertigation"
        options={{
          title: 'Fertigation',
          tabBarIcon: ({ color, focused }: { color: string; focused: boolean }) => (
            <MaterialCommunityIcons name={focused ? 'watering-can' : 'watering-can-outline'} size={38} color={color} style={{ marginBottom: -3 }}/>
          ),
        }}
      />
      <Tabs.Screen
        name="account"
        options={{
          title: 'Account',
          tabBarIcon: ({ color, focused }: { color: string; focused: boolean }) => (
            <MaterialCommunityIcons name={focused ? 'account' : 'account-outline'} size={38} color={color} style={{ marginBottom: -3 }}/>
          ),
        }}
      />
    </Tabs>
  );
}
