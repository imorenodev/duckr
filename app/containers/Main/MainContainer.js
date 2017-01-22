import React from 'react';
import { container, innerContainer } from './styles.css';
import { Navigation } from 'components';

const MainContainer = React.createClass({
  propTypes: {
    children: React.PropTypes.element
  },
  render () {
    return (
      <div className={container}>
        <Navigation isAuthed={false}/>
        <div className={innerContainer}>
          {this.props.children}
        </div>
      </div>
    );
  }
});

export default MainContainer;
