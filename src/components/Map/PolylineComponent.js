import React from 'react';

const PolylineComponent = ({ Polyline, coords }) =>
  (
    <div>
      <Polyline
        path={coords}
        strokeColor="#00FFBB"
        strokeOpacity={0.5}
        strokeWeight={2}
      />
    </div>
  );

export default PolylineComponent;
