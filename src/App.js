import './App.css';
import Home from './Components/Home/Home'
import Coins from './Components/Coins/Coins'
import Coin from './Components/Coin/Coin'

import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom'

function App() {
  return (
    <Router>
      
      <ul className='nav-menu'>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/coins">Coins</Link>
        </li>
      </ul>

      <Switch>

        <Route path='/' exact>
          <Home/>
        </Route>

        <Route path='/coins' exact>
          <Coins/>
        </Route>

        <Route path='/coin/:id' exact>
          <Coin/>
        </Route>

        <Route path='*' exact>
          <div>404 page</div>
        </Route>

      </Switch>
    </Router>
  );
}

export default App;
