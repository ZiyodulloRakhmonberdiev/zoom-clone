import { useState } from "react";
import {
  View,
  Text,
  Modal,
  TextInput,
  Keyboard,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
} from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import ChatHeader from "./ChatHeader";

function Chat({ setModalVisible }) {
  const [messageText, setMessageText] = useState();

  return (
    <View style={styles.container}>
      <SafeAreaView style={{ height: "100%", flex: 1 }}>
        <KeyboardAvoidingView
          behavior={Platform.OS === "android" ? "padding" : "height"}
          style={{ flex: 1 }}
        >
          <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={{ flex: 1 }}>
              <ChatHeader setModalVisible={setModalVisible}></ChatHeader>
              <View style={styles.chatMessages}></View>
              <View style={styles.chatFormContainer}>
                <Text style={{ color: "#fff" }}>Sent to everyone</Text>
                <View style={styles.chatForm}>
                  <TextInput
                    value={messageText}
                    onChangeText={(text) => setMessageText(text)}
                    style={styles.textInput}
                    placeholder="Tap to here to chat"
                    placeholderTextColor={"#595859"}
                  />
                  <TouchableOpacity
                    style={{
                      ...styles.sendButton,
                      backgroundColor: messageText ? "#0b71eb" : "#373838",
                    }}
                  >
                    <FontAwesome name="send" size={18} color="#efefef" />
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#1c1c1c",
    flex: 1,
  },
  chatMessages: {
    flex: 1,
  },
  chatFormContainer: {
    borderColor: "#2f2f2f",
    borderWidth: 1,
    padding: 12,
  },
  chatForm: {
    flexDirection: "row",
  },
  textInput: {
    flex: 1,
    height: 40,
    color: "#efefef",
    borderColor: "#595859",
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    marginTop: 12,
  },
  sendButton: {
    height: 40,
    width: 40,
    marginTop: 12,
    marginLeft: 12,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
  },
});
export default Chat;
