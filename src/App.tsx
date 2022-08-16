import { Layout, Menu } from 'antd';
import { Content, Header } from 'antd/lib/layout/layout';
import Text from 'antd/lib/typography/Text';
import * as React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import logo from '../assets/logo.png';
import './App.scss';
import Home from './pages/Home';
import Pkmn from './pages/Pkmn';
import Types from './pages/Types';

const App = () => {
  return (
    <Layout style={{ height: '100%' }}>
      <Header>
        <div className="logo">
          <Link to="/">
            <img alt="PokéSearch" src={logo} />
          </Link>
          <Text className="site-name">PokéSearch</Text>
        </div>
        <Menu
          className="menu"
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={['home']}
          items={[
            { label: 'Home', key: 'home' },
            { label: 'Types', key: 'types' }
          ]}
        />
      </Header>
      <Content>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="pokemon/:pokemon" element={<Pkmn />} />
          <Route path="types" element={<Types />} />
        </Routes>
      </Content>
    </Layout>
  );
};

export default App;
