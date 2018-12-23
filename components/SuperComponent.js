import React, { Component } from 'react'

class SuperComponent extends Component {

  constructor(props) {
    super(props);

    this.someVariable = 'Just some variable'
  }

  alertName(title) {
    alert(title)
  }

  render() {
    return (
      <React.Fragment>
        <h1>I am SuperComponent</h1>
      </React.Fragment>
    )
  }
}

export default SuperComponent


