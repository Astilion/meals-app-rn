import { NativeStackNavigationProp } from '@react-navigation/native-stack';

export type RootStackParamList = {
  MealsCategories: undefined;
  MealsOverview: { categoryId: string };
};

export type CategoriesScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'MealsCategories'
>;
