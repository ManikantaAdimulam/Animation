import React from "react";
import {
  Image,
  Text,
  FlatList,
  View,
  StyleSheet,
  Dimensions
} from "react-native";
import { connect } from "react-redux";

const Tab3 = ({ dataSource }) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={dataSource}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
};

const renderItem = ({ item, index }) => (
  <View style={styles.item}>
    <Image source={{ uri: item.imageUrl }} style={styles.image} />
    <Text style={styles.titleText}>{item.title}</Text>
  </View>
);
const mapStateToProps = state => ({
  ...state.FlowersReducer
});

const { height, width } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  item: {
    flexDirection: "row",
    margin: 4,
    padding: 4
  },
  image: {
    height: height / 5,
    width: height / 5,
    resizeMode: "cover",
    borderRadius: 2
  },
  titleText: {
    top: 6,
    marginBottom: 15,
    fontSize: 14,
    fontWeight: "600",
    width: width - 16 - height / 5
  }
});

export default connect(mapStateToProps)(Tab3);
