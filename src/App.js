import React, { Component } from 'react';
import logo from './logo.svg';
import { Link , Switch, Route } from 'react-router-dom';

import AdminView from './AdminView';
import UserView from './UserView';

class App extends Component {
  render() {
    return(
      <div>
        <header>
          <nav>
            <ul>
              <li><Link to='/'>User View</Link></li>
              <li><Link to='/adminView'>Admin View</Link></li>
            </ul>
          </nav>
        </header>

      <main>
        <Switch>
          <Route exact path='/' component={UserView}/>
          <Route path='/adminView' component={AdminView}/>
        </Switch>
      </main>

    </div>
    );
  }
}

export default App;
