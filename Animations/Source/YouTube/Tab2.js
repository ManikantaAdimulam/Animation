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

const Tab2 = ({ movieData }) => (
  <View style={styles.container}>
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
