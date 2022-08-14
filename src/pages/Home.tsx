import Search from 'antd/lib/input/Search';
import Title from 'antd/lib/typography/Title';
import * as React from 'react';
import { useNavigate } from 'react-router-dom';

const Home: React.FC = () => {
  let navigate = useNavigate();

  const onSearch = (value: string) => {
    navigate(`pokemon/${value}`);
  };

  return (
    <section>
      <Title>Welcome to PokéSearch!</Title>
      <Search placeholder="Search" onSearch={onSearch} enterButton />
    </section>
  );
};

export default Home;
