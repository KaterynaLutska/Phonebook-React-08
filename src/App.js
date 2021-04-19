import './App.css';
import { Component, Suspense, lazy } from 'react';
import { Switch } from 'react-router-dom';
import { authOperations } from './redux/auth';
import { connect } from 'react-redux';

import Container from './components/Container/Container';
import PrivateRoute from './components/PrivateRoute/PrivaeRoute';
import PublicRoute from './components/PublicRoute/PublicRoute';
import MenuBar from './components/MenuBar';
import Footer from './components/Footer';

const HomeView = lazy(() => import('./views/HomeView'));
const RegisterView = lazy(() => import('./views/RegisterView'));
const LoginView = lazy(() => import('./views/LoginView'));
const PhonebookView = lazy(() => import('./views/PhonebookView'));

class App extends Component {
  componentDidMount() {
    this.props.onGetCurrentUser();
  }
  render() {
    return (
      <div className="App">
        <MenuBar />
        <Container>
          <Suspense fallback={<p>Loading...</p>}>
            <Switch>
              <PublicRoute exact path="/" component={HomeView} />
              <PublicRoute
                path="/login"
                restricted
                redirectTo={'/'}
                component={LoginView}
              />
              <PublicRoute
                path="/register"
                restricted
                redirectTo={'/'}
                component={RegisterView}
              />
              <PrivateRoute
                path="/contacts"
                redirectTo={'/login'}
                component={PhonebookView}
              />
            </Switch>
          </Suspense>
        </Container>
        <Footer />
      </div>
    );
  }
}

const mapDispatchToProps = {
  onGetCurrentUser: authOperations.getCurrentUser,
};

export default connect(null, mapDispatchToProps)(App);
