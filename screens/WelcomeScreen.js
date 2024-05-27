import { StyleSheet, Text, View } from "react-native";
import axios from "axios";

import { AuthContext } from "../store/auth-context";
import { useContext, useEffect, useState } from "react";

function WelcomeScreen() {
  const [fetchedMessage, setFetchedMesssage] = useState("");

  const authCtx = useContext(AuthContext);
  const token = authCtx.token;

  useEffect(() => {
    axios
      .get(
        "https://rn-auth-37d40-default-rtdb.firebaseio.com/message.json?auth=" +
          token
      )
      .then((response) => {
        setFetchedMesssage(response.data);
      });
  }, [token]);

  return (
    <View style={styles.rootContainer}>
      <Text style={styles.title}>Welcome!</Text>
      <Text>You authenticated successfully!</Text>
      <Text>{fetchedMessage}</Text>
    </View>
  );
}

export default WelcomeScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 32,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 8,
  },
});
