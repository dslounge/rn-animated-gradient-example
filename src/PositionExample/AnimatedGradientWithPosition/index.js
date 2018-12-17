import React, { Component } from "react";
import { StyleSheet, Animated } from "react-native";
import { GradientHelper } from "./gradient-helper";

const styles = StyleSheet.create({
  component: {
    flex: 1
  }
});

const AnimatedGradientHelper = Animated.createAnimatedComponent(GradientHelper);

export class AnimatedGradient extends Component {
  constructor(props) {
    super(props);

    const { colors, orientation } = props;
    this.state = {
      prevColors: colors,
      prevOrientation: orientation,
      colors,
      orientation,
      tweener: new Animated.Value(0)
    };
  }

  static getDerivedStateFromProps(props, state) {
    const { colors: prevColors, orientation: prevOrientation } = state;
    const { colors, orientation } = props;
    const tweener = new Animated.Value(0);
    return {
      prevColors,
      prevOrientation,
      colors,
      orientation,
      tweener
    };
  }

  componentDidUpdate() {
    const { tweener } = this.state;
    Animated.timing(tweener, {
      toValue: 1
    }).start();
  }

  render() {
    const {
      tweener,
      prevColors,
      prevOrientation,
      colors,
      orientation
    } = this.state;

    const { style } = this.props;

    const color1Interp = tweener.interpolate({
      inputRange: [0, 1],
      outputRange: [prevColors[0], colors[0]]
    });

    const color2Interp = tweener.interpolate({
      inputRange: [0, 1],
      outputRange: [prevColors[1], colors[1]]
    });

    // orientation interpolations
    const startXinterp = tweener.interpolate({
      inputRange: [0, 1],
      outputRange: [prevOrientation.start.x, orientation.start.x]
    });

    const startYinterp = tweener.interpolate({
      inputRange: [0, 1],
      outputRange: [prevOrientation.start.y, orientation.start.y]
    });

    const endXinterp = tweener.interpolate({
      inputRange: [0, 1],
      outputRange: [prevOrientation.end.x, orientation.end.x]
    });

    const endYinterp = tweener.interpolate({
      inputRange: [0, 1],
      outputRange: [prevOrientation.end.y, orientation.end.y]
    });

    return (
      <AnimatedGradientHelper
        style={style || styles.component}
        color1={color1Interp}
        color2={color2Interp}
        startX={startXinterp}
        startY={startYinterp}
        endX={endXinterp}
        endY={endYinterp}
      />
    );
  }
}
