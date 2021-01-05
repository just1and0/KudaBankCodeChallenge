/* eslint-disable react-native/no-inline-styles */
import React, {useState, forwardRef, createRef, useRef} from 'react';
import PropTypes from 'prop-types';
import {View, TextInput, Text, ActivityIndicator} from 'react-native';
import * as Animatable from 'react-native-animatable';
import codeInputStyles from '../../assets/styles/codeInputStyles';
import {appFonts, scale} from '../../assets/scale';
import colours from '../../assets/colours';
import {
  TouchableOpacity,
  TouchableWithoutFeedback,
} from 'react-native-gesture-handler';
import IconGenerator from '../core/IconGenerator';
import { Colors } from 'react-native/Libraries/NewAppScreen';

const CodeInput = forwardRef((props, ref) => {
  const [state, setState] = useState({focused: false});
  const inputRef = useRef();

  const inputCode = (code) => {
    const {codeLength = 4, onChangeText, onFulfill} = props;
    // Only allow numbers
    // code = code.replace(/\D/g, '');
    if (onChangeText) {
      onChangeText(code);
    }
    if (code.length === codeLength && onFulfill) {
      onFulfill(code);
    }
  };

  const onFocused = () => {
    setState({focused: true});
  };

  const onBlurred = () => {
    setState({focused: false});
  };

  const {value, codeLength, autoFocus, cellWidth} = props;
  const {focused} = state;

  return (
    <TouchableWithoutFeedback onPress={() => inputRef.current.focus()}>
      <View
        style={{
          padding: scale(10),
        }}>
        <Animatable.View
          style={[
            {
              alignItems: 'center',
              flexDirection: 'row',
              // justifyContent: 'space-between',
            },
          ]}>
          <View
            style={{
              position: 'absolute',
              margin: 0,
              height: '100%',
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            {Array.apply(null, Array(codeLength)).map((_, index) => {
              let cellFocused = focused && index === value.length;
              // Retain focus on last input
              if (value.length === codeLength && index === codeLength - 1) {
                cellFocused = true;
              }

              let cellText = value[index];

              return (
                <Animatable.View
                  key={index}
                  style={[
                    {
                      backgroundColor: colours.white,
                      borderWidth: scale(2),
                      borderColor: colours.lightPrimary,
                      borderRadius: scale(2),
                      width: scale(cellWidth),
                      height: scale(48),
                      marginLeft: scale(8),
                      marginRight: scale(8),
                      flexDirection: 'row',
                      alignItems: 'center',
                      justifyContent: 'center',
                      backgroundColor:colours.lightPrimary
                    },
                    cellFocused ? codeInputStyles.cellFocusedDefault : {},
                    props.value.length === 4
                      ? props.isValid
                        ? codeInputStyles.success
                        : codeInputStyles.error
                      : null,
                  ]}
                  animation={index === value.length && focused ? 'pulse' : null}
                  iterationCount="infinite"
                  duration={500}>
                  <TextInput
                    value={cellText}
                    editable={false}
                    secureTextEntry={props.secureTextEntry}
                    style={[codeInputStyles.textStyleDefault]}
                  />
                </Animatable.View>
              );
            })}
          </View>
          <TextInput
            ref={inputRef}
            disableFullscreenUI={true}
            value={value}
            onChangeText={inputCode}
            onFocus={onFocused}
            onBlur={onBlurred}
            spellCheck={false}
            placeholder="-"
            autoFocus={autoFocus}
            keyboardType="number-pad"
            numberOfLines={1}
            maxLength={codeLength}
            selection={{
              start: value.length,
              end: value.length,
            }}
            secureTextEntry={props.secureTextEntry}
            style={{
              height: scale(48),
              // flex: 1,
              width: scale((cellWidth + 16) * codeLength),
              opacity: 0,
              textAlign: 'center',
              fontSize: scale(appFonts.h3.fontSize),
              // color: 'red',
            }}
          /> 
        </Animatable.View>
        {props.value.length === 4 ? (
          !props.isValid ? (
            <Text style={codeInputStyles.errorMessage}>
              This code is not valid !
            </Text>
          ) : null
        ) : null}
      </View>
    </TouchableWithoutFeedback>
  );
});

CodeInput.defaultProps = {
  value: '',
  codeLength: 4,
  autoFocus: false,
  secureTextEntry: true,
  cellWidth: 50,
};

CodeInput.propTypes = {
  value: PropTypes.string,
  codeLength: PropTypes.number,
  autoFocus: PropTypes.bool,
  onFulfill: PropTypes.func,
  onChangeText: PropTypes.func,
  cellWidth: PropTypes.number,
};

export default CodeInput;
