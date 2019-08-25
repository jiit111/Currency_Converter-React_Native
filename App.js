import React from 'react';
import { StyleSheet, Text, View ,SafeAreaView,TextInput,TouchableOpacity,Alert
,TouchableWithoutFeedback,Keyboard} from 'react-native';

const currencyConverter = {
    DOLLAR : 0.014,
    EURO : 0.07
}

export default class App extends React.Component {
  constructor(){
    super();
    this.state={
      inputValue: "",
      resultValue : "0.0"
    }
  }

  buttonPressed = (currency) => {
     
    if(this.state.inputValue === "")
    {
       Alert.alert("Enter Some value");
    }
    else{
    let result = parseFloat(this.state.inputValue) * currencyConverter[currency]
      this.setState({resultValue : result.toFixed(2)});
    }
  }

  render(){
  return (
    <TouchableWithoutFeedback onPress = {Keyboard.dismiss}>
    <SafeAreaView style={styles.container}>
      <View style={styles.subContainer}>
          <View style={styles.resultContainer}>
              <Text style={styles.resultValue}>{this.state.resultValue}</Text>
          </View>
          <View style={styles.inputContainer}>
            <TextInput 
            style={styles.inputValue}
            selectionColor="#FFF"
            keyboardType ="numeric"
            placeholder = "Enter Value"
            value = {this.state.inputValue}
            onChangeText={inputValue => this.setState({
                inputValue
            })}
            />        
        </View>
        <View style={styles.conveterButtonContainer}>
          <View style={styles.converterButton}>
              <TouchableOpacity 
              style={styles.tochableButton}
              onPress = {() => this.buttonPressed("DOLLAR")}
              >
                  <Text style={styles.convertText}>
                    $
                  </Text>
              </TouchableOpacity>
          </View>
        </View>

      </View>
    </SafeAreaView>
    </TouchableWithoutFeedback>
  );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
   subContainer: {
    flex: 1    
  },
   resultContainer: {
     height : 70,
    marginTop : 20,
    justifyContent: "center",
    borderColor : "#c1c1c1",
    backgroundColor : "#0A79DE",
    alignItems : "center"
  },
  resultValue : {
    fontSize : 30,
    fontWeight : "bold",
    color : "#FFF"
  },
  inputContainer : {
     height : 70,
    marginTop : 20,
    justifyContent: "center",
    borderColor : "#c1c1c1",
    backgroundColor : "#0A79DE",
    alignItems : "center"
  },
  inputValue:{
    fontSize : 30,
    fontWeight : "bold",
    color : "#FFF"
  },
  conveterButtonContainer:{
    flexDirection : "row",
    flexWrap : "wrap",
    marginTop : 20,
    borderColor : "#c1c1c1",
    borderWidth : 2
  },
  converterButton : {
    alignItems : "center",
    justifyContent : "center",
    backgroundColor : "#0A79DE",
    height : 100,
    borderColor : "#c1c1c1",
    borderWidth : 2
  },
  tochableButton:{
    width : 60
  },
  convertText : {
    fontSize : 30,
    fontWeight :"bold",
    color : "#FFF"
  }

});
