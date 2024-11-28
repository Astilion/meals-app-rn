import { Text, View, Image, StyleSheet } from 'react-native';
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
      <Image style={styles.image} source={{ uri: selectedMeal?.imageUrl }} />
      <Text style={styles.title}>{selectedMeal?.title}</Text>
      <MealDetails
        duration={selectedMeal.duration}
        complexity={selectedMeal?.complexity}
        affordability={selectedMeal?.affordability}
        textStyle={styles.detailText}
      />
      <View style={styles.subtitleContainer}>
        <Text style={styles.subtitle}>Ingredients</Text>
        {selectedMeal.ingredients.map((ingredient) => (
          <Text key={ingredient}>{ingredient}</Text>
        ))}
      </View>
      <View style={styles.subtitleContainer}>
        <Text style={styles.subtitle}>Steps</Text>
        {selectedMeal.ingredients.map((step) => (
          <Text key={step}>{step}</Text>
        ))}
      </View>
    </View>
  );
};

export default MealDetailsScreen;

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 350,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 24,
    margin: 8,
    textAlign: 'center',
    color: 'white',
  },
  detailText: {
    color: 'white',
  },
  subtitle: {
    color: '#e2b497',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  subtitleContainer: {
    padding: 6,
    marginHorizontal: 24,
    marginVertical: 4,
    borderBottomColor: '#e2b497',
    borderBottomWidth: 2,
  },
});
