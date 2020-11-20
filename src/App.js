import React from 'react';
import { Switch, Route } from 'react-router-dom';

import './App.css';

import TranslatePage from './pages/translate/translate.component';

function App() {

  fetch('/translations')
    .then(response => console.log(response))

  return (
    <div>
      <Switch>
        <Route exact path='/' component={TranslatePage} />
      </Switch>
    </div>
  );
}


export default App;