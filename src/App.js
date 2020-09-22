import React from "react";
import {
  BrowserRouter as Router, // Вся логика роутинга
  Switch,
  Route, // указывает маршрут
  Link // создает HTML ссылку на страницу. Проверяет роутер и роутер проверяет наличие роута, загружая компонент без перезагрузки страницы
} from "react-router-dom";

import Users from './components/Users';
import User from './components/User';
import About from './components/Home';
import Home from './components/About';
import NotFound from './components/NotFound';

export default function App() {
  return (
    <Router>
      <Link to='/'>Home</Link>
      <Link to='/about'>About</Link>
      <Link to='/users'>Users</Link>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/users' render={(props) => <Users {...props} title={'Заголовок пользователей'} />} />
        <Route exact path='/user/:userId' component={User}></Route>
        <Route exact path='/about' component={About} />
        <Route component={NotFound}/>
      </Switch>
    </Router>
  );
}