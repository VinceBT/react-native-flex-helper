# React Native Flex Helper

A simpler use for flexbox styles in React Native

## What is this for ?

After coding with React Native for a good amount of time now, I realized that the most lines I type are the style ones and specifically the flex ones.

I regrouped those ones in an tool that is easy-to-use in order to simplify your coding life.

## Installation

```sh
npm i -S react-native-flex-helper
```
## Basics

 - Import the package
```jsx
const Flex = require('react-native-flex-helper');
or
import Flex from 'react-native-flex-helper';
```
 - Code like this
```jsx
<View style={[Flex.fill, Flex.center]}>
  <View style={[Flex.column]}>
    <View style={[Flex.row, Flex.mainCenter]}>
      <Text>Hello</Text>
    </View>
    <View style={[Flex.row, Flex.mainCenter]}>
      <Text>This is an example</Text>
    </View>
  </View>
</View>
```
## Translation

[Flexbox for beginners](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)

 - **```fill```** : Fills the parent View
 - **```center```** : Any child component will be centered
 - **```column```** : All components will be disposed vertically
 - **```row```** : All components will be disposed vertically
 - **```mainStart```** : Align components at the start in the main axis
 - **```mainCenter```** : Align components at the center in the main axis
 - **```mainEnd```** : Align components at the end in the main axis
 - **```mainSpaceBetween```** : Put spaces between components in the main axis
 - **```mainSpaceAround```** : Put spaces around components in the main axis
 - **```crossStart```** : Align components at the start in the cross axis
 - **```crossCenter```** : Align components at the center in the cross axis
 - **```crossEnd```** : Align components at the end in the cross axis
 - **```crossStretch```** : Stretch components in the cross axis
 - **```colMain```** : Align children in the main axis in column orientation
 - **```colCross```** : Align children in the cross axis in column orientation
 - **```rowMain```** : Align children in the main axis in row orientation
 - **```rowCross```** : Align children in the cross axis in row orientation
 - **```relative```** : A shortcut for relative position
 - **```absolute```** : A shortcut for absolute position
 - **```absoluteFill```** : A shortcut for absolute position filling
 - **```absoluteTop```** : A shortcut for absolute position filling in top part
 - **```absoluteLeft```** : A shortcut for absolute position filling in left part
 - **```absoluteRight```** : A shortcut for absolute position filling in right part
 - **```absoluteBottom```** : A shortcut for absolute position filling in bottom part
 - **```overflow```** : A shortcut for overflow hidden

## License

MIT Licensed
