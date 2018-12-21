import React from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  Image,
  Dimensions
} from "react-native";
import { connect } from "react-redux";

const Tab1 = ({ dataSource }) => (
  
  <View style={styles.container}>
    <FlatList
      data={dataSource}
      renderItem={renderItem}
      keyExtractor={(item, index) => index.toString()}
      paddingTop={8}
    />
  </View>
);

const mapStateToProps = state => ({
  ...state.HomeReducer
});

export default connect(mapStateToProps)(Tab1);
const renderItem = ({ item }) => {
  return (
    <View>
      <Image source={{ uri: item.imageUrl }} style={styles.image} />
      <Text style={styles.titleText}>{item.title}</Text>
    </View>
  );
};

const { height, width } = Dimensions.get("window");
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingLeft: 8
  },
  image: {
    height: height / 3,
    width: width * 0.95,
    resizeMode: "cover",
    borderRadius: 2
  },
  titleText: {
    top: 8,
    marginBottom: 15,
    fontSize: 14,
    fontWeight: "600"
  }
});
