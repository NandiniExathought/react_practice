//----------------------------------------------------------------------------
//                        video 1:  Introduction
//----------------------------------------------------------------------------

/*

1. what is react?

    Open source library for building user interfaces.
    Not a framework.
    Focus on UI.
    Rich ecosystem.

2. Why react?

    Component based architecture.
    Reusable code.
    React is declarative(we don't say how to do it)
        -Tell react what you want and React will build the actual UI.
        -React will efficiently updating and rendering of the components.
        -DOM updates are handles gracefully in React.

3. More on why react?

    Seamlessly integrate react into any of your applications.
    Portion of your page or a complete page or even an entire application itself.
    React native for mobile applications.

4. Pre-requisites

    HTML , CSS and JavaScript fundamentals.
    ES6
    Javascript - 'this' keyword , filter , map and reduce 
    ES6 - let and const , arrow functions , template literals , default parameters , object literals , rest and spread operators and destructuring assignment.
    React from scratch.

*/

//----------------------------------------------------------------------------
//                        video 2:  Hello World
//----------------------------------------------------------------------------

/*
Steps to build hello world app

1. open vsc , where react folder is present.
2.  Type 
    npx create-react-app hello-world.
    above command in vsc terminal.
    hello-world folder will be created after executing this command.
3. Then type : 
      cd hello-world
      npm start.
4. open the browser to see the output.

*/
//----------------------------------------------------------------------------
//                        video 3:  Folder Structure
//----------------------------------------------------------------------------


//----------------------------------------------------------------------------
//                         video 4: Components
//----------------------------------------------------------------------------

/*

what is Component?

    Components are independent and reusable bits of code. They serve the same purpose as JavaScript functions, but work in isolation and return HTML. 
    Components come in two types, Class components and Function components

Component Types

1. Stateless Functional Component.

javascript Functions

function Welcome(props) {
    return <h1>Hello , {props.name}</h1>
}


2. Stateful class component

Class extending Component class. Render method returning HTML.

class Welcome extends React.Component {
    render(){
        return <h1>Hello , {this.props.name}</h1>;
    }
}
*/

//----------------------------------------------------------------------------
//                       video 5:  Functional Components
//----------------------------------------------------------------------------

// Properties(props) ---------------> JavaScript Function -----------------> HTML(JSX)

// Javascript function accepts properties as inputs and returns HTML(renders HTML).

/*
Steps :
1. create a folder "component" in src folder , inside component create Greet.js , write following code.

In Greet.js

import React from 'react'
function Greet() {
    return <h1>Hello Nandini</h1>
}
export default Greet

Then in App.js write below code

import logo from './logo.svg';
import './App.css';
import Greet from './component/Greet';

function App() {
  return (
    <div className="App">
     <Greet/>
    </div>
  );
}
export default App;

o/p : Hello Nandini.

we can use arrow function in greet rather than a regular function. as follows

import React from 'react'

// function Greet() {
//     return <h1>Hello Nandini</h1>
// }

const Greet = () => <h1>Hello Nandini</h1>
export default Greet

*/


//----------------------------------------------------------------------------
//                       video 6:  Class Components
//----------------------------------------------------------------------------

// Properties(props) ---------------> JavaScript Function -----------------> HTML(JSX)
//                                        State

// Create Namaste.js in component folder

// ex. In Namaste.js
/*
import React , {Component} from 'react'

class Namaste extends Component {

    render() {
        return <h1> Welcome Visitors </h1>
    }
}
export default Namaste;

In App.js

// import Namaste from './components/Namaste';
In render() ->type =>  return <Namaste/>
*/

// difference between class components and functional components
/*
functional components

1.Simple functions
2. Use Func components as much as possible
3. Absence of this keyword.
4. Solution without using state.
5. Mainly responsible for the UI.
6. Stateless/dumb/Presentational Components.

class components

1. More features rich
2. Maintain their own private data -state.
3. Complex UI Logic.
4. Provide lifecycle hooks.
5. Stateful/Smart/Container Components.
    
*/

//----------------------------------------------------------------------------
//                       video 6: Hooks Update
//----------------------------------------------------------------------------

//We can use state in functional components.

//----------------------------------------------------------------------------
//                       video 7: Hooks
//----------------------------------------------------------------------------


//----------------------------------------------------------------------------
//                       video 8: JSX
//----------------------------------------------------------------------------

/*

1. Javascript XML(JSX) - Extension to the javascript language syntax.
2. Write XML-like code for elements and components.
3. JSX tags have a tag name , attributes , and childern.
4. JSX is not a necessity to write React applications.
5. JSX makes your react code simpler and elegant.
6. JSX ultimately transpiles to pure javascript which is understood by the browsers.

//using JSX 
In Hello.js

import React from 'react'
const Hello = () => {
    return (
        <div className='dummyClass'>
            <h1>Hello Nandini Gnanesh</h1>
        </div>
    )
}
export default Hello

-------------------------
In App.js

import logo from './logo.svg';
import './App.css';
import React , {Component} from 'react'
import Hello from './components/Hello';

class App extends Component{
  render() {
    return (
    <div className="App">
      <Hello />
    </div>
    );
  }
}
export default App;
//without using JSX

------------------------------
import React from 'react'

const Hello = () => {

    return React.createElement(
        'div',
        {id : 'hello' , className : 'dummyClass'} ,
        React.createElement('h1' , null , 'Hello Vishawas')
    )
}

export default Hello
//using JSX

*/

//----------------------------------------------------------------------------
//                       video 9: Props
//----------------------------------------------------------------------------

