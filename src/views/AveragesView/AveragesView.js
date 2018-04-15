import React from 'react';
import Average from '../../components/Average/Average';
import './AveragesView.css';

const AveragesView = ({ dataHelper }) =>
  (
    <section>
      <Average dataHelper={dataHelper} channelSet="power" />
      <Average dataHelper={dataHelper} channelSet="heartRate" />
      <Average dataHelper={dataHelper} channelSet="cadence" />
      <Average dataHelper={dataHelper} channelSet="temperature" />
      <Average dataHelper={dataHelper} channelSet="elevation" />
      <Average dataHelper={dataHelper} channelSet="speed" />
    </section>
  );

export default AveragesView;
