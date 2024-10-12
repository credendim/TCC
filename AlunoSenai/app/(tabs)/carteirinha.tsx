
import { ScrollView, Image, StyleSheet, Platform, Text, View } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import Ionicons from '@expo/vector-icons/Ionicons';
import AntDesign from '@expo/vector-icons/AntDesign';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { Appearance } from 'react-native';

export default function Cartirinha() {  
  return (
    <View style={styles.body}>
      <View style={styles.headerStyle}>
        <Image source={require('@/assets/images/senai.png')} style={styles.headerImage}></Image>
      </View>
      <View style={styles.contentBody}>
        <Text style={styles.titleText}>
          Carteirinha do estudante 
        </Text>
        <View style={styles.cardfront}>
          <Image source={require('@/assets/images/3.png')} style={styles.cardImage} resizeMode="stretch"></Image>
          {/* <Image source={require('@/assets/images/3.png')} style={styles.cardImage} resizeMode="stretch"></Image> */}
          <View style={styles.cardPhoto}></View>
          <View style={styles.cardInformations}>
            <Text>NOME DO ALUNO</Text>
            <View>
              <Text>Unidade</Text>
              <Text>118 - A. Jacob LAFER</Text>
            </View>
            <View>
              <Text>Nascimento</Text>
              <Text>xx/xx/xxxx</Text>
            </View>
          </View>
        </View>
        <View style={styles.cardBack}>
          <Image source={require('@/assets/images/4.png')} style={styles.cardImage} resizeMode="stretch"></Image>
        </View>
        <Text>
          Toque para girar
        </Text>
      </View>
    </View>
  );    
}

const styles = StyleSheet.create({
  body: {
    height: '100%',
    backgroundColor: '#ffffff',
  },
  headerImage: {
    height: 90,
    width: '80%',
    top: 40,
    position: 'absolute',
  },
  headerStyle: {
    position: 'static',
    top: 0,
    marginBottom: 25,
    alignItems: 'center',
    height: '25%',
    backgroundColor: '#ED1F24',
  },
  contentBody: {
    alignItems: 'center',
  },
  titleText: {
    fontWeight: '600',
    fontSize: 20,
    marginBottom: 15,
  },
  cardfront: {
    display: 'flex',
    alignItems: 'center',
  },
  cardImage: {
    width: 270,
    height: 400,
    marginBottom: 10,
  },
  cardPhoto: {
    top: 25,
    backgroundColor: 'green',
    width: 100,
    height: 100,
    position: 'absolute',
    borderRadius: 100,
  },
  cardInformations: {
    top: 140,
    position: 'absolute',
    alignItems: 'center',
    gap: 30,
  },
  cardBack: {
    top: 37,
    position: 'absolute',
  },
});
