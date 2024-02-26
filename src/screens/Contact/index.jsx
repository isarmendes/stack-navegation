import { View, Text, TouchableOpacity,} from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import styles from './styles';


export default function Home() {
    const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Text>Contact</Text>
      <TouchableOpacity style={styles.navButton} onPress={()=> navigation.navigate("Home")}>
        <Text>Home</Text>
    </TouchableOpacity>
  
    </View>
  )
}

