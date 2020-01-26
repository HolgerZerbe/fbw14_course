import React, { Component } from 'react'

export default class Main extends Component {

    state = {color: "dimgray"};

    componentDidMount() {
    
        const randomnumber = () => {
          return(Math.floor(Math.random()*255)+1);
        }
    
        setInterval(()=>{

          const rgb = 'rgb('+randomnumber()+','+randomnumber()+','+randomnumber()+')'
         
          this.setState({color: rgb})},2000
      )    

    }

    render() {
        return (
            <div className = "main" style= {{backgroundColor: this.state.color  }}>
                Main
            </div>
        )
    }
}
