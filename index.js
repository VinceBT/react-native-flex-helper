/**
 * index.js
 * https://github.com/VinceBT/react-native-flex-helper
 */

module.exports = require('react-native').StyleSheet.create({
  fill: {
    flex: 1
  },
  center: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  fillCenter: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  row: {
    flexDirection: 'row'
  },
  rowReverse: {
    flexDirection: 'row-reverse'
  },
  column: {
    flexDirection: 'column'
  },
  columnReverse: {
    flexDirection: 'column-reverse'
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
  crossEnd: {
    alignItems: 'flex-end'
  },
  crossStretch: {
    alignItems: 'stretch'
  },
  rowMain: {
    flexDirection: 'row',
    justifyContent: 'center'
  },
  rowCross: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  rowCenter: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  colMain: {
    flexDirection: 'column',
    justifyContent: 'center'
  },
  colCross: {
    flexDirection: 'column',
    alignItems: 'center'
  },
  colCenter: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  },
  fillRowMain: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center'
  },
  fillRowCross: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center'
  },
  fillRowCenter: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  fillColMain: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center'
  },
  fillColCross: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center'
  },
  fillColCenter: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  },
  relative: {
    position: 'relative'
  },
  absolute: {
    position: 'absolute'
  },
  absoluteFill: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0
  },
  absoluteTop: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0
  },
  absoluteLeft: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0
  },
  absoluteRight: {
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0
  },
  absoluteBottom: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0
  },
  overflow: {
    overflow: 'hidden'
  },
});
