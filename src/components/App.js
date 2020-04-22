import React, { useReducer } from "react";

import 'babel-polyfill';

import styles from './App.css'
//route
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import ContextProvider from './context/contextProvider'

//pages
import Cards from './pages/cards/Cards'
import Chart from './pages/chart/Chart'
import CountryPicker from './pages/countryPicker/CountryPicker'

const App = () => {
  // const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div className={ styles.Container }>
        <ContextProvider>
           <Cards />
           <CountryPicker />
           <Chart />
        </ContextProvider>
    </div>
  );
};

export default App;
