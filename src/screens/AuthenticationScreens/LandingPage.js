import React from 'react'
import { View, Text, Image } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import colours from '../../assets/colours'
import pageStyle from '../../assets/styles/pageStyle'
import landingStyle from '../../assets/styles/landingStyle'
import Button from '../../components/core/Button'
import CodeInput from '../../components/common/CodeInput'
import Avatar from '../../assets/image/avatar.png';
import { scale } from '../../assets/scale' 

export default function LandingPage(props) {
    const [code, setCode] = React.useState('');
    const [isLoading, setIsLoading] = React.useState(false);
  
    const joinKuda = () =>{
      props.navigation.navigate('LoginScreen')
    }

    const signIn =()=>{ 
      props.navigation.navigate('SignUpScreen')
    }
    const onFulfill=()=>{

    }
    return (
        <View style={[pageStyle.container,{justifyContent:'center'}]}>
            <Image source={  Avatar } 
              style={landingStyle.profileImage}
               /> 
           <Text style={[landingStyle.welcomeTXT ]}>Welcome Back</Text>
           <Text style={[landingStyle.subContent, pageStyle.spacer]}>David Shokunbi</Text>
             <View>
              <Text style={landingStyle.enterPinTxt}>Enter PIN</Text>
               <View style={{alignItems:'center'}}>
                  <CodeInput
                        value={code}
                        onChangeText={setCode}
                        secureTextEntry={false}
                        // isValid={code.length === 4 ? isCodeValid : null}
                        onFulfill={onFulfill}
                        loading={isLoading}
                        style={{
                          marginBottom:scale(10)
                        }}
                        submit={() => {
                          onFulfill(code); 
                        }} 
                    />
                  <View>
                    
                    <Text style={[landingStyle.enterPinTxt,{marginBottom:scale(10)}]}>Face ID</Text>
                  </View>
               </View>
             </View>
             <Button 
                text="Sign In" 
                style={landingStyle.signInButton} 
                onPress={joinKuda}    
                 />
             <Text style={landingStyle.forgetPinTxt}>Forget your Pin or this isn't you?</Text>
             <TouchableOpacity
                onPress={signIn}>
                  <Text style={[landingStyle.signOutTXT,{color:colours.secondary}]}>Sign Out</Text>
           </TouchableOpacity>
        </View>
    )
}
