import {StyleSheet} from 'react-native';
import colours from '../colours';
import {appFonts, scale} from '../scale';

export default StyleSheet.create({
  cellDefault: {
    borderColor: 'transparent',
    borderWidth: 1,
  },
  cellFocusedDefault: {
    borderColor: colours.primary,
    borderWidth: 2,
  },
  textStyleDefault: {
    textAlign: 'center',
    color: colours.primary,
    fontSize: scale(appFonts.h2.fontSize),
    fontFamily: appFonts.boldText.fontFamily,
    borderRadius: scale(5),
  },
  error: {
    borderColor: colours.accent5,
  },
  success: {
    borderColor: colours.secondary,
  },
  errorMessage: {
    fontSize: scale(appFonts.h4.fontSize),
    fontFamily: appFonts.boldText.fontFamily,
    color: colours.accent5,
  },
});
