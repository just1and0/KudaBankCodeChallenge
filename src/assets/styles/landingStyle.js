import {StyleSheet} from 'react-native';
import colours from '../colours';
import {appFonts, scale} from '../scale';

export default StyleSheet.create({
  welcomeTXT: {
    color:colours.white,
    fontFamily: appFonts.boldText.fontFamily,
    fontSize: scale(appFonts.h1.fontSize),
    textAlign:'center',
  },
  
  subContent:{
    color:colours.white,
    fontFamily: appFonts.regularText.fontFamily,
    fontSize: scale(appFonts.h5.fontSize),
    textAlign:'center',
  }, 

  forgetPinTxt:{
    color:colours.white,
    fontFamily: appFonts.regularText.fontFamily,
    fontSize: scale(appFonts.h6.fontSize),
    textAlign:'center',
    marginBottom:scale(10)
  },
  signOutTXT:{
    color:colours.white,
    fontFamily: appFonts.semiBoldText.fontFamily,
    fontSize: scale(appFonts.h6.fontSize),
    textAlign:'center', 
  },
  signInButton:{
    marginBottom:scale(20)
  },
  enterPinTxt:{
    color:colours.white,
    fontFamily: appFonts.semiBoldText.fontFamily,
    fontSize: scale(appFonts.h6.fontSize),
    textAlign:'center',
    // margin:scale(15)
  },
  profileImage:{
    width: scale(70),
    resizeMode: 'contain',
    height:scale(70),
    alignSelf:'center',
    marginBottom:scale(20)
  }
   
});
