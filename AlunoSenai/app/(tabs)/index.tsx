import { Image, StyleSheet, Platform, Text, View } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import Ionicons from '@expo/vector-icons/Ionicons';
import AntDesign from '@expo/vector-icons/AntDesign';


import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { Appearance } from 'react-native';
""
export default function HomeScreen() {  
  return (
    <View style={styles.body}>
      <View style={styles.headerStyle}>
        <Image source={require('@/assets/images/senai.png')} style={styles.headerImage}></Image>
      </View>
      <View style={styles.buttonContainer}>
        <View style={styles.buttonparts}>
          <View style={styles.button}>
            <Ionicons name="notifications-outline" size={40} color="grey" />
          </View>
          <Text>
              Notificações
          </Text>
        </View>
        <View style={styles.buttonparts}>
          <View style={styles.button}>
            <MaterialIcons name="error-outline" size={40} color="grey" />
          </View>
          <Text>
              Informações
          </Text>
        </View>
        <View style={styles.buttonparts}>
          <View style={styles.button}>
            <AntDesign name="shoppingcart" size={40} color="grey" />
          </View>
          <Text>
              AAPM
          </Text>
        </View>
        <View style={styles.buttonparts}>
          <View style={styles.button}>
            <AntDesign name="calendar" size={40} color="grey" />
          </View>
          <Text>
              Cronograma
          </Text>
        </View>
      </View>
      <Text>
        Ola
      </Text>
    </View>
  );    
}

const styles = StyleSheet.create({
  body: {
    height: '100%',
    backgroundColor: '#ffffff',
  },
  headerImage: {
    height: 80,
    width: '70%',
    top: 50,
    position: 'absolute',
  },
  headerStyle: {
    marginBottom: 60,
    alignItems: 'center',
    height: '25%',
    backgroundColor: '#ED1F24',
  },
  buttonContainer: {
    width: '100%',
    top: 140,
    position: 'absolute',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  button: {
    width: 60,
    height: 60,
    backgroundColor: '#ffffff',
    borderRadius: 15,
    shadowOpacity: 0.6,
    shadowRadius: 8,
    elevation: 5,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 5,
  },
  buttonparts: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  stepContainer: {
    borderRadius: 100,
  },
  textContainer: {
    backgroundColor: '#ED1F24',
  },
  titleContainer: {
    backgroundColor: '#ED1F24',
  },
});
