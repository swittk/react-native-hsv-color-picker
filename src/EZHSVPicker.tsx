import chroma from "chroma-js";
import React from "react";
import HsvColorPicker from "./HsvColorPicker";

const nullFn = () => { };
type EZHSVPickerProps = {
  onChangeHSV?: (arg: { h: number, s: number, v: number }) => void,
  initialColor?: string
};
type EZHSVPickerState = {
  h: number,
  s: number,
  v: number
}
export class EZHSVPicker extends React.PureComponent<EZHSVPickerProps, EZHSVPickerState> {
  hsvColorPicker = React.createRef<HsvColorPicker>();
  constructor(props: EZHSVPickerProps) {
    super(props);
    const { initialColor } = props;
    let h: number, s: number, v: number;
    if (initialColor) {
      [h, s, v] = chroma(initialColor).hsv();
      if(isNaN(h)) h = 0;
      if(isNaN(s)) s = 0;
      if(isNaN(v)) v = 0;
    }
    else {
      [h, s, v] = [0, 0, 0];
    }
    this.state = {
      h, s, v
    }
    this.onSatValPickerChange = this.onSatValPickerChange.bind(this);
    this.onHuePickerChange = this.onHuePickerChange.bind(this);
  }
  static defaultProps = {
    onChangeHSV: nullFn
  }
  onSatValPickerChange({ saturation, value }: { saturation: number, value: number }) {
    this.setState({
      s: saturation,
      v: value,
    });
    this.props.onChangeHSV!(this.state);
  }

  onHuePickerChange({ hue }: { hue: number }) {
    this.setState({
      h: hue,
    });
    this.props.onChangeHSV!(this.state);
  }
  render() {
    const { h, s, v } = this.state;
    return <HsvColorPicker
      ref={this.hsvColorPicker}
      huePickerHue={h}
      satValPickerHue={h}
      satValPickerSaturation={s}
      satValPickerValue={v}
      onHuePickerDragMove={this.onHuePickerChange}
      onHuePickerPress={this.onHuePickerChange}
      onSatValPickerDragMove={this.onSatValPickerChange}
      onSatValPickerPress={this.onSatValPickerChange}
    />;
  }
}