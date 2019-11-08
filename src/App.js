import React, {Component} from 'react';
import './App.css';
import Header from './Header/Header';
import Footer from './Footer/footer';
import Apicall from './apicall/apicall';

class App extends Component {
  render(){
  return (
    <div className="App">
      <Header />
      <Apicall />
      <Footer />
    </div>
  )}
}

export default App;
