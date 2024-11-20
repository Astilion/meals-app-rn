import { View, StyleSheet, Text } from 'react-native';

export type MealDetailProps = {
  duration: number;
  affordability: 'affordable' | 'pricey' | 'luxurious';
  complexity: 'simple' | 'challenging' | 'hard';
};
function MealDetails({ duration, complexity, affordability }: MealDetailProps) {
  return (
    <View style={styles.details}>
      <Text style={styles.detailItem}>{duration} min</Text>
      <Text style={styles.detailItem}>{complexity.toUpperCase()}</Text>
      <Text style={styles.detailItem}>{affordability.toUpperCase()}</Text>
    </View>
  );
}
export default MealDetails;

const styles = StyleSheet.create({
  details: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 8,
    justifyContent: 'center',
  },
  detailItem: {
    marginHorizontal: 4,
    fontSize: 12,
  },
});
