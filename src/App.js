import React from 'react';
import { Route } from 'react-router';
import { EditTemplate, TemplateList } from './pages';

import './App.css';

function App() {
  return (
    <>
      <Route exact path={'/'} component={TemplateList} />
      <Route exact path={'/edit'} component={EditTemplate} />
    </>
  );
}

export default App;
