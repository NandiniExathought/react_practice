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
