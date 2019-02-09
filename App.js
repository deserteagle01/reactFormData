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
import ImagePicker from 'react-native-image-picker';
import TextFField from './TextField'
var ic_camera = require("./assets/Images/photo-camera.png");
var ic_video = require("./assets/Images/video-camera.png");
var ic_RightArrow = require("./assets/Images/rightArrow.png");


const options = {};

type Props = {};
export default class App extends Component<Props> {

  constructor(props){
      super(props);
      this.state = ({actionsheet: false,imageSelect:ic_camera, multiplier:0.10,txtFullname:'Rushi M Trivedi',txtEmail:'rushitrivedi01@gmail.com',txtPass:'12345678',txtPhone:'7405464215'});
  }

  selectPhoto(){
      this.setState({actionsheet:true});
  }

  minimizePress(){
      this.setState({actionsheet:false});
  }

  cameraPressed(){
    ImagePicker.launchCamera(options, (response) => {
        // Same code as in above section!
    });
  }

  async proceedPress(){
     var flag = await this.validatreFormdata();
    console.log(flag);
    //alert('proceed press');
  }

  validateEmail = (text) => {
      let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/ ;
      if(reg.test(text) === false){
            console.log("Email is Not Correct");
            return false;
      }
      else {
            console.log("Email is Correct");
            return true;
      }
  }

 validatreFormdata = () => {
    if(this.state.txtFullname.length > 0){
          if(this.state.txtEmail.length > 0){
                var flagg = this.validateEmail(this.state.txtEmail);
                if(flagg === true){
                      if(this.state.txtPass.length > 0){
                            if(this.state.txtPhone.length > 0){
                                return true
                            }
                            else{
                                alert('Phone number can not be empty');
                                return false
                            }
                      }
                      else{
                          alert('Password can not be empty');
                          return false
                      }
                }else{
                    alert('Please enter correct Email');
                    return false
                }
          }
          else{
              alert('Email can not be empty');
              return false
          }
    }else{
        alert('Fullname can not be empty');
        return false
    }
  }

  galleryPresed(){
    this.setState({actionsheet:false});
    ImagePicker.launchImageLibrary(options, (response) => {
      if (response.didCancel) {
            console.log('User cancelled image picker');
        } else if (response.error) {
            console.log('ImagePicker Error: ', response.error);
        }
        else{
            var hjhjfd = { uri: response.uri };
            this.setState({imageSelect:hjhjfd,multiplier:0.20});
        }
    });
  }

renderActionsheet(){
  if(this.state.actionsheet === true){
        return(
        <TouchableOpacity style={styles.backgroundView}
            onPress={() => this.minimizePress()}>
                  <TouchableWithoutFeedback>
                      <View style={styles.contentView}>
                            <Text style={{marginTop:height*0.05,fontSize: 18,fontWeight:'bold'}}>Select image from</Text>

                            <TouchableOpacity style={{marginTop:height*0.10,width:'80%',height:height*0.08,backgroundColor:'#202e41',alignItems:'center',justifyContent:'center'}}
                                onPress={() => this.cameraPressed()}>
                                <Text style={{color:'white',fontSize: 18}}>Camera</Text>
                            </TouchableOpacity>

                            <TouchableOpacity style={{marginTop:height*0.05,width:'80%',height:height*0.08,backgroundColor:'#202e41',alignItems:'center',justifyContent:'center',marginBottom:height*0.05}}
                                onPress={() => this.galleryPresed()}>
                                <Text style={{color:'white',fontSize: 18}}>Gallery</Text>
                            </TouchableOpacity>

                      </View>
                  </TouchableWithoutFeedback>
        </TouchableOpacity>
      );
  }
  else{
      return (null);
  }
}



  render() {
    return (
      <SafeAreaView style={{flex: 1, backgroundColor: '#fff'}}>

      <KeyboardAwareScrollView
        enableOnAndroid
        style={{backgroundColor:'#202e41'}}
        enableAutomaticScroll
        keyboardOpeningTime={0}
        extraHeight={Platform.select({ android: 200 })}>

        <View style={styles.container}>
            <Text style={styles.welcome}>Sign Up!</Text>
            <TouchableOpacity style={{marginTop:height*0.05,backgroundColor:'white',height:height*0.20,aspectRatio:1,borderRadius:height*0.10,alignItems:'center',justifyContent:'center',overflow:'hidden'}}
                onPress={() => this.selectPhoto()}>
                  <View>
                      <Image source={this.state.imageSelect} style={{height:height*this.state.multiplier,aspectRatio:1,}} resizeMode={"stretch"}/>
                  </View>
            </TouchableOpacity>

            <View style={{width:width,height:height*0.4,marginTop:height*0.05,alignItems:'center'}}>

                <TextFField
                    titleColor={'#fdd2bb'}
                    title={'FULL NAME'}
                    textColor={'#969ba4'}
                    underlineColor={'#374455'}
                    onChangeText={(txtFullname) => this.setState({txtFullname})}
                    value={this.state.txtFullname}/>

                <TextFField
                    titleColor={'#fdd2bb'}
                    title={'EMAIL ADDRESS'}
                    textColor={'#969ba4'}
                    underlineColor={'#374455'}
                    onChangeText={(txtEmail) => this.setState({txtEmail})}
                    value={this.state.txtEmail}/>

                <TextFField
                    titleColor={'#fdd2bb'}
                    title={'PASSWORD'}
                    textColor={'#969ba4'}
                    underlineColor={'#374455'}
                    onChangeText={(txtPass) => this.setState({txtPass})}
                    value={this.state.txtPass}
                    secureTextEntry={true}/>

                <TextFField
                    titleColor={'#fdd2bb'}
                    title={'PHONE NUMBER'}
                    textColor={'#969ba4'}
                    underlineColor={'#374455'}
                    onChangeText={(txtPhone) => this.setState({txtPhone})}
                    value={this.state.txtPhone}
                    keyboardType = "number-pad"
                    returnKeyType = "done"/>



                <View>
                    <TouchableOpacity
                      style={{height:height*0.05,marginTop:height*0.04,width:width*0.5,flexDirection:'row',left:-width*0.115,position:'absolute'}}
                      onPress={() => this.proceedPress()}>
                        <View style={{width:'66.66%',height:'100%',alignItems:'center',justifyContent:'center'}}>
                            <Text style={{fontWeight:'bold',fontSize: 18,color:'#00f4fd'}}>PROCEED</Text>
                        </View>
                        <View style={{width:'33.33%',height:'100%',alignItems:'center',justifyContent:'center'}}>
                            <Image source={ic_RightArrow} style={{height:'70%',aspectRatio:1.0}} resizeMode={"stretch"}/>
                        </View>
                    </TouchableOpacity>
                </View>

            </View>

            {this.renderActionsheet()}
        </View>

      </KeyboardAwareScrollView>
      </SafeAreaView>
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
