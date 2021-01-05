/* eslint-disable react-native/no-inline-styles */
import React, {useState, useEffect, forwardRef, useMemo} from 'react';
import {
  TextInput,
  Animated,
  Platform,
  TouchableWithoutFeedback,
  View,
  Image,
  Text,
  TouchableOpacity,
} from 'react-native';
import colours from '../../assets/colours';
import {scale, appFonts} from '../../assets/scale';

const InputField = forwardRef((props, ref) => {
  const [state, setState] = useState({
    isFocused: false,
    secureTextInput: props.secureTextEntry,
  });

 
  const handleFocus = () => setState((state) => ({...state, isFocused: true}));
  const handleBlur = () => setState((state) => ({...state, isFocused: false}));
  const focusInput = () => {
    if (props.editable !== false) {
      ref.current ? ref.current.focus() : null;
    }
  };
 
  const {label, icon} = props;
  const {secureTextInput} = state;
 
 
  return (
    <TouchableWithoutFeedback onPress={focusInput}>
      <View
        style={{
          marginVertical: scale(5),
          flex: 1,
          marginHorizontal: scale(5),
        }}>
        <View
          style={{
            paddingHorizontal: scale(5),
            borderRadius: scale(5),
            borderWidth: scale(2),
            minHeight: scale(50),
            backgroundColor:colours.lightPrimary,
            borderColor: props.error ? colours.accent5 : colours.lightPrimary,
          }}>
         
          <TextInput
            {...props}
            ref={ref}
            secureTextEntry={props.secureTextEntry ? secureTextInput : false}
            enablesReturnKeyAutomatically={true}
            style={styles.inputStyle}
            onFocus={handleFocus}
            onBlur={handleBlur}
          />
          {icon ? (
            props.secureTextEntry ? (
              <TouchableOpacity
                style={{
                  top: -25,
                  display: 'flex',
                  marginLeft: '91%',
                }}
                onPress={() => {
                  setState((prevState) => ({
                    secureTextInput: !prevState.secureTextInput,
                  }));
                }}>
                <View>
                  <Image source={icon} />
                </View>
              </TouchableOpacity>
            ) : (
              <View
                style={{
                  top: -25,
                  display: 'flex',
                  marginLeft: '91%',
                }}>
                <Image source={icon} />
              </View>
            )
          ) : null}
        </View>
        <Text
          style={{
            color: colours.secondary,
            fontFamily: appFonts.regularText.fontFamily,
            fontSize: scale(appFonts.h6.fontSize),
          }}>
          {props.error}
        </Text>
      </View>
    </TouchableWithoutFeedback>
  );
});

const styles = {
  inputStyle: {
    flex: 1,
    fontFamily: appFonts.boldText.fontFamily,
    fontSize: scale(appFonts.h3.fontSize),
    color: 'rgb(90,91,94)',
    paddingBottom: 0,
    paddingHorizontal: scale(10),
    textAlign:'center'
  },
};

export default InputField;
