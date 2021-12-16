import React, { Component } from 'react'
import Header from './components/Header'
import Message from './components/Message'

export class App extends Component {
  // Learn how to save state/variables
  constructor(props) {
    super(props)
    this.state = {
      message: '',
    }
    this.handleMessage = this.handleMessage.bind(this)
  }

  // Functions go here
  handleMessage(text) {
    this.setState({
      message: text,
    })
  }

  render() {
    return (
      <div>
        <Header message={this.state.message} />
        <Message message={this.state.message} handleMessage={this.handleMessage} />
      </div>
    )
  }
}

export default App
