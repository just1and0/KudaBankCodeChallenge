import { lang } from 'moment'
import React from 'react'
import { View, Text,TouchableOpacity, Image } from 'react-native' 
import { ScrollView } from 'react-native-gesture-handler'
import colours from '../../assets/colours'
import { scale } from '../../assets/scale'
import landingStyle from '../../assets/styles/landingStyle'
import loginStyle from '../../assets/styles/loginStyle'
import pageStyle from '../../assets/styles/pageStyle' 
import signUpStyle from '../../assets/styles/signUpStyle'
import Button from '../../components/core/Button'
import Header from '../../components/core/Header'
import InputField from '../../components/core/InputField'
import Logo from '../../assets/image/logo.png';

export default function LoginScreen(props) {
  const login=()=>{

  }


  const goBack =()=>{
    props.navigation.goBack()
  }


  const chatModal=()=>{

  }

  const resetPassword=()=>{

  }

    return (
        <View style={pageStyle.flexContainer}>
            <Header 
                  leftIcon="Back"
                  onRightIconPress={chatModal}
                  onLeftIconPress={goBack}
            />
            <ScrollView 
                style={{
                    flex: 1,
                    backgroundColor: colours.black,
                }}>
                <View style={[pageStyle.container,{paddingTop:scale(20)}]}>
                        <Image source={  Logo } 
                        style={loginStyle.logoImage}
                        /> 
                        <Text style={loginStyle.title}>Hey, there!</Text>
                </View>
                <View style={pageStyle.container}>
                    <InputField
                        placeholder="Email Address"
                     />
                      <InputField
                        placeholder="Password"
                     /> 
                     <Button 
                        text="Sign In" 
                        style={pageStyle.spacer} 
                        onPress={login}    
                        disabled
                        />
                     <TouchableOpacity
                        onPress={resetPassword}>
                        <Text style={loginStyle.signInTXT}>Forgot Password? <Text style={{color:colours.secondary}}>Reset Now</Text></Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        
        </View>
    )
}
