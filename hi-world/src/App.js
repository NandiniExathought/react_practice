import logo from './logo.svg';
import './App.css';
import React , {Component} from 'react'
import './appStyles.css'
import FRParentInput from './components/FRParentInput';
import PortalDemo from './components/PortalDemo';

class App extends Component{
 
  render() {
    return(
      <div>
        <PortalDemo/>
      </div>
    )
  }
  
}
export default App; 