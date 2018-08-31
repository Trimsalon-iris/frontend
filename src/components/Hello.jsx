import React from 'react';
import { Link } from 'react-router-dom';

const Hello = () => {
  return (
    <div>
      <div>Hello!</div>
      <Link to="/">Go back!</Link>
    </div>
  );
};

export default Hello;
