import React, { lazy, Suspense } from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom'

function App() {
  const DisplayProduct = lazy(() => import('./Components/DisplayProduct'))
  
  return (
    <Suspense fallback>
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Switch>
          <Route exact path='/' render={() => <DisplayProduct/>} />


        </Switch>
      </BrowserRouter>
    </Suspense>
  );
}

export default App;
