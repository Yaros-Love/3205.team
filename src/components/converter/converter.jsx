import React from "react";
import {Link} from 'react-router-dom'

const Converter = () => {
  return (
    <React.Fragment>
      <main>
        <h1>Converter</h1>
        <button>
          <Link to="/current-rate">to current rate</Link>
        </button>
      </main>
    </React.Fragment>
  );
};

export default Converter;