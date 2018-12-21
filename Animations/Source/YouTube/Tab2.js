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

export default connect(mapStateToProps)(Tab2);
const renderItem = ({ item }) => {
  return (
    <View>
      <Image source={{ uri: item.large_cover_image }} style={styles.image} />
      <Text style={styles.titleText}>{item.title_english}</Text>
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
    borderRadius: 2,
  },
  titleText: {
    top: 8,
    marginBottom: 15,
    fontSize: 14,
    fontWeight: "600"
  }
});
