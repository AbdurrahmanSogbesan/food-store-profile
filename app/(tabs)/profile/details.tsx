import {
  Alert,
  Image,
  ImageSourcePropType,
  Pressable,
  ScrollView,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useCallback, useMemo, useRef, useState } from "react";
import { Icon, Text } from "react-native-paper";
import icons from "@/constants/icons";
import TextField from "@/components/TextField";
import Button from "@/components/Button";
import BottomSheet, { BottomSheetBackdrop } from "@gorhom/bottom-sheet";

const profileImage = require("@/assets/images/profile-image.png");

const Avatar = ({
  size,
  source,
}: {
  source: ImageSourcePropType;
  size?: number;
}) => {
  return (
    <Image
      source={source}
      style={{
        width: size || "100%",
        height: size || "100%",
        aspectRatio: 1,
      }}
      resizeMode="contain"
    />
  );
};

export default function Details() {
  const lastNameRef = useRef<TextInput>(null);
  const emailRef = useRef<TextInput>(null);
  const phoneRef = useRef<TextInput>(null);

  const bottomSheetRef = useRef<BottomSheet>(null);
  const bottomSheetRef2 = useRef<BottomSheet>(null);

  const snapPoints = useMemo(() => ["20%"], []);
  const snapPoints2 = useMemo(() => ["30%", "40%"], []);

  const editPhotoOptions = [
    {
      icon: icons.photo,
      text: "Take Photo",
      onPress: () => console.log("Take Photo"),
    },
    {
      icon: icons.upload,
      text: "Upload",
      onPress: () => console.log("Upload"),
    },
    {
      icon: icons.avatar,
      text: "Choose Avatar",
      onPress: () => {
        bottomSheetRef.current?.close();
        setTimeout(() => {
          bottomSheetRef2.current?.expand();
        }, 400);
      },
    },
  ];

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (key: string, value: string) => {
    setFormData({ ...formData, [key]: value });
  };

  const handleSubmit = () => {
    if (
      !formData.firstName ||
      !formData.lastName ||
      !formData.email ||
      !formData.phone
    ) {
      return Alert.alert("Error", "Please fill in all the fields");
    }
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  };

  const renderBackdrop = useCallback(
    (props: any) => (
      <BottomSheetBackdrop
        appearsOnIndex={0}
        disappearsOnIndex={-1}
        {...props}
      />
    ),
    []
  );

  return (
    <ScrollView
      style={{ backgroundColor: "#fff" }}
      contentContainerStyle={styles.container}
    >
      <Pressable
        style={{ marginBottom: 25 }}
        onPress={() => bottomSheetRef.current?.expand()}
      >
        <Avatar source={profileImage} size={100} />
        <View style={styles.cameraIconContainer}>
          <Icon source={icons.camera} size={14} />
        </View>
      </Pressable>

      <View style={{ flex: 1, justifyContent: "space-between", width: "100%" }}>
        <View style={{ gap: 20 }}>
          <TextField
            value={formData.firstName}
            onChangeText={(text) => handleChange("firstName", text)}
            label="First Name"
            onSubmitEditing={() => lastNameRef.current?.focus()}
          />
          <TextField
            ref={lastNameRef}
            value={formData.lastName}
            onChangeText={(text) => handleChange("lastName", text)}
            label="Last Name"
            onSubmitEditing={() => phoneRef.current?.focus()}
          />
          <TextField
            ref={phoneRef}
            value={formData.phone}
            onChangeText={(text) => handleChange("phone", text)}
            label="Phone Number"
            keyboardType="number-pad"
            onSubmitEditing={() => emailRef.current?.focus()}
          />
          <TextField
            ref={emailRef}
            value={formData.email}
            onChangeText={(text) => handleChange("email", text)}
            label="Email"
            keyboardType="email-address"
            onSubmitEditing={handleSubmit}
          />
        </View>

        <Button
          text="Update"
          onPress={handleSubmit}
          isLoading={isLoading}
          styles={{ marginTop: 14 }}
        />
      </View>

      <BottomSheet
        ref={bottomSheetRef}
        snapPoints={snapPoints}
        index={-1}
        enablePanDownToClose
        backdropComponent={renderBackdrop}
        handleIndicatorStyle={styles.handleIndicatorStyle}
      >
        <View style={styles.editPhotoOptionsContainer}>
          {editPhotoOptions.map(({ icon, onPress, text }, index) => (
            <View style={{ alignItems: "center", gap: 3 }} key={index}>
              <TouchableOpacity onPress={onPress} activeOpacity={0.7}>
                <Icon source={icon} size={28} />
              </TouchableOpacity>
              <Text style={{ fontSize: 10, color: "#626262" }}>{text}</Text>
            </View>
          ))}
        </View>
      </BottomSheet>

      <BottomSheet
        ref={bottomSheetRef2}
        snapPoints={snapPoints2}
        index={-1}
        enablePanDownToClose
        backdropComponent={renderBackdrop}
        handleIndicatorStyle={styles.handleIndicatorStyle}
      >
        <View style={styles.avatarOptionsContainer}>
          <Text style={{ fontSize: 15, marginBottom: 18 }}>
            Choose your prefered Avatar
          </Text>
          <View style={styles.avatarOptions}>
            {Array.from({ length: 8 }).map((_, index) => (
              <TouchableOpacity
                key={index}
                onPress={() => console.log("Pressed")}
                style={{ width: "24%", maxWidth: 60.49 }}
                activeOpacity={0.7}
              >
                <Avatar source={profileImage} size={60.49} />
              </TouchableOpacity>
            ))}
          </View>
        </View>
      </BottomSheet>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 33,
    paddingHorizontal: 20,
    paddingBottom: 47,
    alignItems: "center",
    flexGrow: 1,
  },
  cameraIconContainer: {
    position: "absolute",
    bottom: 6,
    right: 6,
    width: 22,
    height: 22,
    backgroundColor: "#fff",
    borderRadius: 11,
    alignItems: "center",
    justifyContent: "center",
  },
  handleIndicatorStyle: {
    backgroundColor: "#D9D9D9",
    minWidth: 80,
    height: 3,
  },
  editPhotoOptionsContainer: {
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    paddingHorizontal: 50,
  },
  avatarOptionsContainer: {
    flex: 1,
    paddingTop: 21,
    paddingHorizontal: 28,
    paddingBottom: 22,
  },
  avatarOptions: {
    flexWrap: "wrap",
    flexDirection: "row",
    rowGap: 19.2,
    columnGap: 31.68,
  },
});
