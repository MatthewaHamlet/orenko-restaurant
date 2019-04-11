import React, { Component } from 'react';
import logo from './logo.svg';
import Navigation from './Navigation';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';

const LINKS = [
  { label: 'Home', to: 'home' },
  { label: 'Menu', to: 'menu' },
  { label: 'Blog', to: 'blog' },
  { label: 'Contact', to: 'contact' },
]


class App extends Component {
  render() {
    return (
      <div className="root">
          <Header />
          <Main />
          <Footer />

      </div>
    );
  }
}

export default App;
