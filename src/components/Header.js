import React, { Component } from 'react'

export class Header extends Component {
 constructor(props) {
  super(props)
  this.state = {
  }
 }


 render() {
  return (
   <div>
    <h1>{this.props.message}</h1>
    <h3>This will be a link</h3>
   </div>
  )
 }
}

export default Header