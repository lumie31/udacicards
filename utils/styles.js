import { StyleSheet } from "react-native";

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    margin: "auto",
    width: "100%",
    alignSelf: "center",
  },
  decks: {
    backgroundColor: "#abc",
    marginTop: 10,
    height: 80,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center'
  },
  deckTexts: {
    fontSize: 25,
    textAlign: "center",
    fontWeight: 'bold',
    marginTop: 10
  },

  cards: {
    fontSize: 15,
    textAlign: "center",
  },
  main: {
    flex: 1,
    width: "80%",
    alignSelf: "center",
  },
  DeckHeader: {
    fontSize: 20,
    textAlign: "center",
    fontWeight: 'bold'
  },
  VerticalAlignCenter: {
    flex: 1,
    justifyContent: "center",
  },
  header: {
    marginTop: 20,
    fontSize: 30,
    textAlign: "center",
  },
  deckOptions: {
    flex: 1,
    justifyContent: "center",
    alignSelf: "center",
  },
  button: {
    borderColor: "#61dafd",
    borderWidth: 2,
    width: 150,
    marginTop: 20,
    padding: 12,
    textAlign: "center",
    borderRadius: 10,
    color: "#3197fd",
    alignSelf: "center",
    fontSize: 20
  },
  delete: {
    color: "red",
    textAlign: "center",
    padding: 10,
  },
  subButton: {
    textAlign: "center",
    marginTop: 10,
    color: "#3197fd",
    fontSize: 20,
  },
  textInput: {
    height: 50,
    borderWidth: 2,
    borderRadius: 7,
    paddingLeft: 6,
    paddingRight: 6
  },
});

export default Styles;
