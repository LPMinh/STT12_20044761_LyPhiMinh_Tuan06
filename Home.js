import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,FlatList,Image,TouchableOpacity } from 'react-native';
import {useState} from 'react';
import { ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { render } from 'react-native-web/dist/cjs/exports/render';
import BottomBar from './BottomBar';
export default function HomeScreen({navigation}) {
   const data=[
    {id:1,name:'Cáp chuyển từ cổng USB sang PS2...',Image:require('./assets/giacchuyen 1.png'),price:'69.000đ',rate:15,discout:'-39%'},
    {id:2,name:'Cáp chuyển từ cổng USB sang PS2...',Image:require('./assets/daynguon 1.png'),price:'69.000đ',rate:15,discout:'-39%'},
    {id:3,name:'Cáp chuyển từ cổng USB sang PS2...',Image:require('./assets/dauchuyendoipsps2 1.png'),price:'69.000đ',rate:15,discout:'-39%'},
    {id:4,name:'Cáp chuyển từ cổng USB sang PS2...',Image:require('./assets/dauchuyendoi 1.png'),price:'69.000đ',rate:15,discout:'-39%'},
    {id:5,name:'Cáp chuyển từ cổng USB sang PS2...',Image:require('./assets/carbusbtops2 1.png'),price:'69.000đ',rate:15,discout:'-39%'},
    {id:6,name:'Cáp chuyển từ cổng USB sang PS2...',Image:require('./assets/daucam 1.png'),price:'69.000đ',rate:15,discout:'-39%'},
   ]
   const renderItem = ({ item }) => {
    return (
       <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
              <TouchableOpacity style={{width:'80%',height:'200px',justifyContent:'space-evenly',alignItems:'center',backgroundColor:'white',marginBottom:10}}>
                <Image source={item.Image} style={{width:'100%',height:'80px',resizeMode:'contain'}}/>
                <View style={{width:'100%'}}>
                     <Text style={{fontSize:16,fontWeight:'bold'}}>{item.name}</Text>
                     <View style={{width:'100%',flexDirection:'row'}}>
                          <View style={{flexDirection:'row',justifyContent:'space-between',width:'60%'}}>
                                <Icon name='star' size={15} color='yellow'>                                 
                                </Icon>
                                <Icon name='star' size={15} color='yellow'>                                 
                                </Icon>
                                <Icon name='star' size={15} color='yellow'>                                 
                                </Icon>
                                <Icon name='star' size={15} color='yellow'>                                 
                                </Icon>
                                <Icon name='star' size={15} color='gray'>                                 
                                </Icon>
                          </View>
                          <Text>(15)</Text>
                          
                     </View>
                     <View style={{width:'80%',flexDirection:'row',justifyContent:'space-between'}}>
                          <Text style={{fontSize:13,fontWeight:'bold'}}>{item.price}</Text>
                          <Text style={{fontSize:13,color:'red',marginLeft:10}}>{item.discout}</Text>
                    </View>
                </View>
              </TouchableOpacity>
             
       </View>
    )
   }
    return (
        
        <View style={styles.container}>
              <ScrollView style={{width:'100%'}}>
                    <FlatList style={{width:'100%',height:'100%'}}
                    data={data}
                    keyExtractor={(item)=>item.id}
                    numColumns={2}
                    renderItem={renderItem}
                                    />
                    
              </ScrollView>
              <BottomBar backgroundColor="#1BA9FF" navigation={navigation}/>
        </View>
    )
    
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    }
  });
  