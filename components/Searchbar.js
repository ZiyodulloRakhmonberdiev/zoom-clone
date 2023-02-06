import { View, Text, StyleSheet } from "react-native";
import Fontisto from "react-native-vector-icons/Fontisto";

function Searchbar() {
  return (
    <View style={styles.container}>
      <Fontisto name="search" size={20} color="#858585" />
      <Text style={styles.textSearchbar}>Search</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#333333",
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderRadius: 10,
  },
  textSearchbar: {
    color: "#858585",
    fontSize: 20,
    paddingLeft: 10,
  },
});

export default Searchbar;
