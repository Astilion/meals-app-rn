import { FlatList } from 'react-native';
import { CATEGORIES } from '../data/dummy-data';
import Category from '../models/category';
import CategoryGridTile from '../components/CategoryGridTile';

function CategoriesScreen({ navigation }) {
  const renderCategoryItem = (itemData: { item: Category }) => {
    const pressHandler = () => {
      navigation.navigate('MealsOverview');
    };
    return (
      <CategoryGridTile
        title={itemData.item.title}
        color={itemData.item.color}
        onPress={pressHandler}
      />
    );
  };
  return (
    <FlatList
      data={CATEGORIES}
      keyExtractor={(item) => item.id}
      renderItem={renderCategoryItem}
      numColumns={2}
    />
  );
}

export default CategoriesScreen;
