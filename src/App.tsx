import { Layout } from 'antd';
import { Content, Header } from 'antd/lib/layout/layout';
import Text from 'antd/lib/typography/Text';
import * as React from 'react';
import { Route, Routes } from 'react-router-dom';
import logo from '../assets/logo.png';
import './App.scss';
import Home from './pages/Home';
import Pokemon from './pages/Pokemon';

const App: React.FC = () => {
  return (
    <Layout>
      <Header>
        <div className="logo">
          <img alt="PokéSearch" src={logo} />
          <Text className="site-name">PokéSearch</Text>
        </div>
      </Header>
      <Content>
        <main className="App">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="pokemon/:pokemon" element={<Pokemon />} />
          </Routes>
        </main>
      </Content>
    </Layout>
  );
};

export default App;
