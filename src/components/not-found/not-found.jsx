import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage = () => {
  return (
    <React.Fragment>
      <h1>Page Not Found 404</h1>
      <button>
        <Link to='/'>To main page</Link>
      </button>
    </React.Fragment>
  );
};

export default NotFoundPage;