import React,{useState} from 'react';
import './App.scss';
import { DataTable,Pagination } from 'carbon-components-react';
import SideNavigation from './sideNav';

import { Button } from 'carbon-components-react';
import {Download24} from '@carbon/icons-react';
import {Edit24} from '@carbon/icons-react';
import {Settings24} from '@carbon/icons-react';
import Header from './Components/Home/header';

import HomeContent from './Components/content/content.jsx/content';
function App() {
 
  return (
    <div className="App">
      <Header/>
      <HomeContent/>
    </div>
  );
}

export default App;
