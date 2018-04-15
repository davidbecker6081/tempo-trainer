import React from 'react';
import Total from '../../components/Total/Total';
import './TotalsView.css';

const TotalsView = ({ dataHelper }) =>
  (
    <section>
      <Total dataHelper={dataHelper} channelSet="millisecondOffset" />
      <Total dataHelper={dataHelper} channelSet="distance" />
      <Total dataHelper={dataHelper} channelSet="elevation" />
    </section>
  );

export default TotalsView;