//Props are immutable , their values can't be changed.
/*
Greet.js : 

import React from 'react'

const Greet = (props) => {
    console.log(props);
    return <h1>Hello {props.name} a.k.a {props.heroName} </h1>
}
export default Greet


---------------------------------

App.js

import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet';
import React , {Component} from 'react'

class App extends Component{
  render() {
    return (
    <div className="App">
      <Greet name = "Bruice" heroName = "Batman"/>
      <Greet name = "lila" heroName = "Superman"/>
      <Greet name = "Diana" heroName = "Wonder woman"/>
    </div>
    );
  }
}
export default App;

-------------------------------------------------------

props in class based components.

Namaste.js

import React , {Component} from 'react'

class Namaste extends Component {

    render() {
        return <h1>Come Come Welcome {this.props.name} a.k.a {this.props.heroName}</h1>
    }
}
export default Namaste;

----------------------------------

App.js

import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet';
import React , {Component} from 'react';
import Namaste from './components/Namaste';

class App extends Component{
  render() {
    return (
    <div className="App">
      <Greet name = "Bruice" heroName = "Batman">
        <p>This is children props</p>
      </Greet>
      <Greet name = "lila" heroName = "Superman"/>
      <button>Action</button>
      <Greet name = "Diana" heroName = "Wonder woman"/>
   
    <Namaste name = "Nama" heroName = "NetMan"/>
    <Namaste name = "skara" heroName = "BoatMan"/>
    <Namaste name = "hii" heroName = "Man"/>
    </div>
    );
  }
}


export default App;

*/

//----------------------------------------------------------------------------
//                       video 10: State
//----------------------------------------------------------------------------


/*
props vs state

props

1. props get passed to the component.
2. Function parameters.
3. Props are immutable.
4. props - Functional Components
5. this.props - Class Components.


state

1. state is managed within the component.
2. variables declared in the function body.
3. state can be changed.
4. useState Hook - Functional Components 
5. this.state - Class Components.


State is ntg but an object privately maintained inside a component.
State can influence what is rendered in the browser.
State can be changed within the component.

Problem domain : show welcome msg to the user , if we click on susbcribe button msg should be changed.

For the above requirement we use state instead of props bcz props are immutable.

import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet';
import React , {Component} from 'react';
import Namaste from './components/Namaste';

class App extends Component{

  constructor(){
    super()
    this.state = {
      message : 'Welcome Visitor'

    }
  }
  changeMessage() {
    
    this.setState({
      message : 'Thank you for subscribing'
    })
  }

  render() {
    return(
      <div>
      <h1>{this.state.message}</h1>
      <button onClick={() => this.changeMessage() }>Subscribe</button>
      </div>
    )
  }
}
export default App;
*/

//----------------------------------------------------------------------------
//                       video 11: setState
//----------------------------------------------------------------------------

// press rce tab to open the template

// press rconst + tab => to get constructor

//never modify the state directly , instead use setState()

/*
import React, { Component } from 'react'

class Counter extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         count : 0  
      }
    }

increment () {
    // this.state.count = this.state.count + 1
    // console.log(this.state.count);//only increment in the console but not in the browser.
    this.setState({
        count : this.state.count + 1 
    })
    console.log(this.state.count);
}

  render() {
    return (
      <div>
        <div> Count - {this.state.count}</div>
        <button onClick={() => this.increment() }> Increment</button>
      </div>
    )
  }
}

export default Counter

*/

//If we wish to execute a statement after the state change , then pass a
//  callback function as arg to setState() as a 2nd parameter.
/*

increment () {
    this.setState(
      {
        count : this.state.count + 1 
      } ,
      () => {
        console.log('Callback value : ' , this.state.count);
      }
      )
    console.log(this.state.count);
}

//when we have to update the state on the previous state , make sure to pass a 
function as argument instead of the regular object.

import React, { Component } from 'react'

class Counter extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         count : 0  
      }
    }

incrementFive() {

  this.increment();
  this.increment();
  this.increment();
  this.increment();
  this.increment();
}

increment () {

    // this.setState(
    //   {
    //     count : this.state.count + 1 
    //   } ,
    //   () => {
    //     console.log('Callback value : ' , this.state.count);
    //   }
    //   )

    this.setState( (prevState , props) => ({
      count:prevState.count+1
    }))
    console.log(this.state.count);
}

  render() {
    return (
      <div>
        <div> Count - {this.state.count}</div>
        <button onClick={() => this.incrementFive() }> Increment</button>
      </div>
    )
  }
}

export default Counter

*/

//----------------------------------------------------------------------------
//                       video 12: Destructuring props and state
//----------------------------------------------------------------------------

/*

Destructuring : Destructuring is an ES6 feature that makes it possible to unpack 
values from arrays or properties from objects into distinct variables.
In react , destructuring props and state improves code readability

Destructuring in functional component
1st way : 

In Greet.js

import React from 'react'

const Greet = ({name , heroName}) => {
    
    return(
        <div>
        <h1>Hello {name} a.k.a {heroName} </h1> 
        
        </div>
    ) 
    
}
export default Greet

-----------------------------
In App.js

import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet';
import React , {Component} from 'react';
class App extends Component{

  render() {
    return(
      <div>
      <Greet name = 'Bruclie' heroName={'batman'}/>
      </div>
    )
  }
}
export default App;

---------------------------------------------

2nd way

import React from 'react'

const Greet = props => {
    const {name , heroName} = props
    
    return(
        <div>
        <h1>Hello {name} a.k.a {heroName} </h1> 
        
        </div>
    ) 
    
    
}
export default Greet

-------------------------------------------

Destructuring in class component

In Namaste.js

import React , {Component} from 'react'

class Namaste extends Component {

    render() {
        const{name,heroName} = this.props
        //const {state1 , state2} = this.state -> if we have state
        return <h1> Welcome {name} a.k.a {heroName} </h1>
    }
}
export default Namaste;

--------------------------

In App.js

import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet';
import React , {Component} from 'react';
import Namaste from './components/Namaste';
// import Counter from './components/Counter';

class App extends Component{

  render() {
    return(
      <div>
      <Greet name = 'Naidu' heroName={'batman'}/>
      <Namaste name = 'Bruce' heroName = 'SpiderMan'/>
      </div>
    )
  }
}
export default App;

*/


//----------------------------------------------------------------------------
//                       video 13: Event Handling
//----------------------------------------------------------------------------

