import React, {Component} from 'react';
import { connect } from 'react-redux';
import './App.css';
import A from './A'
import C from './C'
import D from './D'
import E from './E'

class App extends Component {
  render (){
    return (
      <div>
        <A />
        <C />
      <hr />
      a = {this.props.a}
      <hr />
      b = {this.props.b}
      <hr />
      c = {this.props.c}

      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  a: state.reducer1.a, 
  b: state.reducer2.b,
  c: state.reducer2.c
})


export default connect(mapStateToProps, null)(App);