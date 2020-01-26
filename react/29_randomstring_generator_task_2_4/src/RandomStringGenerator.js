import React, { Component } from 'react'

export default class RandomStringGenerator extends Component {
   
    constructor(props) {
        super(props);

        this.state = {randomString : "",
                    stringLength:0}
    }
   
    generateRandomString = (n) => {
        const alpha = "abcdefghijklmnopqrstuvwxyz";
        let newRandomString="";
        for (let i = 0; i<n; i++) {
            newRandomString += alpha.charAt(Math.floor(Math.random()*alpha.length))
        }
        return newRandomString;
    }

   componentDidMount() {
       this.setState({randomString:
       this.generateRandomString(this.props.stringLength)
    })
   }

   shouldComponentUpdate(nextProps, prevState) {

        if (nextProps.stringLength!==prevState.stringLength) {
            console.log(`ungleich`)
            return true;
            }
            
            return false;
        }

    componentDidUpdate(prevProps, prevState) {
       
        this.setState({
            randomString: this.generateRandomString(this.props.stringLength),
            stringLength: this.props.stringLength
        })
       
    }


    render() {
        
        return (
            <div >
                {this.state.randomString}
            </div>
        )
    }
}
