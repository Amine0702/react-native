import React from 'react';
import { StyleSheet, Text, View, Image, FlatList, useWindowDimensions, ScrollView, Pressable } from 'react-native';
import cart from '../data/cart'; // Importez les données du panier
import { useSelector } from 'react-redux';
import { State } from 'react-native-gesture-handler';



const ProductDetailsScreen = ({ navigation }) => {
const product=useSelector((State)=>State.products.selectedProduct)

  const { width } = useWindowDimensions();



  const handleAddToCart = () => {
    // Ajouter le produit sélectionné au panier
    const existingItem = cart.find((item) => item.product.id === product.id);
    if (existingItem) {
      // Si le produit est déjà dans le panier, augmentez sa quantité
      existingItem.quantity += 1;
    } else {
      // Sinon, ajoutez le produit au panier
      cart.push({
        product: product,
        size: 42, // Taille par défaut ou sélectionnée
        quantity: 1,
      });
    }

    navigation.navigate('Cart'); // Naviguer vers le panier
  };

  return (
    <View style={{ flex: 1 }}>
      <ScrollView>
        <FlatList
          data={product.images}
          renderItem={({ item }) => (
            <Image source={{ uri: item }} style={{ width, aspectRatio: 1 }} />
          )}
          horizontal
          showsHorizontalScrollIndicator={false}
          pagingEnabled
        />
        <View style={{ padding: 20 }}>
          <Text style={styles.title}>{product.name}</Text>
          <Text style={styles.price}>${product.price}</Text>
          <Text style={styles.description}>{product.description}</Text>
        </View>
      </ScrollView>
      <Pressable style={styles.button} onPress={handleAddToCart}>
        <Text style={styles.buttonText}>Ajouter au panier</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 34,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  price: {
    fontWeight: '500',
    fontSize: 16,
    letterSpacing: 1.5,
  },
  description: {
    marginVertical: 10,
    fontSize: 14,
    lineHeight: 20,
    fontWeight: '300',
  },
  button: {
    position: 'absolute',
    backgroundColor: 'black',
    bottom: 30,
    width: '90%',
    alignSelf: 'center',
    padding: 20,
    borderRadius: 100,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontWeight: '500',
    fontSize: 16,
  },
});

export default ProductDetailsScreen;
