import React from 'react';
import { VictoryChart, VictoryArea, VictoryTheme } from 'victory';
import PropTypes from 'prop-types';
import './Graph.css';

const Graph = ({ dataHelper, range, channelSet }) => {
  const data = dataHelper.filterDataForGraph(channelSet, range);
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

Graph.propTypes = {
  channelSet: PropTypes.string.isRequired,
  dataHelper: PropTypes.shape({
    data: PropTypes.shape({}),
    channels: PropTypes.array,
    GPSCoords: PropTypes.array,
    min: PropTypes.number,
    max: PropTypes.number,
  }).isRequired,
  range: Proptypes.shape([]).isRequired,
};
