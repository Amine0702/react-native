import { StyleSheet, View, Image, FlatList, Pressable } from 'react-native';
import { useSelector,useDispatch } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import { productsSlice } from '../store/productsSlice';

const ProductScreen = () => {
  const dispatch=useDispatch();
  const navigation = useNavigation();
  const products = useSelector(state => state.products.products);

  return (
    <View style={styles.container}>
      <FlatList
        data={products}
        renderItem={({ item }) => (
          <Pressable
            onPress={() =>{
              dispatch(productsSlice.actions.setSelectedProduct(item.id))
              navigation.navigate('Product Detail', { id: item.id })}}
            style={styles.itemContainer}
          >
            <Image source ={{ uri: item.image }} style={styles.image} />
          </Pressable>
        )}
        numColumns={2}
        key={2}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: '100%',
    aspectRatio: 1,
  },
  itemContainer: {
    width: "50%",
    padding: 1,
  },
});

export default ProductScreen;
