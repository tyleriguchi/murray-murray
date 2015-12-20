require('normalize.css');
require('styles/App.scss');

import React from 'react';
import FillMurrayContainer from './FillMurray/container';

class AppComponent extends React.Component {
  render() {
    return (
      <FillMurrayContainer />
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
