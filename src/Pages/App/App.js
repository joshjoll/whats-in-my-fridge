import React, { Component } from 'react';
import './App.css';

import MainPage from '../Main/mainPage.jsx';
import ProfilePage from '../User/ProfilePage.jsx';
import NavBar from '../../Components/NavBar/NavBar';


class App extends Component {
  constructor() {
    super();
    this.state = {
      text: '',
      ingredients: ['salt', 'pepper'],
      recipeMatch: ['watermelon', 'water', 'banana', 'deer', 'cauliflower', 'chicken'],

    };
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value })
  }

  render() {
    return (
      <div className="App">
        <NavBar />
        <MainPage
          ingredients={this.state.ingredients}
          recipeMatch={this.state.recipeMatch}
          text={this.state.text}
          handleChange={this.handleChange}
        />
        <ProfilePage />
      </div>
    );
  }
}

export default App;
