import { View, Text, StyleSheet, Image } from "react-native";
import AntDesign from "react-native-vector-icons/AntDesign";

const contactMenuButtons = [
  {
    type: "starred",
    name: "Starred",
  },
  {
    type: "contact",
    name: "Ali",
    photo: require("../assets/icon.png"),
  },
  {
    type: "contact",
    name: "Umar",
    photo: require("../assets/icon.png"),
  },
  {
    type: "contact",
    name: "Usmon",
    photo: require("../assets/icon.png"),
  },
];

function ContactMenu() {
  return (
    <View style={styles.container}>
      {contactMenuButtons?.map((item, index) => (
        <View style={styles.row} key={index}>
          {item?.type == "starred" ? (
            <View style={styles.starIcon}>
              <AntDesign name={"star"} size={30} color={"#efefef"} />
            </View>
          ) : (
            <Image source={item?.photo} style={styles.image} />
          )}
          <Text style={styles.text}>{item?.name}</Text>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  row: {
    marginTop: 20,
    alignItems: "center",
    flexDirection: "row",
  },
  starIcon: {
    backgroundColor: "#333333",
    width: 55,
    height: 55,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
  },
  text: {
    color: "#fff",
    paddingLeft: 15,
    fontSize: 18,
  },
  image: {
    width: 55,
    height: 55,
    borderRadius: 20,
    objectFit: "cover",
  },
});
export default ContactMenu;
