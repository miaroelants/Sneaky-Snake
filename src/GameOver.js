import React from 'react'
import { connect } from 'react-redux'
import GameOverText from './GameOverText'
import { newGame } from './store'

/*    
document.onkeydown = checkKey;
function checkKey(e) {
    e = e || window.event;
    if (e.keyCode === 32) {
        // space button
        Store.dispatch(newGame())
    } */



// component
class GameOver extends React.Component {
    //constructor
    constructor(props) {
        super(props);
        this.handleSpace = this.handleSpace.bind(this)
    }

    handleSpace(event) {
        if (event.keyCode === 32) {
            this.props.newGame()
        }
    }

    //lifecycle methods
    componentDidMount() {
        document.addEventListener("keydown", this.handleSpace)
    }
    componentWillUnmount() {
        document.removeEventListener("keydown", this.handleSpace)
    }

    //render
    render() {
        return (
            <div id="gameover" >
                <GameOverText />
            </div>
        )
    }
}

// StateToProps
const mapDispatchToProps = (dispatch) => {
    return {
        newGame: () => dispatch(newGame()),
    }
}

// connect
export default connect(null, mapDispatchToProps)(GameOver)

