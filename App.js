import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, ImageBackground, TouchableOpacity, SafeAreaView, ScrollView, } from 'react-native';
import { useFonts, Cinzel_400Regular } from '@expo-google-fonts/cinzel';
import { Inter_100Thin, Inter_300Light, Inter_400Regular } from '@expo-google-fonts/inter';
import { OpenSans_400Regular } from '@expo-google-fonts/open-sans';

import { NavigationContainer } from '@react-navigation/native';
import {createNativeStackNavigator} from "@react-navigation/native-stack";

import fundo from "./assets/fundo.png";
import imagem1 from "./assets/imagemhome.png"
import greciafundo from "./assets/azulejo.png"
import escrita from "./assets/escrita.png"
import arquitetura from "./assets/fotoarquitetura.png"
import politica from "./assets/economia.png"
import cultura from "./assets/sociedade.png"
import fundosobre from "./assets/sobre.png"
import minhafoto from "./assets/minhafoto.png"





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

      <TouchableOpacity onPress={()=>navigation.navigate("História")} style={{
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

      <TouchableOpacity onPress={()=>navigation.navigate("Mitologia")} style={{
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
    <View style={{ flex: 1, }}>
      <ImageBackground source={fundosobre} resizeMode="cover" style={{flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',}}>
      <Image source={minhafoto} style={{alignSelf: 'center',
    width: 280,
    height: 280,
    marginTop: 130,
    }} />

    <Text style={{textAlign: 'center', marginTop:30, fontFamily: 'Cinzel_400Regular', fontSize: 20 }}>
      Maria Eduarda Santos Rocha
    </Text>
    <Text style={{textAlign: 'center', marginTop:10, fontFamily: 'Cinzel_400Regular', fontSize: 20 }}>
      3º Info - Turma A
    </Text>
    
    <Text style={{textAlign: 'center', marginTop:10, fontFamily: 'Cinzel_400Regular', fontSize: 20 }}>
      RM: 07683
    </Text>
    
    <Text style={{textAlign: 'center', marginTop:10, fontFamily: 'Cinzel_400Regular', fontSize: 20 }}>
      Contato: (18) 99784-6421
    </Text>
    <Text style={{textAlign: 'center', marginTop:10, fontFamily: 'Cinzel_400Regular', fontSize: 18 }}>
      E-mail: maria.rocha181@etec.sp.gov.br
    </Text>
    


      <TouchableOpacity onPress={()=>navigation.goBack()} 
      style={{
        backgroundColor: '#264B85',
        width: 250,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 20,
        alignSelf: 'center',
        marginTop: 30,}}>
        <Text style={{ fontFamily: 'Cinzel_400Regular', fontSize: 25, color: '#F0EFEC' }} > Voltar </Text>
      </TouchableOpacity>
      </ImageBackground>
    </View>
  );
}

function HistoryScreen({navigation}) {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
      
      <Image source={greciafundo}
      style={{width:500, height: 50, }}
      />
      <Image source={escrita} style={{ paddingTop: 35, width: 300, height: 30, marginTop: 50, alignSelf: 'center'}} />
      <Image source={arquitetura} style={{width: 350, height: 200, marginTop: 30, alignSelf: 'center'}} />

      <Text style={{marginLeft:40, marginRight: 40, textAlign: 'justify', marginTop: 15, fontFamily: 'OpenSans_400Regular'}}>
        Grécia Antiga é o nome dado à civilização que foi constituída na área que abrange o sul da península Balcânica, ilhas do mar Egeu e litoral da Ásia Menor. A importância da Grécia Antiga para o mundo ocidental é grande em virtude, principalmente, dos aspectos cultural, científico, filosófico e político dessa civilização que foram legados à civilização contemporânea.
      </Text>
      <Image source={politica} style={{width: 350, height: 200, marginTop: 30, alignSelf: 'center'}} />
      <Text style={{marginLeft:40, marginRight: 40, textAlign: 'justify', marginTop: 15, fontFamily: 'OpenSans_400Regular'}}>
      Na Grécia Antiga, a economia era baseada na agricultura, especialmente na produção de olivas, uvas e cereais, além do comércio marítimo impulsionado pela localização favorável da região no Mediterrâneo. Atenas e Esparta tinham sistemas econômicos distintos, com Atenas focada no comércio e Esparta na agricultura e controle territorial.
      Politicamente, a Grécia Antiga foi marcada pelo desenvolvimento da democracia em Atenas, onde os cidadãos livres tinham direitos políticos, embora fossem restritos a uma parcela da população. Esparta, em contraste, era governada por uma oligarquia militar, com ênfase na disciplina e no treinamento militar.
      </Text>
      <Image source={cultura} style={{width: 350, height: 200, marginTop: 30, alignSelf: 'center'}} />
      <Text style={{marginLeft:40, marginRight: 40, textAlign: 'justify', marginTop: 15, fontFamily: 'OpenSans_400Regular'}}>
      Na sociedade grega antiga, havia uma clara hierarquia social, onde os cidadãos livres, geralmente proprietários de terras ou comerciantes, ocupavam o topo e desfrutavam de direitos políticos. Abaixo deles estavam os metecos, estrangeiros residentes, e os escravos, que não tinham direitos e eram considerados propriedade de seus senhores. As mulheres ocupavam uma posição subordinada, com direitos limitados e responsabilidades principalmente no espaço doméstico.
      A cultura grega antiga é amplamente admirada e influente. Sua literatura, filosofia, arte, arquitetura e ciência deixaram um legado duradouro. As epopeias de Homero, as obras filosóficas de Sócrates, Platão e Aristóteles, e o teatro de dramaturgos como Sófocles e Eurípedes são exemplos notáveis de suas contribuições culturais. A arquitetura grega, com seus templos e colunas, continua a inspirar projetos arquitetônicos modernos. Além disso, a Grécia antiga foi pioneira em campos científicos como matemática, astronomia e medicina.
      </Text>

      <TouchableOpacity onPress={()=>navigation.goBack()} style={{
        backgroundColor: '#264B85',
        width: 250,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 20,
        alignSelf: 'center',
        marginTop: 50,}}> 
      <Text style={{ fontFamily: 'Cinzel_400Regular', fontSize: 25, color: '#F0EFEC' }}>
        Voltar
      </Text>
      </TouchableOpacity>
      </ScrollView>
      
    </SafeAreaView>
  );
}

function MythologyScreen({navigation}) {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
      
      <Image source={greciafundo}
      style={{width:500, height: 50, }}
      />
      <Image source={escrita} style={{ paddingTop: 35, width: 300, height: 30, marginTop: 50, alignSelf: 'center'}} />
      <Image source={arquitetura} style={{width: 350, height: 200, marginTop: 30, alignSelf: 'center'}} />

      <Text style={{marginLeft:40, marginRight: 40, textAlign: 'justify', marginTop: 15, fontFamily: 'OpenSans_400Regular'}}>
        Grécia Antiga é o nome dado à civilização que foi constituída na área que abrange o sul da península Balcânica, ilhas do mar Egeu e litoral da Ásia Menor. A importância da Grécia Antiga para o mundo ocidental é grande em virtude, principalmente, dos aspectos cultural, científico, filosófico e político dessa civilização que foram legados à civilização contemporânea.
      </Text>
      <Image source={politica} style={{width: 350, height: 200, marginTop: 30, alignSelf: 'center'}} />
      <Text style={{marginLeft:40, marginRight: 40, textAlign: 'justify', marginTop: 15, fontFamily: 'OpenSans_400Regular'}}>
      Na Grécia Antiga, a economia era baseada na agricultura, especialmente na produção de olivas, uvas e cereais, além do comércio marítimo impulsionado pela localização favorável da região no Mediterrâneo. Atenas e Esparta tinham sistemas econômicos distintos, com Atenas focada no comércio e Esparta na agricultura e controle territorial.
      Politicamente, a Grécia Antiga foi marcada pelo desenvolvimento da democracia em Atenas, onde os cidadãos livres tinham direitos políticos, embora fossem restritos a uma parcela da população. Esparta, em contraste, era governada por uma oligarquia militar, com ênfase na disciplina e no treinamento militar.
      </Text>
      <Image source={cultura} style={{width: 350, height: 200, marginTop: 30, alignSelf: 'center'}} />
      <Text style={{marginLeft:40, marginRight: 40, textAlign: 'justify', marginTop: 15, fontFamily: 'OpenSans_400Regular'}}>
      Na sociedade grega antiga, havia uma clara hierarquia social, onde os cidadãos livres, geralmente proprietários de terras ou comerciantes, ocupavam o topo e desfrutavam de direitos políticos. Abaixo deles estavam os metecos, estrangeiros residentes, e os escravos, que não tinham direitos e eram considerados propriedade de seus senhores. As mulheres ocupavam uma posição subordinada, com direitos limitados e responsabilidades principalmente no espaço doméstico.
      A cultura grega antiga é amplamente admirada e influente. Sua literatura, filosofia, arte, arquitetura e ciência deixaram um legado duradouro. As epopeias de Homero, as obras filosóficas de Sócrates, Platão e Aristóteles, e o teatro de dramaturgos como Sófocles e Eurípedes são exemplos notáveis de suas contribuições culturais. A arquitetura grega, com seus templos e colunas, continua a inspirar projetos arquitetônicos modernos. Além disso, a Grécia antiga foi pioneira em campos científicos como matemática, astronomia e medicina.
      </Text>

      <TouchableOpacity onPress={()=>navigation.goBack()} style={{
        backgroundColor: '#264B85',
        width: 250,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 20,
        alignSelf: 'center',
        marginTop: 50,}}> 
      <Text style={{ fontFamily: 'Cinzel_400Regular', fontSize: 25, color: '#F0EFEC' }}>
        Voltar
      </Text>
      </TouchableOpacity>
      </ScrollView>
      
    </SafeAreaView>
  );
}


const Stack = createNativeStackNavigator();


export default function App() {
  let [fontsLoaded, fontError] = useFonts({
    Cinzel_400Regular,
    Inter_100Thin,
    Inter_300Light,
    Inter_400Regular,
    OpenSans_400Regular
  });

  if (!fontsLoaded && !fontError) {
    return null;
  }

  

  return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="About" component={AboutScreen} />
      <Stack.Screen name="História" component={HistoryScreen} />
      <Stack.Screen name="Mitologia" component={MythologyScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
    backgroundColor: '#F0EFEC',
  },
  scrollView: {
    marginHorizontal: 0,
  },
});

