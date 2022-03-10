import logo from './logo.svg';
import './App.css';
import { Component } from 'react';
import Navbar from './components/Navbar';
import News from './components/News';

class App extends Component{
 c = 'Prabhjot';
  render(){

    return(
      <>
      
      <Navbar title='NewsApp' />
     
      <News />
   
      </>
    )
  }

}

export default App;
