import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  Image,
  TouchableOpacity,
} from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import changePasswordImage from "../../assets/images/change-password-1.png";
import CustomButton from "../components/CustomButton";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

const ChangePasswordScreen = ({ navigation }) => {
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  return (
    <KeyboardAwareScrollView
      contentContainerStyle={styles.container}
      enableOnAndroid={true}
      extraScrollHeight={20}
      bounces={false}
    >
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("AccountScreen");
        }}
        style={{
          alignSelf: "flex-start",
        }}
      >
        <FontAwesome5
          name="angle-left"
          size={30}
          color="black"
          style={{ width: 30 }}
        />
      </TouchableOpacity>
      <View style={styles.imageContainer}>
        <Image
          source={changePasswordImage}
          alt="change-password-image"
          style={{ resizeMode: "contain" }}
        />
      </View>
      <Text style={{ fontWeight: "bold", fontSize: 24 }}>Change Password</Text>
      <View style={styles.contentInputContainer}>
        <View>
          <Text style={{ fontWeight: 600, marginBottom: 5 }}>Old Password</Text>
          <TextInput
            placeholder="Old Password"
            placeholderTextColor="black"
            style={[styles.contentInput, { fontStyle: "italic" }]}
            onFocus={handleFocus}
            onBlur={handleBlur}
          />
        </View>
        <View>
          <Text style={{ fontWeight: 600, marginBottom: 5 }}>New Password</Text>
          <TextInput
            placeholder="New Password"
            placeholderTextColor="black"
            style={[styles.contentInput, { fontStyle: "italic" }]}
            onFocus={handleFocus}
            onBlur={handleBlur}
          />
        </View>
        <View>
          <Text style={{ fontWeight: 600, marginBottom: 5 }}>
            Confirm Password
          </Text>
          <TextInput
            placeholder="Confirm Password"
            placeholderTextColor="black"
            style={[styles.contentInput, { fontStyle: "italic" }]}
            onFocus={handleFocus}
            onBlur={handleBlur}
          />
        </View>
      </View>
      <CustomButton
        text={"Save Changes"}
        onPress={() =>
          Alert.alert(
            "Save Successful",
            "You have changed your password successfully!"
          )
        }
      ></CustomButton>
    </KeyboardAwareScrollView>
  );
};

export default ChangePasswordScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: "10%",
    paddingHorizontal: "5%",
    alignItems: "center",
  },
  imageContainer: {},
  contentInputContainer: {
    marginVertical: 10,
    width: "100%",
    justifyContent: "space-evenly",
  },
  contentInput: {
    borderWidth: 0.5,
    backgroundColor: "lightgray",
    borderRadius: 999,
    padding: 10,
    marginBottom: 10,
  },
});