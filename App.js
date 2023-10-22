import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View ,TouchableOpacity,Image} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ChatScreen from './ChatScreen';
import HomeScreen  from './Home';
import Icon from 'react-native-vector-icons/FontAwesome';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';


export default function App() {
  const Stack = createStackNavigator();
 

  return (
    
    <NavigationContainer>
      <Stack.Navigator
      initialRouteName="Chat"
      >
        <Stack.Screen name="Chat" component={ChatScreen}
        options=
        {({ navigation, route })=>(
          {
            headerStyle:{backgroundColor:"#1BA9FF"},
            headerTintColor:"white",
            headerTitleStyle:{fontWeight:"bold",fontSize:20},
            headerTitleAlign:"center",
            headerTitle:"Chat",
        
          headerLeft:()=>(
            <TouchableOpacity style={{marginLeft:10}}  onPress={()=> navigation.navigate('Chat') } >
              <Image source={require('./assets/Vector.png')} style={{width:30,height:30}}/>
            </TouchableOpacity>
          ),
            headerRight:()=>(  
            <TouchableOpacity style={{marginRight:10}} onPress={()=>alert("This is a menu")}>
            <Image source={require('./assets/cart.png')} style={{width:30,height:30}}/>
          </TouchableOpacity>
          )
        
         })}/> 
        
        <Stack.Screen name="Home" component={HomeScreen}
         
        options={({ navigation, route })=>(
          {headerStyle:{backgroundColor:"#1BA9FF"},
          headerTitleAlign:"center",
          headerTitle:"",
          headerLeft:()=>(    
              <TouchableOpacity style={{marginLeft:20}} onPress={()=>navigation.goBack()}>
                    <Image source={require('./assets/Vector.png')} style={{width:30,height:30}}/>
              </TouchableOpacity>
        ),
        headerRight:()=>(  
            <TouchableOpacity style={{marginRight:10}} onPress={()=>alert("This is a menu")}>
            <Image source={require('./assets/dots.png')} style={{width:20,height:20}}/>
          </TouchableOpacity>
       ),
        headerTitle:()=>(
          <View style={{flexDirection:'row',justifyContent:'space-evenly',alignItems:'center',width:'100%'}}>
          <View style={{width:'220px',height:'100%',justifyContent:'center',alignItems:'flex-start',backgroundColor:'#FFFFFF',flexDirection:'row',justifyContent:'center',alignItems:'center'}} >
                  <Image source={require('./assets/whh_magnifier.png')} style={{width:20,height:20}}/>
                  <TextInput style={{borderWidth:0,marginLeft:5}} placeholder='Dây cáp USB' placeholderTextColor={'grey'} ></TextInput>
            </View> 
            <TouchableOpacity>
                <Image source={require('./assets/bi_cart-check (1).png')} style={{width:30,height:30,marginLeft:20}}/>
            </TouchableOpacity>
          </View>
        )
        })}/> 
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
  },
});
