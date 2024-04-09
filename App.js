import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, ImageBackground, TouchableOpacity, Touchable } from 'react-native';
import { useFonts, Cinzel_400Regular } from '@expo-google-fonts/cinzel';
import { NavigationContainer } from '@react-navigation/native';
import {createNativeStackNavigator} from "@react-navigation/native-stack";

import fundo from "./assets/fundo.png";
import imagem1 from "./assets/imagemhome.png"

function HomeScreen({navigation}) {
  return (
    <View style={{ flex: 1,
       }}>
      <ImageBackground source={fundo} resizeMode="cover" style={{flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',}}> 
    <Image source={imagem1} style={{alignSelf: 'center',
    width: 280,
    height: 280,
    marginTop: 100,
    }} />

      <TouchableOpacity onPress={()=>navigation.navigate("About")} style={{
        backgroundColor: '#264B85',
        width: 250,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 20,
        alignSelf: 'center',
        marginTop: 50,
      }}>
        <Text style={{ fontFamily: 'Cinzel_400Regular', fontSize: 25, color: '#F0EFEC' }}> História </Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={()=>navigation.navigate("About")} style={{
        backgroundColor: '#264B85',
        width: 250,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 20,
        alignSelf: 'center',
        marginTop: 30,

      }}>
        <Text style={{ fontFamily: 'Cinzel_400Regular', fontSize: 25, color: '#F0EFEC' }}> Mitologia </Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={()=>navigation.navigate("About")} style={{
        backgroundColor: '#264B85',
        width: 250,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 20,
        alignSelf: 'center',
        marginTop: 30,

      }}>
        <Text style={{ fontFamily: 'Cinzel_400Regular', fontSize: 25, color: '#F0EFEC' }}> Sobre </Text>
      </TouchableOpacity>
      </ImageBackground>
    </View>
  );
}

function AboutScreen({navigation}) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Tela de Sobre</Text>
      <TouchableOpacity onPress={()=>navigation.goBack()}>
        <Text> Voltar </Text>
      </TouchableOpacity>
    </View>
  );
}


const Stack = createNativeStackNavigator();


export default function App() {
  let [fontsLoaded, fontError] = useFonts({
    Cinzel_400Regular,
  });

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="About" component={AboutScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
});

