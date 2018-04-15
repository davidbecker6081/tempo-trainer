import React, { Component } from 'react';
import { VictoryChart, VictoryArea, VictoryTheme, VictoryAxis, VictoryLabel, VictoryBar } from 'victory';
import './Graph.css';

const Graph = ({ dataHelper, range, channelSet }) => {
  const data = dataHelper.filterDataForGraph(channelSet);
  // const tickValues = data.filter(point => range[range.length - 1] / 10;
  return (
    <div>
      <VictoryChart theme={VictoryTheme.material}>
        <VictoryArea
          style={{ data: { fill: '#0000AA' } }}
          data={data}
          barRatio={0.8}
          x="time"
          y={channelSet}
        />
      </VictoryChart>
    </div>
  );
};

export default Graph;
