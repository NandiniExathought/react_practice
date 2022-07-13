import React, { Component } from 'react'
import LifecycleB from './LifeCycleB';
class LifeCycleA extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         name : 'Nandini'
      }
      this.changeState = this.changeState.bind(this);
      console.log('LifeCycleA constructor');
    }
    
    static getDerivedStateFromProps( props , state ) {

      console.log('LifeCycleA getDerivedStateFromProps');
      return null;

    }

    // componentDidMount() {
    //   console.log('LifeCycleA componentDidMount');
    // }

    shouldComponentUpdate() {
      console.log('LifeCycleA shouldComponentUpdate');
      return true;
    }

    getSnapshotBeforeUpdate(prevProps , prevState) {
        console.log('LifeCycleA getSnapshotBeforeUpdate');
        return null;
    }

    componentDidUpdate() {
      console.log('LifeCycleA componentDidUpdate');
    }
    changeState() {
      this.setState({
        name:'Codevolution'
      })
    }
  render() {
    console.log('LifecycleA render');

    return (<div>     
       <div>LifecycleA</div>
       <button onClick={this.changeState}>Change state</button>
       <LifecycleB/ >
      </div>
    )
  }
}

export default LifeCycleA
