# React Native Flex Helper

## What is this for ?
With coding with React Native for a good amount of time now, I realized that the most lines I type are the style ones and specifically the flex ones.

I have made a component for you to simplify writing flew styles for your applications :)

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
 - **```fill```** : Fills the parent View
 - **```center```** : Any child component will be centered
 - **```column```** : All components will be disposed vertically
 - **```row```** : All components will be disposed vertically
 - **```mainStart```** : Align components at the start in the main axis
 - **```mainCenter```** : Align components at the center in the main axis
 - **```mainEnd```** : Align components at the end in the main axis
 - **```mainStretch```** : Stretch components in the main axis
 - **```crossStart```** : Align components at the start in the cross axis
 - **```crossCenter```** : Align components at the center in the cross axis
 - **```crossEnd```** : Align components at the end in the cross axis
 - **```crossStretch```** : Stretch components in the cross axis
 - **```relative```** : A shortcut for ```[position: 'relative'}```
 - **```absolute```** : A shortcut for ```[position: 'absolute'}```

## License
MIT Licensed
