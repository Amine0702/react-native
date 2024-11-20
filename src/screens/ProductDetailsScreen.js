import { StyleSheet, Text, View, Image, FlatList, useWindowDimensions, ScrollView, Pressable } from 'react-native';
import product from '../data/product'; // Mise à jour du chemin




const ProductDetailsScreen = ({ route, navigation }) => {
    const { id } = route.params; // Récupère l'ID passé en paramètre
    const Products = product.find((p) => p.id === id); // Trouve le produit correspondant
    const { width } = useWindowDimensions();
    
    const addToCart = () => {
        if (navigation && navigation.navigate) {
          console.log('Navigation vers le panier...');
          navigation.navigate('Cart');
        } else {
          console.error('Erreur : navigation est introuvable.');
        }
      };


    return (
        <View style={{ flex: 1 }}>
        <ScrollView>
        <FlatList
        data={Products.images}
        renderItem={({ item }) => (
        <Image source={{ uri: item }} style={{ width, aspectRatio: 1 }} />
        )}
        horizontal
        showsHorizontalScrollIndicator={false}
        pagingEnabled
        />
        <View style={{ padding: 20 }}>
        <Text style={styles.title}>{Products.name}</Text>
        <Text style={styles.price}>${Products.price}</Text>
        <Text style={styles.description}>{Products.description}</Text>
        </View>
        </ScrollView>
        <Pressable style={styles.button} onPress={addToCart}>
            <Text style={styles.buttonText}>Ajouter au panier</Text>
        </Pressable>
        </View>
        );
       }



// Styles
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
