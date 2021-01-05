import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import colours from '../../assets/colours';
 
import {scale, appFonts} from '../../assets/scale';
import IconGenerator from './IconGenerator';

function Header({ 
  onLeftIconPress = () => {}, 
  leftIcon, 
  onRightIconPress = () => {}, 
}) {
  return (
    <View style={[styles.header]}>  
      {leftIcon && (
        <TouchableOpacity style={styles.icon} onPress={onLeftIconPress}>
          <IconGenerator tagName={leftIcon} color="white" />
        </TouchableOpacity>
      )} 
      <TouchableOpacity onPress={onRightIconPress} style={styles.icon}>
          <Text style={styles.nextText}>Next</Text>
      </TouchableOpacity> 
    </View>
  );
}

export default Header;

const styles = StyleSheet.create({
  header: {
    padding: scale(10),
    zIndex: 99999,
    backgroundColor: colours.lightPrimary,
    flexDirection:'row',
    justifyContent:'space-between'
  }, 
  icon: {
    padding: scale(10),
  },
  nextText:{
    color:colours.lighterPrimary,
    fontSize: scale(appFonts.h5.fontSize),
    fontFamily: appFonts.boldText.fontFamily,
  }
});
