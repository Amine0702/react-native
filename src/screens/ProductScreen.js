import { StyleSheet, View, Image, FlatList, Pressable } from 'react-native';
import product from '../data/product'; // Mise à jour du chemin

const ProductScreen = ({navigation}) => {
  
  return (
    <View style={styles.container}>
      <FlatList
        data={product}
        renderItem={({ item }) => (
          <Pressable
            onPress={() => navigation.navigate('Product Detail', { id: item.id })}
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
