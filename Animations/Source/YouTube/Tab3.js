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

const Tab3 = ({ data }) => {
  return (
    <View>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
};

const renderItem = ({ item, index }) => {
  <View>
    <Text>{item.title}</Text>
    <Image source={{ uri: item.imageUrl }} />
  </View>;
};
const mapStateToProps = state => ({
  ...state.FlowersReducer
});

const { height, width } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    flex: 1
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

export default connect(mapStateToProps)(Tab3);
