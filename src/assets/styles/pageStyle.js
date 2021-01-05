import {StyleSheet} from 'react-native';
import colours from '../colours';
import {appFonts, scale} from '../scale';

export default StyleSheet.create({
  container: {
    paddingHorizontal: scale(20),
    flex: 1,
    backgroundColor:colours.black
  },
  flexContainer: {
    flex: 1,
  },
  backgroundWhite: {
    backgroundColor: colours.white,
  },
  paddingHorizontal: {
    paddingHorizontal: scale(20),
  },
  rowView: {
    flexDirection: 'row',
  },
  justifySpaceBtw: {
    justifyContent: 'space-between',
  },
  alignItemsCeter: {
    alignItems: 'center',
  },
  regularText: {
    fontFamily: appFonts.regularText.fontFamily,
    fontSize: scale(appFonts.h5.fontSize),
  },
  semiBoldText: {
    fontFamily: appFonts.semiBoldText.fontFamily,
    fontSize: scale(appFonts.h5.fontSize),
  },
  boldText: {
    fontFamily: appFonts.semiBoldText.fontFamily,
    fontSize: scale(appFonts.h4.fontSize),
  },
  headertxt: {
    color: colours.lightPrimary,
    fontSize: scale(appFonts.h3.fontSize),
    fontFamily: appFonts.boldText.fontFamily,
  },
  spacer: {
    marginBottom:scale(20)
  },
});
