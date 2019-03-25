import { StyleSheet } from "react-native-web";

export const colors = {
  gray: "#D1D1D1",
  lightGray: "#E9EBEE",
  darkGray: "gray",
  orange: "#FF9900",
  red: "#E91E63",
  blue: "#2196F3"
};

export const globalStyles = StyleSheet.create({
  textInput: {
    paddingHorizontal: 10,
    height: 32,
    width: 320,
    fontSize: 16,
    backgroundColor: "white",
    borderRadius: 3
  },
  pickerInput: {
    paddingHorizontal: 10,
    height: 32,
    width: 320,
    backgroundColor: "white",
    borderRadius: 3
  },
  container: {
    backgroundColor: colors.gray,
    flex: 1,
    margin: 10
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    height: 48,
    backgroundColor: colors.gray,
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "white"
  },
  searchInput: {
    paddingHorizontal: 10,
    height: 32,
    width: 290,
    fontSize: 16,
    backgroundColor: "white",
    borderRadius: 3
  },
  cards: {
    flexDirection: "row",
    flexWrap: "wrap",
    padding: 5
  }
});
