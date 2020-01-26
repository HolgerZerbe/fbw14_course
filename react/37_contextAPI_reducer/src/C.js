import React, { Component } from 'react'
import {MyContext} from './context';

export default class C extends Component {
    render() {
        return (
            <MyContext.Consumer>
                {
                    (context) => (
                    <div>
                        {JSON.stringify(context.state)}
                        <br />
                        {context.x}
                        <button onClick ={() => context.dispatch({type:'INCREMENT_X'})}>Increment X</button>
                    </div>
                    )
                }
            </MyContext.Consumer>
        )
    }
}
