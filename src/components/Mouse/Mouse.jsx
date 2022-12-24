import React from 'react';

class Mouse extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            x: 0,
            y: 0,
            time: 0
        };
    }

    handlerMouseMove = (e) => {
        this.setState({
            x: e.pageX,
            y: e.pageY
        });
    }

    getRandomInt = (max) => {
        return Math.floor(Math.random() * max);
    }

    componentDidMount() {
        let startX = this.getRandomInt(1000);
        let startY = this.getRandomInt(700);
        let timer = this.getRandomInt(12);

        this.setState({
            x: startX,
            y: startY,
            time: timer
        })
    }

    render() {
        return (
            <div style={{ height: '100vh', top: '0' }} onMouseMove={this.handlerMouseMove}>
                {this.props.render(this.state)}
            </div>
        );
    }
}

export default Mouse;