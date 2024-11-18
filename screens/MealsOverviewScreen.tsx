import MealItem from '../components/MealItem';
import { MEALS } from '../data/dummy-data';
import { View, FlatList, StyleSheet } from 'react-native';
import { MealType } from '../models/meal';

function MealsOverviewScreen({ route }: { route: any }) {
  const catId = route.params.categoryId;

  const displayedMeals = MEALS.filter((mealItem) => {
    return mealItem.categoryIds.indexOf(catId) >= 0;
  });

  const renderMealItem = (itemData: { item: MealType }) => {
    return <MealItem meal={itemData.item} />;
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={displayedMeals}
        keyExtractor={(item) => item.id}
        renderItem={renderMealItem}
      />
    </View>
  );
}

export default MealsOverviewScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
