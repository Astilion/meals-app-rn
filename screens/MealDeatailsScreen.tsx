import { Text } from 'react-native';
import { MealType } from '../models/meal';

type MealDetailsScreenProps = {
  route: {
    params: {
      meal: MealType;
    };
  };
};
const MealDetailsScreen = ({ route }: MealDetailsScreenProps) => {
  const { meal } = route.params;
  return <Text>This is {meal.id}</Text>;
};

export default MealDetailsScreen;
