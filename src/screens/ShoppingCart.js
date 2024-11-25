import React, { useState } from 'react';
import { FlatList, View, StyleSheet, Text, Pressable } from 'react-native';
import cart from '../data/cart';
import CartListItem from '../components/CartListItem';

const ShoppingCartTotals = ({ subtotal, delivery }) => (
  <View style={styles.totalsContainer}>
    <View style={styles.row}>
      <Text style={styles.text}>Subtotal</Text>
      <Text style={styles.text}>{subtotal.toFixed(2)} US$</Text>
    </View>
    <View style={styles.row}>
      <Text style={styles.text}>Delivery</Text>
      <Text style={styles.text}>{delivery.toFixed(2)} US$</Text>
    </View>
    <View style={styles.row}>
      <Text style={styles.textBold}>Total</Text>
      <Text style={styles.textBold}>{(subtotal + delivery).toFixed(2)} US$</Text>
    </View>
  </View>
);

const ShoppingCart = () => {
  const [_, setForceRender] = useState(false); // Utilisé pour forcer un re-render

  const handleUpdateCart = () => {
    setForceRender((prev) => !prev); // Force un re-render
  };

  const subtotal = cart.reduce((sum, item) => sum + item.product.price * item.quantity, 0);
  const delivery = 10; // Exemple de frais de livraison

  return (
    <>
      <FlatList
        data={cart} // Utilise les données du panier
        renderItem={({ item }) => (
          <CartListItem cartItem={item} onUpdateCart={handleUpdateCart} />
        )}
        ListFooterComponent={<ShoppingCartTotals subtotal={subtotal} delivery={delivery} />}
      />
      <Pressable style={styles.button}>
        <Text style={styles.buttonText}>Checkout</Text>
      </Pressable>
    </>
  );
};

const styles = StyleSheet.create({
  totalsContainer: {
    margin: 20,
    paddingTop: 10,
    borderColor: 'gainsboro',
    borderTopWidth: 1,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 2,
  },
  text: {
    fontSize: 16,
    color: 'gray',
  },
  textBold: {
    fontSize: 16,
    color: 'gray',
    fontWeight: '500',
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

export default ShoppingCart;
