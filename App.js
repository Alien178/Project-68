import React from "react";
import WhatsAppScreen from "./screens/WhatsAppScreen";
import SearchScreen from "./screens/SearchScreen";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { createAppContainer } from "react-navigation";

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}

const TabNavigator = createBottomTabNavigator({
  WhatsApp: { screen: WhatsAppScreen },
  Search: { screen: SearchScreen },
});

const AppContainer = createAppContainer(TabNavigator);
