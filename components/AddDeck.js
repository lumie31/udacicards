import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
} from "react-native";
import { useDispatch } from "react-redux";
import { AddDeck } from "../redux/actions";
import { SubmitDeck } from "../utils/api";
import Styles from "../utils/styles";

const App = ({ navigation }) => {

  const dispatch = useDispatch();
  const [deck, setDeck] = useState("");

  const handleSubmit = () => {
    if (!deck) return
    const data = {
      [deck]: {
        title: deck,
        questions: [],
      },
    };
    setDeck("");

    dispatch(AddDeck(data));
    SubmitDeck(data);
    navigation.navigate("Deck", { deck: deck });
  };
  
  return (
    <KeyboardAvoidingView style={Styles.main}>
      <View style={Styles.VerticalAlignCenter}>
        <Text style={Styles.DeckHeader}>Enter Deck Title</Text>
        <TextInput
          style={{
            height: 50,
            borderWidth: 2,
            borderRadius: 10,
            marginTop: 20,
            paddingLeft: 6,
            paddingRight: 6
          }}
          name={deck}
          value={deck}
          onChangeText={(text) => setDeck(text)}
        />
      </View>
      <TouchableOpacity style={{ marginBottom: 50 }} onPress={handleSubmit}>
        <Text style={Styles.button}>Create Deck</Text>
      </TouchableOpacity>
    </KeyboardAvoidingView>
  );
};

export default App;
