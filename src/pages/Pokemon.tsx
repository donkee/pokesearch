import { Card, Col, Row } from 'antd';
import Meta from 'antd/lib/card/Meta';
import Text from 'antd/lib/typography/Text';
import { Pokemon } from 'pokenode-ts';
import * as React from 'react';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Pokedex } from '../utils/Pokedex';

const Pokemon: React.FC = () => {
  let params = useParams();
  const [pokemon, setPokemon] = useState<Pokemon>();

  useEffect(() => {
    if (params.pokemon) {
      Pokedex.getPokemonByName(params.pokemon).then((pkmn) => setPokemon(pkmn));
    }
  }, []);

  return pokemon ? (
    <section>
      <Card
        hoverable
        style={{ width: 240 }}
        cover={
          <img
            alt={pokemon.name}
            src={pokemon.sprites.other['official-artwork'].front_default!}
          />
        }
      >
        <Meta
          title={pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}
        />
        <Row>
          <Col span={24}>
            <Text type="secondary">Height: {pokemon.height}</Text>
          </Col>
        </Row>
        <Row>
          <Col span={24}>
            <Text type="secondary">Weight: {pokemon.weight}</Text>
          </Col>
        </Row>
      </Card>
    </section>
  ) : null;
};

export default Pokemon;
