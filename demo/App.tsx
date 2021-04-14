import React from 'react';
import { StyleSheet, View } from 'react-native';
import HsvColorPicker from '../src';

type AppProps = {}
type AppState = {
  hue: number,
  sat: number,
  val: number
}
export default class App extends React.Component<AppProps, AppState> {
  hsvColorPicker = React.createRef<HsvColorPicker>();
  constructor(props: AppProps) {
    super(props);
    this.state = {
      hue: 0,
      sat: 0,
      val: 1,
    };
    this.onSatValPickerChange = this.onSatValPickerChange.bind(this);
    this.onHuePickerChange = this.onHuePickerChange.bind(this);
  }

  onSatValPickerChange({saturation, value}: { saturation: number, value: number }) {
    this.setState({
      sat: saturation,
      val: value,
    });
  }

  onHuePickerChange({hue}:{ hue: number }) {
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
