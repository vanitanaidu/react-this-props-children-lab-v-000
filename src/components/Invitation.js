import React from 'react'


export default class Invitation extends React.Component {
  render() {
    return (
      <div className="Invitation">
        <h1>You've been invited!</h1>
        {this.props.children}

      </div>
    )
  }
}
