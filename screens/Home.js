import { View, Text, SafeAreaView, StyleSheet } from "react-native";
import Header from "../components/Header";
import Searchbar from "../components/Searchbar";
import MenuButtons from "../components/MenuButtons";
import ContactMenu from "../components/ContactMenu";

function Home({ navigation }) {
  return (
    <View style={styles.container}>
      <SafeAreaView style={{ height: "100%" }}>
        <Header />
        <Searchbar />
        <MenuButtons navigation={navigation} />
        <ContactMenu />
      </SafeAreaView>
    </View>
  );
}

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1c1c1c",
    padding: 30,
  },
});
