import { StyleSheet, Text, Button } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import CategoriesScreen from './screens/CategoriesScreen';
import MealsOverviewScreen from './screens/MealsOverviewScreen';
import MealDetailsScreen from './screens/MealDeatailsScreen';
import { RootStackParamList } from './types/types';

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <>
      <StatusBar style='light' />
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerStyle: { backgroundColor: '#351401' },
            headerTintColor: 'white',
            contentStyle: { backgroundColor: '#3f2f25' },
          }}
        >
          <Stack.Screen
            name='MealsCategories'
            component={CategoriesScreen}
            options={{
              title: 'All Categories',
            }}
          />
          <Stack.Screen name='MealsOverview' component={MealsOverviewScreen} />
          <Stack.Screen
            name='MealDetail'
            component={MealDetailsScreen}
            // options={{
            //   headerRight: () => {
            //     return <Button title="Back to the header"/>;
            //   },
            // }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
