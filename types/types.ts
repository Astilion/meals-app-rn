import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { MealType } from '../models/meal';

export type RootStackParamList = {
  MealsCategories: undefined;
  MealsOverview: { categoryId: string };
  MealDetail: { meal: MealType };
};

export type CategoriesScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'MealsCategories'
>;
