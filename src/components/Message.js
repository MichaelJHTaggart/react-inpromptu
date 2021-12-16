import React, { Component } from 'react'

export class Message extends Component {
 //variables go here
 constructor(props) {
  super(props)
  this.state = {
   banana: "",
  }
  //binds go here
  this.handleClick = this.handleClick.bind(this)
 }

 //functions go here
 handleClick() {
  this.props.handleMessage(this.state.banana)
 }
 //html goes here
 render() {
  return (
   <div>
    <input type="text"
     onChange={(e) => { this.setState({ banana: e.target.value }) }}
    />
    <button onClick={this.handleClick}>Pointless button</button>
   </div>
  )
 }
}

export default Message
