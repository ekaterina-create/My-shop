import React from 'react';
import { Route } from 'react-router';
import Header from './components/Header/Header';
import {Home, Cart, Women} from './pages';
import Footer from './components/Footer/Footer.jsx'
import Men from './pages/Men';
import Shoes from './pages/Shoes';
import Accessories from './pages/Accessories';
import TopButton from './components/TopButton/TopButton';


function App() {

  return (
   
  <div className="wrapper">
  <Header/>
  <div className="content">
    <Route path='/' component={Home} exact/>
    <Route path='/cart' component={Cart} exact/>
    <Route path='/women' component={Women} exact/>
    <Route path='/men' component={Men} exact/>
    <Route path='/shoes' component={Shoes} exact/>
    <Route path='/accessories' component={ Accessories} exact/>
    <TopButton/>
  </div>
  <Footer/>  
</div>
  );
}


export default App;
