import React, { Component } from "react";
import { Button, View, Text, StyleSheet } from "react-native";
import { AnimatedGradient } from "./AnimatedGradient";

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

const colors2 = ["#008024", "#21B7DA"];

const colors3 = ["blue", "red"];

export class ColorExample extends Component {
  constructor(props) {
    super(props);
    this.state = {
      colors: colors1
    };
  }

  render() {
    const { colors } = this.state;
    return (
      <View style={styles.component}>
        <Text style={styles.header}>Animating Color Gradients</Text>
        <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
          <Button
            onPress={() => {
              this.setState({
                colors: colors1
              });
            }}
            title="gradient 1"
          />
          <Button
            onPress={() => {
              this.setState({
                colors: colors2
              });
            }}
            title="gradient 2"
          />
          <Button
            onPress={() => {
              this.setState({
                colors: colors3
              });
            }}
            title="gradient 3"
          />
        </View>
        <AnimatedGradient
          style={{ flex: 1 }}
          colors={colors}
          start={{ x: 0, y: 0 }}
          end={{ x: 0, y: 1 }}
        />
      </View>
    );
  }
}
