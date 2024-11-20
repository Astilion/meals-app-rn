import { Text, View, Image } from 'react-native';
import { MealType } from '../models/meal';
import { MEALS } from '../data/dummy-data';
import MealDetails from '../components/MealDetails';

type MealDetailsScreenProps = {
  route: {
    params: {
      mealId: string;
    };
  };
};
const MealDetailsScreen = ({ route }: MealDetailsScreenProps) => {
  const { mealId } = route.params;
  const selectedMeal = MEALS.find((meal) => meal.id === mealId);

  if (!selectedMeal) {
    return <Text>Meal not found!</Text>;
  }

  return (
    <View>
      <Image source={{ uri: selectedMeal?.imageUrl }} />
      <Text>{selectedMeal?.title}</Text>
      <MealDetails
        duration={selectedMeal.duration}
        complexity={selectedMeal?.complexity}
        affordability={selectedMeal?.affordability}
      />

      <Text>Ingredients</Text>
      {selectedMeal.ingredients.map((ingredient) => (
        <Text key={ingredient}>{ingredient}</Text>
      ))}

      <Text>Steps</Text>
      {selectedMeal.ingredients.map((step) => (
        <Text key={step}>{step}</Text>
      ))}
    </View>
  );
};

export default MealDetailsScreen;
