import React from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  Image,
  Dimensions,
  TouchableHighlight
} from "react-native";
import { connect } from "react-redux";
import { getData } from "../Redux/Actions";

const Tab2 = ({ movieData, dispatch }) => (
  <View style={styles.container}>
    <TouchableHighlight
      onPress={() => {
        dispatch(getData());
      }}
    >
      <Text>Get Movies</Text>
    </TouchableHighlight>

    <FlatList
      data={movieData}
      renderItem={renderItem}
      keyExtractor={(item, index) => index.toString()}
    />
  </View>
);

const mapStateToProps = state => ({
  ...state.reducer
});

const renderItem = ({ item }) => {
  return (
    <View
      style={{
        flexDirection: "row",
        borderBottomWidth: 0.5,
        borderBottomColor: "#00000050",
        padding: 8
      }}
    >
      <Image source={{ uri: item.large_cover_image }} style={styles.image} />
      <Text style={styles.titleText}>{item.title_english}</Text>
      <Text style={styles.titleText}>{item.title_english}</Text>
    </View>
  );
};

const { height, width } = Dimensions.get("window");
const styles = StyleSheet.create({
  container: {
    flex: 1
    // paddingLeft: 8
  },
  image: {
    height: height / 3,
    // width: width * 0.95,
    resizeMode: "stretch",
    borderRadius: 2,
    aspectRatio: 0.7 / 1,
    backgroundColor: "red"
  },
  titleText: {
    marginBottom: 15,
    fontSize: 14,
    fontWeight: "600",
    textAlign: "center"
  }
});

export default connect(mapStateToProps)(Tab2);
