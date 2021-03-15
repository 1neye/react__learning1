import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import Dialogs from './components/Dialogs/Dialogs';
import {Route } from "react-router-dom";
import MainContainer from './components/Main/MainContainer';
import UsersContainer from './components/Users/UsersContainer'
import LearnJs from "./components/LearnJs/LearnJs";

const App = (props) => {
  return (
      <div className='app-wrapper'>
        <Header />
        <div className='flex-row'>
          <Sidebar />
          <Route path='/Main' render={ () => <MainContainer />} />
          <Route path='/Dialogs' render={ () => <Dialogs />} />
          <Route path='/Users' render={ () => <UsersContainer />} />
          <Route path='/LearnJS' render={ () => <LearnJs />} />
        </div>
      </div>
  );
}

export default App;
