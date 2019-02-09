/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */




import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Dimensions, TouchableOpacity,Alert,TouchableWithoutFeedback,ImageBackground,Image,SafeAreaView,TextInput,KeyboardAvoidingView} from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
const { width, height } = Dimensions.get("window");

const options = {};

type Props = {};
export default class TextField extends Component<Props> {

  constructor(props){
      super(props);
  }

  render() {
    const {titleColor,textColor,onChangeText,value,underlineColor,title,secureTextEntry,keyboardType,returnKeyType} = this.props;
    return (
      <View style={{width:width*0.75,height:height*0.1}}>
            <Text style={{fontWeight:'bold',fontSize: 12,color:titleColor}}>{title}</Text>
            <TextInput
              style={{marginTop:'3%',fontSize:20,color:textColor}}
              onChangeText={onChangeText}
              value={value}
              secureTextEntry={secureTextEntry}
              keyboardType={keyboardType}
              returnKeyType={returnKeyType}
            />
            <View style={{backgroundColor:underlineColor,height:1.5,width:'100%',marginTop:'2%'}}></View>
      </View>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    flex:1,
    alignItems: 'center',
    backgroundColor: '#202e41',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    marginTop: height*0.05,
    color:'#878d95'
  },
  contentView:{width:width*0.80,backgroundColor:'white',borderRadius:10,alignItems:'center'},
  backgroundView:{height:height,width:width,position:'absolute',alignItems:'center',justifyContent:'center',overflow: 'hidden', backgroundColor: "rgba(0, 0, 0, 0.7)"},
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
