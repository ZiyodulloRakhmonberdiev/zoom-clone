import { View, Text, StyleSheet } from "react-native";
import Entypo from "react-native-vector-icons/Entypo";

function Header() {
  return (
    <View style={styles.container}>
      <Entypo name="notification" size={30} color="#efefef" />
      <Text style={styles.heading}>Meet & chat</Text>
      <Entypo name="new-message" size={30} color="#efefef" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 20,
    paddingGorizontal: 10,
  },
  heading: {
    color: "#efefef",
    fontSize: 20,
    fontWeight: "700",
  },
});

export default Header;
