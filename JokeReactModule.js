import React, { Component } from 'react';
import * as ReactDOM from 'react-dom';

class JokeTimer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentJoke: null
        };
    }

    componentDidMount() {
        this.interval = setInterval( () => {
            fetch('https://api.npms.io/v2/search?q=react')
                .then(response => response.json())
                .then(data => this.setState({ currentJoke: response.joke }));
        },
        1000)
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    render() {
        return (
            <div class="row column">
                <h2>
                    Here is the Joke for this second!
                </h2>
                Joke: {this.state.currentJoke}
            </div>
        );
    }
}

ReactDOM.render(
    <JokeTimer/>, document.getElementById('joke-timer')
);
