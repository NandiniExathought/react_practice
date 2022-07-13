import React, { Component } from 'react'

class LifecycleB extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         name : 'Nandini'
      }
      console.log('LifecycleB constructor');
    }
    
    static getDerivedStateFromProps( props , state ) {

      console.log('LifecycleB getDerivedStateFromProps');
      return null;

    }
    // componentDidMount() {
    //   console.log('LifecycleB componentDidMount');
    // }

    shouldComponentUpdate() {
      console.log('LifeCycleB shouldComponentUpdate');
      return true;
    }

    getSnapshotBeforeUpdate(prevProps , prevState) {
        console.log('LifeCycleB getSnapshotBeforeUpdate');
        return null;
    }

    componentDidUpdate() {
      console.log('LifeCycleB componentDidUpdate');
    }

  render() {
    console.log('LifecycleB render');
    return (
      <div>Lifecycle B</div>
    )
  }

}
export default LifecycleB
