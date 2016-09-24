'use strict';

import React from 'react';
import {Link, browserHistory} from 'react-router';

class AppView extends React.Component {
  render() {
    return <div>
      {this.props.loading &&
        <span>Loading</span>
      }
      <div className="content">
        {this.props.children}
      </div>
    </div>
  };
};

export default AppView;
