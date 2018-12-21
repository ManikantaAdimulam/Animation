import React, { Component } from "react";
import {
  View,
  StyleSheet,
  Dimensions,
  FlatList
} from "react-native";

export const PageView = props => {
  return (
    <FlatList
      data={props.children}
      horizontal
      pagingEnabled
      ref={props.pageViewRef}
      onScroll={props.onScrollToIndex}
      onMomentumScrollEnd={props.onScrollEndDrag}
      renderItem={renderItem}
      scrollEventThrottle={16}
      keyExtractor={(item, index) => index.toString()}
    />
  );
};

const renderItem = ({ item, index }) => {
  return (
    <View style={styles.container}>
      {item}
    </View>
  );
};

const { height, width } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width,
    // alignItems: "center",
    // justifyContent: "center"
  },
  item: {
    width
  }
});
