import React from 'react';
import { View, TouchableOpacity, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function BottomBar({ backgroundColor ,navigation}) {
  return (
    <View style={[styles.container, { backgroundColor: backgroundColor ,paddingVertical:20}]}>
      <TouchableOpacity style={{ width: '25%', justifyContent: 'center', alignItems: 'center' }}>
      <Image source={require('./assets/list.png')} style={{ width: 30, height: 30 }} /> 

      </TouchableOpacity>
      <TouchableOpacity style={{ width: '25%', justifyContent: 'center', alignItems: 'center' }  } onPress={()=>navigation.navigate('Home')}>
        <Image source={require('./assets/home.png')} style={{ width: 30, height: 30 }} /> 
      </TouchableOpacity>

      <TouchableOpacity style={{ width: '25%', justifyContent: 'center', alignItems: 'center' }}>
      <Image source={require('./assets/back.png')} style={{ width: 30, height: 30 }} /> 

      </TouchableOpacity>
    </View>
  );
}

const styles = {
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,
    width: '100%',
    paddingvertical: 20,
  },
};
