import React, { Component } from 'react';

//import styled from 'styled-components';
import classes from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
import withClass from '../hoc/withClass';
import Auxiliary from '../hoc/Auxiliary';
import AuthContext from '../context/auth-context';
//import ErrorBoundary from '../ErrorBoundary/ErrorBoundary'

/*
const StyledButton = styled.button`
      background-color: ${props => props.alt ? 'red' : 'green'};
      color: white;
      font: inherit;
      border: 1px solid blue;
      padding: 8px;
      cursor: pointer;
      
      &:hover {
        background-color: ${props => props.alt ? 'salmon' : 'lightgreen'};
        color: black;
      }
`;
*/

class App extends Component {
  constructor(props) {
    super(props)
    console.log('[App.js] constructor')
  }

  state = {
    persons: [
      { id: 'sdsd', name: 'Max', age: 28 },
      { id: 'dfdsfw', name: 'Manu', age: 29 },
      { id: 'wegfvw', name: 'Stephanie', age: 26 }
    ],
    otherState: 'some other value',
    showPersons: false,
    showCockpit: true,
    changeCounter: 0,
    authenticated: false
  };

  static getDerivedStateFromProps(props, state){
    console.log('[App.js] getDerivedStateFromProps')
    return state
  }

  componentWillMount() {
    console.log('[App.js] componentWillMount')
  }

  componentDidMount() {
    console.log('[App.js] componentDidMount')
  }

  shouldComponentUpdate() {
    console.log('[App.js] shouldComponentUpdate')
    return true
  }

  componentDidUpdate() {
    console.log('[App.js] componentDidUpdate')
  }

  /*
  switchNameHandler = () => {
    //console.log('Was Clicked!');
    this.setState({persons: [
      { name: 'Maximilian', age: 28 },
      { name: 'Manu', age: 29 },
      { name: 'Stephanie', age: 27 }
    ]})
  }
  */
  nameChangedHandler = ( event, id ) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    })

    const person  = {
        ...this.state.persons[personIndex]
    };

    person.name = event.target.value;

    const persons = [...this.state.persons]
    persons[personIndex] = person

    this.setState((prevState, props) => {
      return {
        persons: persons,
        changeCounter: prevState.changeCounter + 1
      };
    });

    /*
    this.setState({
      persons: [
        {name: 'Maximilian', age: 28},
        {name: event.target.value, age: 29},
        {name: 'Stephanie', age: 27}
      ]
    })
    */
  }

  deletePersonHandler = (personIndex) => {
    // const persons = this.state.persons.slice();
    const persons = [...this.state.persons]
    persons.splice(personIndex, 1);
    this.setState({persons: persons})
  }

  togglePersonHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons : !doesShow})
  }

  loginHandler = () => {
    this.setState({authenticated: true});
  };

  render() {
    console.log('[App.js] render')
    /*
    const style = {
      backgroundColor: 'green',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };
    */


    let persons = null;

    if ( this.state.showPersons ) {
      persons = (
          <Persons
            persons = {this.state.persons}
            clicked = {this.deletePersonHandler}
            changed = {this.nameChangedHandler}
            isAuthenticated={this.state.authenticated}
          />
      );
    }

    return (
      <Auxiliary classes={classes.App}>
        <button
          onClick={() => {
            this.setState({ showCockpit: false })
        }}
        >
          Remove Cockpit
        </button>
        <AuthContext.Provider value={{
          authenticated: this.state.authenticated,
          login: this.loginHandler}} >
          {this.state.showCockpit ? (
              <Cockpit
                title={this.props.appTitle}
                showPersons={this.state.showPersons}
                personsLength={this.state.persons.length}
                clicked={this.togglePersonHandler}
              />
          ) : null}
          {persons}
        </AuthContext.Provider>
      </Auxiliary>
    );
    // return React.createElement('div', null, React.createElement('h1', null, 'Hi, I\'m a R'));
  }
}
export default withClass(App, classes.App);
