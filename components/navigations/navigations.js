import { TabNavigator, StackNavigator } from "react-navigation";
import Home from "../Home";
import { AddDeck } from "../../redux/actions";
import { FontAwesome5, Ionicons } from "@expo/vector-icons";

const Tabs = TabNavigator(
  {
    Home: {
      screen: Home,
      navigationOptions: {
        tabBarLabel: "Home",
        tabBarIcon: () => <FontAwesome5 name="home" size={24} color="#88c" />,
      },
    },
    AddDeck: {
      screen: AddDeck,
      navigationOptions: {
        tabBarLabel: "Add Deck",
        tabBarIcon: () => <Ionicons name="add" size={30} color={"black"} />,
      },
    },
  },
  {
    navigationOptions: {
      header: null,
    },
    tabBarOptions: {
      activeTintColor: Platform.OS === "ios" ? blue : "white",
      style: {
        height: 56,
        backgroundColor: Platform.OS === "ios" ? "white" : "blue",
        shadowColor: "rgba(10, 10, 10, 0.24)",
        shadowOffset: {
          width: 0,
          height: 3,
        },
        shadowRadius: 5,
        shadowOpacity: 1,
      },
    },
  }
);

const MainNavigator = StackNavigator({
  Home: {
    screen: Tabs,
  },
});
