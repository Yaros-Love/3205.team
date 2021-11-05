import React from 'react';
import Converter from '../converter/converter';
import CurrentRate from '../current-rate/current-rate';

const App = () => {
  return(
    <React.Fragment>
      <Converter/>
      <CurrentRate/>
    </React.Fragment>
  );
};

export default App;