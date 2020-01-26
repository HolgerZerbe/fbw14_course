import React, {Component} from 'react';
import './App.css';
import Post from './Post';
import Header from './Header';
import TopPart from './TopPart';



class App extends Component {
state = {
         allImages : ["./Dagobert.jpg", "./Daisy.jpeg", "./OmaDuck.jpeg", "./Micky.jpeg", "./Minnie.jpeg ", "./TTT.jpeg", "./Goofy.jpeg", "./Donald.jpeg", "./Panzerknacker.jpeg", "./GustavGans.jpeg"]
        }

  render (){
    return (
            <>
      <div className="main">
      <Header />
      <hr />
      <TopPart />
        <div className = "bottomPart">
          {this.state.allImages.map(element => <Post key={element} url={element}></Post>)}
        </div>
      </div>
      </>
    );
  }
}
export default App;
