import React, { Component } from "react";
import { Button, Animated, View, Text, StyleSheet } from "react-native";
import LinearGradient from "react-native-linear-gradient";

const styles = StyleSheet.create({
  component: {
    flex: 1
  },
  header: {
    fontSize: 20,
    marginTop: 50,
    marginBottom: 20,
    alignSelf: "center"
  }
});

// the colors were' going to transition
const colors1 = ["#240080", "#DA21B7"];
const colors2 = ["#008024", "#21B7DA"];

// make an Animated Linear Gradient
const AnimatedLinearGradient = Animated.createAnimatedComponent(LinearGradient);

export class NaiveExample extends Component {
  constructor(props) {
    super(props);

    const tweener = new Animated.Value(0);
    this.state = {
      colors: colors1,
      tweener
    };
    this.startTransition = this.startTransition.bind(this);
  }

  startTransition() {
    const { tweener } = this.state;
    Animated.timing(tweener, {
      toValue: 1
    }).start();
  }

  render() {
    const { colors, tweener } = this.state;

    // We're just going to make some color interpolations and pass it to the
    // AnimatedLinearGradient.
    const color1Interp = tweener.interpolate({
      inputRange: [0, 1],
      outputRange: [colors1[0], colors2[0]]
    });

    const color2Interp = tweener.interpolate({
      inputRange: [0, 1],
      outputRange: [colors1[1], colors2[1]]
    });

    return (
      <View style={styles.component}>
        <Text style={styles.header}>Naive attempt at animation.</Text>
        <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
          <Button
            onPress={() => {
              this.startTransition();
            }}
            title="gradient 1"
          />
        </View>
        <AnimatedLinearGradient
          style={{ flex: 1 }}
          colors={[color1Interp, color2Interp]}
        />
      </View>
    );
  }
}
