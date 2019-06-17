import React from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  VrButton
} from 'react-360';

export default class Hello360 extends React.Component {

  state = {
    count: 0,
  }

  _incrementCount = () => {
    this.setState({ count: this.state.count + 1 });
  }

  _decrementCount = () => {
    this.setState({ count: this.state.count - 1 });
  }


  // componentDidMount() {
  //   setInterval(this._incrementCount, 1000);
  // }

  render() {
    return (
      <View style={styles.panel}>
        <VrButton onClick={this._incrementCount} style={styles.greetingBox}>
          <Text style={styles.greeting}>
            {'+'}
          </Text>
        </VrButton>
        <View>
            
        </View>
        <Text style={styles.greeting}>
          {`Count: ${this.state.count}`}
        </Text>
        <View >

        </View>
        <VrButton onClick={this._decrementCount} style={styles.greetingBox}>
          <Text style={styles.greeting}>
            {'-'}
          </Text>
        </VrButton>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  panel: {
    width: 1000,
    height: 600,
    justifyContent: 'center',
    alignItems: 'center',
  },
  greeting: {
    fontSize: 48,
  },
  greetingBox: {
    padding: 20,
    backgroundColor: '#000000',
    borderColor: '#ffffff',
    borderWidth: 2
  },
});

AppRegistry.registerComponent('Hello360', () => Hello360);
