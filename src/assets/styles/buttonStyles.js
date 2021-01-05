import {StyleSheet} from 'react-native';
import colours from '../colours';
import {appFonts, scale, scaleVertical} from '../scale';

export default StyleSheet.create({
  button: {
    borderWidth: scale(1),
    borderColor: colours.primary,
    borderRadius: scale(5),
    paddingVertical: scale(10),
    paddingHorizontal: scale(20),
    marginVertical: scaleVertical(5),
  },
  darkButton: {
    backgroundColor: colours.primary,
  },
  lightButton: {
    borderColor: colours.primary,
    backgroundColor: colours.white,
  },
  decline: {
    borderColor: colours.accent1,
    backgroundColor: colours.white,
  },
  declineText: {
    color: colours.accent1,
  },
  bargain: {
    borderColor: colours.secondary,
    backgroundColor: colours.white,
  },
  bargainText: {
    color: colours.secondary,
  },
  submitButton: {
    borderColor: colours.primary,
    backgroundColor: colours.primary,
  },
  small: {
    borderWidth: scale(1),
    borderColor: colours.primary,
    borderRadius: scale(5),
    paddingVertical: scale(5),
    paddingHorizontal: scale(15),
    marginHorizontal: scaleVertical(5),
  },
  smallText: {
    color: colours.white,
    fontSize: scale(appFonts.h6.fontSize),
    fontFamily: appFonts.semiBoldText.fontFamily,
    textAlign: 'center',
  },
  darkButtonText: {
    color: colours.white,
    fontSize: scale(appFonts.h5.fontSize),
    fontFamily: appFonts.semiBoldText.fontFamily,
    textAlign: 'center',
  },
  lightButtonText: {
    color: colours.primary,
    fontSize: scale(appFonts.h5.fontSize),
    fontFamily: appFonts.semiBoldText.fontFamily,
    textAlign: 'center',
  },
  mediaText: {
    color: colours.primary,
    fontSize: scale(appFonts.h5.fontSize),
    fontFamily: appFonts.boldText.fontFamily,
    textAlign: 'center',
  },
  mediaButton: {
    padding: scale(10),
    alignItems: 'center',
  },
});
