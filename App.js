import Navigation from './src/navigation'; // Remplacez par le chemin correct vers Navigation.js
import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';


export default function App() {
  return (
    <>
      <Navigation />
      <StatusBar style="auto" />
    </>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
