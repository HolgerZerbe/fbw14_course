import React, { Component } from 'react'

export const MyContext = React.createContext();

const reducer = (state, action) => {
    switch(action.type) {
        case 'INCREMENT_X':
            return {
                ...state,
                x: state.x +1
            };
        case 'DECREMENT_Y':
            return {
                ...state,
                y: state.y -1
            };


        default:
            return state
    }
}



export class MyProvider extends Component {
    state = {
        x:0,
        y:0,
        dispatch: (action) => {
            // 2. form von setState erwartet als Parameter eine Funktion
            // diese Funktion wird von react mit dem parameter previousState
            // aufgerufen
            this.setState(state => reducer(state, action))
        }
    }



    render() {
        return (<MyContext.Provider value={this.state}>
            {this.props.children}
        </MyContext.Provider>
            
          
        )
    }
}
