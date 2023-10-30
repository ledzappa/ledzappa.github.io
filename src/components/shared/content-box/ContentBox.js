import React from 'react';

class ContentBox extends React.Component {
  render() {
    return (
      <div className="col-md-8 col-sm-10 animated fadeIn">
        <div>{this.props.children}</div>
      </div>
    );
  }
}

export default ContentBox;
