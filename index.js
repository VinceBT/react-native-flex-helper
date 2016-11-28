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
    crossEnd: {
        alignItems: 'flex-end'
    },
    crossStretch: {
        alignItems: 'stretch'
    },
    colMain: {
        flexDirection: 'column',
        justifyContent: 'center'
    },
    colCross: {
        flexDirection: 'column',
        alignItems: 'center'
    },
    rowMain: {
        flexDirection: 'row',
        justifyContent: 'center'
    },
    rowCross: {
        flexDirection: 'row',
        alignItems: 'center'
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
    }
});
