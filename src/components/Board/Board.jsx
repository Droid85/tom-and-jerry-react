import React from 'react';
import Cat from '../Cat/Cat.jsx';
import Mouse from '../Mouse/Mouse.jsx';
import './Board.css';

class Board extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            cats: [{id: 0, name: 'Tom'}],
        }
    }

    getRandomInt = (max) => {
        return Math.floor(Math.random() * max);
    }

    componentDidMount() {
        let catsNum = this.getRandomInt(10);
        let catsArr = [];

        for (let i = 0; i < catsNum; i++) {
            catsArr.push({id: Math.random(), name: 'Tom' + '-' + i})
        }

        this.setState({
            cats: catsArr
        })
    }

    render () {
        return (
            <section id='board' className='board-section'>
                <Mouse render={mouse => (
                    <Cat mouse={mouse} />
                )} />
            </section>
        )
    }
}

export default Board;
