import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
} from "react-native";

export default function App() {
  const [people, setPeople] = useState([
    { name: "mario", key: "1" },
    { name: "yoshi", key: "2" },
    { name: "shaun", key: "3" },
    { name: "luigi", key: "4" },
    { name: "peach", key: "5" },
    { name: "toad", key: "6" },
    { name: "bowser", key: "7" },
  ]);

  const pressHandler = (id) => {
    console.warn(id);
    setPeople((prevPeople) => {
      return prevPeople.filter((person) => person.key != id);
    });
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={people}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => pressHandler(item.key)}>
            <Text style={styles.item}>{item.name}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "grey",
    paddingTop: 40,
    paddingHorizontal: 20,
    //alignItems: "center",
    //justifyContent: "center",
  },
  item: {
    color: "white",
    marginTop: 24,
    padding: 30,
    backgroundColor: "pink",
    fontSize: 24,
  },
});
