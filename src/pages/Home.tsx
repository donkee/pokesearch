import Search from 'antd/lib/input/Search';
import Title from 'antd/lib/typography/Title';
import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.scss';

const Home = () => {
  let navigate = useNavigate();

  const onSearch = (value: string) => {
    navigate(`pokemon/${value}`);
  };

  return (
    <section className="home">
      <Title>Welcome to PokéSearch!</Title>
      <Search
        placeholder="Search"
        onSearch={onSearch}
        enterButton
        className="search"
      />
    </section>
  );
};

export default Home;
