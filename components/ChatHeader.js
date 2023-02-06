import {
  View,
  Text,
  Modal,
  TextInput,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  Pressable,
} from "react-native";
import Entypo from "react-native-vector-icons/Entypo";

function ChatHeader({ setModalVisible }) {
  return (
    <View style={styles.container}>
      <Pressable onPress={() => setModalVisible(false)}>
        <Text style={styles.closeButton}>Close</Text>
      </Pressable>
      <Text style={styles.heading}>Chat</Text>
      <Entypo name="bell" size={25} color="#efefef" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 20,
    paddingHorizontal: 10,
  },
  heading: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
  },
  closeButton: {
    color: "#fff",
    fontSize: 20,
  },
});
export default ChatHeader;
