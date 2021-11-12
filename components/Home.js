import React, {useEffect} from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { useSelector, useDispatch } from "react-redux";
import Styles from "../utils/styles";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { STORAGE_KEY } from "../utils/api";
import { AddDeck, GetDecks } from "../redux/actions";
import { StatusBar } from 'expo-status-bar';

const Home = ({ navigation }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    AsyncStorage.getItem(STORAGE_KEY).then((s) =>
      dispatch(GetDecks(JSON.parse(s)))
    );
  });

  const state = useSelector((s) => s);
  
  return (
    <ScrollView style={Styles.main}>
      <StatusBar style='auto' />
      {state &&
        Object.keys(state).map((s) => {
          const cards = state[s].questions.length;
          return (
            <TouchableOpacity
              key={s}
              style={Styles.decks}
              onPress={() => navigation.navigate("Deck", { deck: s })}
            >
              <Text style={Styles.deckTexts}>{s}</Text>
              <Text style={Styles.cards}>
                {cards === 1
                  ? cards + " Card"
                  : cards === 0
                  ? "No card"
                  : cards + " cards"}{" "}
              </Text>
            </TouchableOpacity>
          );
        })}
    </ScrollView>
  );
};

export default Home;
