import { ResponsiveBar } from '@nivo/bar';
import * as React from 'react';
import './Types.scss';

const Types = () => {
  return (
    <section className="types-page">
      <ResponsiveBar
        data={[{ normal: 50, flying: 100 }]}
        keys={['normal', 'flying']}
        groupMode="grouped"
      />
    </section>
  );
};

export default Types;
