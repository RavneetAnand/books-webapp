import { connect } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import './App.css';

import BookGrid from './components/book-grid';
import Login from './components/login';

const mapStateToProps = (state) => {
  return {
    currentUser: state.userReducer.user
  }
};

export const App = ({currentUser}) => {
  return (
      <Router>
        <div>
          <div className="container mt-3">
            <Switch>
              <Route exact path={["/", "/login"]} component={Login} />
              <Route path="/books" component={BookGrid} />
            </Switch>
          </div>
        </div>
      </Router>
  );
}

export default connect(mapStateToProps)(App);