/*
Event handling in function components
-------------------------------------
press rce+tab for code template

import React from 'react'

function FunctionClicks() {

    function clickHandler() {
        console.log('Button clicked');
    }
    
  return (
    <div>
      <button onClick={clickHandler}>Click</button> 
      // donot add () , clickHandler(). 
      </div>
      )
    }
    
    export default FunctionClicks

    ----------------------

  In App.js

  render() {
    return(
      <div>
      <FunctionClicks/>
      </div>
    )
  }
    -----------------------------------------------------------
Event handling in class components

In App.js

import logo from './logo.svg';
import './App.css';
import React , {Component} from 'react';
import ClassClick from './components/ClassClick';

class App extends Component{

  render() {
    return(
      <div>
      <ClassClick/>
      </div>
    )
  }
}
export default App;
---------------------------------
In ClassClick.js

import React, { Component } from 'react'

class ClassClick extends Component {

  clickHandler() {
        console.log('Clicked the button');
    }
  render() {
    return (
      <div>
        <button onClick={this.clickHandler}>Click me</button>
      </div>
    )
  }
}

export default ClassClick

*/

//----------------------------------------------------------------------------
//                       video 14: Binding Event Handlers
//----------------------------------------------------------------------------

/*

import React, { Component } from 'react'

class EventBind extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         message : 'Hello'
      }
    }
    clickHandler() {

        // this.setState({
        //     message : 'GoodBye'
        // })
      console.log(this);//undefined , so we need to bind this event handlers
        
    }
  render() {
    return (
      <div>
        <div>{this.state.message}</div>
        <button onClick={this.clickHandler}>Click</button>
      </div>
    )
  }
}

export default EventBind

----------------------------------------------------------
There are 4 ways to bind event handlers ,

Approach 1 : Binding with render().

import React, { Component } from 'react'

class EventBind extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         message : 'Hello'
      }
    }
    clickHandler() {

        this.setState({
            message : 'GoodBye'
        })

        console.log(this);
    }
  render() {
    return (
      <div>
        <div>{this.state.message}</div>
        <button onClick={this.clickHandler.bind(this)}>Click</button>
      </div>
    )
  }
}

export default EventBind

Approach 2 : using () => function

  render() {
    return (
      <div>
        <div>{this.state.message}</div>
        //{ <button onClick={this.clickHandler.bind(this)}>Click</button> 
        <button onClick={() => this.clickHandler()}>Click</button>
      </div>
    )
  }

Approach 3 : using constructor and render()
Note : This one is the best approach.

 constructor(props) {
      super(props)
    
      this.state = {
         message : 'Hello'
      }

      this.clickHandler = this.clickHandler.bind(this)
    }
    clickHandler() {

        this.setState({
            message : 'GoodBye'
        })

        console.log(this);
    }
  render() {
    return (
      <div>
        <div>{this.state.message}</div>
        <button onClick={this.clickHandler}>Click</button>
      </div>
    )
  }

 Approach 4 :  Class property as arrow function

 import React, { Component } from 'react'

class EventBind extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         message : 'Hello'
      }
    }
   clickHandler = () => {
    this.setState({
        message : 'GoodBye!'
    })
   }
  render() {
    return (
      <div>
        <div>{this.state.message}</div>
        <button onClick={this.clickHandler}>Click</button>
      </div>
    )
  }
}

export default EventBind

*/

//----------------------------------------------------------------------------
//                       video 15: Methods as props
//----------------------------------------------------------------------------
//As a property we are passing methods
/*
ex.
In App.js

import logo from './logo.svg';
import './App.css';
import React , {Component} from 'react';
import ParentComponent from './components/ParentComponent';

class App extends Component{

  render() {
    return(
      <div>
      <ParentComponent/>
      </div>
    )
  }
  
}
export default App; 

--------------------------------------------------------
In ParentComponent.js

import React, { Component } from 'react'
import ChildComponent from './ChildComponent';

class ParentComponent extends Component {

  constructor(props) {
    super(props)
    
    this.state = {
    parentName : 'Parent'
    }

    this.greetParent = this.greetParent.bind(this);

  }
  
  greetParent() {
    alert(`Hello ${this.state.parentName}`)
  } 

  render() {
    return (
      <div>
        <ChildComponent greetHandler = {this.greetParent}/>
      </div>
    )
  }

}

export default ParentComponent

------------------------------------------------------------
In ChildComponent.js

import React from 'react'

function ChildComponent(props) {
  return (
    <div>
        <button onClick={props.greetHandler}> Greet Parent </button>
    </div>
  )
}
  
export default ChildComponent

===============================================================

In ChildComponent.js

import React from 'react'

function ChildComponent(props) {
  return (
    <div>
        <button onClick={ () => props.greetHandler('child')}> Greet Parent </button>
    </div>
  )
}

export default ChildComponent


--------------------------------------------

In App.js

import logo from './logo.svg';
import './App.css';
import React , {Component} from 'react';
import ParentComponent from './components/ParentComponent';

class App extends Component{

  render() {
    return(
      <div>
      <ParentComponent/>
      </div>
    )
  }
  
}
export default App; 

-----------------------------------------------

import React, { Component } from 'react'
import ChildComponent from './ChildComponent';

class ParentComponent extends Component {

  constructor(props) {
    super(props)
    
    this.state = {
    parentName : 'Parent'
    }

    this.greetParent = this.greetParent.bind(this);

  }
  
  greetParent( childName) {
    alert(`Hello ${this.state.parentName} from ${childName}`)
  } 

  render() {
    return (
      <div>
        <ChildComponent greetHandler = {this.greetParent}/>
      </div>
    )
  }

}

export default ParentComponent

//This is how we pass methods as props in react.
*/

//----------------------------------------------------------------------------
//                       video 16: Conditional Rendering
//----------------------------------------------------------------------------

/*
Conditional Rendering

1. if/else
2. Element Variables
3. Ternary conditional operator
4. Short circuit operator

import React, { Component } from 'react'

class UserGreeting extends Component {

    constructor(props) {
        super(props)
      
        this.state = {
           isLoggedIn : false
        }
    }

    render() {

        return this.state.isLoggedIn && <div>Welcome Nandini</div> // short circuit opearator
        /*
        return (
            this.state.isLoggedIn ? <div> Welcome Nandini</div> : <div> Welcome Guest</div> 
        )//Ternary operator

        -----------------------------------------------
        //if-else operator

        let message;

        if(this.state.isLoggedIn) {
            message = <div> Welcome Nandini </div>
        } else {
            message = <div> Welcome Guest </div>
        }
        ------------------------------------------------

        if(this.state.isLoggedIn){
            return <div> Welcome Nandini </div>
        } else {
            return <div> Welcome Guest </div>
        }
       *//*
      }
    }
    export default UserGreeting 
*/

