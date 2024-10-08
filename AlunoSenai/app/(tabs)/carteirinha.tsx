
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
    marginBottom: 30,
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
  },
});
