import React, {Component} from 'react';
import './App.css';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

class App extends Component {

    state = {
      modal: false
    }
      toggle() {
      this.setState(prevState => ({
        modal: !prevState.modal
      }));
    }


  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     modal: false
  //   };

  //   this.toggle = this.toggle.bind(this);
  // }


  // toggle() {
  //   console.log(this)
  //   this.setState(prevState => ({
  //     modal: !prevState.modal
  //   }));
  // }

  // state = {
  //   xyz : true
  // }


  // change =() => {
  //   {this.state.xyz ? this.setState({xyz: false}): this.setState({xyz:true})}
  // }


  render (){
    return (
      <div>
        {/* Hallo Reactstrap
        <br />
        <Button color="outline-warning">Warnung</Button>

        <Button color="danger" onClick={this.toggle}>Open Modal</Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}>Modal title</ModalHeader>
          <ModalBody>
            ModalBody
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.toggle}>CTA</Button>
            <Button color="secondary" onClick={this.toggle}>Cancel</Button>
          </ModalFooter>
        </Modal> */}

      <Button color="danger" onClick={this.toggle.bind(this)}>Open Modal</Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle.bind(this)} className={this.props.className}>
          <ModalHeader toggle={this.toggle.bind(this)}>Modal title</ModalHeader>
          <ModalBody>
            ModalBody
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.toggle.bind(this)}>CTA</Button>
            <Button color="secondary" onClick={this.toggle.bind(this)}>Cancel</Button>
          </ModalFooter>
        </Modal> 


        {/* {this.state.xyz ? <h1>it is true</h1>: <h1>it is false</h1>}
        {/* <button onClick = {()=>this.change()}>change</button> */}
        {/* <button onClick = {this.change.bind(this)}>change</button> */} 

      </div>
    );
  }
}
export default App;
