import React, { Component } from 'react';
import {
  View,
  ViewPropTypes,
  StyleSheet,
  ViewStyle,
  StyleProp,
  PanResponderGestureState
} from 'react-native';
import PropTypes from 'prop-types';
import HuePicker, { HuePickerDragCallback, HuePickerPressCallback } from './HuePicker';
import SaturationValuePicker, { SaturationValuePickerDragCallback, SaturationValuePickerPressCallback } from './SaturationValuePicker';

type HsvColorPickerProps = {
  containerStyle: StyleProp<ViewStyle>,
  huePickerContainerStyle: StyleProp<ViewStyle>,
  huePickerBorderRadius: number,
  huePickerHue: number,
  huePickerBarWidth: number,
  huePickerBarHeight: number,
  huePickerSliderSize: number,
  onHuePickerDragStart: HuePickerDragCallback | null,
  onHuePickerDragMove: HuePickerDragCallback | null,
  onHuePickerDragEnd: HuePickerDragCallback | null,
  onHuePickerDragTerminate: HuePickerDragCallback | null,
  onHuePickerPress: HuePickerPressCallback | null,
  satValPickerContainerStyle: StyleProp<ViewStyle>,
  satValPickerBorderRadius: number,
  satValPickerSize: number,
  satValPickerSliderSize: number,
  satValPickerHue: number,
  satValPickerSaturation: number,
  satValPickerValue: number,
  onSatValPickerDragStart: SaturationValuePickerDragCallback | null,
  onSatValPickerDragMove: SaturationValuePickerDragCallback | null,
  onSatValPickerDragEnd: SaturationValuePickerDragCallback | null,
  onSatValPickerDragTerminate: SaturationValuePickerDragCallback | null,
  onSatValPickerPress: SaturationValuePickerPressCallback | null,
};
export default class HsvColorPicker extends Component<HsvColorPickerProps> {
  satValPicker = React.createRef<SaturationValuePicker>();
  static propTypes = {
    containerStyle: ViewPropTypes.style,
    huePickerContainerStyle: ViewPropTypes.style,
    huePickerBorderRadius: PropTypes.number,
    huePickerHue: PropTypes.number,
    huePickerBarWidth: PropTypes.number,
    huePickerBarHeight: PropTypes.number,
    huePickerSliderSize: PropTypes.number,
    onHuePickerDragStart: PropTypes.func,
    onHuePickerDragMove: PropTypes.func,
    onHuePickerDragEnd: PropTypes.func,
    onHuePickerDragTerminate: PropTypes.func,
    onHuePickerPress: PropTypes.func,
    satValPickerContainerStyle: ViewPropTypes.style,
    satValPickerBorderRadius: PropTypes.number,
    satValPickerSize: PropTypes.number,
    satValPickerSliderSize: PropTypes.number,
    satValPickerHue: PropTypes.number,
    satValPickerSaturation: PropTypes.number,
    satValPickerValue: PropTypes.number,
    onSatValPickerDragStart: PropTypes.func,
    onSatValPickerDragMove: PropTypes.func,
    onSatValPickerDragEnd: PropTypes.func,
    onSatValPickerDragTerminate: PropTypes.func,
    onSatValPickerPress: PropTypes.func,
  };

  static defaultProps = {
    containerStyle: {},
    huePickerContainerStyle: {},
    huePickerBorderRadius: 0,
    huePickerHue: 0,
    huePickerBarWidth: 12,
    huePickerBarHeight: 200,
    huePickerSliderSize: 24,
    onHuePickerDragStart: null,
    onHuePickerDragMove: null,
    onHuePickerDragEnd: null,
    onHuePickerDragTerminate: null,
    onHuePickerPress: null,
    satValPickerContainerStyle: {},
    satValPickerBorderRadius: 0,
    satValPickerSize: 200,
    satValPickerSliderSize: 24,
    satValPickerHue: 0,
    satValPickerSaturation: 1,
    satValPickerValue: 1,
    onSatValPickerDragStart: null,
    onSatValPickerDragMove: null,
    onSatValPickerDragEnd: null,
    onSatValPickerDragTerminate: null,
    onSatValPickerPress: null,
  };

  constructor(props: HsvColorPickerProps) {
    super(props);
  }

  getCurrentColor() {
    return this.satValPicker.current?.getCurrentColor();
  }

  render() {
    const {
      containerStyle,
      huePickerContainerStyle,
      huePickerBorderRadius,
      huePickerHue,
      huePickerBarWidth,
      huePickerBarHeight,
      huePickerSliderSize,
      onHuePickerDragStart,
      onHuePickerDragMove,
      onHuePickerDragEnd,
      onHuePickerDragTerminate,
      onHuePickerPress,
      satValPickerContainerStyle,
      satValPickerBorderRadius,
      satValPickerSize,
      satValPickerSliderSize,
      satValPickerHue,
      satValPickerSaturation,
      satValPickerValue,
      onSatValPickerDragStart,
      onSatValPickerDragMove,
      onSatValPickerDragEnd,
      onSatValPickerDragTerminate,
      onSatValPickerPress,
    } = this.props;
    return (
      <View style={[styles.container, containerStyle]}>
        <SaturationValuePicker
          containerStyle={satValPickerContainerStyle}
          borderRadius={satValPickerBorderRadius}
          size={satValPickerSize}
          sliderSize={satValPickerSliderSize}
          hue={satValPickerHue}
          saturation={satValPickerSaturation}
          value={satValPickerValue}
          onDragStart={onSatValPickerDragStart}
          onDragMove={onSatValPickerDragMove}
          onDragEnd={onSatValPickerDragEnd}
          onDragTerminate={onSatValPickerDragTerminate}
          onPress={onSatValPickerPress}
          ref={this.satValPicker}
        />
        <HuePicker
          containerStyle={huePickerContainerStyle}
          borderRadius={huePickerBorderRadius}
          hue={huePickerHue}
          barWidth={huePickerBarWidth}
          barHeight={huePickerBarHeight}
          sliderSize={huePickerSliderSize}
          onDragStart={onHuePickerDragStart}
          onDragMove={onHuePickerDragMove}
          onDragEnd={onHuePickerDragEnd}
          onDragTerminate={onHuePickerDragTerminate}
          onPress={onHuePickerPress}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
});