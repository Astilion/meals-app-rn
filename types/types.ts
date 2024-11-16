import { NativeStackNavigationProp } from '@react-navigation/native-stack';

type RootStackParamList = {
  MealsCategories: undefined;
  MealsOverview: undefined;
};

export type CategoriesScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'MealsCategories'
>;
