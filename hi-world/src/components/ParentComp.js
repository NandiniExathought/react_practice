import React, { Component } from 'react'
import MemoComponent from './MemoComponent'

class ParentComp extends Component {
    
    constructor(props) {
      super(props)
    
      this.state = {
         name : 'NANDINI'
      }
    }
    
    componentDidMount() {
        setInterval( () => {
        this.setState({
            name:'NANDINI'
        })
    } , 2000) 
    }

  render() {
    console.log('-------------ParentComp-------------------');
    return (
      <div>
        Parent Component
        <MemoComponent name = {this.state.name}/>
        
      </div>
    )
  }
}

export default ParentComp
