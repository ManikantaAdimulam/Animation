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
        <View width={"35%"} justifyContent={"space-between"}>
          <View flexDirection={"row"} justifyContent={"space-between"}>
            <Text>Date of Birth</Text>
            <Text>: </Text>
          </View>
          <View flexDirection={"row"} justifyContent={"space-between"}>
            <Text>Address</Text>
            <Text>: </Text>
          </View>
          <View flexDirection={"row"} justifyContent={"space-between"}>
            <Text>Gender</Text>
            <Text>: </Text>
          </View>
        </View>
        <View width={"68%"} justifyContent={"space-between"}>
          <Text>16/06/1994</Text>
          <Text>
            Flat no 29, Luxury PG, 3rd Right, Jubliee enclave, Near silparamam,
            Hyderabad
          </Text>
          <Text>Male</Text>
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
    shadowColor: "#00000070",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    zIndex: 3
    // elevation: 1
  },
  profileDataView: {
    height: "30%",
    width: "100%",
    justifyContent: "space-evenly",
    backgroundColor: "#fff",
    shadowColor: "#00000070",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    padding: 8,
    flexDirection: "row",
    zIndex: 2
  },
  historyView: {
    height: "39.2%",
    width: "100%",
    justifyContent: "space-evenly",
    backgroundColor: "#fff",
    shadowColor: "#00000070",
    shadowOffset: { width: 1, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    padding: 8,
    flexDirection: "row"
  },
  image: {
    resizeMode: "contain",
    height: 100,
    width: 100
  }
});
export default connect(mapStateTProps)(Tab4);
