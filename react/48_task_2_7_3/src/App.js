import React, {Component} from 'react';
import './App.css';
import Comments from './Comments';
import NewComment from './NewComment';


class App extends Component {

  render (){
    return (
      <div style = {{display: "flex", justifyContent: "space-between", height:"100%"}} >
      <Comments />
      <NewComment />
      </div>
    );
  }
}
export default App;
