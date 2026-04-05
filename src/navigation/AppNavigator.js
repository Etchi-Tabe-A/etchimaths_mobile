import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import HomeScreen from '../screens/HomeScreen';
import TopicsScreen from '../screens/TopicsScreen';
import AppListScreen from '../screens/AppListScreen';
import CalculatorScreen from '../screens/CalculatorScreen';
import AboutScreen from '../screens/AboutScreen';
import ProfileScreen from '../screens/ProfileScreen';
import AIScreen from '../screens/AIScreen';
import SettingsScreen from '../screens/SettingsScreen';
import CurriculumScreen from '../screens/CurriculumScreen';
import InteractiveLearningScreen from '../screens/InteractiveLearningScreen';
import TopicSubtopicsScreen from '../screens/TopicSubtopicsScreen';
import SubtopicSolverScreen from '../screens/SubtopicSolverScreen';
import ExercisesScreen from '../screens/ExercisesScreen';
import ExercisePaperScreen from '../screens/ExercisePaperScreen';
import { colors } from '../theme/colors';

const Tab = createBottomTabNavigator();
const HomeStack = createStackNavigator();

const HEADER_OPTS = {
  headerStyle: { backgroundColor: colors.primary },
  headerTintColor: colors.white,
  headerTitleStyle: { fontWeight: 'bold' },
};

function HomeNavigator() {
  return (
    <HomeStack.Navigator screenOptions={HEADER_OPTS}>
      <HomeStack.Screen
        name="HomeMain"
        component={HomeScreen}
        options={{ headerShown: false }}
      />
      {/* World Class Curriculum */}
      <HomeStack.Screen
        name="Curriculum"
        component={CurriculumScreen}
        options={{ title: 'World Class Curriculum' }}
      />
      {/* Interactive Learning */}
      <HomeStack.Screen
        name="InteractiveLearning"
        component={InteractiveLearningScreen}
        options={{ title: 'Interactive Learning' }}
      />
      <HomeStack.Screen
        name="TopicSubtopics"
        component={TopicSubtopicsScreen}
        options={({ route }) => ({ title: route.params?.topicTitle ?? 'Subtopics' })}
      />
      <HomeStack.Screen
        name="SubtopicSolver"
        component={SubtopicSolverScreen}
        options={({ route }) => ({ title: route.params?.subtopicTitle ?? 'Solver' })}
      />
      {/* Practice Exercises */}
      <HomeStack.Screen
        name="Exercises"
        component={ExercisesScreen}
        options={{ title: 'Practice Exercises' }}
      />
      <HomeStack.Screen
        name="ExercisePaper"
        component={ExercisePaperScreen}
        options={({ route }) => ({ title: route.params?.paperTitle ?? 'Exercise' })}
      />
      {/* Real Life Applications */}
      <HomeStack.Screen
        name="Topics"
        component={TopicsScreen}
        options={{ title: 'Real Life Applications' }}
      />
      <HomeStack.Screen
        name="AppList"
        component={AppListScreen}
        options={({ route }) => ({ title: route.params?.topicName ?? 'Applications' })}
      />
      <HomeStack.Screen
        name="Calculator"
        component={CalculatorScreen}
        options={({ route }) => ({ title: route.params?.appTitle ?? 'Calculator' })}
      />
      {/* About reachable from hamburger */}
      <HomeStack.Screen
        name="About"
        component={AboutScreen}
        options={{ title: 'About Etchimaths' }}
      />
    </HomeStack.Navigator>
  );
}

export default function AppNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size, focused }) => {
          const icons = {
            Home:     focused ? 'home'               : 'home-outline',
            Profile:  focused ? 'person-circle'      : 'person-circle-outline',
            AI:       focused ? 'sparkles'           : 'sparkles-outline',
            Settings: focused ? 'settings'           : 'settings-outline',
            About:    focused ? 'information-circle' : 'information-circle-outline',
          };
          return <Ionicons name={icons[route.name]} size={size} color={color} />;
        },
        tabBarActiveTintColor: colors.gold,
        tabBarInactiveTintColor: colors.textMuted,
        tabBarStyle: {
          backgroundColor: colors.primary,
          borderTopColor: colors.accent,
          borderTopWidth: 1,
          paddingBottom: 28,
          height: 86,
        },
        tabBarLabelStyle: { fontSize: 12, fontWeight: '600' },
        headerShown: false,
      })}
    >
      <Tab.Screen name="Home" component={HomeNavigator} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
      <Tab.Screen name="AI" component={AIScreen} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
      <Tab.Screen name="About" component={AboutScreen} />
    </Tab.Navigator>
  );
}
