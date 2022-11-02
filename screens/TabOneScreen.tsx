import React from "react";
import { Alert, Button } from "react-native";
import { StyleSheet, TextInput } from "react-native";
import { Text, View } from "../components/Themed";
import { RootTabScreenProps } from "../types";
import { CheckBox } from "react-native-elements";

export default function TabOneScreen({
  navigation,
}: RootTabScreenProps<"TabOne">) {
  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <Text style={styles.title}>Registre uma Corrida</Text>
        <View
          style={styles.separator}
          lightColor="#eee"
          darkColor="rgba(255,255,255,0.1)"
        />
        <View style={styles.label}>
          <Text>Nome: </Text>
          <TextInput style={styles.input}></TextInput>
        </View>
        <View
          style={styles.separator}
          lightColor="#eee"
          darkColor="rgba(255,255,255,0.1)"
        />
        <View style={styles.label}>
          <Text>TurnRound: </Text>
          <CheckBox checked={false}></CheckBox>
        </View>
        <View
          style={styles.separator}
          lightColor="#eee"
          darkColor="rgba(255,255,255,0.1)"
        />
        <Button
          title="Enviar"
          color="#841584"
          onPress={() => Alert.alert("Corrida Registrada!")}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FFFFFF",
  },
  label: {
    flexDirection: "row",
    backgroundColor: "#D3D3D3",
    color: "#FFFFFF",
  },
  box: {
    backgroundColor: "#D3D3D3",
    borderColor: "#000000",
    borderWidth: 2,
    borderRadius: 7,
    alignItems: "center",
    minHeight: 250,
    minWidth: 350,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#FFFFFF",
  },
  separator: {
    marginVertical: 15,
    height: 1,
    width: "80%",
  },
  input: {
    backgroundColor: "#FFFFFF",
    height: 25,
    minWidth: 200,
    textDecorationColor: "#000000",
    borderRadius: 5,
  },
});
