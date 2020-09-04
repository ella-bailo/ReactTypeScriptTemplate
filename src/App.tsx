import React from 'react';
import logo from './logo.svg';
import {AddMember} from './AddMember';
import './App.scss';
import './header.scss';
import { Header } from './header';
import { Footer } from './footer';
import {AddBook} from './AddBook';
import {MemberList} from './membersList';
import {ManageMembers} from './ManageMembers'
import {
  BrowserRouter as Router, Switch, Route, Link, useParams
} from "react-router-dom";
import {BooksList} from "./BooksPage";
import {ManageBooks} from "./ManageBooks";


export const App = () => {
  return (
    <Router>
      <Header></Header>
      <Switch>
        <Route exact path='/'>
          <HomePage />
        </Route>
        <Route exact path="/books">
          <BooksList />
        </Route>
        <Route path="/books/:id">
          <ManageBooks />
        </Route>
        <Route exact path="/users">
          <MemberList />
        </Route>
        <Route exact path="/users/:id">
          <ManageMembers />

          </Route>
        <Route exact path="/add/book">
          

          <AddBook />
        </Route>
        <Route exact path="/add/member">
        <AddMember/>
        </Route>
        

            
      </Switch>
     
    </Router>
  );
}
function HomePage() {
  return <h2>Home</h2>;
}



export default App;