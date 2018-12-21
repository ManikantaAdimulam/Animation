import React from "react";
import { View, Text, StyleSheet, Dimensions, Image } from "react-native";
import { connect } from "react-redux";

const Tab4 = () => {
  return (
    <View flex={1}>
      <View style={styles.profileImageView}>
        <Image
          source={require("../../Images/profileIcon.png")}
          style={styles.image}
        />
        <Text>Adimulam Manikanta</Text>
      </View>
      <View style={styles.profileDataView}>
        <View flexDirection={"row"} width={"100%"}>
          <Text width={100} backgroundColor={"red"}>
            Date of Birth:{" "}
          </Text>
          <Text>16/06/1994</Text>
        </View>
        <View flexDirection={"row"} width={"100%"}>
          <Text width={100}>Address: </Text>
          <Text>
            Flat no 29, Luxury PG, 3rd Right, Jubliee enclave, Near silparamam,
            Hyderabad
          </Text>
        </View>
        <View flexDirection={"row"} width={"100%"}>
          <Text width={100}>Gender: </Text>
          <Text>Gender</Text>
        </View>
      </View>
      <View style={styles.historyView}>
        <Text>History</Text>
      </View>
    </View>
  );
};

const mapStateTProps = state => ({
  ...state
});

const styles = StyleSheet.create({
  profileImageView: {
    height: "30%",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2
    // elevation: 1
  },
  profileDataView: {
    height: "30%",
    width: "100%",
    justifyContent: "space-evenly"
  },
  historyView: {
    flex: 0.1
  },
  image: {
    resizeMode: "contain",
    height: 100,
    width: 100
  }
});
export default connect(mapStateTProps)(Tab4);
