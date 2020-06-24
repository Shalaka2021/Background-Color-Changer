import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Alert } from 'react-native';

export default class App extends React.Component {
  constructor()
  {
    super();
    this.state={
      randomColor: null
    }
  }
  getRandomColor=()=>
  {
    return(
      "rgb("
      +
      Math.floor(Math.random() * 256)
      +
      ","
      +
      Math.floor(Math.random() * 256)
      +
      ","
      +
      Math.floor(Math.random() * 256)
      +
      ")"
    )
  }
  onMyButtonPressed=()=>
  {
    this.setState({ randomColor: this.getRandomColor() });
  }
  render()
  {
  return (
    <View style={[styles.container, {backgroundColor: this.state.randomColor}]}>
    <TouchableOpacity
    onPress={this.onMyButtonPressed}
    >
      <Text style={styles.text}>Click me </Text>
      </TouchableOpacity>
    </View>
  );
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text:{
    color: "white",
    backgroundColor: "black",
    height: 50,
    width: 150,
    fontSize: 30,
    paddingHorizontal: 10,
    paddingLeft: 15,
    paddingVertical: 5,
    textAlign: "center",
    borderRadius: 10,
    borderColor: "#d8ebd9"
   
  }
});
