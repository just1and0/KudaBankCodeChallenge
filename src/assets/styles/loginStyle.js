import {StyleSheet} from 'react-native';
import colours from '../colours';
import {appFonts, scale} from '../scale';

export default StyleSheet.create({
 title:{
    color:colours.white,
    fontFamily: appFonts.boldText.fontFamily,
    fontSize: scale(appFonts.h2.fontSize), 
    marginBottom:scale(40),
    alignSelf:'center'
  },
  subContent:{
    color:colours.white,
    fontFamily: appFonts.regularText.fontFamily,
    fontSize: scale(appFonts.h5.fontSize), 
    marginBottom:scale(20)
  }, 
  signInTXT:{
    color:colours.white,
    fontFamily: appFonts.boldText.fontFamily,
    fontSize: scale(appFonts.h5.fontSize),
    textAlign:'center'
  },
  logoImage:{
    width: scale(50),
    resizeMode: 'contain',
    height:scale(50),
    alignSelf:'center',
    marginBottom:scale(20)
  }
 
});
