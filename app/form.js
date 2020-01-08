import React, { PureComponent } from 'react'
import { View, Button, TextInput } from 'react-native'
import { socketConnect } from 'socket.io-react';

class Form extends PureComponent {
  constructor(props) {
    super(props)

    this.state = {
      loading: false,
      input: ''
    }

    this.handleInput = this.handleInput.bind(this);
  }

  handleInput(text) {
    this.setState({
      input: text
    });
  }

  render() {
    return (
      <View>
        <Button
          title="Logar com spotfy"
          onPress={() => {
            console.log(this.props.socket);
            
            this.props.socket.emit('login', this.state.input);
          }}
        />
      </View>
    )
  }
}

export default socketConnect(Form);