import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { MealType } from '../models/meal';

export type RootStackParamList = {
  MealsCategories: undefined;
  MealsOverview: { categoryId: string };
  MealDetail: { mealId: string };
};

export type CategoriesScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'MealsCategories'
>;
