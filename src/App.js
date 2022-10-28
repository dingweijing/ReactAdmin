import './App.less';
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Login from './pages/login';
import Admin from './pages/admin';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          {/* 只匹配其中一个 */}
          <Route path='/' exact component={Admin}></Route>
          <Route path='/login' exact component={Login}></Route>
        </Switch>
      </BrowserRouter>
    )
  }
}

export default App;
