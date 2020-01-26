import React, { Component } from 'react';
import randomstring from 'randomstring';
// const randomstring = require ('randomstring');

const myRandomstring = (number) => {
    let result="";
    const characters="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789                    ";
 
    for (let i=0; i<number; i++) {
        result += characters.charAt(Math.floor(Math.random()* characters.length));
    }
    return result;
}


export default class Article extends Component {
    render() {
        return (
            <div className="articleDiv">
                {randomstring.generate(25)}
                <hr />
                {myRandomstring(25)}
            </div>
        )
    }
}
