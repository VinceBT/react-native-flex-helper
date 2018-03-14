/**
 * index.js
 * https://github.com/VinceBT/react-native-flex-helper
 */

import { StyleSheet, Platform } from 'react-native';

const emptyStyle = {};

const flexHelperStyles = {
  fill: {
    flex: 1,
  },
  center: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  fillCenter: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  row: {
    flexDirection: 'row',
  },
  rowReverse: {
    flexDirection: 'row-reverse',
  },
  column: {
    flexDirection: 'column',
  },
  col: {
    flexDirection: 'column',
  },
  columnReverse: {
    flexDirection: 'column-reverse',
  },
  colReverse: {
    flexDirection: 'column-reverse',
  },
  mainStart: {
    justifyContent: 'flex-start',
  },
  mainCenter: {
    justifyContent: 'center',
  },
  mainEnd: {
    justifyContent: 'flex-end',
  },
  mainSpaceBetween: {
    justifyContent: 'space-between',
  },
  mainSpaceAround: {
    justifyContent: 'space-around',
  },
  crossStart: {
    alignItems: 'flex-start',
  },
  crossCenter: {
    alignItems: 'center',
  },
  crossEnd: {
    alignItems: 'flex-end',
  },
  crossStretch: {
    alignItems: 'stretch',
  },
  rowMain: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  rowCross: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  rowCenter: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  colMain: {
    flexDirection: 'column',
    justifyContent: 'center',
  },
  colCross: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  colCenter: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  fillRow: {
    flex: 1,
    flexDirection: 'row',
  },
  fillRowReverse: {
    flex: 1,
    flexDirection: 'row-reverse',
  },
  fillRowMain: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  fillRowCross: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  fillRowCenter: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  fillCol: {
    flex: 1,
    flexDirection: 'column',
  },
  fillColReverse: {
    flex: 1,
    flexDirection: 'column-reverse',
  },
  fillColMain: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
  },
  fillColCross: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
  },
  fillColCenter: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  relative: {
    position: 'relative',
  },
  absolute: {
    position: 'absolute',
  },
  absoluteFill: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  absoluteTop: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
  },
  absoluteLeft: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
  },
  absoluteRight: {
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
  },
  absoluteBottom: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
  },
  absoluteTopLeft: {
    position: 'absolute',
    top: 0,
    left: 0,
  },
  absoluteTopRight: {
    position: 'absolute',
    top: 0,
    right: 0,
  },
  absoluteBottomLeft: {
    position: 'absolute',
    bottom: 0,
    left: 0,
  },
  absoluteBottomRight: {
    position: 'absolute',
    bottom: 0,
    right: 0,
  },
  overflow: {
    overflow: 'hidden',
  },
  textCenter: {
    textAlign: 'center',
  },
  textJustify: {
    textAlign: 'justify',
  },
  textLeft: {
    textAlign: 'left',
  },
  textRight: {
    textAlign: 'right',
  },
  backgroundReset: {
    backgroundColor: 'transparent',
  },
};

const computeShadowStyle = (level) => {
  if (typeof level === 'undefined' || isNaN(level))
    return emptyStyle;
  const safeLevel = Number(level);
  if (safeLevel <= 0)
    return emptyStyle;
  if (Platform.OS === 'android')
    return { elevation: safeLevel };
  if (Platform.OS === 'ios') {
    return {
      shadowOpacity: 0.0015 * safeLevel + 0.18,
      shadowRadius: 0.54 * safeLevel,
      shadowOffset: {
        height: 0.6 * safeLevel,
      },
    };
  }
  return {
    boxShadow: 'rgba(0, 0, 0, ' + (0.07 + (safeLevel * 0.045)).toFixed(2) + ') 0px 0px '+ ((safeLevel * 13.6) - 9.6).toFixed(2) + 'px',
  };
};

const computeCircleStyle = (sizeOrWidth, height) => {
  if (typeof sizeOrWidth === 'undefined' || isNaN(sizeOrWidth))
    return emptyStyle;
  const safeSizeOrWidth = Number(sizeOrWidth);
  if (safeSizeOrWidth < 0)
    return emptyStyle;
  if (typeof height !== 'undefined' && !isNaN(height)) {
    const safeHeight = Number(height);
    if (safeHeight < 0)
      return emptyStyle;
    return {
      width: safeSizeOrWidth,
      height: safeHeight,
      borderRadius: Math.min(safeSizeOrWidth, safeHeight) /2,
    };
  }
  return {
    width: safeSizeOrWidth,
    height: safeSizeOrWidth,
    borderRadius: safeSizeOrWidth /2,
  };
};

const createStyleSheet = function(extStyles) {
  const mergedStyles = Object.assign({}, extStyles, flexHelperStyles);
  const styleSheet = StyleSheet.create(mergedStyles);
  styleSheet.shadow = computeShadowStyle;
  styleSheet.circle = computeCircleStyle;
  return styleSheet;
};

const FlexHelpers = createStyleSheet(flexHelperStyles);
FlexHelpers.create = createStyleSheet;

export const styles = flexHelperStyles; // May miss computation functions
export const create = createStyleSheet;

export default FlexHelpers;
