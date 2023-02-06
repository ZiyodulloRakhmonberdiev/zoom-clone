import { useState, useEffect } from "react";
import {
  View,
  Text,
  Modal,
  TextInput,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { io } from "socket.io-client";
import { Camera } from "expo-camera";
import StartMeeting from "../components/StartMeeting";
import Chat from "../components/Chat";

const MeetingRoom = () => {
  const [userName, setUserName] = useState();
  const [roomId, setRoomId] = useState();
  const [activeUsers, setActiveUsers] = useState([]);
  const [startCamera, setStartCamera] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  let socket;

  console.log(userName);
  console.log(roomId);
  const menuItems = [
    {
      id: 1,
      name: "microphone",
      title: "Mute",
      customColor: "#efefef",
    },
    {
      id: 2,
      name: "video-camera",
      title: "Stop Video",
    },
    {
      id: 3,
      name: "upload",
      title: "Share Content",
    },
    {
      id: 4,
      name: "group",
      title: "Participants",
    },
  ];
  const __startCamera = async () => {
    const { status } = await Camera.requestCameraPermissionsAsync();
    if (status === "granted") {
      setStartCamera(true);
    } else {
      Alert.alert("Access denied");
    }
  };

  const joinRoom = () => {
    __startCamera();
    socket.emit("join-room", { userName: userName, roomId: roomId });
  };

  useEffect(() => {
    socket = io("http://3076-37-110-211-19.ngrok.io");
    socket.on("all-users", (users) => {
      users = users.filter((user) => user.userName != userName);
      setActiveUsers(users);
    });
  }, []);

  return (
    <View style={styles.container}>
      {startCamera ? (
        <SafeAreaView style={{ flex: 1 }}>
          <Modal
            animationType="slide"
            transparent={false}
            presentationStyle={"fullScreen"}
            visible={modalVisible}
            onRequestClose={() => {
              setModalVisible(!modalVisible);
            }}
          >
            <Chat
              modalVisible={modalVisible}
              setModalVisible={setModalVisible}
            ></Chat>
          </Modal>
          <View style={styles.activeUsersContainer}>
            <View style={styles.cameraContainer}>
              <Camera
                type="front"
                style={{
                  width: activeUsers.length <= 1 ? "100%" : 200,
                  height: activeUsers.length <= 1 ? 600 : 200,
                }}
              ></Camera>
              {activeUsers?.map((user, index) => (
                <View key={index} style={styles.activeUserContainer}>
                  <Text style={{ color: "#fff" }}>{user?.userName}</Text>
                </View>
              ))}
            </View>
          </View>
          <View style={styles.menu}>
            {menuItems?.map((item, index) => (
              <TouchableOpacity style={styles.button} key={index}>
                <FontAwesome name={item?.name} size={24} color={"#efefef"} />
                <Text style={styles.title}>{item?.title}</Text>
              </TouchableOpacity>
            ))}
            <TouchableOpacity
              style={styles.button}
              onPress={() => setModalVisible(true)}
            >
              <FontAwesome name={"comment"} size={24} color={"#efefef"} />
              <Text style={styles.title}>Chat</Text>
            </TouchableOpacity>
          </View>
        </SafeAreaView>
      ) : (
        <StartMeeting
          userName={userName}
          setUserName={setUserName}
          roomId={roomId}
          setRoomId={setRoomId}
          joinRoom={joinRoom}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#1c1c1c",
    flex: 1,
  },
  cameraContainer: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    flexWrap: "wrap",
    backgroundColor: "#000",
  },
  activeUsersContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "black",
  },
  activeUserContainer: {
    width: "100%",
    borderColor: "gray",
    borderWidth: 1,
    width: 200,
    height: 200,
    justifyContent: "center",
    alignItems: "center",
  },
  menu: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingTop: 40,
    paddingBottom: 40,
  },
  button: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    height: 50,
  },
  title: {
    color: "#fff",
    marginTop: 10,
    fontSize: 10,
  },
});

export default MeetingRoom;
