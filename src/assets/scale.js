import {Platform} from 'react-native';
import {Dimensions} from 'react-native';

const {width, height} = Dimensions.get('window');

const guidelineWidth = Platform.isPad ? 560 : 360;
const guidelineBaseHeight = Platform.isPad ? 840 : 640;

export const scale = (size) => (width / guidelineWidth) * size;
export const scaleVertical = (size) => (height / guidelineBaseHeight) * size;

export const appFonts = {
  lightText: {
    fontFamily: 'OpenSans-Light',
  },
  regularText: {
    fontFamily: 'OpenSans-Regular',
  },
  boldText: {
    fontFamily: 'OpenSans-Bold',
  },
  semiBoldText: {
    fontFamily: 'OpenSans-SemiBold',
  },
  h1: {fontSize: 26},
  h2: {fontSize: 24},
  h3: {fontSize: 20},
  h4: {fontSize: 16},
  h5: {fontSize: 14},
  h6: {fontSize: 12},
};
