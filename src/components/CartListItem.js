import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { Feather } from '@expo/vector-icons';
import cart from '../data/cart'; // Importez le panier

const CartListItem = ({ cartItem, onUpdateCart }) => {
  const increaseQuantity = () => {
    cartItem.quantity += 1; // Augmente la quantité
    onUpdateCart(); // Notifie le composant parent pour re-render
  };

  const decreaseQuantity = () => {
    if (cartItem.quantity > 1) {
      cartItem.quantity -= 1; // Diminue la quantité
    } else {
      const index = cart.findIndex((item) => item.product.id === cartItem.product.id);
      if (index !== -1) {
        cart.splice(index, 1); // Supprime l'élément si la quantité atteint 0
      }
    }
    onUpdateCart(); // Notifie le composant parent pour re-render
  };

  return (
    <View style={styles.container}>
      <Image source={{ uri: cartItem.product.image }} style={styles.image} />
      <View style={styles.contentContainer}>
        <Text style={styles.name}>{cartItem.product.name}</Text>
        <Text style={styles.size}>Size {cartItem.size}</Text>
        <View style={styles.footer}>
          <Feather onPress={decreaseQuantity} name="minus-circle" size={24} color="gray" />
          <Text style={styles.quantity}>{cartItem.quantity}</Text>
          <Feather onPress={increaseQuantity} name="plus-circle" size={24} color="gray" />
          <Text style={styles.itemTotal}>
            ${(cartItem.product.price * cartItem.quantity).toFixed(2)}
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { padding: 10, paddingHorizontal: 20, flexDirection: 'row' },
  contentContainer: { flex: 1, marginLeft: 10 },
  image: { width: '40%', aspectRatio: 1 },
  name: { fontWeight: '500', fontSize: 18 },
  size: { fontSize: 16, color: 'gray' },
  quantity: { marginHorizontal: 10, fontWeight: 'bold', color: 'gray' },
  footer: { marginTop: 'auto', flexDirection: 'row', alignItems: 'center' },
  itemTotal: { fontSize: 16, marginLeft: 'auto', fontWeight: '500' },
});

export default CartListItem;
