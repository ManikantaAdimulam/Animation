import React, { Component } from "react";
import { Text, View, StyleSheet } from "react-native";
import { Provider } from "react-redux";
import store from "./Source/Redux/Store";
import TabBar from "./Source/TabBar/TabBar";
import Tab1 from "./Source/YouTube/Tab1";
import Tab2 from "./Source/YouTube/Tab2";
import Tab3 from "./Source/YouTube/Tab3";
import Tab4 from "./Source/YouTube/Tab4";

/**
 * Demo
 *
 * @class App
 * @extends {Component}
 */
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <View style={styles.container}>
          <View style={styles.header}>
            <Text style={styles.headerText}>MyTub🤪</Text>
          </View>
          <TabBar
            tabs={[
              <Tab1 key={"1"} />,
              <Tab2 key={"2"} />,
              <Tab3 key={"3"} />,
              <Tab4 key={"4"} />
            ]}
            titles={["Home", "Hot", "Trending", "Account"]}
          />
        </View>
      </Provider>
    );
  }
}
///
export default App;
///
const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  header: {
    height: 64,
    width: "100%",
    backgroundColor: "red",
    justifyContent: "center",
    paddingLeft: 15,
    paddingTop: 20
  },
  headerText: {
    color: "white",
    fontSize: 22,
    fontWeight: "bold"
  }
});
