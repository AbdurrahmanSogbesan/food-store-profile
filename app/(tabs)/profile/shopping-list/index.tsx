import {
  StyleSheet,
  View,
  FlatList,
  TouchableOpacity,
  Alert,
} from "react-native";
import React, { useCallback, useMemo, useRef, useState } from "react";
import { Text } from "react-native-paper";
import Button from "@/components/Button";
import {
  BottomSheetBackdrop,
  BottomSheetModal,
  BottomSheetTextInput,
} from "@gorhom/bottom-sheet";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import ShoppingCard from "@/components/ShoppingCard";

export const dummyData = [
  {
    id: 1,
    name: "Tade's shopping list",
    count: 15,
    frequency: "Weekly",
    amount: 13300,
  },
  {
    id: 2,
    name: "Grocery Essentials",
    count: 20,
    frequency: "Bi-Weekly",
    amount: 20000,
  },
  {
    id: 3,
    name: "Monthly Staples",
    count: 30,
    frequency: "Monthly",
    amount: 30000,
  },
];

export default function ShoppingList() {
  const bottomSheetRef = useRef<BottomSheetModal>(null);

  const { top } = useSafeAreaInsets();

  const createListSteps = ["Enter Name", "Select Frequency"] as const;
  const frequencyOptions = ["One Off", "Weekly", "Every 2 Weeks", "Monthly"];

  const [currentStep, setCurrentStep] = useState<
    (typeof createListSteps)[number]
  >(createListSteps[0]);

  const [createListData, setCreateListData] = useState({
    name: "",
    frequency: "",
  });

  const isLastStep =
    currentStep === createListSteps[createListSteps.length - 1];

  const handleChange = (key: string, value: string) => {
    setCreateListData((prev) => ({ ...prev, [key]: value }));
  };

  const handleCreateList = () => {
    bottomSheetRef.current?.close();
    setCurrentStep(createListSteps[0]);
    setCreateListData({ name: "", frequency: "" });
    Alert.alert("List Created Successfully");
  };

  const snapPoints = useMemo(() => ["53%"], []);

  const renderBackdrop = useCallback(
    (props: any) => (
      <BottomSheetBackdrop
        appearsOnIndex={0}
        disappearsOnIndex={-1}
        enableTouchThrough={false}
        {...props}
      />
    ),
    []
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={dummyData}
        renderItem={({ item }) => <ShoppingCard item={item} />}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={{ gap: 11, flexGrow: 1 }}
      />

      <Button
        text="Create New List"
        onPress={() => bottomSheetRef.current?.present()}
        styles={{ marginTop: 14 }}
      />

      <BottomSheetModal
        ref={bottomSheetRef}
        // onChange={(id) => {
        //   if (id === 0) {
        //     setCurrentStep(createListSteps[0]);
        //     setCreateListData({ name: "", frequency: "" });
        //   }
        // }}
        snapPoints={snapPoints}
        index={0}
        enablePanDownToClose
        backdropComponent={renderBackdrop}
        handleIndicatorStyle={styles.handleIndicatorStyle}
        topInset={top}
        android_keyboardInputMode="adjustResize"
      >
        <View style={styles.bottomSheetContainer}>
          {currentStep === "Enter Name" && (
            <View style={{ flex: 1 }}>
              <Text style={styles.createListTitle}>
                What is the name of this list?
              </Text>
              <View style={{ flex: 1, alignItems: "center", marginTop: 20 }}>
                <BottomSheetTextInput
                  style={styles.bottomSheetInput}
                  placeholderTextColor="#121212"
                  placeholder="Enter Delivery Instructions"
                  value={createListData.name}
                  onChangeText={(text) => handleChange("name", text)}
                />
              </View>
            </View>
          )}

          {currentStep === "Select Frequency" && (
            <View style={{ flex: 1 }}>
              <Text style={[styles.createListTitle, { marginBottom: 19 }]}>
                How often would you like your list to be delivered?
              </Text>
              <View style={{ gap: 12, marginBottom: 20 }}>
                {frequencyOptions.map((option, index) => (
                  <TouchableOpacity
                    key={index}
                    style={[
                      styles.frequencyOption,
                      {
                        backgroundColor:
                          createListData.frequency === option
                            ? "#E0FDD4"
                            : "#fff",
                      },
                    ]}
                    activeOpacity={0.7}
                    onPress={() => handleChange("frequency", option)}
                  >
                    <Text style={styles.frequencyOptionText}>{option}</Text>
                  </TouchableOpacity>
                ))}
              </View>
            </View>
          )}

          <View style={styles.bottomSheetButtons}>
            <Button
              text="Back"
              styles={{ flex: 1 }}
              small
              onPress={() => {
                setCurrentStep((prev) => {
                  const index = createListSteps.indexOf(prev);
                  if (index === 0) return prev;
                  return createListSteps[index - 1];
                });
              }}
            />
            <Button
              text={!isLastStep ? "Next" : "Create List"}
              styles={{
                flex: 1,
                backgroundColor: "#E0FDD4",
              }}
              onPress={() => {
                if (isLastStep) {
                  handleCreateList();
                } else {
                  setCurrentStep(
                    (prev) => createListSteps[createListSteps.indexOf(prev) + 1]
                  );
                }
              }}
              small
            />
          </View>
        </View>
      </BottomSheetModal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 22,
    paddingHorizontal: 20,
    paddingBottom: 17,
    backgroundColor: "#fff",
    flex: 1,
    justifyContent: "space-between",
  },
  handleIndicatorStyle: {
    backgroundColor: "#D9D9D9",
    minWidth: 80,
    height: 3,
  },
  bottomSheetContainer: {
    flex: 1,
    paddingTop: 29,
    paddingHorizontal: 20,
    paddingBottom: 34,
    justifyContent: "space-between",
  },
  createListTitle: {
    fontSize: 20,
    lineHeight: 30,
    marginBottom: 15,
  },
  bottomSheetInput: {
    alignSelf: "stretch",
    borderWidth: 1,
    borderColor: "#000",
    backgroundColor: "#fff",
    paddingVertical: 18.5,
    paddingHorizontal: 23,
    fontSize: 10,
    fontFamily: "Poppins_300Light",
    borderRadius: 17,
    color: "#000",
    height: 52,
  },
  frequencyOption: {
    borderWidth: 0.7,
    borderColor: "#6A6A6A",
    borderRadius: 5,
    paddingVertical: 5.5,
    paddingHorizontal: 21,
  },
  frequencyOptionText: {
    fontSize: 20,
    lineHeight: 30,
    fontFamily: "Poppins_300Light",
  },
  bottomSheetButtons: {
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 20,
  },
});