//----------------------------------------------------------------------------
//                       video 17: List Rendering
//----------------------------------------------------------------------------

/*
In App.js

import logo from './logo.svg';
import './App.css';
import React , {Component} from 'react';
import NameList from './components/NameList';

class App extends Component{
  
  render() {
    return(
      <div>
      <NameList/>
      </div>
    )
  }
  
}
export default App; 

In NameList.js

import React from 'react'

function NameList() {

  const names = ['Bruice' , 'Clark' , 'Diana']
    
  return (
    <div>
      <h2>{names[0]}</h2>
      <h2>{names[1]}</h2>
      <h2>{names[2]}</h2>
    </div>
  )
}
export default NameList

---------------------------------------------------
//using map().
import React from 'react'

function NameList() {

  const names = ['Bruice' , 'Clark' , 'Diana']
  const NameList = names.map(name => <h2>{name}</h2>)
  return (
    <div>{NameList}</div>
  )
  
}
export default NameList

=====================================================
In NameList.js

import React from 'react'
import Person from './Person';

function NameList() {

  const persons = [
    {
      id : 1 ,
      name : 'Bruce' ,
      age : 30 ,
      skill : 'React'
    },

    {
      id : 2 ,
      name : 'Clark' ,
      age : 25 ,
      skill : 'Angular'
    },
    
    {
      id : 3 ,
      name : 'Diana' ,
      age : 28 ,
      skill : 'Vue'
    },
    
    {
      id : 4 ,
      name : 'Charlie' ,
      age : 20 ,
      skill : 'Java'
    },

    {
      id : 5 ,
      name : 'Andrue' ,
      age : 22 ,
      skill : 'JavaScript'
    },
  ]
  const personList = persons.map(person => ( 
    <Person person = {person}></Person>
  ))
  return <div>{personList}</div>
}

export default NameList

----------------------------------------------
In Person.js

import React from 'react'

function Person({person}) {
  return (
    <div>
      <h2>
    I am {person.name}. I am {person.age} years old. I know {person.skill}
    </h2>
    </div>
  )
}

export default Person

----------------------------------------------

In App.js

import logo from './logo.svg';
import './App.css';
import React , {Component} from 'react';
import NameList from './components/NameList';

class App extends Component{
  
  render() {
    return(
      <div>
      <NameList/>
      </div>
    )
  }
  
}
export default App; 
*/

//----------------------------------------------------------------------------
//                       video 18: Lists and Keys
//----------------------------------------------------------------------------

