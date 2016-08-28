'use strict';

import React from 'react';
import {Link, browserHistory} from 'react-router';

class App extends React.Component {
  render() {
    return <div>
      <h1>
        GFW REACT
      </h1>
      {this.props.loading &&
        <span>Loading</span>
      }
      <div className="content">
        {this.props.children}
      </div>
    </div>
  };
};

export default App;
