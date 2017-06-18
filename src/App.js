import React, { Component } from 'react';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import { Router, Scene } from 'react-native-router-flux';
import { composeWithDevTools } from 'remote-redux-devtools';

import reducers from './reducers';
import sagas from './sagas';
import Welcome from './components/Welcome';
import RepoList from './containers/RepoList';
import RepoInfo from './containers/RepoInfo';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(
  reducers,
  composeWithDevTools(applyMiddleware(sagaMiddleware))
);

for(let saga of sagas){
  sagaMiddleware.run(saga);
}

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router hideNavBar>
          <Scene key="root">
            <Scene key="Welcome" component={Welcome} title="Welcome" initial={true} />
            <Scene key="RepoList" component={RepoList} title="RepoList" />
            <Scene key="RepoInfo" component={RepoInfo} title="RepoInfo" />
          </Scene>
        </Router>
      </Provider>
    );
  }
}
