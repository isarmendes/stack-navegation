import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Contact from './src/screens/Contact/index';
import Home from './src/screens/Home/index';
import Profile from './src/screens/Profile/index';

export default function App() {
  
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name = "Home" component={Home}
        options={{
          title:"Tela Inicial",
          headerStyle:{
            backgroundColor: "f4511e",
          },
          headerTintColor:"#fff",
          headerTitleStyle: {
            fontWeight:"bold"
          }, headerTitleAlign :'center',
          // headerShown:false,
        }}/>
        <Stack.Screen name = "Profile" component={Profile}/>
        <Stack.Screen name = "Contact" component={Contact}/>
      </Stack.Navigator>
      <StatusBar style="auto"/>
    </NavigationContainer>
  );
}
