import React from 'react';
import { VictoryChart, VictoryArea, VictoryTheme } from 'victory';
import PropTypes from 'prop-types';
import './Graph.css';

const Graph = ({ dataHelper, range, channelSet }) => {
  const data = dataHelper.filterDataForGraph(channelSet, range);

  return (
    <article className="graph-container">
      <VictoryChart theme={VictoryTheme.material}>
        <VictoryArea
          style={{ data: { fill: '#4EE46F' } }}
          data={data}
          barRatio={0.8}
          x="time"
          y={channelSet}
        />
      </VictoryChart>
    </article>
  );
};

export default Graph;

Graph.propTypes = {
  channelSet: PropTypes.string.isRequired,
  dataHelper: PropTypes.shape({
    originalData: PropTypes.shape({}),
    minuteData: PropTypes.arrayOf(PropTypes.shape({})),
    channels: PropTypes.arrayOf(PropTypes.string),
    GPSCoords: PropTypes.arrayOf(PropTypes.shape({})),
  }).isRequired,
  range: PropTypes.arrayOf(PropTypes.number).isRequired,
};
