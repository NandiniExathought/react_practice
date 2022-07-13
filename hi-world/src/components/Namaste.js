import React , {Component} from 'react'

class Namaste extends Component {

    render() {
        const{name,heroName} = this.props
        //const {state1 , state2} = this.state -> if we have state
        return <h1> Welcome {name} a.k.a {heroName} </h1>
    }
}
export default Namaste;