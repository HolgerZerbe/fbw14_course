import React, {Component} from 'react';
import './App.css';

class App extends Component {

  iframeRef= React.createRef();

  componentDidMount(){
    this.iframeRef.current.width = "560"
    this.iframeRef.current.height = "315"
    this.iframeRef.current.frameborder = "0"
    this.iframeRef.current.allow = "accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
    this.iframeRef.current.allowFullScreen= true
    this.iframeRef.current.src= "https://www.youtube.com/embed/Urw-iutHw5E?autoplay=1&enablejsapi=1&loop=1&playlist=Urw-iutHw5E";
  }

newScr = (AorB) => {
  if(AorB==="a"){
    this.iframeRef.current.src= "https://www.youtube.com/embed/Urw-iutHw5E?autoplay=1&enablejsapi=1&loop=1&playlist=Urw-iutHw5E";
  }
  if(AorB==="b"){
    this.iframeRef.current.src = "https://www.youtube.com/embed/eMcIqcXQuhA?autoplay=1&loop=1&playlist=eMcIqcXQuhA"
  }
}



  render (){
    return (
      <div>
        <iframe ref={this.iframeRef} />
        <hr />  
        <button onClick={()=>this.newScr("a")}>Jeanny</button>
        <button onClick={()=>this.newScr("b")}>Jeanny - Coming Home</button>
      </div>
    );
  }
}
export default App;
