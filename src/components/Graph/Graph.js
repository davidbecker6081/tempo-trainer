import React, { Component } from 'react';
import { VictoryChart, VictoryArea, VictoryTheme } from 'victory';
import './Graph.css';

const Graph = ({ dataHelper, range, channelSet }) => {
  const data = dataHelper.filterDataForGraph(channelSet);
  console.log(data);
  return (
    <div>
      <VictoryChart theme={VictoryTheme.material}>
        <VictoryArea
          style={{ data: { fill: '#c43a31' } }}
          data={data}
          x="time"
          y={channelSet}
        />
      </VictoryChart>
    </div>
  );
};

export default Graph;
