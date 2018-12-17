import React, { Component } from "react";
import LinearGradient from "react-native-linear-gradient";

export class GradientHelper extends Component {
  render() {
    const {
      style,
      color1,
      color2,
      start = { x: 0, y: 0 },
      end = { x: 0, y: 1 }
    } = this.props;
    return (
      <LinearGradient
        colors={[color1, color2]}
        start={start}
        end={end}
        style={style}
      />
    );
  }
}
