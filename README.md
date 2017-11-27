# React Native Flex Helper

A compilation of useful style helpers and shorthands in React Native

## Installation

```sh
yarn add react-native-flex-helper
or
npm i -S react-native-flex-helper
```

## How it works

```FlexHelpers.create``` uses ReactNative's ```StyleSheet.create``` to build for you a new stylesheet containing your style rules and the helper rules.

Overlapping names will be overwritten by the styles helpers, be careful.

## Usage

Simply import the package
```jsx
import FlexHelpers from 'react-native-flex-helper';
or
const FlexHelpers = require('react-native-flex-helper');
```
Find your stylesheet declaration, for example
```jsx
const styles = StyleSheet.create({
  box: { backgroundColor: 'red' },
  text: { color: '#000' },
});
```
And just replace 
```StyleSheet.create``` with ```FlexHelpers.create```
Like this 
```jsx
const styles = FlexHelpers.create({
  box: { backgroundColor: 'red' },
  text: { color: '#000' },
});
```
You are ready to use it !
```jsx
<View style={[styles.fillCenter]}>
  <View style={[styles.col, styles.shadow(2), styles.box]}
    <Text style={[styles.textCenter, styles.text]>Hello</Text>
    <Text style={[styles.textCenter, styles.text]>World!</Text>
  </View>
</View>
```

### Additional (compatibility with older versions)

You can also use FlexHelpers as a static stylesheet and merge your styles with an array (it may not work with a spread operator).
```jsx
const styles = StyleSheet.create({
  text: { color:000' },
});
...
const HelloWorld = () => (
  <Text style={[FlexHelpers.textCenter, styles.text]}>Hello World!</Text>
);
```

## Quick guide to Flexbox

[Flexbox tutorial](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)


## Translation

#### Layout
 - **```fill```** : ```{ flex: 1 }```
 - **```center```** : ```{ alignItems: 'center', justifyContent: 'center' }```
 
#### Orientation
 - **```row```** : ```{ flexDirection: 'row' }```
 - **```rowReverse```** : ```{ flexDirection: 'row-reverse' }```
 - **```column```** or **```col```** : ```{ flexDirection: 'column' }```
 - **```columnReverse```** or **```colReverse```** : ```{ flexDirection: 'column-reverse' }```
 
#### Main axis
 - **```mainStart```** : ```{ justifyContent: 'flex-start' }```
 - **```mainCenter```** : ```{ justifyContent: 'center' }```
 - **```mainEnd```** : ```{ justifyContent: 'flex-end' }```
 - **```mainSpaceBetween```** : ```{ justifyContent: 'space-between' }```
 - **```mainSpaceAround```** : ```{ justifyContent: 'space-around' }```
 
#### Cross axis
 - **```crossStart```** : ```{ alignItems: 'flex-start' }```
 - **```crossCenter```** : ```{ alignItems: 'center' }```
 - **```crossEnd```** : ```{ alignItems: 'flex-end' }```
 - **```crossStretch```** : ```{ alignItems: 'stretch' }```
 
#### Shorthands
 - **```rowMain```** : ```{ flexDirection: 'row', justifyContent: 'center' }```
 - **```rowCross```** : ```{ flexDirection: 'row', alignItems: 'center' }```
 - **```rowCenter```** : ```{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }```
 - **```colMain```** : ```{ flexDirection: 'column', justifyContent: 'center' }```
 - **```colCross```** : ```{ flexDirection: 'column', alignItems: 'center' }```
 - **```colCenter```** : ```{ flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }```
 - **```fillCenter```** : ```{ flex: 1, alignItems: 'center', justifyContent: 'center' }```
 - **```fillRow```** : ```{ flex: 1, flexDirection: 'row' }```
 - **```fillRowReverse```** : ```{ flex: 1, flexDirection: 'row-reverse' }```
 - **```fillRowMain```** : ```{ flex: 1, flexDirection: 'row', justifyContent: 'center' }```
 - **```fillRowCross```** : ```{ flex: 1, flexDirection: 'row', alignItems: 'center' }```
 - **```fillRowCenter```** : ```{ flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }```
 - **```fillCol```** : ```{ flex: 1, flexDirection: 'column' }```
 - **```fillColReverse```** : ```{ flex: 1, flexDirection: 'column-reverse' }```
 - **```fillColMain```** : ```{ flex: 1, flexDirection: 'column', justifyContent: 'center' }```
 - **```fillColCross```** : ```{ flex: 1, flexDirection: 'column', alignItems: 'center' }```
 - **```fillColCenter```** : ```{ flex: 1, flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }```
 
#### Position helpers
 - **```relative```** : ```{ position: 'relative' }```
 - **```absolute```** : ```{ position: 'absolute' }```
 - **```absoluteFill```** : ```{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0 }```
 - **```absoluteTop```** : ```{ position: 'absolute', top: 0, left: 0, right: 0 }```
 - **```absoluteLeft```** : ```{ position: 'absolute', top: 0, left: 0, bottom: 0 }```
 - **```absoluteRight```** : ```{ position: 'absolute', top: 0, right: 0, bottom: 0 }```
 - **```absoluteBottom```** : ```{ position: 'absolute', left: 0, right: 0, bottom: 0 }```
 - **```absoluteTopLeft```** : ```{ position: 'absolute', top: 0, left: 0 }```
 - **```absoluteTopRight```** : ```{ position: 'absolute', top: 0, right: 0 }```
 - **```absoluteBottomLeft```** : ```{ position: 'absolute', bottom: 0, left: 0 }```
 - **```absoluteBottomRight```** : ```{ position: 'absolute', bottom: 0, right: 0 }```
 
#### Additional features
 - **```overflow```** : ```{ overflow: 'hidden' }```
 - **```shadow(level)```** : ```Uses the correct way to display a shadow in the platform (Android, iOS, Web)```
 - **```textCenter```** : ```{ textAlign: 'center' }```
 - **```textJustify```** : ```{ textAlign: 'justify' }```
 - **```textLeft```** : ```{ textAlign: 'left' }```
 - **```textRight```** : ```{ textAlign: 'right' }```
 - **```textReset```** : ```{ backgroundColor: 'transparent' }``` is a fix for a common iOS issue where the backgroundColor of Text tags is inherited and need to be reset

## License

MIT Licensed
