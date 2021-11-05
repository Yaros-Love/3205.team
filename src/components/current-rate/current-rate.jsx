import React from "react";
import {Link} from 'react-router-dom'

const CurrentRate = () => {
  return (
    <React.Fragment>
      <main>
        <h1>Current Rate</h1>
        <button>
          <Link to="/">to converter</Link>
        </button>
      </main>
    </React.Fragment>
  );
};

export default CurrentRate;