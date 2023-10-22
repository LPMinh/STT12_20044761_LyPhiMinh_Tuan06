import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,FlatList,Image,TouchableOpacity } from 'react-native';
import {useState} from 'react';
import { ScrollView } from 'react-native';
import BottomBar from './BottomBar';
export default function ChatCreen({navigation}) {
    const data = [
       {key:'1',name:'Ca nấu lẩu,nấu mì mini',shop:'Devang',Image:require('./assets/ca_nau_lau.png')},
       {key:'2',name:'1KG KHÔ GÀ BƠ TỎI',shop:'LTD Food',Image:require('./assets/ga_bo_toi.png')},
       {key:'3',name:'Xe cần cẩu đa năng',shop:'Thế giới đồ chơi',Image:require('./assets/ca_nau_lau.png')},
       {key:'4',name:'Đồ chơi dạng mô hình',shop:'Thế giới đồ chơi',Image:require('./assets/do_choi_dang_mo_hinh.png')},
       {key:'4',name:'Lãnh đạo giản đơn',shop:'Minh Long Book',Image:require('./assets/lanh_dao_gian_don.png')},
       {key:'4',name:'Hieu Lòng con trẻ',shop:'Minh Long Book',Image:require('./assets/hieu_long_con_tre.png')},
        // Thêm các mục khác theo cần thiết
      ];
    const renderItem = ({ item }) => (
        <View style={styles.item}>
            <Image source={item.Image} style={{width:'30%',height:'100%',resizeMode:'contain'}}/>
            <View style={{width:'50%'}}>
            <Text style={{fontSize:16,fontWeight:'bold'}}>{item.name}</Text>
                <View style={{width:'100%',flexDirection:'row'}}>
                   <Text style={{fontSize:13,color:'gray'}}>shop: </Text>
                    <Text style={{fontSize:13,fontWeight:'bold'}}>{item.shop}</Text>
                </View>
            </View>
            <TouchableOpacity style={{width:'20%',paddingVertical:12,backgroundColor:'#f31111',justifyContent:'center',alignItems:'center',marginRight:10}}>
                <Text style={{color:'white'}}>Chat</Text>
            </TouchableOpacity>
        </View>
      );
    return (
        
        <View style={styles.container}>
           <View style={{width:'100%',height:'70px',backgroundColor:'#e5e5e5',justifyContent:'center',alignContent:'center',alignItems:'center'}}>
                <Text style={{width:'80%'}}>Bạn có thắc mắc với sản phẩm vừa xem, đừng ngại chát với shop!</Text>
           </View>
           <ScrollView style={{width:'100%'}}>
           <FlatList style={{width:'100%',height:'100%'}}
            data={data}
             renderItem={renderItem}
            keyExtractor={(item) => item.key}
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
    },
    item:{
        width:'100%',
        height:'80px',
        backgroundColor:'white',
        justifyContent:'center',
        alignItems:'center',
        flexDirection:'row',

    }
  });
  