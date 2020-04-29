import React from 'react';
import { 
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import CharacterList from '../../containers/CharacterList/CharacterList';
import CharacterInfo from '../../containers/CharacterInfo/CharacterInfo';
import Header from '../Header/Header';

export default function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/:page?" component={CharacterList} />
        <Route exact path="/detail/:id?" component={CharacterInfo} />
      </Switch>
    </Router>
  );
}
