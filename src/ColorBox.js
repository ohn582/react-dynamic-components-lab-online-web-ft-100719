import React, { Component } from 'react';
import from 'src/App.js'

export default class ColorBox extends Component {

  state = {
    todos: [
      
    ]
  }

  render() {
    return (
      <div className="color-box" style={opacity: null }}>
        if(this.props.opacity > 0.2){
         return 0.1
        }else{
          return null
        }
      </div>
    )
  }

}

