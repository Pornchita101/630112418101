import React from 'react';

class Car extends React.Component{
  constructor(props){
    super(props);
    this.state = 25;
  }
  render(){
    return <p>Hello class {this.state} {this.props} </p>;   
  }
}
ReactDOM.render(<Car/>, document.getElementById("root"));