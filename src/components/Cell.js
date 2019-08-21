import React from 'react';

class Cell extends React.Component {
  constructor(props) {
    super(props);
    this.state = {mine: false};
  }

  render() {
    return (
      <div className="cell">c</div>
    );
  }
  
};

export default Cell;