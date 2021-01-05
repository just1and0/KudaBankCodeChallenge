import {StyleSheet} from 'react-native';
import colours from '../colours';
import {appFonts, scale} from '../scale';

export default StyleSheet.create({
 title:{
    color:colours.white,
    fontFamily: appFonts.boldText.fontFamily,
    fontSize: scale(appFonts.h3.fontSize), 
    marginBottom:scale(20)
  },
  subContent:{
    color:colours.white,
    fontFamily: appFonts.regularText.fontFamily,
    fontSize: scale(appFonts.h5.fontSize), 
    marginBottom:scale(20)
  }
 
});
