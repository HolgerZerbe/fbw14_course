import React, { Component } from 'react'
import Article from './Article'

export default class Content extends Component {
    render() {
        
        return (
            <div className="contentDiv">
                <Article></Article>
                <Article></Article>
                <Article></Article>
            </div>
        )
    }
}
