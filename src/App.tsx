import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Layout from './components/Layout';
import SideBar from './components/SideBar';
import UserSearch from './components/UserSearch';
import Account from './components/Accounts';

const App: React.FC = () => {
  return (
    <Layout>
      <Header/>
      <SideBar />
      <Switch>
        <Route path="/" exact component={UserSearch}/>
        <Route path="/accounts/:id" component={Account}/>
      </Switch>
    </Layout>
  )
};

export default App;