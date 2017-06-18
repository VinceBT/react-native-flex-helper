# React Native Flex Helper

A compilation of style helpers in React Native

## Installation

```sh
npm i -S react-native-flex-helper
```

## Basics

 - Import the package
```jsx
import Flex from 'react-native-flex-helper';
or
const Flex = require('react-native-flex-helper');
```
 - Code like this
```jsx
<View style={Flex.fillCenter}>
  <View style={Flex.column}>
    <View style={[Flex.row, Flex.mainCenter]}>
      <Text>Rendered in</Text>
      <Text> the x axis</Text>
      <Text> and centered</Text>
    </View>
    <View style={Flex.rowMain}>
      <Text>Renders the same</Text>
      <Text> than the example before</Text>
    </View>
    <View style={[Flex.colCenter, { backgroundColor: 'blue' }, customStyle]}>
      <Text>Renders as a column</Text>
      <Text>And in the center</Text>
      <Text>With custom styles</Text>
    </View>
  </View>
</View>
```
## Translation

[Flexbox for beginners](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)

####Layout
 - **```fill```** : ```{ flex: 1 }```
 - **```center```** : ```{ alignItems: 'center', justifyContent: 'center' }```
 - **```fillCenter```** : ```{ flex: 1, alignItems: 'center', justifyContent: 'center' }```
 
####Orientation
 - **```row```** : ```{ flexDirection: 'row' }```
 - **```rowReverse```** : ```{ flexDirection: 'row-reverse' }```
 - **```column```** or **```col```** : ```{ flexDirection: 'column' }```
 - **```columnReverse```** or **```colReverse```** : ```{ flexDirection: 'column-reverse' }```
 
####Main axis
 - **```mainStart```** : ```{ justifyContent: 'flex-start' }```
 - **```mainCenter```** : ```{ justifyContent: 'center' }```
 - **```mainEnd```** : ```{ justifyContent: 'flex-end' }```
 - **```mainSpaceBetween```** : ```{ justifyContent: 'space-between' }```
 - **```mainSpaceAround```** : ```{ justifyContent: 'space-around' }```
 
####Cross axis
 - **```crossStart```** : ```{ alignItems: 'flex-start' }```
 - **```crossCenter```** : ```{ alignItems: 'center' }```
 - **```crossEnd```** : ```{ alignItems: 'flex-end' }```
 - **```crossStretch```** : ```{ alignItems: 'stretch' }```
 
####Shorthands
 - **```rowMain```** : ```{ flexDirection: 'row', justifyContent: 'center' }```
 - **```rowCross```** : ```{ flexDirection: 'row', alignItems: 'center' }```
 - **```rowCenter```** : ```{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }```
 - **```colMain```** : ```{ flexDirection: 'column', justifyContent: 'center' }```
 - **```colCross```** : ```{ flexDirection: 'column', alignItems: 'center' }```
 - **```colCenter```** : ```{ flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }```
 - **```fillRow```** : ```{ flex: 1, flexDirection: 'row' }```
 - **```fillRowReverse```** : ```{ flex: 1, flexDirection: 'row-reverse' }```
 - **```fillRowMain```** : ```{ flex: 1, flexDirection: 'row', justifyContent: 'center' }```
 - **```fillRowCross```** : ```{ flex: 1, flexDirection: 'row', alignItems: 'center' }```
 - **```fillRowCenter```** : ```{ flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }```
 - **```fillCol```** : ```{ flex: 1, flexDirection: 'column' }```
 - **```fillCol```** : ```{ flex: 1, flexDirection: 'column-reverse' }```
 - **```fillColMain```** : ```{ flex: 1, flexDirection: 'column', justifyContent: 'center' }```
 - **```fillColCross```** : ```{ flex: 1, flexDirection: 'column', alignItems: 'center' }```
 - **```fillColCenter```** : ```{ flex: 1, flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }```
 
####Position helpers
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
 
####Others
 - **```overflow```** : ```{ overflow: 'hidden' }```

## License

MIT Licensed
