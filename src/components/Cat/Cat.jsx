import React from 'react';
import './Cat.css';

class Cat extends React.Component {
    render () {
        let mouseCoords = this.props.mouse;

        return (
            <div className='cat-img' style={{ left: mouseCoords.x, top: mouseCoords.y, transition: `${mouseCoords.time}s` }}></div>
        )
    }
}

export default Cat;
