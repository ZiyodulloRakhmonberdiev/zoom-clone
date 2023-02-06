import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

function StartMeeting({ userName, setUserName, roomId, setRoomId, joinRoom }) {
  return (
    <View style={styles.startMeetingContainer}>
      <View style={styles.info}>
        <TextInput
          style={styles.textInput}
          value={userName}
          onChangeText={(text) => {
            // console.log(text);
            setUserName(text);
          }}
          placeholder="Enter name"
          placeholderTextColor="#767476"
        />
      </View>
      <View style={styles.info}>
        <TextInput
          style={styles.textInput}
          value={roomId}
          onChangeText={(text) => {
            // console.log(text);
            setRoomId(text);
          }}
          placeholder="Enter room id"
          placeholderTextColor="#767476"
        />
      </View>
      <View style={{ alignItems: "center" }}>
        <TouchableOpacity onPress={() => joinRoom()} style={styles.startButton}>
          <Text style={{ color: "#fff", fontWeight: "bold" }}>
            Start meeting
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  startMeetingContainer: {},
  info: {
    width: "100%",
    backgroundColor: "#373538",
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: "#484648",
    padding: 12,
    justifyContent: "center",
  },
  textInput: {
    color: "#fff",
    fontSize: 18,
  },
  startButton: {
    width: 350,
    marginTop: 20,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#0470dc",
    height: 50,
    borderRadius: 15,
  },
});
export default StartMeeting;
