import React, { Component } from 'react';
import './App.css';
import ValidationComponent from './ValidationComponent';
import CharComponent from './CharComponent';

class App extends Component {
  state = {
    input: '',
    chars: [],
    len: 0
  }

  inputChangeHandler = (event) => {
    const input = event.target.value

    let len = input.length;

    const characters = input.split('');

    const chars = characters.map((char, index) => {
      return {char: char, id: index}
    })

    this.setState({
      input: input,
      chars: chars,
      len: len
    })
  }

  removeCharHandler = (id) => {
    const chars = [...this.state.chars];
    chars.splice(id, 1);
    const input = [...this.state.input];
    input.splice(id,1);
    const input2 = input.join('')
    const len = input2.length;
    this.setState({
      input: input2,
      chars: chars,
      len: len
    })
  }


  render() {

    let characters = null;

    if (this.state.len > 0) {
      characters = (
          <div>
            {this.state.chars.map((char,index) => {
              return <CharComponent
                  char={char.char}
                  key={index}
                  click={() => this.removeCharHandler(index)}/>
            })}
          </div>
      )
    }

    return (
      <div className="App">
        <ol>
          <li>Create an input field (in App component) with a change listener which outputs the length of the entered text below it (e.g. in a paragraph).</li>
          <li>Create a new component (=> ValidationComponent) which receives the text length as a prop</li>
          <li>Inside the ValidationComponent, either output "Text too short" or "Text long enough" depending on the text length (e.g. take 5 as a minimum length)</li>
          <li>Create another component (=> CharComponent) and style it as an inline box (=> display: inline-block, padding: 16px, text-align: center, margin: 16px, border: 1px solid black).</li>
          <li>Render a list of CharComponents where each CharComponent receives a different letter of the entered text (in the initial input field) as a prop.</li>
          <li>When you click a CharComponent, it should be removed from the entered text.</li>
        </ol>
        <p>Hint: Keep in mind that JavaScript strings are basically arrays!</p>
          <div>
            <input type='text' onChange={this.inputChangeHandler} value={this.state.input}/>
            <p>Input Length: {this.state.len}</p>
          </div>
          <ValidationComponent len={this.state.len}></ValidationComponent>
        {characters}
      </div>
    );
  }
}

export default App;
