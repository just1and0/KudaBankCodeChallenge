import React from 'react'
import { View, Text } from 'react-native' 
import { ScrollView } from 'react-native-gesture-handler'
import colours from '../../assets/colours'
import { scale } from '../../assets/scale'
import pageStyle from '../../assets/styles/pageStyle' 
import signUpStyle from '../../assets/styles/signUpStyle'
import Header from '../../components/core/Header'
import InputField from '../../components/core/InputField'
export default function SignUpScreen(props) {
  const goNext=()=>{

  }
  const goBack =()=>{
    props.navigation.goBack()
  }
    return (
        <View style={pageStyle.flexContainer}>
            <Header 
                  leftIcon="Back"
                  onRightIconPress={goNext}
                  onLeftIconPress={goBack}
            />
            <ScrollView 
                style={{
                    flex: 1,
                    backgroundColor: colours.black,
                }}>
                <View style={[pageStyle.container,{paddingTop:scale(20)}]}>
                        <Text style={signUpStyle.title}>Start</Text>
                        <Text style={signUpStyle.subContent}>
                            Open a Kuda account with a few details.
                        </Text>
                        <Text style={signUpStyle.subContent}>
                            Your password must have at least 8 characters{`\n`} including letters and a number.
                        </Text> 
                </View>
                <View style={pageStyle.container}>
                    <InputField
                        placeholder="Email Address"
                     />
                      <InputField
                        placeholder="Enter Password"
                     />
                      <InputField
                        placeholder="Re-Enter Password"
                     />
                      <InputField
                        placeholder="Referral Code (Optional)"
                     />
                </View>
            </ScrollView>
        
        </View>
    )
}
