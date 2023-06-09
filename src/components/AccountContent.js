import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import React, { useEffect } from "react";
import { useIsFocused } from "@react-navigation/native";
import { FontAwesome5 } from "@expo/vector-icons";
import { firebase } from "../../firebase";
import DashboardScreen from "../screens/dashboard-screen";
import Logos from "../utilities/Logos";

const AccountContent = ({ navigation, route }) => {
  return (
    <>
      <TouchableOpacity
        onPress={() => route.params.onNavigate()}
        style={{
          marginBottom: "5%",
          alignSelf: "flex-start",
          flexDirection: "row",
        }}
      >
        <FontAwesome5 name="angle-left" size={20} color="black" />
        <Text style={{ marginLeft: 10, fontSize: 20, fontWeight: "bold" }}>
          Back
        </Text>
      </TouchableOpacity>
      <View style={styles.settingsContainer}>
        <TouchableOpacity
          style={styles.settingsChoicesContainer}
          onPress={() => navigation.navigate("ProfileNavigator")}
        >
          <View style={{ flexDirection: "row" }}>
            <FontAwesome5 name="user-alt" size={20} color="black" />
            <Text style={styles.settingsChoicesTitle}>My Account</Text>
          </View>
          <FontAwesome5 name="angle-right" size={20} color="black" />
        </TouchableOpacity>
        <View style={styles.line} />
        <TouchableOpacity
          style={styles.settingsChoicesContainer}
          onPress={() => navigation.navigate("ChangePasswordScreen")}
        >
          <View style={{ flexDirection: "row" }}>
            <FontAwesome5 name="unlock-alt" size={20} color="black" />
            <Text style={styles.settingsChoicesTitle}>Change Password</Text>
          </View>
          <FontAwesome5 name="angle-right" size={20} color="black" />
        </TouchableOpacity>
        <View style={styles.line} />
        <TouchableOpacity
          style={styles.settingsChoicesContainer}
          onPress={() => firebase.auth().signOut()}
        >
          <View style={{ flexDirection: "row" }}>
            <FontAwesome5 name="door-open" size={20} color="black" />
            <Text style={styles.settingsChoicesTitle}>Logout</Text>
          </View>
          <FontAwesome5 name="angle-right" size={20} color="black" />
        </TouchableOpacity>
        <View style={styles.line} />
      </View>
      <View style={styles.footer}>
        <Image
          source={Logos.SENZERS_LOGO_BLACK_MEDIUM}
          style={{ width: 50, height: 50 }}
        />
        <Text style={styles.footerText}>
          © 2023 Senzers. All Rights Reserved.
        </Text>
      </View>
    </>
  );
};

export default AccountContent;

const styles = StyleSheet.create({
  settingsContainer: {
    marginVertical: 10,
    flex: 1,
  },
  settingsChoicesContainer: {
    justifyContent: "space-between",
    flexDirection: "row",
    flexWrap: "wrap",
    paddingVertical: 10,
  },
  settingsChoicesTitle: {
    marginLeft: 10,
    fontSize: 18,
    fontWeight: 500,
  },
  line: {
    borderBottomColor: "lightgray",
    borderBottomWidth: 1,
    marginTop: 10,
    marginBottom: 10,
    width: "100%",
  },
  footer: {
    marginBottom: 10,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  },
  footerText: {
    marginTop: 5,
    fontSize: 16,
    fontWeight: 600,
  },
});
