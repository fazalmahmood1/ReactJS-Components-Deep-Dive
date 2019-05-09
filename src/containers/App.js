import React, { Component } from 'react';
import './App.css';
import Person from '../components/Persons/Person/Person';

class App extends Component {
  state = {
    persons: [
      { id:"as12",name: "Fazal Mahmood", age: 30 },
      { id:"we32",name: "Ali Ahmad", age: 28 }
    ]
  };

  switchNameHandler = (name) => {
    //console.log('was clicked!');
    this.setState({
      persons: [
        { name: name, age: 32 },
        { name: "Ali Ahmad", age: 20 }
      ],
      showPersons: false
    });
  }

  nameChangedHandler = (event, id) => {

    const personIndex = this.state.persons.findIndex(p => {
      return p.id  === id;
    });

    const person = {
      ...this.state.persons[personIndex]
    };

    // Now update the array at specific index
    person.name = event.target.value;
    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({ persons: persons });
  }
  deletePersonHandler = (index) =>{
    //  const persons = this.state.persons.slice();
     const persons = [...this.state.persons];
     persons.splice(index, 1);
     this.setState({persons:persons});
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  }
  render(){

    let persons = null;
    if(this.state.showPersons){
      persons = (
        <div>
          {
            this.state.persons.map((person, index) => {
              return <Person 
                key={person.id}
                name={person.name} 
                age={person.age}
                click={this.deletePersonHandler.bind(this, index)}
                changed={(event) => this.nameChangedHandler(event, person.id)} />
            })
          }
            {/* <Person 
              name={this.state.persons[0].name} 
              age={this.state.persons[0].age} 
              click={this.switchNameHandler.bind(this,'Mahmood')}
              changed={this.nameChangedHandler}>My Hobbies: Programming </Person>
            <Person name={this.state.persons[1].name} age={this.state.persons[1].age} /> */}
          </div>
      );
    }

    return (
      <div className="App">
        <h1>Hi, I am a React App</h1>
        <p>This is realy working</p>
        {/* <button onClick={this.switchNameHandler.bind(this, 'Fazal')}>Switch Name</button> */}
        <button onClick={this.togglePersonsHandler}>Switch Name</button>
        {persons}
      </div>
    );
    // return React.createElement('div',{ className: 'App'}, React.createElement('h1', null, "Does this work?")); 
  }
}
export default App;
