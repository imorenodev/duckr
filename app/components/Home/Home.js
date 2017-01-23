import React, { PropTypes } from 'react';
import { container, title, slogan } from './styles.css';

Home.propTypes = {
};

export default function Home (props) {
  return (
    <div className={container}>
      <p className={title}>{'Duckr'}</p>
      <p className={slogan}>{'Twitter Clone'}</p>
    </div>
  );
};