/*
import React from 'react'
import Person from './Person';

function NameList() {

  const persons = [
    {
      id : 1 ,
      name : 'Bruce' ,
      age : 30 ,
      skill : 'React'
    },

    {
      id : 2 ,
      name : 'Clark' ,
      age : 25 ,
      skill : 'Angular'
    },
    
    {
      id : 3 ,
      name : 'Diana' ,
      age : 28 ,
      skill : 'Vue'
    },
    
    {
      id : 4 ,
      name : 'Charlie' ,
      age : 20 ,
      skill : 'Java'
    },

    {
      id : 5 ,
      name : 'Andrue' ,
      age : 22 ,
      skill : 'JavaScript'
    },
  ]
  const personList = persons.map(person => ( 
    <Person key = {person.id} person = {person}></Person>
  ))
  return <div>{personList}</div>
}

export default NameList

Lists and Keys :

1. A "key" is a special string attribute you need to include when creating lists
    of elements.
2. Keys give the elements a stable identity
3.  Keys help react identify which items have changed , are added, or are removed.
4. Help in efficient update of the user interface.


//----------------------------------------------------------------------------
//                       video 19: Index as Key Anti-pattern
//----------------------------------------------------------------------------

import React from 'react'
import Person from './Person';

function NameList() {

  const names = ['Bruce' , 'Clark' , 'Bruce', 'Diana' , 'Charlie' , 'Andrue'];
  const persons = [
    {
      id : 1 ,
      name : 'Bruce' ,
      age : 30 ,
      skill : 'React'
    },

    {
      id : 2 ,
      name : 'Clark' ,
      age : 25 ,
      skill : 'Angular'
    },
    
    {
      id : 3 ,
      name : 'Diana' ,
      age : 28 ,
      skill : 'Vue'
    },
    
    {
      id : 4 ,
      name : 'Charlie' ,
      age : 20 ,
      skill : 'Java'
    },

    {
      id : 5 ,
      name : 'Andrue' ,
      age : 22 ,
      skill : 'JavaScript'
    },
  ]
  const nameList = names.map( (name , index) => <h2 key = {index}> {index} {name}</h2> )
  return <div>{nameList}</div>
}
export default NameList

--------------------------------------------

index as key : 

When to use index as a key ?

1. The items in your list do not have a unique id.
2. The list is a static list and will not change.
3. The list will never be reordered or filtered.

B.p is try avoiding using index as a key.


//----------------------------------------------------------------------------
//                       video 20 : Styling and CSS Basics
//----------------------------------------------------------------------------

1. CSS stylesheets
2. Inline styling
3. CSS Modules
4. CSS in JS Libraries (styled components)

1. CSS stylesheets

In App.js

import logo from './logo.svg';
import './App.css';
import React , {Component} from 'react';
import Stylesheet from './components/Stylesheet';

class App extends Component{
  
  render() {
    return(
      <div>
      <Stylesheet primary = {true}/>
      </div>
    )
  }
  
}
export default App; 

------------------------------------------------

In Stylesheet.js

import React from 'react'
import './myStyles.css'

function Stylesheet(props) {
    let className = props.primary ? 'primary' : ''
  return (
    <div>
      <h1 className={`${className} font-xl`}>Stylesheets</h1>
    </div>
  )
}
export default Stylesheet

-----------------------------------------------

In myStyle.css

.primary {
    color:orange;
}

.font-xl {
    font-size: 72px;
}

------------------------------------------------

2. Inline styling

In Inline.js

import React from 'react'

const heading = {
    fontSize : '72px',
    color:'blue'
}

function Inline() {
  return (
    <div>
      <h1 style = {heading}>Inline</h1>
    </div>
  )
}

export default Inline

--------------------------------------------

In App.js

import logo from './logo.svg';
import './App.css';
import React , {Component} from 'react';
import Inline from './components/Inline';

class App extends Component{
  
  render() {
    return(
      <div>
        <Inline/>
      </div>
    )
  }
  
}
export default App; 

-------------------------------------
3. CSS Modules

In App.js

import logo from './logo.svg';
import './App.css';
import React , {Component} from 'react'
import './appStyles.css'
import styles from './appStyles.module.css'

class App extends Component{
  
  render() {
    return(
      <div>
        <h1 className='error'>Error</h1>
        <h1 className={styles.success}>Success</h1>
      </div>
    )
  }
  
}
export default App; 
---------------------------------------------------------

Create appStyles.css and appStyles.module.css in src folder(i.e, outside of components folder)

In appStyles.js

.error {
    color:red;
}

---------------------------------------

In appStyles.module.css

.success {
    color: green;
}

//----------------------------------------------------------------------------
//                       video 21 :  Basics of Form Handling
//----------------------------------------------------------------------------

Form elements whose values are controlled by react -> controlled component.

Steps : 
1. Add the html
3. Assign the change handler to update the state.

In App.js

import logo from './logo.svg';
import './App.css';
import React , {Component} from 'react'
import './appStyles.css'
import Form from './components/Form';

class App extends Component{
  
  constructor(props) {
    super(props)
  
    this.state = {
       username : ''
    }
  }
  
  handleUsernameChange = (event)=>  {
    this.setState({
      username:event.target.value
    })
  }

  render() {
    return(
      <form>
        <div>
          <label>Username</label>
          <input type = 'text' value = {this.state.username} onChange={this.handleUsernameChange}/>
        </div>
      </form>
    )
  }
  
}
export default App; 
-------------------------------------------

In Form.js

import React, { Component } from 'react'

class Form extends Component {
  render() {
    return (
      <div>
        form component
      </div>
    )
  }
}

export default Form


======================================================
checking controlled components fot form , input , textarea , topic.

In App.js

import logo from './logo.svg';
import './App.css';
import React , {Component} from 'react'
import './appStyles.css'
import Form from './components/Form';

class App extends Component{
  
  constructor(props) {
    super(props)
  
    this.state = {
       username : '' ,
       comments : '' ,
       topic : 'react'
    }
  }
  
  handleUsernameChange = event=>  {
    this.setState({
      username:event.target.value
    })
  }
  
handleCommentsChange = event=>  {
  this.setState({
    comments:event.target.value
  })
}
handleTopicChange = event=>  {
  this.setState({
    topic:event.target.value
  })
}

handleSubmit = event => {
  alert(`${this.state.username} ${this.state.comments} ${this.state.topic}`)
  event.preventDefault()
}

  render() {
    const {username , comments , topic} = this.state
    return(
      <form onSubmit={this.handleSubmit}>
        <div>
          <label>Username</label>
          <input type = 'text' value = {username} onChange={this.handleUsernameChange}/>
        </div>
        <div>
          <label>Comments</label>
          <textarea value={comments} onChange={this.handleCommentsChange} />
        </div>
        <div>
          <label>Topic</label>
          <select value = {topic} onChange={this.handleTopicChange}>
            <option value = 'react'>React</option>
            <option value = 'angular'>Angular</option>
            <option value = 'vue'>Vue</option>
          </select>
        </div>
        <button type = "submit">Submit</button>
      </form>
    )
  }
  
}
export default App; 


//----------------------------------------------------------------------------
//                       video 22 :  Component Lifecycle Methods
//----------------------------------------------------------------------------

Lifecycle methods donot exist in functional components.

These are the 4 phasses , 

1. Mounting : 
    This method called when an instance of a component is being created and inserted into the DOM.

2. Updating : 
    When a component is being re-rendered as a result of changes to either 
    its props or state.

3. Unmounting : 
    When a component is being removed from the DOM.

4. Error Handling : 
    When there is an error during rendering , in a lifecycle method, or in the constructor of any child component.

    -----------------------------------------------------------------


1. In Mounting phase following methods are present.
    constructor , static getDerivedStateFromProps , render and componentDidMount

2. Updating :
    getDerivedSTateFromProps , shouldComponentUpdate , render ,getSnapshotBeforeUpdate and componentDidUpdate

3. Unmounting componentWillUnmount

4. Error Handling : static getDerivedStateFromError and  componentDidCatch

//----------------------------------------------------------------------------
//                       video 23 : Component Mounting Lifecycle Methods
//----------------------------------------------------------------------------

1. Constructor (props) 
----------------------

1. A special function that will get called whenever a new component is created.

2. Initializing state , Binding the event handlers

3. Donot cause side effects. Ex. HTTP requests.

4. super(props)Directly overWrite this.state.

2. static getDerivedStateFromProps(props , state) 
----------------------------------------------------

    1. When the state of the component depends on changes in props over time.
    2. Set the state.
    4. Do not cause side effects. Ex. HTTP requests.

3. render
----------

1. Only required method
2. Read props and state and return JSX
3. Donot change state interact with DOM or make ajax calls.
4 Children components lifecycle methods are also executed.

4. componentDidMount
-------------------
1. Invoked immediately after a component and all its children components have been rendered to the DOM.
2. Cause side effects. Ex. Interact with the DOM or perform any ajax calls to load data.

code : 
1. using a constructor

import React, { Component } from 'react'
import LifecycleB from './LifeCycleB';
class LifeCycleA extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         name : 'Nandini'
      }
      console.log('LifeCycleA constructor');
    }
    
    static getDerivedStateFromProps( props , state ) {

      console.log('LifeCycleA getDerivedStateFromProps');
      return null;

    }
    componentDidMount() {
      console.log('LifeCycleA componentDidMount');
    }

  render() {
    console.log('LifecycleA render');

    return (<div>     
       <div>LifecycleA</div>
       <LifecycleB/ >
      </div>
    )
  }
}
export default LifeCycleA
----------------------------------------------------------

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
    componentDidMount() {
      console.log('LifecycleB componentDidMount');
    }

  render() {
    console.log('LifecycleB render');

    return (
      <div>Lifecycle B</div>
    )
  }
}

export default LifecycleB

--------------------------
In App.js

import logo from './logo.svg';
import './App.css';
import React , {Component} from 'react'
import './appStyles.css'
import Form from './components/Form';
import LifeCycleA from './components/LifeCycleA';

class App extends Component{
 
  render() {
    return(
      <div className='App'>
        <LifeCycleA/>
      </div>
    )
  }
  
}
export default App; 


//----------------------------------------------------------------------------
//                       video 24 : Component Updating Lifecycle Methods
//----------------------------------------------------------------------------

static getDerivedStateFromProps(props , state) 
------------------------------------------------

1. Method is called every time a component is re-rendered.
2. Set the state.
3. Do not cause side effects. Ex:HTTP requests

shouldComponentUpdate(nextProps , nextState) 
--------------------------------------------

1. Dictates if the component should re-render or note.
2. Performa nce optimization
3. Do not cause side effects.Ex HTTP requestsCalling the setState method.

render() 
----------

1. One required method.
2. Read props and state and return JSX.
3. DO not change state or interact with DOM or make ajax calls.

getSnapshotBeforeUpdate(prevProps , prevState).
----------------------------------------------

1. Called right before the changes from the virtual DOM are to be reflected to the DOM.
2. Capture some information from the DOM.
3. Method will either return null or return a value. Returned value will be passed as the third
  parameter to the next method.

componentDidUpdate(prevProps , prevState , snapshot)
-------------------------------------------------------

1. Called after the render ia finished in the re-render cycles.
2.cause side effects

Note : render() and componentDidUpdate() are the most commonly used methods
        during update lifecycle.

In App.js

import logo from './logo.svg';
import './App.css';
import React , {Component} from 'react'
import './appStyles.css'
import Form from './components/Form';
import LifeCycleA from './components/LifeCycleA';

class App extends Component{
 
  render() {
    return(
      <div className='App'>
        <LifeCycleA/>
      </div>
    )
  }
  
}
export default App; 

-----------------------------------
In LifeCycleA.js

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
----------------------------------------------------------------

In LifeCycleB.js

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


--------------------------
Unmounting Phase Method :
--------------------------

componentWillUnmount() 
-----------------------------
1. Method is invoked immediately before a component is unmounted and destroyed.
2. Cancelling any network requests , removing event handlers , cancelling any
   subscriptions and also invalidating timers.
3. Do not call the setStatemethod.

--------------------------
Error Handling Phase Methods :
--------------------------
1. static getDerivedStateFromError(error)
2. componentDidCatch(error , info)

When there is an error either during rendering, in a lifecycle method, or in the 
constructor of any child component.

//----------------------------------------------------------------------------
//                       video 25 : Fragments
//----------------------------------------------------------------------------

In App.js

import logo from './logo.svg';
import './App.css';
import React , {Component} from 'react'
import './appStyles.css'
import FragmentDemo from './components/FragmentDemo';

class App extends Component{
 
  render() {
    return(
      <div>
        <h1><FragmentDemo/></h1>
        <p>This describes the Fragment Demo components.</p>
      </div>
    )
  }
  
}
export default App; 
---------------------------------------------------------

In FragmentDemo.js

import React from 'react'

function FragmentDemo() {
  return (
    <div>
      Fragment Demo
    </div>
  )
}
export default FragmentDemo

Note : But if we go back to the browser -> inspect -> elements -> 
we can see nested <div> and <div>Fragment Demo</div> .
So to avoid that , we will use React.Fragment tag instead of div tag.

In FragmentDemo.js

import React from 'react'

function FragmentDemo() {
  return (
    <React.Fragment>
      Fragment Demo
    </React.Fragment>
  )
}
export default FragmentDemo

Note : now in  browser -> inspect -> elements -> we can see only Fragment Demo

---------------------------------------------------------------------------------

In App.js

import logo from './logo.svg';
import './App.css';
import React , {Component} from 'react'
import './appStyles.css'
import Table from './components/Table';

class App extends Component{
 
  render() {
    return(
      <div>
        <Table/>
      </div>
    )
  }
  
}
export default App; 

------------------------------------------

In Table.js

import React from 'react'
import Column from './Column'

function Table() {
  return (
    <div>
        <table>
            <tbody>
                <tr>
                    <Column/>
                </tr>
            </tbody>
        </table>
      
    </div>
  )
}

export default Table


-----------------------------------------------

In Column.js

import React from 'react'

function Column() {

    const items = ['hii','world']

  return (
    <React.Fragment>
        {
            items.map( item => (
                <React.Fragment key = {item.id}>
                    <h1>Title</h1>
                    <p>{item.title}</p>
                </React.Fragment>
            ))
        }

      <td>Name</td>
      <td>Nandini</td>
    </React.Fragment>
  )
}

export default Column

Note :  <React.Fragment> </React.Fragment> == <></> But the limitation is we can't use key property.


//----------------------------------------------------------------------------
//                       video 26 :  Pure Components
//----------------------------------------------------------------------------

Pure Component is an another way to create a class which extends Component, here class extend PureComponent. 
To create pure component -> press rpce

Following example shows the difference between regular component and a pure component.
i.e ., pure component won't re-render whereas regular component will re-render.

In App.js

import logo from './logo.svg';
import './App.css';
import React , {Component} from 'react'
import './appStyles.css'
import ParentComp from './components/ParentComp';

class App extends Component{
 
  render() {
    return(
      <div>
        <ParentComp/>
      </div>
    )
  }
  
}
export default App; 
------------------------------------------------

In ParentComp.js

import React, { Component } from 'react'
import PureComp from './PureComp'
import RegComp from './RegComp'

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
       <RegComp name={this.state.name}/>
       <PureComp name={this.state.name}/> 
        
      </div>
    )
  }
}

export default ParentComp
---------------------------------------------------

In PureComp.js

import React, { PureComponent } from 'react'

class PureComp extends PureComponent {
  render() {
    console.log('-------------PureComp-------------------');
    return (
      <div>
        Pure Component {this.props.name}
      </div>
    )
  }
}

export default PureComp
-----------------------------------------------

In RegComp.js

import React, { Component } from 'react'

class RegComp extends Component {
  render() {
    console.log('-------------RegComp-------------------');
    return (
      <div>
        Regular Component {this.props.name}
      </div>
    )
  }
}

export default RegComp

Note : open browser -> inspect -> console -> purecomp won't re-render but 
        RegComp will re-render.


Regular Component : 

1. A regular component does not implement the shouldComponentUpdate method. It always returns true by default.


Pure Component : 

1. A pure component on the other hand implements shouldComponentUpdate with a shallow props and state comparision.

SC of prevState with currentState   ------->Difference     Re-render
SC of prevProps with currentProps   ------->?              Component


Shallow Comparison(SC)

1. Primitive Types
     a SC b returns true if a and b have the same value and are of the same type.
     Ex. string 'Vishwas' (SC) string 'Vishwas' returns true.
  
2. Complex Types(Objects and arrays)
    a (SC) b returns true if a and b reference the exact same object.

    Ex 1 :
    var a = [1,2,3];
    var b = [1,2,3];
    var c = a;

    var ab_eq = (a === b);//false
    var ac_eq = (a === c);//true
--------------------------------------
    Ex 2 :
    var a = {x:1 , y:2};
    var b = {x:1 , y:2};
    var c = a;

    var ab_eq = (a === b);//false
    var ac_eq = (a === c);//true

Note : Donot mutate objects or arrays in props or state.
      If we wish to add an item to the list , donot mutate by pushing item into the list,
      always return a new array or object when dealing with pure component.

-----------------------------------------------------------------------------------------------------------------------

In the below ex.  import React, { Component , PureComponent } from 'react' here we extend to PureComponentt.

import React, { Component , PureComponent } from 'react'
import PureComp from './PureComp'
import RegComp from './RegComp'

class ParentComp extends PureComponent {
    
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
       <RegComp name={this.state.name}/>
       <PureComp name={this.state.name}/> 
        
      </div>
    )
  }
}
export default ParentComp
Op: no re-render will happen now.

App.js , Reg and PureComp class are same here.
Such that all the child component also belongs to pure component.

It is a good idea to ensure that all the children components are also pure to avoid unexpected behaviour.


//----------------------------------------------------------------------------
//                       video 27 :  memo
//----------------------------------------------------------------------------

Pure component works with class based components.
Memo works with Functional Components.

In App.js

import logo from './logo.svg';
import './App.css';
import React , {Component} from 'react'
import './appStyles.css'
import ParentComp from './components/ParentComp';

class App extends Component{
 
  render() {
    return(
      <div>
        <ParentComp/>
      </div>
    )
  }
  
}
export default App; 

------------------------------------------------------

In MemoComponent.js

import React from 'react'

function MemoComponent({name}) {
  
    console.log('Rendering memo component');
    return (
    <div>
      {name}
    </div>
  )
}

export default React.memo(MemoComponent)

------------------------------------------------------

In ParentComp.js

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

Note : Op -> Rendering memo component won't re-render since we used memo for functional components.

//----------------------------------------------------------------------------
//                       video 28 :  Refs
//----------------------------------------------------------------------------

Refs help in accessing DOM nodes directly within react 

In App.js

import logo from './logo.svg';
import './App.css';
import React , {Component} from 'react'
import './appStyles.css'
import RefsDemo from './components/RefsDemo';

class App extends Component{
 
  render() {
    return(
      <div>
        <RefsDemo/>
      </div>
    )
  }
  
}
export default App; 
----------------------------------------------------

In RefsDemo.js

import React, { Component } from 'react'

class RefsDemo extends Component {
  render() {
    return (
      <div>
            <input type = 'text'/>
      </div>
    )
  }
}
export default RefsDemo

Op: we can see a text box right? we can do this using refs in 3 simple steps.
-----------------------------------------------------------------------------

Steps : 

1. Create a ref. i.e., react.createRef().
ex. 
constructor(props) {
  super(props)
  this.inputref = react.createRef()
}

2. Attach this ref to our input element in the render method.
ex.
render() {
    return (
      <div>
            <input type = 'text' ref = {this.inputref}/>
      </div>
    )
  }

3. Call the focus method on this input element

----------------------------------------
In App.js

import logo from './logo.svg';
import './App.css';
import React , {Component} from 'react'
import './appStyles.css'
import RefsDemo from './components/RefsDemo';

class App extends Component{
 
  render() {
    return(
      <div>
        <RefsDemo/>
      </div>
    )
  }
  
}
export default App; 
-------------------------------------

In RefsDemo

import React, { Component } from 'react'

class RefsDemo extends Component {
    
    constructor(props) {
      super(props)
    
      this.inputref = React.createRef()
    }

    componentDidMount() {
        this.inputref.current.focus()
        console.log(this.inputref);
    }

  render() {
    return (
      <div>
            <input type = 'text' ref = {this.inputref}/>
      </div>
    )
  }
}

export default RefsDemo

----------------------------------------------
Secong possible usecase for using refs would be to fetch the input values.

In RefsDemo.js

import React, { Component } from 'react'

class RefsDemo extends Component {
    
    constructor(props) {
      super(props)
    
      this.inputref = React.createRef()
    }

    componentDidMount() {
        this.inputref.current.focus()
        console.log(this.inputref);
    }

    clickHandler = ()=> {
alert(this.inputref.current.value)
    }

  render() {
    return (
      <div>
            <input type = 'text' ref = {this.inputref}/>
            <button onClick={this.clickHandler}>Click</button>
      </div>
    )
  }
}

export default RefsDemo

------------------------------------------------------------------------

Second way to create ref is callback refs approach and this is an older approach.
It involves 4 steps.
Steps: 
1. Create a property and assign it to null.
ex.
 constructor(props) {
      super(props)
    
      this.inputref = React.createRef()
      this.cbRef = null;
    }

    ------------------------------------------------------------------------

2. We create a method that will assign a Dom element to the ref we have just
   created in step 1.  
ex.
 constructor(props) {
      super(props)
    
      this.inputref = React.createRef()
      this.cbRef = null;
      this.setCbRef = element => {
        this.cbRef = element;
      }

3. Attach this ref to the input element
ex.
  render() {
    return (
      <div>
            <input type = 'text' ref = {this.inputref}/>
            <input type = 'text' ref = {this.setCbRef}/>//3rd step
            <button onClick={this.clickHandler}>Click</button>
      </div>
    )
  }

  Callback refs is that react will call the ref callback with the DOM element 
  when the component mounts and call it with null when it unmounts.
  That is the reason it is really imp to check if a value exists on the reference property.
  and that is not null.

  In Refs Demo

  import React, { Component } from 'react'

class RefsDemo extends Component {
    
    constructor(props) {
      super(props)
    
      this.inputref = React.createRef()
      this.cbRef = null;
      this.setCbRef = element => {
        this.cbRef = element;
      }
    }

    componentDidMount() {
        if (this.cbRef) {
            this.cbRef.focus()
        }
    }

    clickHandler = ()=> {
alert(this.inputref.current.value)
    }

  render() {
    return (
      <div>
            <input type = 'text' ref = {this.inputref}/>
            <input type = 'text' ref = {this.setCbRef}/>
            <button onClick={this.clickHandler}>Click</button>
      </div>
    )
  }
}

export default RefsDemo

--------------------------------------------------------------------

In App.js

import logo from './logo.svg';
import './App.css';
import React , {Component} from 'react'
import './appStyles.css'
import RefsDemo from './components/RefsDemo';

class App extends Component{
 
  render() {
    return(
      <div>
        <RefsDemo/>
      </div>
    )
  }
  
}
export default App; 

-------------------------------------------------------------------


//----------------------------------------------------------------------------
//                       video 29 :  Refs with Class Components
//----------------------------------------------------------------------------

In App.js

import logo from './logo.svg';
import './App.css';
import React , {Component} from 'react'
import './appStyles.css'
import FocusInput from './components/FocusInput';

class App extends Component{
 
  render() {
    return(
      <div>
        <FocusInput/>
      </div>
    )
  }
  
}
export default App; 

---------------------------------------------------

In Input.js

import React, { Component } from 'react'

class Input extends Component {

    constructor(props) {
      super(props)
      this.inputRef = React.createRef();

    }

    focusInput() {
        this.inputRef.current.focus();
    }

  render() {
    return (
      <div>
        <input type = 'text' ref = {this.inputRef}/>
      </div>
    )
  }
}

export default Input

----------------------------------------------------

In FocusInput.js

import React, { Component } from 'react'
import Input from './Input'

class FocusInput extends Component {
    constructor(props) {
      super(props)
    
      this.componentRef = React.createRef();
    }
    clickHandler = ()=> {
        this.componentRef.current.focusInput()
    }
  render() {
    return (
      <div>
        <Input ref = {this.componentRef}/>
        <button onClick={this.clickHandler}>Focus Input</button>
      </div>
    )
  }
}
export default FocusInput

Op: If I click on the button the input element receives the focus 

So in special circumstances if at all you need a ref to a child component from a 
parent component know that it is definitely possible the component however has to be a 
class component refs can't be attached to functional components

//----------------------------------------------------------------------------
//                       video 30 :  Forwarding Refs
//----------------------------------------------------------------------------

Forwarding refs is a technique for automatically passing a ref through a component to one of
its children.

Here we use the forwarding ref technique to allow the parent component to directly reference the native input element.

So we have 4 simple steps to achieve this.

1. Create a ref and the parent component
ex. In FRParentInput
constructor(props) {
      super(props)
    
      this.inputRef = React.createRef();
}

2. Attach the ref to the child component using the ref attribute.
ex. In FRParentInput
render() {
    return (
      <div>
        <FRInput ref = {this.inputRef}/>
        <button>Focus Input</button>
      </div>
    )
}

3. we need to forward this ref to the input element in the child component and ref forwarding 
    can be achieved using the forward draft method from the react library.

In App.js

import logo from './logo.svg';
import './App.css';
import React , {Component} from 'react'
import './appStyles.css'
import FRParentInput from './components/FRParentInput';

class App extends Component{
 
  render() {
    return(
      <div>
        <FRParentInput/>
      </div>
    )
  }
  
}
export default App; 

---------------------------------------------------------
In FRInput.js

import React from 'react'

// function FRInput() {
//   return (
//     <div>
//       <input type = "text"/>
//     </div>
//   )
// }

const FRInput = React.forwardRef( (props , ref) => {
    return (
            <div>
              <input type = "text" ref = {ref}/>
            </div>
          )
})

export default FRInput

---------------------------------------------------------
In FRParentInput

import React, { Component } from 'react'
import FRInput from './FRInput'

class FRParentInput extends Component {

    constructor(props) {
      super(props)
    
      this.inputRef = React.createRef();
    }
    
    clickHandler = () => {
        this.inputRef.current.focus()
    }

  render() {
    return (
      <div>
        <FRInput ref = {this.inputRef}/>
        <button onClick={this.clickHandler}>Focus Input</button>
      </div>
    )
  }
}

export default FRParentInput


Note : ref is being forwarded from the parent component to the native input element.

//----------------------------------------------------------------------------
//                       video 31 :   Portals
//----------------------------------------------------------------------------

React portals provide a way to render children into a DOM node that exists outside the 
DOM hierarchy of the parent component

Goto public(outside component) -> index.html ->  
after <div> root element type
<div id = "portal-root"></div>

Then In component -> create a new file PortalDemo.js

In App.js

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

--------------------------------------------------
In PortalDemo.js

import React from 'react'

function PortalDemo() {
  return (
    <h1>
        Portals Demo
    </h1>
  )
}

export default PortalDemo

----------------------------------------------

In index.html

<div id="root"></div>
<div id = "portal-root"></div>

Op: <h1> Portals Demo</h1> didn't comes under  <div id = "portal-root"></div>.

In order to achieve this 
1. import ReactDOM from 'react-dom' in PortalDemo.js.

In App.js

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

--------------------------------------------------------
In PortalDemo.js

In import React from 'react'
import ReactDOM from 'react-dom'

function PortalDemo() {
  return ReactDOM.createPortal(
  <h1>
    Portals Demo
  </h1> , 
  document.getElementById('portal-root')
  ) 
}
export default PortalDemo

Note : Now <h1> Portals Demo</h1>  comes under  <div id = "portal-root"></div>.

Why do we need them?

Some usecases is having to deal with apparent components CSS when that child component
is a model a pop-up or a tool-tip
*/
