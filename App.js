import React, { Component } from "react";
import { ColorExample } from "./src/ColorExample";
import { PositionExample } from "./src/PositionExample";
import { NaiveExample } from "./src/NaiveExample";
import { createBottomTabNavigator, createAppContainer } from "react-navigation";

const TabNavigator = createBottomTabNavigator({
  ColorExample,
  PositionExample,
  NaiveExample
});

const NavigationApp = createAppContainer(TabNavigator);

export default class App extends Component {
  render() {
    return <NavigationApp />;
  }
}
