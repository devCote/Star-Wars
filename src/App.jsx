import React from 'react';
import Navbar from './components/Navbar';
import { Switch, Route, Redirect } from 'react-router-dom'
import Planets from './components/Planets'
import People from './components/People'
import Info from './components/Info'

function App() {

  return (
    <div className='App'>
      <h1 style={{ textAlign: 'center' }}>STAR WARS</h1>
      <div className='content'>
        <Navbar />
        <Switch>
          <Route exact path={'/'} render={() => <Redirect to='/planets' />} />
          <Route exact path={'/planets'} component={Planets} />
          <Route exact path={'/people'} component={People} />
          <Route exact path={'/info/:section/:itemName/'} component={Info} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
