import React, { Component } from "react";
import { View, Button, Text, StyleSheet } from "react-native";
import { AnimatedGradient } from "./AnimatedGradientWithPosition";

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

const colors1 = ["#240080", "#DA21B7"];

const colors2 = ["#240080", "#DA21B7"];

const colors3 = ["blue", "red"];

const orientation1 = {
  start: { x: 0, y: 0 },
  end: { x: 1, y: 1 }
};

const orientation2 = {
  start: { x: 1, y: 0 },
  end: { x: 0, y: 1 }
};

const orientation3 = {
  start: { x: 0, y: 0 },
  end: { x: 1, y: 1 }
};

export class PositionExample extends Component {
  constructor(props) {
    super(props);
    this.state = {
      colors: colors1,
      orientation: orientation1
    };
  }

  render() {
    const { colors, orientation } = this.state;

    return (
      <View style={styles.component}>
        <Text style={styles.header}>Animating Gradients and positions</Text>
        <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
          <Button
            onPress={() => {
              this.setState({
                colors: colors1,
                orientation: orientation1
              });
            }}
            title="gradient 1"
          />
          <Button
            onPress={() => {
              this.setState({
                colors: colors2,
                orientation: orientation2
              });
            }}
            title="gradient 2"
          />
          <Button
            onPress={() => {
              this.setState({
                colors: colors3,
                orientation: orientation3
              });
            }}
            title="gradient 3"
          />
        </View>
        <AnimatedGradient
          style={{ flex: 1 }}
          colors={colors}
          orientation={orientation}
        />
      </View>
    );
  }
}
