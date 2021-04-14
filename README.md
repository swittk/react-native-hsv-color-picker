
# react-native-hsv-picker
> a react native HSV(hue, saturation, value) color picker

Originally authored by Yuan Fu [react-native-hsv-color-picker](https://github.com/yuanfux/react-native-hsv-color-picker)
Forked and converted to TypeScript : 04/2021

[![TypeScript](https://img.shields.io/badge/%3C%2F%3E-TypeScript-%230074c1.svg)](http://www.typescriptlang.org/)

<p align="center">
  <img width="300" src="https://user-images.githubusercontent.com/6414178/53297993-aef84480-3861-11e9-99ad-b957639414fa.gif">
</p>

## Preview
[View Live Demo](https://snack.expo.io/@switt/react-native-hsv-picker)
- Note : Due to some weirdness with prop-types, the web snack isn't working. It will work on your device though ;)

`react-native-hsv-picker` is a React Native component for selection of an [HSV](https://en.wikipedia.org/wiki/HSL_and_HSV) (hue, saturation, value) color value. 

Highlighted Features:
1. **Real Rendering** - no image involved / all colors are truly rendered
2. **Performance** - empowered by native gradient lib
4. **Fully Controlled** - no inner state involved
3. **Fully Supported** - support both React Native & Expo projects

## Install
```bash
$ npm install react-native-hsv-picker
```

### Use with Expo Project
> You are all set.

### Use with React Native Project
> `react-native-hsv-picker` is powered by [`expo-linear-gradient`](https://github.com/react-native-community/react-native-linear-gradient). If you're not using a Managed Expo project, you have to follow [these instructions](https://github.com/expo/expo/tree/master/packages/expo-linear-gradient#installation-in-bare-react-native-projects) to properly install it.

## Usage
> a minimally-configured HSV color picker
```tsx
import React from 'react';
import { StyleSheet, View } from 'react-native';
import HsvColorPicker from 'react-native-hsv-picker';

type ExampleProps = {}; 
type ExampleState = {hue: number, sat: number, val: number };
export default class Example extends React.Component<ExampleProps, ExampleState> {
  constructor(props: ExampleProps) {
    super(props);
    this.state = {
      hue: 0,
      sat: 0,
      val: 1,
    };
    this.onSatValPickerChange = this.onSatValPickerChange.bind(this);
    this.onHuePickerChange = this.onHuePickerChange.bind(this);
  }

  onSatValPickerChange({ saturation, value }: { saturation: number, value: number }) {
    this.setState({
      sat: saturation,
      val: value,
    });
  }

  onHuePickerChange({ hue }: { hue: number }) {
    this.setState({
      hue,
    });
  }

  render() {
    const { hue, sat, val } = this.state;
    return (
      <View style={styles.container}>
        <HsvColorPicker
          huePickerHue={hue}
          onHuePickerDragMove={this.onHuePickerChange}
          onHuePickerPress={this.onHuePickerChange}
          satValPickerHue={hue}
          satValPickerSaturation={sat}
          satValPickerValue={val}
          onSatValPickerDragMove={this.onSatValPickerChange}
          onSatValPickerPress={this.onSatValPickerChange}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
```


## Props
#### Basic Props
| Prop | Type | Default | Description |
|--|--|--| -- |
| `containerStyle` | StyleProp<ViewStyle>  | `{}` |  style for the outmost container  |
| `huePickerContainerStyle` | StyleProp<ViewStyle>  | `{}` |  style for the hue picker container  |
| `huePickerBorderRadius` | number  | `0` | border radius for the hue picker  |
| `huePickerHue` | number  | `0` | hue value(`h` in `hsv`, ranged in `[0, 360]`) for the hue picker |
| `huePickerBarWidth` | number  | `12` | bar width for the hue picker  |
| `huePickerBarHeight` | number  | `200` | bar height for the hue picker  |
| `huePickerSliderSize` | number  | `24` | slider diameter for the hue picker |
| `satValPickerContainerStyle` | StyleProp<ViewStyle>  | `{}` | style for the saturation & value picker container   |
| `satValPickerBorderRadius` | number  | `0` | border radius for the saturation & value picker  |
| `satValPickerSize` | number  | `200` | width / height for the saturation & value picker  |
| `satValPickerSliderSize` | number  | `24` | slider diameter for the saturation & value picker  |
| `satValPickerHue` | number  | `0` | hue value(`h` in `hsv`, ranged in `[0, 360]`) for the saturation & value picker |
| `satValPickerSaturation` | number  | `1` | saturation value(`s` in `hsv`, ranged in `[0, 1]`) for the saturation & value picker |
| `satValPickerValue` | number  | `1` | value(`v` in `hsv`, ranged in `[0, 1]`) for the saturation & value picker |

#### Callback Props
| Prop | Callback Params | Description |
|--|--| -- |
| `onHuePickerDragStart` | {<br>&nbsp;&nbsp;&nbsp;&nbsp;hue: number,<br>&nbsp;&nbsp;&nbsp;&nbsp;gestureState:&nbsp;[gestureState](https://facebook.github.io/react-native/docs/panresponder)<br>} | called when hue picker starts to drag |
| `onHuePickerDragMove` | {<br>&nbsp;&nbsp;&nbsp;&nbsp;hue: number,<br>&nbsp;&nbsp;&nbsp;&nbsp;gestureState:&nbsp;[gestureState](https://facebook.github.io/react-native/docs/panresponder)<br>} | called when hue picker is dragging |
| `onHuePickerDragEnd` | {<br>&nbsp;&nbsp;&nbsp;&nbsp;hue: number,<br>&nbsp;&nbsp;&nbsp;&nbsp;gestureState:&nbsp;[gestureState](https://facebook.github.io/react-native/docs/panresponder)<br>} | called when hue picker stops dragging |
| `onHuePickerDragTerminate` | {<br>&nbsp;&nbsp;&nbsp;&nbsp;hue: number,<br>&nbsp;&nbsp;&nbsp;&nbsp;gestureState:&nbsp;[gestureState](https://facebook.github.io/react-native/docs/panresponder)<br>} | called when another component has become the responder |
| `onHuePickerPress` | {<br>&nbsp;&nbsp;&nbsp;&nbsp;hue: number,<br>&nbsp;&nbsp;&nbsp;&nbsp;nativeEvent:&nbsp;[nativeEvent](https://facebook.github.io/react-native/docs/panresponder)<br>} | called when hue picker is pressed |
| `onSatValPickerDragStart` | {<br>&nbsp;&nbsp;&nbsp;&nbsp;saturation: number,<br>&nbsp;&nbsp;&nbsp;&nbsp;value: number,<br>&nbsp;&nbsp;&nbsp;&nbsp;gestureState:&nbsp;[gestureState](https://facebook.github.io/react-native/docs/panresponder)<br>} | called when saturation & value picker starts to drag |
| `onSatValPickerDragMove` | {<br>&nbsp;&nbsp;&nbsp;&nbsp;saturation: number,<br>&nbsp;&nbsp;&nbsp;&nbsp;value: number,<br>&nbsp;&nbsp;&nbsp;&nbsp;gestureState:&nbsp;[gestureState](https://facebook.github.io/react-native/docs/panresponder)<br>} | called when saturation & value picker is dragging |
| `onSatValPickerDragEnd` | {<br>&nbsp;&nbsp;&nbsp;&nbsp;saturation: number,<br>&nbsp;&nbsp;&nbsp;&nbsp;value: number,<br>&nbsp;&nbsp;&nbsp;&nbsp;gestureState:&nbsp;[gestureState](https://facebook.github.io/react-native/docs/panresponder)<br>} | called when saturation & value picker stops dragging |
| `onSatValPickerDragTerminate` | {<br>&nbsp;&nbsp;&nbsp;&nbsp;saturation: number,<br>&nbsp;&nbsp;&nbsp;&nbsp;value: number,<br>&nbsp;&nbsp;&nbsp;&nbsp;gestureState:&nbsp;[gestureState](https://facebook.github.io/react-native/docs/panresponder)<br>} | called when another component has become the responder |
| `onSatValPickerPress` | {<br>&nbsp;&nbsp;&nbsp;&nbsp;saturation: number,<br>&nbsp;&nbsp;&nbsp;&nbsp;value: number,<br>&nbsp;&nbsp;&nbsp;&nbsp;nativeEvent:&nbsp;[nativeEvent](https://facebook.github.io/react-native/docs/panresponder)<br>} | called when saturation & value picker is pressed |

## Methods
#### Instance Methods
> Use [`ref`](https://facebook.github.io/react/docs/refs-and-the-dom.html) to call instance methods

| Method | Params | Return Type| Description |
|--|:--:|:--:| -- |
| `getCurrentColor` | - | `string` | get current picked color in hex format |



## Dev
> The `demo` folder contains a standalone Expo project, which can be used for dev purposes.

> react-native - 0.63 <br />
> react - 16.13

## License
MIT


---
## Tip Jar

<img src="https://upload.wikimedia.org/wikipedia/commons/5/56/Stellar_Symbol.png" alt="Stellar" height="32"/>
```
Stellar Lumens (XLM) : 
GCVKPZQUDXWVNPIIMF3FXR6KWAOHTEWPZZM2AQE4J3TXR6ZDHXQHP5BQ
```

<img src="https://upload.wikimedia.org/wikipedia/commons/1/19/Coin-ada-big.svg" alt="Cardano" height="32">
```
Cardano (ADA) : 
addr1q9datt8urnyuc2059tquh59sva0pja7jqg4nfhnje7xcy6zpndeesglqkxhjvcgdu820flcecjzunwp6qen4yr92gm6smssug8
```
