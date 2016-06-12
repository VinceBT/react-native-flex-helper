/**
 * FlexHelper.js
 * https://github.com/VinceBT/react-native-flex-helper
 */

import { StyleSheet } from 'react-native';

/**
 * For main and cross axis explanation
 * https://css-tricks.com/snippets/css/a-guide-to-flexbox/
 */

export default StyleSheet.create({
  fill: {
    flex: 1
  },
  center: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  column: {
    flexDirection: 'column'
  },
  row: {
    flexDirection: 'row'
  },
  mainStart: {
    justifyContent: 'flex-start'
  },
  mainCenter: {
    justifyContent: 'center'
  },
  mainEnd: {
    justifyContent: 'flex-end'
  },
  mainSpaceBetween: {
    justifyContent: 'space-between'
  },
  mainSpaceAround: {
    justifyContent: 'space-around'
  },
  crossStart: {
    alignItems: 'flex-start'
  },
  crossCenter: {
    alignItems: 'center'
  },
  crossStart: {
    alignItems: 'flex-end'
  },
  crossStretch: {
    alignItems: 'stretch'
  },
  relative: {
    position: 'relative'
  },
  absolute: {
    position: 'absolute'
  }
});
